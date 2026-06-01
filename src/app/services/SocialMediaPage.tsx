'use client';
import { motion } from 'framer-motion';
import { Share2, Video, TrendingUp, Users, ArrowRight, MessageSquare, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SocialMediaPage() {
  const strategies = [
    { icon: <Video className="text-gk-accent" />, title: "Production Core", desc: "High-fidelity AI-assisted video and design narratives that command attention." },
    { icon: <TrendingUp className="text-gk-accent" />, title: "Growth Injection", desc: "Strategic platform distribution to saturate your target audience market share." },
    { icon: <Users className="text-gk-accent" />, title: "Authority Lead", desc: "Building expert-led communities that drive loyalty and high-ticket referrals." },
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      {/* HERO */}
      <section className="pt-52 pb-32 px-6 bg-gradient-to-b from-gk-secondary/50 to-gk-bg overflow-hidden border-b border-white/5">
        <div className="container-custom flex flex-col md:flex-row items-center gap-20">
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-10 h-px bg-gk-accent" />
              <span className="section-label">Identity Strategy</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05]">
              Viral <span className="gradient-gold">Narratives.</span><br />
              Precision Reach.
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-xl mb-12 font-body">
              We translate brand identity into high-performance social systems that capture dominance across every relevant digital node.
            </p>
            <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
              Initialize Growth Audit
            </Link>
          </div>
          <div className="flex-1 relative">
             <div className="p-3 bg-gk-elevated border border-gk-border group">
                <img 
                   src="/branding/social-hero.png" 
                   alt="Social Media Production" 
                   className="w-full grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute top-10 right-10 p-6 glass-card animate-pulse border border-gk-accent/20">
                   <TrendingUp className="text-gk-accent mb-4" />
                   <span className="text-2xl font-bold block">+15M</span>
                   <span className="text-[9px] font-mono uppercase tracking-widest opacity-60">Avg_Impression_Lift</span>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* STRATEGY GRID */}
      <section className="py-40 px-6">
        <div className="container-custom">
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">The Architecture of Attention</h2>
             <p className="text-gk-text2 text-lg">We don't chase trends; we architect cultural shifts that convert engagement into measurable brand equity.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {strategies.map((s, i) => (
              <div key={i} className="p-12 glass-card hover:border-gk-accent/30 transition-all group">
                <div className="mb-8 w-14 h-14 border border-gk-border flex items-center justify-center text-white group-hover:text-gk-accent transition-colors">
                   {s.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wide group-hover:text-white transition-colors">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="py-40 px-6 bg-gk-secondary/20 border-y border-gk-border">
         <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
            <div className="lg:col-span-6 relative aspect-square group">
               <img 
                  src="https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2062&auto=format&fit=crop" 
                  alt="Production Studio" 
                  className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
               />
               <div className="absolute inset-0 border-[20px] border-gk-bg pointer-events-none" />
            </div>
            <div className="lg:col-span-6">
               <h2 className="text-4xl font-bold mb-8 italic">High-Fidelity <span className="gradient-gold">Production</span> Unit</h2>
               <p className="text-gk-text2 text-lg leading-relaxed mb-10">
                  Our in-house AI production engine allows us to deploy studio-quality content assets at the speed of the current market cycle.
               </p>
               <div className="space-y-6">
                  {[
                    "AI-Assisted Video Renders",
                    "Aesthetic Concept Hardening",
                    "Platform-Specific Narrative Optimization",
                    "Dynamic Performance Tracking"
                  ].map(item => (
                    <div key={item} className="flex items-center gap-4">
                       <Zap size={14} className="text-gk-accent" />
                       <span className="text-[10px] font-mono uppercase tracking-[0.2em] font-bold">{item}_NODE</span>
                    </div>
                  ))}
               </div>
            </div>
         </div>
      </section>

      {/* CTA */}
      <section className="py-52 px-6 text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Scale Your <span className="gradient-gold">Identity</span> Today.</h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Growth Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
