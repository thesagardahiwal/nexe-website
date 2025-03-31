import React, { ReactElement } from "react";
import { RefreshCw, Plus } from "lucide-react"; // Importing modern icons from Lucide

interface TopViewInboxProps {
  fetchMyMessages: () => void;
  loading: boolean;
  onPress: () => void;
  title: string;
  icon?: ReactElement;
}

const TopViewInbox: React.FC<TopViewInboxProps> = ({ fetchMyMessages, loading, onPress, title, icon }) => {
  return (
    <div className="flex gap-5 items-center justify-between shadow-md rounded-b-2xl p-4 bg-gray-900 text-white">
      {/* Title Section */}
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <h1 className="font-semibold text-xl tracking-wide truncate">{title}</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 items-center">
        {/* Add New Chat Button */}
        <button
          className="bg-blue-600/50 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
          onClick={onPress}
          aria-label="Start new chat"
        >
          <Plus size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopViewInbox;
