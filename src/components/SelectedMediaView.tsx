import React from 'react';
import { SelectedMediaProp } from '@/hooks/useMediaPicker';
import { toast } from 'react-hot-toast';
import Image from 'next/image';
import { FileText, XCircle } from 'lucide-react';

interface SelectedMediaViewProps {
  selectedMedia: SelectedMediaProp;
  resetMedia: () => void;
}

const SelectedMediaView: React.FC<SelectedMediaViewProps> = ({ selectedMedia, resetMedia }) => {
  if (selectedMedia.type === 'cancel') return null;

  const mediaTypeLabel = selectedMedia.type.charAt(0).toUpperCase() + selectedMedia.type.slice(1);
  const data = selectedMedia[selectedMedia.type] || [];

  return (
    <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-700 w-full max-w-2xl">
      {/* Header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
          {mediaTypeLabel}{data.length > 1 ? 's' : ''}
        </h2>
        <button
          onClick={() => {
            resetMedia();
            toast.success('Media selection cleared');
          }}
          aria-label="Close room form"
          className="p-1.5 cursor-pointer bg-red-500 hover:bg-red-600 rounded-full text-white"
        >
          <XCircle size={18} />
        </button>
      </div>

      {/* Media List */}
      <div className="space-y-2">
        {selectedMedia.type === 'image' && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {data.map((file, i) => (
              <Image
                key={i}
                src={URL.createObjectURL(file)}
                alt={`Selected image ${i}`}
                width={96}
                height={96}
                className="rounded-lg object-cover w-24 h-24"
              />
            ))}
          </div>
        )}

        {selectedMedia.type === 'video' && (
          <div className="flex gap-2 overflow-x-auto pb-2">
            {data.map((file, i) => (
              <video key={i} controls className="rounded-lg w-40 h-24 object-cover">
                <source src={URL.createObjectURL(file)} type={file.type} />
                Your browser does not support the video tag.
              </video>
            ))}
          </div>
        )}

        {selectedMedia.type === 'document' && (
          <div className="flex max-h-40 overflow-y-auto scroll-auto flex-col gap-2">
            {data.map((file, i) => (
              <div key={i} className="flex items-center bg-zinc-100 dark:bg-zinc-800 p-3 rounded-lg gap-2">
                <FileText className="text-zinc-500 dark:text-zinc-400" size={20} />
                <span className="text-sm truncate text-zinc-800 dark:text-zinc-200 max-w-xs">
                  {file.name}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectedMediaView;
