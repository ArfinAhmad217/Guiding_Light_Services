import Hero from '../components/Hero';
import PathCards from '../components/PathCards';
import Services from '../components/Services';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <Hero />
      <PathCards />
      <Services />
      
      {/* Call to Action Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-6xl font-semibold mb-8 tracking-tight">
              Ready to take the <br/><span className="italic font-serif text-teal-400">next step</span> together?
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
              Whether you're starting a journey for yourself or a loved one, our licensed therapists are here to guide you every step of the way.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link to="/booking" className="px-10 py-5 bg-teal-600 text-white rounded-xl shadow-xl shadow-teal-900/40 font-bold text-lg hover:bg-teal-700 transition-all">
                Book a Consultation
              </Link>
              <Link to="/careers" className="bg-transparent border-2 border-slate-700 text-slate-300 px-10 py-5 rounded-xl font-bold text-lg hover:border-teal-600 hover:text-white transition-all">
                Join Our Team
              </Link>
            </div>
          </div>
          
          {/* Background elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-teal-500 opacity-20 blur-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-indigo-500 opacity-20 blur-[120px] translate-x-1/3 translate-y-1/3 rounded-full"></div>
        </div>
      </section>
    </>
  );
}
