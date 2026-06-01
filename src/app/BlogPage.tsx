'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';

const blogPosts = [
  { id: 1, title: "RANK_ONE_2025: MASTERING_AEO_ARCHITECTURE", cat: "SEO_PROTOCOL", date: "15_MAR_2025", read: "08_MIN" },
  { id: 2, title: "VIRAL_MECHANICS: THE_NEURAL_RETAIN_LOOP", cat: "SOCIAL_CORE", date: "10_MAR_2025", read: "06_MIN" },
  { id: 3, title: "VISUAL_DOMINANCE: SCALING_IDENTITY_SYSTEMS", cat: "BRAND_TECH", date: "05_MAR_2025", read: "10_MIN" },
  { id: 4, title: "THUMBNAIL_PSYCHOLOGY_CTR_OPTIMIZATION", cat: "VIDEO_METRICS", date: "28_FEB_2025", read: "05_MIN" },
  { id: 5, title: "AI_MARKETING_HARDWARE_INTEGRATION_2025", cat: "AI_LOGISTICS", date: "20_FEB_2025", read: "07_MIN" },
  { id: 6, title: "ECOMMERCE_SCALING_STRUCTURAL_GROWTH", cat: "ECOM_NODES", date: "15_FEB_2025", read: "09_MIN" }
];

export default function BlogPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-500">

      <section className="pt-52 pb-32 px-6">
        <div className="max-w-[1800px] mx-auto">
          <header className="mb-24">
            <h1 className="text-6xl md:text-[140px] leading-[0.8] mb-12">
              INTEL_<br />
              <span className="text-stroke-white text-transparent opacity-80">STREAM</span>
            </h1>
            <p className="font-body text-xl md:text-2xl text-muted-foreground uppercase tracking-widest max-w-2xl leading-relaxed">
              RAW INTELLIGENCE ON ACQUISITION DYNAMICS AND DIGITAL WARFARE.
            </p>
          </header>

          {/* SEARCH BAR HUD */}
          <div className="mb-12 border-b border-foreground/10 pb-8 flex justify-between items-end gap-12">
            <div className="flex-1 flex items-center gap-4">
              <Search size={20} className="opacity-20" />
              <input type="text" placeholder="FILTER_INTEL_NODES" className="w-full bg-transparent outline-none font-mono text-xl uppercase tracking-widest placeholder:opacity-10" />
            </div>
            <div className="hidden lg:flex gap-10">
              {["ALL_LOGS", "SEO", "STRATEGY", "AI", "BRANDING"].map(f => (
                <button key={f} className="text-[10px] font-black uppercase tracking-[0.3em] opacity-30 hover:opacity-100 transition-opacity underline-offset-8 hover:underline">{f}</button>
              ))}
            </div>
          </div>

          {/* ARTICLE GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
            {blogPosts.map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group border border-foreground/5 p-12 hover:bg-foreground hover:text-background transition-all duration-700 cursor-pointer"
              >
                <div className="flex justify-between items-center mb-12">
                  <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-background/40">[{post.cat}]</span>
                  <div className="flex gap-4 text-[9px] font-mono opacity-30 group-hover:opacity-60">
                    <span>{post.date}</span>
                    <span>{post.read}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-black mb-8 leading-tight italic">{post.title}</h3>
                <div className="flex items-center gap-4 text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  ACCESS_PROTOCOL <ArrowUpRight size={14} />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
