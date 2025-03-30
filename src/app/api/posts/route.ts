import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ posts: ["Post 1", "Post 2"] });
}
