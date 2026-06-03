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
  { id: 1, title: "The Hangover Reel", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQM4LTk5Bilmviu1M7upEtc5kGRFhuU8QNlFPSlowsI_NrK5mq7HGCwa1l8PzVkWokGYiBTyvNInrBWbeKfm9m5PTpGt7eEbrNHTZhM.mp4", thumbnail: "/videos/SaveGram.App_AQM4LTk5Bilmviu1M7upEtc5kGRFhuU8QNlFPSlowsI_NrK5mq7HGCwa1l8PzVkWokGYiBTyvNInrBWbeKfm9m5PTpGt7eEbrNHTZhM.webp" },
  { id: 2, title: "Allergies Awareness Reel", category: "Doctor Explainer", video: "/videos/SaveGram.App_AQMh7virex_qE2amE_eD4VynryeWRI_a9Uz7m0PL1PS7EN4-m7Y3OyAzStcwt2HchJYyQgJV1Z_FdejjRhSszbFWsgNfaqLD3Gsh018.mp4", thumbnail: "/videos/SaveGram.App_AQMh7virex_qE2amE_eD4VynryeWRI_a9Uz7m0PL1PS7EN4-m7Y3OyAzStcwt2HchJYyQgJV1Z_FdejjRhSszbFWsgNfaqLD3Gsh018.webp" },
  { id: 3, title: "Health Tips Reel", category: "Doctor Explainer", video: "/videos/SaveGram.App_AQMKlFKhcpbQUwf9yr5MhNgj_F8X9UVzm9MA3E6jkjdKV6Ju_Ftx5KxtNuO9mY04giZE3UKQiE23lJ-mnIEt4nmRW-NIJxLuETVqzpA.mp4", thumbnail: "/videos/SaveGram.App_AQMKlFKhcpbQUwf9yr5MhNgj_F8X9UVzm9MA3E6jkjdKV6Ju_Ftx5KxtNuO9mY04giZE3UKQiE23lJ-mnIEt4nmRW-NIJxLuETVqzpA.webp" },
  { id: 4, title: "Lifestyle Reel", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQMkndN3oOED1CUipzJY8SOu8OOOCpLQ8NY5H95JBEpkNWI35s_LoPixfN1s8p4l4BS5e3m9bW-7fKnEHtIXcOxGldW_oHxIJnWaiFU.mp4", thumbnail: "/videos/SaveGram.App_AQMkndN3oOED1CUipzJY8SOu8OOOCpLQ8NY5H95JBEpkNWI35s_LoPixfN1s8p4l4BS5e3m9bW-7fKnEHtIXcOxGldW_oHxIJnWaiFU.webp" },
  { id: 5, title: "Product Showcase", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQMKoovkpYmFmUT3dRBrh9rTIWAo7n9pepUO5eInxZ6N5XBEhcnxdGcf2mHv6_3XRjttfyBKj9k_Z9tNHNExKpzdk15ZRo-kcGCHg5c.mp4", thumbnail: "/videos/SaveGram.App_AQMKoovkpYmFmUT3dRBrh9rTIWAo7n9pepUO5eInxZ6N5XBEhcnxdGcf2mHv6_3XRjttfyBKj9k_Z9tNHNExKpzdk15ZRo-kcGCHg5c.webp" },
  { id: 6, title: "Fitness Reel", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQMT7ml4Hy3q5z0S1puj9nGjcUo3AurEq-FzdOj32bCwUImRRmThqMN-_VRO_Y4qtkoiTiW6ldspE_NEQR-q5lYLYvYPhbHym16Xggs.mp4", thumbnail: "/videos/SaveGram.App_AQMT7ml4Hy3q5z0S1puj9nGjcUo3AurEq-FzdOj32bCwUImRRmThqMN-_VRO_Y4qtkoiTiW6ldspE_NEQR-q5lYLYvYPhbHym16Xggs.webp" },
  { id: 7, title: "Wellness Tips", category: "Doctor Explainer", video: "/videos/SaveGram.App_AQMuUAi5G5tOnJvyUJXrQCqIqLB3xfl9BEyvUeBbVWqlicZ9t0Ex_MwtCFRQDIhhmtyfaNARzPm9pDqYjLDTCaSnsGT4dulN-oA6OOM.mp4", thumbnail: "/videos/SaveGram.App_AQMuUAi5G5tOnJvyUJXrQCqIqLB3xfl9BEyvUeBbVWqlicZ9t0Ex_MwtCFRQDIhhmtyfaNARzPm9pDqYjLDTCaSnsGT4dulN-oA6OOM.webp" },
  { id: 8, title: "Quick Tips Reel", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQMxcn6Ygdj9oFOMW18P94wKjl9rScMo2_FtlzjCV6pm-HMEXybJukXfGOSw812mwD4p4DwGwDvoC_436dpP5kYq8eV5qKGKKjQMgh0.mp4", thumbnail: "/videos/SaveGram.App_AQMxcn6Ygdj9oFOMW18P94wKjl9rScMo2_FtlzjCV6pm-HMEXybJukXfGOSw812mwD4p4DwGwDvoC_436dpP5kYq8eV5qKGKKjQMgh0.webp" },
  { id: 9, title: "Educational Reel", category: "Doctor Explainer", video: "/videos/SaveGram.App_AQMxFmp9goH0yhVFYvzlVe3smsB1-mJAoLF0WFO0qQnjXdg77B19EsJxkJlb9wZh_FoeIwoIEcvyfYZEx16EWaqH3b6xvwIcZ_lCJeo.mp4", thumbnail: "/videos/SaveGram.App_AQMxFmp9goH0yhVFYvzlVe3smsB1-mYN04giZE3UKQiE23lJ-mnIEt4nmRW-NIJxLuETVqzpA.webp" },
  { id: 10, title: "Behind The Scenes", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQN52egmInXxmEkQpqTyFORdBU2f4sb1VLgpzr1iVHTwu-kIxqSvI60p-6BuhQjH2wDNps3pMhOv1NbCvgOG3txsLNQkhKiC7rp7w_M.mp4", thumbnail: "/videos/SaveGram.App_AQN52egmInXxmEkQpqTyFORdBU2f4sb1VLgpzr1iVHTwu-kIxqSvI60p-6BuhQjH2wDNps3pMhOv1NbCvgOG3txsLNQkhKiC7rp7w_M.webp" },
  { id: 11, title: "Medicine Explainer", category: "Doctor Explainer", video: "/videos/SaveGram.App_AQNvzIpkdz7hs1qs1Kbmlk6iVnD77RFMAl2ryXODknJe6KYQ6DIqn29hPI-C-WDZ3G3lg_1d-j5W2H_UE7BHcEwNLHYYMD1X6-beSj8.mp4", thumbnail: "/videos/SaveGram.App_AQNvzIpkdz7hs1qs1Kbmlk6iVnD77RFMAl2ryXODknJe6KYQ6DIqn29hPI-C-WDZ3G3lg_1d-j5W2H_UE7BHcEwNLHYYMD1X6-beSj8.webp" },
  { id: 12, title: "Brand Story", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQO2lKpNYIAichb86UzJb_XkXt6w8Y3YxKu-vCvz4eARHwlfPpkFP-_nfiRtA5O8f953UKMuhBQDMjtdS2fFmVZrlqxVwZI7g1y8Xqs.mp4", thumbnail: "/videos/SaveGram.App_AQO2lKpNYIAichb86UzJb_XkXt6w8Y3YxKu-vCvz4eARHwlfPpkFP-_nfiRtA5O8f953UKMuhBQDMjtdS2fFmVZrlqxVwZI7g1y8Xqs.webp" },
  { id: 13, title: "Health Awareness", category: "Doctor Explainer", video: "/videos/SaveGram.App_AQOuOZszB7C96_r2QCzhU9qdcMPSRz_njgwbCHmY-DmEzpwfQJo0_LJ3-rZ4lXAoT5e1x8NpeWYC5hBVt9UhtfSK0Y1UB1Ck3pK64KQ.mp4", thumbnail: "/videos/SaveGram.App_AQOuOZszB7C96_r2QCzhU9qdcMPSRz_njgwbCHmY-DmEzpwfQJo0_LJ3-rZ4lXAoT5e1x8NpeWYC5hBVt9UhtfSK0Y1UB1Ck3pK64KQ.webp" },
  { id: 14, title: "Trending Reel", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQOxyPHDg9ZV6lyz5pCc5vQsz1_IFnAcYv4B0yP3dyFenvUeVskU-ozM5SRoiZ8znW3egYOS8M0kJUzLE-UQBXFQKLBB8JzIuj_r0hA.mp4", thumbnail: "/videos/SaveGram.App_AQOxyPHDg9ZV6lyz5pCc5vQsz1_IFnAcYv4B0yP3dyFenvUeVskU-ozM5SRoiZ8znW3egYOS8M0kJUzLE-UQBXFQKLBB8JzIuj_r0hA.webp" },
  { id: 15, title: "Lifestyle Vlog", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQOyKkEyNO6Y_TJCaqWtI9gB8AWufHRlndDlbDXqEUvN0V6UXpYvv9LdUrjeBGetdDT5iz4at7rDR8RK4M3TPxBLZriMBDJxM1LiwCE.mp4", thumbnail: "/videos/SaveGram.App_AQOyKkEyNO6Y_TJCaqWtI9gB8AWufHRlndDlbDXqEUvN0V6UXpYvv9LdUrjeBGetdDT5iz4at7rDR8RK4M3TPxBLZriMBDJxM1LiwCE.webp" },
  { id: 16, title: "Professional Reel", category: "B-Roll Hook", video: "/videos/SaveGram.App_AQOzp7xoBmNcs8wuFuDZhWnjzUzkMcgirff1I663TdPW-fZlinSSdpXKWV9jLEKg5kOIN9ZaBTEDBXFSJXvXPljEsJpBoOVEOR3D7C0.mp4", thumbnail: "/videos/SaveGram.App_AQOzp7xoBmNcs8wuFuDZhWnjzUzkMcgirff1I663TdPW-fZlinSSdpXKWV9jLEKg5kOIN9ZaBTEDBXFSJXvXPljEsJpBoOVEOR3D7C0.webp" },
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

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
               {videos.map((vid) => (
                 <div key={vid.id} className="group relative aspect-[9/16] overflow-hidden rounded-lg border border-gk-border bg-gk-secondary cursor-pointer">
                    {/* Thumbnail + Hover Video */}
                    <img 
                      src={vid.thumbnail} 
                      alt={vid.title} 
                      className="absolute inset-0 w-full h-full object-cover group-hover:opacity-0 transition-opacity duration-300"
                      loading="lazy"
                    />
                    <video
                      src={vid.video}
                      muted
                      loop
                      playsInline
                      preload="none"
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onMouseEnter={(e) => (e.target as HTMLVideoElement).play()}
                      onMouseLeave={(e) => { const v = e.target as HTMLVideoElement; v.pause(); v.currentTime = 0; }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 pointer-events-none" />

                    {/* Play Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center z-20 opacity-100 group-hover:opacity-0 transition-opacity pointer-events-none">
                       <div className="w-10 h-10 rounded-full bg-black/40 border border-white/30 flex items-center justify-center backdrop-blur-sm">
                          <Play size={16} className="text-white translate-x-0.5" />
                       </div>
                    </div>

                    <div className="absolute bottom-0 left-0 right-0 p-3 z-20 pointer-events-none">
                       <span className="text-[8px] font-mono text-gk-accent uppercase tracking-widest block mb-1">{vid.category}</span>
                       <h4 className="text-white font-bold text-xs leading-tight">{vid.title}</h4>
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
