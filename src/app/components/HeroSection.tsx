'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, TrendingUp, Users, Zap, Award, Search, Code, Megaphone, Palette, Phone, Mail, MapPin, Star, Check, Cpu, Globe, Menu, X, ChevronRight } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';
import { useRef, useState } from 'react';

// Colors - Professional Crimson Orange + Black on White
const COLORS = {
  primary: '#DC143C', // Crimson
  primaryDark: '#B01030',
  dark: '#0a0a0a',
  gray: '#6B7280',
  lightGray: '#9CA3AF',
};

const stats = [
  { num: '150+', label: 'Projects Completed', icon: Target },
  { num: '40M+', label: 'Impressions Generated', icon: TrendingUp },
  { num: '5x', label: 'Average ROI', icon: Zap },
  { num: '95%', label: 'Client Retention', icon: Users },
];

const services = [
  { icon: Search, title: 'SEO Services', description: 'Dominate search rankings with proven SEO strategies. Technical audits to content optimization and link building.', features: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Local SEO'] },
  { icon: Megaphone, title: 'Social Media Marketing', description: 'Build engaged communities and drive meaningful interactions across all platforms.', features: ['Content Creation', 'Community Management', 'Paid Social', 'Analytics'] },
  { icon: Code, title: 'Website Design', description: 'High-performance websites that convert. Modern design meets technical excellence.', features: ['Custom Design', 'Responsive', 'E-commerce', 'WordPress'] },
  { icon: Palette, title: 'Performance Marketing', description: 'Data-driven campaigns that deliver measurable ROI. Precision targeting.', features: ['Google Ads', 'Meta Ads', 'Retargeting', 'Analytics'] },
  { icon: Cpu, title: 'AI Chatbots', description: 'Intelligent chatbots for websites that automate customer support 24/7.', features: ['Custom Training', 'Multi-platform', 'Lead Capture'] },
  { icon: Globe, title: 'Advertising', description: 'Creative campaigns that capture attention and drive conversions.', features: ['Creative Design', 'A/B Testing', 'ROI Tracking'] },
];

const caseStudies = [
  { title: 'Healthcare Digital Presence', client: 'Dr. Darshana Reddy', result: 'Complete website redesign with patient-focused UX', tags: ['Website Design', 'SEO'] },
  { title: 'Educational Institution Portal', client: 'Koshys Global Academia', result: 'Streamlined admissions portal with increased applications', tags: ['Website Design', 'Digital Marketing'] },
  { title: 'Brand Portfolio', client: 'Gokula K G', result: 'Professional portfolio showcasing creative work', tags: ['Brand Design', 'Website'] },
];

const testimonials = [
  { name: 'Dr. Darshana Reddy', role: 'Healthcare Professional', content: 'Graphikardia delivered a stunning website that perfectly represents our practice. Highly recommend!', rating: 5 },
  { name: 'KGI Admissions Team', role: 'Educational Institution', content: 'Professional service with excellent communication. Our new admissions portal has significantly improved inquiries.', rating: 5 },
  { name: 'Gokula K G', role: 'Creative Professional', content: 'Amazing portfolio website that showcases my work beautifully. Great attention to detail and design aesthetics.', rating: 5 },
];

const clients = ['Dr. Darshana Reddy', 'Koshys Global Academia', 'KGI', 'Graphikardia', 'Healthcare', 'Education'];

// Simple Logo Component
function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="text-2xl font-black text-[#DC143C]">G</span>
      <span className="text-2xl font-black text-[#0a0a0a]">K</span>
      <span className="text-2xl font-black text-[#DC143C]">.</span>
    </Link>
  );
}

// Navigation Component
export function Navigation({ cartCount = 0 }: { cartCount?: number }) {
  const { isDark } = useTheme();
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isDark ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10" : "bg-white/95 backdrop-blur-md border-b border-gray-100"
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Logo />

            <div className="hidden lg:flex items-center gap-8">
              <Link to="/services" className={cn("text-sm font-medium hover:text-[#DC143C] transition-colors", isDark ? "text-white/70" : "text-gray-600")}>Services</Link>
              <Link to="/work" className={cn("text-sm font-medium hover:text-[#DC143C] transition-colors", isDark ? "text-white/70" : "text-gray-600")}>Work</Link>
              <Link to="/about" className={cn("text-sm font-medium hover:text-[#DC143C] transition-colors", isDark ? "text-white/70" : "text-gray-600")}>About</Link>
              <Link to="/contact" className={cn("text-sm font-medium hover:text-[#DC143C] transition-colors", isDark ? "text-white/70" : "text-gray-600")}>Contact</Link>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <Link to="/contact" className="px-6 py-2.5 bg-[#DC143C] text-white text-sm font-semibold rounded-full hover:bg-[#B01030] transition-colors">
                Get Quote
              </Link>
            </div>

            <button onClick={() => setMobileMenu(true)} className={cn("lg:hidden p-2", isDark ? "text-white" : "text-gray-800")}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenu && (
        <div className="fixed inset-0 z-[200] bg-white lg:hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-12">
              <Logo />
              <button onClick={() => setMobileMenu(false)}><X size={24} /></button>
            </div>
            <div className="space-y-6">
              <Link to="/services" onClick={() => setMobileMenu(false)} className="block text-2xl font-semibold text-gray-800">Services</Link>
              <Link to="/work" onClick={() => setMobileMenu(false)} className="block text-2xl font-semibold text-gray-800">Work</Link>
              <Link to="/about" onClick={() => setMobileMenu(false)} className="block text-2xl font-semibold text-gray-800">About</Link>
              <Link to="/contact" onClick={() => setMobileMenu(false)} className="block text-2xl font-semibold text-gray-800">Contact</Link>
            </div>
            <div className="mt-12">
              <Link to="/contact" onClick={() => setMobileMenu(false)} className="block w-full py-4 text-center bg-[#DC143C] text-white font-semibold rounded-full">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

// Hero Section
export function HeroSection() {
  const { isDark } = useTheme();
  const heroRef = useRef(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={heroRef} className={cn("relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden", isDark ? "bg-[#0a0a0a]" : "bg-white")}>
      <div className={cn("absolute top-0 right-0 w-1/2 h-full", isDark ? "bg-gradient-to-l from-red-900/20 to-transparent" : "bg-gradient-to-l from-red-50 to-transparent")} />
      
      <motion.div style={{ y: y1, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="mb-6">
              <span className="inline-flex items-center gap-2 text-sm font-medium text-[#DC143C]">
                <Award size={16} />
                Digital Marketing Agency
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className={cn("text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6", isDark ? "text-white" : "text-[#0a0a0a]")}>
              We Build Digital
              <br />
              <span className="text-[#DC143C]">Experiences</span> That
              <br />
              Drive Results
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className={cn("text-lg max-w-lg mb-10", isDark ? "text-white/60" : "text-gray-600")}>
              Transform your brand with strategic digital marketing, stunning design, and cutting-edge development. We help ambitious businesses scale.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-wrap gap-4">
              <Link to="/contact" className="px-8 py-4 bg-[#DC143C] text-white text-sm font-semibold rounded-full hover:bg-[#B01030] transition-colors inline-flex items-center gap-2">
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/work" className="px-8 py-4 border-2 border-gray-300 text-[#0a0a0a] text-sm font-semibold rounded-full hover:border-[#DC143C] hover:text-[#DC143C] transition-colors">
                View Our Work
              </Link>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="flex items-center gap-8 mt-12">
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600">{i}</div>
                ))}
              </div>
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (<Star key={i} size={14} className="fill-[#DC143C] text-[#DC143C]" />))}
                </div>
                <p className="text-sm text-gray-500">Trusted by 50+ clients</p>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.6 }} className="hidden lg:flex items-center justify-center">
            <div className="relative w-[380px] h-[380px]">
              {/* Clean upward trending line graph */}
              <svg className="w-full h-full" viewBox="0 0 200 200">
                {/* Grid */}
                <line x1="30" y1="170" x2="170" y2="170" stroke={isDark ? "#fff" : "#DC143C"} strokeWidth="1" opacity={isDark ? "0.2" : "0.3"} />
                <line x1="30" y1="130" x2="170" y2="130" stroke={isDark ? "#fff" : "#DC143C"} strokeWidth="1" opacity="0.2" />
                <line x1="30" y1="90" x2="170" y2="90" stroke={isDark ? "#fff" : "#DC143C"} strokeWidth="1" opacity="0.2" />
                <line x1="30" y1="50" x2="170" y2="50" stroke={isDark ? "#fff" : "#DC143C"} strokeWidth="1" opacity="0.2" />
                <line x1="30" y1="170" x2="30" y2="50" stroke={isDark ? "#fff" : "#DC143C"} strokeWidth="1" opacity={isDark ? "0.2" : "0.3"} />
                
                {/* Area under the line */}
                <motion.path
                  d="M30 150 L60 130 L90 110 L120 80 L150 50 L180 30 L180 170 L30 170 Z"
                  fill="url(#areaGradient)"
                  animate={{ d: [
                    "M30 150 L60 130 L90 110 L120 80 L150 50 L180 30 L180 170 L30 170 Z",
                    "M30 145 L60 125 L90 105 L120 75 L150 45 L180 25 L180 170 L30 170 Z",
                    "M30 155 L60 135 L90 115 L120 85 L150 55 L180 35 L180 170 L30 170 Z",
                    "M30 150 L60 130 L90 110 L120 80 L150 50 L180 30 L180 170 L30 170 Z"
                  ]}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <defs>
                  <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#DC143C" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#DC143C" stopOpacity="0.05" />
                  </linearGradient>
                </defs>
                
                {/* Main trend line */}
                <motion.path
                  d="M30 150 L60 130 L90 110 L120 80 L150 50 L180 30"
                  fill="none"
                  stroke="#DC143C"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ d: [
                    "M30 150 L60 130 L90 110 L120 80 L150 50 L180 30",
                    "M30 145 L60 125 L90 105 L120 75 L150 45 L180 25",
                    "M30 155 L60 135 L90 115 L120 85 L150 55 L180 35",
                    "M30 150 L60 130 L90 110 L120 80 L150 50 L180 30"
                  ]}}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Data points */}
                {[
                  { cx: 30, cy: 150 },
                  { cx: 60, cy: 130 },
                  { cx: 90, cy: 110 },
                  { cx: 120, cy: 80 },
                  { cx: 150, cy: 50 },
                  { cx: 180, cy: 30 }
                ].map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.cx}
                    r="5"
                    fill={isDark ? "#0a0a0a" : "white"}
                    stroke="#DC143C"
                    strokeWidth="2"
                    animate={{ 
                      cy: [point.cy - (i * 4), point.cy - (i * 4) - 5, point.cy - (i * 4) + 5, point.cy - (i * 4)],
                      r: [4, 6, 4, 4]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i * 0.15 }}
                  />
                ))}
                
                {/* Arrow at end */}
                <motion.g
                  animate={{ x: [0, 3, 0], y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <path d="M178 28 L183 33 L180 33 L180 38 L176 38 L176 33 L173 33 Z" fill="#DC143C" />
                </motion.g>
              </svg>

              {/* Simple stat cards - clearly showing results */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className={cn("absolute -top-2 -right-2 px-4 py-2 rounded-xl shadow-lg border-l-4", isDark ? "bg-zinc-800" : "bg-white")}
              >
                <p className="text-xl font-bold text-[#DC143C]">150+</p>
                <p className={cn("text-xs", isDark ? "text-white/60" : "text-gray-500")}>Projects Completed</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className={cn("absolute -bottom-2 -right-2 px-4 py-2 rounded-xl shadow-lg border-l-4", isDark ? "bg-zinc-800" : "bg-white")}
              >
                <p className="text-xl font-bold text-[#DC143C]">40M+</p>
                <p className={cn("text-xs", isDark ? "text-white/60" : "text-gray-500")}>Impressions</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className={cn("absolute -bottom-2 -left-2 px-4 py-2 rounded-xl shadow-lg border-l-4", isDark ? "bg-zinc-800" : "bg-white")}
              >
                <p className="text-xl font-bold text-[#DC143C]">5x ROI</p>
                <p className={cn("text-xs", isDark ? "text-white/60" : "text-gray-500")}>Average Return</p>
              </motion.div>

              {/* GK Badge - Smaller, centered */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.03, 1],
                  boxShadow: [
                    '0 0 20px rgba(220, 20, 60, 0.4)',
                    '0 0 35px rgba(220, 20, 60, 0.6)',
                    '0 0 20px rgba(220, 20, 60, 0.4)'
                  ]
                }} 
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-[#DC143C] rounded-xl flex items-center justify-center shadow-xl z-10"
              >
                <span className="text-2xl font-black text-white">GK</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="flex flex-col items-center gap-2">
          <span className={cn("text-xs uppercase tracking-widest", isDark ? "text-white/40" : "text-gray-400")}>Scroll</span>
          <div className={cn("w-6 h-10 border-2 rounded-full flex items-start justify-center p-1", isDark ? "border-white/20" : "border-gray-300")}>
            <motion.div animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className={cn("w-1.5 h-3 rounded-full", isDark ? "bg-white/40" : "bg-gray-300")} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Stats Section
export function StatsSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn("py-16", isDark ? "bg-[#0a0a0a]" : "bg-[#DC143C]")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: i * 0.1 }} className="text-center">
              <div className={cn("text-4xl md:text-5xl font-bold mb-2", isDark ? "text-white" : "text-white")}>{stat.num}</div>
              <div className={cn("text-sm uppercase tracking-wide", isDark ? "text-gray-400" : "text-white/80")}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Services Section
export function ServicesSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn("py-20 lg:py-32", isDark ? "bg-[#0a0a0a]" : "bg-white")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <span className="text-sm font-medium text-[#DC143C] uppercase tracking-widest mb-4 block">What We Do</span>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-6", isDark ? "text-white" : "text-[#0a0a0a]")}>Our Services</h2>
          <p className={cn("text-lg max-w-2xl mx-auto", isDark ? "text-white/60" : "text-gray-600")}>Comprehensive digital solutions tailored to your unique business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.1 + i * 0.1 }} className={cn("group p-8 rounded-2xl transition-all duration-300", isDark ? "border border-white/10 hover:border-[#DC143C]/30 hover:shadow-xl hover:shadow-[#DC143C]/10" : "border border-gray-100 hover:border-[#DC143C]/30 hover:shadow-xl")}>
              <div className="w-14 h-14 rounded-xl bg-[#DC143C]/10 flex items-center justify-center mb-6 group-hover:bg-[#DC143C] transition-colors">
                <service.icon size={28} className="text-[#DC143C] group-hover:text-white transition-colors" />
              </div>
              <h3 className={cn("text-xl font-bold mb-3", isDark ? "text-white" : "text-[#0a0a0a]")}>{service.title}</h3>
              <p className={cn("text-sm mb-6 leading-relaxed", isDark ? "text-white/60" : "text-gray-600")}>{service.description}</p>
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (<span key={feature} className={cn("text-xs px-3 py-1 rounded-full", isDark ? "bg-white/10 text-white/70" : "bg-gray-100 text-gray-600")}>{feature}</span>))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Case Studies Section
export function CaseStudiesSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn("py-20 lg:py-32", isDark ? "bg-[#111]" : "bg-gray-50")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <span className="text-sm font-medium text-[#DC143C] uppercase tracking-widest mb-4 block">Our Work</span>
            <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold", isDark ? "text-white" : "text-[#0a0a0a]")}>Featured Projects</h2>
          </div>
          <Link to="/work" className="text-sm font-medium text-[#DC143C] flex items-center gap-2 hover:gap-4 transition-all">
            View All Projects <ChevronRight size={16} />
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {caseStudies.map((study, i) => (
            <motion.div key={study.title} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15 }} className={cn("group rounded-2xl overflow-hidden transition-all duration-300", isDark ? "border border-white/10 hover:shadow-xl hover:shadow-[#DC143C]/10" : "border border-gray-200 hover:shadow-xl")}>
              <div className={cn("h-48 flex items-center justify-center", isDark ? "bg-white/5" : "bg-gradient-to-br from-[#DC143C]/5 to-[#DC143C]/10")}>
                <span className={cn("text-7xl font-black", isDark ? "text-white/10" : "text-[#DC143C]/20")}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {study.tags.map((tag) => (<span key={tag} className="text-xs px-3 py-1 bg-[#DC143C]/10 text-[#DC143C] rounded-full">{tag}</span>))}
                </div>
                <h3 className={cn("text-xl font-bold mb-2", isDark ? "text-white" : "text-[#0a0a0a]")}>{study.title}</h3>
                <p className={cn("text-sm mb-4", isDark ? "text-white/60" : "text-gray-500")}>{study.client}</p>
                <p className={cn("text-sm font-medium", isDark ? "text-white" : "text-[#0a0a0a]")}>{study.result}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section
export function TestimonialsSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn("py-20 lg:py-32", isDark ? "bg-[#0a0a0a]" : "bg-white")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <span className="text-sm font-medium text-[#DC143C] uppercase tracking-widest mb-4 block">Testimonials</span>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold", isDark ? "text-white" : "text-[#0a0a0a]")}>What Our Clients Say</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div key={testimonial.name} initial={{ opacity: 0, y: 40 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.2 + i * 0.15 }} className={cn("p-8 rounded-2xl", isDark ? "border border-white/10" : "border border-gray-100")}>
              <div className="flex gap-1 mb-6">{[...Array(testimonial.rating)].map((_, j) => (<Star key={j} size={16} className="fill-[#DC143C] text-[#DC143C]" />))}</div>
              <p className={cn("text-base mb-6 leading-relaxed", isDark ? "text-white/60" : "text-gray-600")}>"{testimonial.content}"</p>
              <div>
                <p className={cn("font-bold", isDark ? "text-white" : "text-[#0a0a0a]")}>{testimonial.name}</p>
                <p className={cn("text-sm", isDark ? "text-white/40" : "text-gray-500")}>{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Clients Section
export function ClientsSection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn("py-16", isDark ? "border-t border-white/10" : "border-t border-gray-100")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} className="text-center">
          <p className={cn("text-sm font-medium uppercase tracking-widest mb-8", isDark ? "text-white/40" : "text-gray-400")}>Trusted by Leading Brands</p>
          <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
            {clients.map((client, i) => (
              <motion.div key={client} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ delay: 0.1 + i * 0.1 }} className={cn("text-lg font-bold transition-colors cursor-default", isDark ? "text-white/30 hover:text-[#DC143C]" : "text-gray-300 hover:text-[#DC143C]")}>
                {client}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// CTA Section
export function CTASection() {
  const { isDark } = useTheme();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className={cn("py-20 lg:py-32", isDark ? "bg-[#0a0a0a]" : "bg-[#DC143C]")}>
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}}>
          <h2 className={cn("text-3xl md:text-4xl lg:text-5xl font-bold mb-6", isDark ? "text-white" : "text-white")}>
            Ready to Transform Your
            <br />
            <span className="text-white">Digital Presence?</span>
          </h2>
          <p className={cn("text-lg mb-10 max-w-2xl mx-auto", isDark ? "text-gray-400" : "text-white/80")}>
            Let&apos;s discuss your project and create a strategy that drives real results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className={cn("px-8 py-4 text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-colors", isDark ? "bg-[#DC143C] text-white hover:bg-[#B01030]" : "bg-white text-[#DC143C] hover:bg-gray-100")}>
              Get Your Free Proposal <ArrowRight size={16} />
            </Link>
            <a href="tel:+917975594203" className={cn("px-8 py-4 border-2 text-sm font-semibold rounded-full inline-flex items-center justify-center gap-2 transition-colors", isDark ? "border-white/30 text-white hover:border-white hover:bg-white hover:text-[#0a0a0a]" : "border-white/30 text-white hover:border-white hover:bg-white hover:text-[#DC143C]")}>
              <Phone size={16} /> Call Us Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}