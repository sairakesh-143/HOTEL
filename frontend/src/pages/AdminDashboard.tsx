import { Link } from 'react-router-dom';
import { BedDouble, CalendarDays, MessageSquare, Brain, Building2 } from 'lucide-react';
import StatCard from '../components/ui/StatCard';
import EmptyState from '../components/ui/EmptyState';

export default function AdminDashboard() {
  return (
    <div className="animate-fade-in">
      {/* Welcome */}
      <div className="mb-8">
        <h1 className="admin-page-title">Welcome back, Admin</h1>
        <p className="admin-page-subtitle">Here's what's happening at Hotel SVN Lake Palace today.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        <StatCard icon={<BedDouble className="h-5 w-5" />} value={0} label="Booking Requests" subtitle="No records yet" accentColor="bg-blue-50 text-blue-600" />
        <StatCard icon={<CalendarDays className="h-5 w-5" />} value={0} label="Event Enquiries" subtitle="No records yet" accentColor="bg-purple-50 text-purple-600" />
        <StatCard icon={<MessageSquare className="h-5 w-5" />} value={0} label="AI Conversations" subtitle="No records yet" accentColor="bg-green-50 text-green-600" />
        <StatCard icon={<Brain className="h-5 w-5" />} value={0} label="Knowledge Records" subtitle="No records yet" accentColor="bg-orange-50 text-orange-600" />
      </div>

      {/* Recent Bookings */}
      <div className="card mb-8">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-h4 font-bold text-hotel-charcoal">Recent Booking Requests</h2>
          <Link to="/admin/bookings" className="text-small text-hotel-maroon hover:text-hotel-gold font-medium transition-colors">View All →</Link>
        </div>
        <EmptyState
          icon={<BedDouble className="h-14 w-14" strokeWidth={1} />}
          title="No booking requests yet"
          description="New requests submitted by guests will appear here."
        />
      </div>

      {/* Recent Events */}
      <div className="card mb-10">
        <div className="p-5 border-b border-gray-100 flex items-center justify-between">
          <h2 className="text-h4 font-bold text-hotel-charcoal">Recent Event Enquiries</h2>
          <Link to="/admin/events" className="text-small text-hotel-maroon hover:text-hotel-gold font-medium transition-colors">View All →</Link>
        </div>
        <EmptyState
          icon={<CalendarDays className="h-14 w-14" strokeWidth={1} />}
          title="No event enquiries yet"
          description="New enquiries submitted by guests will appear here."
        />
      </div>

      {/* Quick Management */}
      <h2 className="text-h4 font-bold text-hotel-charcoal mb-4">Quick Management</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          { icon: <BedDouble className="h-6 w-6" />, label: 'Manage Bookings', path: '/admin/bookings' },
          { icon: <CalendarDays className="h-6 w-6" />, label: 'Manage Events', path: '/admin/events' },
          { icon: <Brain className="h-6 w-6" />, label: 'Knowledge Base', path: '/admin/knowledge' },
          { icon: <Building2 className="h-6 w-6" />, label: 'Settings', path: '/admin/settings' },
        ].map((item, i) => (
          <Link key={i} to={item.path} className="card-hover p-5 flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-hotel-cream text-hotel-maroon">{item.icon}</div>
            <span className="text-small font-medium text-hotel-charcoal">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
