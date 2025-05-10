import { NextRequest } from 'next/server';
import { storage, storeId } from '@/libs/appwrite/serverClient';

export async function GET(req: NextRequest) {
  const fileId = req.nextUrl.searchParams.get('id');
  const fileName = req.nextUrl.searchParams.get('name') || 'download';

  if (!fileId) return new Response('Missing id', { status: 400 });

  try {

    const decryptFileId = fileId;
    // Get the file download URL from Appwrite
    const fileDownloadUrl = storage.getFileDownload(storeId, decryptFileId);

    // Fetch the file from the URL
    const response = await fetch(fileDownloadUrl);

    if (!response.ok) {
      throw new Error(`File download failed with status: ${response.status}`);
    }

    // Handle streaming the file content
    const body = response.body;
    if (!body) {
      throw new Error('File stream is empty');
    }


    const encodedFileName = encodeURIComponent(fileName); // URL-encode to handle special characters

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodedFileName}"`,
        // 'Content-Length': buffer.length.toString(),
      },
    });
  } catch (err) {
    console.error('Download error:', (err as Error).message);
    return new Response('File not found or error occurred during download', { status: 404 });
  }
}
