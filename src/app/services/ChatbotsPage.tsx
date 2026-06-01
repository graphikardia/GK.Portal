'use client';
import { motion } from 'framer-motion';
import { Bot, MessageSquare, ShieldCheck, Zap, ArrowRight, Network, ServerCog } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChatbotsPage() {
  const points = [
    { icon: <MessageSquare className="text-gk-accent" />, title: "24/7 Qualification", desc: "Automated triage systems that handle initial inquiries and filter for high-ticket intent." },
    { icon: <Network className="text-gk-accent" />, title: "Omnichannel Deployment", desc: "Seamless integration across WhatsApp, web portals, and social channels." },
    { icon: <ServerCog className="text-gk-accent" />, title: "CRM Sync", desc: "Direct data routing into your existing healthcare or enterprise CRM architecture." },
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      {/* HERO */}
      <section className="pt-52 pb-32 px-6 bg-gradient-to-b from-gk-secondary/50 to-gk-bg overflow-hidden border-b border-white/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                 <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-px bg-gk-accent" />
                   <span className="section-label">Intelligent Automation</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05]">
                   AI <span className="gradient-gold">Automation</span> & Chatbots.
                 </h1>
                 <p className="text-gk-text2 text-xl leading-relaxed max-w-xl mb-12 font-body">
                   Deploy intelligent communication nodes that capture, qualify, and convert leads autonomously, 24 hours a day.
                 </p>
                 <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                   Initialize AI Integration
                 </Link>
              </motion.div>
              <div className="relative group">
                 <div className="p-3 bg-gk-elevated border border-gk-border">
                    <img 
                       src="/branding/ai-hero.png" 
                       alt="AI and Automation Nodes" 
                       className="w-full grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CORE POINTS */}
      <section className="py-40 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {points.map((p, i) => (
              <div key={i} className="p-12 glass-card hover:border-gk-accent/30 transition-all group text-center">
                <div className="mb-8 w-14 h-14 border border-gk-border flex items-center justify-center text-white group-hover:text-gk-accent transition-colors mx-auto">
                   {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wide">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-52 px-6 text-center border-t border-gk-border">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Automate Your <span className="gradient-gold">Acquisition Loop.</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Deployment
          </Link>
        </div>
      </section>
    </div>
  );
}
