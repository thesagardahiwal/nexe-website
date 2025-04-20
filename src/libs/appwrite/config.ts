'use client';

import { Client, Account, ID, Databases, Storage } from 'appwrite';

const projectId = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID || '';
const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '';
const storeId = process.env.NEXT_PUBLIC_APPWRITE_STORE_ID || '';
const userCollectionId = process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID || '';
const guestCollectionId = process.env.NEXT_PUBLIC_APPWRITE_GUEST_COLLECTION_ID || '';
const messageCollectionId = process.env.NEXT_PUBLIC_APPWRITE_MESSAGE_COLLECTION_ID || '';
const unknownCollectionId = process.env.NEXT_PUBLIC_APPWRITE_UNKNOWN_COLLECTION_ID || '';
const notificationUrl = process.env.NEXT_PUBLIC_APPWRITE_NOTIFICATION_URL || '';
const client = new Client()
    .setProject(projectId)
    .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || '');

const account = new Account(client);
const databases = new Databases(client);
const storage = new Storage(client);

export {
    client,
    storage,
    databaseId,
    storeId,
    account,
    ID,
    databases,
    guestCollectionId,
    userCollectionId,
    messageCollectionId,
    unknownCollectionId,
    notificationUrl
};