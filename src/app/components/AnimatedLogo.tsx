'use client';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

export function AnimatedLogo({ className = "" }: { className?: string }) {
  const { isDark } = useTheme();
  
  return (
    <Link to="/" className={`relative ${className}`}>
      <motion.div
        className="relative flex items-center gap-3"
        whileHover={{ scale: 1.02 }}
      >
        {/* Animated Logo Mark */}
        <div className="relative w-10 h-10">
          <motion.svg
            viewBox="0 0 60 60"
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer ring */}
            <circle
              cx="30"
              cy="30"
              r="28"
              fill="none"
              stroke={isDark ? "#fff" : "#000"}
              strokeWidth="1"
              strokeDasharray="4 4"
              opacity="0.5"
            />
            {/* Inner diamond */}
            <motion.path
              d="M30 10 L50 30 L30 50 L10 30 Z"
              fill={isDark ? "#fff" : "#000"}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            {/* Center dot */}
            <motion.circle
              cx="30"
              cy="30"
              r="4"
              fill={isDark ? "#fff" : "#000"}
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.svg>
          
          {/* Glow effect */}
          <motion.div
            className={cn(
              "absolute inset-0 rounded-full blur-xl",
              isDark ? "bg-white/20" : "bg-black/20"
            )}
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>

        {/* Logo Text */}
        <div className="flex flex-col">
          <motion.span
            className={cn(
              "text-lg font-black uppercase tracking-tight leading-none",
              isDark ? "text-white" : "text-black"
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            GRAPHIKARDIA
          </motion.span>
        </div>
      </motion.div>
    </Link>
  );
}

export function AnimatedLogoSmall({ className = "" }: { className?: string }) {
  const { isDark } = useTheme();
  
  return (
    <Link to="/" className={`relative ${className}`}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative"
      >
        <div className="relative w-8 h-8">
          <motion.svg
            viewBox="0 0 40 40"
            className="w-full h-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          >
            <circle
              cx="20"
              cy="20"
              r="18"
              fill="none"
              stroke={isDark ? "#fff" : "#000"}
              strokeWidth="1"
              opacity="0.5"
            />
            <motion.path
              d="M20 8 L32 20 L20 32 L8 20 Z"
              fill={isDark ? "#fff" : "#000"}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.svg>
        </div>
        <motion.span
          className={cn(
            "text-2xl font-black uppercase tracking-tighter absolute -left-1 top-1/2 -translate-y-1/2",
            isDark ? "text-white" : "text-black"
          )}
        >
          .
        </motion.span>
      </motion.div>
    </Link>
  );
}