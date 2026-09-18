import { Link } from 'react-router-dom';
import { BedDouble, Utensils, CalendarDays, MessageSquare, Star, Building2, Coffee, CheckCircle2, Wine, Clock, Briefcase, Users, Flame, ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div>

      {/* ═══ HERO ═══ */}
      <section className="relative bg-hotel-charcoal overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/80 via-hotel-charcoal/90 to-hotel-charcoal" />
        <div className="relative z-10 container-hotel py-28 md:py-36 text-center">
          <div className="inline-block bg-hotel-gold/15 border border-hotel-gold/30 text-hotel-gold px-4 py-1.5 rounded-full text-xs font-semibold mb-6 uppercase tracking-widest">
            Connected to the city's convention center
          </div>
          <h1 className="text-4xl md:text-6xl font-serif text-white font-bold mb-5 tracking-tight">
            Hotel SVN Lake Palace
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-medium mb-3">
            Stay. Celebrate. Meet. Experience Vizianagaram.
          </p>
          <p className="text-body text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            A welcoming destination for comfortable stays, weddings, conferences,
            business events and memorable experiences in Vizianagaram.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <Link to="/book" className="btn-primary btn-lg w-full sm:w-auto">Book Your Stay</Link>
            <Link to="/event-enquiry" className="btn border border-white/30 text-white px-8 py-3 hover:bg-white/10 w-full sm:w-auto">Plan an Event</Link>
          </div>
          <button className="text-hotel-gold hover:text-hotel-gold-light transition-colors flex items-center mx-auto gap-2 text-small font-medium">
            <MessageSquare className="h-4 w-4" />
            Ask SVN Assistant
          </button>

          <div className="mt-10">
            <a href="tel:+917799888859" className="text-small text-gray-500 hover:text-gray-300 transition-colors">
              +91 77998 88859
            </a>
          </div>
        </div>
      </section>

      {/* ═══ QUICK HIGHLIGHTS ═══ */}
      <section className="bg-white border-b border-gray-100">
        <div className="container-hotel py-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-6 text-center">
            {[
              { icon: <BedDouble className="h-6 w-6" />, value: '45', label: 'Rooms' },
              { icon: <Building2 className="h-6 w-6" />, value: '4', label: 'Room Categories' },
              { icon: <Utensils className="h-6 w-6" />, value: '2', label: 'Restaurants' },
              { icon: <Coffee className="h-6 w-6" />, value: '2', label: 'Coffee Shops' },
              { icon: <Wine className="h-6 w-6" />, value: '1', label: 'Bar & Lounge' },
              { icon: <CalendarDays className="h-6 w-6" />, label: 'Weddings', value: '&', sublabel: 'Events' },
              { icon: <Clock className="h-6 w-6" />, value: '24/7', label: 'Business Center' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center py-2">
                <div className="text-hotel-maroon mb-2">{item.icon}</div>
                <span className="text-xl font-bold text-hotel-charcoal font-serif">{item.value}</span>
                <span className="text-xs text-gray-500 uppercase tracking-wider mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WELCOME ═══ */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="aspect-[4/5] bg-white rounded-card border border-gray-200 flex items-center justify-center">
              <div className="text-gray-300 flex flex-col items-center">
                <Building2 className="h-16 w-16 mb-3" strokeWidth={1} />
                <span className="text-small text-gray-400">Hotel Visual</span>
              </div>
            </div>
            <div>
              <h2 className="text-h2 md:text-display font-bold mb-6">A Stay Designed Around Your Experience</h2>
              <p className="text-body text-gray-600 mb-8 leading-relaxed">
                Hotel SVN Lake Palace combines comfortable accommodation, warm hospitality,
                diverse dining, and premier event facilities right in the heart of Vizianagaram.
              </p>
              <ul className="space-y-3 mb-10">
                {['Comfortable rooms', 'Warm hospitality', 'Business travel support', 'Wedding & event facilities', 'Convention center connection'].map((item, i) => (
                  <li key={i} className="flex items-center text-gray-700 gap-3">
                    <CheckCircle2 className="h-5 w-5 text-hotel-gold flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/about" className="btn-secondary">Discover the Hotel</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CONVENTION CENTER ═══ */}
      <section className="section bg-hotel-charcoal text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-1/4 h-full bg-hotel-maroon/10 -skew-x-12 origin-top" />
        <div className="container-hotel relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex p-3 rounded-full bg-hotel-gold/10 text-hotel-gold mb-6">
            <Building2 className="h-8 w-8" />
          </div>
          <h2 className="text-h2 md:text-display font-bold text-white mb-6">
            Connected to the City's Convention Center
          </h2>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Our seamless connection to the convention center makes Hotel SVN Lake Palace the most
            convenient choice for guests attending conferences, business meetings, weddings, and celebrations.
          </p>
          <Link to="/events" className="btn-accent btn-lg">Explore Events & Weddings</Link>
        </div>
      </section>

      {/* ═══ ROOMS PREVIEW ═══ */}
      <section className="section bg-white">
        <div className="container-hotel">
          <div className="text-center mb-14">
            <h2 className="text-h2 md:text-display font-bold mb-4">Stay Your Way</h2>
            <p className="text-body text-gray-600">Choose from four room categories designed for comfortable stays.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Executive Room', desc: 'Comfortable stay with essential amenities.' },
              { name: 'Club Room', desc: 'A refined room option for added comfort.' },
              { name: 'Premium Room', desc: 'A premium stay with a welcoming atmosphere.' },
              { name: 'Business Room', desc: 'Designed with business travelers in mind.' },
            ].map((room, i) => (
              <div key={i} className="card-hover flex flex-col">
                <div className="aspect-[4/3] bg-hotel-cream flex items-center justify-center">
                  <BedDouble className="h-10 w-10 text-gray-300" strokeWidth={1} />
                </div>
                <div className="p-5 flex-grow flex flex-col">
                  <h3 className="text-h4 font-bold mb-2">{room.name}</h3>
                  <p className="text-small text-gray-600 mb-5 flex-grow">{room.desc}</p>
                  <Link to="/rooms" className="text-small font-medium text-hotel-maroon hover:text-hotel-gold flex items-center gap-1 transition-colors">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ DINING PREVIEW ═══ */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="text-center mb-14">
            <h2 className="text-h2 md:text-display font-bold mb-4">Dine, Unwind & Connect</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Utensils className="h-7 w-7" />, label: '2 Restaurants' },
              { icon: <Coffee className="h-7 w-7" />, label: '2 Coffee Shops' },
              { icon: <Wine className="h-7 w-7" />, label: 'Bar & Lounge' },
              { icon: <Flame className="h-7 w-7" />, label: 'Lobby Fireplace' },
            ].map((item, i) => (
              <div key={i} className="card p-6 text-center">
                <div className="text-hotel-gold mb-3 flex justify-center">{item.icon}</div>
                <span className="text-small font-semibold text-hotel-charcoal">{item.label}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/dining" className="btn-secondary">Explore Dining</Link>
          </div>
        </div>
      </section>

      {/* ═══ EVENTS PREVIEW ═══ */}
      <section className="section bg-white">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-h2 md:text-display font-bold mb-6">Where Vizianagaram Comes Together</h2>
              <p className="text-body text-gray-600 mb-8 leading-relaxed">
                A welcoming venue for weddings, receptions, conferences, meetings and business events,
                seamlessly connected to the city's convention center.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: <Users className="h-5 w-5" />, label: 'Weddings' },
                  { icon: <Briefcase className="h-5 w-5" />, label: 'Conferences' },
                  { icon: <CalendarDays className="h-5 w-5" />, label: 'Meetings' },
                  { icon: <Building2 className="h-5 w-5" />, label: 'Banquet Hall' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-gray-700">
                    <div className="text-hotel-gold">{item.icon}</div>
                    <span className="text-small font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
              <Link to="/event-enquiry" className="btn-primary">Plan Your Event</Link>
            </div>
            <div className="aspect-video bg-hotel-cream rounded-card border border-gray-200 flex items-center justify-center">
              <Users className="h-16 w-16 text-gray-300" strokeWidth={1} />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ REVIEWS ═══ */}
      <section className="section bg-hotel-cream border-t border-gray-200">
        <div className="container-hotel max-w-3xl text-center">
          <div className="flex justify-center mb-3 text-hotel-gold">
            {[1,2,3,4].map(i => <Star key={i} className="h-6 w-6 fill-current" />)}
            <Star className="h-6 w-6 fill-current opacity-40" />
          </div>
          <div className="text-3xl font-serif font-bold text-hotel-charcoal mb-1">3.9 / 5</div>
          <p className="text-small text-gray-500 font-medium uppercase tracking-wider mb-6">4,500+ Reviews</p>
          <p className="text-body text-gray-600 leading-relaxed">
            Guests consistently appreciate the hotel's hospitality, staff service and breakfast experience.
          </p>
        </div>
      </section>

      {/* ═══ AI CONCIERGE PREVIEW ═══ */}
      <section className="section bg-hotel-charcoal text-white">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-2 text-hotel-gold text-xs font-semibold uppercase tracking-widest mb-4">
                <MessageSquare className="h-4 w-4" />
                Your Digital Front Desk
              </div>
              <h2 className="text-h2 md:text-display font-bold text-white mb-6">
                Meet Your SVN Hotel Assistant
              </h2>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Ask about rooms, dining, events, facilities and the hotel.
                Get quick, verified answers powered by our hotel knowledge base.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {['Room categories', 'Wedding services', 'Dining options', 'Hotel location'].map((tag, i) => (
                  <span key={i} className="text-xs border border-gray-600 text-gray-400 px-3 py-1.5 rounded-full bg-white/5">{tag}</span>
                ))}
              </div>
              <button className="btn-accent">
                <MessageSquare className="h-4 w-4 mr-2" />
                Ask SVN Assistant
              </button>
            </div>

            {/* Chat Mockup */}
            <div className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl overflow-hidden flex flex-col h-80">
              <div className="bg-gray-800 px-4 py-3 border-b border-gray-700 flex items-center gap-3">
                <div className="h-7 w-7 bg-hotel-maroon rounded-full flex items-center justify-center">
                  <Building2 className="h-3.5 w-3.5 text-white" />
                </div>
                <div>
                  <div className="text-small font-medium text-white">SVN Assistant</div>
                  <div className="text-xs text-gray-500">Verified Knowledge</div>
                </div>
              </div>
              <div className="flex-1 p-4 space-y-3 overflow-hidden">
                <div className="flex justify-end">
                  <div className="bg-hotel-maroon text-white p-2.5 rounded-lg rounded-tr-sm max-w-[75%] text-small">
                    What room categories are available?
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-gray-800 text-gray-300 border border-gray-700 p-2.5 rounded-lg rounded-tl-sm max-w-[85%] text-small leading-relaxed">
                    Hotel SVN Lake Palace offers Executive, Club, Premium and Business Rooms. All rooms include AC, soundproofing, separate sitting area, cable TV, an in-room safe, laptop workspace and free WiFi.
                    <div className="mt-2 text-[10px] text-gray-500 uppercase flex items-center gap-1">
                      <CheckCircle2 className="h-2.5 w-2.5" /> Verified hotel information
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
