import { useState } from 'react';
import { Search, Plus, Brain, X } from 'lucide-react';
import EmptyState from '../components/ui/EmptyState';

const categories = ['Hotel Info', 'Rooms', 'Dining', 'Events', 'Weddings', 'Facilities', 'Policies', 'Location', 'FAQs', 'Reviews'];

export default function AdminKnowledge() {
  const [showAddModal, setShowAddModal] = useState(false);

  return (
    <div className="animate-fade-in">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <div>
          <h1 className="admin-page-title">AI Knowledge Base</h1>
          <p className="admin-page-subtitle mb-0">Manage verified hotel information used by the SVN Assistant.</p>
        </div>
        <button onClick={() => setShowAddModal(true)} className="btn-primary btn-sm flex-shrink-0">
          <Plus className="h-4 w-4 mr-1.5" /> Add Knowledge
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px] max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search knowledge entries..." className="input pl-10 py-2" />
        </div>
        <select className="input w-auto py-2">
          <option value="">All Categories</option>
          {categories.map(c => <option key={c}>{c}</option>)}
        </select>
        <select className="input w-auto py-2">
          <option value="">All Status</option>
          <option value="true">Verified</option>
          <option value="false">Unverified</option>
        </select>
      </div>

      {/* Knowledge List */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="table-header">
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Source</th>
                <th className="py-3 px-4">Verified</th>
                <th className="py-3 px-4">Updated</th>
                <th className="py-3 px-4">Actions</th>
              </tr>
            </thead>
          </table>
        </div>
        <EmptyState
          icon={<Brain className="h-14 w-14" strokeWidth={1} />}
          title="No knowledge records yet"
          description="Add verified hotel information for the SVN Assistant to use."
          action={<button onClick={() => setShowAddModal(true)} className="btn-primary btn-sm"><Plus className="h-4 w-4 mr-1.5" />Add First Entry</button>}
        />
      </div>

      {/* Add Knowledge Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40" onClick={() => setShowAddModal(false)} />
          <div className="relative bg-white rounded-xl shadow-dropdown w-full max-w-lg max-h-[85vh] overflow-y-auto animate-slide-up">
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
              <h3 className="text-h4 font-bold text-hotel-charcoal">Add Knowledge Entry</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600 transition-colors">
                <X className="h-5 w-5" />
              </button>
            </div>
            <form className="p-6 space-y-5">
              <div>
                <label className="label">Title *</label>
                <input type="text" className="input" placeholder="e.g. Room categories overview" required />
              </div>
              <div>
                <label className="label">Category *</label>
                <select className="input" required>
                  <option value="">Select Category</option>
                  {categories.map(c => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="label">Content *</label>
                <textarea rows={5} className="input" placeholder="Enter the verified information..." required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="label">Source Name</label>
                  <input type="text" className="input" placeholder="e.g. Hotel Website" />
                </div>
                <div>
                  <label className="label">Source URL</label>
                  <input type="url" className="input" placeholder="https://..." />
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="checkbox" id="verified" className="rounded border-gray-300 text-hotel-maroon focus:ring-hotel-maroon" />
                <label htmlFor="verified" className="text-small text-gray-700 font-medium">Mark as verified</label>
              </div>
              <div className="bg-status-pending-bg border border-status-pending/20 p-3 rounded-lg text-xs text-status-pending">
                Only verified entries can be used by the SVN Assistant for RAG responses.
              </div>
              <div className="flex justify-end gap-3 pt-2">
                <button type="button" onClick={() => setShowAddModal(false)} className="btn-ghost">Cancel</button>
                <button type="submit" className="btn-primary">Add Entry</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
