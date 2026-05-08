import { motion } from 'motion/react';
import { Book, Microscope, Trophy, Bus, Computer, Palette } from 'lucide-react';

const facilities = [
  {
    icon: Book,
    title: "Rich Library",
    desc: "A vast collection of over 10,000+ books, digital journals, and research resources in a quiet, modern ambience.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
    color: "from-blue-500/20 to-indigo-500/20"
  },
  {
    icon: Microscope,
    title: "Science Labs",
    desc: "Advanced Physics, Chemistry, and Biology labs equipped with the latest instruments for experimental learning.",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800",
    color: "from-emerald-500/20 to-teal-500/20"
  },
  {
    icon: Computer,
    title: "IT Hub",
    desc: "High-speed computer center with the latest systems and high-speed fiber internet for digital literacy.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    color: "from-brand-gold/20 to-amber-500/20"
  },
  {
    icon: Trophy,
    title: "Sports Arena",
    desc: "Multipurpose sports complex with professional coaching for Cricket, Football, and Indoor Games.",
    image: "https://www.ankurpublicschool.in/data1/images/2.jpg",
    color: "from-brand-maroon/20 to-rose-500/20"
  },
  {
    icon: Bus,
    title: "Safe Transport",
    desc: "GPS-enabled bus fleet with trained staff ensuring safe and comfortable transit for all students.",
    image: "https://images.unsplash.com/photo-1557223562-6c77ef16210f?auto=format&fit=crop&q=80&w=800",
    color: "from-orange-500/20 to-yellow-500/20"
  },
  {
    icon: Palette,
    title: "Creative Arts",
    desc: "Vibrant studio for Fine Arts, Music, and Performing Arts to nurture every child's creative potential.",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    color: "from-purple-500/20 to-fuchsia-500/20"
  }
];

export default function Facilities() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Premium Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-brand-gold/5 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-brand-navy/5 blur-[150px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 py-20">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-maroon font-bold uppercase tracking-[0.4em] text-[12px] mb-4 block bg-brand-maroon/5 w-fit px-4 py-1">
              Beyond Academics
            </span>
            <h2 className="text-4xl md:text-7xl font-display font-bold text-brand-navy mb-8 leading-[1.1]">
              A World of <span className="text-brand-gold italic">Opportunities</span>
            </h2>
            <div className="w-20 h-2 bg-brand-gold mb-8"></div>
            <p className="text-slate-600 text-lg leading-relaxed max-w-xl font-light">
              We provide world-class infrastructure designed to inspire curiosity, foster creativity, and build champions of tomorrow.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-0 border-t border-slate-100">
          {facilities.map((fac, idx) => {
            // Layout logic based on diagram: 
            // Row 1 (idx 0,1): 8-4
            // Row 2 (idx 2,3): 4-8
            // Row 3 (idx 4,5): 8-4
            let colSpan = "md:col-span-4";
            if (idx === 0 || idx === 3 || idx === 4) {
              colSpan = "md:col-span-8";
            }

            return (
              <motion.div
                key={fac.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className={`group relative overflow-hidden border-r border-b border-white/10 bg-brand-navy transition-all duration-500 h-[350px] md:h-[450px] ${colSpan}`}
              >
                {/* Image Background with Gradient Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={fac.image}
                    alt={fac.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.4] group-hover:brightness-[0.25]"
                    referrerPolicy="no-referrer"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${fac.color} mix-blend-overlay opacity-40 group-hover:opacity-60 transition-opacity`}></div>
                </div>

                {/* Glowing Border Pop */}
                <div className="absolute inset-0 border-2 border-brand-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none"></div>

                {/* Content Container */}
                <div className="relative z-10 h-full p-8 md:p-12 flex flex-col justify-between text-white">
                  <div className="flex justify-between items-start">
                    <div className="w-16 h-16 bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 group-hover:bg-brand-gold group-hover:text-brand-navy group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <fac.icon size={32} />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-5xl font-display font-bold mb-4 group-hover:text-brand-gold transition-colors">
                      {fac.title}
                    </h3>
                    <p className="text-white/70 text-sm md:text-base leading-relaxed max-w-xl">
                      {fac.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom Line Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-brand-gold group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>



  );
}
