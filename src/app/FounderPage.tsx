'use client';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { Target, Zap, Award, Hexagon, Code, Megaphone, Terminal } from 'lucide-react';

const ParticleVortex = () => {
  const count = 2000;
  const mesh = useRef<THREE.InstancedMesh>(null);
  
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 15 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const xFactor = -50 + Math.random() * 100;
      const yFactor = -50 + Math.random() * 100;
      const zFactor = -50 + Math.random() * 100;
      temp.push({ t, factor, speed, xFactor, yFactor, zFactor, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  useFrame(() => {
    particles.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);
      dummy.position.set(
        (particle.mx / 10) * a + xFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        (particle.my / 10) * b + yFactor + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        (particle.my / 10) * b + zFactor + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      if (mesh.current) {
         mesh.current.setMatrixAt(i, dummy.matrix);
      }
    });
    if (mesh.current) mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <octahedronGeometry args={[0.2, 0]} />
      <meshPhysicalMaterial color="#C6B074" opacity={0.3} transparent />
    </instancedMesh>
  );
};

export default function FounderPage() {
  const capabilities = [
    { title: "Brand Identity", icon: <Hexagon size={20} />, desc: "Architecting visual systems and brand guidelines for clinical & B2B brands." },
    { title: "SEO Navigation", icon: <Target size={20} />, desc: "AEO/GEO optimization and technical SEO for aggressive search dominance." },
    { title: "Social Media", icon: <Megaphone size={20} />, desc: "Managing high-ticket audiences through platform-specific storytelling." },
    { title: "Creative Direction", icon: <Zap size={20} />, desc: "Leading art direction, content strategy, and brutalist web aesthetics." }
  ];

  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1 overflow-hidden relative">
      {/* 3D CORTEX BACKGROUND */}
      <div className="absolute inset-0 z-0 opacity-40">
        <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#C6B074" />
          <ParticleVortex />
        </Canvas>
      </div>

      <div className="container-custom relative z-10 pt-48 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
           
           {/* IMAGE & IDENTITY BLOCK */}
           <div className="lg:col-span-5 relative group">
              <div className="absolute inset-0 border border-gk-accent/20 translate-x-4 -translate-y-4" />
              <div className="relative border border-gk-border bg-gk-secondary/50 p-4 backdrop-blur-xl">
                 <img 
                   src="/branding/profile-new.png" 
                   alt="Geetha Gokula P" 
                   className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000"
                 />
                 <div className="absolute bottom-10 left-10 glass-card px-6 py-4 border border-gk-accent/20">
                    <span className="text-[10px] font-mono text-gk-accent uppercase tracking-[0.3em] font-bold block mb-1">FOUNDER_NODE</span>
                    <span className="text-xl font-bold tracking-tight">Geetha Gokula P</span>
                 </div>
              </div>
           </div>

           {/* TEXT PAYLOAD */}
           <div className="lg:col-span-7 space-y-12">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                 <span className="section-label mb-6 block">System Architect</span>
                 <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] mb-8">
                   Managing Director & <br/>
                   <span className="gradient-gold">Creative Lead.</span>
                 </h1>
                 <p className="text-gk-text2 text-xl font-body leading-relaxed">
                   As the architect behind Graphikardia, Geetha Gokula P drives the convergence of high-fidelity visual production and technical marketing infrastructure.
                 </p>
              </motion.div>

              {/* CAPABILITIES GRIDS */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8 border-t border-gk-border/50">
                 {capabilities.map((cap, i) => (
                    <motion.div 
                       key={i} 
                       initial={{ opacity: 0, y: 10 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className="p-6 border border-gk-border bg-gk-secondary/20 hover:border-gk-accent/30 transition-all group backdrop-blur-md"
                    >
                       <div className="mb-4 text-gk-accent opacity-50 group-hover:opacity-100 transition-opacity">
                         {cap.icon}
                       </div>
                       <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                       <p className="text-xs text-gk-text2 font-body leading-relaxed">{cap.desc}</p>
                    </motion.div>
                 ))}
              </div>

              {/* EXPERTISE BAR */}
              <div className="flex flex-wrap gap-4 pt-4">
                 {["AEO_ARCHITECTURE", "HTML_DOM", "B2B_SALES", "REACT_FIBER", "FIGMA"].map(tag => (
                   <span key={tag} className="px-4 py-2 text-[9px] font-mono font-bold tracking-widest border border-gk-border bg-gk-bg text-gk-text3 flex items-center gap-2">
                     <Terminal size={10} /> {tag}
                   </span>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
