'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Cpu, Bot, Settings, ArrowRight, BrainCircuit, Headphones } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ChatbotsPage() {
  const valueProps = [
    {
      icon: <BrainCircuit className="text-gk-accent" />,
      title: "Intelligent Qualification",
      desc: "AI agents that pre-screen and qualify leads 24/7, ensuring your clinical team only speaks with high-intent prospects."
    },
    {
      icon: <MessageSquare className="text-gk-accent" />,
      title: "WhatsApp Orchestration",
      desc: "Instant, conversational engagement on the platforms your clients use most. Reducing response friction to near-zero."
    },
    {
      icon: <Cpu className="text-gk-accent" />,
      title: "CRM Synchronization",
      desc: "Automatic data injection into your existing infrastructure. Zero manual entry, 100% data integrity."
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
                <span className="section-label">Service_Node:05</span>
              </div>
              <h1 className="text-6xl md:text-[100px] leading-[0.9] font-black mb-12">
                AI LEAD <span className="gradient-gold">AGENTS</span><br />
                & AUTOMATION
              </h1>
              <p className="text-gk-text2 text-xl md:text-2xl uppercase tracking-widest leading-relaxed max-w-2xl mb-12">
                We deploy intelligent systems that qualify, book, and nurture leads 24/7. 
                Freeing your human assets for high-value clinical work.
              </p>
              <Link to="/contact" className="inline-flex py-5 px-12 bg-gk-accent text-black font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-colors">
                Initiate_Bot_Audit
              </Link>
            </div>
            <div className="hidden lg:block w-1/3 p-10 glass-card">
               <div className="space-y-10">
                  <div className="flex items-center gap-4 py-3 border-b border-gk-border">
                     <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                     <span className="text-[10px] font-mono text-gk-text1 uppercase tracking-widest">Lead_Agent:Online</span>
                  </div>
                  <div className="space-y-4">
                     <div className="p-4 bg-gk-accent text-black rounded-r-xl rounded-tl-xl max-w-[80%]">
                        <span className="text-[10px] font-black block mb-1">GK_BOT_AI</span>
                        <p className="text-xs font-bold leading-relaxed lowercase italic uppercase">"I_HAVE_QUALIFIED_32_NEW_PATIENTS_TODAY. ALL_CRM_ENTRIES_COMPLETE."</p>
                     </div>
                     <div className="p-4 bg-gk-secondary border border-gk-border rounded-l-xl rounded-tr-xl max-w-[80%] ml-auto">
                        <span className="text-[10px] font-black block mb-1">SYSTEM_ARCHITECT</span>
                        <p className="text-xs font-bold leading-relaxed lowercase italic uppercase">"DEPLOY_TO_WHATSAPP_NODE_PRIME."</p>
                     </div>
                  </div>
                  <div className="pt-6 border-t border-gk-border text-center">
                     <span className="text-[9px] font-mono text-gk-text3 uppercase font-bold tracking-widest">Automation_Efficiency:98.5%</span>
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

          {/* INTEGRATION INFOGRAPHIC */}
          <div className="mb-40 py-24 glass-card relative overflow-hidden flex flex-col md:flex-row items-center justify-between px-12 md:px-24">
             <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                <Bot size={400} className="translate-x-1/2" />
             </div>
             <div className="md:w-1/2 relative z-10">
                <span className="section-label mb-4 block tracking-widest">Ecosystem_Integration</span>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic uppercase leading-none">SEAMLESS INFRASTRUCTURE SYNC</h2>
                <p className="text-gk-text2 text-sm uppercase tracking-widest leading-relaxed mb-12">
                   Our Lead Agents don't live in a vacuum. They are fully interconnected nodes that communicate between your website, social ads, WhatsApp, and CRM.
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div className="p-6 border border-gk-border bg-gk-bg/50">
                      <h4 className="text-gk-accent font-bold text-sm mb-2 uppercase">24/7 Uptime</h4>
                      <p className="text-[10px] text-gk-text3 uppercase font-bold">Never_Miss_A_Lead</p>
                   </div>
                   <div className="p-6 border border-gk-border bg-gk-bg/50">
                      <h4 className="text-gk-accent font-bold text-sm mb-2 uppercase">&lt;1s Response</h4>
                      <p className="text-[10px] text-gk-text3 uppercase font-bold">Zero_Lead_Leakage</p>
                   </div>
                </div>
             </div>
             <div className="md:w-1/3 mt-12 md:mt-0 flex flex-col gap-6 items-center">
                <div className="w-px h-24 bg-gk-accent animate-pulse" />
                <div className="p-8 border border-gk-accent rounded-full text-gk-accent">
                   <Zap size={32} />
                </div>
                <div className="w-px h-24 bg-gk-accent animate-pulse" />
             </div>
          </div>

          {/* FINAL CTA */}
          <div className="text-center border border-gk-border p-20 relative group overflow-hidden">
             <div className="absolute inset-0 bg-gk-accent/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
             <h2 className="text-3xl md:text-6xl mb-12 leading-tight uppercase">AUTONOMIZE YOUR <span className="gradient-gold">GROWTH</span> WITH AI INTELLIGENCE</h2>
             <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-text1 text-gk-bg font-display font-black text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
                Connect with an Architect
             </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
