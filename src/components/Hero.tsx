import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import therapyHero from '../assets/images/therapy_hero_1779034623463.png';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="z-10"
        >
          <div className="inline-flex items-center px-4 py-1 bg-brand-primary-light border border-teal-100 rounded-full mb-6">
            <span className="text-[10px] uppercase tracking-widest font-bold text-brand-primary">Modern Behavioral Health</span>
          </div>
          <h1 className="text-5xl lg:text-7xl font-light leading-[1.1] mb-6 text-brand-heading text-balance">
            Healing is a <span className="text-brand-primary font-serif italic">journey</span>, not a destination.
          </h1>
          <p className="text-lg text-brand-text-muted mb-10 max-w-lg leading-relaxed">
            We provide evidence-based support designed to help families thrive. Personalized care tailored to your unique pace.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/assessment" className="px-8 py-4 bg-brand-heading text-white rounded-xl shadow-xl shadow-slate-200 font-medium hover:scale-105 transition-transform text-center">
              Start Assessment
            </Link>
            <div className="flex -space-x-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-slate-${1 + i}00 flex items-center justify-center overflow-hidden`}>
                  <img src={`https://i.pravatar.cc/100?u=${i}`} alt="user" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
              ))}
              <div className="pl-5 flex flex-col justify-center">
                <span className="text-xs font-bold text-slate-800">12k+ Happy clients</span>
                <span className="text-[10px] text-slate-400">Rated 4.9/5 stars</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <div className="absolute w-[400px] h-[400px] bg-gradient-to-br from-teal-100/50 to-indigo-100/50 rounded-[4rem] rotate-12 -z-10"></div>
          <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white aspect-[4/5] md:aspect-square w-full max-w-[400px]">
            <img
              src={therapyHero}
              alt="Serene Therapy Room"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden lg:block max-w-[200px]">
             <p className="text-sm font-bold text-brand-primary mb-1">98% Satisfaction</p>
             <p className="text-xs text-brand-text-muted">Based on family feedback surveys in 2025.</p>
          </div>
        </motion.div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-teal-100/30 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[300px] h-[300px] bg-indigo-100/30 blur-[100px] rounded-full"></div>

    </section>
  );
}
