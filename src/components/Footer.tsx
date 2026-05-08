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

          {/* Map Section */}
          <div>
            <h4 className="text-lg font-bold mb-8 border-l-4 border-brand-gold pl-4 uppercase tracking-widest text-xs">Our Location</h4>
            <div className="h-[200px] rounded-none overflow-hidden border border-white/10 transition-all">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1131.761048684605!2d78.077!3d27.892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDUzJzMxLjIiTiA3OMKwMDQnMzcuMiJF!5e0!3m2!1sen!2sin!4v1715182911000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="School Location Map"
              ></iframe>
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
