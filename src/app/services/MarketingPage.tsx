'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Zap, Target, TrendingUp, DollarSign, ArrowRight, PieChart, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MarketingPage() {
  const valueProps = [
    {
      icon: <Target className="text-gk-accent" />,
      title: "Precision Targeting",
      desc: "Deploying laser-focused ad campaigns tailored for high-ticket acquisition in healthcare and B2B sectors."
    },
    {
      icon: <TrendingUp className="text-gk-accent" />,
      title: "ROAS Optimization",
      desc: "Aggressive data monitoring to maximize Return on Ad Spend, ensuring every dollar fuels scalable growth."
    },
    {
      icon: <Activity className="text-gk-accent" />,
      title: "Tactical Retargeting",
      desc: "Invisible follow-through systems that stay top-of-mind for warm leads until conversion node activation."
    }
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1 service-hero-bg">
      {/* HERO */}
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-20 items-center mb-32">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-px bg-gk-accent" />
                <span className="section-label">Service_Node:04</span>
              </div>
              <h1 className="text-6xl md:text-[100px] leading-[0.9] font-black mb-12">
                ACQUISITION <span className="gradient-gold">ENGINE</span><br />
                PERFORMANCE
              </h1>
              <p className="text-gk-text2 text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                We don't manage ads; we architect lead infrastructure. 
                Deploying high-velocity acquisition engines for category leaders.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors">
                Initiate_Strategy_Scan
              </Link>
            </div>
            <div className="hidden lg:block w-1/3">
               <div className="p-10 glass-card space-y-12 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10">
                     <BarChart3 size={120} />
                  </div>
                  <div className="space-y-6">
                    <span className="text-[10px] font-mono text-gk-text3 uppercase font-bold tracking-widest">Growth_Dynamics</span>
                    <div className="space-y-4">
                       {[
                         { label: "ROAS_Coefficient", val: "5.4x" },
                         { label: "Lead_Volume_Scale", val: "+210%" },
                         { label: "Acquisition_Cost", val: "-40%" }
                       ].map((m, i) => (
                         <div key={i} className="flex justify-between items-end border-b border-gk-border pb-2">
                           <span className="text-[9px] font-mono text-gk-text2 uppercase">{m.label}</span>
                           <span className="text-2xl font-display font-bold text-gk-accent">{m.val}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="pt-6">
                     <div className="bg-gk-accent/10 p-4 border border-gk-accent/20">
                        <span className="text-[8px] font-mono text-gk-accent uppercase font-bold block mb-1 tracking-widest">Engine_Status</span>
                        <span className="text-xs font-bold text-gk-text1">OPTIMIZED_FOR_SCALE</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>

          {/* VALUE PROPS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-40">
            {valueProps.map((prop, i) => (
              <div key={i} className="p-10 card-hover bg-gk-secondary group">
                <div className="mb-8 p-4 w-fit border border-gk-border group-hover:border-gk-accent transition-colors">
                  {prop.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{prop.title}</h3>
                <p className="text-gk-text2 text-sm leading-relaxed uppercase tracking-wider group-hover:text-gk-text1 transition-colors">
                  {prop.desc}
                </p>
              </div>
            ))}
          </div>

          {/* BUDGET INFOGRAPHIC */}
          <div className="mb-40 p-12 md:p-24 border border-gk-border relative overflow-hidden flex flex-col md:flex-row items-center gap-16">
             <div className="md:w-1/2">
                <span className="section-label mb-4 block tracking-widest">Yield_Optimization</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase">DEPLOYING AD CAPITAL WITH PRECISION</h2>
                <p className="text-gk-text2 text-sm uppercase tracking-widest leading-relaxed mb-12">
                   Our system ensures zero ad-spend erosion. We identify the high-yield nodes and iterate with high-velocity until maximum efficiency is reached.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                     <div className="p-3 bg-gk-accent text-black rounded-full">
                        <DollarSign size={16} />
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest">Minimized_Waste_Architecture</span>
                  </div>
                  <div className="flex items-center gap-6">
                     <div className="p-3 border border-gk-accent text-gk-accent rounded-full">
                        <Activity size={16} />
                     </div>
                     <span className="text-xs font-bold uppercase tracking-widest">Real-Time_Yield_Monitoring</span>
                  </div>
                </div>
             </div>
             <div className="md:w-1/2 flex justify-center">
                <div className="w-64 h-64 border-[20px] border-gk-secondary rounded-full relative flex items-center justify-center p-8">
                   <div className="absolute inset-0 border-[20px] border-gk-accent border-t-transparent border-r-transparent rounded-full -rotate-12" />
                   <div className="text-center">
                      <span className="text-4xl font-display font-black text-gk-text1">80%</span>
                      <span className="text-[8px] font-mono text-gk-text3 uppercase block">Conversion_Concentration</span>
                   </div>
                </div>
             </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center border border-gk-border p-20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-3xl md:text-6xl mb-12 leading-tight uppercase">SCALE YOUR <span className="gradient-gold">ROAS</span> TO CATEGORY DOMINANCE</h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Connect with an Architect
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
