import React from 'react';
import { SelectedMediaProp } from '@/hooks/useMediaPicker';
import { toast } from 'react-hot-toast';
import Image from 'next/image';

interface SelectedMediaViewProps {
  selectedMedia: SelectedMediaProp;
  resetMedia: () => void;
}

const SelectedMediaView: React.FC<SelectedMediaViewProps> = ({ selectedMedia, resetMedia }) => {
  return (
    <>
      {selectedMedia.type !== 'cancel' && (
        <div className="p-3 rounded-lg bg-[#00011c] shadow-md w-full max-w-lg">
          {/* Header Section */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold">Selected Files</h2>
            <button
              onClick={() => {
                resetMedia();
                toast('Selection cleared!');
              }}
              className="px-3 py-1 rounded-md bg-red-500 text-white"
            >
              Remove
            </button>
          </div>

          {/* Media Preview Section */}
          {selectedMedia.type === 'image' ? (
            <div className="flex space-x-2 overflow-x-auto">
              {selectedMedia.image?.map((file, i) => (
                <Image
                  key={i}
                  src={URL.createObjectURL(file)}
                  alt={`Selected ${i}`}
                  className="h-24 w-24 rounded-lg object-cover"
                />
              ))}
            </div>
          ) : selectedMedia.type === 'video' ? (
            <div className="flex space-x-2 overflow-x-auto">
              {selectedMedia.video?.map((file, i) => (
                <video key={i} controls className="h-24 w-24 rounded-lg">
                  <source src={URL.createObjectURL(file)} type={file.type} />
                  Your browser does not support the video tag.
                </video>
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {selectedMedia.document?.map((file, i) => (
                <div key={i} className="flex items-center bg-white/5 p-2 rounded-lg">
                  <span className="text-sm font-medium truncate w-48">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SelectedMediaView;