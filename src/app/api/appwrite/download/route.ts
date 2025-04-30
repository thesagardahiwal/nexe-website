import { NextRequest } from 'next/server';
import { storage, storeId } from '@/libs/appwrite/serverClient';

// Helper function to convert stream to Buffer
async function streamToBuffer(stream: ReadableStream<Uint8Array> | null): Promise<Buffer> {
  if (!stream) {
    throw new Error('Stream is null');
  }

  const reader = stream.getReader();
  const chunks: Uint8Array[] = [];
  let done, value;

  // Read the stream until it's done
  while ({ done, value } = await reader.read(), !done) {
    if (value) {
      chunks.push(value);
    }
  }

  // Concatenate all chunks into a single buffer
  return Buffer.concat(chunks);
}

export async function GET(req: NextRequest) {
  const fileId = req.nextUrl.searchParams.get('id');
  const fileName = req.nextUrl.searchParams.get('name') || 'download';

  if (!fileId) return new Response('Missing id', { status: 400 });

  try {

    // Get the file download URL from Appwrite
    const fileDownloadUrl = storage.getFileDownload(storeId, fileId);

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

    const buffer = await streamToBuffer(body);
    const encodedFileName = encodeURIComponent(fileName); // URL-encode to handle special characters

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': `attachment; filename="${encodedFileName}"`,
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (err) {
    console.error('Download error:', (err as Error).message);
    return new Response('File not found or error occurred during download', { status: 404 });
  }
}
