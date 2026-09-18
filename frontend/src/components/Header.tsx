import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Building2 } from 'lucide-react';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Rooms', path: '/rooms' },
  { name: 'Dining', path: '/dining' },
  { name: 'Events & Weddings', path: '/events' },
  { name: 'Explore', path: '/explore' },
  { name: 'Contact', path: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white/98 backdrop-blur-sm border-b border-gray-100">
      <div className="container-hotel">
        <div className="flex items-center justify-between h-header">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 flex-shrink-0">
            <div className="h-9 w-9 bg-hotel-maroon rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-hotel-gold" />
            </div>
            <span className="text-lg font-serif font-bold text-hotel-maroon hidden sm:block">
              Hotel SVN Lake Palace
            </span>
            <span className="text-lg font-serif font-bold text-hotel-maroon sm:hidden">
              SVN Lake Palace
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`px-3 py-2 text-small font-medium rounded-button transition-colors ${
                  isActive(link.path)
                    ? 'text-hotel-maroon bg-hotel-cream'
                    : 'text-gray-600 hover:text-hotel-maroon hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+917799888859"
              className="flex items-center gap-1.5 text-small text-gray-600 hover:text-hotel-maroon transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              <span className="font-medium">+91 77998 88859</span>
            </a>
            <Link to="/book" className="btn-primary btn-sm">
              Enquire Now
            </Link>
            <Link
              to="/login"
              className="text-small font-medium text-gray-600 hover:text-hotel-maroon transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile: Phone + Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+917799888859" className="p-2 text-gray-500 hover:text-hotel-maroon transition-colors">
              <Phone className="h-5 w-5" />
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-gray-500 hover:text-hotel-maroon transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container-hotel py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-2.5 rounded-button text-small font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-hotel-cream text-hotel-maroon'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 mt-2 border-t border-gray-100 space-y-3 px-4">
              <Link to="/book" onClick={() => setMobileOpen(false)} className="btn-primary w-full text-center block">
                Enquire Now
              </Link>
              <Link to="/login" onClick={() => setMobileOpen(false)} className="btn-secondary w-full text-center block">
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
