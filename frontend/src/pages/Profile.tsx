import { Link, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { User, Calendar, MessageSquare, LogOut, FileText, BedDouble } from 'lucide-react';
import EmptyState from '../components/ui/EmptyState';

function ProfileOverview() {
  return (
    <div className="card p-6 md:p-8">
      <h2 className="text-h3 font-bold mb-6 pb-4 border-b border-gray-100">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-small">
        <div><span className="text-gray-500 block text-xs mb-1">Full Name</span><span className="font-medium text-hotel-charcoal">—</span></div>
        <div><span className="text-gray-500 block text-xs mb-1">Email</span><span className="font-medium text-hotel-charcoal">—</span></div>
        <div><span className="text-gray-500 block text-xs mb-1">Mobile</span><span className="font-medium text-hotel-charcoal">—</span></div>
        <div><span className="text-gray-500 block text-xs mb-1">City</span><span className="font-medium text-hotel-charcoal">—</span></div>
      </div>
      <div className="mt-6 pt-4 border-t border-gray-100">
        <button className="btn-secondary btn-sm">Edit Profile</button>
      </div>
    </div>
  );
}

function MyBookings() {
  return (
    <div className="card p-6 md:p-8">
      <h2 className="text-h3 font-bold mb-6 pb-4 border-b border-gray-100">My Booking Requests</h2>
      <EmptyState
        icon={<BedDouble className="h-14 w-14" strokeWidth={1} />}
        title="No booking requests yet"
        description="Your booking requests will appear here once you submit one."
        action={<Link to="/book" className="btn-primary btn-sm">Book Your Stay</Link>}
      />
    </div>
  );
}

function MyEvents() {
  return (
    <div className="card p-6 md:p-8">
      <h2 className="text-h3 font-bold mb-6 pb-4 border-b border-gray-100">My Event Enquiries</h2>
      <EmptyState
        icon={<FileText className="h-14 w-14" strokeWidth={1} />}
        title="No event enquiries yet"
        description="Your event enquiries will appear here once you submit one."
        action={<Link to="/event-enquiry" className="btn-primary btn-sm">Plan an Event</Link>}
      />
    </div>
  );
}

function MyConversations() {
  return (
    <div className="card p-6 md:p-8">
      <h2 className="text-h3 font-bold mb-6 pb-4 border-b border-gray-100">AI Conversations</h2>
      <EmptyState
        icon={<MessageSquare className="h-14 w-14" strokeWidth={1} />}
        title="No conversations yet"
        description="Your conversations with the SVN Assistant will appear here."
        action={<button className="btn-primary btn-sm">Ask SVN Assistant</button>}
      />
    </div>
  );
}

const tabs = [
  { name: 'My Profile', path: '/profile', icon: User },
  { name: 'My Bookings', path: '/profile/bookings', icon: Calendar },
  { name: 'My Events', path: '/profile/events', icon: FileText },
  { name: 'AI Conversations', path: '/profile/conversations', icon: MessageSquare },
];

export default function Profile() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div className="bg-hotel-cream min-h-screen">
      <div className="container-hotel py-10 md:py-14">

        {/* Welcome Header */}
        <div className="mb-8">
          <h1 className="text-h2 font-bold mb-1">Welcome back</h1>
          <p className="text-small text-gray-500">Manage your bookings, events, and conversations.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">

          {/* Sidebar */}
          <div className="md:w-64 flex-shrink-0">
            <div className="card overflow-hidden">
              <div className="p-5 bg-hotel-charcoal text-center">
                <div className="w-12 h-12 bg-hotel-gold/20 rounded-full flex items-center justify-center mx-auto mb-2 border border-hotel-gold/30">
                  <User className="h-5 w-5 text-hotel-gold" />
                </div>
                <div className="text-small font-medium text-white">Guest</div>
              </div>
              <nav className="py-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const isActive = location.pathname === tab.path;
                  return (
                    <Link
                      key={tab.name}
                      to={tab.path}
                      className={`flex items-center gap-3 px-5 py-3 text-small font-medium border-l-3 transition-colors ${
                        isActive
                          ? 'border-l-hotel-maroon bg-hotel-cream text-hotel-maroon'
                          : 'border-l-transparent text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.name}
                    </Link>
                  );
                })}
                <button
                  onClick={() => navigate('/login')}
                  className="flex items-center gap-3 px-5 py-3 text-small font-medium text-status-error hover:bg-red-50 transition-colors w-full mt-1 border-t border-gray-100 border-l-3 border-l-transparent"
                >
                  <LogOut className="h-4 w-4" /> Logout
                </button>
              </nav>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <Routes>
              <Route path="/" element={<ProfileOverview />} />
              <Route path="/bookings" element={<MyBookings />} />
              <Route path="/events" element={<MyEvents />} />
              <Route path="/conversations" element={<MyConversations />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}
