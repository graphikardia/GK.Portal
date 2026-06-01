'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight, Activity, ShieldCheck, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

export const CinematicHero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loading, setLoading] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    if (!canvasRef.current) return;

    {/* THREE JS INIT */}
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

    const particlesCount = 1500;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
        // Spread particles
        posArray[i] = (Math.random() - 0.5) * 300;
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      transparent: true,
      color: 0xC9A84C,
      blending: THREE.AdditiveBlending,
      opacity: isDark ? 0.4 : 0.6,
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
      
      // Dynamic color adjustment
      particlesMaterial.color.setHex(isDark ? 0xC9A84C : 0xA48227);
      
      renderer.render(scene, camera);
    };

    animate();
    const timer = setTimeout(() => setLoading(false), 800);

    const onResize = () => {
      if(!camera || !renderer) return;
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
  }, [isDark]);

  return (
    <div className={cn(
      "relative w-full min-h-screen overflow-hidden flex items-center pt-20 transition-colors duration-500",
      isDark ? "bg-gk-bg" : "bg-white"
    )}>
      <AnimatePresence>
        {loading && (
          <motion.div 
            exit={{ opacity: 0 }}
            className={cn("absolute inset-0 z-[101] flex items-center justify-center", isDark ? "bg-gk-bg" : "bg-white")}
          >
            <div className="w-12 h-12 border-2 border-gk-accent border-t-transparent rounded-full animate-spin" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 3D PARTICLE CANVAS */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-30 pointer-events-none" />
      
      <div className="container-custom relative z-10 w-full py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           {/* LEFT CONTENT */}
           <motion.div
             initial={{ opacity: 0, x: -40 }}
             animate={{ opacity: 1, x: 0 }}
             transition={{ duration: 0.8, ease: "easeOut" }}
           >
             <div className="flex items-center gap-4 mb-8">
               <span className="section-label">Est. 2020</span>
               <div className="w-8 h-px bg-gk-accent/30" />
               <span className="section-label">Performance Core</span>
             </div>

             <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold mb-10 leading-[1.05] tracking-tight">
               Build Your <span className="gradient-gold">Digital Authority</span><br /> 
               with Precision.
             </h1>
             
             <p className="text-gk-text2 text-lg md:text-xl leading-relaxed mb-12 max-w-lg font-body">
               Graphikardia architects high-velocity acquisition systems for elite B2B and clinical brands. We don't just run campaigns; we build measurable assets.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center gap-6 mb-16">
               <Link 
                 to="/contact"
                 className={cn(
                   "group px-12 py-5 font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-3",
                   isDark 
                    ? "bg-gk-accent text-black hover:bg-gk-accent-hover" 
                    : "bg-gk-accent text-white hover:bg-gk-accent-hover"
                 )}
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
           </motion.div>

           {/* RIGHT 3D UI / UX DASHBOARD */}
           <motion.div
              initial={{ opacity: 0, rotateY: 15, x: 40 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="relative hidden lg:block"
              style={{ perspective: 1000 }}
           >
              <div 
                 className={cn(
                   "relative w-full aspect-[4/3] rounded-xl border p-6 flex flex-col gap-6 shadow-[0px_40px_100px_rgba(201,168,76,0.1)] transition-transform hover:-translate-y-2 hover:rotate-1",
                   isDark ? "bg-[#0E0E12]/80 border-gk-border backdrop-blur-3xl" : "bg-white/80 border-black/10 backdrop-blur-3xl"
                 )}
                 style={{
                    transformStyle: 'preserve-3d',
                    transform: 'rotateX(5deg) rotateY(-5deg) rotateZ(2deg)'
                 }}
              >
                 {/* Dashboard Header */}
                 <div className="flex justify-between items-center border-b border-gk-border pb-4">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500/20" />
                       <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                       <div className="w-3 h-3 rounded-full bg-green-500/20" />
                    </div>
                    <div className="flex gap-4">
                       <span className="text-[9px] font-mono uppercase tracking-widest opacity-50">Live_Network_Node</span>
                       <Activity size={12} className="text-gk-accent" />
                    </div>
                 </div>

                 {/* 3D Floating Elements */}
                 <div className="grid grid-cols-2 gap-4 flex-1">
                    <div className="col-span-2 flex justify-between items-end p-6 bg-gk-secondary/50 rounded-lg border border-gk-border/50 relative overflow-hidden group">
                       <div className="relative z-10">
                          <span className="text-[10px] font-mono text-gk-accent uppercase block mb-2">Total System Load</span>
                          <span className="text-5xl font-bold font-display blur-[0.2px]">99.8%</span>
                       </div>
                       <motion.div 
                          animate={{ opacity: [0.3, 0.8, 0.3], scale: [1, 1.05, 1] }} 
                          transition={{ repeat: Infinity, duration: 4 }}
                          className="absolute right-[-10%] top-[-10%] w-32 h-32 bg-gk-accent/10 blur-3xl rounded-full"
                       />
                    </div>
                    
                    <div className="p-6 bg-gk-secondary/30 rounded-lg border border-gk-border/50 flex flex-col justify-center">
                       <ShieldCheck size={24} className="text-gk-accent mb-4" />
                       <span className="text-2xl font-bold block mb-1">Encrypted</span>
                       <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">TLS_Verfied</span>
                    </div>

                    <div className="p-6 bg-gk-secondary/30 rounded-lg border border-gk-border/50 flex flex-col justify-center">
                       <Zap size={24} className="text-gk-accent mb-4" />
                       <span className="text-2xl font-bold block mb-1">~0.4s</span>
                       <span className="text-[10px] font-mono opacity-50 uppercase tracking-widest">Latency</span>
                    </div>
                 </div>

                 {/* Layered Glass Overlay */}
                 <div className="absolute top-[20%] -right-10 w-48 h-32 bg-gk-elevated/40 backdrop-blur-xl border border-gk-border/60 rounded-lg p-4 shadow-2xl" style={{ transform: 'translateZ(40px)' }}>
                     <span className="text-[9px] font-mono text-gk-accent uppercase block mb-3">Conversion Log</span>
                     <div className="space-y-2">
                        {[1, 2, 3].map(i => (
                           <div key={i} className="flex gap-2 items-center">
                              <div className="w-1.5 h-1.5 rounded-full bg-gk-accent animate-pulse" />
                              <div className="h-1.5 bg-gk-text1/20 rounded w-full" />
                           </div>
                        ))}
                     </div>
                 </div>
              </div>
           </motion.div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30">
         <span className="text-[10px] font-mono tracking-widest">SCROLL_TO_EXPLORE</span>
         <div className="w-px h-12 bg-gradient-to-b from-gk-accent to-transparent" />
      </div>
    </div>
  );
};
