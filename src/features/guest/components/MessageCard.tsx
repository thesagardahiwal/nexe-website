'use client';

import React from 'react';
import Image from 'next/image';
import { Models } from 'appwrite';
// import { Ionicons } from 'react-icons';



const MessageCard = ({ item, title }: { item: Models.Document, title?: string }) => {
  return (
    <div className="bg-gray-900 p-4 my-3 rounded-2xl shadow-lg shadow-black/40 border border-gray-800">
      {/* Header Section */}
      <div className="flex items-center gap-2 mb-3">
        {/* <Ionicons name="chatbubble-ellipses" size={20} className="text-blue-400" /> */}
        <h3 className="text-white font-bold text-lg tracking-wide">{title} Message</h3>
      </div>

      {/* Message Content */}
      <p className="text-white font-semibold text-base mb-3 leading-relaxed">
        {item.content}
      </p>

      {/* Images Section */}
      {item.imageURL?.length > 0 && (
        <>
          <div className="border-b border-gray-700 my-2" />
          <div className="flex gap-2 mt-2 overflow-x-auto">
            {item.imageURL.map((img: string, index: number) => (
              <Image key={index} src={img} alt="Message Image" width={120} height={120} className="rounded-md" />
            ))}
          </div>
        </>
      )}

      {/* Videos Section */}
      {item.videoURL?.length > 0 && (
        <>
          <div className="border-b border-gray-700 my-2" />
          <div className="flex gap-2 mt-3 overflow-x-auto">
            {item.videoURL.map((video: string, index: number) => (
              <video key={index} controls className="w-48 rounded-md">
                <source src={video} type="video/mp4" />
              </video>
            ))}
          </div>
        </>
      )}

      {/* Documents Section */}
      {item.documentURL?.length > 0 && (
        <>
          <div className="border-b border-gray-700 my-2" />
          <ul className="list-disc list-inside text-white">
            {item.documentURL.map((doc: string, index: number) => (
              <li key={index}>
                <a href={doc} target="_blank" rel="noopener noreferrer" className="text-blue-400 underline">
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