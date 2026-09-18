import { type ReactNode } from 'react';

interface StatCardProps {
  icon: ReactNode;
  value: string | number;
  label: string;
  subtitle?: string;
  accentColor?: string;
}

export default function StatCard({ icon, value, label, subtitle, accentColor = 'bg-hotel-cream text-hotel-maroon' }: StatCardProps) {
  return (
    <div className="card p-5">
      <div className="flex items-start justify-between mb-3">
        <div className={`p-2.5 rounded-lg ${accentColor}`}>
          {icon}
        </div>
      </div>
      <div className="text-2xl font-bold text-hotel-charcoal mb-0.5">{value}</div>
      <div className="text-small text-gray-500 font-medium">{label}</div>
      {subtitle && <div className="text-xs text-gray-400 mt-1">{subtitle}</div>}
    </div>
  );
}
