import { Search, BedDouble } from 'lucide-react';
import EmptyState from '../components/ui/EmptyState';

export default function AdminBookings() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="admin-page-title">Booking Requests</h1>
        <p className="admin-page-subtitle">Manage and track all guest booking requests.</p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search by reference or guest..." className="input pl-10 py-2" />
        </div>
        <select className="input w-auto py-2">
          <option value="">All Statuses</option>
          <option>REQUEST_RECEIVED</option>
          <option>UNDER_REVIEW</option>
          <option>CONFIRMED</option>
          <option>CANCELLED</option>
        </select>
        <select className="input w-auto py-2">
          <option value="">All Rooms</option>
          <option>Executive Room</option>
          <option>Club Room</option>
          <option>Premium Room</option>
          <option>Business Room</option>
        </select>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="table-header">
                <th className="py-3 px-4">Reference</th>
                <th className="py-3 px-4">Guest</th>
                <th className="py-3 px-4">Room</th>
                <th className="py-3 px-4">Check-in</th>
                <th className="py-3 px-4">Check-out</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Created</th>
              </tr>
            </thead>
          </table>
        </div>
        <EmptyState
          icon={<BedDouble className="h-14 w-14" strokeWidth={1} />}
          title="No booking requests yet"
          description="New requests submitted by guests will appear here."
        />
      </div>
    </div>
  );
}
