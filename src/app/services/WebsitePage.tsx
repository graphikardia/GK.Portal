'use client';
import { motion } from 'framer-motion';
import { Cpu, Layout, Zap, ShieldCheck, Globe, ArrowRight, Code, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsitePage() {
  const features = [
    { icon: <Zap className="text-gk-accent" />, title: "Load Velocity", desc: "Hardened infrastructure delivering sub-0.5s response times for maximum retention." },
    { icon: <ShieldCheck className="text-gk-accent" />, title: "Authority Design", desc: "Aesthetic narratives that earn user trust and command high-ticket conversions." },
    { icon: <Layers className="text-gk-accent" />, title: "Full Stack Sync", desc: "Deep integration with CRM and automation nodes for a seamless acquisition loop." },
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      {/* HERO */}
      <section className="pt-52 pb-32 px-6 bg-gradient-to-b from-gk-secondary/50 to-gk-bg overflow-hidden border-b border-white/5">
        <div className="container-custom">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div>
                 <div className="flex items-center gap-4 mb-8">
                   <div className="w-10 h-px bg-gk-accent" />
                   <span className="section-label">Digital Systems</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05]">
                   High-Performance <span className="gradient-gold">Infrastructure.</span>
                 </h1>
                 <p className="text-gk-text2 text-xl leading-relaxed max-w-xl mb-12 font-body">
                   We architect hardened digital systems designed for high-ticket acquisition. Speed, trust, and conversion density are our core metrics.
                 </p>
                 <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                   Request System Audit
                 </Link>
              </div>
              <div className="relative">
                 <div className="p-3 bg-gk-elevated border border-gk-border group aspect-video">
                    <img 
                       src="/branding/web-hero.png" 
                       alt="Development Infrastructure" 
                       className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 bg-gk-accent/5 opacity-50" />
                 </div>
                 {/* FLOATING PERFORMANCE METER */}
                 <div className="absolute -bottom-10 -left-10 p-10 glass-card border border-gk-accent/20 max-w-xs">
                    <div className="flex justify-between items-end mb-4">
                       <span className="text-[10px] font-mono text-gk-accent uppercase tracking-widest">Velocity_Score</span>
                       <span className="text-3xl font-bold italic">100</span>
                    </div>
                    <div className="w-full h-1 bg-white/10">
                       <div className="w-full h-full bg-gk-accent" />
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CORE FEATURES */}
      <section className="py-40 px-6">
        <div className="container-custom">
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Engineered for Dominance</h2>
             <p className="text-gk-text2 text-lg">We don't build generic websites. We deploy strategic digital assets that serve as your 24/7 high-ticket closer.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {features.map((f, i) => (
              <div key={i} className="p-12 glass-card hover:border-gk-accent/30 transition-all group">
                <div className="mb-8 w-14 h-14 border border-gk-border flex items-center justify-center text-white group-hover:text-gk-accent transition-colors">
                   {f.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{f.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wide group-hover:text-white transition-colors">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section className="py-40 px-6 bg-gk-secondary/20 border-y border-gk-border">
         <div className="container-custom">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-10">
                   <h2 className="text-4xl font-bold italic">The <span className="gradient-gold">Hardened</span> Stack</h2>
                   <p className="text-gk-text2 text-lg leading-relaxed font-body">Our systems are powered by modern, reliable, and scalable technology nodes that ensure zero downtime and maximum security.</p>
                   <div className="grid grid-cols-2 gap-6">
                      {['Next.js / Vite', 'PostgreSQL', 'Tailwind CSS', 'Vercel Edge'].map(tech => (
                        <div key={tech} className="p-6 border border-gk-border flex items-center justify-between group hover:border-gk-accent transition-colors">
                           <span className="text-[10px] font-mono font-bold uppercase tracking-widest">{tech}</span>
                           <ShieldCheck size={14} className="text-gk-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      ))}
                   </div>
                </div>
                <div className="relative aspect-square">
                   <div className="absolute inset-0 bg-gk-accent/5 blur-[100px] rounded-full" />
                   <Code size={400} className="text-white opacity-[0.03] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                   <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                         <span className="text-[10px] font-mono text-gk-text3 uppercase mb-4 block tracking-[0.4em]">system_active</span>
                         <div className="w-20 h-px bg-gk-accent mx-auto" />
                      </div>
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-52 px-6 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Architect for <span className="gradient-gold">Growth</span> Today.</h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate System Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
