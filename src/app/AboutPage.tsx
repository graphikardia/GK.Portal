'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Target, TrendingUp, Zap, Users, ShieldCheck, HeartPulse } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { num: "50+", label: "ENTERPRISE_NODES", icon: Target },
  { num: "30M+", label: "REACH_GENERATED", icon: TrendingUp },
  { num: "5X", label: "AVERAGE_ROAS", icon: Zap },
  { num: "95%", label: "RETENTION_RATE", icon: Users },
];

const methodology = [
  { step: "01", title: "DEEP_SCAN", desc: "Phase 0: We deconstruct your current architecture to identify high-yield conversion bottlenecks." },
  { step: "02", title: "SYSTEM_DESIGN", desc: "Phase 1: Architecting the unified acquisition framework across search, social, and automation." },
  { step: "03", title: "PRECISION_DEPLOY", desc: "Phase 2: High-velocity execution and asset hardening for market saturation." },
  { step: "04", title: "YIELD_LOOP", desc: "Phase 3: Continuous data-driven optimization loops to maximize capital efficiency." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      {/* HERO SECTION */}
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-end mb-40">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gk-accent" />
                <span className="section-label">Identity_Module</span>
              </div>
              <h1 className="text-6xl md:text-[120px] leading-[0.85] font-black mb-12">
                ARCHITECTS OF<br />
                <span className="gradient-gold bg-clip-text">DOMINANCE.</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-gk-text2 uppercase tracking-widest max-w-2xl leading-relaxed">
                Graphikardia is a precision-driven digital agency. We don't just build presence; we scale <span className="text-gk-text1 font-bold italic">high-performance acquisition infrastructure</span>.
              </p>
            </div>
          </div>

          {/* FOUNDER / VISION SECTION */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 mb-40 items-center">
             <div className="lg:col-span-5 aspect-[4/5] relative overflow-hidden glass-card p-2">
                <img 
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2071&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale brightness-75 hover:grayscale-0 transition-all duration-1000"
                  alt="Graphikardia Vision" 
                />
                <div className="absolute inset-0 bg-gk-accent/5 mix-blend-overlay" />
             </div>
             <div className="lg:col-span-7 space-y-12">
                <h2 className="text-4xl md:text-6xl font-black uppercase italic leading-tight">PRECISION OVER NOISE.</h2>
                <div className="space-y-6 prose-gk max-w-xl">
                   <p className="text-lg">
                      Founded on the principle of technical dominance, Graphikardia was built to solve the fragmentation in modern performance marketing. 
                      We saw agencies focusing on vanity metrics while infrastructure eroded.
                   </p>
                   <p className="text-lg">
                      Our architects come from high-stakes engineering and creative backgrounds. We treat your digital presence as a unified system, where search dominance, social narrative, and AI automation work in a single high-velocity loop.
                   </p>
                </div>
                <div className="flex flex-wrap gap-8 py-8 border-y border-gk-border">
                   <div className="flex items-center gap-3">
                      <ShieldCheck className="text-gk-accent" />
                      <span className="text-xs font-bold uppercase tracking-widest">Compliance_Hardened</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <HeartPulse className="text-gk-accent" />
                      <span className="text-xs font-bold uppercase tracking-widest">Medical_Authority_Niche</span>
                   </div>
                </div>
             </div>
          </div>

          {/* STATS HUD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-gk-border divide-x divide-y md:divide-y-0 divide-gk-border mb-40 bg-gk-secondary/30">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-12 hover:bg-gk-accent/5 transition-all duration-500 group"
              >
                <h2 className="text-4xl md:text-6xl font-black italic mb-4 group-hover:text-gk-accent transition-colors">{stat.num}</h2>
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-gk-text3">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* THE METHODOLOGY */}
          <div className="mb-40">
            <div className="flex justify-between items-end mb-24 gap-12">
               <h2 className="text-4xl md:text-7xl font-black">THE_KARDIA_METHOD</h2>
               <span className="text-[10px] font-mono font-bold text-gk-text3 uppercase uppercase tracking-widest text-right">04_PHASE_PROTOCOL</span>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodology.map((item) => (
                <div key={item.step} className="p-10 glass-card bg-gk-secondary/50 group hover:border-gk-accent/30 transition-all">
                  <div className="text-5xl font-display font-black text-gk-accent/10 mb-8 group-hover:text-gk-accent transition-colors">{item.step}</div>
                  <h3 className="text-xl font-black mb-4 uppercase tracking-tighter">{item.title}</h3>
                  <p className="font-body text-gk-text3 text-sm uppercase leading-relaxed tracking-widest italic">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BOX */}
          <div className="glass-card p-12 md:p-32 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            <span className="section-label mb-8 block uppercase tracking-widest">Connect_With_An_Architect</span>
            <h2 className="text-3xl md:text-7xl mb-12 relative z-10 leading-none">CORE_CONNECTION_READY</h2>
            <div className="flex flex-wrap justify-center gap-16 mb-16 relative z-10">
              <div className="flex flex-col items-center">
                <p className="text-[8px] font-mono font-bold text-gk-text3 mb-3 uppercase tracking-widest">Email_Node</p>
                <a href="mailto:graphikardia@gmail.com" className="text-sm font-bold hover:text-gk-accent transition-colors">graphikardia@gmail.com</a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[8px] font-mono font-bold text-gk-text3 mb-3 uppercase tracking-widest">Phone_Link</p>
                <a href="tel:+917975594203" className="text-sm font-bold hover:text-gk-accent transition-colors">+91 7975594203</a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[8px] font-mono font-bold text-gk-text3 mb-3 uppercase tracking-widest">HQ_Matrix</p>
                <span className="text-sm font-bold">BANGALORE_IN</span>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-gk-accent text-black px-12 py-5 font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-all relative z-10 shadow-[0_0_20px_rgba(201,168,76,0.15)]">
               Initialize_Audit <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
