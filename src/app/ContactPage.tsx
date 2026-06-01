'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ShieldCheck, Clock, ArrowRight } from 'lucide-react';
import { useTheme } from '../lib/ThemeContext';

const contactInfo = {
  email: "graphikardia@gmail.com",
  phone: "+91 7975594203",
  location: "BANGALORE_IN",
  availability: "09:00 - 19:00 IST"
};

const services = [
  "SEO & AEO Architecture",
  "Social Media Growth",
  "High-Performance Website",
  "Performance Marketing",
  "AI & Automation",
  "Global Brand Saturation"
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-24">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-px bg-gk-accent" />
               <span className="section-label text-gk-accent">Inquiry_Channel_v4</span>
            </div>
            <h1 className="text-6xl md:text-[140px] leading-[0.8] font-black mb-12">
              INITIATE_<br />
              <span className="gradient-gold bg-clip-text">STRATEGY</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-gk-text2 uppercase tracking-widest max-w-2xl leading-relaxed">
               WE OPERATE ON A CAPACITY-FILTERED BASIS. PLEASE PROVIDE PROJECT ARCHITECTURE DYNAMICS FOR EFFECTIVE TRIAGE.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* LEFT - INTEL */}
            <div className="lg:col-span-5 space-y-12">
              <div className="p-12 glass-card bg-gk-secondary/50 border-gk-border-a">
                <h3 className="section-label mb-10 block">Global_Nodes</h3>
                <div className="space-y-10 uppercase text-xs font-bold tracking-[0.2em] text-gk-text1">
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 border border-gk-border flex items-center justify-center text-gk-text3 group-hover:text-gk-accent group-hover:border-gk-accent transition-all">
                       <Mail size={16} />
                    </div>
                    <span className="group-hover:text-gk-accent transition-colors">{contactInfo.email}</span>
                  </a>
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-6 group">
                    <div className="w-10 h-10 border border-gk-border flex items-center justify-center text-gk-text3 group-hover:text-gk-accent group-hover:border-gk-accent transition-all">
                       <Phone size={16} />
                    </div>
                    <span className="group-hover:text-gk-accent transition-colors">{contactInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 border border-gk-border flex items-center justify-center text-gk-text3">
                       <MapPin size={16} />
                    </div>
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-10 h-10 border border-gk-border flex items-center justify-center text-gk-text3">
                       <Clock size={16} />
                    </div>
                    <span>UPTIME:_{contactInfo.availability}</span>
                  </div>
                </div>
              </div>

              <div className="p-10 border border-gk-border bg-gk-secondary/20">
                <div className="flex items-center gap-4 mb-6">
                   <ShieldCheck size={16} className="text-gk-accent" />
                   <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-gk-text3">Communication_Security</span>
                </div>
                <p className="text-xs leading-relaxed text-gk-text3 uppercase opacity-60 tracking-widest">
                  High-ticket inquiries are triaged by our lead architects within 24 business hours. Confidentiality guaranteed.
                </p>
              </div>
            </div>

            {/* RIGHT - FORM */}
            <div className="lg:col-span-7">
              <form className="space-y-10 p-12 lg:p-16 glass-card border-gk-border bg-gk-secondary/40 relative overflow-hidden group">
                 <div className="absolute top-0 right-0 p-8 opacity-[0.03] -rotate-12">
                     <Send size={150} />
                 </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gk-text3">Identity_Node</label>
                    <input 
                      type="text" 
                      placeholder="ENTER_FULL_NAME" 
                      className="w-full bg-gk-bg/50 border-b border-gk-border py-4 px-2 outline-none focus:border-gk-accent transition-colors font-display text-xs font-bold uppercase tracking-widest text-gk-text1" 
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gk-text3">Email_Address</label>
                    <input 
                      type="email" 
                      placeholder="ENTER_EMAIL_ROOT" 
                      className="w-full bg-gk-bg/50 border-b border-gk-border py-4 px-2 outline-none focus:border-gk-accent transition-colors font-display text-xs font-bold uppercase tracking-widest text-gk-text1" 
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gk-text3">Requirement_Node</label>
                  <select className="w-full bg-transparent border-b border-gk-border py-4 px-2 outline-none focus:border-gk-accent appearance-none font-display text-xs font-bold uppercase tracking-widest text-gk-text1">
                    {services.map(s => <option key={s} value={s} className="bg-gk-bg">{s}</option>)}
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-widest text-gk-text3">Message_Payload</label>
                  <textarea 
                    rows={5} 
                    placeholder="DESCRIBE_YOUR_BUSINESS_ARCHITECTURE" 
                    className="w-full bg-gk-bg/50 border-b border-gk-border py-4 px-2 outline-none focus:border-gk-accent transition-colors font-display text-xs font-bold uppercase tracking-widest text-gk-text1 resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-6 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-all flex items-center justify-center gap-4 relative z-10 shadow-[0_0_20px_rgba(201,168,76,0.1)]"
                >
                  <Send size={16} /> INITIALIZE TRANSMISSION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
