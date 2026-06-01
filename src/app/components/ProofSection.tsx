'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, BarChart, Users, Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const caseStudies = [
  {
    client: "Global Logistics Corp",
    category: "B2B_INFRASTRUCTURE",
    problem: "Invisible in high-ticket freight search. CPC over $50 with 1% conversion.",
    roi: "7.2x ROI",
    metric: "Lead cost: $12",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    client: "Reddy Medical Group",
    category: "HEALTHCARE_AUTHORITY",
    problem: "Fragmented digital presence. Manual patient booking causing 40% lead drip.",
    roi: "95% AUTO",
    metric: "Zero manual entry",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    client: "Elite SaaS Platform",
    category: "PRODUCT_ACQUISITION",
    problem: "Low ad creative durability. CTR fatigue every 7 days.",
    roi: "3.5x CTR",
    metric: "100+ creative/mo",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  }
];

export const ProofSection = () => {
  return (
    <section id="proof" className="py-40 px-6 bg-gk-bg relative border-t border-gk-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-12">
          <div className="max-w-xl">
            <span className="section-label mb-4 block">Proof_of_Performance</span>
            <h2 className="text-4xl md:text-8xl mb-8 leading-none">
              RESULTS <span className="text-stroke-gold">DRIVEN</span><br />
              BY DATA.
            </h2>
            <p className="font-body text-gk-text2 text-lg uppercase tracking-widest leading-relaxed">
              We focus on the metrics that matter: Revenue, ROAS, and System Resilience. 
              No vanity metrics, just pure performance.
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="p-6 bg-gk-secondary border-l-2 border-gk-accent">
               <span className="text-3xl font-display font-black text-gk-text1 block">$15M+</span>
               <span className="text-[9px] font-mono text-gk-text3 uppercase font-bold">Revenue_Generated</span>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: -0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className="group border border-gk-border hover:border-gk-border-a bg-gk-secondary p-8 md:p-0 overflow-hidden transition-all duration-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                <div className="lg:col-span-4 h-full relative overflow-hidden hidden lg:block">
                  <img 
                    src={study.image} 
                    alt={study.client} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gk-bg/40 mix-blend-multiply" />
                </div>
                
                <div className="lg:col-span-8 p-12 md:p-16">
                  <div className="flex justify-between items-start mb-12">
                    <div>
                      <span className="section-label text-gk-text3 mb-2 block tracking-[0.4em]">{study.category}</span>
                      <h3 className="text-3xl md:text-5xl font-black">{study.client}</h3>
                    </div>
                    <Link to="/case-studies" className="w-12 h-12 border border-gk-border rounded-full flex items-center justify-center text-gk-text3 hover:text-gk-accent hover:border-gk-accent transition-all">
                      <ArrowUpRight size={20} />
                    </Link>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div>
                      <p className="text-[10px] font-mono font-bold text-gk-accent uppercase tracking-widest mb-4">The_Bottleneck</p>
                      <p className="text-sm font-body text-gk-text2 leading-relaxed uppercase tracking-wider">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-mono font-bold text-gk-accent uppercase tracking-widest mb-4">Primary_Metric</p>
                      <div className="flex items-center gap-6">
                        <h4 className="text-5xl md:text-7xl font-display font-black gradient-gold italic">{study.roi.split(' ')[0]}</h4>
                        <span className="text-[10px] font-mono text-gk-text3 leading-tight opacity-60 font-bold uppercase">{study.roi.split(' ')[1]}<br/>{study.metric}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-gk-border/50 flex justify-between items-center opacity-40 group-hover:opacity-100 transition-opacity">
                    <div className="flex gap-8">
                      <div className="flex items-center gap-2">
                        <TrendingUp size={12} className="text-gk-accent" />
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest">Growth_Locked</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <LinkIcon size={12} className="text-gk-accent" />
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest">Protocol_Verified</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 glass-card p-16 md:p-32 text-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          <span className="section-label mb-8 block">Next_Steps</span>
          <h2 className="text-4xl md:text-8xl mb-12 group-hover:scale-105 transition-transform duration-700">READY TO <span className="gradient-gold">DOMINATE?</span></h2>
          <p className="font-body text-gk-text2 text-xl max-w-2xl mx-auto mb-16 uppercase tracking-widest leading-relaxed">
            We work with a limited number of clients per quarter to maintain high-velocity execution. 
            Connect with our architects to see if you qualify.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link 
              to="/contact" 
              className="px-16 py-6 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors shadow-[0_0_30px_rgba(201,168,76,0.2)]"
            >
              Analyze Your Architecture
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
