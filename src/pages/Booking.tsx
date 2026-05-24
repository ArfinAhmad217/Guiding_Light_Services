import { motion } from 'motion/react';
import { Calendar, Clock, User, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);
  const [therapyType, setTherapyType] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [botcheck, setBotcheck] = useState(''); // Honeypot spam protection

  const [errors, setErrors] = useState<{
    date?: string;
    time?: string;
    name?: string;
    email?: string;
  }>({});

  const [status, setStatus] = useState<'idle' | 'submitting' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  // Move forward from Therapy Selection
  const handleSelectTherapy = (type: string) => {
    setTherapyType(type);
    setStep(2);
  };

  // Validate Step 2 details (Date & Time)
  const handleValidateStep2 = () => {
    const newErrors: { date?: string; time?: string } = {};
    if (!bookingDate) {
      newErrors.date = 'Date selection is required';
    } else {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      const selected = new Date(bookingDate + 'T00:00:00');
      if (selected < today) {
        newErrors.date = 'Booking date cannot be in the past';
      }
    }

    if (!bookingTime) {
      newErrors.time = 'Time slot selection is required';
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      setStep(3);
    }
  };

  // Validate Step 3 details (Contact info) and submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const newErrors: { name?: string; email?: string } = {};
    if (!name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Checking if the bot filled the honeypot
    if (botcheck) {
      setStep(4);
      return;
    }

    setStatus('submitting');
    setStatusMessage('');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'eb3cc8bc-7816-404f-83cf-f0e81480866a',
          subject: `New Session Booking: ${therapyType}`,
          name: name,
          email: email,
          phone: phone || 'Not provided',
          therapy_type: therapyType,
          booking_date: bookingDate,
          booking_time: bookingTime,
          message: notes || 'No additional notes provided',
          from_name: 'Guiding Light Behavior Services Booking Portal',
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('idle');
        setStep(4);
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Network error. Reference your internet connection or try again later.');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book your <span className="italic font-serif text-teal-600">Session</span></h1>
        <div className="flex justify-center gap-4 mt-8">
          {[1, 2, 3, 4].map(i => (
            <div key={i} className={`h-1.5 w-12 rounded-full transition-all ${step >= i ? 'bg-teal-600' : 'bg-slate-200'}`}></div>
          ))}
        </div>
      </div>

      <motion.div 
        key={step}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white rounded-[3rem] p-10 md:p-16 shadow-2xl border border-slate-100"
      >
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-950">
              <User className="w-6 h-6 text-teal-600" /> Select Therapy Type
            </h2>
            <div className="grid gap-4">
              {['Individual Therapy', 'Family Counseling', 'Child/Adolescent Care', 'ABA Consultation'].map(type => (
                <button 
                  key={type} 
                  type="button"
                  onClick={() => handleSelectTherapy(type)}
                  className={`flex justify-between items-center p-6 rounded-2xl border transition-all text-left group ${
                    therapyType === type 
                      ? 'border-teal-500 bg-teal-50/50' 
                      : 'border-slate-100 bg-slate-50 hover:border-teal-500 hover:bg-teal-50/50'
                  }`}
                >
                  <span className="font-bold text-lg text-slate-800">{type}</span>
                  <CheckCircle className={`w-5 h-5 text-teal-600 transition-opacity ${
                    therapyType === type ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-950">
              <Calendar className="w-6 h-6 text-teal-600" /> Choose Date & Time
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Date Selection */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-900 ml-1 block">Select Date</label>
                <input 
                  type="date"
                  value={bookingDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => {
                    setBookingDate(e.target.value);
                    if (errors.date) setErrors(prev => ({ ...prev, date: undefined }));
                  }}
                  className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${
                    errors.date ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                  } focus:ring-1 outline-none transition-all text-slate-800 font-medium`}
                />
                {errors.date && (
                  <p className="text-xs text-rose-600 font-semibold ml-1">{errors.date}</p>
                )}
              </div>

              {/* Helpful Side Info */}
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex flex-col justify-center">
                <p className="text-slate-600 text-sm leading-relaxed mb-1">
                  💡 <span className="font-semibold text-slate-800">Note:</span> If you are booking for the first time, please select a general assessment date. Time slots are displayed in your local time zone.
                </p>
              </div>
            </div>

            {/* Time Slot Picker */}
            <div className="space-y-4 pt-4">
              <label className="text-sm font-bold text-slate-900 ml-1 block">Choose a Available Time Slot</label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'].map(time => {
                  const isSelected = bookingTime === time;
                  return (
                    <button 
                      type="button"
                      key={time} 
                      onClick={() => {
                        setBookingTime(time);
                        if (errors.time) setErrors(prev => ({ ...prev, time: undefined }));
                      }} 
                      className={`p-4 rounded-xl border font-bold transition-all ${
                        isSelected 
                          ? 'border-teal-600 bg-teal-600 text-white shadow-xl shadow-teal-600/20' 
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-500 hover:bg-teal-50/20'
                      }`}
                    >
                      {time}
                    </button>
                  );
                })}
              </div>
              {errors.time && (
                <p className="text-xs text-rose-600 font-semibold ml-1">{errors.time}</p>
              )}
            </div>

            <div className="pt-6 flex justify-between items-center border-t border-slate-100">
              <button 
                type="button"
                onClick={() => setStep(1)} 
                className="text-slate-400 font-bold hover:text-teal-600 transition-colors flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Therapy Type
              </button>
              <button 
                type="button"
                onClick={handleValidateStep2}
                className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-colors flex items-center gap-2"
              >
                Continue to Details <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3 text-slate-950">
              <User className="w-6 h-6 text-teal-600" /> Support Details
            </h2>

            {status === 'error' && (
              <div className="p-5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-sm font-medium">
                {statusMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot Spam Protection Field */}
              <div className="hidden" style={{ display: 'none' }}>
                <input
                  type="text"
                  name="botcheck"
                  value={botcheck}
                  onChange={(e) => setBotcheck(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              {/* Date & Time Summary Card */}
              <div className="p-6 bg-slate-50 border border-slate-100 rounded-2xl grid md:grid-cols-3 gap-4 text-slate-700 text-sm">
                <div>
                  <span className="block text-slate-400 font-bold text-xs uppercase mb-1">Selected Service</span>
                  <span className="font-bold text-slate-900 text-base">{therapyType}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold text-xs uppercase mb-1">Appointment Date</span>
                  <span className="font-bold text-slate-900 text-base">{bookingDate}</span>
                </div>
                <div>
                  <span className="block text-slate-400 font-bold text-xs uppercase mb-1">Selected Place/Time</span>
                  <span className="font-bold text-slate-900 text-base">{bookingTime}</span>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) setErrors(prev => ({ ...prev, name: undefined }));
                    }}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${
                      errors.name ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                    } focus:ring-1 outline-none transition-all`} 
                    placeholder="John Doe" 
                  />
                  {errors.name && (
                    <p className="text-xs text-rose-600 font-semibold ml-1">{errors.name}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-900 ml-1">Email Address</label>
                  <input 
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors(prev => ({ ...prev, email: undefined }));
                    }}
                    className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${
                      errors.email ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'
                    } focus:ring-1 outline-none transition-all`} 
                    placeholder="john@example.com" 
                  />
                  {errors.email && (
                    <p className="text-xs text-rose-600 font-semibold ml-1">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Phone Number <span className="text-slate-400 font-normal">(Optional)</span></label>
                <input 
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" 
                  placeholder="(123) 456-7890" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Any specific needs or context for the therapist? <span className="text-slate-400 font-normal">(Optional)</span></label>
                <textarea 
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={4} 
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" 
                  placeholder="Tell us a little bit about what you hope to address..."
                ></textarea>
              </div>

              <div className="pt-6 flex justify-between items-center border-t border-slate-100">
                <button 
                  type="button"
                  onClick={() => setStep(2)} 
                  className="text-slate-400 font-bold hover:text-teal-600 transition-colors flex items-center gap-2"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Time Picker
                </button>
                <button 
                  type="submit"
                  disabled={status === 'submitting'}
                  className="px-10 py-5 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 disabled:bg-slate-400 transition-colors shadow-xl shadow-teal-600/30 flex justify-center items-center gap-2 cursor-pointer"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Scheduling...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </button>
              </div>
            </form>
          </div>
        )}

        {step === 4 && (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl shadow-teal-500/10">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900">Booking Confirmed!</h2>
            <p className="text-slate-500 max-w-sm mx-auto leading-relaxed">
              We've registered your appointment. A confirmation email for your session on <span className="font-semibold text-slate-800">{bookingDate}</span> at <span className="font-semibold text-slate-800">{bookingTime}</span> has been dispatched.
            </p>

            <div className="bg-slate-50 border border-slate-100 p-6 rounded-2xl max-w-sm mx-auto text-left text-sm space-y-2 mt-4">
              <h4 className="font-bold text-slate-900 mb-2">Booking Summary</h4>
              <p className="text-slate-600"><span className="text-slate-400 font-semibold uppercase text-xs block">Service</span> {therapyType}</p>
              <p className="text-slate-600"><span className="text-slate-400 font-semibold uppercase text-xs block">Date & Time</span> {bookingDate} @ {bookingTime}</p>
              <p className="text-slate-600"><span className="text-slate-400 font-semibold uppercase text-xs block">Client Name</span> {name}</p>
            </div>

            <button 
              type="button" 
              onClick={() => window.location.href = '/'} 
              className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-colors shadow-xl shadow-slate-900/10"
            >
              Return Home
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
