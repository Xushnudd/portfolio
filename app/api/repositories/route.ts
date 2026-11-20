import { NextResponse } from "next/server";
import { GetAllReposCommits, GetAllReposDetails, GetAllReposWithLanguages, GetConsistencyPercentage, GetStars, Repository } from "../_ghApi/api";

export async function GET() {
  const [
    Commits,
    stars,
    consistencyPercent,
    repos,
    reposLanguage,
    repoDetails
  ] = await Promise.all([
    GetAllReposCommits(),
    GetStars(20),
    GetConsistencyPercentage(),
    Repository(20),
    GetAllReposWithLanguages(),
    GetAllReposDetails()
  ])
  return NextResponse.json({
    "commits": Commits,
    "stars": stars.data.length,
    "consistencyPercent": consistencyPercent,
    "repos": repos,
    "reposLanguage": reposLanguage,
    "repoDetails": repoDetails
  })
}