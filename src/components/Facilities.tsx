import { motion } from 'motion/react';
import { Book, Microscope, Trophy, Bus, Computer, Palette } from 'lucide-react';

const facilities = [
  {
    icon: Book,
    title: "Rich Library",
    desc: "A vast collection of books, journals and digital resources to foster a reading habit."
  },
  {
    icon: Microscope,
    title: "Science Labs",
    desc: "Well-equipped Physics, Chemistry and Biology labs for hands-on practical learning."
  },
  {
    icon: Computer,
    title: "Computer Center",
    desc: "Modern computer lab with high-speed internet to keep students tech-savvy."
  },
  {
    icon: Trophy,
    title: "Sports Facilities",
    desc: "Large playground with facilities for Cricket, Football, Basketball and more."
  },
  {
    icon: Bus,
    title: "Transport",
    desc: "Safe and secure transport facility covering all major routes of the city."
  },
  {
    icon: Palette,
    title: "Art & Craft",
    desc: "Dedicated studio for exploring creativity through painting, music and dance."
  }
];

export default function Facilities() {
  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-maroon font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">
            World Class Amenities
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">
            Our <span className="text-brand-gold italic">Facilities</span>
          </h2>
          <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((fac, idx) => (
            <motion.div
              key={fac.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 border border-slate-100 hover:border-brand-gold/30 hover:shadow-xl transition-all group rounded-sm"
            >
              <div className="w-14 h-14 bg-brand-slate rounded-lg flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-navy group-hover:text-white transition-colors">
                <fac.icon size={28} />
              </div>
              <h4 className="text-xl font-bold text-brand-navy mb-3 font-display">{fac.title}</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                {fac.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
