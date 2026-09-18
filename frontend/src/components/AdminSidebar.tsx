
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LayoutDashboard, BedDouble, CalendarDays, Settings, LogOut, ChevronLeft, ChevronRight, Building2, Brain } from 'lucide-react';

interface AdminSidebarProps {
  isOpen: boolean;
  onToggle: () => void;
}

const navItems = [
  { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
  { name: 'Bookings', path: '/admin/bookings', icon: BedDouble },
  { name: 'Event Enquiries', path: '/admin/events', icon: CalendarDays },
  { name: 'Knowledge Base', path: '/admin/knowledge', icon: Brain },
  { name: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminSidebar({ isOpen, onToggle }: AdminSidebarProps) {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => {
    if (path === '/admin') return location.pathname === '/admin' || location.pathname === '/admin/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-full z-50 bg-hotel-charcoal text-white
          flex flex-col transition-all duration-300 shadow-sidebar
          ${isOpen ? 'w-sidebar translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-20'}
          lg:relative lg:z-auto
        `}
      >
        {/* Brand */}
        <div className="p-5 border-b border-white/10 flex-shrink-0">
          <Link to="/admin" className="flex items-center gap-3">
            <div className="h-9 w-9 bg-hotel-maroon rounded-lg flex items-center justify-center flex-shrink-0">
              <Building2 className="h-5 w-5 text-hotel-gold" />
            </div>
            {isOpen && (
              <div className="overflow-hidden">
                <div className="text-small font-bold text-white truncate">SVN Lake Palace</div>
                <div className="text-xs text-hotel-gold font-medium">Admin Panel</div>
              </div>
            )}
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 py-4 overflow-y-auto">
          <div className="space-y-1 px-3">
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.path);
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  title={item.name}
                  className={`
                    flex items-center gap-3 px-3 py-2.5 rounded-lg text-small font-medium transition-all duration-150
                    ${active
                      ? 'bg-hotel-maroon/40 text-hotel-gold'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                    }
                  `}
                >
                  <Icon className="h-5 w-5 flex-shrink-0" />
                  {isOpen && <span className="truncate">{item.name}</span>}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-3 flex-shrink-0">
          <button
            onClick={() => navigate('/login')}
            title="Logout"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-small font-medium text-gray-400 hover:text-red-400 hover:bg-white/5 transition-colors w-full"
          >
            <LogOut className="h-5 w-5 flex-shrink-0" />
            {isOpen && <span>Logout</span>}
          </button>
        </div>

        {/* Desktop Collapse Toggle */}
        <button
          onClick={onToggle}
          className="hidden lg:flex absolute -right-3 top-20 h-6 w-6 bg-hotel-charcoal border border-white/20 rounded-full items-center justify-center text-gray-400 hover:text-white transition-colors"
        >
          {isOpen ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
        </button>
      </aside>
    </>
  );
}
