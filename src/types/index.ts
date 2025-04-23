export interface MediaItem {
    fileId:   string;
    fileName: string;
    mimeType: string;
    size:     number;  // bytes
  }
  
  export interface RoomMessage {
    content:    string;
    mediaData:  MediaItem[];
    mediaType?: 'image' | 'video' | 'document';
    createdAt:  string;
  }
  