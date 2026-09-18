import { Building2, Brain, Shield, Server } from 'lucide-react';

export default function AdminSettings() {
  return (
    <div className="animate-fade-in">
      <div className="mb-8">
        <h1 className="admin-page-title">Settings</h1>
        <p className="admin-page-subtitle">System configuration and hotel information.</p>
      </div>

      <div className="space-y-6 max-w-3xl">

        {/* Hotel Information */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-hotel-cream text-hotel-maroon"><Building2 className="h-5 w-5" /></div>
            <h2 className="text-h4 font-bold text-hotel-charcoal">Hotel Information</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-small">
            <div>
              <span className="text-gray-500 block text-xs mb-1">Hotel Name</span>
              <span className="font-medium">Hotel SVN Lake Palace</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">Phone</span>
              <span className="font-medium">+91 77998 88859</span>
            </div>
            <div className="md:col-span-2">
              <span className="text-gray-500 block text-xs mb-1">Address</span>
              <span className="font-medium">8-12-5, PVS Estates, Near Lower Tankbund Rd, RTC Complex Area, Gadi Khana, Balaji Nagar, Vizianagaram, AP 535003</span>
            </div>
          </div>
        </div>

        {/* AI Settings */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-green-50 text-green-600"><Brain className="h-5 w-5" /></div>
            <h2 className="text-h4 font-bold text-hotel-charcoal">AI Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-small">
            <div>
              <span className="text-gray-500 block text-xs mb-1">AI Provider</span>
              <span className="font-medium">Google Gemini</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">RAG Status</span>
              <span className="badge-pending">Not Configured</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">Embedding Model</span>
              <span className="font-medium">768-dimensional vectors</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">API Key</span>
              <span className="font-medium text-gray-400">Configured server-side</span>
            </div>
          </div>
        </div>

        {/* Security */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-purple-50 text-purple-600"><Shield className="h-5 w-5" /></div>
            <h2 className="text-h4 font-bold text-hotel-charcoal">Security</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-small">
            <div>
              <span className="text-gray-500 block text-xs mb-1">Authentication</span>
              <span className="font-medium">Supabase Auth</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">Authorization</span>
              <span className="font-medium">PostgreSQL RLS</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">Admin Role</span>
              <span className="badge-success">Active</span>
            </div>
          </div>
        </div>

        {/* System */}
        <div className="card p-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="p-2 rounded-lg bg-blue-50 text-blue-600"><Server className="h-5 w-5" /></div>
            <h2 className="text-h4 font-bold text-hotel-charcoal">System</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-small">
            <div>
              <span className="text-gray-500 block text-xs mb-1">Database</span>
              <span className="badge-pending">Not Connected</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">Backend API</span>
              <span className="badge-success">Running</span>
            </div>
            <div>
              <span className="text-gray-500 block text-xs mb-1">Knowledge Base</span>
              <span className="font-medium">0 records</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
