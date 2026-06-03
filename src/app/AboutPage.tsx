'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Target, Heart, Microscope, Users, Zap, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  const values = [
    { icon: <Target className="text-gk-accent" />, title: "Hyper-Focus", desc: "We don't do 'general' marketing. We build high-velocity acquisition for elite clinical and B2B brands." },
    { icon: <ShieldCheck className="text-gk-accent" />, title: "Technical Hardening", desc: "Every asset we deploy is engineered for stability, scale, and multi-node performance." },
    { icon: <Users className="text-gk-accent" />, title: "Identity Driven", desc: "We translate expertise into digital narratives that command authority and earn trust instantly." },
  ];

  const stats = [
    { num: "50+", label: "Brands Scaled", icon: Target },
    { num: "40M+", label: "Engagements", icon: Zap },
    { num: "5.2x", label: "Average ROI", icon: ShieldCheck },
    { num: "12+", label: "Market Sectors", icon: Globe },
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      {/* HERO SECTION */}
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Our Identity</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Engineering the Future of <span className="gradient-gold">Digital Authority.</span>
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-2xl mx-auto font-body">
              Graphikardia is a precision-driven agency specializing in the architecture of high-performance acquisition systems. We bridge the gap between technical expertise and commercial growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION IMAGE */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="container-custom">
           <div className="aspect-[21/9] w-full relative group">
              <img 
                src="/branding/advertising-hero.png" 
                alt="Studio Environment" 
                className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gk-bg/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="p-12 glass-card text-center max-w-xl border border-gk-accent/20">
                    <h3 className="text-3xl font-bold mb-4 uppercase">The Core Mission</h3>
                    <p className="text-gk-text2 text-sm leading-relaxed">To architect digital ecosystems where performance isn't just a metric, it's a structural guarantee.</p>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* VALUES GRID */}
      <section className="py-40 px-6 bg-gk-secondary/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <div key={i} className="p-12 glass-card hover:border-gk-accent/30 transition-colors group">
                <div className="mb-8 w-14 h-14 border border-gk-border flex items-center justify-center group-hover:scale-110 transition-transform">
                   {v.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{v.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wide">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="py-40 px-6 border-y border-gk-border">
         <div className="container-custom">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16 md:gap-24">
               {stats.map((s, i) => (
                 <div key={i} className="flex flex-col items-center text-center">
                    <s.icon className="text-gk-accent mb-6 opacity-40" />
                    <span className="text-4xl md:text-6xl font-bold text-white mb-2">{s.num}</span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-gk-text3">{s.label}</span>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-52 px-6 bg-gradient-to-b from-gk-bg to-gk-elevated text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Ready to Harden Your <span className="gradient-gold">Digital Infrastructure?</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
