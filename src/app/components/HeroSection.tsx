'use client';

import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

const ROLES = [
  "SEO Specialist",
  "Graphic Designer",
  "Content Strategist",
  "Brand Identity",
  "Social Media Lead",
  "Web Designer",
  "Data Analyst"
];

export function HeroSection() {
  const { isDark } = useTheme();
  const containerRef = useRef(null);
  const pathRef = useRef<SVGPathElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation State
  const [roleIndex, setRoleIndex] = useState(0);
  const xPercent = useMotionValue(50);
  const yPercent = useMotionValue(50);
  const prevProgress = useRef(0);

  useAnimationFrame((time) => {
    if (!pathRef.current) return;

    const duration = 12000; 
    const t = (time % duration) / duration;
    
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(t * pathLength);
    
    // Map 0-400 (width) and 0-200 (height) to percentages
    xPercent.set((point.x / 400) * 100);
    yPercent.set((point.y / 200) * 100);

    const crossedMiddle = (prevProgress.current < 0.5 && t >= 0.5);
    const crossedStart = (prevProgress.current > 0.98 && t < 0.02);

    if (crossedMiddle || crossedStart) {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    prevProgress.current = t;
  });

  const left = useTransform(xPercent, (val) => `${val}%`);
  const top = useTransform(yPercent, (val) => `${val}%`);

  return (
    // CHANGED: Removed 'h-screen'. Added 'py-24 md:py-32' for natural spacing.
    <section 
      ref={containerRef} 
      className="relative w-full py-24 md:py-32 flex flex-col items-center justify-center overflow-hidden px-4"
    >
      
      {/* --- Background Ambient Glow --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full blur-[100px]",
            isDark ? "bg-purple-900/30" : "bg-purple-300/40"
          )} 
        />
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 w-full flex flex-col items-center">
        
        {/* --- Top Decorative Text --- */}
        <div className="mb-8 md:mb-12 flex justify-center gap-6 opacity-60">
           {["CREATIVE", "DIGITAL", "GLOBAL"].map(s => (
             <span key={s} className="text-[10px] md:text-xs tracking-[0.3em] font-mono uppercase">{s}</span>
           ))}
        </div>

        {/* --- The Responsive Loop Container --- */}
        <div className="relative w-full max-w-[95vw] md:max-w-[700px] aspect-[2/1] flex items-center justify-center">
          
          {/* SVG Layer */}
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />   
                <stop offset="50%" stopColor="#ec4899" />  
                <stop offset="100%" stopColor="#3b82f6" /> 
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* Hidden Path Calculation */}
            <path
              ref={pathRef}
              d="M 200 100 C 260 40 380 40 380 100 C 380 160 260 160 200 100 C 140 40 20 40 20 100 C 20 160 140 160 200 100 Z"
              fill="none"
              stroke="transparent"
            />

            {/* Visible Path */}
            <motion.path
              d="M 200 100 C 260 40 380 40 380 100 C 380 160 260 160 200 100 C 140 40 20 40 20 100 C 20 160 140 160 200 100 Z"
              fill="none"
              stroke="url(#infinityGradient)"
              strokeWidth="2"
              strokeLinecap="round"
              filter={isDark ? "url(#glow)" : ""}
              className="drop-shadow-lg"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Floating Badge */}
          <motion.div 
            style={{ left, top }}
            className="absolute z-20 flex items-center justify-center w-0 h-0"
          >
            <motion.div
              key={roleIndex} 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              className={cn(
                "px-3 py-1.5 rounded-full text-[10px] md:text-sm font-bold whitespace-nowrap border backdrop-blur-xl shadow-xl uppercase tracking-wider",
                "-translate-x-1/2 -translate-y-1/2", 
                isDark 
                  ? "bg-black/60 border-purple-500/50 text-white shadow-purple-500/20" 
                  : "bg-white/90 border-purple-300 text-purple-900 shadow-purple-200/50"
              )}
            >
              {ROLES[roleIndex]}
            </motion.div>
          </motion.div>

          {/* Central Text */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <motion.h1 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className={cn(
                "text-[7vw] md:text-[50px] font-black italic tracking-tighter leading-none text-center mix-blend-overlay md:mix-blend-normal",
                isDark 
                  ? "text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-200 to-gray-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]" 
                  : "text-gray-900 drop-shadow-sm"
              )}
            >
              GRAPHIKARDIA
            </motion.h1>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
