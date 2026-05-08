import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';

const testimonials = [
  {
    name: "Rajesh Khanna",
    role: "Parent of Class VII Student",
    text: "Ankur Public School has completely transformed my son. The discipline combined with the nurturing environment is exactly what we were looking for. The green campus is a huge plus!"
  },
  {
    name: "Priya Sharma",
    role: "Parent of Class IV Student",
    text: "The individual attention each child receives is commendable. The principal and directors are always approachable and genuinely care about the students' growth."
  },
  {
    name: "Vikram Singh",
    role: "Parent of Nursery Student",
    text: "My daughter loves going to school everyday. The discovery-based learning approach makes education fun for the little ones."
  }
];

export default function Testimonials() {
  return (
    <section className="section-padding bg-brand-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">
            Parent Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Voices of Our <span className="text-brand-gold italic">Community</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 border border-white/10 p-10 rounded-sm hover:bg-white/10 transition-all group"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-brand-gold text-brand-gold" />
                ))}
              </div>
              <Quote className="text-brand-gold mb-6 opacity-30 group-hover:opacity-100 transition-opacity" size={32} />
              <p className="text-blue-100 italic mb-8 leading-relaxed">"{t.text}"</p>
              <div>
                <h4 className="font-bold text-white text-lg">{t.name}</h4>
                <p className="text-brand-gold text-[10px] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
