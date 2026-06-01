'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from '../../lib/ThemeContext'; 
import { cn } from '../../lib/utils';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const { isDark } = useTheme();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 800);
          return 100;
        }
        return Math.min(prev + (Math.random() * 5), 100);
      });
    }, 50);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center p-6",
        isDark ? "bg-black" : "bg-white"
      )}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="max-w-md w-full text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-black tracking-tightest mb-2 uppercase">
            GRAPHIKARDIA
          </h1>
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-current opacity-20" />
            <p className="text-[9px] font-black uppercase tracking-[0.4em] opacity-40">
              Initializing_System_Nodes
            </p>
            <span className="h-px w-12 bg-current opacity-20" />
          </div>
        </motion.div>
        
        <div className="relative h-1 w-full bg-current opacity-5 mb-4">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-current"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="flex justify-between items-center font-mono text-[10px] opacity-40">
          <span>BOOT_SEQUENCE</span>
          <span>{Math.floor(progress)}%</span>
        </div>
      </div>

      {/* STARK LOGO WATERMARK */}
      <img 
        src="/branding/logo_symbol.png" 
        className="absolute bottom-12 h-12 opacity-5 animate-pulse" 
        alt=""
      />
    </motion.div>
  );
}
