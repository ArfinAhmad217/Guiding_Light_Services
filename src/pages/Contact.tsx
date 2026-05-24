import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    botcheck: '' // Honeypot spam protection
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email.trim())) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    // Checking if the bot filled the honeypot
    if (formData.botcheck) {
      setStatus('success');
      setStatusMessage('Your message has been sent successfully. We will get back to you soon!');
      setFormData({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
        botcheck: ''
      });
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
          name: formData.name,
          email: formData.email,
          subject: `${formData.subject} - Contact Form Submission`,
          message: formData.message,
          from_name: 'Guiding Light Contact Form',
        }),
      });

      const result = await response.json();

      if (response.status === 200 && result.success) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully. We will get back to you soon!');
        setFormData({
          name: '',
          email: '',
          subject: 'General Inquiry',
          message: '',
          botcheck: ''
        });
        setErrors({});
      } else {
        setStatus('error');
        setStatusMessage(result.message || 'Something went wrong. Please try again later.');
      }
    } catch (err) {
      setStatus('error');
      setStatusMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <h1 className="text-5xl lg:text-7xl font-light mb-8 italic font-serif text-teal-600">Contact Us.</h1>
          <p className="text-xl text-slate-500 mb-12 leading-relaxed">
            Have questions about our services or want to partner with us? Reach out and our team will get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Call Us</h3>
                <p className="text-slate-500">1-800-LIGHT-CARE</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Email Us</h3>
                <p className="text-slate-500">hello@guidinglightservices.com</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Main Office</h3>
                <p className="text-slate-500">123 Health St, Suite 400, Chicago, IL</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-[3rem] p-10 shadow-2xl border border-slate-100"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Honeypot Spam Protection Field */}
            <div className="hidden" style={{ display: 'none' }}>
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={(e) => setFormData({ ...formData, botcheck: e.target.value })}
                autoComplete="off"
                tabIndex={-1}
              />
            </div>

            {status === 'success' && (
              <div className="p-5 bg-teal-50 border border-teal-200 text-teal-800 rounded-2xl text-sm font-medium animate-fade-in">
                {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="p-5 bg-rose-50 border border-rose-200 text-rose-800 rounded-2xl text-sm font-medium animate-fade-in">
                {statusMessage}
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.name ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'} focus:ring-1 focus:ring-offset-0 focus:outline-none transition-all`} 
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
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.email ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'} focus:ring-1 focus:ring-offset-0 focus:outline-none transition-all`} 
                  placeholder="john@example.com" 
                />
                {errors.email && (
                  <p className="text-xs text-rose-600 font-semibold ml-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 ml-1">Subject</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 outline-none transition-all"
              >
                <option value="General Inquiry">General Inquiry</option>
                <option value="Booking a Session">Booking a Session</option>
                <option value="Career Opportunities">Career Opportunities</option>
                <option value="School Partnerships">School Partnerships</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 ml-1">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5} 
                className={`w-full px-6 py-4 rounded-2xl bg-slate-50 border ${errors.message ? 'border-rose-400 focus:ring-rose-400 focus:border-rose-400' : 'border-slate-200 focus:border-teal-500 focus:ring-teal-500'} focus:ring-1 focus:ring-offset-0 focus:outline-none transition-all`} 
                placeholder="How can we help?"
              ></textarea>
              {errors.message && (
                <p className="text-xs text-rose-600 font-semibold ml-1">{errors.message}</p>
              )}
            </div>
            <button 
              type="submit"
              disabled={status === 'submitting'}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-teal-600 disabled:bg-slate-400 transition-colors shadow-xl shadow-slate-200 flex justify-center items-center gap-2"
            >
              {status === 'submitting' ? (
                <>
                  <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
