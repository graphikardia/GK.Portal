'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Quote, Star, ArrowRight, Sparkles, Zap, TrendingUp, Award, Users, Globe, MessageCircle } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

const reviews = [
  { 
    id: 1, 
    name: 'Sarah Chen', 
    role: 'CMO', 
    company: 'Aether Intel', 
    quote: "Graphikardia transformed our digital presence completely. The ROI was immediate and the strategy execution was flawless.",
    stat: "+140% ROI",
    rating: 5
  },
  { 
    id: 2, 
    name: 'Dr. Rajesh Kumar', 
    role: 'Director', 
    company: 'Altius Hospital', 
    quote: "Outstanding digital transformation. Patient inquiries increased by 150% within 3 months. True professionals who deliver.",
    stat: "150% Growth",
    rating: 5
  },
  { 
    id: 3, 
    name: 'Ananya Sharma', 
    role: 'Director', 
    company: 'KGI Admissions', 
    quote: "Our enrollment website became the primary conversion tool. Exceptional design and marketing strategy that worked.",
    stat: "3x Enrollments",
    rating: 5
  },
  { 
    id: 4, 
    name: 'Marcus Thorne', 
    role: 'Founder', 
    company: 'Pulse Media', 
    quote: "The editing is aggressive, clean, and impossible to scroll past. Elite-tier performance that exceeded all expectations.",
    stat: "2.4M Views",
    rating: 5
  },
  { 
    id: 5, 
    name: 'Elena Rossi', 
    role: 'Brand Lead', 
    company: 'Vanguard', 
    quote: "They don't just build sites; they build digital empires. Our conversion rates skyrocketed after working with them.",
    stat: "5.2x Leads",
    rating: 5
  },
  { 
    id: 6, 
    name: 'Vikram Mehta', 
    role: 'CEO', 
    company: 'TechStart Solutions', 
    quote: "Best agency we've worked with. They understood our vision and delivered beyond expectations. Highly recommended!",
    stat: "Top Rated",
    rating: 5
  },
];

const stats = [
  { icon: TrendingUp, value: '93%', label: 'Avg. Reach Increase', color: 'from-green-500 to-emerald-500' },
  { icon: Users, value: '500+', label: 'Clients Served', color: 'from-blue-500 to-cyan-500' },
  { icon: Award, value: '5+', label: 'Years Experience', color: 'from-purple-500 to-pink-500' },
  { icon: Star, value: '4.9', label: 'Average Rating', color: 'from-orange-500 to-yellow-500' },
];

export function TestimonialsSection() {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -30]);

  return (
    <section ref={containerRef} className={cn("py-40 px-6 relative overflow-hidden", isDark ? "bg-zinc-900/20" : "bg-zinc-50")}>
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-purple-600/20 to-pink-600/15 blur-[120px]"
        />
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-20, 20]) }}
          className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-blue-600/15 to-cyan-600/15 blur-[100px]"
        />
        
        {/* Animated shapes */}
        <motion.div 
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-24 h-24 border border-purple-500/10 rounded-lg"
        />
        <motion.div 
          animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-16 h-16 border border-pink-500/10 rounded-full"
        />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full mb-8"
          >
            <Sparkles size={14} className="text-purple-500" />
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-purple-500">[Client Success Stories]</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10vw] md:text-[5vw] leading-[0.85] font-black uppercase italic tracking-tighter"
          >
            Trusted by<span className="text-purple-500">_</span>
            <br />
            <span className="text-purple-500">Industry Leaders</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg font-mono opacity-50 max-w-xl mx-auto mt-6"
          >
            Join hundreds of satisfied clients who have transformed their digital presence with our expertise.
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={cn(
                "p-6 md:p-8 rounded-2xl text-center transition-all",
                isDark ? "bg-zinc-900/50 border border-white/5 hover:border-purple-500/30" : "bg-white border border-black/5 hover:shadow-lg hover:border-purple-200"
              )}
            >
              <div className={cn(
                "w-12 h-12 rounded-xl mx-auto mb-4 flex items-center justify-center",
                `bg-gradient-to-br ${stat.color}`
              )}>
                <stat.icon size={22} className="text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-black text-purple-500 mb-1">{stat.value}</div>
              <div className="text-[11px] font-mono uppercase tracking-wider opacity-60">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <ReviewCard key={r.id} review={r} index={i} isDark={isDark} />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest cursor-pointer"
          >
            <Link 
              to="/testimonials" 
              className={cn(
                "inline-flex items-center gap-3 px-10 py-5 rounded-2xl text-sm font-bold uppercase tracking-widest",
                isDark 
                  ? "bg-white text-black hover:bg-purple-500 hover:text-white" 
                  : "bg-black text-white hover:bg-purple-600"
              )}
            >
              View All Success Stories <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function ReviewCard({ review, index, isDark }: { review: any; index: number; isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.01 }}
      className={cn(
        "group relative p-8 rounded-2xl flex flex-col justify-between min-h-[300px] transition-all duration-500",
        isDark 
          ? 'bg-zinc-900/50 border border-white/5 hover:border-purple-500/30 hover:shadow-[0_20px_50px_rgba(168,85,247,0.15)]' 
          : 'bg-white border border-black/5 hover:shadow-xl hover:border-purple-200'
      )}
    >
      {/* Background glow on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none",
        isDark 
          ? "bg-gradient-to-br from-purple-500/5 to-pink-500/5" 
          : "bg-gradient-to-br from-purple-50 to-pink-50"
      )} />

      <div className="relative z-10">
        {/* Rating stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(review.rating)].map((_, i) => (
            <Star key={i} size={14} className="fill-orange-500 text-orange-500" />
          ))}
        </div>

        {/* Quote icon */}
        <Quote className="mb-4 opacity-15" size={28} />
        
        {/* Quote */}
        <p className="text-base font-medium leading-relaxed mb-6">"{review.quote}"</p>
      </div>
      
      {/* Author & Stat */}
      <div className="relative z-10 flex justify-between items-end">
        <div>
          <h4 className="font-bold text-lg mb-1 group-hover:text-purple-500 transition-colors">{review.name}</h4>
          <p className="text-[10px] font-mono uppercase tracking-widest opacity-60">{review.company} / {review.role}</p>
        </div>
        <motion.div
          whileHover={{ scale: 1.05 }}
          className={cn(
            "px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest rounded-full flex items-center gap-1",
            isDark ? 'bg-purple-500 text-white' : 'bg-purple-500 text-white'
          )}
        >
          {review.stat}
        </motion.div>
      </div>

      {/* Bottom accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 origin-left rounded-b-2xl"
      />
    </motion.article>
  );
}
