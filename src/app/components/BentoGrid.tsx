'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, Video } from 'lucide-react';

const services = [
  {
    id: "engine",
    title: "The Acquisition Engine",
    desc: "Meta/Google Ads, Technical SEO, and Answer Engine Optimization (AEO). Focused on immediate lead flow and high-intent capture.",
    icon: <Target size={24} />,
    size: "md:col-span-2",
  },
  {
    id: "infra",
    title: "Digital Infrastructure",
    desc: "Custom Web Development, AI Chatbots, and Email Funnels. Hardened systems that convert traffic into revenue autonomously.",
    icon: <Cpu size={24} />,
    size: "md:col-span-1",
  },
  {
    id: "creative",
    title: "Creative Production",
    desc: "High-Fidelity AI Video & Assets using Midjourney, Kling, and Suno. Disrupting attention with high-impact visual narratives.",
    icon: <Video size={24} />,
    size: "md:col-span-3",
  }
];

export const BentoGrid = () => {
  return (
    <section id="services" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <h2 className="text-4xl md:text-7xl mb-4">THE_ARSENAL</h2>
            <p className="font-body text-noir-400 uppercase tracking-widest text-sm">Specialized Retainers for Market Dominance</p>
          </div>
          <p className="max-w-md text-xs font-mono text-noir-500 uppercase leading-loose">
            Design without performance is art; performance without design is spam. We deploy strict, data-driven engines only.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative p-10 border border-foreground/10 bg-card hover:bg-foreground hover:text-background transition-all duration-500 flex flex-col justify-between min-h-[350px] ${service.size}`}
            >
              <div className="flex flex-col gap-8">
                <div className="w-12 h-12 border border-current flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-3xl md:text-5xl group-hover:text-background">{service.title}</h3>
              </div>
              
              <div className="mt-12 space-y-6">
                <p className="font-body text-muted-foreground group-hover:text-background/70 text-lg leading-relaxed max-w-xl">
                  {service.desc}
                </p>
                <div className="pt-6 border-t border-current flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black uppercase tracking-widest">Deploy_Now</span>
                  <span className="text-xl">→</span>
                </div>
              </div>
              
              {/* STARK LOGO WATERMARK IN BG */}
              <img 
                src="/branding/logo_symbol.png" 
                className="absolute top-10 right-10 h-10 opacity-[0.03] group-hover:opacity-10 transition-opacity invert" 
                alt="" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
