interface LoadingSkeletonProps {
  type?: 'card' | 'table' | 'text' | 'stat';
  count?: number;
}

function SkeletonCard() {
  return (
    <div className="card p-5 space-y-3">
      <div className="skeleton h-4 w-1/3 rounded" />
      <div className="skeleton h-8 w-1/2 rounded" />
      <div className="skeleton h-3 w-2/3 rounded" />
    </div>
  );
}

function SkeletonTableRow() {
  return (
    <tr className="border-b border-gray-100">
      {[1, 2, 3, 4, 5].map(i => (
        <td key={i} className="py-3.5 px-4">
          <div className="skeleton h-4 w-full rounded" />
        </td>
      ))}
    </tr>
  );
}

function SkeletonText() {
  return (
    <div className="space-y-3">
      <div className="skeleton h-4 w-3/4 rounded" />
      <div className="skeleton h-4 w-full rounded" />
      <div className="skeleton h-4 w-5/6 rounded" />
    </div>
  );
}

export default function LoadingSkeleton({ type = 'card', count = 4 }: LoadingSkeletonProps) {
  if (type === 'stat') {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
      </div>
    );
  }

  if (type === 'table') {
    return (
      <div className="card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="table-header">
              {[1, 2, 3, 4, 5].map(i => (
                <th key={i} className="py-3 px-4"><div className="skeleton h-3 w-16 rounded" /></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: count }).map((_, i) => <SkeletonTableRow key={i} />)}
          </tbody>
        </table>
      </div>
    );
  }

  if (type === 'text') {
    return <SkeletonText />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {Array.from({ length: count }).map((_, i) => <SkeletonCard key={i} />)}
    </div>
  );
}
