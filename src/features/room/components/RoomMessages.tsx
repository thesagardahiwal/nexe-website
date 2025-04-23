'use client';

import { motion } from 'framer-motion';
import { RoomMessage } from '@/types';
import {
  Image as ImageIcon,
  FileVideo,
  FileText,
  Download,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';

type Props = { message: RoomMessage };

export default function RoomMessageCard({ message }: Props) {
  const { content, mediaData, mediaType, createdAt } = message;

  /* choose an icon for the group (optional) */
  const TypeIcon =
    mediaType === 'image'
      ? ImageIcon
      : mediaType === 'video'
      ? FileVideo
      : FileText;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18 }}
      className="w-full rounded-xl bg-white/70 dark:bg-zinc-800/60 shadow-sm backdrop-blur p-4 space-y-4"
    >
      {/* header row */}
      <div className="flex items-start gap-3">
        <MessageCircle className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0" />
        <div className="flex-1">
          <p className="text-gray-800 dark:text-gray-100 break-words">{content}</p>
        </div>
      </div>

      {/* attachments */}
      {mediaData?.length > 0 && (
        <ul className="space-y-2 ">
          {mediaData.map((m) => (
            <li key={m.fileId} className="flex  bg-white/5 p-2 rounded-2xl items-center gap-2">
              <TypeIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
              <span className="flex-1 truncate text-sm text-gray-800 dark:text-gray-100">
                {m.fileName}
              </span>
              <Link
                href={`/api/appwrite/download?id=${m.fileId}&name=${encodeURIComponent(
                  m.fileName,
                )}`}
                className="p-1 rounded-2xl hover:bg-blue-100 dark:hover:bg-zinc-700"
              >
                <Download className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* footer meta */}
      <p className="text-xs text-gray-500 dark:text-gray-400 text-right">
        {new Date(createdAt).toLocaleString()}
      </p>
    </motion.div>
  );
}
