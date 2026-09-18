import { Link } from 'react-router-dom';
import { Mail, Lock, Building2 } from 'lucide-react';

export default function Login() {
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
            Sign in to manage your bookings, event enquiries, and access the SVN Hotel Assistant.
          </p>
        </div>
      </div>

      {/* Right: Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="lg:hidden flex items-center gap-2.5 mb-8">
            <div className="h-9 w-9 bg-hotel-maroon rounded-lg flex items-center justify-center">
              <Building2 className="h-5 w-5 text-hotel-gold" />
            </div>
            <span className="text-lg font-serif font-bold text-hotel-maroon">SVN Lake Palace</span>
          </div>

          <h1 className="text-h2 font-bold mb-2">Sign in</h1>
          <p className="text-small text-gray-500 mb-8">
            Don't have an account?{' '}
            <Link to="/register" className="text-hotel-maroon hover:text-hotel-gold font-medium transition-colors">Create Account</Link>
          </p>

          <form className="space-y-5">
            <div>
              <label className="label">Email</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="email" className="input pl-10" placeholder="you@example.com" required />
              </div>
            </div>
            <div>
              <label className="label">Password</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input type="password" className="input pl-10" placeholder="••••••••" required />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-small text-gray-600 cursor-pointer">
                <input type="checkbox" className="rounded border-gray-300 text-hotel-maroon focus:ring-hotel-maroon" />
                Remember me
              </label>
              <a href="#" className="text-small text-hotel-maroon hover:text-hotel-gold font-medium transition-colors">Forgot password?</a>
            </div>
            <button type="submit" className="btn-primary w-full">Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
}
