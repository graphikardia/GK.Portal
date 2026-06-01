'use client';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "The Transition to AEO: Dominating AI Answer Engines",
    excerpt: "Traditional SEO is evolving. Here is how your brand can become the primary data source for Gemini, Perplexity, and SearchGPT.",
    date: "2026-01-20",
    cat: "STRATEGY",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Clinical Trust vs. Digital Scale: A Healthcare Paradox",
    excerpt: "Scaling patient acquisition without eroding clinical reputation requires a hardened digital infrastructure and precise narrative control.",
    date: "2026-01-15",
    cat: "HEALTHCARE",
    image: "https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "High-Fidelity Content: The New Market Barrier",
    excerpt: "As AI lowers the floor for content creation, high-fidelity human-directed narratives are becoming the only way to sustain market attention.",
    date: "2026-01-10",
    cat: "CONTENT",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <header className="mb-32">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gk-accent" />
                <span className="section-label text-gk-accent font-bold">Expertise_Logs_v2</span>
             </div>
             <h1 className="text-6xl md:text-[140px] leading-[0.8] font-black mb-12">
               INTEL_<span className="gradient-gold bg-clip-text">REPORTS</span>
             </h1>
             <p className="font-body text-xl md:text-2xl text-gk-text2 uppercase tracking-widest max-w-2xl leading-relaxed">
               STRATEGIC ANALYSIS ON ACQUISITION, RETENTION, AND SYSTEM SCALING.
             </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             {/* MAIN FEED */}
             <div className="lg:col-span-8 space-y-24">
                {posts.map((post, i) => (
                  <motion.article 
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="aspect-[21/9] relative mb-10 overflow-hidden border border-gk-border">
                       <img 
                         src={post.image} 
                         alt={post.title} 
                         className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-1000" 
                       />
                       <span className="absolute top-6 left-6 py-1 px-4 bg-gk-accent text-black text-[10px] font-mono font-black uppercase tracking-widest">{post.cat}</span>
                    </div>
                    <div className="space-y-6">
                       <div className="flex items-center gap-6 text-[10px] font-mono text-gk-text3 uppercase font-bold tracking-widest">
                          <span className="flex items-center gap-2"><Calendar size={12} className="text-gk-accent" /> {post.date}</span>
                          <span className="flex items-center gap-2"><User size={12} className="text-gk-accent" /> GK_ARCHITECT</span>
                       </div>
                       <h2 className="text-3xl md:text-5xl font-black group-hover:text-gk-accent transition-colors">
                          {post.title}
                       </h2>
                       <p className="text-gk-text2 text-lg leading-relaxed max-w-3xl">
                          {post.excerpt}
                       </p>
                       <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-4 text-gk-accent font-display font-extrabold text-[11px] uppercase tracking-widest group/link">
                          Read_Full_Intelligence <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform" />
                       </Link>
                    </div>
                  </motion.article>
                ))}
             </div>

             {/* SIDEBAR */}
             <aside className="lg:col-span-4 space-y-16">
                <div className="p-8 border border-gk-border bg-gk-secondary/30">
                   <h4 className="section-label mb-8">Search_Matrix</h4>
                   <div className="relative">
                      <input type="text" placeholder="QUERY_INTEL..." className="w-full bg-gk-bg border border-gk-border py-4 px-6 outline-none focus:border-gk-accent font-mono text-xs text-gk-text1 uppercase tracking-widest" />
                      <Search size={14} className="absolute top-1/2 right-6 -translate-y-1/2 text-gk-text3" />
                   </div>
                </div>

                <div className="p-8 border border-gk-border bg-gk-secondary/30">
                   <h4 className="section-label mb-8">Platform_Topics</h4>
                   <div className="flex flex-wrap gap-2">
                       {['AEO', 'SEO', 'CRO', 'ROAS', 'AI_AGENTS', 'MEDICAL', 'B2B'].map(tag => (
                         <button key={tag} className="px-4 py-2 border border-gk-border text-[9px] font-mono font-bold text-gk-text3 hover:text-gk-accent hover:border-gk-accent transition-all uppercase tracking-widest">
                            {tag}
                         </button>
                       ))}
                   </div>
                </div>

                <div className="p-8 bg-gk-accent text-black relative overflow-hidden group">
                   <div className="absolute top-0 right-0 p-8 opacity-10">
                      <Tag size={100} />
                   </div>
                   <h4 className="text-xl font-black mb-4 italic">FREE_SYSTEM_AUDIT</h4>
                   <p className="text-xs font-bold uppercase leading-relaxed mb-8 opacity-80">
                      We analyze your architectural leaks and growth bottlenecks. Direct architect contact.
                   </p>
                   <Link to="/contact" className="inline-flex py-4 px-8 border-2 border-black font-black text-xs uppercase tracking-widest hover:bg-black hover:text-gk-accent transition-all">
                      Initialize
                   </Link>
                </div>
             </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
