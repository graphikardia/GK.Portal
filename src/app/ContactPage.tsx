'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Send, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { Footer } from './components/Footer';

const contactInfo = {
  email: "graphikardia@gmail.com",
  phone: "+91 7975594203",
  location: "BANGALORE_IN",
  availability: "0900_1900_IST"
};

const services = [
  "ACQUISITION_ENGINE",
  "DIGITAL_INFRASTRUCTURE",
  "AI_CONTENT_CORE",
  "MEDICAL_AUTHORITY_HUB",
  "STRATEGIC_DEEP_SCAN"
];

export default function ContactPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500 font-body">
      {/* HEADER NAV */}
      <nav className="fixed top-0 w-full z-50 px-8 py-10 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="flex items-center gap-4">
          <img src="/branding/logo_symbol.png" alt="GK" className="h-8 logo-filter" />
          <span className="font-display font-black text-xl tracking-tightest">GRAPHIKARDIA</span>
        </Link>
        <Link to="/" className="text-[10px] font-black uppercase tracking-widest hover:opacity-50 transition-opacity">Back_to_Node</Link>
      </nav>

      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <div className="mb-24">
            <h1 className="text-6xl md:text-[140px] leading-[0.8] mb-12">
              ESTABLISH_<br />
              <span className="text-stroke-white text-transparent opacity-80">CONNECTION</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
              ENCRYPTED_HANDSHAKE_REQUIRED. OUR_SYSTEM_OPERATES_ON_A_CAPACITY_FILTER_BASIS.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* LEFT - INTEL */}
            <div className="lg:col-span-5 space-y-12">
              <div className="p-10 border border-foreground/5 bg-noir-800/10">
                <h3 className="text-xl font-black uppercase mb-8">NODE_INFORMATION</h3>
                <div className="space-y-8 uppercase text-[10px] font-black tracking-widest">
                  <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-6 group">
                    <Mail size={16} className="text-foreground group-hover:opacity-50 transtion-opacity" />
                    <span>{contactInfo.email}</span>
                  </a>
                  <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-6 group">
                    <Phone size={16} className="text-foreground group-hover:opacity-50 transtion-opacity" />
                    <span>{contactInfo.phone}</span>
                  </a>
                  <div className="flex items-center gap-6">
                    <MapPin size={16} className="text-foreground" />
                    <span>{contactInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <ShieldCheck size={16} className="text-foreground" />
                    <span>UPTIME:_{contactInfo.availability}</span>
                  </div>
                </div>
              </div>

              <div className="p-10 border border-foreground/5 bg-noir-800/10">
                <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-8">SECURE_TRANSMISSION</h3>
                <p className="text-sm leading-relaxed text-muted-foreground uppercase opacity-60">
                  Submissions are reviewed by our architects within 24 hours. High-ticket inquiries prioritized.
                </p>
              </div>
            </div>

            {/* RIGHT - TRANSMITTER */}
            <div className="lg:col-span-7">
              <form className="space-y-8 bg-noir-800/5 p-12 border border-foreground/5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest opacity-30">Identity_Full_Name</label>
                    <input type="text" placeholder="ENTER_NAME" className="w-full bg-black/20 border-b border-foreground/20 py-4 px-2 outline-none focus:border-foreground transition-colors font-mono text-xs uppercase" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[9px] font-black uppercase tracking-widest opacity-30">Email_Address</label>
                    <input type="email" placeholder="ENTER_EMAIL" className="w-full bg-black/20 border-b border-foreground/20 py-4 px-2 outline-none focus:border-foreground transition-colors font-mono text-xs uppercase" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest opacity-30">Service_Node_Required</label>
                  <select className="w-full bg-transparent border-b border-foreground/20 py-4 px-2 outline-none focus:border-foreground appearance-none font-mono text-xs uppercase">
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-[9px] font-black uppercase tracking-widest opacity-30">Message_Payload</label>
                  <textarea rows={6} placeholder="DESCRIBE_YOUR_ARCHITECTURE_DYNAMICS" className="w-full bg-black/20 border-b border-foreground/20 py-4 px-2 outline-none focus:border-foreground transition-colors font-mono text-xs uppercase resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-6 bg-foreground text-background font-black uppercase tracking-widest hover:scale-[1.01] transition-transform flex items-center justify-center gap-4">
                  <Send size={16} /> EXECUTE_TRANSMISSION
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
