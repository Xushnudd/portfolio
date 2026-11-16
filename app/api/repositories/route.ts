import { NextResponse } from "next/server";
import { Repository } from "../_ghApi/api";

export async function GET() {
  const data = await Repository(20)
  return NextResponse.json({
    "data": data,
    "num": data.length
  })
}