import { motion } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'Campus', 'Classrooms', 'Events', 'Sports'];

const images = [
  { url: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&q=80&w=800", cat: 'Campus' },
  { url: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800", cat: 'Classrooms' },
  { url: "https://images.unsplash.com/photo-1523050335102-c89b1811b131?auto=format&fit=crop&q=80&w=800", cat: 'Events' },
  { url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800", cat: 'Sports' },
  { url: "https://images.unsplash.com/photo-1577896851231-70ef1460370e?auto=format&fit=crop&q=80&w=800", cat: 'Campus' },
  { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800", cat: 'Classrooms' },
];

export default function Gallery() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? images : images.filter(img => img.cat === active);

  return (
    <section id="gallery" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-maroon font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">
            Glimpses of APS
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-8">
            Our Photo <span className="text-brand-gold italic">Gallery</span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all rounded-sm ${
                  active === cat ? 'bg-brand-navy text-white shadow-lg' : 'bg-brand-slate text-slate-500 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((img, i) => (
            <motion.div
              layout
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative aspect-[4/3] overflow-hidden group rounded-sm"
            >
              <img
                src={img.url}
                className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 cursor-pointer"
                alt="Gallery"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                 <span className="text-white font-bold uppercase tracking-[0.3em] text-[10px] border border-white/30 px-4 py-2">
                   View Large
                 </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
