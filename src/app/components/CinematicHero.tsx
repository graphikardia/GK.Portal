'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';

export const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { isDark, toggleTheme } = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: window.innerWidth > 768, // Performance optimization for mobile
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 100;

    // PARTICLE SYSTEM: 1500 NODES (Reduced range on mobile for visibility)
    const isMobile = window.innerWidth < 768;
    const isLowEnd = typeof navigator !== 'undefined' && (navigator.hardwareConcurrency || 4) <= 4;
    const particlesCount = isMobile ? (isLowEnd ? 400 : 800) : 1500;
    const posArray = new Float32Array(particlesCount * 3);

    const spread = isMobile ? 120 : 200;
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * spread;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: isMobile ? 0.8 : 0.5,
      transparent: true,
      color: isDark ? 0xaaaaaa : 0x333333,
      blending: isDark ? THREE.AdditiveBlending : THREE.NormalBlending,
      opacity: 0.6,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    const centerGeometry = new THREE.SphereGeometry(isMobile ? 1 : 1.5, 32, 32);
    const centerMaterial = new THREE.MeshBasicMaterial({ color: 0xFF4500 });
    const centerMesh = new THREE.Mesh(centerGeometry, centerMaterial);
    scene.add(centerMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    const onTouchMove = (event: TouchEvent) => {
      mouseX = (event.touches[0].clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.touches[0].clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove);

    const animate = () => {
      requestAnimationFrame(animate);
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      particlesMesh.rotation.y = targetX * 0.1;
      particlesMesh.rotation.x = -targetY * 0.1;
      const time = Date.now() * 0.0005;
      particlesMesh.position.y = Math.sin(time) * 2;
      renderer.render(scene, camera);
    };

    animate();
    const timer = setTimeout(() => setLoading(false), 2000);

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      centerGeometry.dispose();
      centerMaterial.dispose();
      renderer.dispose();
    };
  }, [isDark]);



  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="preloader"
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
          >
            <motion.img 
              src="/branding/logo_symbol.png" 
              alt="Loading" 
              className="h-16 md:h-20 invert hue-rotate-180" 
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="leading-[0.85] font-black mb-8 md:mb-12 mix-blend-difference uppercase">
              DATA-DRIVEN<br />
              <span className="text-stroke-white text-transparent opacity-80">PERFORMANCE</span><br />
              MARKETING
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
              <button className="px-10 py-5 bg-foreground text-background font-display font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Start a Project
              </button>
              <button className="px-10 py-5 border border-foreground/30 font-display font-black text-[10px] uppercase tracking-widest hover:border-foreground transition-colors mix-blend-difference">
                Free Brand Audit
              </button>
            </div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 mix-blend-difference hidden sm:flex">
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/40">SCROLL_FOR_INTEL</p>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};
