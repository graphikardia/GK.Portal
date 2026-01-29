'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { useTheme } from '../../lib/ThemeContext'; 
import { cn } from '../../lib/utils';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  
  const [started, setStarted] = useState(false);
  const [count, setCount] = useState(0);
  const [beat, setBeat] = useState(false);
  const [audioError, setAudioError] = useState(false); // Debugging state
  
  // Ref for the HTML Audio Element
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // 1. Handle Start (Click)
  const handleStart = () => {
    if (started) return;
    
    // Attempt to play immediately on user interaction
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            // Audio started successfully
            setStarted(true);
          })
          .catch((error) => {
            console.error("Playback failed:", error);
            // Even if audio fails, we start the visual sequence
            setStarted(true);
          });
      }
    } else {
        setStarted(true);
    }
  };

  // 2. Loading Timer
  useEffect(() => {
    if (!started) return;

    const timer = setInterval(() => {
      setCount((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          
          // Fade out audio
          if (audioRef.current) {
             const fadeOut = setInterval(() => {
                 if(audioRef.current && audioRef.current.volume > 0.05) {
                     audioRef.current.volume -= 0.05;
                 } else {
                     audioRef.current?.pause(); 
                     clearInterval(fadeOut);
                 }
             }, 50);
          }
          
          setTimeout(onComplete, 800); 
          return 100;
        }
        return Math.min(prev + (Math.random() * 2.5), 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, [started, onComplete]);

  // 3. Heartbeat Visual Sync
  useEffect(() => {
    if (!started) return;

    // 60 BPM = 1000ms
    const beatInterval = setInterval(() => {
      setBeat(true);
      setTimeout(() => setBeat(false), 150); 
    }, 1000); 

    return () => clearInterval(beatInterval);
  }, [started]);

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden transition-colors duration-500 cursor-pointer",
        isDark ? "bg-[#050505] text-white" : "bg-white text-gray-900"
      )}
      onClick={handleStart}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      transition={{ duration: 0.8 }}
    >
      {/* --- THE HIDDEN AUDIO PLAYER --- */}
      {/* This is more robust than "new Audio()" */}
      <audio 
        ref={audioRef} 
        src="/heartbeat.mp3" 
        loop 
        preload="auto"
        onError={(e) => {
            console.error("Audio file not found or corrupted", e);
            setAudioError(true);
        }}
      />

      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none" 
           style={{ 
             backgroundImage: `linear-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px), linear-gradient(90deg, ${isDark ? '#fff' : '#000'} 1px, transparent 1px)`, 
             backgroundSize: '40px 40px' 
           }} 
      />

      {/* DEBUG MESSAGE (Only shows if file is missing) */}
      {audioError && (
          <div className="absolute top-10 left-0 right-0 text-center text-red-500 bg-red-100 p-2 z-[10000]">
              ⚠️ Audio file not found. Check public folder.
          </div>
      )}

      <AnimatePresence mode='wait'>
        {!started ? (
           /* --- WAITING SCREEN --- */
           <motion.div 
             key="waiting"
             initial={{ opacity: 0 }} 
             animate={{ opacity: 1 }}
             exit={{ opacity: 0, scale: 0.95, filter: "blur(5px)" }}
             className="z-20 flex flex-col items-center gap-6"
           >
              {/* Pulse Ring */}
              <div className="relative">
                  <div className={cn(
                      "w-24 h-24 rounded-full border-2 flex items-center justify-center animate-[pulse_2s_infinite]",
                      isDark ? "border-purple-500/50" : "border-red-500/50"
                  )}>
                    <div className={cn("w-2 h-2 rounded-full", isDark ? "bg-white" : "bg-black")} />
                  </div>
                  <div className={cn(
                      "absolute inset-0 rounded-full animate-ping opacity-20",
                      isDark ? "bg-purple-500" : "bg-red-500"
                  )} />
              </div>
              
              <div className="text-center">
                  <p className="font-mono text-xs tracking-[0.3em] opacity-70 uppercase mb-2">
                     System Standby
                  </p>
                  <p className={cn(
                      "font-bold text-sm tracking-widest uppercase border-b pb-1 inline-block",
                      isDark ? "border-white/20" : "border-black/20"
                  )}>
                     Click to Initialize
                  </p>
              </div>
           </motion.div>
        ) : (
           /* --- LOADING SCREEN --- */
           <motion.div 
             key="loading"
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             className="z-20 w-full flex flex-col items-center"
           >
                {/* Visual Pulse */}
                <motion.div 
                    animate={{ opacity: beat ? 0.3 : 0 }}
                    transition={{ duration: 0.1 }}
                    className={cn(
                        "absolute inset-0 pointer-events-none z-0 fixed",
                        isDark 
                            ? "bg-radial-gradient from-transparent to-purple-900/60" 
                            : "bg-radial-gradient from-transparent to-red-500/20"
                    )}
                />

                <div className="relative mb-6">
                    <motion.h1 
                        animate={{ scale: beat ? 1.05 : 1 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="text-4xl md:text-7xl font-black tracking-tighter italic uppercase text-center select-none"
                    >
                        Graphikardia
                    </motion.h1>
                    <div className={cn(
                        "absolute -top-3 -right-3 w-3 h-3 rounded-full transition-colors duration-300",
                        isDark ? "bg-green-500 shadow-[0_0_15px_#22c55e]" : "bg-red-500 shadow-[0_0_15px_#ef4444]",
                        beat ? "opacity-100 scale-125" : "opacity-40 scale-100"
                    )} />
                </div>

                <motion.p 
                    className={cn(
                        "font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase mb-16 transition-colors select-none",
                        isDark ? "text-gray-400" : "text-gray-500"
                    )}
                >
                    Breathing_Life_Into_Pixels
                </motion.p>

                {/* ECG Line */}
                <div className="relative w-full h-40 overflow-hidden flex items-center mb-10">
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
                            transition={{ repeat: Infinity, ease: "linear", duration: 2 }}
                        />
                    </svg>
                </div>

                <div className="flex flex-col items-center gap-3">
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
           </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
