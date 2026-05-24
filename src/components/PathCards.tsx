import { motion } from 'motion/react';
import { Heart, School, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';
import parentCategory from '../assets/images/parent_category_1779034642622.png';
import educatorCategory from '../assets/images/educator_category_1779034660732.png';
import careersCategory from '../assets/images/careers_category_1779034675101.png';

const paths = [
  {
    title: 'I am a Parent',
    description: 'Empowering your child and family through specialized in-home and center-based ABA therapy.',
    icon: Heart,
    image: parentCategory,
    color: 'bg-teal-600',
    cta: 'Find Support',
    href: '/services'
  },
  {
    title: "We're a School District",
    description: 'Partnering with educators to provide expert classroom support and behavior analysis.',
    icon: School,
    image: educatorCategory,
    color: 'bg-indigo-600',
    cta: 'View Services',
    href: '/services'
  },
  {
    title: 'I am an Applicant',
    description: 'Join a team that values growth, compassion, and innovation in behavioral health.',
    icon: Briefcase,
    image: careersCategory,
    color: 'bg-slate-900',
    cta: 'Browse Careers',
    href: '/careers'
  }
];

export default function PathCards() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-4 text-brand-heading">How can we help today?</h2>
          <p className="text-brand-text-muted max-w-2xl">Choose the path that best describes your needs to see how Guiding Light Behavior Services LLC can support your family's journey.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {paths.map((path, index) => (
            <motion.div
              key={path.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative h-[500px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-slate-100"
            >
              <Link to={path.href} className="absolute inset-0 z-20"></Link>
              {/* Background Image with Overlay */}
              <img
                src={path.image}
                alt={path.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-end text-white pointer-events-none">
                <div className={`${path.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 shadow-lg shadow-${path.color.split('-')[1]}-200/20`}>
                   <path.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-3">{path.title}</h3>
                <p className="text-brand-background/80 mb-6 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {path.description}
                </p>
                <div className="flex items-center gap-2 font-bold text-sm tracking-wide uppercase text-teal-400 group-hover:text-white transition-colors">
                  {path.cta} &rarr;
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
