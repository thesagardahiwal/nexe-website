import { Models } from 'appwrite';
import { RoomMessage, MediaItem } from '@/types';
import { storage, storeId } from '@/libs/appwrite/serverClient';


export async function getFileMeta(fileId: string): Promise<Models.File> {
  return storage.getFile(storeId, fileId);   // returns full File object (name, mimeType, …)
}

async function buildMediaData(urls: string[]): Promise<MediaItem[]> {
  const fileIds = urls
    .map((u) => u.match(/\/files\/([^/]+)\//)?.[1])
    .filter(Boolean) as string[];

  // Fetch metadata in parallel
  const metas = await Promise.all(
    fileIds.map((id) =>
      getFileMeta(id).catch(() => null) // swallow errors for missing files
    )
  );

  return metas
    .filter(Boolean)
    .map((meta) => ({
      fileId: meta!.$id,
      fileName: meta!.name,
      mimeType: meta!.mimeType,
      size: meta!.sizeOriginal,
    }));
}

async function mapDoc(doc: Models.Document): Promise<RoomMessage> {
    const mediaData =
      Array.isArray(doc.mediaUrl) ? await buildMediaData(doc.mediaUrl) : [];
  
    return {
      content:    doc.content,
      mediaData,                      // [{ fileId, fileName, mimeType, size }]
      mediaType:  doc.mediaType,
      createdAt:  doc.$createdAt,
    };
  }
  
  /** Converts an array of docs */
  export async function toRoomMessages(
    docs: Models.Document[],
  ): Promise<RoomMessage[]> {
    return Promise.all(docs.map(mapDoc));
  }
export function extractFileId(url: string): string | null {
  const match = url.match(/\/files\/([^/]+)\//); // capture between /files/ and next /
  return match ? match[1] : null;
}