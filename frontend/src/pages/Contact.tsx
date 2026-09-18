import { MapPin, Phone, Clock, Train, Plane } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-20 md:py-28 text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-white font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Reach out for reservations, event planning, or any inquiries.
          </p>
        </div>
      </section>

      <section className="section bg-hotel-cream">
        <div className="container-hotel">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Contact Details */}
            <div>
              <h2 className="text-h2 font-bold mb-8">Hotel SVN Lake Palace</h2>

              <div className="space-y-6 mb-10">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-hotel-gold/10 text-hotel-gold flex-shrink-0">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-hotel-charcoal mb-1 text-small">Address</h3>
                    <p className="text-small text-gray-600 leading-relaxed">
                      8-12-5, PVS Estates, Near Lower Tankbund Rd,<br />
                      RTC Complex Area, Gadi Khana, Balaji Nagar,<br />
                      Vizianagaram, Andhra Pradesh 535003, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-hotel-gold/10 text-hotel-gold flex-shrink-0">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-hotel-charcoal mb-1 text-small">Phone</h3>
                    <a href="tel:+917799888859" className="text-hotel-maroon hover:text-hotel-gold transition-colors font-medium text-lg">
                      +91 77998 88859
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-lg bg-hotel-gold/10 text-hotel-gold flex-shrink-0">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-hotel-charcoal mb-1 text-small">Hours</h3>
                    <p className="text-small text-gray-600">Open 24 Hours</p>
                    <p className="text-small text-gray-600 mt-1">Check-in: <span className="font-medium text-hotel-charcoal">From 12:00 PM</span></p>
                    <p className="text-small text-gray-600">Check-out: <span className="font-medium text-hotel-charcoal">10:00 AM</span></p>
                  </div>
                </div>
              </div>

              <hr className="border-gray-200 mb-8" />

              <h3 className="text-h3 font-bold mb-5">Getting Here</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Train className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-hotel-charcoal text-small">Vizianagaram Junction</div>
                    <div className="text-xs text-gray-500">Approximately 14-minute walk</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Plane className="h-5 w-5 text-gray-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-hotel-charcoal text-small">Visakhapatnam Airport (VTZ)</div>
                    <div className="text-xs text-gray-500">Approximately 100-minute drive</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map / Enquiry */}
            <div className="space-y-8">
              <div className="card bg-gray-100 min-h-[300px] flex items-center justify-center">
                <MapPin className="h-12 w-12 text-gray-300" />
              </div>

              {/* Quick Enquiry */}
              <div className="card p-6">
                <h3 className="text-h4 font-bold mb-5">Quick Enquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="label">Full Name *</label>
                    <input type="text" className="input" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="label">Phone *</label>
                      <input type="tel" className="input" required />
                    </div>
                    <div>
                      <label className="label">Email *</label>
                      <input type="email" className="input" required />
                    </div>
                  </div>
                  <div>
                    <label className="label">Message *</label>
                    <textarea rows={3} className="input" required />
                  </div>
                  <button type="submit" className="btn-primary w-full">Send Enquiry</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
