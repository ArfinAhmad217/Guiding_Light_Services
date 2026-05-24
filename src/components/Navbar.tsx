import { motion } from 'motion/react';
import { Menu, Phone, MapPin, X } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Our Centers', href: '/centres' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-brand-primary text-white py-2 px-6 hidden md:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium tracking-wide">
          <div className="flex gap-6">
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" /> 1-800-LIGHT-CARE
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" /> Multiple Locations Nationwide
            </span>
          </div>
          <Link to="/booking" className="hover:underline opacity-90">Book a Session</Link>
        </div>
      </div>

      {/* Main Nav */}
      <div className="bg-white/80 backdrop-blur-md border-b border-brand-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-200">
               <div className="w-2 h-4 bg-white rounded-t-sm"></div>
            </div>
            <span className="font-serif text-xl font-semibold italic tracking-tight text-slate-900">Guiding Light LLC</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex gap-10 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-sm font-medium text-brand-text-muted hover:text-brand-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link to="/booking" className="bg-brand-primary text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-teal-700 transition-all shadow-md hover:shadow-lg">
              Book a Session
            </Link>
          </div>


          {/* Mobile Toggle */}
          <button className="lg:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="lg:hidden overflow-hidden bg-white border-b border-brand-border"
      >
        <div className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-lg font-medium py-2 border-b border-gray-50 text-brand-text"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/booking" 
            className="bg-brand-primary text-white text-center py-4 rounded-full font-semibold mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book a Session
          </Link>
        </div>
      </motion.div>
    </nav>
  );
}
