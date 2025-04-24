// utils/validation.ts

/**
 * Validates the message form for empty fields or invalid private ID.
 * @param {string} privateId - The private ID input by the user.
 * @param {string} chat - The chat message input by the user.
 * @returns {string | null} - Returns an error message if validation fails, otherwise null if valid.
 */
export function validateMessageForm(privateId: string, chat: string): string | null {
    const trimmedPrivateId = privateId.trim();
    const trimmedChat = chat.trim();
  
    // Check if both private ID and chat message are provided
    if (!trimmedPrivateId || !trimmedChat) {
      return 'Please enter a private ID and message.';
    }
  
    // Validate private ID length (this can be customized based on your requirements)
    if (trimmedPrivateId.length < 6) {
      return 'Private ID seems too short. Ensure it is at least 6 characters.';
    }
  
    // You can add additional checks here (e.g., regex for privateId, max chat length, etc.)
    // Example: Check for non-empty message with a minimum length
    if (trimmedChat.length < 1) {
      return 'Message cannot be empty.';
    }
  
    return null; // Return null if validation passes
  }
  