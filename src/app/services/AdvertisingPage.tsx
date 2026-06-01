'use client';
import { motion } from 'framer-motion';
import { Megaphone, Target, BarChart, ArrowRight, Zap, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AdvertisingPage() {
  const points = [
    { icon: <Megaphone className="text-gk-accent" />, title: "Precision Saturation", desc: "Multi-channel media buying across Meta, Google, and premium medical/B2B networks." },
    { icon: <Target className="text-gk-accent" />, title: "Intent Capture", desc: "We target the specific nodes in a customer's journey with the highest probability of conversion." },
    { icon: <BarChart className="text-gk-accent" />, title: "Attribution Modeling", desc: "Clear, transparent reporting on ROAS and cost-per-acquisition metrics." },
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
                   <span className="section-label">Media Strategy</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.05]">
                   Strategic <span className="gradient-gold">Advertising.</span>
                 </h1>
                 <p className="text-gk-text2 text-xl leading-relaxed max-w-xl mb-12 font-body">
                   Deploy capital with confidence. We run hyper-targeted media acquisition campaigns that dominate market share and drive scalable revenue.
                 </p>
                 <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
                   Initialize Advertising Audit
                 </Link>
              </motion.div>
              <div className="relative group">
                 <div className="p-3 bg-gk-elevated border border-gk-border">
                    <img 
                       src="https://images.unsplash.com/photo-1551288049-bbdac8a28a16?q=80&w=2070&auto=format&fit=crop" 
                       alt="Media Analytics Dashboard" 
                       className="w-full grayscale brightness-50 group-hover:grayscale-0 transition-all duration-1000"
                    />
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* CORE POINTS */}
      <section className="py-40 px-6">
        <div className="container-custom">
          <div className="mb-24 text-center max-w-3xl mx-auto">
             <h2 className="text-3xl md:text-5xl font-bold mb-8 italic">Data-Driven Capital Allocation</h2>
             <p className="text-gk-text2 text-lg">We don't guess. We utilize hard data and algorithmic modeling to ensure every dollar deployed generates maximum yield.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {points.map((p, i) => (
              <div key={i} className="p-12 glass-card hover:border-gk-accent/30 transition-all group text-center">
                <div className="mb-8 w-14 h-14 border border-gk-border flex items-center justify-center text-white group-hover:text-gk-accent transition-colors mx-auto">
                   {p.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wide">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-52 px-6 text-center border-t border-gk-border">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Dominate Your <span className="gradient-gold">Market Category.</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Deployment
          </Link>
        </div>
      </section>
    </div>
  );
}
