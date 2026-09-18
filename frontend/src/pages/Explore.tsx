import { MapPin, MessageSquare } from 'lucide-react';

const destinations = [
  { name: 'Vizianagaram Fort', desc: 'A historic fort offering a glimpse into the region\'s rich past and architectural heritage.' },
  { name: 'Ramatheertham Temple', desc: 'An ancient temple site known for its spiritual significance and archaeological importance.' },
  { name: 'Punyagiri', desc: 'A revered pilgrimage destination featuring beautiful surroundings and ancient shrines.' },
  { name: 'Thatipudi Reservoir', desc: 'A scenic reservoir perfect for nature lovers and a peaceful escape from the city.' },
  { name: 'Sirimanu Utsav', desc: 'A major local festival celebrating the goddess Sirimanu, drawing large crowds and cultural festivities.' },
];

export default function Explore() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Explore Vizianagaram</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover the rich culture, history, and natural beauty surrounding Hotel SVN Lake Palace.
          </p>
        </div>
      </section>

      {/* Destinations */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {destinations.map((dest, i) => (
              <div key={i} className="card-hover flex flex-col">
                <div className="aspect-[4/3] bg-white flex items-center justify-center">
                  <MapPin className="h-10 w-10 text-gray-300" strokeWidth={1} />
                </div>
                <div className="p-5">
                  <h3 className="text-h4 font-bold mb-2 text-hotel-maroon">{dest.name}</h3>
                  <p className="text-small text-gray-600 leading-relaxed">{dest.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="card p-6 text-center max-w-2xl mx-auto">
            <p className="text-small text-gray-600 mb-2">
              Exact travel distances and times from the hotel are subject to traffic and routing.
            </p>
            <p className="text-small font-medium text-hotel-charcoal mb-4">
              Information not available. Please contact the hotel for travel assistance.
            </p>
            <button className="btn-secondary btn-sm">
              <MessageSquare className="h-3.5 w-3.5 mr-1.5" />Ask SVN Assistant
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
