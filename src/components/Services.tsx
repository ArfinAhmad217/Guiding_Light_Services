import { motion } from 'motion/react';
import { Activity, Users, Home, GraduationCap, Brain, ShieldCheck } from 'lucide-react';

const services = [
  {
    title: 'ABA Therapy',
    desc: 'Applied Behavior Analysis focused on communication, social skills, and learning readiness.',
    icon: Brain,
  },
  {
    title: 'In-Home Services',
    desc: 'Support delivered in the natural environment where skills are used most every day.',
    icon: Home,
  },
  {
    title: 'Social Skills Groups',
    desc: 'Peer-based learning for children to develop meaningful friendships and social intuition.',
    icon: Users,
  },
  {
    title: 'School Partnerships',
    desc: 'Direct classroom support, consultation, and professional training for educators.',
    icon: GraduationCap,
  },
  {
    title: 'Speech & OT Support',
    desc: 'Integrated developmental care addressing sensory and communication milestones.',
    icon: Activity,
  },
  {
    title: 'Parent Training',
    desc: 'Equipping families with practical strategies to support their child at home.',
    icon: ShieldCheck,
  }
];

export default function Services() {
  return (
    <section className="py-24 bg-brand-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8 text-balance">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-semibold mb-6 text-brand-heading">Our areas of expertise</h2>
            <p className="text-brand-text-muted leading-relaxed">
              We leverage world-class licensed therapists to provide evidence-based care tailored to your unique pace.
            </p>
          </div>
          <button className="text-brand-primary text-sm font-medium hover:underline flex items-center gap-2 mb-2">
            View all specialties &rarr;
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all shadow-lg shadow-teal-100/50">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-heading">{service.title}</h3>
              <p className="text-brand-text-muted text-sm leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
