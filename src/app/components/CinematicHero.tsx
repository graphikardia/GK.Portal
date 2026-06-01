'use client';
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

export const CinematicHero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    // SCENE SETUP
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 100;

    // PARTICLE SYSTEM: 1500 NODES
    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 200;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Particle Material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.5,
      transparent: true,
      color: theme === 'dark' ? 0xaaaaaa : 0x333333,
      blending: theme === 'dark' ? THREE.AdditiveBlending : THREE.NormalBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // CENTRAL ORANGE NODE (Mirroring Icon)
    const centerGeometry = new THREE.SphereGeometry(1.5, 32, 32);
    const centerMaterial = new THREE.MeshBasicMaterial({ color: 0xFF4500 });
    const centerMesh = new THREE.Mesh(centerGeometry, centerMaterial);
    scene.add(centerMesh);

    // MOUSE TRACKING
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.05;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.05;
    };

    window.addEventListener('mousemove', onMouseMove);

    // ANIMATION LOOP
    const animate = () => {
      requestAnimationFrame(animate);

      // Lerp for smooth tracking
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      particlesMesh.rotation.y = targetX * 0.1;
      particlesMesh.rotation.x = -targetY * 0.1;
      
      // Subtle float animation
      const time = Date.now() * 0.0005;
      particlesMesh.position.y = Math.sin(time) * 2;
      
      renderer.render(scene, camera);
    };

    animate();

    // Fade out preloader after init
    const timer = setTimeout(() => setLoading(false), 2000);

    // RESIZE HANDLER
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      clearTimeout(timer);
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      centerGeometry.dispose();
      centerMaterial.dispose();
      renderer.dispose();
    };
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('light', newTheme === 'light');
    document.body.style.backgroundColor = newTheme === 'dark' ? '#000000' : '#F8F9FA';
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden transition-colors duration-500">
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
              className="h-20 invert hue-rotate-180" 
              animate={{ rotateY: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      
      {/* NAVIGATION */}
      <nav className="absolute top-0 w-full z-20 px-10 py-10 flex justify-between items-center mix-blend-difference">
        <div className="flex items-center">
          <img 
            src="/branding/logo_full.png" 
            alt="GK" 
            className="h-10 logo-filter" 
          />
        </div>
        
        <div className="flex items-center gap-12">
          <div className="hidden lg:flex gap-10 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            <Link to="/" className="hover:opacity-50 transition-all border-b border-white/0 hover:border-white/100 pb-1">Hub</Link>
            <Link to="/work" className="hover:opacity-50 transition-all border-b border-white/0 hover:border-white/100 pb-1">The_Vault</Link>
            <Link to="/about" className="hover:opacity-50 transition-all border-b border-white/0 hover:border-white/100 pb-1">About</Link>
            <Link to="/case-studies" className="hover:opacity-50 transition-all border-b border-white/0 hover:border-white/100 pb-1">Proof</Link>
            <Link to="/blog" className="hover:opacity-50 transition-all border-b border-white/0 hover:border-white/100 pb-1">Intel</Link>
            <Link to="/contact" className="hover:opacity-50 transition-all border-b border-white/0 hover:border-white/100 pb-1">Handshake</Link>
          </div>
          
          <button 
            onClick={toggleTheme}
            className="group flex items-center gap-3"
          >
            <span className="text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
              {theme === 'dark' ? 'Clinical_Mode' : 'Noir_Mode'}
            </span>
            <div className="w-8 h-8 border border-white flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-black transition-all">
              <span className="text-[10px] font-bold">{theme === 'dark' ? 'L' : 'D'}</span>
            </div>
          </button>
        </div>
      </nav>

      {/* HERO CONTENT */}
      <div className="relative z-10 h-full flex items-center px-10 md:px-20">
        <div className="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-5xl md:text-8xl leading-[0.9] font-black mb-12 mix-blend-difference">
              DATA-DRIVEN<br />
              <span className="text-stroke-white text-transparent opacity-80">PERFORMANCE</span><br />
              MEETS<br />
              TECH-NOIR
            </h1>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-12 py-5 bg-foreground text-background font-display font-black text-[10px] uppercase tracking-widest hover:scale-[1.02] transition-transform">
                Initialize_Retainer
              </button>
              <button className="px-12 py-5 border border-foreground/30 font-display font-black text-[10px] uppercase tracking-widest hover:border-foreground transition-colors mix-blend-difference">
                Audit_My_Brand
              </button>
            </div>
          </motion.div>
          
          <div className="hidden lg:block">
            {/* Open Negative Space for Three.js Interaction */}
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 mix-blend-difference">
          <p className="text-[8px] font-black uppercase tracking-[0.5em] text-white/40">Keep_Scrolling</p>
          <div className="w-px h-12 bg-gradient-to-b from-white to-transparent" />
        </div>
      </div>
    </div>
  );
};
