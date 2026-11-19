import { NextResponse } from "next/server";
import { GetAllReposCommits, GetAllReposWithLanguages, GetConsistencyPercentage, GetStars, Repository } from "../_ghApi/api";

export async function GET() {
  const [
    Commits,
    stars,
    consistencyPercent,
    repos,
    reposLanguage
  ] = await Promise.all([
    GetAllReposCommits(),
    GetStars(20),
    GetConsistencyPercentage(),
    Repository(20),
    GetAllReposWithLanguages()
  ])
  return NextResponse.json({
    "commits": Commits,
    "stars": stars.data.length,
    "consistencyPercent": consistencyPercent,
    "repos": repos,
    "reposLanguage": reposLanguage
  })
}