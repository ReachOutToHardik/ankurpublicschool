import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const leaders = [
  {
    name: "MRS. MANJU SHARMA",
    role: "Director",
    image: "https://www.ankurpublicschool.in/images/director.jpg",
    quote: "Every child is like a seed which has the potential to grow if it is nourished with love and care under the right guidance. Our mission is to nourish these seeds into mighty oaks."
  },
  {
    name: "MR. ANKUR SHARMA",
    role: "Manager",
    image: "https://www.ankurpublicschool.in/images/manager.jpg",
    quote: "Discipline, Dedication, Devotion. Education and experience are of little use if they aren't radiated through character. We spend time building not just students, but citizens."
  },
  {
    name: "MRS. MAMTA DWIVEDI",
    role: "Principal",
    image: "https://www.ankurpublicschool.in/images/principal.jpg",
    quote: "We want to bring self belief in a child, allow him to experience the opportunity and joy of discovery. Learning should be a passion that lasts a lifetime."
  }
];

export default function Leadership() {
  return (
    <section className="section-padding bg-brand-slate">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-maroon font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">
            Messages from the Desk
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">
            Our Visionary <span className="text-brand-gold italic">Leadership</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {leaders.map((leader, idx) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="bg-white group"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-navy/20 group-hover:bg-brand-navy/0 transition-all duration-300"></div>
              </div>
              <div className="p-8 border-x border-b border-slate-100 relative shadow-sm">
                <div className="absolute -top-6 left-8 bg-brand-gold text-brand-navy px-4 py-1 font-bold text-[10px] uppercase tracking-widest shadow-lg">
                  {leader.role}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4 font-display">{leader.name}</h3>
                <div className="mb-6 h-[80px] overflow-hidden">
                   <p className="text-slate-600 italic text-sm line-clamp-4 leading-relaxed">
                     "{leader.quote}"
                   </p>
                </div>
                <button className="text-brand-maroon font-bold text-[10px] uppercase tracking-widest border-b-2 border-brand-gold/0 hover:border-brand-gold transition-all pb-1 flex items-center gap-2">
                  Read Full Message
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
