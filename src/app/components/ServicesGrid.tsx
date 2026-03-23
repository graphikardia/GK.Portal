'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, Eye, MessageCircle, Globe, Code, Palette, Megaphone, Search, Video, Mail, Bot, TrendingUp, Rocket } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';
import { useRef } from 'react';

const serviceCategories = [
  {
    category: 'Digital Marketing',
    icon: Megaphone,
    color: 'from-crimson-500 to-red-600',
    services: [
      { title: 'Digital Marketing', desc: 'Comprehensive online strategy, analytics & performance marketing', icon: '◈' },
      { title: 'Creative Advertising', desc: 'Bold campaigns, visual storytelling & brand storytelling', icon: '◉' },
      { title: 'Email Marketing', desc: 'Newsletter funnels, automated sequences & list optimization', icon: '◆' },
    ]
  },
  {
    category: 'Website Development',
    icon: Code,
    color: 'from-crimson-600 to-red-700',
    services: [
      { title: 'Website Development', desc: 'Custom websites, Next.js & performance optimization', icon: '▣' },
      { title: 'Ecommerce Website', desc: 'Online stores, product catalogs & payment integration', icon: '▤' },
      { title: 'Wordpress Website', desc: 'CMS solutions, themes & plugin development', icon: '▥' },
      { title: 'Magento Website', desc: 'Enterprise e-commerce & scalable solutions', icon: '▦' },
      { title: 'Website Maintenance Service', desc: 'Updates, security patches & ongoing support', icon: '▧' },
    ]
  },
  {
    category: 'SEO Services',
    icon: Search,
    color: 'from-crimson-500 to-red-500',
    services: [
      { title: 'SEO Overview', desc: 'Complete search visibility audit & strategy', icon: '▶' },
      { title: 'Ecommerce SEO', desc: 'Product page optimization & category ranking', icon: '⚡' },
      { title: 'SEO Audit Services', desc: 'Technical analysis, backlink audits & recommendations', icon: '◈' },
      { title: 'AI SEO', desc: 'Machine learning optimization & predictive analytics', icon: '◉' },
      { title: 'Generative Engine Optimisation', desc: 'AI search optimization & featured snippets', icon: '◆' },
      { title: 'Google Penalty Removal', desc: 'Manual action recovery & algorithm penalty fix', icon: '▣' },
      { title: 'Local SEO', desc: 'Google Business optimization & local rankings', icon: '▤' },
      { title: 'Link Building', desc: 'High-authority backlinks & outreach campaigns', icon: '▥' },
      { title: 'Conversion Rate Optimization', desc: 'A/B testing, UX improvements & funnel optimization', icon: '▦' },
    ]
  },
  {
    category: 'Social Media Marketing',
    icon: MessageCircle,
    color: 'from-crimson-400 to-red-500',
    services: [
      { title: 'Social Media Marketing', desc: 'Multi-platform strategy & community management', icon: '◈' },
      { title: 'Facebook Marketing', desc: 'Ad campaigns, retargeting & audience engagement', icon: '◉' },
      { title: 'Linkedin Marketing', desc: 'B2B lead generation & professional branding', icon: '◆' },
      { title: 'Youtube Marketing', desc: 'Video SEO, thumbnail design & channel growth', icon: '▶' },
    ]
  },
  {
    category: 'Specialized Services',
    icon: Palette,
    color: 'from-crimson-500 to-crimson-600',
    services: [
      { title: 'Website Design', desc: 'UI/UX design, responsive layouts & visual identity', icon: '▣' },
      { title: 'AI Chatbots', desc: 'Intelligent chatbots, automation & customer support', icon: '⚡' },
    ]
  }
];

export function ServicesGrid() {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95]);

  return (
    <section ref={containerRef} className="py-40 px-6 relative overflow-hidden bg-crimson-950">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/3 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-crimson-600/20 to-red-700/10 blur-[150px]"
        />
        <motion.div 
          animate={{ 
            rotate: [0, -360],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-1/3 -right-1/4 w-[700px] h-[700px] rounded-full bg-gradient-to-br from-crimson-700/15 to-red-800/10 blur-[120px]"
        />
        
        {/* Animated geometric shapes */}
        <motion.div 
          animate={{ rotate: [0, 180, 360], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 right-1/4 w-32 h-32 border border-crimson-500/20 rounded-lg"
        />
        <motion.div 
          animate={{ rotate: [360, 180, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 left-1/4 w-24 h-24 border border-crimson-500/20 rounded-full"
        />
        
        {/* Grid pattern */}
        <div className={cn(
          "absolute inset-0 opacity-[0.02]",
          isDark 
            ? "bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)]" 
            : "bg-[linear-gradient(rgba(0,0,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.1)_1px,transparent_1px)]"
        )} style={{ backgroundSize: '40px 40px' }} />
      </div>

      <div className="max-w-[1800px] mx-auto relative z-10 text-white">
        {/* Header */}
        <motion.div style={{ y }} className="mb-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className={cn(
              "inline-flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-mono uppercase tracking-[0.3em]",
              isDark ? "bg-crimson-500/10 text-crimson-400 border border-crimson-500/20" : "bg-crimson-100 text-crimson-700"
            )}>
              <Sparkles size={12} />
              [What We Do]
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] md:text-[6vw] leading-[0.85] font-black uppercase italic tracking-tighter"
          >
            Services<span className="text-crimson-500">.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg font-mono opacity-50 max-w-xl mt-4"
          >
            Comprehensive digital solutions to elevate your brand and drive measurable growth.
          </motion.p>
        </motion.div>

        {/* Service Categories */}
        <div className="space-y-32">
          {serviceCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-150px" }}
              transition={{ duration: 0.8, delay: catIdx * 0.15 }}
            >
              {/* Category Header */}
              <motion.div 
                className="flex items-center gap-6 mb-12"
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -30 }}
              >
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={cn(
                    "w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg",
                    `bg-gradient-to-br ${cat.color}`
                  )}
                >
                  <cat.icon size={28} className="text-white" />
                </motion.div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic">{cat.category}</h3>
                  <div className={cn(
                    "flex-1 h-[1px] bg-gradient-to-r mt-2",
                    isDark ? "from-white/20 to-transparent" : "from-black/20 to-transparent",
                    cat.color.replace('from-', 'via-').split(' ')[0] + '/50'
                  )} style={{ maxWidth: '400px' }} />
                </div>
              </motion.div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {cat.services.map((s, i) => (
                  <ServiceCard 
                    key={s.title} 
                    service={s} 
                    index={i} 
                    color={cat.color}
                    isDark={isDark}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index, color, isDark }: { service: any; index: number; color: string; isDark: boolean }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ delay: index * 0.08, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl transition-all duration-500 cursor-pointer overflow-hidden",
        isDark 
          ? "bg-white/5 border border-white/5 hover:border-crimson-500/40 hover:shadow-[0_20px_60px_rgba(220,20,60,0.15)]" 
          : "bg-white border border-black/5 hover:shadow-2xl hover:border-crimson-200"
      )}
    >
      {/* Background gradient on hover */}
      <div className={cn(
        "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
        `bg-gradient-to-br ${color}`
      )} style={{ opacity: 0.03 }} />

      {/* Animated border */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        className={cn(
          "absolute bottom-0 left-0 right-0 h-1 origin-left",
          `bg-gradient-to-r ${color}`
        )}
      />

      <div className="relative z-10">
        {/* Icon with glow */}
        <motion.div
          whileHover={{ scale: 1.1, rotate: 10 }}
          className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all",
            isDark ? "bg-white/5 group-hover:bg-white/10" : "bg-zinc-100 group-hover:bg-crimson-100"
          )}
        >
          <span className={cn(
            "text-2xl group-hover:scale-110 transition-transform",
            isDark ? "text-crimson-400/70" : "text-crimson-500/50"
          )}>
            {service.icon}
          </span>
        </motion.div>

        <h4 className="text-lg font-black uppercase italic mb-3 group-hover:text-crimson-500 transition-colors tracking-tight">
          {service.title}
        </h4>
        <p className={cn(
          "text-xs font-mono leading-relaxed",
          isDark ? "opacity-50" : "opacity-60"
        )}>
          {service.desc}
        </p>
      </div>

      {/* Arrow indicator */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className={cn(
          "absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center",
          isDark ? "bg-white/5" : "bg-black/5"
        )}
      >
        <ArrowUpRight size={14} className="text-crimson-500" />
      </motion.div>
    </motion.div>
  );
}
