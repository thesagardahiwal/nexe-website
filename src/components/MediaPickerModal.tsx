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
            className="bg-blue-600/40 ease-in-out duration-300 cursor-pointer hover:bg-blue-600/90 flex gap-2 text-white p-3 rounded-lg"
            onClick={() => {
              onSelect("image");
              onClose();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-images-icon lucide-images"><path d="M18 22H4a2 2 0 0 1-2-2V6"/><path d="m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18"/><circle cx="12" cy="8" r="2"/><rect width="16" height="16" x="6" y="2" rx="2"/></svg>
            Select Images
          </button>
          <button 
            className="bg-green-600/40 ease-in-out cursor-pointer duration-300 hover:bg-green-600/90 gap-2 flex text-white p-3 rounded-lg"
            onClick={() => {
              onSelect("video");
              onClose();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-video-icon lucide-file-video"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m10 11 5 3-5 3v-6Z"/></svg>
            Select Videos
          </button>
          <button 
            className="bg-yellow-600/40 ease-in-out cursor-pointer duration-300 hover:bg-yellow-600/90 flex gap-2 text-white p-3 rounded-lg"
            onClick={() => {
              onSelect("document");
              onClose();
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-files-icon lucide-files"><path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"/></svg>
            Select Documents
          </button>
          <button className="bg-red-700/40 cursor-pointer hover:bg-red-700/90 ease-in-out duration-300 flex gap-2 text-white p-3 rounded-lg" onClick={onClose}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg> Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MediaPickerModal;