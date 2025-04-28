import axios from "axios";
import { getBaseUrl } from "./helper";
type NotificationPayload = {
  senderId?: string; // Optional if sending to guest
  receiverId?: string; // Optional if using privateId
  privateId?: string; // For guest messages
  messageText: string;
  customTitle?: string;
  data: {
    notificationData: unknown,
    url: string,
    imageUrl?: string,
    type: "guest_message" | "private_message" | "group_message" | "room_message"; // Can add more as needed
  };
};
const sendNotificationToUser = async (payload: NotificationPayload) => {
    try {
        axios.post(getBaseUrl()+"/api/notification", payload, {
          headers: {
            "Content-Type": "application/json",
          },
        });
      } catch (err) {
        console.error("❌ Error sending notification:", (err as Error).message);
      }
  };
    
export default sendNotificationToUser;
