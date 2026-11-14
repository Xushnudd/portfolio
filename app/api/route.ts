import { NextResponse } from "next/server";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: process.env.GH_TOKEN
});

async function GetMyProfile() {
  try {
    const { data } = await octokit.rest.users.getAuthenticated();
    return data.name;
  } catch {
    return "error";
  }
}

export async function GET() {
  const profile = await GetMyProfile();
  return NextResponse.json({"me": profile})
}