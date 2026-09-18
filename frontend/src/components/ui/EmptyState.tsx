import { type ReactNode } from 'react';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}

export default function EmptyState({ icon, title, description, action }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="text-gray-300 mb-4">
        {icon || <Inbox className="h-14 w-14" strokeWidth={1} />}
      </div>
      <h3 className="text-lg font-semibold text-gray-500 mb-1">{title}</h3>
      {description && (
        <p className="text-small text-gray-400 max-w-sm mb-6">{description}</p>
      )}
      {action && <div>{action}</div>}
    </div>
  );
}
