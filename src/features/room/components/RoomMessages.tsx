'use client';

import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { RoomMessage } from '@/types';
import {
  Image as ImageIcon,
  FileVideo,
  FileText,
  Download,
  MessageCircle,
} from 'lucide-react';

interface Props {
  message: RoomMessage;
  downloadingFileId: string | null;
  downloadedFileIds: Set<string>;
  onDownload(fileId: string, fileName: string): Promise<void>;
}

function RoomMessageCard({ message, onDownload, downloadingFileId, downloadedFileIds }: Props) {
  const { content, mediaData = [], mediaType, createdAt } = message;

  const TypeIcon = useMemo(() => {
    switch (mediaType) {
      case 'image':
        return ImageIcon;
      case 'video':
        return FileVideo;
      default:
        return FileText;
    }
  }, [mediaType]);

  const createdLabel = useMemo(
    () => new Date(createdAt).toLocaleString(),
    [createdAt]
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="w-full space-y-4 rounded-xl bg-white/70 p-4 shadow-sm backdrop-blur dark:bg-zinc-800/10"
    >
      {/* ------- content row ------- */}
      <header className="flex items-start gap-3">
        <MessageCircle className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
        <p className="break-words text-gray-800 dark:text-gray-100 flex-1">
          {content}
        </p>
      </header>

      {/* ------- attachments ------- */}
      {mediaData.length > 0 && (
        <ul className="space-y-2">
          {mediaData.map(({ fileId, fileName }) => {
            const isDownloading = downloadingFileId === fileId;
            const isDownloaded = downloadedFileIds.has(fileId);

            return (
              <li
                key={fileId}
                className="flex items-center gap-2 rounded-2xl p-2"
              >
                <TypeIcon className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="flex-1 truncate text-sm text-gray-800 dark:text-gray-100">
                  {fileName}
                </span>
                <button
                  onClick={() => onDownload(fileId, fileName)}
                  disabled={isDownloading}
                  className={`group relative overflow-hidden flex items-center min-w-[140px] cursor-pointer gap-2 px-3 py-2 rounded-lg transition text-white focus:outline-none
                    ${isDownloaded
                      ? 'bg-indigo-950 hover:bg-indigo-900'
                      : 'bg-gradient-to-r from-indigo-950 to-pink-950 hover:opacity-90'}
                    `}
                >
                  {/* Ripple background when downloading */}
                  {isDownloading && (
                    <div className="absolute inset-0 animate-pulse bg-white/10" />
                  )}

                  {/* Spinner, Checkmark or Download Icon */}
                  <span className="relative z-10 flex items-center gap-2">
                    {isDownloading ? (
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : isDownloaded ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <Download className="w-4 h-4" />
                    )}
                    <span className="text-sm">
                      {isDownloaded ? 'Downloaded' : isDownloading ? 'Preparing...' : 'Download'}
                    </span>
                  </span>
                </button>

              </li>
            );
          })}
        </ul>
      )}

      {/* ------- footer meta ------- */}
      <footer className="text-right text-xs text-gray-500 dark:text-gray-400">
        {createdLabel}
      </footer>
    </motion.article>
  );
}

export default memo(RoomMessageCard);
