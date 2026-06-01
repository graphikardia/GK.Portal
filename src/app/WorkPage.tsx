'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Filter, Globe, MousePointer2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const projects = [
  { 
    id: 1, 
    title: 'DR. DARSHANA REDDY', 
    cat: 'HEALTHCARE_AUTHORITY', 
    website: 'drdarshanareddy.com',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop',
    tags: ['AEO', 'Website', 'Performance']
  },
  { 
    id: 2, 
    title: 'KGI ADMISSIONS', 
    cat: 'EDUCATIONAL_PORTAL', 
    website: 'admissions.kgi.edu.in',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop',
    tags: ['Ad_Systems', 'Leads']
  },
  { 
    id: 3, 
    title: 'KOSHYS GLOBAL', 
    cat: 'GLOBAL_ACADEMIA', 
    website: 'koshysglobalacademia.com',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    tags: ['Strategy', 'Full_Stack']
  },
  { 
    id: 4, 
    title: 'GRAPHIKARDIA 1.0', 
    cat: 'AGENCY_PORTAL', 
    website: 'graphikardia.com',
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop',
    tags: ['Branding', 'Dev']
  },
  { 
    id: 5, 
    title: 'MEDICAL SYSTEMS', 
    cat: 'CLINICAL_INFRA', 
    website: 'medical.gk.com',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop',
    tags: ['Automation', 'SEO']
  },
  { 
    id: 6, 
    title: 'PREMIUM B2B', 
    cat: 'ENTERPRISE_NODES', 
    website: 'b2b.gk.com',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    tags: ['Strategy', 'CRO']
  }
];

const categories = ['ALL', 'HEALTHCARE_AUTHORITY', 'EDUCATIONAL_PORTAL', 'GLOBAL_ACADEMIA', 'ENTERPRISE_NODES', 'AGENCY_PORTAL'];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState('ALL');

  const filteredProjects = activeTab === 'ALL' 
    ? projects 
    : projects.filter(p => p.cat === activeTab);

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-24 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                 <div className="w-12 h-px bg-gk-accent" />
                 <span className="section-label">Selected_Work_v2</span>
              </div>
              <h1 className="text-6xl md:text-[140px] leading-[0.8] font-black mb-12">
                THE_<span className="gradient-gold bg-clip-text">VAULT</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-gk-text2 uppercase tracking-widest max-w-2xl leading-relaxed">
                HARDENED ARCHITECTURES DEPLOYED ACROSS GLOBAL NODES. PERFORMANCE VERIFIED.
              </p>
            </div>
          </header>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-4 mb-20 border-b border-gk-border pb-12">
             <div className="flex items-center gap-4 mr-8 text-gk-text3">
                <Filter size={16} />
                <span className="text-[10px] font-mono uppercase font-bold tracking-widest">Filter_Nodes</span>
             </div>
             {categories.map(cat => (
               <button
                 key={cat}
                 onClick={() => setActiveTab(cat)}
                 className={cn(
                   "px-6 py-2 text-[9px] font-mono font-bold uppercase tracking-[0.2em] transition-all border",
                   activeTab === cat 
                     ? "bg-gk-accent text-black border-gk-accent" 
                     : "text-gk-text3 border-gk-border hover:border-gk-accent hover:text-gk-accent"
                 )}
               >
                 {cat.split('_')[0]}
               </button>
             ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((item, i) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="group relative border border-gk-border overflow-hidden card-hover bg-gk-secondary"
                >
                  <div className="aspect-video relative overflow-hidden">
                     <img 
                       src={item.image} 
                       alt={item.title} 
                       className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" 
                     />
                     <div className="absolute inset-0 bg-gk-bg/40 mix-blend-multiply opacity-60 group-hover:opacity-0 transition-opacity" />
                  </div>
                  
                  <div className="p-10 flex flex-col justify-between min-h-[220px]">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-gk-accent">[{item.cat.split('_')[0]}]</span>
                        <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer" className="p-2 border border-gk-border/50 text-gk-text3 hover:text-gk-accent hover:border-gk-accent transition-all">
                           <ArrowUpRight size={16} />
                        </a>
                      </div>
                      <h3 className="text-3xl font-black italic mb-2">{item.title}</h3>
                      <div className="flex flex-wrap gap-2">
                         {item.tags.map(tag => (
                           <span key={tag} className="text-[8px] font-mono font-bold text-gk-text3 px-2 py-0.5 border border-gk-border/30 rounded-full uppercase">{tag}</span>
                         ))}
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-gk-border/50 flex justify-between items-center">
                      <span className="text-[9px] font-mono text-gk-text3 opacity-60">{item.website}</span>
                      <Link to="/case-studies" className="text-[10px] font-black uppercase tracking-widest text-gk-text1 hover:text-gk-accent transition-colors flex items-center gap-2 group/link">
                         View_Results <ArrowUpRight size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
