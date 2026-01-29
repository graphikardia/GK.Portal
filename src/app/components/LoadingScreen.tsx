'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../lib/ThemeContext'; 
import { cn } from '../../lib/utils';

// IMPORT THE AUDIO FILE HERE
// This allows Next.js to bundle it correctly from the src folder
import heartbeatSound from '../../assets/heartbeat.mp3';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  const [count, setCount] = useState(0);
  const [beat, setBeat] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // USE THE IMPORTED VARIABLE HERE
    const audio = new Audio(heartbeatSound);
    audio.volume = 0.5; // Adjusted volume
    audioRef.current = audio;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000); 
          return 100;
        }
        const increment = Math.random() > 0.5 ? 1.5 : 0.5;
        return Math.min(prev + increment, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  useEffect(() => {
    const beatInterval = setInterval(() => {
      setBeat(true);
      
      if (audioRef.current) {
        audioRef.current.currentTime = 0;
        // Attempt to play - browsers may block this until interaction
        audioRef.current.play().catch((err) => {
            // Optional: console.log("Audio blocked by browser policy", err);
        });
      }

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
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />
      
      {/* Vignette Pulse */}
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

      <div className="relative z-10 w-full flex flex-col items-center justify-center">
        
        {/* Logo Section */}
        <div className="relative mb-6">
            <motion.h1 
                animate={{ scale: beat ? 1.08 : 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-center"
            >
                Graphikardia
            </motion.h1>
            
            <div className={cn(
                "absolute -top-3 -right-3 w-3 h-3 rounded-full transition-colors duration-300",
                isDark ? "bg-green-500 shadow-[0_0_15px_#22c55e]" : "bg-red-500 shadow-[0_0_15px_#ef4444]",
                beat ? "opacity-100 scale-125" : "opacity-40 scale-100"
            )} />
        </div>

        {/* Slogan */}
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

        {/* ECG Line */}
        <div className="relative w-full h-40 overflow-hidden flex items-center">
            <div className={cn(
                "absolute inset-0 z-20 pointer-events-none",
                isDark 
                    ? "bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" 
                    : "bg-gradient-to-r from-white via-transparent to-white"
            )} />

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

                <motion.path
                    d="M 0 60 L 400 60 L 420 40 L 440 60 L 460 60 L 480 10 L 500 110 L 520 60 L 540 60 L 560 40 L 580 60 L 1000 60 L 1020 40 L 1040 60 L 1060 60 L 1080 10 L 1100 110 L 1120 60 L 1140 60 L 1160 40 L 1180 60 L 1600 60"
                    fill="none"
                    stroke="url(#ecgGradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    filter={isDark ? "url(#glow)" : ""}
                    initial={{ x: 0 }}
                    animate={{ x: -600 }} 
                    transition={{ 
                        repeat: Infinity, 
                        ease: "linear", 
                        duration: 2 
                    }}
                />
            </svg>
        </div>

        {/* Loading Bar */}
        <div className="absolute bottom-12 flex flex-col items-center gap-3">
             <div className="w-56 h-[2px] bg-gray-200/20 rounded-full overflow-hidden">
                <motion.div 
                    className={cn(
                        "h-full shadow-[0_0_15px_currentColor]",
                        isDark ? "bg-purple-500" : "bg-red-500"
                    )}
                    initial={{ width: 0 }}
                    animate={{ width: `${count}%` }}
                />
             </div>
             <span className={cn(
                 "font-mono text-[10px] tracking-widest",
                 isDark ? "text-purple-400" : "text-red-500"
             )}>
                SYSTEM_INIT :: {Math.floor(count)}%
             </span>
        </div>

      </div>
    </motion.div>
  );
}
