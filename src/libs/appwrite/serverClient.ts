import {
    Client,
    Databases,
    Storage,
    Functions,
    Account,
    Teams,
    Avatars,
    ID,
  } from 'appwrite';
  
  /* -------------------------------------------------------------------------- */
  /*  Read environment variables                                                */
  /* -------------------------------------------------------------------------- */
  const endpoint   = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;          // e.g. https://cloud.appwrite.io/v1
  const projectId  = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;

  
  /* Optional: collection / bucket IDs reused throughout the project */
  export const databaseId          = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!;
  export const storeId             = process.env.NEXT_PUBLIC_APPWRITE_STORE_ID!;
  export const userCollectionId    = process.env.NEXT_PUBLIC_APPWRITE_USER_COLLECTION_ID!;
  export const guestCollectionId   = process.env.NEXT_PUBLIC_APPWRITE_GUEST_COLLECTION_ID!;
  export const messageCollectionId = process.env.NEXT_PUBLIC_APPWRITE_MESSAGE_COLLECTION_ID!;
  export const unknownCollectionId = process.env.NEXT_PUBLIC_APPWRITE_UNKNOWN_COLLECTION_ID!;
  export const notificationUrl     = process.env.NEXT_PUBLIC_APPWRITE_NOTIFICATION_URL!;
  export const serverEncryptEey    = process.env.NEXE_PUBLIC_SERVER_ENCRYPTION_KEY!;
  /* -------------------------------------------------------------------------- */
  /*  Create & configure the server SDK                                         */
  /* -------------------------------------------------------------------------- */
  const client = new Client()
    .setEndpoint(endpoint)
    .setProject(projectId)
  
  /* -------------------------------------------------------------------------- */
  /*  Export whatever services you need                                         */
  /* -------------------------------------------------------------------------- */
  export const databases  = new Databases(client);
  export const storage    = new Storage(client);
  export const functions  = new Functions(client);
  export const account    = new Account(client);   // useful for JWT validation
  export const teams      = new Teams(client);
  export const avatars    = new Avatars(client);
  
  export { ID };                           // handy helper for ID.unique()
  