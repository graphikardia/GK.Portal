'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ArrowRight, ShieldCheck, Zap, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const projects = [
  {
    id: "reddy",
    title: "Reddy Medical Group",
    cat: "Healthcare Dominance",
    image: "https://images.unsplash.com/photo-1519494140681-891791d9b4b3?q=80&w=2074&auto=format&fit=crop",
    result: "+210% Patient Inquiry Growth",
    scope: "Technical SEO & AEO Architecture"
  },
  {
    id: "kims",
    title: "KIMS Global",
    cat: "Enterprise Portal",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop",
    result: "Instant Load Velocity <0.4s",
    scope: "Digital Infrastructure Hardening"
  },
  {
    id: "academia",
    title: "Koshys Academia",
    cat: "Educational Systems",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    result: "40% Increase in Conversions",
    scope: "Performance Marketing Core"
  },
  {
    id: "logistics",
    title: "Global Link Log",
    cat: "Logistics Authority",
    image: "https://images.unsplash.com/photo-1586528116311-ad86d7c47318?q=80&w=2070&auto=format&fit=crop",
    result: "$1.2M Attributed Revenue",
    scope: "Search Lead Capture Ecosystem"
  }
];

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      {/* HERO */}
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Selected Deployments</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Evidence of High-Performance <span className="gradient-gold">Growth.</span>
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-2xl mx-auto font-body">
              A curated vault of digital infrastructures and acquisition engines built to dominate competitive market nodes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <section className="pb-52 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gk-secondary mb-8 border border-gk-border">
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
                   />
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-gk-accent uppercase tracking-[0.2em] mb-2 block">{project.cat}</span>
                      <h3 className="text-3xl font-bold">{project.title}</h3>
                    </div>
                    <div className="p-4 border border-gk-border group-hover:border-gk-accent transition-colors">
                       <ExternalLink size={18} className="text-gk-text3 group-hover:text-gk-accent transition-colors" />
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-2">
                     <div className="px-4 py-2 bg-gk-elevated/50 border border-gk-border flex items-center gap-3">
                        <ShieldCheck size={14} className="text-gk-accent" />
                        <span className="text-xs font-bold text-white uppercase">{project.result}</span>
                     </div>
                     <div className="px-4 py-2 border border-gk-border/50 flex items-center gap-3">
                        <Target size={14} className="text-gk-text3" />
                        <span className="text-[10px] font-mono text-gk-text3 uppercase uppercase">{project.scope}</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-52 px-6 bg-gk-secondary/20 text-center border-t border-gk-border">
        <div className="container-custom max-w-4xl mx-auto">
          <span className="section-label mb-8 block">Project Initiation</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Secure Your Node in the <span className="gradient-gold">Digital Economy.</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
             Initialize Audit
          </Link>
        </div>
      </section>
    </div>
  );
}
