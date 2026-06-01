'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Zap, Share2, Users, Play, ArrowRight, Video, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialMediaPage() {
  const valueProps = [
    {
      icon: <Users className="text-gk-accent" />,
      title: "Community Architecture",
      desc: "Transforming passive followers into high-intent community nodes using psychological positioning and trust protocols."
    },
    {
      icon: <Video className="text-gk-accent" />,
      title: "Viral Continuity",
      desc: "High-fidelity AI-assisted short-form content production designed to sustain attention and drive platform reach."
    },
    {
      icon: <Share2 className="text-gk-accent" />,
      title: "Narrative Scaling",
      desc: "Deploying consistent brand stories across Instagram, LinkedIn, and YouTube for 360-degree digital saturation."
    }
  ];

  const metrics = [
    { label: "Avg_Monthly_Reach", value: "1.2M+" },
    { label: "Engagement_Rate", value: "8.4%" },
    { label: "Viral_Velocity", value: "High" }
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
                <span className="section-label">Service_Node:02</span>
              </div>
              <h1 className="text-6xl md:text-[100px] leading-[0.9] font-black mb-12">
                SOCIAL <span className="gradient-gold">GROWTH</span><br />
                NARRATIVES
              </h1>
              <p className="text-gk-text2 text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                We don't post content; we architect attention. 
                Deploying high-velocity social systems for market dominance.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors">
                Initiate_Growth_Scan
              </Link>
            </div>
            <div className="hidden lg:block w-1/3">
               <div className="relative p-2 glass-card">
                  <img 
                    src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop" 
                    alt="Social Media Growth Strategy" 
                    className="w-full grayscale brightness-75 hover:grayscale-0 transition-all duration-700 aspect-[4/5] object-cover"
                  />
                  <div className="absolute top-8 right-8 flex flex-col gap-4">
                     {metrics.map((m, i) => (
                       <div key={i} className="p-4 bg-gk-bg/80 backdrop-blur-md border border-gk-accent/20">
                          <span className="text-xl font-display font-black text-gk-accent block">{m.value}</span>
                          <span className="text-[7px] font-mono text-gk-text2 uppercase tracking-widest">{m.label}</span>
                       </div>
                     ))}
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

          {/* PRODUCTION INFOGRAPHIC */}
          <div className="glass-card p-12 md:p-24 mb-40 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
               <Share2 size={300} />
            </div>
            <div className="max-w-3xl relative z-10">
               <span className="section-label mb-4 block">Production_Architecture</span>
               <h2 className="text-4xl md:text-6xl font-black mb-12 italic">AI-DRIVEN CONTENT VELOCITY</h2>
               <div className="space-y-12">
                  <div className="flex gap-8 group">
                     <div className="w-16 h-16 border border-gk-accent flex items-center justify-center shrink-0 group-hover:bg-gk-accent group-hover:text-black transition-all">
                        <Camera size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">1-Hr Clinical Extraction</h4>
                        <p className="text-sm text-gk-text2 uppercase tracking-wide leading-relaxed">
                          We capture 30 days of narratives in a single 60-minute session. Expert extraction protocols.
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-8 group">
                     <div className="w-16 h-16 border border-gk-accent flex items-center justify-center shrink-0 group-hover:bg-gk-accent group-hover:text-black transition-all">
                        <Play size={24} />
                     </div>
                     <div>
                        <h4 className="text-xl font-bold mb-2">High-Fidelity AI Video</h4>
                        <p className="text-sm text-gk-text2 uppercase tracking-wide leading-relaxed">
                          Deploying Koshys-standard visuals with AI-assisted enhancement for maximum attention retention.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center border border-gk-border p-20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-3xl md:text-6xl mb-12 leading-tight uppercase">SCALE YOUR <span className="gradient-gold">IDENTITY</span> ACROSS GLOBAL NODES</h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Analyze Growth Potential
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
