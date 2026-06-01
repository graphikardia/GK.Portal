'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Play, Server, Zap, BarChart3, ChevronRight } from 'lucide-react';

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
      antialias: true,
    });
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.position.z = 100;

    const particlesCount = 2000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 280;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      transparent: true,
      color: 0xC9A84C,
      blending: THREE.AdditiveBlending,
      opacity: 0.3,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX - window.innerWidth / 2) * 0.02;
      mouseY = (event.clientY - window.innerHeight / 2) * 0.02;
    };

    window.addEventListener('mousemove', onMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      particlesMesh.rotation.y += 0.001 + (mouseX * 0.001);
      particlesMesh.rotation.x += (mouseY * 0.001);
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

  return (
    <div className="relative w-full h-screen overflow-hidden bg-gk-bg flex items-center justify-center">
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-[101] bg-gk-bg flex items-center justify-center"
          >
            <div className="w-12 h-12 border-2 border-gk-accent border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-40" />
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className="section-label">Est. 2020</span>
            <div className="w-8 h-px bg-gk-accent/30" />
            <span className="section-label">Performance Core</span>
          </div>

          <h1 className="text-5xl md:text-8xl font-bold mb-10 leading-[1.1] tracking-tight text-gk-text1">
            Build Your <span className="gradient-gold">Digital Authority</span><br /> 
            with Precision.
          </h1>
          
          <p className="text-gk-text2 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto font-body">
            Graphikardia architects high-velocity acquisition systems for elite B2B and clinical brands. We don't just run campaigns; we build measurable assets.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link 
              to="/contact"
              className="group px-12 py-5 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-gk-accent-hover transition-all flex items-center gap-3"
            >
              Start Project <ChevronRight size={16} />
            </Link>
            <Link 
              to="/work"
              className="px-12 py-5 border border-gk-border text-gk-text1 font-bold text-xs uppercase tracking-widest hover:border-gk-accent hover:text-gk-accent transition-all"
            >
              View Selected Work
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-gk-border/50">
             {[
               { label: "Reach Gen", val: "40M+" },
               { label: "Avg ROI", val: "5.2x" },
               { label: "Nodes Active", val: "50+" },
               { label: "System Uptime", val: "99.9%" }
             ].map((stat, i) => (
               <div key={i} className="flex flex-col gap-1">
                 <span className="text-2xl font-bold text-gk-text1">{stat.val}</span>
                 <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-gk-text3">{stat.label}</span>
               </div>
             ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
         <span className="text-[10px] font-mono tracking-widest">SCROLL_TO_EXPLORE</span>
         <div className="w-px h-12 bg-gradient-to-b from-gk-accent to-transparent" />
      </div>
    </div>
  );
};
