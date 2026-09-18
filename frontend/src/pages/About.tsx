import { Link } from 'react-router-dom';
import { Building2, Flame, Users, BedDouble, Utensils, Coffee, Wine, Clock, Briefcase } from 'lucide-react';

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">
            About Hotel SVN Lake Palace
          </h1>
          <p className="text-lg text-hotel-gold font-medium">Hospitality in the heart of Vizianagaram</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="section bg-white">
        <div className="container-hotel max-w-3xl text-center">
          <p className="text-lg text-gray-600 leading-relaxed">
            Welcome to Hotel SVN Lake Palace, a premier destination in Vizianagaram where modern comfort meets
            warm hospitality. Whether you are visiting for business, a family vacation, or a grand celebration,
            our hotel is designed to provide an exceptional experience.
          </p>
        </div>
      </section>

      {/* Why Stay With Us */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="text-center mb-14">
            <h2 className="text-h2 font-bold mb-4">Why Stay With Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Users className="h-7 w-7" />, title: 'Genuine Hospitality', desc: 'Warm, attentive service with a personal touch from our experienced hospitality team.' },
              { icon: <BedDouble className="h-7 w-7" />, title: 'Comfortable Rooms', desc: '45 well-appointed rooms across four categories, each designed for a restful stay.' },
              { icon: <Building2 className="h-7 w-7" />, title: 'Convention Center', desc: 'Uniquely connected to the city\'s convention center for seamless event experiences.' },
              { icon: <Briefcase className="h-7 w-7" />, title: 'Business Facilities', desc: '24-hour business center, meeting rooms, and a workspace-friendly environment.' },
              { icon: <Utensils className="h-7 w-7" />, title: 'Dining', desc: '2 restaurants, 2 coffee shops, and a bar & lounge for every occasion.' },
              { icon: <Flame className="h-7 w-7" />, title: 'Events & Weddings', desc: 'Banquet hall, reception hall, and dedicated event support for celebrations.' },
            ].map((item, i) => (
              <div key={i} className="card p-6">
                <div className="text-hotel-gold mb-4">{item.icon}</div>
                <h3 className="text-h4 font-bold mb-2">{item.title}</h3>
                <p className="text-small text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Experience */}
      <section className="section bg-hotel-charcoal text-white">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-hotel-gold text-xs font-semibold uppercase tracking-widest mb-4">
                <Flame className="h-4 w-4" /> Signature Experience
              </div>
              <h2 className="text-h2 font-bold text-white mb-6">The Lobby Fireplace</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A warm, inviting signature experience awaits you at our lobby fireplace.
                The perfect spot to gather with friends, read a book, or simply unwind
                after a long day.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Supported by our 24-hour front desk, multilingual staff, and dedicated concierge,
                we ensure every aspect of your stay is handled with care and professionalism.
              </p>
            </div>
            <div className="aspect-square bg-gray-800 rounded-card flex items-center justify-center border border-gray-700">
              <Flame className="h-20 w-20 text-hotel-gold/30" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Hotel at a Glance */}
      <section className="section bg-white">
        <div className="container-hotel">
          <div className="text-center mb-14">
            <h2 className="text-h2 font-bold mb-4">Hotel at a Glance</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-center">
            {[
              { icon: <BedDouble className="h-6 w-6" />, value: '45', label: 'Rooms' },
              { icon: <Building2 className="h-6 w-6" />, value: '4', label: 'Categories' },
              { icon: <Utensils className="h-6 w-6" />, value: '2', label: 'Restaurants' },
              { icon: <Coffee className="h-6 w-6" />, value: '2', label: 'Coffee Shops' },
              { icon: <Wine className="h-6 w-6" />, value: '1', label: 'Bar & Lounge' },
              { icon: <Clock className="h-6 w-6" />, value: '24/7', label: 'Business Center' },
            ].map((item, i) => (
              <div key={i} className="card p-5">
                <div className="text-hotel-maroon mb-2 flex justify-center">{item.icon}</div>
                <div className="text-2xl font-bold text-hotel-charcoal font-serif">{item.value}</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-hotel-maroon py-20 text-center">
        <div className="container-hotel">
          <h2 className="text-h2 font-bold text-white mb-8">Experience Vizianagaram With Us</h2>
          <Link to="/book" className="btn-accent btn-lg">Plan Your Stay</Link>
        </div>
      </section>
    </div>
  );
}
