import CryptoJS from 'crypto-js';

const SECRET_KEY = process.env.NEXT_PUBLIC_ENCRIPTION_SECRET_KEY || 'nexe-is-great-app-made-by-sagar-dahiwal';
// Text-based encryption (still using CryptoJS AES)
const encryptMessage = (message: string): string => {
  return CryptoJS.AES.encrypt(message, SECRET_KEY).toString();
};


const decryptMessage = (encryptedMessage: string): string => {
  try {
    const bytes = CryptoJS.AES.decrypt(encryptedMessage, SECRET_KEY);
    return bytes.toString(CryptoJS.enc.Utf8);
  } catch {
    return encryptedMessage;
  }
};

// Utility to get AES-CBC compatible crypto key
async function getCryptoKey(): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const rawKey = encoder.encode(SECRET_KEY);

  if (rawKey.length !== 16 && rawKey.length !== 32) {
    throw new Error('SECRET_KEY must be 128 or 256 bits (16 or 32 characters)');
  }

  return crypto.subtle.importKey(
    'raw',
    rawKey,
    { name: 'AES-CBC' },
    false,
    ['encrypt', 'decrypt']
  );
}

// Encrypt file with AES-CBC and prepend IV
async function encryptFile(file: File): Promise<File> {
  const arrayBuffer = await file.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString("base64");

  const encrypted = CryptoJS.AES.encrypt(base64, SECRET_KEY).toString();

  // Create a new File with encrypted content
  const encryptedBlob = new Blob([encrypted], { type: "text/plain" });
  const encryptedFile = new File([encryptedBlob], file.name, {
    type: "text/plain",
    lastModified: Date.now(),
  });

  return encryptedFile;
}

/**
 * Decrypts a Blob (AES-encrypted content) and returns a decrypted Blob.
 */
async function decryptFile(blob: Blob): Promise<Blob> {
  const encryptedText = await blob.text(); // UTF-8 string

  const bytes = CryptoJS.AES.decrypt(encryptedText, SECRET_KEY);
  const decryptedBase64 = bytes.toString(CryptoJS.enc.Utf8);
  if (!decryptedBase64) throw new Error("Invalid decryption or secret key.");

  const binaryData = Buffer.from(decryptedBase64, "base64");

  // Create a new Blob from the decrypted binary
  return new Blob([binaryData]);
}

export {
  encryptMessage,
  decryptMessage,
  encryptFile,
  decryptFile,
  getCryptoKey,
};
