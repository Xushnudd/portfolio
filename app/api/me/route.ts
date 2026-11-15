import { NextResponse } from "next/server";
import { GetMe } from "../_ghApi/api";

export async function GET() {
  return NextResponse.json({
    "data": await GetMe()
  })
}