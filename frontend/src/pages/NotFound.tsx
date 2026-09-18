import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-hotel-cream flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-8xl font-serif font-bold text-hotel-maroon mb-4 opacity-80">404</h1>
      <h2 className="text-h2 font-bold text-hotel-charcoal mb-3">Page Not Found</h2>
      <p className="text-body text-gray-500 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link to="/" className="btn-primary">
        <Home className="h-4 w-4 mr-2" />
        Back to Home
      </Link>
    </div>
  );
}
