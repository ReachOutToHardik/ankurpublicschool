import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const faqs = [
  {
    q: "What is the age criteria for Nursery admission for 2026-27?",
    a: "A child should be 3+ years old as of 31st March 2026 for admission into the Nursery class for the session 2026-27."
  },
  {
    q: "Does the school provide transport facilities?",
    a: "Yes, we provide safe and secure bus transport covering major routes including Chirkula Mod, GT Road, and nearby residential blocks."
  },
  {
    q: "What are the school timings?",
    a: "The standard school timings are 8:00 AM to 2:00 PM. Nursery and KG classes might have a staggered release at 12:30 PM."
  },
  {
    q: "What documents are required for admission?",
    a: "Common documents include Birth Certificate, Aadhaar Card of child/parents, previous school TC (if applicable), and recent passport-size photographs."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding bg-brand-slate">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-maroon font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">
            Admissions Support
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">
            Frequently Asked <span className="text-brand-gold italic">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white border-b border-slate-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full py-6 px-4 flex justify-between items-center text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-bold text-slate-800 text-sm md:text-base">{faq.q}</span>
                {openIndex === i ? <Minus size={18} className="text-brand-maroon" /> : <Plus size={18} className="text-brand-navy" />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 text-slate-600 text-sm md:text-base leading-relaxed bg-slate-50/50">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
