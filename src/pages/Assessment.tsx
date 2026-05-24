import { motion } from 'motion/react';
import { Brain, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { useState } from 'react';

export default function Assessment() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    "What is your primary goal for therapy?",
    "How have you been feeling over the last two weeks?",
    "Have you participated in therapy before?",
    "What is your preferred method of care (In-person/Remote)?"
  ];

  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <div className="mb-12">
        <span className="text-teal-600 font-bold uppercase tracking-widest text-xs">Self-Discovery Journey</span>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">Free <span className="italic font-serif text-teal-600">Assessment</span></h1>
      </div>

      <motion.div 
        key={currentQuestion}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-slate-900 rounded-[3rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl"
      >
        <div className="relative z-10">
          <div className="mb-12 flex justify-between items-end">
             <span className="text-teal-400 font-mono">Question 0{currentQuestion + 1} / 0{questions.length}</span>
             <Brain className="w-8 h-8 text-teal-400/50" />
          </div>

          <h2 className="text-2xl md:text-4xl font-semibold mb-12 tracking-tight">
            {questions[currentQuestion]}
          </h2>

          <div className="space-y-4">
             {['Option A', 'Option B', 'Option C', 'Option D'].map((opt, i) => (
                <button 
                  key={i} 
                  onClick={() => currentQuestion < questions.length - 1 ? setCurrentQuestion(currentQuestion + 1) : window.location.href = '/booking'}
                  className="w-full p-6 bg-white/5 border border-white/10 rounded-2xl text-left hover:bg-teal-600 hover:border-teal-500 transition-all group flex justify-between items-center"
                >
                  <span className="text-lg opacity-80 group-hover:opacity-100">Sample response for {opt}</span>
                  <ArrowRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all translate-x-2" />
                </button>
             ))}
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500 opacity-10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 opacity-10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2"></div>
      </motion.div>

      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100">
           <ShieldCheck className="w-6 h-6 text-teal-600 shrink-0" />
           <div>
             <h4 className="font-bold">Privacy Guaranteed</h4>
             <p className="text-slate-500 text-sm">Your answers are 100% confidential and only shared with your future therapist.</p>
           </div>
        </div>
        <div className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-slate-100">
           <Sparkles className="w-6 h-6 text-teal-600 shrink-0" />
           <div>
             <h4 className="font-bold">Next Steps</h4>
             <p className="text-slate-500 text-sm">After the assessment, we'll match you with the best-fit specialist for your needs.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
