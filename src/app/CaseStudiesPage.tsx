'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, BarChart3, TrendingUp, Zap, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const cases = [
  {
    id: 1,
    title: "Dr. Reddy Medical Group",
    cat: "HEALTHCARE_AUTHORITY",
    stat: "210% Leads",
    context: "Multi-location practice with fragmented digital booking and zero organic visibility for high-ticket surgeries.",
    strategy: "Unified AEO Architecture + Tactical Performance Ads + WhatsApp Lead Agent.",
    result: "Instant booking synchronization across 3 cities. CPA reduced by 55%.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2053&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Global Logistics Corp",
    cat: "B2B_INFRASTRUCTURE",
    stat: "7.2x ROI",
    context: "Invisible in premium freight keywords. Spending $50k/mo on broad-match ads with 1% conversion rate.",
    strategy: "Deep-Scan Keyword Hardening + Performance Portal Redesign + Answer Engine Optimization.",
    result: "Organic traffic scaled 400% in 120 days. ROI sustained at 7x over 12 months.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "KGI Admissions Node",
    cat: "EDUCATIONAL_PORTAL",
    stat: "95% Auto",
    context: "Manual student inquiry management causing 40% lead leakage in the first 12 hours.",
    strategy: "Custom CRM Integration + AI Enrollment Agent + Digital Infrastructure Overhaul.",
    result: "Automated qualification of 40,000+ candidates. Zero manual entry required for stage-1.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-40">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gk-accent" />
                <span className="section-label">Performance_Logs_v2</span>
             </div>
             <h1 className="text-6xl md:text-[120px] leading-[0.8] font-black mb-12">
               THE_<span className="gradient-gold bg-clip-text">INTELLIGENCE</span>
             </h1>
             <p className="font-body text-xl md:text-2xl text-gk-text2 uppercase tracking-widest max-w-2xl leading-relaxed">
               DATA-DRIVEN SUCCESS ARCHITECTURES. NO HYPOTHESES, JUST HARDENED RESULTS.
             </p>
          </header>

          <div className="space-y-40">
            {cases.map((c, i) => (
              <motion.div 
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start"
              >
                <div className="lg:col-span-1 border-l-4 border-gk-accent pl-6">
                   <span className="text-4xl font-display font-black text-gk-accent/20 italic">0{c.id}</span>
                </div>
                
                <div className="lg:col-span-6 space-y-12">
                   <div>
                      <span className="section-label text-gk-text3 mb-4 block tracking-[0.4em]">{c.cat}</span>
                      <h2 className="text-4xl md:text-7xl font-black italic mb-8">{c.title}</h2>
                      <div className="p-8 bg-gk-accent/5 border border-gk-accent/20 border-l-[10px] border-l-gk-accent flex items-center justify-between">
                         <span className="text-4xl md:text-6xl font-display font-black gradient-gold">{c.stat.split(' ')[0]}</span>
                         <span className="text-[10px] font-mono text-gk-text2 uppercase font-bold tracking-widest text-right">{c.stat.split(' ')[1]}<br/>LIFT_MEASURED</span>
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-12 border-t border-gk-border/50">
                      <div className="space-y-4">
                         <h4 className="text-xs font-black uppercase text-gk-accent tracking-widest">The_Bottleneck</h4>
                         <p className="text-sm font-body text-gk-text1 leading-relaxed uppercase tracking-[0.1em]">{c.context}</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="text-xs font-black uppercase text-gk-accent tracking-widest">Our_Strategy</h4>
                         <p className="text-sm font-body text-gk-text1 leading-relaxed uppercase tracking-[0.1em] italic">{c.strategy}</p>
                      </div>
                   </div>

                   <div className="p-8 border border-gk-border bg-gk-secondary/50">
                      <div className="flex items-center gap-4 mb-4">
                         <CheckCircle2 size={16} className="text-gk-accent" />
                         <span className="text-xs font-bold uppercase tracking-widest">Hardened_Result</span>
                      </div>
                      <p className="text-xl font-bold italic leading-relaxed text-gk-text1">"{c.result}"</p>
                   </div>
                </div>

                <div className="lg:col-span-5 relative group">
                   <div className="p-2 border border-gk-border bg-gk-bg relative z-10">
                      <img 
                        src={c.image} 
                        alt={c.title} 
                        className="w-full grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 aspect-square object-cover" 
                      />
                   </div>
                   {/* Decorative lines */}
                   <div className="absolute -top-6 -right-6 w-full h-full border border-gk-accent/10 -z-10 group-hover:border-gk-accent/30 transition-colors" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* FINAL CTA */}
          <div className="mt-60 border border-gk-border p-16 md:p-32 text-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-4xl md:text-8xl mb-12">READY TO BE A<br /><span className="gradient-gold">CASE STUDY?</span></h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Initiate Project Scoping
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
