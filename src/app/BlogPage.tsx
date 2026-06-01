'use client';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Tag, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 1,
    title: "The Transition from SEO to AEO Architecture",
    excerpt: "Understanding how AI Answer Engines are replacing traditional search results and what it means for high-ticket brands.",
    date: "May 24, 2026",
    cat: "STRATEGY",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Hardening Digital Infrastructure for Scale",
    excerpt: "Why typical WordPress setups fail for medical clinics and the move toward headless performance systems.",
    date: "Jun 02, 2026",
    cat: "INFRASTRUCTURE",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  }
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Expertise Logs</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Strategic <span className="gradient-gold">Intel.</span>
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-2xl mx-auto font-body">
              Deep dives into the technical and tactical frameworks that drive performance in the modern digital economy.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-52 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
            {posts.map((post, i) => (
              <div key={post.id} className="group relative">
                <div className="aspect-video overflow-hidden border border-gk-border mb-10 bg-gk-secondary">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover grayscale brightness-50 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-mono text-gk-accent font-bold uppercase tracking-widest">{post.cat}</span>
                    <div className="flex items-center gap-2 text-gk-text3 text-[10px] font-mono uppercase tracking-widest">
                       <Clock size={12} /> {post.date}
                    </div>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold group-hover:text-gk-accent transition-colors">
                     {post.title}
                  </h2>
                  <p className="text-gk-text2 text-lg leading-relaxed font-body">
                     {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="inline-flex items-center gap-3 text-white font-bold text-xs uppercase tracking-widest hover:text-gk-accent transition-colors pt-4">
                     Read Intelligence Report <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-40 px-6 bg-gk-secondary/30 border-t border-gk-border">
         <div className="container-custom text-center">
            <h3 className="section-label mb-8">Newsletter_Sync</h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-12 italic">Join the Performance Network</h2>
            <div className="max-w-xl mx-auto flex gap-4">
               <input 
                  type="email" 
                  placeholder="communication@node.com" 
                  className="flex-1 bg-transparent border-b border-white/20 py-4 outline-none focus:border-gk-accent transition-colors"
               />
               <button className="px-10 py-4 bg-gk-accent text-black font-bold text-[10px] uppercase tracking-widest">Subscribe</button>
            </div>
         </div>
      </section>
    </div>
  );
}
