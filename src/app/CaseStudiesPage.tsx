'use client';
import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, ArrowRight, BarChart3, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

const studies = [
  {
    title: "Healthcare Dominance Protocol",
    client: "Dr. Darshana Reddy",
    metrics: [
      { label: "Patient Growth", val: "+210%" },
      { label: "CPA Reduction", val: "-45%" }
    ],
    image: "/branding/seo-hero.png"
  },
  {
    title: "Digital Infrastructure Hardening",
    client: "KIMS Global",
    metrics: [
      { label: "Load Velocity", val: "0.4s" },
      { label: "AEO Presence", val: "Top 1%" }
    ],
    image: "/branding/web-hero.png"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Project Intel</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Hardened <span className="gradient-gold">Evidence.</span>
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-2xl mx-auto font-body">
              A deep dive into the high-performance frameworks we've deployed for clinical and enterprise-level dominance.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-52 px-6">
        <div className="container-custom">
          <div className="space-y-40">
            {studies.map((s, i) => (
              <div key={i} className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
                <div className={`lg:col-span-7 ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
                   <div className="relative group overflow-hidden border border-gk-border">
                      <img 
                        src={s.image} 
                        alt={s.title} 
                        className="w-full grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                      />
                      <div className="absolute inset-0 bg-gk-bg/30" />
                   </div>
                </div>
                <div className={`lg:col-span-5 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
                   <span className="text-[10px] font-mono text-gk-accent font-bold uppercase tracking-widest mb-4 block">Case_Study_{i+1}</span>
                   <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{s.title}</h2>
                   <h3 className="text-xl font-bold mb-8 opacity-60">CLIENT: {s.client}</h3>
                   
                   <div className="grid grid-cols-2 gap-8 mb-12">
                      {s.metrics.map((m, idx) => (
                        <div key={idx} className="p-6 bg-gk-secondary/50 border border-gk-border">
                           <span className="text-4xl font-bold text-gk-accent mb-2 block">{m.val}</span>
                           <span className="text-[10px] font-mono text-gk-text3 uppercase uppercase">{m.label}</span>
                        </div>
                      ))}
                   </div>
                   
                   <Link to={`/case-studies/${i}`} className="inline-flex items-center gap-4 text-white font-bold text-xs uppercase tracking-widest hover:text-gk-accent transition-colors">
                      View Full Performance Log <ArrowRight size={14} />
                   </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-52 px-6 bg-gradient-to-b from-gk-bg to-gk-elevated text-center">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Secure Your Node in the <span className="gradient-gold">Digital Economy.</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Performance Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
