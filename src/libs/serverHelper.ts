import { Models } from 'appwrite';
import { storage, storeId } from '@/libs/appwrite/serverClient';
import { RoomMessage, MediaItem } from '@/types';
import { encryptMessage } from '@/utils/encryption';

/* ───────────────────────── helpers ───────────────────────── */

const extractFileId = (url: string): string | null =>
  url.match(/\/files\/([^/]+)\//)?.[1] ?? null;

// per‑request cache
const metaCache = new Map<string, Models.File>();

async function getMeta(id: string): Promise<Models.File | null> {
  if (metaCache.has(id)) return metaCache.get(id)!;
  try {
    const meta = await storage.getFile(storeId, id);
    metaCache.set(id, meta);
    return meta;
  } catch {
    return null; // swallow errors for missing / deleted files
  }
}


/* ───────────────────── public API ───────────────────── */

export async function toRoomMessages(
  docs: Models.Document[],
): Promise<RoomMessage[]> {
  // ── 1. collect every unique file‑id in one sweep ──
  const fileIds = new Set<string>();

  docs.forEach(doc => {
    (doc.mediaUrl as string[] | undefined)?.forEach(url => {
      const id = extractFileId(url);
      if (id) fileIds.add(id);
    });
  });

  // ── 2. kick off *all* metadata fetches in parallel ──
  const metaEntries = await Promise.all(
    [...fileIds].map(async id => [id, await getMeta(id)] as const)
  );
  const metaMap = new Map(metaEntries.filter(([, m]) => m));

  // ── 3. build the final messages – pure sync map ──
  return docs.map<RoomMessage>(doc => {
    const mediaData = (doc.mediaUrl as string[] | undefined)
      ?.map(extractFileId)
      .filter(Boolean)
      .map(id => {
        const m = metaMap.get(id!);
        return m && {
          fileId:   encryptMessage(m.$id),
          fileName: encryptMessage(m.name),
          mimeType: encryptMessage(m.mimeType),
          size:     m.sizeOriginal,
        };
      })
      .filter(Boolean) as MediaItem[] ?? [];

    return {
      content:   doc.content,
      mediaData,            // [{ fileId, fileName, mimeType, size }]
      mediaType: doc.mediaType,
      createdAt: doc.$createdAt,
    };
  });
}
