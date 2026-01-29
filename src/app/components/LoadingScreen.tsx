'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../lib/ThemeContext'; // Verify this path
import { cn } from '../../lib/utils'; // Verify this path

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  
  // State
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [beat, setBeat] = useState(false);
  const [isMounted, setIsMounted] = useState(false); // Fix for Hydration errors
  
  // Audio Ref (Standard HTML Audio Element)
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. Safety Check: Only run on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // 2. Handle Start (User Interaction)
  const handleStart = () => {
    if (!isMounted) return;
    
    // Try to play audio
    if (audioRef.current) {
        audioRef.current.volume = 0.5;
        // We catch the error so it doesn't crash the app if audio fails
        audioRef.current.play().catch((err) => {
            console.log("Audio play blocked (benign error):", err);
        });
    }
    
    setStarted(true);
  };

  // 3. Loading Timer Logic
  useEffect(() => {
    if (!started) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          
          // Gentle Audio Fade Out
          if (audioRef.current) {
             const fade = setInterval(() => {
                if(audioRef.current && audioRef.current.volume > 0.05) {
                    audioRef.current.volume -= 0.05;
                } else {
                    clearInterval(fade);
                    audioRef.current?.pause();
                }
             }, 100);
          }

          // Complete
          setTimeout(onComplete, 500); 
          return 100;
        }
        // Increment
        return Math.min(prev + Math.random() * 3, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, [started, onComplete]);

  // 4. Visual Beat Logic
  useEffect(() => {
    if (!started) return;
    const beatInterval = setInterval(() => {
      setBeat(true);
      setTimeout(() => setBeat(false), 150);
    }, 1000); // 60 BPM
    return () => clearInterval(beatInterval);
  }, [started]);

  // Prevent Server-Side Rendering of this component to stop crashes
  if (!isMounted) return null;

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 cursor-pointer",
        isDark ? "bg-[#050505] text-white" : "bg-white text-gray-900"
      )}
      onClick={handleStart}
      exit={{ opacity: 0, filter: "blur(10px)" }}
      transition={{ duration: 0.8 }}
    >
        {/* --- SAFE AUDIO ELEMENT --- */}
        {/* Using the public folder path directly. No imports. */}
        <audio ref={audioRef} src="/heartbeat.mp3" loop preload="auto" />

        {/* --- Background --- */}
        <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
            style={{ 
                backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
                backgroundSize: '40px 40px' 
            }} 
        />

        <AnimatePresence mode='wait'>
            {!started ? (
                /* --- CLICK TO START STATE --- */
                <motion.div 
                    key="waiting"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="z-20 flex flex-col items-center gap-6"
                >
                    <div className={cn(
                        "w-20 h-20 rounded-full border-2 flex items-center justify-center animate-pulse",
                        isDark ? "border-white/20" : "border-black/10"
                    )}>
                        <div className={cn("w-2 h-2 rounded-full", isDark ? "bg-white" : "bg-black")} />
                    </div>
                    <p className="font-mono text-xs tracking-[0.2em] opacity-50 uppercase">
                        Click to Initialize
                    </p>
                </motion.div>
            ) : (
                /* --- LOADING STATE --- */
                <motion.div 
                    key="loading"
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                    className="z-20 w-full flex flex-col items-center"
                >
                    {/* Beat Vignette */}
                    <motion.div 
                        animate={{ opacity: beat ? 0.3 : 0 }}
                        transition={{ duration: 0.1 }}
                        className={cn("absolute inset-0 pointer-events-none z-0", isDark ? "bg-purple-900/30" : "bg-red-500/10")}
                    />

                    <h1 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter mb-4 z-10">
                        Graphikardia
                    </h1>

                    {/* ECG SVG */}
                    <div className="relative w-full h-32 overflow-hidden flex items-center mb-8">
                         {/* Fade Edges */}
                         <div className={cn("absolute inset-0 z-20", isDark ? "bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" : "bg-gradient-to-r from-white via-transparent to-white")} />
                         
                         {/* Line */}
                         <svg className="w-full h-full min-w-[800px]" preserveAspectRatio="none">
                            <path 
                                d="M0,60 L400,60 L420,40 L440,60 L460,60 L480,10 L500,110 L520,60 L540,60 L560,40 L580,60 L1000,60"
                                fill="none"
                                stroke={isDark ? "#a855f7" : "#ef4444"}
                                strokeWidth="2"
                                className="opacity-80"
                            >
                                <animateTransform 
                                    attributeName="transform" 
                                    type="translate" 
                                    from="0 0" 
                                    to="-600 0" 
                                    dur="2s" 
                                    repeatCount="indefinite" 
                                />
                            </path>
                         </svg>
                    </div>

                    <div className="w-64 h-1 bg-gray-200/20 rounded-full overflow-hidden">
                        <motion.div 
                            className={cn("h-full", isDark ? "bg-purple-500" : "bg-red-500")}
                            animate={{ width: `${count}%` }}
                        />
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </motion.div>
  );
}
