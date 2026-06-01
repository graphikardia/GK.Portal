'use client';
import React from 'react';
import { motion } from 'framer-motion';

const caseStudies = [
  {
    client: "Global Logistics Corp",
    problem: "Invisible in high-ticket freight search. CPC over $50 with 1% conversion.",
    solution: "Deployed 'Acquisition Engine X' + Technical SEO Overhaul.",
    roi: "7.2x ROI",
    details: "Lead cost dropped to $12; Organic traffic up 400% in 90 days."
  },
  {
    client: "Reddy Medical Group",
    problem: "Fragmented digital presence. Manual patient booking causing 40% drip.",
    solution: "Integrated 'Digital Infrastructure' with AI Lead Agent.",
    roi: "95% Automation",
    details: "Instant bookings via WhatsApp/Web GPT. Zero manual entry required."
  },
  {
    client: "Elite SaaS Platform",
    problem: "Low ad creative durability. CTR fatigue every 7 days.",
    solution: "High-Fidelity AI Video Production pipeline.",
    roi: "3.5x CTR Lift",
    details: "Generated 100+ high-fidelity video ads in 48 hours using Suno/Kling."
  }
];

export const ProofSection = () => {
  return (
    <section id="proof" className="py-32 px-6 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <h2 className="text-4xl md:text-8xl mb-4">CASE STUDIES</h2>
            <p className="font-body text-white/30 uppercase tracking-[0.4em] text-xs">Real Results, Real ROI</p>
          </div>
          <div className="text-right">
            <p className="text-6xl md:text-8xl font-black italic text-stroke-white text-transparent">DATA DRIVEN</p>
          </div>
        </div>

        <div className="space-y-4">
          {caseStudies.map((study, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group border border-white/5 bg-noir-800/20 p-8 md:p-12 hover:bg-white hover:text-black transition-all duration-700"
            >
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 items-center">
                <div className="col-span-1">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 mb-2">Client</p>
                  <h3 className="text-2xl font-black">{study.client}</h3>
                </div>
                
                <div className="col-span-1 lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 mb-3">Challenge</p>
                    <p className="text-sm font-body leading-relaxed group-hover:text-black/80">{study.problem}</p>
                  </div>
                  <div>
                    <p className="text-[8px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 mb-3">Our Solution</p>
                    <p className="text-sm font-body leading-relaxed group-hover:text-black/80">{study.solution}</p>
                  </div>
                </div>

                <div className="col-span-1 text-left md:text-right">
                  <p className="text-[10px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 mb-2">Result</p>
                  <h4 className="text-4xl md:text-7xl font-black italic">{study.roi}</h4>
                  <p className="text-[9px] font-bold mt-2 uppercase tracking-widest group-hover:text-black/60">{study.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-32 border border-white/10 p-16 text-center group hover:bg-white transition-all duration-700">
          <img src="/branding/logo_full.png" alt="" className="h-10 mx-auto mb-10 invert group-hover:invert-0" />
          <h3 className="text-3xl md:text-5xl mb-8 group-hover:text-black">READY TO GROW?</h3>
          <p className="font-body text-white/40 max-w-xl mx-auto mb-12 group-hover:text-black/60">
            We work with a limited number of clients at a time to ensure exceptional quality. 
            Let's discuss if we're the right fit.
          </p>
          <button className="px-16 py-6 bg-white text-black font-black uppercase tracking-widest group-hover:bg-black group-hover:text-white transition-colors duration-300">
            Book a Strategy Call
          </button>
        </div>
      </div>
    </section>
  );
};
