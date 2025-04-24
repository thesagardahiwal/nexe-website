import { NextRequest } from 'next/server';
import { storage, storeId } from '@/libs/appwrite/serverClient';

export async function GET(req: NextRequest) {
  const fileId = req.nextUrl.searchParams.get('id');
  if (!fileId) return new Response('Missing id', { status: 400 });

  try {
    const signedUrl = storage.getFileDownload(storeId, fileId);
    // Directly return the signed URL as a plain response
    return new Response(signedUrl.toString());
  } catch {
    return new Response('Not found', { status: 404 });
  }
}
