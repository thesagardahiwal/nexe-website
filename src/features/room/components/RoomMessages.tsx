'use client';

import { memo, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import type { RoomMessage } from '@/types';
import {
  Image as ImageIcon,
  FileVideo,
  FileText,
  Download,
  MessageCircle,
  Copy,
} from 'lucide-react';
import { decryptMessage } from '@/utils/encryption';

interface Props {
  message: RoomMessage;
  downloadProgress: number | null;
  downloadingFileId: string | null;
  downloadedFileIds: Set<string>;
  onDownload(fileId: string, fileName: string): Promise<void>;
}

function RoomMessageCard({ 
  message, 
  onDownload, 
  downloadingFileId, 
  downloadedFileIds,
  downloadProgress,
 }: Props) {
  const { mediaData = [], mediaType, createdAt } = message;
  const content = decryptMessage(message.content);
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

  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset "Copied" after 2s
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

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
      <header className="flex items-start gap-3 relative group">
        <MessageCircle className="h-6 w-6 flex-shrink-0 text-blue-600 dark:text-blue-400" />
        <p className="break-words line-clamp-4 text-gray-800 dark:text-gray-100 w-10/12">
          {content}
        </p>
        <button
          onClick={handleCopy}
          className="absolute cursor-pointer top-0 right-0 opacity-50 group-hover:opacity-100 transition-opacity p-1 rounded-md text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
          title="Copy to clipboard"
        >
          <Copy className="w-4 h-4" />
        </button>
        {copied && (
          <span className="absolute -bottom-5 right-0 text-xs text-green-500">
            Copied!
          </span>
        )}
      </header>

      {/* ------- attachments ------- */}
      {mediaData.length > 0 && (
        <ul className="space-y-2">
          {mediaData.map(({ fileId, fileName }) => {
            const isDownloading = downloadingFileId === fileId;
            const isDownloaded = downloadedFileIds.has(fileId);
            const decryptedFileName = decryptMessage(fileName);
            return (
              <li
                key={fileId}
                className="flex items-center gap-2 rounded-2xl p-2"
              >
                <TypeIcon className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                <span className="flex-1 truncate text-sm text-gray-800 dark:text-gray-100">
                  {decryptedFileName}
                </span>
                <button
                  onClick={() => onDownload(fileId, decryptedFileName)}
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
                      {isDownloading ? (
                        `${downloadProgress}%`
                      ) : isDownloaded ? (
                        'Downloaded'
                      ) : (
                        'Download'
                      )}
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
