import { NextResponse } from "next/server";
import { cacheLife } from "next/cache";
import { GetMe } from "../_ghApi/api";

async function getCachedMe() {
  "use cache";
  cacheLife("minutes");

  return await GetMe();
}

export async function GET() {
  const data = await getCachedMe();
  return NextResponse.json({ data });
}