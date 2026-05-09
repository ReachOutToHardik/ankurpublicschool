import { motion } from 'motion/react';
import { Trees, School, BookOpen, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="section-padding bg-white bg-dots relative overflow-hidden pt-32 xl:pt-48 pb-16">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/2 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-brand-navy/5 skew-x-12 -translate-x-1/2 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
             <span className="text-brand-maroon font-bold uppercase tracking-widest text-[13px] mb-4 block">
               Welcome To Ankur Public School
             </span>
             <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8 leading-tight">
               Cultivating Minds in the <span className="text-brand-gold italic">Lap of Nature</span>
             </h2>

             <div className="space-y-6 text-slate-600 leading-relaxed text-lg">
               <p>
                 As you walk into the premises of Ankur Public School, you will feel the deep sense of nature. 
                 The passage carrying us inside the campus tells the story of great footprints that have 
                 shown us a future paradise for education.
               </p>
               <p>
                 Sprawled on 2 acres of lush green grounds in a tranquil ambience, the school is housed in 
                 modern sophisticated buildings. We believe every child is like a seed with the potential 
                 to grow if nourished with love and care under right guidance.
               </p>
             </div>

             <div className="grid grid-cols-2 gap-8 mt-12">
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 shrink-0 bg-brand-slate rounded-full flex items-center justify-center text-brand-maroon">
                   <Trees size={22} />
                 </div>
                 <div>
                   <h4 className="font-bold text-brand-navy mb-1">Greeen Campus</h4>
                   <p className="text-xs text-slate-500">2-acre lush green tranquil environment.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 shrink-0 bg-brand-slate rounded-full flex items-center justify-center text-brand-maroon">
                   <School size={22} />
                 </div>
                 <div>
                   <h4 className="font-bold text-brand-navy mb-1">Sophisticated Facility</h4>
                   <p className="text-xs text-slate-500">Modern airy classrooms & furniture.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 shrink-0 bg-brand-slate rounded-full flex items-center justify-center text-brand-maroon">
                   <BookOpen size={22} />
                 </div>
                 <div>
                   <h4 className="font-bold text-brand-navy mb-1">Expert Pedagogy</h4>
                   <p className="text-xs text-slate-500">Experience the joy of discovery.</p>
                 </div>
               </div>
               <div className="flex items-start gap-4">
                 <div className="w-10 h-10 shrink-0 bg-brand-slate rounded-full flex items-center justify-center text-brand-maroon">
                   <Heart size={22} />
                 </div>
                 <div>
                   <h4 className="font-bold text-brand-navy mb-1">Complete Grooming</h4>
                   <p className="text-xs text-slate-500">Love, care and value-based education.</p>
                 </div>
               </div>
             </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2 relative"
          >
            <div className="aspect-[4/5] rounded-none overflow-hidden border-8 border-brand-slate shadow-2xl relative z-10">
              <img 
                src="https://i.ibb.co/9HmR3cPH/ankur-1.jpg" 
                alt="School Environment" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            
            {/* Decals */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-navy/5 rounded-full -z-0"></div>
            <div className="absolute top-10 -right-6 w-32 h-32 bg-brand-gold/10 rounded-full -z-0"></div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-6 text-brand-navy rounded-sm shadow-xl z-20 hidden md:block">
              <p className="text-3xl font-bold font-display">15+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-80 leading-none mt-1">Years of Legacy</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
