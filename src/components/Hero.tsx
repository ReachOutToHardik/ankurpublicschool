import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, GraduationCap, Award, Users } from 'lucide-react';

const slides = [
  {
    image: "https://www.ankurpublicschool.in/data1/images/dsc01423.jpg",
    title: "Welcome To Ankur Public School",
    subtitle: "Knowledge is Power",
    description: "Nurturing the future of India on our sprawling 2-acre lush green campus with world-class facilities and a tranquil ambience."
  },
  {
    image: "https://i.ibb.co/cctvChzc/banner-1.jpg",
    title: "Temple of Knowledge",
    subtitle: "Academic Excellence & Growth",
    description: "Providing quality education through modern sophisticated buildings and spacious airy classrooms designed for your child."
  },
  {
    image: "https://i.ibb.co/tTDDNKyg/banner-2.jpg",
    title: "Holistic Development",
    subtitle: "Beyond Books and Classrooms",
    description: "Focusing on character building, discipline, and emotional growth through sports, arts, and value-based learning."
  }
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div>
      <section className="relative w-full h-[550px] md:h-[750px] overflow-hidden bg-brand-navy">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <img
              src={slides[current].image}
              alt="School Banner"
              className="w-full h-full object-cover brightness-50"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </AnimatePresence>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center bg-black/30">
          <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
            <motion.div
              key={`content-${current}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-brand-gold font-bold uppercase tracking-[0.3em] text-xs md:text-sm mb-4 border-l-4 border-brand-gold pl-4">
                {slides[current].subtitle}
              </span>
              <h1 className="text-4xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
                {slides[current].title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed font-light max-w-2xl">
                {slides[current].description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-brand-gold text-brand-navy px-10 py-4 font-bold uppercase text-[13px] tracking-widest hover:bg-white transition-all shadow-xl rounded-none">
                  Enquire Now
                </button>
                <button className="bg-transparent border-2 border-white text-white px-10 py-4 font-bold uppercase text-[13px] tracking-widest hover:bg-white hover:text-brand-navy transition-all rounded-none backdrop-blur-sm">
                  Download Brochure
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Slider Controls */}
        <div className="absolute bottom-10 right-10 flex gap-4 z-20">
          <button onClick={prev} className="w-12 h-12 rounded-none border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all backdrop-blur-sm">
            <ChevronLeft />
          </button>
          <button onClick={next} className="w-12 h-12 rounded-none border border-white/30 text-white flex items-center justify-center hover:bg-white hover:text-brand-navy transition-all backdrop-blur-sm">
            <ChevronRight />
          </button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`h-1.5 transition-all duration-500 rounded-none ${idx === current ? 'w-10 bg-brand-gold' : 'w-4 bg-white/40'}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Overlay (Floating desktop) */}
      <div className="hidden xl:flex relative z-10 -mt-16 mx-auto max-w-7xl px-6">
        <div className="w-full bg-white grid grid-cols-4 shadow-2xl divide-x divide-slate-100 rounded-none overflow-hidden border border-slate-100">
          {[
            { icon: Users, label: "500+ Students", sub: "Grooming Excellence" },
            { icon: GraduationCap, label: "Experienced Staff", sub: "Expert Guidance" },
            { icon: Award, label: "2 Acres Campus", sub: "Tranquil Learning" },
            { icon: Sparkles, label: "Modern Facilities", sub: "Global Standards" }
          ].map((stat, i) => (
            <div key={i} className="p-8 flex items-center gap-4 hover:bg-slate-50 transition-colors">
              <div className="w-12 h-12 bg-slate-100 rounded-none flex items-center justify-center text-brand-navy">
                <stat.icon size={28} />
              </div>
              <div>
                <p className="font-bold text-slate-800 text-lg leading-none mb-1">{stat.label}</p>
                <p className="text-xs text-slate-500 font-medium">{stat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const Sparkles = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /><path d="M5 3v4" /><path d="M19 17v4" /><path d="M3 5h4" /><path d="M17 19h4" /></svg>
);
