'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Plus, Check, ArrowRight, Sparkles, Zap, Target, Globe, Search, TrendingUp, MessageCircle, Palette, Bot, X, ShoppingBag, Mail, Phone } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

interface ProductVaultProps {
  onAdd: (item: any) => void;
  selectedIds: number[];
}

const categories = [
  { id: 'all', label: 'All Services', icon: Sparkles },
  { id: 'Marketing', label: 'Digital Marketing', icon: Zap },
  { id: 'Development', label: 'Web Development', icon: Globe },
  { id: 'SEO', label: 'SEO Services', icon: Search },
  { id: 'Social', label: 'Social Media', icon: MessageCircle },
  { id: 'Design', label: 'Design', icon: Palette },
  { id: 'AI', label: 'AI Solutions', icon: Bot },
];

const products = [
  { id: 1, title: "Digital Marketing", category: "Marketing", points: ["Comprehensive Online Strategy", "Analytics & Performance", "Multi-Channel Campaigns", "ROI Tracking"], icon: '◈', color: 'from-orange-500 to-red-500' },
  { id: 2, title: "Creative Advertising", category: "Marketing", points: ["Bold Campaigns", "Visual Storytelling", "Brand Narrative", "Creative Direction"], icon: '◉', color: 'from-orange-500 to-red-500' },
  { id: 3, title: "Email Marketing", category: "Marketing", points: ["Newsletter Funnels", "Automated Sequences", "List Optimization", "A/B Testing"], icon: '◆', color: 'from-orange-500 to-red-500' },
  { id: 4, title: "Website Development", category: "Development", points: ["Custom Websites", "Next.js Development", "Performance Optimization", "Responsive Design"], icon: '▣', color: 'from-blue-500 to-cyan-500' },
  { id: 5, title: "Ecommerce Website", category: "Development", points: ["Online Store Setup", "Product Catalogs", "Payment Integration", "Inventory Management"], icon: '▤', color: 'from-blue-500 to-cyan-500' },
  { id: 6, title: "Wordpress Website", category: "Development", points: ["CMS Solutions", "Custom Themes", "Plugin Development", "Maintenance"], icon: '▥', color: 'from-blue-500 to-cyan-500' },
  { id: 7, title: "Magento Website", category: "Development", points: ["Enterprise E-commerce", "Scalable Solutions", "Custom Features", "Integration"], icon: '▦', color: 'from-blue-500 to-cyan-500' },
  { id: 8, title: "Website Maintenance Service", category: "Development", points: ["Regular Updates", "Security Patches", "Performance Monitoring", "Technical Support"], icon: '▧', color: 'from-blue-500 to-cyan-500' },
  { id: 9, title: "SEO Overview", category: "SEO", points: ["Complete Audit", "Keyword Research", "Technical Optimization", "Content Strategy"], icon: '▶', color: 'from-green-500 to-emerald-500' },
  { id: 10, title: "Ecommerce SEO", category: "SEO", points: ["Product Page Optimization", "Category Rankings", "Schema Markup", "Search Visibility"], icon: '⚡', color: 'from-green-500 to-emerald-500' },
  { id: 11, title: "SEO Audit Services", category: "SEO", points: ["Technical Analysis", "Backlink Audits", "Recommendations", "Performance Review"], icon: '◈', color: 'from-green-500 to-emerald-500' },
  { id: 12, title: "AI SEO", category: "SEO", points: ["Machine Learning Optimization", "Predictive Analytics", "Automated Audits", "Smart Recommendations"], icon: '◉', color: 'from-green-500 to-emerald-500' },
  { id: 13, title: "Generative Engine Optimisation", category: "SEO", points: ["AI Search Optimization", "Featured Snippets", "SGE Optimization", "Content Generation"], icon: '◆', color: 'from-green-500 to-emerald-500' },
  { id: 14, title: "Google Penalty Removal", category: "SEO", points: ["Manual Action Recovery", "Algorithm Penalty Fix", "Disavow Files", "Recovery Strategy"], icon: '▣', color: 'from-green-500 to-emerald-500' },
  { id: 15, title: "Local SEO", category: "SEO", points: ["Google Business Optimization", "Local Rankings", "NAP Consistency", "Review Management"], icon: '▤', color: 'from-green-500 to-emerald-500' },
  { id: 16, title: "Link Building", category: "SEO", points: ["High-Authority Backlinks", "Outreach Campaigns", "Guest Posting", "Digital PR"], icon: '▥', color: 'from-green-500 to-emerald-500' },
  { id: 17, title: "Conversion Rate Optimization", category: "SEO", points: ["A/B Testing", "UX Improvements", "Funnel Optimization", "Analytics Setup"], icon: '▦', color: 'from-green-500 to-emerald-500' },
  { id: 18, title: "Social Media Marketing", category: "Social", points: ["Multi-Platform Strategy", "Content Creation", "Community Management", "Analytics"], icon: '◈', color: 'from-pink-500 to-rose-500' },
  { id: 19, title: "Facebook Marketing", category: "Social", points: ["Ad Campaigns", "Retargeting", "Audience Engagement", "Lead Generation"], icon: '◉', color: 'from-pink-500 to-rose-500' },
  { id: 20, title: "Linkedin Marketing", category: "Social", points: ["B2B Lead Generation", "Professional Branding", "Content Strategy", "Network Growth"], icon: '◆', color: 'from-pink-500 to-rose-500' },
  { id: 21, title: "Youtube Marketing", category: "Social", points: ["Video SEO", "Thumbnail Design", "Channel Growth", "Monetization"], icon: '▶', color: 'from-pink-500 to-rose-500' },
  { id: 22, title: "Website Design", category: "Design", points: ["UI/UX Design", "Responsive Layouts", "Visual Identity", "Prototyping"], icon: '▣', color: 'from-purple-500 to-violet-500' },
  { id: 23, title: "AI Chatbots", category: "AI", points: ["Intelligent Chatbots", "Automation", "Customer Support", "Integration"], icon: '⚡', color: 'from-violet-500 to-purple-500' },
];

export function ProductVault({ onAdd, selectedIds }: ProductVaultProps) {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [0, -30]);
  const isInView = useInView(containerRef, { once: true, amount: 0.1 });

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section ref={containerRef} className="py-40 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div style={{ y: bgY }} className="absolute inset-0">
        <div className={cn(
          "absolute inset-0 opacity-40",
          isDark 
            ? "bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.2),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.15),transparent_50%)]" 
            : "bg-[radial-gradient(circle_at_20%_30%,rgba(168,85,247,0.1),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.08),transparent_50%)]"
        )} />
        
        {/* Animated circles */}
        <motion.div 
          animate={{ scale: [1, 1.1, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className={cn(
            "absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-dashed",
            isDark ? "border-purple-500/20" : "border-purple-300/30"
          )}
        />
        <motion.div 
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className={cn(
            "absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full",
            isDark ? "border border-pink-500/15" : "border border-pink-300/20"
          )}
        />
      </motion.div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.3em] mb-6",
                isDark ? "bg-purple-500/10 text-purple-400" : "bg-purple-100 text-purple-700"
              )}>
                <Sparkles size={12} />
                [Build Your Strategy]
              </span>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10vw] md:text-[6vw] leading-[0.85] font-black uppercase italic tracking-tighter"
              >
                Choose Your<span className="text-purple-500">_</span>
                <br />
                <span className="text-purple-500">Services</span>
              </motion.h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <motion.button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all",
                    activeCategory === cat.id
                      ? "bg-purple-500 text-white shadow-lg shadow-purple-500/40"
                      : (isDark ? "bg-white/5 border border-white/10 hover:border-purple-500/30 hover:bg-white/10" : "bg-zinc-100 border border-black/5 hover:border-purple-300 hover:bg-purple-50")
                  )}
                >
                  <cat.icon size={12} />
                  {cat.label}
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Products Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {filteredProducts.map((p, index) => {
            const isSelected = selectedIds.includes(p.id);
            return (
              <ProductCard 
                key={p.id} 
                product={p} 
                index={index} 
                isSelected={isSelected}
                onAdd={onAdd}
                isDark={isDark}
              />
            );
          })}
        </motion.div>

        {/* Selection Summary */}
        {selectedIds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className={cn(
              "mt-12 p-6 md:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6",
              isDark ? "bg-purple-500/10 border border-purple-500/30" : "bg-purple-50 border border-purple-200"
            )}
          >
            <div className="flex items-center gap-4">
              <div className={cn(
                "w-14 h-14 rounded-2xl flex items-center justify-center",
                isDark ? "bg-purple-500/20" : "bg-purple-500"
              )}>
                <ShoppingBag size={24} className="text-purple-500" />
              </div>
              <div>
                <p className="text-xl font-black uppercase italic">{selectedIds.length} services selected</p>
                <p className="text-sm font-mono opacity-60">Build your custom growth strategy</p>
              </div>
            </div>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {}}
                className="px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-purple-600 shadow-lg shadow-purple-500/30"
              >
                Get Quote
              </motion.button>
              <Link 
                to="/contact"
                className={cn(
                  "px-8 py-4 border font-bold uppercase tracking-widest text-xs rounded-xl",
                  isDark ? "border-white/20 hover:bg-white/10" : "border-black/20 hover:bg-black/5"
                )}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

function ProductCard({ product, index, isSelected, onAdd, isDark }: { product: any; index: number; isSelected: boolean; onAdd: any; isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div 
      ref={ref}
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ delay: index * 0.03 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      className={cn(
        "group relative p-6 flex flex-col justify-between min-h-[320px] transition-all duration-500 overflow-hidden rounded-2xl cursor-pointer",
        isDark 
          ? "bg-zinc-900/50 border border-white/5 hover:border-purple-500/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.2)]" 
          : "bg-white border border-black/5 hover:shadow-xl hover:border-purple-200"
      )}
    >
      {/* Selection indicator */}
      {isSelected && (
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-4 right-4 z-20"
        >
          <div className="w-7 h-7 bg-green-500 rounded-full flex items-center justify-center">
            <Check size={14} className="text-white" />
          </div>
        </motion.div>
      )}

      {/* Background effect */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none",
        `bg-gradient-to-br ${product.color}`
      )} style={{ opacity: 0.04 }} />

      <div className="relative z-10">
        {/* Category badge */}
        <div className="flex items-center justify-between mb-4">
          <span className={cn(
            "font-mono text-[9px] uppercase tracking-[0.25em] px-2 py-1 rounded",
            isDark ? "bg-purple-500/15 text-purple-400" : "bg-purple-100 text-purple-600"
          )}>
            {product.category}
          </span>
        </div>
        
        {/* Icon */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          className="text-4xl mb-4 opacity-40 group-hover:opacity-60 transition-opacity"
        >
          {product.icon}
        </motion.div>

        {/* Title */}
        <h3 className="text-lg font-black uppercase italic mb-4 tracking-tighter leading-none group-hover:text-purple-500 transition-colors">
          {product.title}
        </h3>
        
        {/* Features */}
        <ul className="space-y-2 mb-6">
          {product.points.map((pt: string, i: number) => (
            <motion.li 
              key={pt}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 0.6, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-2 font-mono text-[10px] uppercase tracking-wide opacity-60"
            >
              <span className={cn(
                "w-1.5 h-1.5 rounded-full mt-1.5 shrink-0",
                isDark ? "bg-purple-500/50" : "bg-purple-400"
              )} />
              <span>{pt}</span>
            </motion.li>
          ))}
        </ul>
      </div>
      
      {/* Button */}
      <motion.button 
        onClick={() => onAdd(product)}
        disabled={isSelected}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "w-full py-3.5 rounded-xl uppercase font-black tracking-widest text-[10px] flex items-center justify-center gap-2 transition-all",
          isSelected 
            ? "bg-green-500 text-white" 
            : (isDark 
                ? "bg-white/5 border border-white/10 hover:bg-purple-500 hover:border-purple-500 hover:text-white" 
                : "bg-zinc-50 border border-black/5 hover:bg-purple-500 hover:text-white hover:border-purple-500"
              )
        )}
      >
        {isSelected ? <><Check size={14} /> Added</> : <><Plus size={14} /> Add to Plan</>}
      </motion.button>

      {/* Bottom accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1",
          `bg-gradient-to-r ${product.color}`
        )}
      />
    </motion.div>
  );
}
