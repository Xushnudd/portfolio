import { NextResponse } from "next/server";
import { Repository } from "../_ghApi/api";

export async function GET() {
  return NextResponse.json({
    "data": await Repository()
  })
}