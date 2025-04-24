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
  onDownload(fileId: string, fileName: string): Promise<void>;
}

function RoomMessageCard({ message, onDownload }: Props) {
  const { content, mediaData = [], mediaType, createdAt } = message;

  /* memoise expensive / stable values */
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
          {mediaData.map(({ fileId, fileName }) => (
            <li
              key={fileId}
              className="flex items-center gap-2 rounded-2xl p-2"
            >
              <TypeIcon className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
              <span className="flex-1 truncate text-sm text-gray-800 dark:text-gray-100">
                {fileName}
              </span>
              <button
                type="button"
                onClick={() => onDownload(fileId, fileName)}
                title="Download"
                className="rounded-2xl p-1 transition hover:bg-blue-100 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-500 dark:hover:bg-zinc-700"
              >
                <Download className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </button>
            </li>
          ))}
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
