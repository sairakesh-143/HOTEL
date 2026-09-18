import { Search, CalendarDays } from 'lucide-react';
import EmptyState from '../components/ui/EmptyState';

export default function AdminEvents() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="admin-page-title">Event Enquiries</h1>
        <p className="admin-page-subtitle">Manage and respond to event enquiries from guests.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search by reference or name..." className="input pl-10 py-2" />
        </div>
        <select className="input w-auto py-2">
          <option value="">All Types</option>
          <option>Wedding</option>
          <option>Reception</option>
          <option>Conference</option>
          <option>Business Meeting</option>
          <option>Other</option>
        </select>
        <select className="input w-auto py-2">
          <option value="">All Statuses</option>
          <option>ENQUIRY_RECEIVED</option>
          <option>CONTACTED</option>
          <option>IN_DISCUSSION</option>
          <option>CONFIRMED</option>
          <option>CANCELLED</option>
        </select>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="table-header">
                <th className="py-3 px-4">Reference</th>
                <th className="py-3 px-4">Name</th>
                <th className="py-3 px-4">Event Type</th>
                <th className="py-3 px-4">Date</th>
                <th className="py-3 px-4">Guests</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Created</th>
              </tr>
            </thead>
          </table>
        </div>
        <EmptyState
          icon={<CalendarDays className="h-14 w-14" strokeWidth={1} />}
          title="No event enquiries yet"
          description="New enquiries submitted by guests will appear here."
        />
      </div>
    </div>
  );
}
