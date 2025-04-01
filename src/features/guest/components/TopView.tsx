import React, { ReactElement } from "react";
import { Plus } from "lucide-react"; // Importing modern icons from Lucide

interface TopViewInboxProps {
  onPress: () => void;
  title: string;
  icon?: ReactElement;
}

const TopViewInbox: React.FC<TopViewInboxProps> = ({ onPress, title, icon }) => {
  return (
    <div className="flex gap-5 items-center justify-between rounded-b-2xl p-4 bg-transparent text-gray-800 dark:bg-gray-800 dark:text-white">
      {/* Title Section */}
      <div className="flex items-center gap-3">
        {icon && <div className="text-2xl">{icon}</div>}
        <h1 className="font-semibold text-xl tracking-wide truncate">{title}</h1>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 items-center">
        {/* Add New Chat Button */}
        <button
          className="text-transparent bg-gradient-to-r from-blue-600/50 to-pink-400 px-3 py-2 rounded-lg hover:bg-blue-500/90 focus:ring-2 focus:ring-blue-400/90 transition-all flex items-center justify-center"
          onClick={onPress}
          aria-label="Start new chat"
        >
          <Plus color="white" size={20} />
        </button>
      </div>
    </div>
  );
};

export default TopViewInbox;
