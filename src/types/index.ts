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
  

  export interface GuestMessageProps {
    privateId: string;
    content:   string;
    mediaUrl?: string[];
    mediaType?: 'image' | 'video' | 'document';
    room: boolean;
  }

  export type ImageGravity =
  | 'center'
  | 'top_left'
  | 'top_right'
  | 'bottom_left'
  | 'bottom_right'
  | 'left'
  | 'right'
  | 'top'
  | 'bottom';