'use client';

import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from 'framer-motion';
import { useRef, useState } from 'react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

// Updated Roles List
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
  
  // Explicitly type the ref for TypeScript access to getTotalLength
  const pathRef = useRef<SVGPathElement>(null);
  
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Animation State
  const [roleIndex, setRoleIndex] = useState(0);
  
  // We use percentages for positioning to ensure it's fully responsive
  const xPercent = useMotionValue(50); // Start at center (50%)
  const yPercent = useMotionValue(50); // Start at center (50%)
  
  // Track progress to switch roles at the intersection
  const prevProgress = useRef(0);

  useAnimationFrame((time) => {
    if (!pathRef.current) return;

    const duration = 12000; // Speed of the loop (12 seconds)
    const t = (time % duration) / duration;
    
    // SVG Math
    const pathLength = pathRef.current.getTotalLength();
    const point = pathRef.current.getPointAtLength(t * pathLength);
    
    // CONVERSION TO PERCENTAGE
    // Our ViewBox is 0 0 400 200.
    // point.x goes from 0 to 400 -> map to 0% to 100%
    // point.y goes from 0 to 200 -> map to 0% to 100%
    xPercent.set((point.x / 400) * 100);
    yPercent.set((point.y / 200) * 100);

    // Logic to swap text:
    // The path crosses the center (approx t=0.5 and t=0/1)
    // We add a small buffer to detect the crossing
    const crossedMiddle = (prevProgress.current < 0.5 && t >= 0.5);
    const crossedStart = (prevProgress.current > 0.98 && t < 0.02);

    if (crossedMiddle || crossedStart) {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    prevProgress.current = t;
  });

  // Dynamic transforms for the follower div to convert % numbers to CSS strings
  const left = useTransform(xPercent, (val) => `${val}%`);
  const top = useTransform(yPercent, (val) => `${val}%`);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden px-4">
      
      {/* --- Background Ambient Glow --- */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={cn(
            "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] rounded-full blur-[120px]",
            isDark ? "bg-purple-900/30" : "bg-purple-300/40"
          )} 
        />
        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.05]" 
             style={{ 
               backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
               backgroundSize: '40px 40px' 
             }} 
        />
      </div>

      <motion.div style={{ y: y1, opacity }} className="relative z-10 w-full flex flex-col items-center">
        
        {/* --- Top Decorative Text --- */}
        <div className="absolute -top-24 md:-top-32 flex justify-center gap-4 w-full opacity-60">
           {["CREATIVE", "DIGITAL", "GLOBAL"].map(s => (
             <span key={s} className="text-[10px] md:text-xs tracking-[0.3em] font-mono uppercase">{s}</span>
           ))}
        </div>

        {/* --- The Responsive Loop Container --- */}
        {/* max-w-[95vw] ensures it fits on mobile. aspect-[2/1] locks the ratio to match SVG viewBox. */}
        <div className="relative w-full max-w-[95vw] md:max-w-[700px] aspect-[2/1] flex items-center justify-center">
          
          {/* 1. The SVG Layer */}
          <svg 
            className="absolute inset-0 w-full h-full overflow-visible"
            viewBox="0 0 400 200"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="infinityGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#a855f7" />   {/* Purple */}
                <stop offset="50%" stopColor="#ec4899" />  {/* Pink */}
                <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>
            
            {/* THE PATH: 
               This draws a figure-8 starting from center (200,100).
               1. Moves Up-Right (towards 380, 100)
               2. Loops back to Center
               3. Moves Down-Left (towards 20, 100)
               4. Loops back to Center
            */}
            <path
              ref={pathRef}
              d="M 200 100 C 260 40 380 40 380 100 C 380 160 260 160 200 100 C 140 40 20 40 20 100 C 20 160 140 160 200 100 Z"
              fill="none"
              stroke="transparent"
            />

            {/* The Visible Glowing Path */}
            <motion.path
              d="M 200 100 C 260 40 380 40 380 100 C 380 160 260 160 200 100 C 140 40 20 40 20 100 C 20 160 140 160 200 100 Z"
              fill="none"
              stroke="url(#infinityGradient)"
              strokeWidth="2" // Thinner line for elegance
              strokeLinecap="round"
              filter={isDark ? "url(#glow)" : ""}
              className="drop-shadow-lg"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
            />
          </svg>

          {/* 2. The Floating "Role" Badge */}
          {/* Positioned via left/top percentages calculated in the loop */}
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
                "-translate-x-1/2 -translate-y-1/2", // Centers the div on the exact point
                isDark 
                  ? "bg-black/60 border-purple-500/50 text-white shadow-purple-500/20" 
                  : "bg-white/90 border-purple-300 text-purple-900 shadow-purple-200/50"
              )}
            >
              {ROLES[roleIndex]}
            </motion.div>
          </motion.div>

          {/* 3. The Central Text "GRAPHIKARDIA" */}
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
