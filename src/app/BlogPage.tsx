'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Search, Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const blogPosts = [
  {
    id: 1,
    title: "How to Rank #1 on Google in 2025: Complete SEO Strategy",
    excerpt: "Discover the latest SEO techniques that actually work. From AI-powered content optimization to semantic search mastery.",
    category: "SEO",
    date: "March 15, 2025",
    readTime: "8 min read",
    image: "/blog1.jpg"
  },
  {
    id: 2,
    title: "Viral Reels: The Science Behind 10M+ Views",
    excerpt: "Learn the secrets of viral content creation. Hook formulas, retention techniques, and algorithm hacks revealed.",
    category: "Social Media",
    date: "March 10, 2025",
    readTime: "6 min read",
    image: "/blog2.jpg"
  },
  {
    id: 3,
    title: "Brand Identity Design: From Logo to Visual System",
    excerpt: "A comprehensive guide to building a brand that scales. Color psychology, typography, and brand guidelines.",
    category: "Branding",
    date: "March 5, 2025",
    readTime: "10 min read",
    image: "/blog3.jpg"
  },
  {
    id: 4,
    title: "YouTube SEO: Thumbnail Formulas That Convert",
    excerpt: "The psychology of click-worthy thumbnails. A/B testing results and CTR optimization strategies.",
    category: "Video Marketing",
    date: "February 28, 2025",
    readTime: "5 min read",
    image: "/blog4.jpg"
  },
  {
    id: 5,
    title: "AI in Digital Marketing: Tools & Strategies for 2025",
    excerpt: "How to leverage AI for content creation, ad optimization, and customer engagement. Practical implementation guide.",
    category: "Digital Marketing",
    date: "February 20, 2025",
    readTime: "7 min read",
    image: "/blog5.jpg"
  },
  {
    id: 6,
    title: "Ecommerce SEO: Product Page Optimization Guide",
    excerpt: "Maximize your online store visibility. Schema markup, category pages, and conversion-optimized content.",
    category: "Ecommerce",
    date: "February 15, 2025",
    readTime: "9 min read",
    image: "/blog6.jpg"
  }
];

const categories = ["All", "SEO", "Social Media", "Branding", "Video Marketing", "Digital Marketing", "Ecommerce"];

export default function BlogPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen" onMouseDown={() => {}} onMouseUp={() => {}}>
      <Navigation cartCount={0} openSidebar={() => {}} />
      
      <section className={cn(
        "pt-32 pb-20 px-6 min-h-screen",
        isDark ? "bg-[#050505]" : "bg-white"
      )}>
        <div className="max-w-[1800px] mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Link to="/" className="text-xs font-mono uppercase tracking-widest opacity-50 hover:opacity-100 flex items-center gap-2 mb-8">
              <ArrowUpRight className="rotate-180" size={14} /> Back to Hub
            </Link>
            <h1 className="text-[8vw] md:text-[5vw] leading-[0.9] font-black uppercase italic tracking-tighter">
              Blog<span className="text-purple-500">.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 mt-4">Insights & Strategies</p>
          </div>

          {/* Search & Categories */}
          <div className="mb-12 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((cat, i) => (
                <button key={i} className={cn(
                  "px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all",
                  i === 0 
                    ? "bg-purple-500 text-white" 
                    : (isDark ? "bg-white/10 hover:bg-white/20" : "bg-zinc-100 hover:bg-zinc-200")
                )}>
                  {cat}
                </button>
              ))}
            </div>
            
            <div className={cn(
              "flex items-center gap-2 px-4 py-3 rounded-xl w-full md:w-80",
              isDark ? "bg-zinc-900 border border-white/10" : "bg-zinc-50 border border-black/5"
            )}>
              <Search size={16} className="opacity-50" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="bg-transparent outline-none text-sm w-full placeholder:opacity-50"
              />
            </div>
          </div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={cn(
              "mb-12 p-8 md:p-12 rounded-3xl overflow-hidden relative",
              isDark ? "bg-zinc-900 border border-white/10" : "bg-zinc-100"
            )}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-transparent" />
            <div className="relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 rounded-full bg-purple-500 text-white text-[10px] font-mono uppercase tracking-wider mb-4">
                Featured
              </span>
              <h2 className="text-3xl md:text-4xl font-black uppercase italic mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="text-lg opacity-70 mb-6">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 text-sm font-mono opacity-60 mb-6">
                <span className="flex items-center gap-2"><Calendar size={14} /> {blogPosts[0].date}</span>
                <span className="flex items-center gap-2"><Clock size={14} /> {blogPosts[0].readTime}</span>
              </div>
              <button className="flex items-center gap-2 text-purple-500 font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                Read Article <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className={cn(
                  "group p-6 rounded-2xl cursor-pointer transition-all hover:-translate-y-2",
                  isDark ? "bg-zinc-900/30 border border-white/5 hover:border-purple-500/30" : "bg-zinc-50 hover:shadow-xl"
                )}
              >
                <span className="font-mono text-[10px] uppercase tracking-wider text-purple-500 mb-3 block">
                  {post.category}
                </span>
                <h3 className="text-xl font-black uppercase italic mb-3 group-hover:text-purple-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm opacity-60 mb-4 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs font-mono opacity-50">
                  <span className="flex items-center gap-2"><Calendar size={12} /> {post.date}</span>
                  <span className="flex items-center gap-2"><Clock size={12} /> {post.readTime}</span>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className={cn(
              "mt-24 p-12 rounded-3xl text-center",
              isDark ? "bg-gradient-to-br from-purple-900/40 to-purple-950/40 border border-purple-500/20" : "bg-purple-50"
            )}
          >
            <h3 className="text-3xl font-black uppercase italic mb-4">Stay Ahead</h3>
            <p className="text-lg opacity-70 mb-8 max-w-xl mx-auto">Get weekly insights on digital marketing, SEO, and growth strategies delivered to your inbox.</p>
            <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className={cn(
                  "flex-1 px-6 py-4 rounded-xl outline-none text-sm",
                  isDark ? "bg-black/50 border border-white/10" : "bg-white border border-black/10"
                )}
              />
              <button className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-wider rounded-xl hover:bg-purple-600 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
