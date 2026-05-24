import { Facebook, Instagram, Linkedin, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 w-fit group">
              <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform">
                 <div className="w-2 h-5 bg-white rounded-t-sm mb-1"></div>
                 <div className="absolute w-4 h-1 bg-white/50 blur-[2px] animate-pulse"></div>
              </div>
              <span className="font-serif text-2xl font-semibold italic tracking-tight text-white ml-2">Guiding Light LLC</span>
            </Link>
            <p className="max-w-sm text-slate-400 leading-relaxed mb-8">
              Empowering families through compassionate behavioral care and evidence-based therapy. We believe every child deserves a path to growth.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"><Facebook className="w-4 h-4 text-slate-300" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"><Instagram className="w-4 h-4 text-slate-300" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"><Twitter className="w-4 h-4 text-slate-300" /></a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors"><Linkedin className="w-4 h-4 text-slate-300" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Explore</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/about" className="hover:text-teal-400 transition-colors text-sm">Our Mission</Link></li>
              <li><Link to="/services" className="hover:text-teal-400 transition-colors text-sm">Licensed Care</Link></li>
              <li><Link to="/centres" className="hover:text-teal-400 transition-colors text-sm">Find a Center</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors text-sm">Resources</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><Link to="/booking" className="hover:text-teal-400 transition-colors text-sm">Book a Session</Link></li>
              <li><Link to="/careers" className="hover:text-teal-400 transition-colors text-sm">Join Our Team</Link></li>
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors text-sm">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500">
          <p>© 2025 Guiding Light Behavior Services LLC. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Your path is our <span className="text-teal-500 italic font-serif text-white">priority</span>.
          </div>
        </div>
      </div>
      <div className="h-2 w-full mt-10 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 absolute left-0 bottom-0"></div>
    </footer>
  );
}
