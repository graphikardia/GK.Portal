'use client';
import { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';
import { useTheme } from '../../lib/ThemeContext';

export function CustomCursor() {
  const { isDark } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, { damping: 15, stiffness: 300 });
  const y = useSpring(mouseY, { damping: 15, stiffness: 300 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a') || target.closest('button') || 
                         target.closest('input') || target.closest('textarea');
      setIsHovering(!!interactive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [isVisible, mouseX, mouseY]);

  if (!isVisible) return null;

  const cursorColor = isDark ? '#ffffff' : '#000000';

  return (
    <div 
      className="fixed inset-0 pointer-events-none hidden md:block" 
      style={{ zIndex: 999999 }}
    >
      {/* Main dot */}
      <motion.div
        className="absolute rounded-full"
        style={{ 
          x, y, translateX: '-50%', translateY: '-50%',
          width: 8,
          height: 8,
          backgroundColor: cursorColor,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="absolute rounded-full border-2"
        style={{ 
          x, y, translateX: '-50%', translateY: '-50%',
          width: isHovering ? 40 : 24,
          height: isHovering ? 40 : 24,
          borderColor: cursorColor,
          opacity: 0.5,
        }}
        animate={{ 
          scale: isHovering ? 1.2 : 1,
          borderRadius: isHovering ? '30%' : '50%'
        }}
        transition={{ type: 'spring', damping: 20 }}
      />

      {/* Crosshair on hover */}
      {isHovering && (
        <>
          <motion.div
            className="absolute"
            style={{ 
              x, y, translateX: '-50%', translateY: '-50%',
              width: 60,
              height: 60,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-3" style={{ backgroundColor: cursorColor }} />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-3" style={{ backgroundColor: cursorColor }} />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-px" style={{ backgroundColor: cursorColor }} />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-px" style={{ backgroundColor: cursorColor }} />
          </motion.div>
        </>
      )}

      {/* Click effect */}
      <motion.div
        className="absolute rounded-full border-2 border-[#DC143C]"
        style={{ 
          x, y, translateX: '-50%', translateY: '-50%',
          width: 16,
          height: 16,
        }}
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 0, opacity: 0 }}
        whileTap={{ scale: 2, opacity: 0 }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
}
