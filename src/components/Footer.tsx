import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white pt-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16">
          
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="https://www.ankurpublicschool.in/images/logo1.png" 
                alt="Ankur Public School Logo" 
                className="h-10 w-auto object-contain"
              />
              <h2 className="text-xl font-display font-bold">Ankur Public School</h2>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Upholding 'Knowledge is Power' since inception, Ankur Public School blends traditional values with modern pedagogy on a lush green 2-acre campus.
            </p>
            <div className="flex gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, idx) => (
                <a key={idx} href="#" className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-navy transition-all border border-white/5">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-bold mb-8 border-l-4 border-brand-gold pl-4 uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Academics', 'Admission Process', 'Fee Structure', 'Facility', 'Mandatory Disclosure', 'Contact Us'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/70 hover:text-brand-gold transition-colors text-[13px] flex items-center gap-2 group">
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location / Contact */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-brand-gold pl-4 uppercase tracking-widest text-xs">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="shrink-0 text-brand-gold" size={20} />
                <p className="text-sm text-white/70">Bhartari, Chirkula Mod, G.T. Road, Aligarh, UP</p>
              </div>
              <div className="flex gap-4">
                <Phone className="shrink-0 text-brand-gold" size={20} />
                <p className="text-sm text-white/70">+91-96346-00456</p>
              </div>
              <div className="flex gap-4">
                <Mail className="shrink-0 text-brand-gold" size={20} />
                <p className="text-sm text-white/70">ankurpublicschool01@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Admission Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-brand-gold pl-4 uppercase tracking-widest text-xs">Admissions 2026</h4>
            <div className="bg-white/5 p-6 rounded border border-white/5 space-y-4">
              <p className="text-xs text-white/80 leading-relaxed font-medium">Registration open for the academic session 2026-27. Grab your seat today!</p>
              <button className="w-full bg-brand-gold text-brand-navy py-3 font-bold uppercase text-[11px] tracking-widest hover:bg-white transition-all">
                Download Form
              </button>
              <button className="w-full bg-transparent border border-white/30 text-white py-3 font-bold uppercase text-[11px] tracking-widest hover:bg-white hover:text-brand-navy transition-all">
                TC Verification
              </button>
            </div>
          </div>

        </div>

        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] text-white/40 font-bold uppercase tracking-widest">
          <p>Copyright © {currentYear} Ankur Public School. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
