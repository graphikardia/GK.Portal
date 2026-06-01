'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, BarChart3, Globe, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: "Client Ad Spend", value: "$4.5M+", icon: <BarChart3 size={18} /> },
  { label: "Global Nodes", value: "12+", icon: <Globe size={18} /> },
  { label: "High-Ticket Leads", value: "850k+", icon: <ShieldCheck size={18} /> },
  { label: "Systems Deployed", value: "200+", icon: <Layers size={18} /> },
];

export const ProofSection = () => {
  return (
    <section id="proof" className="py-40 bg-gk-bg relative border-t border-gk-border">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
             <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="p-10 glass-card group hover:border-gk-accent/30 transition-colors">
                     <div className="mb-6 text-gk-accent opacity-60 group-hover:opacity-100 transition-opacity">
                        {stat.icon}
                     </div>
                     <h4 className="text-[10px] font-mono text-gk-text3 uppercase tracking-[0.2em] mb-2">{stat.label}</h4>
                     <span className="text-3xl font-bold text-gk-text1">{stat.value}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="order-1 lg:order-2 max-w-xl">
            <span className="section-label mb-6 block">Proof of Performance</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
              Data-Driven <span className="gradient-gold">Evidence</span> of Dominance.
            </h2>
            <p className="text-gk-text2 text-xl leading-relaxed mb-12 font-body">
              We provide hardened proof across multiple high-ticket industries. From clinical acquisition to global logistics infrastructure, our results speak in revenue.
            </p>
            
            <Link 
              to="/case-studies" 
              className="inline-flex items-center gap-4 text-gk-accent font-bold text-xs uppercase tracking-widest hover:text-white transition-colors group"
            >
              Explore Full Case Studies <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>

        {/* LOGO STRIP / COLLABORATORS */}
        <div className="mt-40 pt-20 border-t border-gk-border flex flex-col md:flex-row items-center justify-between gap-12 opacity-40 hover:opacity-80 transition-opacity grayscale">
           <span className="text-[10px] font-mono uppercase tracking-[0.4em] mb-4 md:mb-0">Strategic_Partners</span>
           <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              <span className="text-2xl font-bold italic tracking-tighter opacity-50">METAGENICS</span>
              <span className="text-2xl font-bold italic tracking-tighter opacity-50">KARDIA_X</span>
              <span className="text-2xl font-bold italic tracking-tighter opacity-50">PRECISION_CLINIC</span>
              <span className="text-2xl font-bold italic tracking-tighter opacity-50">NODE_TECH</span>
           </div>
        </div>
      </div>
    </section>
  );
};
