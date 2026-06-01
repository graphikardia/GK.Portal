'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Server, Zap, BarChart3 } from 'lucide-react';

export const CinematicHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: window.innerWidth > 768,
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 100;

    const isMobile = window.innerWidth < 768;
    const particlesCount = isMobile ? 600 : 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * (isMobile ? 180 : 300);
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // GOLD PARTICLES
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.4,
      transparent: true,
      color: 0xC9A84C,
      blending: THREE.AdditiveBlending,
      opacity: 0.4,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.03;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.03;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;
      particlesMesh.rotation.y = targetX * 0.1;
      particlesMesh.rotation.x = -targetY * 0.1;
      
      const time = Date.now() * 0.0001;
      particlesMesh.position.y = Math.sin(time) * 5;
      
      renderer.render(scene, camera);
    };

    animate();
    const timer = setTimeout(() => setLoading(false), 800);

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
      renderer.dispose();
    };
  }, []);

  const stats = [
    { icon: <Zap size={14} />, label: "Avg_ROI", value: "5.2x" },
    { icon: <BarChart3 size={14} />, label: "Reach_Gen", value: "30M+" },
    { icon: <Server size={14} />, label: "Nodes_Active", value: "50+" },
  ];

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden bg-gk-bg">
      <AnimatePresence>
        {loading && (
          <motion.div 
            key="preloader"
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[101] bg-gk-bg flex items-center justify-center"
          >
            <div className="flex flex-col items-center gap-4">
              <motion.div 
                className="w-12 h-12 border-2 border-gk-accent border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <span className="section-label">Synchronizing_Nodes</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />
      
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-gk-accent" />
              <span className="section-label">Performance_Infrastructure_v4</span>
            </div>

            <h1 className="text-gk-text1 font-black mb-8 leading-[1.05] tracking-tight">
              WE ARCHITECT <span className="gradient-gold">HIGH-VELOCITY</span><br />
              ACQUISITION ENGINES.
            </h1>
            
            <p className="font-body text-gk-text2 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl">
              Graphikardia translates technical expertise into measurable clinical and B2B growth. 
              We don't build sites; we deploy performance frameworks that scale.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-20">
              <Link 
                to="/contact"
                className="group relative px-10 py-5 bg-gk-accent text-black font-display font-extrabold text-[11px] uppercase tracking-widest hover:bg-gk-accent-hover transition-all flex items-center justify-center gap-3"
              >
                Start an Audit <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="px-10 py-5 border border-gk-border text-gk-text1 font-display font-extrabold text-[11px] uppercase tracking-widest hover:border-gk-accent hover:text-gk-accent transition-all flex items-center justify-center gap-3">
                <Play size={14} fill="currentColor" /> View Showreel
              </button>
            </div>

            {/* PERFORMANCE HUB */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-gk-border/50 max-w-2xl">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-gk-accent">
                    {stat.icon}
                    <span className="text-[10px] font-mono font-bold tracking-widest uppercase opacity-60">[{stat.label}]</span>
                  </div>
                  <span className="text-3xl font-display font-bold text-gk-text1">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex flex-col items-end gap-2 md:opacity-40 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono text-gk-text1 tracking-widest uppercase">system_status:</span>
        <span className="text-[10px] font-mono text-gk-accent font-bold tracking-widest uppercase">handshake_ready</span>
      </div>
    </div>
  );
};
