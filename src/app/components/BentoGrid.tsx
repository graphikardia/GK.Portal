'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "engine",
    title: "Acquisition Engine",
    desc: "Dominating high-intent search and AI answer engines via AEO, technical SEO, and conversion-optimized performance marketing.",
    icon: <Target size={24} />,
    size: "md:col-span-2",
    href: "/services/seo",
    tags: ["SEO", "AEO", "PPC"]
  },
  {
    id: "infra",
    title: "Digital Infrastructure",
    desc: "Architecting hardened digital systems, CRM integrations, and intelligent automation that turn traffic into predictable revenue.",
    icon: <Cpu size={24} />,
    size: "md:col-span-1",
    href: "/services/website",
    tags: ["WEB", "CRM", "AI"]
  },
  {
    id: "creative",
    title: "Production Core",
    desc: "Disrupting market indifference through high-fidelity AI-assisted video and design narratives that capture and convert attention at scale.",
    icon: <Video size={24} />,
    size: "md:col-span-3",
    href: "/services/social-media",
    tags: ["CONTENT", "SOCIAL", "VIDEO"]
  }
];

export const BentoGrid = () => {
  return (
    <section id="services" className="py-32 px-6 bg-gk-bg relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-gk-accent/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-2xl">
            <span className="section-label mb-4 block">Capabilities_Overview</span>
            <h2 className="text-4xl md:text-7xl mb-8 leading-tight">
              PRECISION <span className="text-stroke-gold">SERVICES</span> FOR<br />
              CATEGORY DOMINANCE.
            </h2>
            <p className="font-body text-gk-text2 text-lg leading-relaxed uppercase tracking-wider">
              We deploy specialized tactical units to solve your acquisition bottleneck. 
              Built for performance, hardened for scale.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-1 px-6 border-l border-gk-accent/30 py-2">
            <span className="text-[10px] font-mono text-gk-text3 uppercase">System_Active</span>
            <span className="text-2xl font-display font-bold text-gk-text1 tracking-tighter">03_CORES</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group relative card-hover p-12 bg-gk-secondary flex flex-col justify-between min-h-[420px] ${service.size}`}
            >
              <div className="flex flex-col gap-10">
                <div className="flex justify-between items-start">
                  <div className="w-14 h-14 border border-gk-border flex items-center justify-center text-gk-accent group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <div className="flex gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono font-bold text-gk-text3 px-2 py-1 border border-gk-border rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl md:text-5xl font-black">{service.title}</h3>
                  <p className="font-body text-gk-text2 text-lg leading-relaxed max-w-xl group-hover:text-gk-text1 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex items-center justify-between">
                <Link 
                  to={service.href}
                  className="flex items-center gap-3 text-gk-accent text-[11px] font-display font-extrabold uppercase tracking-widest group/link"
                >
                  View_Service_Intel 
                  <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
                
                <span className="text-[10px] font-mono text-gk-text3 opacity-20 font-bold tracking-tighter group-hover:opacity-100 transition-opacity">
                  REF_ID:_{service.id.toUpperCase()}
                </span>
              </div>
              
              {/* STARK LOGO WATERMARK IN BG */}
              <img 
                src="/branding/logo_symbol.png" 
                className="absolute bottom-12 right-12 h-20 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" 
                alt="" 
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
