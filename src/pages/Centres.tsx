import { motion } from 'motion/react';
import { MapPin, Phone } from 'lucide-react';

const centers = [
  { name: 'Downtown Wellness Center', address: '123 Health St, Suite 400, Chicago, IL', phone: '312-555-0123' },
  { name: 'Serene Northshore', address: '456 Calm Ave, Evanston, IL', phone: '847-555-0199' },
  { name: 'The Grove Clinic', address: '789 Nature Blvd, Naperville, IL', phone: '630-555-0145' },
];

export default function Centres() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <div className="px-6 max-w-7xl mx-auto text-center mb-16">
        <h1 className="text-5xl lg:text-7xl font-light mb-6">Our <span className="italic font-serif text-teal-600">Centres</span></h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Find a Guiding Light Behavior Services LLC location near you. Each center is designed to be a safe, welcoming environment for behavioral therapy.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-20">
        {centers.map((center) => (
          <div key={center.name} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-full flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-4">{center.name}</h3>
            <p className="text-slate-500 mb-6">{center.address}</p>
            <div className="flex items-center gap-2 text-teal-600 font-bold">
              <Phone className="w-4 h-4" /> {center.phone}
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[3rem] overflow-hidden h-96 relative bg-slate-200">
        <div className="absolute inset-0 flex items-center justify-center text-slate-400">
           {/* Mock Map */}
           <span className="font-bold text-xl uppercase tracking-widest italic font-serif">Interactive Map Preview</span>
        </div>
      </div>
    </div>
  );
}
