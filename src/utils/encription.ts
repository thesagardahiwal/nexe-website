import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRIPTION_SECRET_KEY || 'default-secret-key';
// Encrypt a message
const encryptMessage = (message: string): string => {
  return CryptoJS.AES.encrypt(message, SECRET_KEY).toString();
};

// Decrypt a message
const decryptMessage = (encryptedMessage: string): string => {
    try {
        const bytes = CryptoJS.AES.decrypt(encryptedMessage, SECRET_KEY);
        return bytes.toString(CryptoJS.enc.Utf8);
    } catch {
        return encryptedMessage;
    }
};

async function encryptFile(file: File, key: CryptoKey): Promise<File> {
    const arrayBuffer = await file.arrayBuffer();

    // Generate a random 12-byte IV for AES-GCM
    const iv = crypto.getRandomValues(new Uint8Array(12));

    // Encrypt the data using AES-GCM
    const encryptedArrayBuffer = await crypto.subtle.encrypt(
        { name: 'AES-GCM', iv },
        key,
        arrayBuffer
    );

    // Combine the IV and encrypted data into a single Blob
    const combined = new Uint8Array(iv.length + encryptedArrayBuffer.byteLength);
    combined.set(iv, 0);
    combined.set(new Uint8Array(encryptedArrayBuffer), iv.length);

    const encryptedBlob = new Blob([combined], { type: 'application/octet-stream' });

    // Return the encrypted file
    return new File([encryptedBlob], `${file.name}.enc`, { type: 'application/octet-stream' });
}
  

async function decryptFile(encryptedBlob: Blob, key: CryptoKey): Promise<Blob> {
    const encryptedArrayBuffer = await encryptedBlob.arrayBuffer();
    console.log('Encrypted buffer length:', encryptedArrayBuffer.byteLength);
  
    const iv = new Uint8Array(encryptedArrayBuffer.slice(0, 12));
    console.log('IV:', iv);
  
    const encryptedData = encryptedArrayBuffer.slice(12);
    console.log('Encrypted data length:', encryptedData.byteLength);
  
    try {
      const decrypted = await crypto.subtle.decrypt(
        { name: 'AES-GCM', iv },
        key,
        encryptedData
      );
      console.log('Decryption successful');
      return new Blob([decrypted]);
    } catch (err) {
      console.error('Decryption failed:', err);
      throw err;
    }
  }
  

  async function getCryptoKey(): Promise<CryptoKey> {
    // Ensure the key is exactly 16 or 32 characters
    const encoder = new TextEncoder();
    const rawKey = encoder.encode(SECRET_KEY); // Uint8Array
  
    if (rawKey.length !== 16 && rawKey.length !== 32) {
      throw new Error('SECRET_KEY must be 128 or 256 bits (16 or 32 characters)');
    }
  
    return crypto.subtle.importKey('raw', rawKey, 'AES-GCM', false, ['encrypt', 'decrypt']);
  }
  
  
  

export {
    encryptFile,
    decryptMessage,
    encryptMessage,
    decryptFile,
    getCryptoKey
}
