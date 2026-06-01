'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Zap, BarChart3, Target, Globe, ArrowRight, ShieldCheck, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SEOPage() {
  const valueProps = [
    {
      icon: <Search className="text-gk-accent" />,
      title: "AEO Architecture",
      desc: "Optimizing for AI Answer Engines (Perplexity, SearchGPT, Gemini) to ensure your brand is the primary source of truth."
    },
    {
      icon: <Database className="text-gk-accent" />,
      title: "Technical Hardening",
      desc: "Precision code optimization, schema injection, and Core Web Vitals dominance for instantaneous load velocity."
    },
    {
      icon: <Target className="text-gk-accent" />,
      title: "High-Intent Capture",
      desc: "Targeting 'bottom-of-funnel' keywords that drive direct clinical inquiries and high-ticket B2B conversions."
    }
  ];

  const process = [
    { step: "01", title: "DEEP_SCAN", desc: "Analyzing current crawl depth, authority nodes, and competitor positioning." },
    { step: "02", title: "NODE_STRENGTHENING", desc: "Deploying cluster-based content architecture and siloing structures." },
    { step: "03", title: "AEO_INJECTION", desc: "Hardening entity relationships for AI knowledge graphs." },
    { step: "04", title: "VELOCITY_LOOP", desc: "Continuous rank tracking and multi-node optimization cycles." }
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
                <span className="section-label">Service_Node:01</span>
              </div>
              <h1 className="text-6xl md:text-[100px] leading-[0.9] font-black mb-12">
                SEO & <span className="gradient-gold">AEO</span><br />
                ARCHITECTURE
              </h1>
              <p className="text-gk-text2 text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                Dominate the transition from traditional search to AI-driven answer engines. 
                We build organic systems that convert at scale.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors">
                Initialize_Audit
              </Link>
            </div>
            <div className="hidden lg:block w-1/3 p-12 glass-card">
              <div className="space-y-12">
                <div className="flex justify-between items-center px-4">
                  <span className="text-[10px] font-mono text-gk-text3 uppercase">System_Sync</span>
                  <div className="w-3 h-3 bg-gk-accent rounded-full animate-pulse" />
                </div>
                <div className="space-y-2 border-l-2 border-gk-accent/20 pl-6">
                  <span className="text-[40px] font-display font-black italic block">95.2%</span>
                  <span className="text-[9px] font-mono text-gk-text3 uppercase tracking-[0.2em] font-bold">Visibility_Coefficient</span>
                </div>
                <div className="space-y-2 border-l-2 border-gk-accent/20 pl-6">
                  <span className="text-[40px] font-display font-black italic block">0.8s</span>
                  <span className="text-[9px] font-mono text-gk-text3 uppercase tracking-[0.2em] font-bold">Node_Response_Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* VALUE PROPS GRID */}
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

          {/* INFOGRAPHIC / FLOW */}
          <div className="mb-40 py-24 glass-card overflow-hidden">
            <div className="text-center mb-20 px-6">
              <span className="section-label mb-4 block">Operation_Protocol</span>
              <h2 className="text-4xl md:text-6xl font-black italic">THE_KARDIA_SEQ</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-6 md:px-12 divide-y md:divide-y-0 md:divide-x divide-gk-border/50">
              {process.map((p, i) => (
                <div key={i} className="p-12 hover:bg-gk-accent/5 transition-colors">
                  <span className="text-5xl font-display font-black gradient-gold opacity-30 block mb-8">{p.step}</span>
                  <h4 className="text-lg font-black mb-4 group-hover:text-gk-accent transition-colors">{p.title}</h4>
                  <p className="text-[10px] text-gk-text2 leading-loose uppercase tracking-[0.15em]">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center border border-gk-border p-20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-3xl md:text-6xl mb-12 leading-tight">PRECISION GROWTH <span className="gradient-gold">PROTOCOL</span>_READY_FOR_DEPLOYMENT</h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Connect with an Architect
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
