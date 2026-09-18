interface StatusBadgeProps {
  status: string;
  className?: string;
}

const statusMap: Record<string, { label: string; className: string }> = {
  'REQUEST_RECEIVED': { label: 'Request Received', className: 'badge-neutral' },
  'UNDER_REVIEW': { label: 'Under Review', className: 'badge-pending' },
  'CONFIRMED': { label: 'Confirmed', className: 'badge-success' },
  'CANCELLED': { label: 'Cancelled', className: 'badge-error' },
  'ENQUIRY_RECEIVED': { label: 'Enquiry Received', className: 'badge-neutral' },
  'CONTACTED': { label: 'Contacted', className: 'badge-pending' },
  'IN_DISCUSSION': { label: 'In Discussion', className: 'badge-pending' },
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
  const mapped = statusMap[status] || { label: status.replace(/_/g, ' '), className: 'badge-neutral' };
  return (
    <span className={`${mapped.className} ${className}`}>
      {mapped.label}
    </span>
  );
}
