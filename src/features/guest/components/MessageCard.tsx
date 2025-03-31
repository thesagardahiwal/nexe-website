'use client';

import React from 'react';
import Image from 'next/image';
import { Models } from 'appwrite';

const MessageCard = ({ item, title }: { item: Models.Document, title?: string }) => {
  return (
    <div className="bg-gray-900 p-6 my-4 rounded-3xl shadow-xl border border-gray-800 transition-all hover:shadow-2xl">
      {/* Header Section */}
      <div className="flex items-center gap-3 mb-4">
        {/* You can uncomment and use the Ionicons icon if needed */}
        {/* <Ionicons name="chatbubble-ellipses" size={20} className="text-blue-400" /> */}
        <h3 className="text-white font-semibold text-xl tracking-wide">{title} Message</h3>
      </div>

      {/* Message Content */}
      <p className="text-white font-medium text-base mb-4 leading-relaxed">
        {item.content}
      </p>

      {/* Images Section */}
      {item.imageURL?.length > 0 && (
        <>
          <div className="border-b border-gray-700 my-3" />
          <div className="flex gap-3 mt-3 overflow-x-auto">
            {item.imageURL.map((img: string, index: number) => (
              <Image key={index} src={img} alt={`Message Image ${index + 1}`} width={130} height={130} className="rounded-lg shadow-md hover:scale-105 transition-all" />
            ))}
          </div>
        </>
      )}

      {/* Videos Section */}
      {item.videoURL?.length > 0 && (
        <>
          <div className="border-b border-gray-700 my-3" />
          <div className="flex gap-3 mt-4 overflow-x-auto">
            {item.videoURL.map((video: string, index: number) => (
              <div key={index} className="w-48">
                <video controls className="w-full rounded-lg shadow-md hover:scale-105 transition-all">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Documents Section */}
      {item.documentURL?.length > 0 && (
        <>
          <div className="border-b border-gray-700 my-3" />
          <ul className="list-disc list-inside text-white space-y-2">
            {item.documentURL.map((doc: string, index: number) => (
              <li key={index}>
                <a href={doc} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline hover:text-blue-500 transition-all">
                  Document {index + 1}
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default React.memo(MessageCard);
