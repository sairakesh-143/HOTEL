import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Printer, Phone, ArrowLeft, ChevronRight } from 'lucide-react';

export default function EventEnquiry() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState('');

  const [formData, setFormData] = useState({
    fullName: '', phone: '', email: '',
    eventType: '', eventDate: '', guests: '', venue: 'Not Sure Yet', message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e: React.FormEvent) => { e.preventDefault(); setStep(2); };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReference(`EVT-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep(3);
    }, 1500);
  };

  return (
    <div>
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-3">Plan Your Event</h1>
          <p className="text-gray-300">Enquire about hosting weddings, conferences, or meetings.</p>
        </div>
      </section>

      <section className="section bg-hotel-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="card p-6 md:p-8">

            {step === 1 && (
              <form onSubmit={nextStep}>
                <h2 className="text-h3 font-bold mb-6 pb-3 border-b border-gray-100">Event Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="md:col-span-2"><label className="label">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="input" /></div>
                  <div><label className="label">Phone *</label><input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="input" /></div>
                  <div><label className="label">Email *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="input" /></div>

                  <div className="md:col-span-2 pt-3 border-t border-gray-100"><h3 className="font-bold text-hotel-charcoal">Event Information</h3></div>

                  <div><label className="label">Event Type *</label>
                    <select name="eventType" required value={formData.eventType} onChange={handleChange} className="input">
                      <option value="">Select Type</option><option>Wedding</option><option>Reception</option><option>Conference</option><option>Business Meeting</option><option>Other</option>
                    </select>
                  </div>
                  <div><label className="label">Expected Guests</label><input type="number" name="guests" value={formData.guests} onChange={handleChange} className="input" placeholder="e.g. 200" /></div>
                  <div><label className="label">Event Date</label><input type="date" name="eventDate" value={formData.eventDate} onChange={handleChange} className="input" /></div>
                  <div><label className="label">Preferred Venue</label>
                    <select name="venue" value={formData.venue} onChange={handleChange} className="input">
                      <option>Not Sure Yet</option><option>Banquet Hall</option><option>Reception Hall</option><option>Meeting Room</option>
                    </select>
                  </div>
                  <div className="md:col-span-2"><label className="label">Requirements / Message *</label><textarea name="message" required rows={4} value={formData.message} onChange={handleChange} className="input" placeholder="Tell us about your event needs..." /></div>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">Review <ChevronRight className="h-4 w-4 ml-1" /></button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={submitForm}>
                <h2 className="text-h3 font-bold mb-6 pb-3 border-b border-gray-100">Review Enquiry</h2>
                <div className="bg-hotel-cream rounded-lg p-5 mb-6 grid grid-cols-2 gap-4 text-small">
                  <div><span className="text-gray-500 block text-xs mb-0.5">Name</span><span className="font-semibold">{formData.fullName}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Phone</span><span className="font-semibold">{formData.phone}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Email</span><span className="font-semibold">{formData.email}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Event Type</span><span className="font-semibold">{formData.eventType}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Date</span><span className="font-semibold">{formData.eventDate || 'Not specified'}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Guests</span><span className="font-semibold">{formData.guests || 'Not specified'}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Venue</span><span className="font-semibold">{formData.venue}</span></div>
                  <div className="col-span-2"><span className="text-gray-500 block text-xs mb-0.5">Message</span><span className="font-semibold">{formData.message}</span></div>
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(1)} className="btn-ghost" disabled={isSubmitting}><ArrowLeft className="h-4 w-4 mr-1" /> Back</button>
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Submit Event Enquiry'}
                  </button>
                </div>
              </form>
            )}

            {step === 3 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-status-success-bg rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="h-8 w-8 text-status-success" />
                </div>
                <h2 className="text-h2 font-bold mb-2">Event Enquiry Received</h2>
                <p className="text-gray-600 mb-8">Our events team will contact you shortly.</p>
                <div className="card p-5 max-w-sm mx-auto mb-8 text-left">
                  <div className="mb-3"><span className="text-xs text-gray-500 block">Reference</span><span className="text-xl font-bold text-hotel-maroon tracking-wide">{reference}</span></div>
                  <div><span className="text-xs text-gray-500 block">Status</span><span className="badge-neutral">Enquiry Received</span></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button className="btn-secondary btn-sm"><FileText className="h-4 w-4 mr-1.5" />Download</button>
                  <button className="btn-secondary btn-sm"><Printer className="h-4 w-4 mr-1.5" />Print</button>
                  <a href="tel:+917799888859" className="btn-secondary btn-sm"><Phone className="h-4 w-4 mr-1.5" />Contact Hotel</a>
                  <Link to="/events" className="btn-primary btn-sm">Back to Events</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
