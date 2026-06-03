'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Heart, UserCheck, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MedicalHub = () => {
  return (
    <section id="medical" className="relative py-40 border-t border-gk-border overflow-hidden bg-gk-bg">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">Medical Authority</span>
              <div className="flex-1 h-px bg-gk-border" />
            </div>
            
            <h2 className="text-4xl md:text-7xl mb-12 leading-tight font-bold">
              Scale Your <span className="gradient-gold">Clinical Reputation</span> with Precision.
            </h2>
            
            <p className="text-gk-text2 text-xl leading-relaxed mb-16 max-w-2xl font-body">
              We engineer specialized patient acquisition systems for elite medical professionals. 
              Trust is established through digital excellence and hardened infrastructure.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full border border-gk-accent/20 flex items-center justify-center text-gk-accent">
                  <Microscope size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Authority Hardening</h4>
                  <p className="text-sm text-gk-text3 leading-relaxed">
                    Protecting clinical trust while dominating AI answer engine results for surgical queries.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="shrink-0 w-12 h-12 rounded-full border border-gk-accent/20 flex items-center justify-center text-gk-accent">
                  <UserCheck size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2">Lead Qualification</h4>
                  <p className="text-sm text-gk-text3 leading-relaxed">
                    Filtering for high-ticket patient intent via automated, medical-grade triage systems.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-white text-black font-bold text-xs uppercase tracking-widest hover:bg-gk-accent transition-colors">
              Request Strategy Audit <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="p-3 bg-gk-secondary border border-gk-border">
               <div className="relative overflow-hidden group aspect-[4/5]">
                  <img 
                    src="/branding/marketing-hero.png" 
                    alt="Precision Medical Marketing" 
                    className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-gk-accent/10 mix-blend-overlay opacity-50 group-hover:opacity-0 transition-opacity" />
                  
                  <div className="absolute bottom-6 left-6 right-6 p-8 glass-card border border-gk-accent/20">
                     <span className="text-[10px] font-mono text-gk-accent uppercase tracking-widest mb-2 block">Case_Study:01</span>
                     <h3 className="text-lg font-bold text-white uppercase">Dr. Darshana Reddy</h3>
                     <div className="flex items-center gap-4 mt-4">
                        <span className="text-2xl font-bold text-gk-accent">+210%</span>
                        <span className="text-[9px] font-mono text-gk-text3 uppercase leading-tight">Patient_Lead_Lift</span>
                     </div>
                  </div>
               </div>
            </div>
            
            {/* FLOATING AUTHORITY NODES */}
            <div className="absolute -top-12 -right-12 p-8 glass-card hidden lg:block animate-pulse">
               <ShieldCheck size={32} className="text-gk-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
