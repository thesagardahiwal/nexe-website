import CryptoJS from 'crypto-js';
const CHUNK_SIZE = 1 * 1024 * 1024;
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
  const encryptedChunks: string[] = [];
  let offset = 0;

  while (offset < file.size) {
    const chunk = file.slice(offset, offset + CHUNK_SIZE);
    const buffer = await chunk.arrayBuffer();
    const base64 = Buffer.from(buffer).toString("base64");
    const encrypted = CryptoJS.AES.encrypt(base64, SECRET_KEY).toString();
    encryptedChunks.push(encrypted);
    offset += CHUNK_SIZE;
  }

  // Join encrypted chunks with delimiter and create encrypted file
  const encryptedContent = encryptedChunks.join("::CHUNK::");
  const blob = new Blob([encryptedContent], { type: "text/plain" });
  return new File([blob], file.name, {
    type: "text/plain",
    lastModified: Date.now(),
  });
}

/**
 * Decrypts a Blob (AES-encrypted content) and returns a decrypted Blob.
 */
async function decryptFile(encryptedBlob: Blob): Promise<Blob> {
  const encryptedText = await encryptedBlob.text();
  const encryptedChunks = encryptedText.split("::CHUNK::");

  const decryptedParts: Uint8Array[] = [];

  for (const chunk of encryptedChunks) {
    const bytes = CryptoJS.AES.decrypt(chunk, SECRET_KEY);
    const base64 = bytes.toString(CryptoJS.enc.Utf8);
    if (!base64) throw new Error("Decryption failed. Possibly wrong key.");
    const binary = Buffer.from(base64, "base64");
    decryptedParts.push(binary);
  }

  // Combine all decrypted parts
  const totalLength = decryptedParts.reduce((sum, b) => sum + b.length, 0);
  const result = new Uint8Array(totalLength);
  let offset = 0;
  for (const part of decryptedParts) {
    result.set(part, offset);
    offset += part.length;
  }

  return new Blob([result]);
}

export {
  encryptMessage,
  decryptMessage,
  encryptFile,
  decryptFile,
  getCryptoKey,
};
