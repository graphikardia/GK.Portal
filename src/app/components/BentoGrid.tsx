'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Cpu, Video, ArrowRight, ShieldCheck, BarChart3, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: "acquisition",
    title: "Search & AEO",
    desc: "Dominating search and AI answer engines through technical SEO and authority architecture.",
    icon: <Target size={24} />,
    size: "md:col-span-2",
    href: "/services/seo",
    stat: "High-Intent"
  },
  {
    id: "infrastructure",
    title: "Digital Systems",
    desc: "Hardened CRM and automated lead qualification infrastructures.",
    icon: <Cpu size={24} />,
    size: "md:col-span-1",
    href: "/services/website",
    stat: "Automated"
  },
  {
    id: "production",
    title: "Creative Edge",
    desc: "High-fidelity AI-assisted video and design that scales brand trust instantly.",
    icon: <Video size={24} />,
    size: "md:col-span-3",
    href: "/services/social-media",
    stat: "Precision"
  }
];

export const BentoGrid = () => {
  return (
    <section id="services" className="py-40 bg-gk-bg relative">
      <div className="container-custom">
        <div className="mb-24 text-center max-w-3xl mx-auto">
          <span className="section-label mb-6 block">Our Capabilities</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Comprehensive <span className="gradient-gold">Growth Nodes</span> for Elite Brands.
          </h2>
          <p className="text-gk-text2 text-lg">
            We deploy specialized tactical frameworks to solve your acquisition bottlenecks. 
            Built for reliability, hardened for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`group card-hover p-10 md:p-14 flex flex-col justify-between min-h-[400px] ${service.size}`}
            >
              <div className="space-y-8">
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 border border-gk-accent/20 flex items-center justify-center text-gk-accent group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <span className="text-[9px] font-mono font-bold text-gk-text3 border border-gk-border px-3 py-1 uppercase tracking-widest">
                    {service.stat}
                  </span>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold">{service.title}</h3>
                  <p className="text-gk-text2 text-lg leading-relaxed max-w-xl group-hover:text-gk-text1 transition-colors">
                    {service.desc}
                  </p>
                </div>
              </div>
              
              <div className="mt-12 flex items-center justify-between">
                <Link 
                  to={service.href}
                  className="flex items-center gap-3 text-gk-accent text-xs font-bold uppercase tracking-widest group/link"
                >
                  View Detail <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                </Link>
                
                <div className="flex gap-4 opacity-20">
                   <ShieldCheck size={14} />
                   <Globe size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
