import { Menu, User } from 'lucide-react';

interface AdminHeaderProps {
  onMenuToggle: () => void;
}

export default function AdminHeader({ onMenuToggle }: AdminHeaderProps) {
  return (
    <header className="h-header bg-white border-b border-gray-200 flex items-center justify-between px-6 flex-shrink-0">
      {/* Left: Mobile menu toggle */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuToggle}
          className="lg:hidden text-gray-500 hover:text-hotel-charcoal transition-colors p-1"
          aria-label="Toggle sidebar"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Right: Admin info */}
      <div className="flex items-center gap-3">
        <div className="text-right hidden sm:block">
          <div className="text-small font-medium text-hotel-charcoal">Admin</div>
          <div className="text-xs text-gray-400">Hotel Administrator</div>
        </div>
        <div className="h-9 w-9 bg-hotel-maroon rounded-full flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
      </div>
    </header>
  );
}
