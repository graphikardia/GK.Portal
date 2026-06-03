'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../../lib/ThemeContext'; 
import { cn } from '../../lib/utils';
import { Terminal } from 'lucide-react';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);
  const [glitchText, setGlitchText] = useState("0X00FJA0");
  const [logs, setLogs] = useState<string[]>([]);
  
  const targetWord = "GRAPHIKARDIA";
  const hexChars = "0123456789ABCDEF!@#$%^&*";

  useEffect(() => {
    // Generate Boot Logs
    const logMessages = [
      "INITIALIZING PORTAL NODE...",
      "BYPASSING SECURITY FIREWALL [OK]",
      "LOADING AI_MODELS [7/7]",
      "CONNECTING TO GRAPHIKARDIA SECURE SERVER...",
      "PULLING AEO/GEO META DATA...",
      "ESTABLISHING 3D WORKSPACE...",
      "SYSTEM OPERATIONAL."
    ];
    
    let logIndex = 0;
    const logTimer = setInterval(() => {
      if (logIndex < logMessages.length) {
        setLogs(prev => [...prev, logMessages[logIndex++]]);
      }
    }, 400);

    // Progress Bar + Decryption Timer
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          clearInterval(logTimer);
          setTimeout(onComplete, 1200);
          return 100;
        }
        return Math.min(prev + (Math.random() * 2), 100);
      });
      
      // Decryption Effect
      setGlitchText(prev => {
        if (progress > 90) return targetWord;
        return targetWord.split('').map((char, index) => {
          if (index < (progress / 100) * targetWord.length) return char;
          return hexChars[Math.floor(Math.random() * hexChars.length)];
        }).join('');
      });
    }, 40);
    
    return () => {
      clearInterval(timer);
      clearInterval(logTimer);
    };
  }, [progress, onComplete]);

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6 sm:p-12 font-mono overflow-hidden",
        isDark ? "bg-[#050505] text-gk-accent" : "bg-[#f5f5f5] text-black"
      )}
      exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* CLI LOGS / TECH NOIR VIBE */}
      <div className="absolute top-12 left-12 max-w-sm hidden md:flex flex-col gap-2 opacity-50 text-[10px] tracking-widest uppercase">
          <div className="flex items-center gap-2 mb-4 text-gk-accent"><Terminal size={14} /> SYS_BOOT_LOG</div>
          {logs.map((log, i) => (
             <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className={cn(
                "py-1 border-b border-dashed",
                isDark ? "border-white/10" : "border-black/10"
             )}>
                {'>'} {log}
             </motion.div>
          ))}
      </div>

      <div className="max-w-2xl w-full text-center relative z-10">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mb-16 relative"
        >
          {/* FAKE GLITCH SHADOW */}
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase mix-blend-difference absolute inset-0 -translate-x-1 translate-y-1 opacity-50 text-red-500">
            {glitchText}
          </h1>
          <h1 className={cn(
             "text-4xl sm:text-6xl md:text-8xl font-black tracking-tighter mb-4 uppercase drop-shadow-2xl relative",
             isDark ? "text-white" : "text-black"
          )}>
            {glitchText}
          </h1>
          
          <div className="flex items-center justify-center gap-6 mt-8">
            <span className={cn("h-px flex-1 opacity-20", isDark ? "bg-gk-accent" : "bg-black")} />
            <p className={cn("text-[10px] font-bold uppercase tracking-[0.6em]", isDark ? "text-gk-accent" : "text-black")}>
              {progress >= 100 ? "NODE_SECURED" : "DECRYPTING_SECTOR"}
            </p>
            <span className={cn("h-px flex-1 opacity-20", isDark ? "bg-gk-accent" : "bg-black")} />
          </div>
        </motion.div>
        
        <div className={cn("relative h-1 w-full bg-current opacity-10 mb-6", isDark ? "bg-white" : "bg-black")}>
          <motion.div 
            className="absolute top-0 left-0 h-full bg-gk-accent shadow-[0_0_15px_#C6B074]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center font-mono text-xs opacity-60 font-bold uppercase">
          <span>PORTAL_DATA_SYNC</span>
          <span className="text-gk-accent">{Math.floor(progress)}%</span>
        </div>
      </div>

      {/* BACKGROUND HEX GRID */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
      />
    </motion.div>
  );
}
