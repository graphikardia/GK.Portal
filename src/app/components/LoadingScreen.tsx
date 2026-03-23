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
          setTimeout(onComplete, 500);
          return 100;
        }
        return Math.min(prev + 2, 100);
      });
    }, 30);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div 
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center",
        isDark ? "bg-[#0a0a0a]" : "bg-white"
      )}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center"
      >
        <h1 className={cn("text-4xl font-black tracking-wider mb-2", isDark ? "text-white" : "text-black")}>
          GRAPHIKARDIA
        </h1>
        <p className={cn("text-sm uppercase tracking-widest mb-8", isDark ? "text-white/50" : "text-black/50")}>
          Digital Marketing Agency
        </p>
        
        <div className="w-64 mx-auto">
          <div className={cn("h-1 rounded-full overflow-hidden", isDark ? "bg-white/10" : "bg-black/10")}>
            <motion.div 
              className="h-full bg-[#DC143C]"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
            />
          </div>
          <p className={cn("text-xs mt-3", isDark ? "text-white/40" : "text-black/40")}>
            Loading... {Math.floor(progress)}%
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
