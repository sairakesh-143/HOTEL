import { Link } from 'react-router-dom';
import { User, Mail, Lock, Phone, MapPin, Building2 } from 'lucide-react';

export default function Register() {
  return (
    <div className="min-h-screen bg-hotel-cream flex">
      {/* Left: Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-hotel-charcoal text-white relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/40 to-hotel-charcoal" />
        <div className="relative z-10 text-center px-12 max-w-md">
          <div className="h-14 w-14 bg-hotel-maroon rounded-xl flex items-center justify-center mx-auto mb-6">
            <Building2 className="h-7 w-7 text-hotel-gold" />
          </div>
          <h2 className="text-3xl font-serif font-bold mb-4">Hotel SVN Lake Palace</h2>
          <p className="text-gray-400 leading-relaxed">
            Create a guest account to book rooms, plan events, and chat with the SVN Hotel Assistant.
          </p>
        </div>
      </div>

      {/* Right: Register Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="h-9 w-9 bg-hotel-maroon rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-hotel-gold" />
            </div>
            <span className="text-lg font-serif font-bold text-hotel-maroon">SVN Lake Palace</span>
          </div>

          <h1 className="text-h2 font-bold mb-2">Create Guest Account</h1>
          <p className="text-small text-gray-500 mb-8">
            Already have an account?{' '}
            <Link to="/login" className="text-hotel-maroon hover:text-hotel-gold font-medium transition-colors">Sign in</Link>
          </p>

          <form className="space-y-4">
            <div>
              <label className="label">Full Name *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" className="input pl-10" required />
              </div>
            </div>
            <div>
              <label className="label">Email *</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="email" className="input pl-10" required />
              </div>
            </div>
            <div>
              <label className="label">Mobile Number *</label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="tel" className="input pl-10" placeholder="+91 XXXXX XXXXX" required />
              </div>
            </div>
            <div>
              <label className="label">City *</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="text" className="input pl-10" required />
              </div>
            </div>
            <div>
              <label className="label">Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="password" className="input pl-10" placeholder="••••••••" required />
              </div>
            </div>
            <div>
              <label className="label">Confirm Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="password" className="input pl-10" placeholder="••••••••" required />
              </div>
            </div>
            <button type="submit" className="btn-primary w-full mt-2">Create Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
