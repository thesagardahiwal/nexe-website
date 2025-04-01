import React from "react";

interface MediaPickerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (type: "image" | "video" | "document") => void;
}

const MediaPickerModal: React.FC<MediaPickerModalProps> = ({ isOpen, onClose, onSelect }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/90 dark:bg-black/90 bg-opacity-50">
      <div className="bg-white dark:bg-[#00011c] p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-white font-semibold text-xl mb-4">Select Media Type</h2>
        
        <div className="flex flex-col space-y-3">
          <button 
            className="bg-blue-600 text-white p-3 rounded-lg"
            onClick={() => {
              onSelect("image");
              onClose();
            }}
          >
            📷 Select Image
          </button>
          <button 
            className="bg-green-600 text-white p-3 rounded-lg"
            onClick={() => {
              onSelect("video");
              onClose();
            }}
          >
            🎥 Select Video
          </button>
          <button 
            className="bg-yellow-600 text-white p-3 rounded-lg"
            onClick={() => {
              onSelect("document");
              onClose();
            }}
          >
            📄 Select Document
          </button>
          <button className="bg-red-700 text-white p-3 rounded-lg" onClick={onClose}>❌ Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MediaPickerModal;