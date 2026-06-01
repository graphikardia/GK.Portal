'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Target, TrendingUp, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { Footer } from './components/Footer';

const stats = [
  { num: "50+", label: "PROJECTS_EXECUTED", icon: Target },
  { num: "30M+", label: "IMPRESSIONS_GENERATED", icon: TrendingUp },
  { num: "5X", label: "AVERAGE_ROI", icon: Zap },
  { num: "95%", label: "CLIENT_SATISFACTION", icon: Users },
];

const process = [
  { step: "01", title: "DEEP_SCAN", desc: "Phase 0: We analyze your business architecture, market positioning, and goal nodes." },
  { step: "02", title: "STRATEGY_ENGINE", desc: "Phase 1: Designing the automated acquisition engine aligned with your ROI metrics." },
  { step: "03", title: "BRUTAL_EXECUTION", desc: "Phase 2: Deploying high-fidelity assets and hardened tech infrastructure." },
  { step: "04", title: "OPTIX_LOOP", desc: "Phase 3: Continuous monitoring and high-velocity optimization cycles." },
];

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* HEADER NAV REPLACEMENT */}
      <nav className="fixed top-0 w-full z-50 px-8 py-10 flex justify-between items-center mix-blend-difference">
        <Link to="/" className="flex items-center gap-4">
          <img src="/branding/logo_symbol.png" alt="GK" className="h-8 logo-filter" />
          <span className="font-display font-black text-xl tracking-tightest">GRAPHIKARDIA</span>
        </Link>
        <Link to="/" className="text-[10px] font-black uppercase tracking-widest hover:opacity-50 transition-opacity">Back_to_Node</Link>
      </nav>

      {/* HERO SECTION */}
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-end mb-32">
            <div className="flex-1">
              <h1 className="text-5xl md:text-[120px] leading-[0.85] mb-12">
                IDENTITY_<br />
                <span className="text-stroke-white text-transparent opacity-80">ARCHITECTS</span>
              </h1>
              <p className="font-body text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
                Graphikardia is a precision-driven digital agency. We don't build websites; we build <span className="text-foreground font-black italic">high-performance acquisition engines</span>.
              </p>
            </div>
          </div>

          {/* STATS HUD */}
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-foreground/10 divide-x divide-y md:divide-y-0 divide-foreground/10 mb-32">
            {stats.map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-10 hover:bg-foreground hover:text-background transition-all duration-500"
              >
                <h2 className="text-4xl md:text-6xl font-black italic mb-4">{stat.num}</h2>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* THE PROCESS */}
          <div className="mb-32">
            <h2 className="text-3xl md:text-5xl mb-16 px-4 border-l-4 border-foreground">THE_KARDIA_METHOD</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {process.map((item) => (
                <div key={item.step} className="p-10 border border-foreground/5 bg-noir-800/10 hover:border-foreground/20 transition-all">
                  <div className="text-6xl font-black italic text-foreground/5 mb-8">{item.step}</div>
                  <h3 className="text-xl font-black mb-4">{item.title}</h3>
                  <p className="font-body text-muted-foreground text-sm uppercase leading-loose">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FINAL CTA BOX */}
          <div className="border border-foreground/10 p-12 md:p-20 text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <h2 className="text-3xl md:text-6xl mb-8 relative z-10">CORE_CONNECTION_READY</h2>
            <div className="flex flex-wrap justify-center gap-12 mb-12 relative z-10">
              <div className="flex flex-col items-center">
                <p className="text-[8px] font-black opacity-30 mb-2 uppercase">Email_Node</p>
                <a href="mailto:graphikardia@gmail.com" className="font-mono text-sm hover:text-muted-foreground">graphikardia@gmail.com</a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[8px] font-black opacity-30 mb-2 uppercase">Phone_Link</p>
                <a href="tel:+917975594203" className="font-mono text-sm hover:text-muted-foreground">+91 7975594203</a>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-[8px] font-black opacity-30 mb-2 uppercase">Head_Quarters</p>
                <span className="font-mono text-sm">BANGALORE_IN</span>
              </div>
            </div>
            <Link to="/contact" className="inline-flex items-center gap-4 bg-foreground text-background px-12 py-5 font-display font-black text-xs uppercase tracking-widest hover:scale-105 transition-transform relative z-10">
              Initialize_Handshake <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
