import { Utensils, Coffee, Wine, Flame } from 'lucide-react';

export default function Dining() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Dine, Unwind & Connect</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From casual coffee to evening drinks, discover dining experiences designed to satisfy every palate.
          </p>
        </div>
      </section>

      {/* Dining Options */}
      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Utensils className="h-9 w-9" />, count: '2', title: 'On-site Restaurants', desc: 'Enjoy a variety of culinary experiences at our two distinct on-site restaurants.' },
              { icon: <Coffee className="h-9 w-9" />, count: '2', title: 'Coffee Shops', desc: 'Relaxed coffee moments with freshly brewed beverages and light snacks.' },
              { icon: <Wine className="h-9 w-9" />, count: '1', title: 'Bar & Lounge', desc: 'Unwind in the evening with our selection of beverages in a sophisticated setting.' },
            ].map((opt, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="text-hotel-gold mb-4 flex justify-center">{opt.icon}</div>
                <div className="text-3xl font-serif font-bold text-hotel-charcoal mb-1">{opt.count}</div>
                <h3 className="text-h4 font-bold mb-3">{opt.title}</h3>
                <p className="text-small text-gray-600 leading-relaxed">{opt.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lobby Fireplace */}
      <section className="bg-hotel-charcoal text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="p-12 lg:p-20 flex flex-col justify-center">
            <div className="flex items-center gap-2 text-hotel-gold text-xs font-semibold uppercase tracking-widest mb-4">
              <Flame className="h-4 w-4" /> Signature Guest Experience
            </div>
            <h2 className="text-h2 font-bold text-white mb-6">The Lobby Fireplace</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              A warm, inviting signature experience awaits you at our lobby fireplace.
              The perfect spot to gather, read, or unwind after a day of exploration in Vizianagaram.
            </p>
          </div>
          <div className="bg-gray-800 min-h-[300px] lg:min-h-full flex items-center justify-center">
            <Flame className="h-20 w-20 text-hotel-gold/20" strokeWidth={1} />
          </div>
        </div>
      </section>

      {/* Notice */}
      <section className="py-12 bg-white">
        <div className="container-hotel text-center max-w-2xl">
          <p className="text-small text-gray-500 mb-2">
            Specific restaurant names, menus, and food prices are not listed online.
          </p>
          <p className="text-small font-medium text-hotel-charcoal">
            Information not available. Please contact Hotel SVN Lake Palace for the latest details.
          </p>
        </div>
      </section>
    </div>
  );
}
