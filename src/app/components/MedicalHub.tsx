'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Globe, Microscope, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const MedicalHub = () => {
  return (
    <section id="medical" className="relative py-40 border-t border-gk-border overflow-hidden bg-gk-bg">
      {/* Decorative background element */}
      <div className="absolute left-0 bottom-0 w-full h-[60%] bg-gradient-to-t from-gk-accent/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-10">
              <span className="section-label">Medical_Authority_Core</span>
              <div className="flex-1 h-px bg-gk-border" />
            </div>
            
            <h2 className="text-5xl md:text-8xl mb-12 leading-tight">
              CLINICAL <span className="gradient-gold">REPUTATION</span><br />
              SCALED WITH PRECISION.
            </h2>
            
            <p className="font-body text-gk-text2 text-xl md:text-2xl leading-relaxed mb-16 max-w-2xl">
              We engineer patient acquisition systems for elite medical professionals. 
              Trust is established through digital infrastructure, not just marketing.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-gk-accent/10 flex items-center justify-center text-gk-accent">
                  <Microscope size={20} />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-gk-text1">AEO Medical Hardening</h4>
                <p className="text-sm text-gk-text3 leading-relaxed font-body uppercase">
                  Protecting clinical authority while dominating Answer Engines (Gemini, Perplexity, GPT) in multi-location medical searches.
                </p>
              </div>
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-full bg-gk-accent/10 flex items-center justify-center text-gk-accent">
                  <ShieldAlert size={20} />
                </div>
                <h4 className="text-xl font-bold uppercase tracking-tight text-gk-text1">Patient Lead Filtration</h4>
                <p className="text-sm text-gk-text3 leading-relaxed font-body uppercase">
                  Filtering for high-ticket clinical intent through automated qualification funnels, saving your clinical team 40+ hours weekly.
                </p>
              </div>
            </div>

            <Link to="/contact" className="inline-flex items-center gap-4 px-12 py-5 bg-gk-text1 text-gk-bg font-display font-extrabold text-[11px] uppercase tracking-widest hover:bg-gk-accent transition-colors duration-300">
              Request Strategy Session <ArrowRight size={14} />
            </Link>
          </div>

          <div className="lg:col-span-5 relative mt-12 lg:mt-0">
            <div className="p-4 bg-gk-secondary border border-gk-border relative z-10">
              <div className="relative overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1622253692010-333f2da6028d?q=80&w=1964&auto=format&fit=crop" 
                  alt="Medical Authority — Dr. Darshana Reddy" 
                  className="w-full grayscale brightness-75 contrast-125 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gk-accent/10 mix-blend-overlay group-hover:opacity-0 transition-opacity" />
                
                <div className="absolute bottom-0 left-0 right-0 p-8 glass-card border-none rounded-none m-4 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="section-label mb-1">Success_Story:01</p>
                      <h3 className="text-lg font-bold">DR. DARSHANA REDDY</h3>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-black italic text-gk-accent">210%</p>
                      <p className="text-[8px] font-bold uppercase text-gk-text3">Leads_LIFT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FLOATING DECORATIONS */}
            <div className="absolute -top-12 -right-12 w-48 h-48 border border-gk-border flex items-center justify-center -rotate-12 pointer-events-none opacity-20">
              <img src="/branding/logo_symbol.png" alt="" className="w-24 logo-filter" />
            </div>
            
            <div className="absolute -bottom-8 -left-8 glass-card p-10 grid grid-cols-2 gap-12 z-20 border-gk-border-a shadow-2xl">
              <div className="space-y-1">
                <h4 className="text-3xl font-black italic text-gk-accent">01hr</h4>
                <p className="text-[8px] font-bold uppercase text-gk-text3 tracking-[0.2em]">Extraction_TIME</p>
              </div>
              <div className="space-y-1">
                <h4 className="text-3xl font-black italic text-gk-accent">100%</h4>
                <p className="text-[8px] font-bold uppercase text-gk-text3 tracking-[0.2em]">CONSULT_READY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
