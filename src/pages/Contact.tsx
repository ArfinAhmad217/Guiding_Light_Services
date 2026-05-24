import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
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
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Full Name</label>
                <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-900 ml-1">Email Address</label>
                <input className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 ml-1">Subject</label>
              <select className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 outline-none transition-all">
                <option>General Inquiry</option>
                <option>Booking a Session</option>
                <option>Career Opportunities</option>
                <option>School Partnerships</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-900 ml-1">Message</label>
              <textarea rows={5} className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-200 focus:border-teal-500 outline-none transition-all" placeholder="How can we help?"></textarea>
            </div>
            <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-bold text-lg hover:bg-teal-600 transition-colors shadow-xl shadow-slate-200">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
