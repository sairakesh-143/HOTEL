import { Link } from 'react-router-dom';
import { CheckCircle2, BedDouble, Monitor, Shield, Wifi, Wind, VolumeX, Laptop, MessageSquare } from 'lucide-react';

const amenities = [
  { icon: <Wind className="h-4 w-4" />, name: 'Air Conditioning' },
  { icon: <VolumeX className="h-4 w-4" />, name: 'Soundproofing' },
  { icon: <BedDouble className="h-4 w-4" />, name: 'Separate Sitting Area' },
  { icon: <Monitor className="h-4 w-4" />, name: 'Cable TV' },
  { icon: <Shield className="h-4 w-4" />, name: 'In-room Safe' },
  { icon: <Laptop className="h-4 w-4" />, name: 'Laptop Workspace' },
  { icon: <Wifi className="h-4 w-4" />, name: 'Free WiFi' },
];

const categories = [
  { name: 'Executive Room', desc: 'Comfortable stay with essential amenities designed for travelers looking for quality and value in Vizianagaram.' },
  { name: 'Club Room', desc: 'A refined room option for guests seeking added comfort and a relaxing environment after a busy day.' },
  { name: 'Premium Room', desc: 'A premium stay experience with a welcoming atmosphere, featuring carefully selected furnishings.' },
  { name: 'Business Room', desc: 'Designed with business travelers in mind, providing an optimal environment for work and rest.' },
];

export default function Rooms() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Our Rooms</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            45 well-appointed rooms across four categories. Every room is designed to ensure a restful and productive stay.
          </p>
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.map((room, idx) => (
              <div key={idx} className="card flex flex-col md:flex-row overflow-hidden">
                {/* Image Placeholder */}
                <div className="md:w-2/5 bg-hotel-beige min-h-[220px] flex items-center justify-center border-b md:border-b-0 md:border-r border-gray-100 relative">
                  <BedDouble className="h-12 w-12 text-gray-300" strokeWidth={1} />
                  <div className="absolute bottom-3 left-3 badge-gold text-[10px]">{room.name}</div>
                </div>
                {/* Content */}
                <div className="p-6 md:w-3/5 flex flex-col">
                  <h3 className="text-h3 font-bold mb-3">{room.name}</h3>
                  <p className="text-small text-gray-600 mb-5 flex-grow leading-relaxed">{room.desc}</p>

                  <div className="mb-5">
                    <h4 className="text-xs font-semibold text-hotel-maroon uppercase tracking-wider mb-3">Verified Amenities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {amenities.map((a, i) => (
                        <div key={i} className="flex items-center gap-1.5 text-xs text-gray-600">
                          <CheckCircle2 className="h-3 w-3 text-hotel-gold flex-shrink-0" />
                          <span>{a.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4 border-t border-gray-100 mt-auto">
                    <Link to="/book" className="btn-primary btn-sm flex-1 text-center">Enquire</Link>
                    <button className="btn-ghost btn-sm flex-1 text-center text-hotel-maroon">
                      <MessageSquare className="h-3.5 w-3.5 mr-1.5" />Ask AI
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Notice */}
      <section className="py-12 bg-white">
        <div className="container-hotel max-w-3xl">
          <div className="card bg-hotel-charcoal text-white p-8 text-center">
            <h3 className="text-h3 font-bold text-hotel-gold mb-3">Looking for Prices or Availability?</h3>
            <p className="text-gray-300 mb-6 text-small">
              Room prices, bed sizes, and real-time availability vary.
              Information not available online. Please contact Hotel SVN Lake Palace for the latest details.
            </p>
            <a href="tel:+917799888859" className="btn-accent">Call +91 77998 88859</a>
          </div>
        </div>
      </section>
    </div>
  );
}
