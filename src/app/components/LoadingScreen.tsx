'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../lib/ThemeContext'; 
import { cn } from '../../lib/utils';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  const [count, setCount] = useState(0);
  const [beat, setBeat] = useState(false);
  
  // Audio Ref
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. Initialize Audio & Loading Counter
  useEffect(() => {
    // UPDATED PATH HERE
    // Ensure the file exists at this location relative to your public folder or serve root
    audioRef.current = new Audio('../../assets/heartbeat.mp3');
    audioRef.current.volume = 0.5;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000); // Wait one last beat before closing
          return 100;
        }
        // Increment logic
        const increment = Math.random() > 0.5 ? 1.5 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  // 2. The 60 BPM Heartbeat Logic (Syncs Visuals + Audio)
  useEffect(() => {
    // 60 BPM = 1 beat every 1000ms exactly.
    const beatInterval = setInterval(() => {
      setBeat(true);
      
      // Play Sound
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        audioRef.current.play().catch(() => {
            // Browsers block audio until user interaction. 
            // This is expected behavior for auto-loading screens.
        });
      }

      // Reset beat state quickly so the "spring" animation can recoil
      setTimeout(() => setBeat(false), 150); 
    }, 1000); 

    return () => clearInterval(beatInterval);
  }, []);

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-500",
        isDark ? "bg-[#050505] text-white" : "bg-white text-gray-900"
      )}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
    >
      {/* --- Ambient Background --- */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Vignette Pulse: The screen darkens/lightens with the beat */}
      <motion.div 
        animate={{ opacity: beat ? 0.4 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
            "absolute inset-0 pointer-events-none z-0",
            isDark 
                ? "bg-radial-gradient from-transparent to-purple-900/50" 
                : "bg-radial-gradient from-transparent to-red-500/10"
        )}
      />

      {/* --- Center Content --- */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        
        {/* 1. The Logo Typography */}
        <div className="relative mb-6">
            <motion.h1 
                // Spring animation mimics the "Lub-Dub" recoil of a heart
                animate={{ scale: beat ? 1.08 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-center"
            >
                Graphikardia
            </motion.h1>
            
            {/* The "Life Light" Dot */}
            <div className={cn(
                "absolute -top-3 -right-3 w-3 h-3 rounded-full transition-colors duration-300",
                isDark ? "bg-green-500 shadow-[0_0_15px_#22c55e]" : "bg-red-500 shadow-[0_0_15px_#ef4444]",
                beat ? "opacity-100 scale-125" : "opacity-40 scale-100"
            )} />
        </div>

        {/* 2. The Slogan */}
        <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn(
                "font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-20 transition-colors",
                isDark ? "text-gray-400" : "text-gray-500"
            )}
        >
            Breathing_Life_Into_Pixels
        </motion.p>

        {/* 3. The 60 BPM ECG Line */}
        <div className="relative w-full h-40 overflow-hidden flex items-center">
            
            {/* Gradient Mask for Fade In/Out */}
            <div className={cn(
                "absolute inset-0 z-20 pointer-events-none",
                isDark 
                    ? "bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" 
                    : "bg-gradient-to-r from-white via-transparent to-white"
            )} />

            {/* The ECG SVG */}
            <svg className="w-full h-full min-w-[1000px]" preserveAspectRatio="none">
                <defs>
                    <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="30%" stopColor={isDark ? "#a855f7" : "#ef4444"} stopOpacity="0.1" /> 
                        <stop offset="50%" stopColor={isDark ? "#d8b4fe" : "#dc2626"} stopOpacity="1" /> 
                        <stop offset="70%" stopColor={isDark ? "#a855f7" : "#ef4444"} stopOpacity="0.1" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                    
                    <filter id="glow">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                            <feMergeNode in="coloredBlur"/>
                            <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                    </filter>
                </defs>

                {/* Path Logic:
                   The audio is 60BPM (1 beat/sec).
