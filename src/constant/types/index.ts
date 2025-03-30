import { Models } from "appwrite";

export interface uploadMessage {
    senderId: Models.Document;
    recieverId: Models.Document;
    content: string;
    imageURL?: URL[];
    videoURL?: URL[];
    documentURL?: URL[];
  };
  
  export interface Message extends Models.Document {
    status: "sending" | "sent" | "delivered" | "read";
  }
  
  export interface useChatProp {
      receiverId: string;
      senderId: string;
      contactData: ChatGroup;
  }

  export interface ChatGroup {
    user: Models.Document;
    chats: Message[];
}
