import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ChevronRight, ArrowLeft, FileText, Printer, Phone } from 'lucide-react';

export default function Book() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [reference, setReference] = useState('');

  const [formData, setFormData] = useState({
    checkIn: '', checkOut: '', adults: '1', children: '0',
    roomCategory: 'Executive Room', rooms: '1',
    fullName: '', mobile: '', email: '', specialRequest: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = (e: React.FormEvent) => { e.preventDefault(); setStep(step + 1); };

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setReference(`SVN-2026-${Math.floor(1000 + Math.random() * 9000)}`);
      setStep(4);
    }, 1500);
  };

  return (
    <div>
      <section className="bg-hotel-charcoal relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-hotel-maroon/60 to-hotel-charcoal/95" />
        <div className="relative z-10 container-hotel py-16 md:py-20 text-center">
          <h1 className="text-3xl md:text-4xl font-serif text-white font-bold mb-3">Book Your Stay</h1>
          <p className="text-gray-300">Submit a booking request and our team will confirm availability.</p>
        </div>
      </section>

      <section className="section bg-hotel-cream">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">

          {/* Step Indicator */}
          {step < 4 && (
            <div className="flex justify-center items-center mb-10">
              {['Stay Details', 'Guest Details', 'Review'].map((label, i) => (
                <div key={i} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-small font-bold ${
                      step > i + 1 ? 'bg-status-success text-white' : step === i + 1 ? 'bg-hotel-maroon text-white' : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step > i + 1 ? <CheckCircle2 className="h-4 w-4" /> : i + 1}
                    </div>
                    <span className="text-xs text-gray-500 mt-1.5 hidden sm:block">{label}</span>
                  </div>
                  {i < 2 && <div className={`w-16 sm:w-24 h-0.5 mx-2 ${step > i + 1 ? 'bg-status-success' : 'bg-gray-200'}`} />}
                </div>
              ))}
            </div>
          )}

          <div className="card p-6 md:p-8">

            {step === 1 && (
              <form onSubmit={nextStep}>
                <h2 className="text-h3 font-bold mb-6 pb-3 border-b border-gray-100">Stay Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div><label className="label">Check-in Date *</label><input type="date" name="checkIn" required value={formData.checkIn} onChange={handleChange} className="input" /></div>
                  <div><label className="label">Check-out Date *</label><input type="date" name="checkOut" required value={formData.checkOut} onChange={handleChange} className="input" /></div>
                  <div><label className="label">Room Category *</label>
                    <select name="roomCategory" value={formData.roomCategory} onChange={handleChange} className="input">
                      <option>Executive Room</option><option>Club Room</option><option>Premium Room</option><option>Business Room</option>
                    </select>
                  </div>
                  <div><label className="label">Number of Rooms *</label>
                    <select name="rooms" value={formData.rooms} onChange={handleChange} className="input">
                      {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div><label className="label">Adults *</label>
                    <select name="adults" value={formData.adults} onChange={handleChange} className="input">
                      {[1,2,3,4,5,6].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                  <div><label className="label">Children</label>
                    <select name="children" value={formData.children} onChange={handleChange} className="input">
                      {[0,1,2,3,4].map(n => <option key={n}>{n}</option>)}
                    </select>
                  </div>
                </div>
                <div className="flex justify-end">
                  <button type="submit" className="btn-primary">Next <ChevronRight className="h-4 w-4 ml-1" /></button>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={nextStep}>
                <h2 className="text-h3 font-bold mb-6 pb-3 border-b border-gray-100">Guest Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
                  <div className="md:col-span-2"><label className="label">Full Name *</label><input type="text" name="fullName" required value={formData.fullName} onChange={handleChange} className="input" /></div>
                  <div><label className="label">Mobile Number *</label><input type="tel" name="mobile" required value={formData.mobile} onChange={handleChange} className="input" placeholder="+91 XXXXX XXXXX" /></div>
                  <div><label className="label">Email Address *</label><input type="email" name="email" required value={formData.email} onChange={handleChange} className="input" /></div>
                  <div className="md:col-span-2"><label className="label">Special Requests</label><textarea name="specialRequest" rows={3} value={formData.specialRequest} onChange={handleChange} className="input" /></div>
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(1)} className="btn-ghost"><ArrowLeft className="h-4 w-4 mr-1" /> Back</button>
                  <button type="submit" className="btn-primary">Review <ChevronRight className="h-4 w-4 ml-1" /></button>
                </div>
              </form>
            )}

            {step === 3 && (
              <form onSubmit={submitForm}>
                <h2 className="text-h3 font-bold mb-6 pb-3 border-b border-gray-100">Review Request</h2>
                <div className="bg-hotel-cream rounded-lg p-5 mb-6 grid grid-cols-2 gap-4 text-small">
                  <div><span className="text-gray-500 block text-xs mb-0.5">Guest</span><span className="font-semibold">{formData.fullName}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Contact</span><span className="font-semibold">{formData.mobile}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Email</span><span className="font-semibold">{formData.email}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Room</span><span className="font-semibold">{formData.rooms}× {formData.roomCategory}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Stay</span><span className="font-semibold">{formData.checkIn} → {formData.checkOut}</span></div>
                  <div><span className="text-gray-500 block text-xs mb-0.5">Guests</span><span className="font-semibold">{formData.adults} Adults, {formData.children} Children</span></div>
                  {formData.specialRequest && <div className="col-span-2"><span className="text-gray-500 block text-xs mb-0.5">Special Request</span><span className="font-semibold">{formData.specialRequest}</span></div>}
                </div>
                <div className="bg-status-pending-bg border border-status-pending/20 p-4 rounded-lg mb-6 text-small text-status-pending">
                  <strong>Note:</strong> This is a booking request, not an instant confirmation. Our team will contact you with availability and pricing.
                </div>
                <div className="flex justify-between">
                  <button type="button" onClick={() => setStep(2)} className="btn-ghost" disabled={isSubmitting}><ArrowLeft className="h-4 w-4 mr-1" /> Back</button>
                  <button type="submit" className="btn-primary" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </button>
                </div>
              </form>
            )}

            {step === 4 && (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-status-success-bg rounded-full flex items-center justify-center mx-auto mb-5">
                  <CheckCircle2 className="h-8 w-8 text-status-success" />
                </div>
                <h2 className="text-h2 font-bold mb-2">Booking Request Received</h2>
                <p className="text-gray-600 mb-8">Thank you, {formData.fullName}.</p>
                <div className="card p-5 max-w-sm mx-auto mb-8 text-left">
                  <div className="mb-3"><span className="text-xs text-gray-500 block">Reference</span><span className="text-xl font-bold text-hotel-maroon tracking-wide">{reference}</span></div>
                  <div><span className="text-xs text-gray-500 block">Status</span><span className="badge-pending">Request Received</span></div>
                </div>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button className="btn-secondary btn-sm"><FileText className="h-4 w-4 mr-1.5" />Download Receipt</button>
                  <button className="btn-secondary btn-sm"><Printer className="h-4 w-4 mr-1.5" />Print</button>
                  <a href="tel:+917799888859" className="btn-secondary btn-sm"><Phone className="h-4 w-4 mr-1.5" />Contact Hotel</a>
                  <Link to="/" className="btn-primary btn-sm">Back to Home</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
