import React, { ReactElement } from "react";

interface TopViewInboxProps {
  fetchMyMessages: () => void;
  loading: boolean;
  onPress: () => void;
  title: string;
  icon?: ReactElement;
}

const TopViewInbox: React.FC<TopViewInboxProps> = ({ fetchMyMessages, loading, onPress, title, icon }) => {
  return (
    <div className="flex items-center justify-between shadow-lg shadow-black rounded-b-2xl p-4 bg-gray-800 text-white">
      {/* Title Section */}
      <div className="flex items-center gap-3">
        {icon}
        <h1 className="font-semibold text-2xl tracking-wide truncate">{title}</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 items-center">
        {/* Refresh Button */}
        <button
          className="px-4 py-2 rounded-lg active:opacity-80 shadow-md shadow-blue-900 flex items-center justify-center bg-gray-700"
          onClick={fetchMyMessages}
          aria-label="Refresh messages"
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <i className="text-2xl">🔄</i> // Replace with an icon library if needed
          )}
        </button>

        {/* Add New Chat Button */}
        <button
          className="bg-blue-900/20 px-4 py-2 rounded-lg active:opacity-80 shadow-md shadow-blue-900 flex items-center justify-center"
          onClick={onPress}
          aria-label="Start new chat"
        >
          <i className="text-2xl">➕</i> {/* Replace with an icon library if needed */}
        </button>
      </div>
    </div>
  );
};

export default TopViewInbox;
