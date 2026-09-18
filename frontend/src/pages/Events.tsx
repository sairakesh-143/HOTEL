import { Link } from 'react-router-dom';
import { Building2, Briefcase, Users, CheckCircle2, Clock } from 'lucide-react';

export default function Events() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-24 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-serif text-hotel-gold font-bold mb-6">
            Where Vizianagaram Comes Together
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
            A welcoming venue for weddings, receptions, conferences, meetings and business events,
            seamlessly connected to the city's convention center.
          </p>
          <Link to="/event-enquiry" className="btn-primary btn-lg">Send Event Enquiry</Link>
        </div>
      </section>

      {/* Convention Center Alert */}
      <section className="bg-hotel-beige border-b border-gray-200">
        <div className="container-hotel py-6">
          <div className="flex items-center gap-4">
            <div className="p-2.5 rounded-lg bg-hotel-gold/10 text-hotel-gold flex-shrink-0">
              <Building2 className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-bold text-hotel-charcoal mb-0.5">Connected to the Convention Center</h3>
              <p className="text-small text-gray-600">
                Uniquely positioned with a direct connection to the city's convention center for large-scale conferences, exhibitions, and grand weddings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Weddings */}
      <section className="section bg-white">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 font-bold mb-6">Weddings & Receptions</h2>
              <p className="text-body text-gray-600 mb-8 leading-relaxed">
                Celebrate your special day with our dedicated wedding services. We provide the ideal
                setting for both intimate ceremonies and grand receptions.
              </p>
              <ul className="space-y-3 mb-8">
                {['Wedding services and event support', 'Dedicated Reception Hall', 'Banquet facilities', 'Guest accommodation'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 className="h-4 w-4 text-hotel-gold flex-shrink-0" />
                    <span className="text-small">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-video bg-hotel-cream rounded-card border border-gray-200 flex items-center justify-center">
              <Users className="h-16 w-16 text-gray-300" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="text-center mb-14">
            <h2 className="text-h2 font-bold mb-4">Facilities & Venues</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="h-7 w-7" />, name: 'Banquet Hall', desc: 'Spacious venue for grand celebrations.' },
              { icon: <Building2 className="h-7 w-7" />, name: 'Reception Hall', desc: 'Dedicated hall for memorable gatherings.' },
              { icon: <Briefcase className="h-7 w-7" />, name: 'Meeting Rooms', desc: 'Multiple rooms for business needs.' },
              { icon: <Clock className="h-7 w-7" />, name: 'Business Center', desc: '24-hour business center with support.' },
            ].map((venue, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-hotel-gold mb-4 flex justify-center">{venue.icon}</div>
                <h3 className="text-h4 font-bold mb-2">{venue.name}</h3>
                <p className="text-small text-gray-600">{venue.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-12 bg-white">
        <div className="container-hotel text-center max-w-2xl">
          <div className="card p-6">
            <p className="text-small text-gray-600 mb-2">
              Exact capacities, catering packages, decoration packages, and pricing are not published online.
            </p>
            <p className="text-small font-medium text-hotel-charcoal">
              Information not available. Please contact Hotel SVN Lake Palace for tailored quotes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
