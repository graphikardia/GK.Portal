'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { Footer } from './components/Footer';

const projects = [
  { id: 1, title: 'DR. DARSHANA REDDY', cat: 'HEALTHCARE_HUB', website: 'drdarshanareddy.com' },
  { id: 2, title: 'KGI ADMISSIONS', cat: 'EDUCATIONAL_PORTAL', website: 'admissions.kgi.edu.in' },
  { id: 3, title: 'KGA ADMISSIONS', cat: 'GLOBAL_ACADEMIA', website: 'admissions.koshysglobalacademia.com' },
  { id: 4, title: 'GRAPHIKARDIA AGENCY', cat: 'AGENCY_PORTAL', website: 'graphikardia.com' },
  { id: 5, title: 'GOKULA PORTFOLIO', cat: 'PERSONAL_SYSTEM', website: 'gokula.graphikardia.com' },
  { id: 6, title: 'GK PORTFOLIO', cat: 'PROFESSIONAL_NODES', website: 'gk.graphikardia.com' }
];

export default function WorkPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <nav className="fixed top-0 w-full z-50 px-8 py-10 flex justify-between items-center mix-blend-difference text-white">
        <Link to="/" className="flex items-center gap-4">
          <img src="/branding/logo_symbol.png" alt="GK" className="h-8 logo-filter" />
          <span className="font-display font-black text-xl tracking-tightest">GRAPHIKARDIA</span>
        </Link>
        <Link to="/" className="text-[10px] font-black uppercase tracking-widest hover:opacity-50 transition-opacity">Back_to_Node</Link>
      </nav>

      <section className="pt-52 pb-32 px-6">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-24">
            <h1 className="text-6xl md:text-[140px] leading-[0.8] mb-12">
              THE_<br />
              <span className="text-stroke-white text-transparent opacity-80">VAULT</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
              HARDENED ARCHITECTURES DEPLOYED ACROSS GLOBAL NODES.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {projects.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative border border-foreground/5 bg-noir-800/10 p-12 min-h-[450px] flex flex-col justify-between hover:bg-foreground hover:text-background transition-all duration-700"
              >
                <div>
                  <div className="flex justify-between items-start mb-12">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-background/40">[{item.cat}]</p>
                    <a href={`https://${item.website}`} target="_blank" rel="noopener noreferrer" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight size={24} />
                    </a>
                  </div>
                  <h3 className="text-4xl font-black mb-4 leading-tight italic">{item.title}</h3>
                </div>

                <div className="space-y-6">
                  <div className="h-px bg-foreground/10 group-hover:bg-background/20" />
                  <div className="flex justify-between items-center">
                    <span className="text-[10px] font-mono opacity-40 group-hover:opacity-60">{item.website}</span>
                    <Link to="/case-studies" className="text-[10px] font-black uppercase tracking-widest underline underline-offset-8">View_Protocol</Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
