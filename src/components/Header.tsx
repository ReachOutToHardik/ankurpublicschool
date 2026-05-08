import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Menu, X, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Academics', href: '#' },
    { name: 'Admissions', href: '#' },
    { name: 'Facilities', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="w-full">
      {/* Top Bar */}
      <div className="bg-brand-navy text-white text-[11px] py-1.5 hidden md:block">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <a href="tel:+919634600456" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Phone className="w-3 h-3 text-brand-gold" />
              +91-96346-00456
            </a>
            <a href="mailto:ankurpublicschool01@gmail.com" className="flex items-center gap-1.5 hover:text-brand-gold transition-colors">
              <Mail className="w-3 h-3 text-brand-gold" />
              ankurpublicschool01@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-brand-gold" />
              Aligarh, Uttar Pradesh
            </span>
            <div className="flex items-center gap-3 border-l border-white/20 pl-4">
              <Facebook className="w-3 h-3 hover:text-brand-gold cursor-pointer" />
              <Twitter className="w-3 h-3 hover:text-brand-gold cursor-pointer" />
              <Instagram className="w-3 h-3 hover:text-brand-gold cursor-pointer" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`w-full bg-white transition-all duration-300 z-50 ${isScrolled ? 'fixed top-0 shadow-lg py-2' : 'relative py-4'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <img 
              src="https://www.ankurpublicschool.in/images/logo1.png" 
              alt="Ankur Public School Logo" 
              className="h-12 w-auto object-contain group-hover:scale-105 transition-transform"
            />
            <div>
              <h1 className="text-xl md:text-2xl font-display font-bold text-brand-navy tracking-tight leading-none">
                Ankur Public School
              </h1>
              <span className="text-[10px] text-brand-maroon font-bold uppercase tracking-[0.2em]">Knowledge is Power</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[13px] font-bold text-slate-700 hover:text-brand-navy uppercase tracking-wider transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <button className="bg-brand-maroon text-white px-6 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest hover:bg-brand-navy transition-all shadow-md active:scale-95">
              Online Admission
            </button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden text-brand-navy p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden bg-slate-50 border-t overflow-hidden"
            >
              <div className="p-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-base font-bold text-slate-800 border-b border-slate-100 pb-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <button className="w-full bg-brand-navy text-white py-3 rounded font-bold uppercase tracking-widest mt-2">
                  Apply Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
