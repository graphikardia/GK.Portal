'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Target, TrendingUp, Zap, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';

const caseStudies = [
  {
    id: 1,
    client: "DR. DARSHANA REDDY",
    website: "drdarshanareddy.com",
    category: "HEALTHCARE_AUTHORITY",
    problem: "Establishing clinical dominance in a saturated medical market. Sub-optimal lead flow for high-ticket consultations.",
    engine: "Clinical Premium Infrastructure + Medical AEO (Answer Engine Optimization).",
    roi: "95%_INQUIRY_LIFT",
    details: "150+ monthly appointments automated. Top 3 Google ranking for core medical nodes."
  },
  {
    id: 2,
    client: "KOSHYS GROUP (KGI)",
    website: "admissions.kgi.edu.in",
    category: "EDUCATIONAL_INFRASTRUCTURE",
    problem: "Friction-heavy admission funnel causing high drop-off rates in student inquiries.",
    engine: "Digital Infrastructure overhaul + High-Velocity Funnels.",
    roi: "3X_ENROLLMENT",
    details: "50% reduction in processing latency. 120% surge in mobile traffic nodes."
  },
  {
    id: 3,
    client: "GLOBAL ACADEMIA (KGA)",
    website: "admissions.koshysglobalacademia.com",
    category: "GLOBAL_PORTAL",
    problem: "Weak international brand recognition and fragmented inquiry tracking systems.",
    engine: "Acquisition Engine + CRM Integrated Hub.",
    roi: "200%_INTL_GROWTH",
    details: "40% increase in application velocity. Global brand recognition achieved."
  },
  {
    id: 4,
    client: "GEETHA GOKULA",
    website: "gokula.graphikardia.com",
    category: "ELITE_PORTFOLIO",
    problem: "Need for high-fidelity personal branding to attract premium tier B2B clients.",
    engine: "Tech-Noir Design System + Neural Content Strategy.",
    roi: "212%_PROFILE_SURGE",
    details: "YUVA Summit recognition. 93% surge in account reach metrics."
  }
];

export default function CaseStudiesPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">
      {/* HEADER NAV */}

      <section className="pt-52 pb-32 px-6">
        <div className="max-w-[1800px] mx-auto">
          {/* PAGE TITLE */}
          <div className="mb-32">
            <h1 className="text-6xl md:text-[140px] leading-[0.8] mb-12">
              THE_<br />
              <span className="text-stroke-white text-transparent opacity-80">PROOF</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
              HARD DATA OVER AESTHETIC OPINION. PERFORMANCE METRICS FROM THE GRAPHIKARDIA ENGINE.
            </p>
          </div>

          {/* GRID OF CASE STUDIES */}
          <div className="space-y-4">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group border border-foreground/5 bg-noir-800/10 p-12 hover:bg-foreground hover:text-background transition-all duration-700"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                  <div className="lg:col-span-3">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-background/40 mb-2">[{study.category}]</p>
                    <h3 className="text-3xl font-black mb-1">{study.client}</h3>
                    <a href={`https://${study.website}`} className="text-[10px] font-mono text-foreground group-hover:text-background opacity-40 hover:opacity-100 flex items-center gap-2">
                      {study.website} <ArrowUpRight size={12} />
                    </a>
                  </div>

                  <div className="lg:col-span-6 grid md:grid-cols-2 gap-12">
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-background/40 mb-3">BASELINE_PROBLEM</p>
                      <p className="text-sm font-body leading-relaxed group-hover:text-background/80">{study.problem}</p>
                    </div>
                    <div>
                      <p className="text-[8px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-background/40 mb-3">ENGINE_DEPLOYED</p>
                      <p className="text-sm font-body leading-relaxed group-hover:text-background/80">{study.engine}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-3 text-right">
                    <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-background/40 mb-2">HARD_OUTCOME</p>
                    <h4 className="text-5xl md:text-6xl font-black italic">{study.roi}</h4>
                    <p className="text-[9px] font-bold mt-2 uppercase tracking-widest group-hover:text-background/60 leading-relaxed">
                      {study.details}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* SUMMARY GRID */}
          <div className="mt-32 grid grid-cols-2 lg:grid-cols-4 border border-foreground/10 divide-x divide-y md:divide-y-0 divide-foreground/10">
            {[
              { value: "6+", label: "SYSTEMS_DELIVERED" },
              { value: "200%", label: "AVG_LEAD_VELOCITY" },
              { value: "100%", label: "CLIENT_HARDENING" },
              { value: "5+", label: "YEARS_OF_STRESS_TESTING" }
            ].map((stat, i) => (
              <div key={i} className="p-10 text-center">
                <div className="text-4xl font-black mb-2">{stat.value}</div>
                <div className="text-[9px] font-mono uppercase tracking-widest opacity-40">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
