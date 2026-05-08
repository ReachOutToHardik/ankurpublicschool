import { motion } from 'motion/react';
import { Bell, ArrowRight } from 'lucide-react';

const updates = [
  "Admissions Open for Session 2026-27. Visit school office for more details.",
  "Ankur Public School has a sprawling 2-acre lush green grounds with tranquil ambience.",
  "Sophisticated buildings and spacious airy classrooms are ready for the new batch.",
  "Annual Science Exhibition scheduled for November 20th. Registrations open."
];

export default function LatestUpdates() {
  return (
    <div className="bg-brand-maroon/5 border-b border-brand-maroon/10 py-3 relative z-40">
      <div className="max-w-7xl mx-auto px-6 flex items-center">
        <div className="bg-brand-maroon text-white px-4 py-1 flex items-center gap-2 rounded-sm shrink-0 shadow-sm">
          <Bell size={14} className="animate-bounce" />
          <span className="text-[10px] font-bold uppercase tracking-widest leading-none">News Flash</span>
        </div>
        
        <div className="overflow-hidden flex-1 relative ml-6">
          <div className="flex animate-marquee whitespace-nowrap">
            {updates.map((update, i) => (
              <div key={i} className="flex items-center gap-4 text-[13px] font-bold text-slate-700 mr-12 hover:text-brand-navy cursor-default transition-colors">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                {update}
              </div>
            ))}
            {/* Duplicate for seamless marquee */}
            {updates.map((update, i) => (
              <div key={`dup-${i}`} className="flex items-center gap-4 text-[13px] font-bold text-slate-700 mr-12">
                <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span>
                {update}
              </div>
            ))}
          </div>
        </div>

        <a href="#" className="hidden md:flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-brand-maroon hover:text-brand-navy shrink-0 transition-colors bg-white/50 px-2 rounded backdrop-blur-sm">
          View All
          <ArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}
