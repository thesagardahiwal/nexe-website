import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { uploadFileWithProgress } from "@/libs/helper";
import { encryptFile } from "@/utils/encryption";
const MAX_FILE_SIZE = 45 * 1024 * 1024;

export interface SelectedMediaProp {
  image: File[] | null;
  video: File[] | null;
  document: File[] | null;
  type: "image" | "video" | "document" | "cancel";
}

function useMediaPicker() {
  const [selectedMedia, setSelectedMedia] = useState<SelectedMediaProp>({
    image: null,
    video: null,
    document: null,
    type: "cancel",
  });

  const pickMedia = async (event: React.ChangeEvent<HTMLInputElement>, type: "image" | "video" | "document") => {
    if (!event.target.files) return;
    resetMedia();

    const files = Array.from(event.target.files);

    // Filter out files that exceed the size limit
    const validFiles = files.filter(file => file.size <= MAX_FILE_SIZE);
    const invalidFiles = files.filter(file => file.size > MAX_FILE_SIZE);

    if (invalidFiles.length > 0) {
      invalidFiles.forEach(file => {
        toast.error(`❌ File "${file.name}" is too large! Max size is 45 MB.`);
      });
    }

    // If there are valid files, update the state
    if (validFiles.length > 0) {
      setSelectedMedia((prev) => ({
        ...prev,
        [type]: validFiles,
        type,
      }));
    }
  };

  const resetMedia = () => {
    setSelectedMedia({
      image: null,
      video: null,
      document: null,
      type: "cancel",
    });
  };

  const uploadMedia = async ({ selectedMedia }: { selectedMedia: SelectedMediaProp }) => {
    if (!selectedMedia.type || selectedMedia.type === "cancel") {
      toast.error("❌ No media selected! Please choose a file before uploading.");
      return [];
    }
  
    const files = selectedMedia[selectedMedia.type];
    if (!files || files.length === 0) {
      toast("⏹️ Upload Canceled. No files were uploaded.");
      return [];
    }
  
    const uploadedUrls: string[] = [];
  
    for (const file of files) {
      toast(`⬆️ Encrypting ${file.name}...`);
      
      try {
        const encryptedFile = await encryptFile(file);
        toast(`⬆️ Uploading ${file.name}...`);
        const url = await uploadFileWithProgress(encryptedFile, (progress) => {
          toast.loading(`📤 ${file.name} – ${progress.toFixed(0)}%`, { id: file.name });
        });
  
        if (url) {
          toast.success(`✅ ${file.name} uploaded!`, { id: file.name });
          uploadedUrls.push(url);
        }
      } catch (err) {
        console.log(err)
        toast.error(`❌ Failed to upload ${file.name}`, { id: file.name });
      }
    }
  
    resetMedia();
    return uploadedUrls;
  };

  useEffect(() => {
    if (selectedMedia.type === "cancel") {
      resetMedia();
    }
  }, [selectedMedia.type]);

  return {
    pickMedia,
    resetMedia,
    uploadMedia,
    selectedMedia,
  };
}

export default useMediaPicker;