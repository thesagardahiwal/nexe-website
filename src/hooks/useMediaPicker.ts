import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { storage, storeId, ID } from "@/libs/appwrite/config";

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

    setSelectedMedia((prev) => ({
      ...prev,
      [type]: files,
      type,
    }));
  };

  const resetMedia = () => {
    setSelectedMedia({
      image: null,
      video: null,
      document: null,
      type: "cancel",
    });
  };

  const uploadMedia = async ({selectedMedia} : {selectedMedia: SelectedMediaProp}) => {
    if (!selectedMedia.type || selectedMedia.type === "cancel") {
      toast.error("❌ No media selected! Please choose a file before uploading.");
      return [];
    }

    const files = selectedMedia[selectedMedia.type];
    if (!files || files.length === 0) {
      toast("⏹️ Upload Canceled. No files were uploaded.");
      return [];
    }

    toast(`🚀 Uploading ${files.length} file(s)...`);

    const uploadPromises = files.map(async (file) => {
      try {
        const fileId = ID.unique();
        const uploadedFile = await storage.createFile(storeId, fileId, file);

        if (uploadedFile) {
          toast.success(`🎉 Uploaded: ${file.name}!`);
          return storage.getFilePreview(storeId, uploadedFile.$id);
        } else {
          toast.error(`❌ Upload failed for: ${file.name}`);
          return null;
        }
      } catch (error) {
        console.error("Upload Error:", error);
        toast.error("📡 Connection Issue! Failed to upload. Please check your network.");
        return null;
      }
    });

    const uploadedUrls = (await Promise.all(uploadPromises)).filter(Boolean);

    if (uploadedUrls.length === files.length) {
      toast.success("🚀 All files uploaded successfully!");
    } else if (uploadedUrls.length > 0) {
      toast.error("⚠️ Some files failed to upload.");
    } else {
      toast.error("All file uploads failed.");
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