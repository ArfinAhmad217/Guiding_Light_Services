import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl lg:text-7xl font-light mb-6">Our <span className="italic font-serif text-teal-600">Story</span></h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Guiding Light Behavior Services LLC was founded on the principle that evidence-based behavioral health care should be accessible, professional, and deeply compassionate.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
          <p>
            At Guiding Light Behavior Services LLC, we believe that behavioral health is a journey that requires expertise and a supportive hand. Our team is dedicated to providing personalized care tailored to each client's unique path.
          </p>
          <p>
            Since our inception, we have helped thousands of families navigate life's challenges. Our approach combines clinical excellence with the specialized needs of behavioral therapy.
          </p>
          <div className="pt-6 font-serif italic text-2xl text-slate-900 border-l-4 border-teal-500 pl-6">
            "Your mental health is a priority. Your happiness is an essential. Your self-care is a necessity."
          </div>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-2xl h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=1000" 
            alt="Therapist speaking" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
}
