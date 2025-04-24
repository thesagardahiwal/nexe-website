import { memo, ReactElement } from 'react';
import { Plus } from 'lucide-react';

interface TopViewInboxProps {
  title: string;
  onPress: () => void;
  icon?: ReactElement;
}

const TopViewInbox: React.FC<TopViewInboxProps> = ({ onPress, title, icon }) => (
  <div className="flex items-center justify-between gap-5 rounded-b-2xl p-4 bg-transparent text-gray-800 dark:bg-gray-800 dark:text-white">
    {/* Title */}
    <div className="flex items-center gap-3 min-w-0">
      {icon && <div className="text-2xl shrink-0">{icon}</div>}
      <h1 className="truncate text-xl font-semibold tracking-wide">{title}</h1>
    </div>

    {/* New‑chat button */}
    <button
      type="button"
      onClick={onPress}
      aria-label="Start new chat"
      className="flex h-12 w-12 cursor-pointer point items-center justify-center rounded-lg bg-gradient-to-r from-blue-600/80 to-pink-500 text-white shadow-md transition-transform hover:scale-105 focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-blue-500"
    >
      <Plus size={22} aria-hidden />
      <span className="sr-only">Start new chat</span>
    </button>
  </div>
);

/* React.memo prevents needless re-render when props unchanged */
export default memo(TopViewInbox);
