import { NextRequest } from 'next/server';
import { storage, storeId } from '@/libs/appwrite/serverClient'; // server SDK with key

export async function GET(req: NextRequest) {
  const fileId = req.nextUrl.searchParams.get('id');

  if (!fileId) {
    return new Response('Missing id', { status: 400 });
  }

  try {
    // Returns a readable stream (Uint8Array chunks)
    const file = await storage.getFile(storeId, fileId);
    const filename = file.name || 'file';
    const fileStream = storage.getFileDownload(storeId, fileId);

    return new Response(fileStream.toString(), {
      headers: {
        'Content-Type': 'application/octet-stream',
        // Forces browser download with original name
        'Content-Disposition': `attachment; filename*=UTF-8''${encodeURIComponent(
          filename,
        )}`,
        // Cache for a week (optional)
        'Cache-Control': 'public, max-age=604800',
      },
    });
  } catch (err) {
    console.error('Download error:', err);
    return new Response('Not found', { status: 404 });
  }
}
