import { NextResponse } from "next/server";

export async function GET({ params }: { params: { id: string } }) {
  return NextResponse.json({ post: `Post ID: ${params.id}` });
}
