'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Zap, Cpu, Shield, Globe, ArrowRight, MousePointer2, Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function WebsitePage() {
  const valueProps = [
    {
      icon: <Zap className="text-gk-accent" />,
      title: "Velocity Architecture",
      desc: "Instantaneous load times and mobile-first responsiveness for maximum conversion rate optimization (CRO)."
    },
    {
      icon: <Cpu className="text-gk-accent" />,
      title: "Hardened Infrastructure",
      desc: "Robust, secure digital foundations tailored for healthcare compliance and enterprise-grade reliability."
    },
    {
      icon: <MousePointer2 className="text-gk-accent" />,
      title: "Conversion Dynamics",
      desc: "Strategic UI/UX design paths that frictionlessly guide users from curiosity to confirmed acquisition."
    }
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1 service-hero-bg">
      {/* HERO */}
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-gk-accent" />
                <span className="section-label">Service_Node:03</span>
              </div>
              <h1 className="text-6xl md:text-[100px] leading-[0.9] font-black mb-12">
                DIGITAL <span className="gradient-gold">PORTAL</span><br />
                ARCHITECTURE
              </h1>
              <p className="text-gk-text2 text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                We don't build websites; we architect conversion engines. 
                Deploying high-performance digital infrastructure for global elites.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors">
                Initialize_Build_Scan
              </Link>
            </div>
            <div className="hidden lg:block w-1/3 p-8 glass-card">
               <div className="space-y-12">
                  <div className="flex justify-between items-center px-4">
                    <span className="text-[10px] font-mono text-gk-text3 uppercase uppercase font-bold tracking-widest">Performance_Check</span>
                    <div className="w-3 h-3 bg-gk-success rounded-full bg-green-500 animate-pulse" />
                  </div>
                  <div className="p-8 border border-gk-border bg-gk-bg/50">
                    <div className="flex items-end justify-between mb-2">
                       <span className="text-[9px] font-mono text-gk-text3 uppercase">Load_Velocity</span>
                       <span className="text-xl font-bold text-gk-accent">99/100</span>
                    </div>
                    <div className="h-1 bg-gk-border overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "99%" }}
                         transition={{ duration: 1.5, delay: 0.5 }}
                         className="h-full bg-gk-accent shadow-[0_0_10px_#C9A84C]" 
                       />
                    </div>
                  </div>
                  <div className="p-8 border border-gk-border bg-gk-bg/50">
                    <div className="flex items-end justify-between mb-2">
                       <span className="text-[9px] font-mono text-gk-text3 uppercase">Conversion_Edge</span>
                       <span className="text-xl font-bold text-gk-accent">Top_1%</span>
                    </div>
                    <div className="h-1 bg-gk-border overflow-hidden">
                       <motion.div 
                         initial={{ width: 0 }}
                         whileInView={{ width: "95%" }}
                         transition={{ duration: 1.5, delay: 0.7 }}
                         className="h-full bg-gk-accent shadow-[0_0_10px_#C9A84C]" 
                       />
                    </div>
                  </div>
               </div>
            </div>
          </div>

          {/* VALUE PROPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {valueProps.map((prop, i) => (
              <div key={i} className="p-10 card-hover bg-gk-secondary group">
                <div className="mb-8 p-4 w-fit border border-gk-border group-hover:border-gk-accent transition-colors">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wider group-hover:text-gk-text1 transition-colors">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>

          {/* PROCESS TIMELINE */}
          <div className="mb-40 py-24 border-y border-gk-border relative overflow-hidden">
             <div className="absolute top-0 left-0 p-12 opacity-[0.02] -rotate-12">
                <Code2 size={400} />
             </div>
             <div className="text-center mb-24 px-6 relative z-10">
                <span className="section-label mb-4 block">Deployment_Timeline</span>
                <h2 className="text-4xl md:text-6xl font-black uppercase italic">THE_BUILD_PROTOCOL</h2>
             </div>
             <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
                {[
                  { id: "01", title: "NODE_MAPPING", desc: "User journey and architectural wireframing." },
                  { id: "02", title: "TACTICAL_DESIGN", desc: "High-fidelity UI/UX alignment." },
                  { id: "03", title: "HARDENING", desc: "Front-end engineering & back-end security." },
                  { id: "04", title: "DEPLOYMENT", desc: "Global CDN propagation & optimization." }
                ].map((s, i) => (
                  <div key={i} className="p-8 border border-gk-border/30 hover:border-gk-accent transition-all group">
                     <span className="text-2xl font-display font-black text-gk-accent/20 group-hover:text-gk-accent transition-colors block mb-4">{s.id}</span>
                     <h4 className="text-sm font-bold mb-2 uppercase">{s.title}</h4>
                     <p className="text-[10px] font-mono text-gk-text3 uppercase leading-relaxed tracking-widest">{s.desc}</p>
                  </div>
                ))}
             </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center border border-gk-border p-20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-3xl md:text-6xl mb-12 leading-tight uppercase">UPGRADE YOUR <span className="gradient-gold">PORTAL</span> TO ENTERPRISE VELOCITY</h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Connect with an Architect
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
