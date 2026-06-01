'use client';

import { CinematicHero } from "./components/ui/cinematic-landing-hero";
import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Target } from "lucide-react";

export default function CinematicDemo() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
        {/* Background grid */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto p-8 border-4 border-red-500" style={{ color: '#0a0a0a', backgroundColor: 'rgba(255,255,0,0.3)' }}>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-bold tracking-tight mb-4" style={{ color: '#0a0a0a', fontWeight: 800 }}>
            We Build Digital
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-[5rem] font-extrabold tracking-tighter mb-8" style={{ color: '#DC143C', fontWeight: 900 }}>
            Experiences That Drive Results
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#DC143C', fontWeight: 700 }}>
            Ready to Scale?
          </h2>
          <p className="text-xl mb-12 max-w-xl mx-auto" style={{ color: '#4b5563' }}>
            Transform your brand with strategic digital marketing, stunning design, and cutting-edge development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/contact" className="px-8 py-4 bg-[#DC143C] text-white font-bold rounded-full hover:bg-[#B01030] transition-colors inline-flex items-center gap-2">
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link to="/work" className="px-8 py-4 bg-[#0a0a0a] text-white font-bold rounded-full hover:bg-[#333] transition-colors">
              View Our Work
            </Link>
          </div>
        </div>
      </div>
      
      {/* Card with Phone Mockup */}
      <div className="relative w-full px-4 pb-20">
        <div className="max-w-6xl mx-auto bg-gradient-to-br from-[#DC143C] to-[#8B0A1C] rounded-[3rem] p-8 lg:p-12 shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Left - Card Heading */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
                Digital Marketing Agency
              </h3>
              <p className="text-white/90 text-base">
                GK helps ambitious businesses scale with strategic digital marketing, stunning design, and cutting-edge development. Transform your brand with ROI-focused strategies.
              </p>
            </div>
            
            {/* Center - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative w-[280px] h-[580px] bg-[#111] rounded-[3rem] p-2 shadow-2xl border-4 border-gray-700">
                <div className="absolute inset-2 bg-[#050914] rounded-[2.5rem] overflow-hidden">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[100px] h-[28px] bg-black rounded-full" />
                  <div className="pt-12 px-5 pb-8 text-white">
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <span className="text-[10px] text-neutral-400 uppercase">Analytics</span>
                        <span className="block text-xl font-bold">Dashboard</span>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center font-bold text-sm border border-red-500/30">GK</div>
                    </div>
                    <div className="w-44 h-44 mx-auto mb-8 relative">
                      <svg className="w-full h-full">
                        <circle cx="88" cy="88" r="64" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="12" />
                        <circle cx="88" cy="88" r="64" fill="none" stroke="#DC143C" strokeWidth="12" strokeDasharray="402" strokeDashoffset="120" className="rotate-[-90deg]" />
                      </svg>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-4xl font-extrabold">50</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white/10 rounded-2xl p-3 flex items-center">
                        <div className="w-10 h-10 rounded-xl bg-red-500/30 flex items-center justify-center mr-3">
                          <TrendingUp size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-20 bg-white/30 rounded-full mb-2" />
                          <div className="h-1.5 w-12 bg-white/20 rounded-full" />
                        </div>
                      </div>
                      <div className="bg-white/10 rounded-2xl p-3 flex items-center">
                        <div className="w-10 h-10 rounded-xl bg-emerald-500/30 flex items-center justify-center mr-3">
                          <Target size={16} className="text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 w-16 bg-white/30 rounded-full mb-2" />
                          <div className="h-1.5 w-24 bg-white/20 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right - Brand Name */}
            <div className="text-center lg:text-right">
              <h2 className="text-6xl md:text-[6rem] lg:text-[8rem] font-black uppercase tracking-tighter text-white">
                GK
              </h2>
              <div className="mt-8 space-y-4">
                <div className="bg-white/20 backdrop-blur p-4 rounded-xl">
                  <span className="text-2xl">📈</span>
                  <p className="text-white font-bold text-lg">5x ROI</p>
                  <p className="text-white/70 text-sm">Average Return</p>
                </div>
                <div className="bg-white/20 backdrop-blur p-4 rounded-xl">
                  <span className="text-2xl">🏆</span>
                  <p className="text-white font-bold text-lg">95% Satisfaction</p>
                  <p className="text-white/70 text-sm">Client Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}