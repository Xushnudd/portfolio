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

export async function Repository() {
  const user = await GetMe()
  if (user === "error") return user

  const { data } = await octokit.rest.repos.listForUser({
    username: user.login,
    sort: 'updated',
    per_page: 20
  })
  
  return data
}