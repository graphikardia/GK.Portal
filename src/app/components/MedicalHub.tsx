'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldAlert, Zap, Users, Microscope } from 'lucide-react';

export const MedicalHub = () => {
  return (
    <section id="medical" className="relative py-32 bg-silver text-obsidian overflow-hidden">
      {/* BACKGROUND GRAPHIC */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white opacity-50 skew-x-[-20deg] translate-x-20" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="w-12 h-[1px] bg-obsidian" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em]">Vertical_Specialization</span>
            </div>
            
            <h2 className="text-5xl md:text-8xl mb-12 leading-tight">
              CLINICAL<br />
              PREMIUM
            </h2>
            
            <p className="font-body text-obsidian/70 text-xl md:text-2xl leading-relaxed mb-12 max-w-xl">
              We translate medical expertise into high-ticket patient acquisition. 
              Trust is not built with slogans, but with <span className="font-black italic">Infrastructure</span>.
            </p>

            <div className="space-y-12 mb-16">
              <div className="flex gap-6">
                <ShieldAlert className="shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-black mb-2 uppercase">1-Hour Extraction Framework</h4>
                  <p className="text-sm text-obsidian/60 leading-relaxed font-body">
                    We shoot 1 hour of video content a month. We handle all AEO, website funnels, and compliance-grade patient acquisition. You run the clinic; we run the system.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Microscope className="shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-lg font-black mb-2 uppercase">Compliance First AEO</h4>
                  <p className="text-sm text-obsidian/60 leading-relaxed font-body">
                    Hardening your digital presence against misinformation while winning the Answer Engine race (Perplexity, SearchGPT, Gemini).
                  </p>
                </div>
              </div>
            </div>

            <button className="px-12 py-5 bg-obsidian text-white font-display font-black text-xs uppercase tracking-widest hover:invert transition-all duration-300">
              Get a Free Consultation
            </button>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="border-[10px] md:border-[20px] border-white shadow-2xl relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1622253692010-333f2da6028d?q=80&w=1964&auto=format&fit=crop" 
                alt="Medical Authority" 
                className="w-full grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-obsidian/10 mix-blend-multiply" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 bg-white/90 backdrop-blur-md">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-obsidian/40 mb-1">Case_Study</p>
                    <h3 className="text-xl md:text-2xl font-black italic">DR. DARSHANA REDDY</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl md:text-3xl font-black italic">&lt;2.0s</p>
                    <p className="text-[8px] font-bold uppercase">Load_Velocity</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* FLOATING DECORATIONS */}
            <div className="absolute -top-10 -right-10 w-32 h-32 md:w-40 md:h-40 border border-obsidian/10 hidden sm:flex items-center justify-center -rotate-12">
              <img src="/branding/logo_stacked.png" alt="" className="w-20 md:w-24 opacity-20" />
            </div>
            
            <div className="absolute -bottom-10 -left-6 md:-left-10 bg-obsidian text-white p-6 md:p-8 grid grid-cols-2 gap-6 md:gap-8 z-20">
              <div className="group">
                <h4 className="text-xl md:text-2xl font-black italic">95%</h4>
                <p className="text-[8px] font-bold uppercase text-white/40">Patient_Score</p>
              </div>
              <div className="group">
                <h4 className="text-xl md:text-2xl font-black italic">60%</h4>
                <p className="text-[8px] font-bold uppercase text-white/40">Cost_Reduction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
