'use client';
import { motion } from 'framer-motion';
import { ExternalLink, ShieldCheck, Target, Play } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../lib/ThemeContext';

const projects = [
  {
    id: "koshys-academia",
    title: "Koshys Global Academia",
    cat: "Indian School",
    image: "https://koshysglobalacademia.com/wp-content/uploads/elementor/thumbs/02A9990-2-scaled-rhl6yt5961ac142t34dsabh3yi5b5qv6i1xik275cq.jpeg",
    result: "Educational Hub",
    scope: "Digital Authority",
    url: "https://koshysglobalacademia.com/"
  },
  {
    id: "kims",
    title: "Koshys Institute of Management Studies",
    cat: "Indian Management College",
    image: "https://kgi.edu.in/assets/knsat.jpg",
    result: "BBA, BCA & MBA Nodes",
    scope: "Academic Infrastructure",
    url: "https://kimsbengaluru.edu.in/"
  },
  {
    id: "reddy",
    title: "Dr. Darshana Reddy",
    cat: "Doctors Portfolio Website",
    image: "/branding/marketing-hero.png", 
    result: "16+ Years Medical Expertise",
    scope: "Internal Medicine & Diabetologist",
    url: "http://drdarshanareddy.com/"
  }
];

const videos = [
  { id: 1, title: "Medical Authority Campaign", duration: "0:45" },
  { id: 2, title: "Academic Infrastructure Scale", duration: "1:15" },
  { id: 3, title: "B2B Surgical Lead Gen", duration: "0:30" }
];

export default function WorkPage() {
  const { isDark } = useTheme();

  return (
    <div className={cn("min-h-screen transition-colors duration-500", isDark ? "bg-gk-bg text-gk-text1" : "bg-gray-50 text-black")}>
      {/* HERO */}
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Selected Deployments</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Evidence of High-Performance <span className="gradient-gold">Growth.</span>
            </h1>
            <p className={cn("text-xl leading-relaxed max-w-2xl mx-auto font-body", isDark ? "text-gk-text2" : "text-gray-600")}>
              A curated vault of digital infrastructures, educational nodes, and medical acquisition engines built to dominate competitive market sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN PORTFOLIO GRID */}
      <section className="pb-32 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                className={cn("group relative flex flex-col", isDark ? "" : "")}
              >
                <div className={cn("aspect-[4/3] overflow-hidden mb-8 border border-gk-border", isDark ? "bg-gk-secondary" : "bg-gray-200")}>
                   <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100 transition-all duration-1000"
                   />
                </div>
                
                <div className="flex flex-col gap-4 flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-[10px] font-mono text-gk-accent uppercase tracking-[0.2em] mb-2 block">{project.cat}</span>
                      <h3 className={cn("text-2xl font-bold font-display", isDark ? "text-white" : "text-black")}>{project.title}</h3>
                    </div>
                    
                    {/* Hyperlinking the External Link SVG directly as requested */}
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className={cn("p-3 border transition-colors", isDark ? "border-gk-border group-hover:border-gk-accent hover:bg-gk-accent/10" : "border-gray-200 hover:border-gk-accent hover:bg-gk-accent/10")}>
                       <ExternalLink size={20} className={cn("transition-colors", isDark ? "text-gk-text3 group-hover:text-gk-accent" : "text-gray-400 group-hover:text-gk-accent")} />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-auto pt-4">
                     <div className={cn("px-4 py-2 border flex items-center gap-3", isDark ? "bg-gk-elevated/50 border-gk-border text-white" : "bg-white border-gray-200 text-black")}>
                        <ShieldCheck size={14} className="text-gk-accent shrink-0" />
                        <span className="text-[10px] sm:text-xs font-bold uppercase">{project.result}</span>
                     </div>
                     <div className={cn("px-4 py-2 border flex items-center gap-3", isDark ? "border-gk-border/50 text-gk-text3" : "border-gray-200 text-gray-500")}>
                        <Target size={14} className="shrink-0" />
                        <span className="text-[10px] font-mono uppercase tracking-widest">{project.scope}</span>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REELS / VIDEO ARCHIVE SECTION */}
      <section className={cn("py-40 px-6 border-y", isDark ? "border-gk-border bg-gk-secondary/30" : "border-gray-200 bg-white")}>
         <div className="container-custom">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
               <div>
                 <span className="section-label mb-4 block">Visual Production</span>
                 <h2 className={cn("text-4xl md:text-5xl font-bold font-display", isDark ? "text-white" : "text-black")}>Strategic <span className="gradient-gold">Reels & Media.</span></h2>
               </div>
               <p className={cn("max-w-md font-body text-sm", isDark ? "text-gk-text2" : "text-gray-600")}>
                 High-fidelity vertical video campaigns optimized for Social Media algorithms and audience retention.
               </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
               {videos.map((vid) => (
                 <div key={vid.id} className="group relative aspect-[9/16] overflow-hidden rounded-xl border border-gk-border bg-gk-secondary cursor-pointer">
                    {/* Placeholder for actual <video src="..."></video> */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                    
                    {/* Abstract tech background while videos are loaded in the future */}
                    <div className="absolute inset-0 opacity-40 group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0">
                       <img src="/branding/social-hero.png" alt="Reel Thumbnail" className="w-full h-full object-cover" />
                    </div>

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                       <div className="w-16 h-16 rounded-full bg-gk-accent/20 border border-gk-accent flex items-center justify-center group-hover:bg-gk-accent transition-colors">
                          <Play size={24} className="text-gk-accent group-hover:text-black transition-colors translate-x-0.5" />
                       </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                       <h4 className="text-white font-bold text-lg leading-tight mb-2">{vid.title}</h4>
                       <span className="text-[10px] font-mono text-gk-accent uppercase tracking-widest">{vid.duration} - Vertical Format</span>
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* FOOTER CTA */}
      <section className={cn("py-52 px-6 text-center", isDark ? "bg-gk-bg" : "bg-gray-50")}>
        <div className="container-custom max-w-4xl mx-auto">
          <span className="section-label mb-8 block">Project Initiation</span>
          <h2 className={cn("text-4xl md:text-7xl font-bold mb-12 leading-tight", isDark ? "text-white" : "text-black")}>Secure Your Node in the <span className="gradient-gold">Digital Economy.</span></h2>
          <a href="/contact" className={cn(
             "inline-flex py-6 px-16 font-bold text-xs uppercase tracking-widest transition-all",
             isDark ? "bg-gk-accent text-black hover:bg-white" : "bg-gk-accent text-white hover:bg-black"
          )}>
             Initialize Audit
          </a>
        </div>
      </section>
    </div>
  );
}
