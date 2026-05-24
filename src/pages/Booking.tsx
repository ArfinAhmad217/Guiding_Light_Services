import { motion } from 'motion/react';
import { Calendar, Clock, User, CheckCircle } from 'lucide-react';
import { useState } from 'react';

export default function Booking() {
  const [step, setStep] = useState(1);

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Book your <span className="italic font-serif text-teal-600">Session</span></h1>
        <div className="flex justify-center gap-4 mt-8">
           {[1, 2, 3].map(i => (
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
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <User className="w-6 h-6 text-teal-600" /> Select Therapy Type
            </h2>
            <div className="grid gap-4">
              {['Individual Therapy', 'Family Counseling', 'Child/Adolescent Care', 'ABA Consultation'].map(type => (
                <button 
                  key={type} 
                  onClick={() => setStep(2)}
                  className="flex justify-between items-center p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-teal-500 hover:bg-teal-50/50 transition-all text-left group"
                >
                  <span className="font-bold text-lg text-slate-800">{type}</span>
                  <CheckCircle className="w-5 h-5 text-teal-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Calendar className="w-6 h-6 text-teal-600" /> Choose Date & Time
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM', '4:00 PM', '5:30 PM'].map(time => (
                <button key={time} onClick={() => setStep(3)} className="p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-teal-600 hover:text-white transition-all font-bold">
                  {time}
                </button>
              ))}
            </div>
            <button onClick={() => setStep(1)} className="text-slate-400 font-bold hover:text-teal-600 transition-colors underline underline-offset-4">Back</button>
          </div>
        )}

        {step === 3 && (
          <div className="text-center py-8 space-y-6">
            <div className="w-20 h-20 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className="text-3xl font-bold">Booking Confirmed!</h2>
            <p className="text-slate-500 max-w-sm mx-auto">
              We've sent a confirmation email to your address with all the session details and link.
            </p>
            <button onClick={() => window.location.href = '/'} className="px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-teal-600 transition-colors">
              Return Home
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
