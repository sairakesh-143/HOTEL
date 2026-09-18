import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Building2 } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-hotel-charcoal text-gray-300">
      <div className="container-hotel py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Hotel */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="h-8 w-8 bg-hotel-maroon rounded-lg flex items-center justify-center">
                <Building2 className="h-4 w-4 text-hotel-gold" />
              </div>
              <span className="font-serif font-bold text-white text-lg">SVN Lake Palace</span>
            </div>
            <p className="text-small leading-relaxed text-gray-400">
              A welcoming destination for comfortable stays, weddings, conferences,
              business events and memorable experiences in Vizianagaram.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-small font-semibold text-white uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2.5 text-small">
              <li><Link to="/about" className="text-gray-400 hover:text-hotel-gold transition-colors">About</Link></li>
              <li><Link to="/rooms" className="text-gray-400 hover:text-hotel-gold transition-colors">Rooms</Link></li>
              <li><Link to="/dining" className="text-gray-400 hover:text-hotel-gold transition-colors">Dining</Link></li>
              <li><Link to="/events" className="text-gray-400 hover:text-hotel-gold transition-colors">Events & Weddings</Link></li>
              <li><Link to="/explore" className="text-gray-400 hover:text-hotel-gold transition-colors">Explore Vizianagaram</Link></li>
            </ul>
          </div>

          {/* Guest */}
          <div>
            <h4 className="text-small font-semibold text-white uppercase tracking-wider mb-4">Guest</h4>
            <ul className="space-y-2.5 text-small">
              <li><Link to="/book" className="text-gray-400 hover:text-hotel-gold transition-colors">Book Your Stay</Link></li>
              <li><Link to="/event-enquiry" className="text-gray-400 hover:text-hotel-gold transition-colors">Event Enquiry</Link></li>
              <li><Link to="/login" className="text-gray-400 hover:text-hotel-gold transition-colors">Login</Link></li>
              <li><Link to="/profile" className="text-gray-400 hover:text-hotel-gold transition-colors">My Profile</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-small font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-small">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-hotel-gold flex-shrink-0 mt-0.5" />
                <span className="text-gray-400 leading-relaxed">
                  8-12-5, PVS Estates, Near Lower Tankbund Rd,
                  RTC Complex Area, Gadi Khana, Balaji Nagar,
                  Vizianagaram, AP 535003
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-hotel-gold flex-shrink-0" />
                <a href="tel:+917799888859" className="text-gray-400 hover:text-white transition-colors">+91 77998 88859</a>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 text-hotel-gold flex-shrink-0" />
                <span className="text-gray-400">Open 24 hours</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-hotel py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">© 2026 Hotel SVN Lake Palace. All rights reserved.</p>
          <div className="flex gap-5 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
