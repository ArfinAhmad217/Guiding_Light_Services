import { motion } from 'motion/react';
import ServicesList from '../components/Services';

export default function ServicesPage() {
  return (
    <div className="pt-32">
      <div className="px-6 max-w-7xl mx-auto text-center mb-16">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl lg:text-7xl font-light mb-6"
        >
          Clinical <span className="italic font-serif text-teal-600">Expertise</span>
        </motion.h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Comprehensive behavioral health services designed to support every stage of development and life transitions.
        </p>
      </div>
      <ServicesList />
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <h2 className="text-3xl font-bold mb-12 text-center">How We Compare</h2>
           <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Personalized', text: 'Care plans tailored specifically to your unique goals and challenges.' },
                { title: 'Evidence-Based', text: 'Methods backed by the latest research in behavioral science.' },
                { title: 'Holistic', text: 'We look at the whole person, not just the symptoms.' }
              ].map(item => (
                <div key={item.title} className="p-8 bg-slate-50 rounded-2xl border border-slate-100">
                  <h3 className="text-xl font-bold mb-4 text-teal-600">{item.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{item.text}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
}
