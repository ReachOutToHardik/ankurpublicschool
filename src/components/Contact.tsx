import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white bg-dots relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-gold/5 skew-x-12 translate-x-1/3 -z-10"></div>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-brand-maroon font-bold uppercase tracking-[0.2em] text-[13px] mb-4 block">
            Reach Out To Us
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-4">
            Get In <span className="text-brand-gold italic">Touch</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm">
            Interested in joining our community? Have a question for our administration? We are here to help you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {[
            { icon: Phone, title: "Phone Support", content: "+91-96346-00456", sub: "Mon-Sat, 8am - 2pm" },
            { icon: Mail, title: "Email Inquiry", content: "ankurpublicschool01@gmail.com", sub: "Response within 24hrs" },
            { icon: MapPin, title: "School Office", content: "Aligarh, G.T. Road", sub: "Visit our campus" }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-slate p-10 rounded-sm text-center border-b-4 border-transparent hover:border-brand-gold transition-all duration-300">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 text-brand-navy shadow-sm">
                <item.icon size={28} />
              </div>
              <h4 className="font-bold text-brand-navy mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
              <p className="text-lg font-bold text-slate-800 mb-1">{item.content}</p>
              <p className="text-xs text-slate-500">{item.sub}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-navy rounded-sm overflow-hidden flex flex-col lg:flex-row shadow-2xl">
          <div className="lg:w-1/2 p-12 md:p-16 text-white flex flex-col justify-center">
             <h3 className="text-3xl font-display font-bold mb-6">Send Us a <span className="text-brand-gold">Message</span></h3>
             <p className="text-white/70 mb-10 leading-relaxed">
               For specific inquiries regarding admission certificates, fee structures, or campus visits, please fill out the form and our team will get back to you shortly.
             </p>
             
             <div className="flex items-center gap-4 group cursor-pointer">
               <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-navy transition-all">
                 <MessageSquare size={20} />
               </div>
               <div>
                 <p className="font-bold text-sm tracking-widest uppercase">Chat with Support</p>
                 <p className="text-xs text-white/50">Online from 9 AM to 1 PM</p>
               </div>
             </div>
          </div>

          <div className="lg:w-1/2 bg-white p-12 md:p-16">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-2 text-sm focus:border-brand-gold outline-none transition-all" />
                 <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-2 text-sm focus:border-brand-gold outline-none transition-all" />
               </div>
               <input type="tel" placeholder="Phone Number" className="w-full bg-slate-50 border-b border-slate-200 py-4 px-2 text-sm focus:border-brand-gold outline-none transition-all" />
               <textarea placeholder="Your Message" rows={3} className="w-full bg-slate-50 border-b border-slate-200 py-4 px-2 text-sm focus:border-brand-gold outline-none transition-all resize-none"></textarea>
               <button className="bg-brand-maroon text-white px-10 py-4 font-bold uppercase text-xs tracking-[0.2em] shadow-lg hover:bg-brand-navy transition-all w-full md:w-auto">
                 Send Enquiry
               </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
