import { NextResponse } from "next/server";
import { GetAllReposCommits, GetConsistencyPercentage, GetStars, Repository } from "../_ghApi/api";

export async function GET() {
  const [Commits, stars, consistencyPercent] = await Promise.all([
    GetAllReposCommits(),
    GetStars(20),
    GetConsistencyPercentage()
  ])
  return NextResponse.json({
    "commits": Commits,
    "stars": stars.data.length,
    "consistencyPercent": consistencyPercent
  })
}