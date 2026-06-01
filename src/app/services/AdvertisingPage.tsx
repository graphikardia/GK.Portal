'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Zap, Radio, Tv, Layers, ArrowRight, Monitor, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvertisingPage() {
  const valueProps = [
    {
      icon: <Monitor className="text-gk-accent" />,
      title: "Omni-Channel Saturation",
      desc: "Deploying consistent brand narratives across high-impact digital surfaces to dominate market attention."
    },
    {
      icon: <Layers className="text-gk-accent" />,
      title: "Strategic Placement",
      desc: "Data-driven node selection for OOH and digital display that aligns with high-ticket target demographics."
    },
    {
      icon: <Radio className="text-gk-accent" />,
      title: "Frequency Architecture",
      desc: "Optimizing ad frequency to move prospects from initial discovery to absolute brand recognition."
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
                <span className="section-label">Service_Node:06</span>
              </div>
              <h1 className="text-6xl md:text-[100px] leading-[0.9] font-black mb-12">
                STRATEGIC <span className="gradient-gold">BRAND</span><br />
                SATURATION
              </h1>
              <p className="text-gk-text2 text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                We don't buy ads; we architect market dominance. 
                Deploying high-impact creative across every tactical front.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors">
                Initiate_Media_Scan
              </Link>
            </div>
            <div className="hidden lg:block w-1/3">
               <div className="p-10 glass-card">
                  <div className="relative aspect-square bg-gk-secondary flex items-center justify-center p-12 overflow-hidden border border-gk-border group">
                     <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                     <Megaphone size={120} className="text-gk-accent opacity-20 group-hover:scale-110 transition-transform duration-700" />
                     <div className="absolute bottom-8 left-8 right-8 space-y-4">
                        <div className="h-1 bg-gk-border overflow-hidden">
                           <div className="h-full bg-gk-accent w-[75%] animate-pulse" />
                        </div>
                        <div className="flex justify-between items-center text-[8px] font-mono text-gk-text3 uppercase font-bold tracking-widest">
                           <span>Reach_Index</span>
                           <span>06_Nodes_ACTIVE</span>
                        </div>
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

          {/* NETWORK INFOGRAPHIC */}
          <div className="mb-40 py-24 border-t border-gk-border flex flex-col md:flex-row items-center justify-between gap-16 px-6">
             <div className="md:w-1/2">
                <span className="section-label mb-4 block tracking-widest">Media_Network_Deployment</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase">360_DEGREE AD SATURATION</h2>
                <div className="space-y-8">
                   <div className="p-8 border border-gk-border hover:border-gk-accent/30 transition-all bg-gk-secondary/50">
                      <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">Display_Node:Digital</h4>
                      <p className="text-xs text-gk-text2 uppercase tracking-widest leading-relaxed">High-fidelity programmatic display targeting nodes of high-value clinical interest.</p>
                   </div>
                   <div className="p-8 border border-gk-border hover:border-gk-accent/30 transition-all bg-gk-secondary/50">
                      <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">Broadcast_Node:OOH</h4>
                      <p className="text-xs text-gk-text2 uppercase tracking-widest leading-relaxed">Strategic physical saturation in premium territories for baseline brand authority.</p>
                   </div>
                </div>
             </div>
             <div className="md:w-1/2 flex items-center justify-center relative">
                <div className="w-80 h-80 rounded-full border border-gk-accent/20 flex items-center justify-center">
                   <div className="w-64 h-64 rounded-full border border-gk-accent/40 flex items-center justify-center">
                      <div className="w-48 h-48 rounded-full bg-gk-accent/10 flex items-center justify-center text-gk-accent animate-pulse shadow-[0_0_50px_rgba(201,168,76,0.1)]">
                         <Share2 size={40} />
                      </div>
                   </div>
                </div>
             </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center border border-gk-border p-20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-3xl md:text-6xl mb-12 leading-tight uppercase">INITIATE CATEGORY <span className="gradient-gold">SATURATION</span> PROTOCOL</h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Analyze Growth Architecture
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
