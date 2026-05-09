import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';

const categories = ['All', 'Campus', 'Classrooms', 'Events', 'Sports'];

const images = [
  { url: "https://i.ibb.co/N6mRxvyb/hero-3.jpg", cat: 'Campus' },
  { url: "https://i.ibb.co/LzkjS9Yp/hero-6.jpg", cat: 'Classrooms' },
  { url: "https://i.ibb.co/CpLVR2VW/hero-5.jpg", cat: 'Events' },
  { url: "https://i.ibb.co/rG1pVWfq/hero-4.jpg", cat: 'Sports' },
  { url: "https://i.ibb.co/WvJbQ0g5/hero-7.jpg", cat: 'Campus' },
  { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80&w=800", cat: 'Classrooms' },
];

export default function Gallery() {
  const displayedImages = images.slice(0, 4);

  return (
    <section id="gallery" className="py-20 bg-white bg-dots relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-none blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <span className="text-brand-maroon font-bold uppercase tracking-[0.3em] text-[10px] mb-2 block">
            School Life
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">
            Our <span className="text-brand-gold italic font-light tracking-tight">Memories</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {displayedImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative aspect-square overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 rounded-none border-4 border-white"
            >
              <img
                src={img.url}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Gallery"
                referrerPolicy="no-referrer"
              />

              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 via-black/40 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-[10px] uppercase tracking-widest mb-1">{img.cat}</p>
                <p className="text-white/70 text-[9px] italic">APS Memories</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
