'use client';
import { motion } from 'framer-motion';
import { Quote, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { Footer } from './components/Footer';

const reviews = [
  { id: 1, name: 'SARAH CHEN', role: 'CMO', company: 'AETHER INTEL', quote: "GRAPHIKARDIA DECODED OUR ENTIRE MARKET POSITION. GROWTH WAS IMMEDIATE AND SUSTAINED.", stat: "+140%_ROI" },
  { id: 2, name: 'MARCUS THORNE', role: 'FOUNDER', company: 'PULSE MEDIA', quote: "THE EDITING IS AGGRESSIVE, CLEAN, AND IMPOSSIBLE TO SCROLL PAST. ELITE-TIER PERFORMANCE.", stat: "2.4M_VIEWS" },
  { id: 3, name: 'ELENA ROSSI', role: 'BRAND LEAD', company: 'VANGUARD', quote: "THEY DON'T JUST BUILD SITES; THEY BUILD DIGITAL EMPIRES.", stat: "5.2X_LEADS" }
];

export default function TestimonialsPage() {
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
              <span className="text-stroke-white text-transparent opacity-80">ECHO</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
              HARD_VALIDATION_FROM_ACQUIRED_NODES.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {reviews.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group border border-foreground/5 bg-noir-800/10 p-12 min-h-[500px] flex flex-col justify-between hover:bg-foreground hover:text-background transition-all duration-700"
              >
                <div>
                  <Quote size={48} className="opacity-10 mb-12 group-hover:opacity-20" />
                  <p className="text-3xl font-black leading-[1.1] md:text-4xl italic uppercase">{r.quote}</p>
                </div>

                <div className="flex justify-between items-end border-t border-foreground/10 pt-8 group-hover:border-background/20">
                  <div>
                    <h4 className="text-2xl font-black mb-1">{r.name}</h4>
                    <p className="text-[10px] font-mono uppercase tracking-[0.3em] opacity-40 group-hover:opacity-60">{r.company} // {r.role}</p>
                  </div>
                  <div className="px-6 py-2 bg-foreground text-background font-black text-[10px] uppercase tracking-widest group-hover:bg-background group-hover:text-foreground">
                    {r.stat}
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
