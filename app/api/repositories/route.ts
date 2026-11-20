import { NextResponse } from "next/server";
import { cacheLife } from "next/cache";
import {
  GetAllReposCommits,
  GetAllReposDetails,
  GetAllReposWithLanguages,
  GetConsistencyPercentage,
  GetStars,
  Repository,
} from "../_ghApi/api";

async function getCachedRepositoriesData() {
  "use cache";
  cacheLife("minutes");

  const [
    commits,
    stars,
    consistencyPercent,
    repos,
    reposLanguage,
    repoDetails,
  ] = await Promise.all([
    GetAllReposCommits(),
    GetStars(20),
    GetConsistencyPercentage(),
    Repository(20),
    GetAllReposWithLanguages(),
    GetAllReposDetails(),
  ]);

  return {
    commits,
    stars: stars.data.length,
    consistencyPercent,
    repos,
    reposLanguage,
    repoDetails,
  };
}

export async function GET() {
  const payload = await getCachedRepositoriesData();
  return NextResponse.json(payload);
}