import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN
});

export async function GetMe() {
  const { data } = await octokit.rest.users.getAuthenticated()
  try {
    return data
  } catch {
    return "error"
  }
}

export async function Repository(num: number) {
  const user = await GetMe()
  if (user === "error") return user

  const { data } = await octokit.rest.repos.listForUser({
    username: user.login,
    sort: 'updated',
    per_page: num
  })
  
  return data
}

export async function GetStars(num: number) {
  const responce = await octokit.rest.activity.listReposStarredByAuthenticatedUser({
    per_page: num,
    sort: "created"
  })

  return responce
}

export async function GetAllReposCommits() {
  try {
    const data = await octokit.graphql<{
      viewer: {
        repositories: {
          nodes: Array<{
            name: string
            defaultBranchRef?: {
              target?: {
                history?: { totalCount: number } | null
              } | null
            } | null
          }>
        }
      }
    }>(`
      query {
        viewer {
          repositories(first: 100, ownerAffiliations: OWNER, orderBy: {field: UPDATED_AT, direction: DESC}) {
            nodes {
              name
              defaultBranchRef {
                target {
                  ... on Commit {
                    history {
                      totalCount
                    }
                  }
                }
              }
            }
          }
        }
      }
    `)

    const repos = data.viewer.repositories.nodes
    let totalAllCommits = 0

    const repoStats = repos.map((repo) => {
      const commits = repo.defaultBranchRef?.target?.history?.totalCount ?? 0
      totalAllCommits += commits

      return {
        repo: repo.name,
        commits: commits,
      }
    })

    return {
      totalRepos: repoStats.length,
      totalAllCommits,
      repos: repoStats,
    }
  } catch {
    return "error"
  }
}

export async function GetConsistencyPercentage(): Promise<number | string> {
  try {
    const data = await octokit.graphql<{
      viewer: {
        contributionsCollection: {
          contributionCalendar: {
            weeks: Array<{
              contributionDays: Array<{ contributionCount: number }>
            }>
          }
        }
      }
    }>(`
      query {
        viewer {
          contributionsCollection {
            contributionCalendar {
              weeks {
                contributionDays {
                  contributionCount
                }
              }
            }
          }
        }
      }
    `);

    const days = data.viewer.contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: { contributionDays: { contributionCount: number }[] }) => week.contributionDays
    );

    const totalDays = days.length; // Odatda 365 yoki 366 kun
    if (totalDays === 0) return 0;

    const activeDays = days.filter((day) => day.contributionCount > 0).length;
    const percentage = (activeDays / totalDays) * 100;

    return Number(percentage.toFixed(1)); // Masalan: 65.5 (%)
  } catch (error) {
    console.error("Xatolik:", error);
    return "error";
  }
}