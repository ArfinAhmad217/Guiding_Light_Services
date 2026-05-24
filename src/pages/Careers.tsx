import { motion } from 'motion/react';
import { Briefcase, ArrowRight } from 'lucide-react';

const jobs = [
  { title: 'Licensed Behavioral Therapist', type: 'Full-time', location: 'Chicago, IL' },
  { title: 'School Psychologist', type: 'Contract', location: 'Remote / Evanston, IL' },
  { title: 'Clinical Coordinator', type: 'Full-time', location: 'Naperville, IL' },
];

export default function Careers() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-5xl lg:text-7xl font-light mb-6">Join our <span className="italic font-serif text-teal-600">Team</span></h1>
        <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
          Be part of a movement to redefine mental health care. We are always looking for passionate, driven clinical professionals.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-20 items-center mb-32">
        <div className="space-y-8">
           <h2 className="text-3xl font-bold">Why Guiding Light Behavior Services LLC?</h2>
           <div className="space-y-6">
              {[
                { title: 'Mission-Driven Work', text: 'Join a team dedicated to real impact in the lives of children and families.' },
                { title: 'Professional Growth', text: 'Subsidized CEUs and mentorship from senior clinical leaders.' },
                { title: 'Collaborative Culture', text: 'A supportive, multidisciplinary environment where your voice matters.' }
              ].map(benefit => (
                <div key={benefit.title}>
                  <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-slate-500">{benefit.text}</p>
                </div>
              ))}
           </div>
        </div>
        <div className="bg-teal-600 rounded-[3rem] p-12 text-white shadow-2xl shadow-teal-900/40">
           <h2 className="text-3xl font-bold mb-6" id="careers-apply">Ready to apply?</h2>
           <p className="text-teal-50 mb-10 leading-relaxed text-lg">
             Send your CV and a brief cover letter to our recruitment team, or browse our active listings.
           </p>
           <button className="bg-white text-teal-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
             talent@guidinglightservices.com
           </button>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-10 border border-slate-100 shadow-sm">
        <h2 className="text-2xl font-bold mb-8">Active Openings</h2>
        <div className="space-y-4">
          {jobs.map(job => (
            <div key={job.title} className="group flex flex-col md:flex-row justify-between items-start md:items-center p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-200">
               <div>
                 <h3 className="text-xl font-bold group-hover:text-teal-600 transition-colors">{job.title}</h3>
                 <p className="text-slate-400 text-sm mt-1">{job.type} • {job.location}</p>
               </div>
               <button className="mt-4 md:mt-0 flex items-center gap-2 text-teal-600 font-bold group-hover:translate-x-2 transition-transform">
                 Apply Now <ArrowRight className="w-4 h-4" />
               </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
