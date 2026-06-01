'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, BarChart3, Target, Globe, ArrowRight, ShieldCheck, Database, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SEOPage() {
  const pillars = [
    {
      icon: <Search className="text-gk-accent" />,
      title: "AEO Architecture",
      desc: "Optimizing for AI Answer Engines (SearchGPT, Gemini) to ensure your brand remains the primary source of truth."
    },
    {
      icon: <Database className="text-gk-accent" />,
      title: "Technical Hardening",
      desc: "Precision code optimization and schema injection for instantaneous load velocity and crawl dominance."
    },
    {
      icon: <Target className="text-gk-accent" />,
      title: "Intent Capture",
      desc: "Targeting high-value keywords that drive direct clinical inquiries and enterprise-level B2B conversions."
    }
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
                <span className="section-label">Core Strategy</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05]">
                SEO & <span className="gradient-gold">AEO</span><br />
                Architecture.
              </h1>
              <p className="text-gk-text2 text-xl leading-relaxed max-w-xl mb-12 font-body">
                Dominate the transition from traditional search to AI-driven ecosystem answers. We build organic architectures that convert at scale.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                Initiate Performance Audit
              </Link>
            </motion.div>

            <div className="relative">
               <div className="p-3 bg-gk-elevated border border-gk-border aspect-square relative group">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2026&auto=format&fit=crop" 
                    alt="Analytics Infrastructure" 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                     <div className="p-8 glass-card border border-gk-accent/20 text-center">
                        <BarChart3 size={40} className="text-gk-accent mx-auto mb-4" />
                        <span className="text-4xl font-bold block mb-1">+310%</span>
                        <span className="text-[10px] font-mono uppercase tracking-widest opacity-60">Avg_Traffic_Lift_Year_1</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* STRATEGIC PILLARS */}
      <section className="py-40 px-6">
        <div className="container-custom">
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">The Cardinal Pillars of Performance</h2>
             <p className="text-gk-text2 text-lg">We don't focus on vanity metrics. We focus on structural authority and revenue-generating intent.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pillars.map((pillar, i) => (
              <div key={i} className="p-12 glass-card hover:border-gk-accent/30 transition-all group">
                <div className="mb-8 w-14 h-14 border border-gk-border flex items-center justify-center text-white group-hover:text-gk-accent transition-colors">
                   {pillar.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{pillar.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wide group-hover:text-white transition-colors">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLOW INFOGRAPHIC */}
      <section className="py-40 px-6 bg-gk-secondary/20 border-y border-gk-border">
         <div className="container-custom">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className="lg:col-span-4">
                   <h2 className="text-4xl font-bold mb-8">The <span className="gradient-gold">Deployment</span> Cycle</h2>
                   <p className="text-gk-text2 text-lg leading-relaxed font-body">Our methodology is iterative, data-backed, and optimized for long-term category dominance.</p>
                </div>
                <div className="lg:col-span-8">
                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {[
                        { step: "01", title: "Global Intel", desc: "Analyzing authoritative search nodes and competitor strategy." },
                        { step: "02", title: "Node Hardening", desc: "Content siloing and entity-relationship mapping for AI clusters." },
                        { step: "03", title: "AEO Injection", desc: "Distilling brand knowledge into AI-actionable answer fragments." },
                        { step: "04", title: "Rank Velocity", desc: "Continuous performance monitoring and optimization loops." }
                      ].map((p, i) => (
                        <div key={i} className="flex gap-6 p-8 border border-gk-border hover:bg-gk-accent/5 transition-colors group">
                           <span className="text-3xl font-bold italic opacity-20 group-hover:opacity-100 group-hover:text-gk-accent transition-all">{p.step}</span>
                           <div>
                              <h4 className="text-lg font-bold mb-2">{p.title}</h4>
                              <p className="text-xs text-gk-text3 uppercase tracking-widest">{p.desc}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
         </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-52 px-6 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Secure Your Authority <span className="gradient-gold">Today.</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Performance Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
