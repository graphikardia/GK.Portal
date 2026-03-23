'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, TrendingUp, Users, Eye, MessageCircle, Target, Globe, Award, Calendar, MapPin, Phone, Mail, Stethoscope, GraduationCap, ShoppingCart, Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const caseStudies = [
  {
    id: 1,
    client: "Dr. Darshana Reddy",
    website: "drdarshanareddy.com",
    category: "Healthcare Website",
    description: "Comprehensive medical website for a Senior Consultant Internal Medicine & Diabetologist with 16+ years experience. Features appointment booking, patient testimonials, service listings, and local SEO optimization.",
    challenge: "Needed to establish strong online presence in competitive Bangalore healthcare market. Required appointment booking system and patient trust building.",
    solution: "Built conversion-focused website with appointment forms, detailed service pages, and rich SEO content. Implemented JSON-LD structured data for medical professional.",
    results: [
      "95% increase in patient inquiries",
      "Top 3 Google rankings for diabetes & thyroid keywords",
      "150+ appointments booked monthly",
      "Featured in Google Knowledge Panel"
    ],
    metrics: [
      { icon: TrendingUp, value: "95%", label: "Inquiry Increase" },
      { icon: Users, value: "150+", label: "Monthly Appointments" },
      { icon: Globe, value: "Top 3", label: "Search Ranking" }
    ],
    services: ["Website Development", "Local SEO", "Google My Business", "Appointment System"],
    color: "from-green-500 to-emerald-600",
    year: "2024"
  },
  {
    id: 2,
    client: "Koshys Group of Institutions",
    website: "admissions.kgi.edu.in",
    category: "Educational Portal",
    description: "Dynamic admissions portal for a premier educational institution in Bangalore. Features course listings, inquiry forms, campus information, and integrated enrollment system.",
    challenge: "Required modern, mobile-responsive portal that streamlines the admission process and converts visitors into enrolled students.",
    solution: "Created engaging admissions portal with course comparison, virtual campus tour, instant inquiry forms, and automated follow-up system.",
    results: [
      "3x increase in enrollment inquiries",
      "50% reduction in admission process time",
      "Mobile traffic increased by 120%",
      "Successful placement of 500+ students annually"
    ],
    metrics: [
      { icon: TrendingUp, value: "3x", label: "Inquiry Growth" },
      { icon: GraduationCap, value: "500+", label: "Students Placed" },
      { icon: Target, value: "50%", label: "Process Time Reduced" }
    ],
    services: ["Website Development", "UX Design", "Lead Generation", "SEO"],
    color: "from-blue-500 to-cyan-600",
    year: "2024"
  },
  {
    id: 3,
    client: "Koshys Global Academia",
    website: "admissions.koshysglobalacademia.com",
    category: "Eductional Website",
    description: "Professional admission website for global academia with comprehensive program listings, faculty details, and inquiry management system.",
    challenge: "Needed distinct online identity for KGA while maintaining brand consistency with KGI. Required advanced inquiry tracking.",
    solution: "Developed modern educational portal with program finder, scholarship calculator, and CRM-integrated inquiry system.",
    results: [
      "40% increase in application submissions",
      "200% growth in international student queries",
      "Streamlined admission workflow",
      "Enhanced brand recognition"
    ],
    metrics: [
      { icon: TrendingUp, value: "40%", label: "Applications Up" },
      { icon: Users, value: "200%", label: "Intl. Queries" },
      { icon: Globe, value: "Global", label: "Reach Expansion" }
    ],
    services: ["Web Development", "CRM Integration", "Brand Identity", "Digital Marketing"],
    color: "from-purple-500 to-pink-600",
    year: "2024"
  },
  {
    id: 4,
    client: "Geetha Gokula Portfolio",
    website: "gokula.graphikardia.com",
    category: "Personal Portfolio",
    description: "Award-winning portfolio website for Creative Lead & Digital Marketing Expert. Features case studies, services showcase, and contact integration.",
    challenge: "Needed to showcase diverse skills and attract high-ticket clients. Required unique design that stands out in saturated market.",
    solution: "Built distinctive portfolio with smooth animations, detailed case studies, service breakdowns, and optimized for conversions.",
    results: [
      "93% increase in account reach (client work)",
      "212% profile activity surge",
      "YUVA Summit India Winner recognition",
      "40% increase in unique reach (personal)"
    ],
    metrics: [
      { icon: Eye, value: "93%", label: "Reach Increase" },
      { icon: Star, value: "5★", label: "Client Rating" },
      { icon: Award, value: "Winner", label: "YUVA Summit" }
    ],
    services: ["Portfolio Design", "SEO", "Content Strategy", "Social Media"],
    color: "from-orange-500 to-red-600",
    year: "2024"
  },
  {
    id: 5,
    client: "Graphikardia Agency",
    website: "graphikardia.com",
    category: "Agency Website",
    description: "High-impact agency website showcasing digital marketing, web development, and creative services. Features service vault, case studies, and quote request system.",
    challenge: "Required bold, distinctive presence that communicates premium services and converts leads without feeling salesy.",
    solution: "Created brutalist-inspired design with interactive service selection, animated case studies, and seamless quote workflow.",
    results: [
      "200% increase in lead generation",
      "40% unique reach improvement",
      "A+ design rating from clients",
      "95% client retention rate"
    ],
    metrics: [
      { icon: TrendingUp, value: "200%", label: "Lead Generation" },
      { icon: Target, value: "A+", label: "Design Rating" },
      { icon: Heart, value: "95%", label: "Client Retention" }
    ],
    services: ["Web Development", "Branding", "SEO", "Digital Strategy"],
    color: "from-pink-500 to-rose-600",
    year: "2024"
  },
  {
    id: 6,
    client: "GK Portfolio",
    website: "gk.graphikardia.com",
    category: "Professional Portfolio",
    description: "Detailed portfolio showcasing digital marketing expertise with services, achievements, and contact information. Optimized for local and international clients.",
    challenge: "Needed comprehensive showcase of skills with SEO optimization for voice search and featured snippets.",
    solution: "Built SEO-optimized portfolio with FAQ schema, speakable content, and multi-channel contact options.",
    results: [
      "Top rankings for digital marketing keywords",
      "Voice search optimization achieved",
      "Increased international client inquiries",
      "Featured in multiple LinkedIn directories"
    ],
    metrics: [
      { icon: Globe, value: "Global", label: "Client Base" },
      { icon: TrendingUp, value: "Top 10", label: "Keyword Rank" },
      { icon: Users, value: "50+", label: "Monthly Leads" }
    ],
    services: ["Portfolio Design", "SEO", "Schema Markup", "Content Strategy"],
    color: "from-indigo-500 to-violet-600",
    year: "2024"
  }
];

export default function CaseStudiesPage() {
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
          <div className="mb-20">
            <Link to="/" className="text-xs font-mono uppercase tracking-widest opacity-50 hover:opacity-100 flex items-center gap-2 mb-8">
              <ArrowUpRight className="rotate-180" size={14} /> Back to Hub
            </Link>
            <h1 className="text-[8vw] md:text-[5vw] leading-[0.9] font-black uppercase italic tracking-tighter">
              Case Studies<span className="text-purple-500">.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 mt-4">Proven Results • Real Impact</p>
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-24">
            {caseStudies.map((study, idx) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={cn(
                  "grid grid-cols-1 lg:grid-cols-12 gap-8 p-8 lg:p-12 rounded-3xl",
                  isDark ? "bg-zinc-900/30 border border-white/5" : "bg-zinc-50"
                )}
              >
                {/* Left - Info */}
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple-500">
                      [{study.category}]
                    </span>
                    <span className={cn(
                      "text-[10px] font-mono px-2 py-1 rounded",
                      isDark ? "bg-white/10" : "bg-zinc-200"
                    )}>
                      {study.year}
                    </span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black uppercase italic mb-2">{study.client}</h3>
                  <a 
                    href={`https://${study.website}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm font-mono text-purple-500 hover:text-purple-400 flex items-center gap-2 mb-4"
                  >
                    {study.website} <ArrowUpRight size={12} />
                  </a>
                  
                  <p className="text-lg opacity-70 mb-6 leading-relaxed">{study.description}</p>

                  {/* Challenge & Solution */}
                  <div className="space-y-4 mb-6">
                    <div className={cn(
                      "p-4 rounded-xl",
                      isDark ? "bg-red-500/10 border border-red-500/20" : "bg-red-50"
                    )}>
                      <h4 className="text-xs font-bold uppercase text-red-500 mb-2">Challenge</h4>
                      <p className="text-sm opacity-70">{study.challenge}</p>
                    </div>
                    <div className={cn(
                      "p-4 rounded-xl",
                      isDark ? "bg-green-500/10 border border-green-500/20" : "bg-green-50"
                    )}>
                      <h4 className="text-xs font-bold uppercase text-green-500 mb-2">Solution</h4>
                      <p className="text-sm opacity-70">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-xs font-bold uppercase mb-3">Key Results</h4>
                    <ul className="space-y-2">
                      {study.results.map((result, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0" />
                          <span className="opacity-70">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service, i) => (
                      <span key={i} className={cn(
                        "px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-wider",
                        isDark ? "bg-white/10" : "bg-zinc-200"
                      )}>
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right - Metrics */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {study.metrics.map((metric, i) => (
                      <motion.div 
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className={cn(
                          "p-6 rounded-2xl text-center relative overflow-hidden",
                          isDark ? "bg-black/50" : "bg-white"
                        )}
                      >
                        <div className={cn(
                          "absolute inset-0 opacity-10 bg-gradient-to-br",
                          study.color
                        )} />
                        <metric.icon size={24} className="mx-auto mb-3 text-purple-500" />
                        <div className="text-3xl font-black mb-1 relative">{metric.value}</div>
                        <div className="text-[10px] font-mono uppercase tracking-wider opacity-60 relative">{metric.label}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Website Preview Placeholder */}
                  <div className={cn(
                    "rounded-2xl p-8 text-center",
                    isDark ? "bg-black/30 border border-white/10" : "bg-white border border-black/5"
                  )}>
                    <Globe size={48} className="mx-auto mb-4 opacity-30" />
                    <p className="text-sm font-mono opacity-60 mb-4">Live Website</p>
                    <a 
                      href={`https://${study.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-widest",
                        isDark ? "bg-purple-500 hover:bg-purple-600" : "bg-purple-500 hover:bg-purple-600 text-white"
                      )}
                    >
                      Visit Website <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24"
          >
            <h3 className="text-2xl font-black uppercase italic mb-8 text-center">Impact at a Glance</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { value: "6+", label: "Websites Delivered" },
                { value: "200%", label: "Avg. Lead Increase" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "5+", label: "Years Experience" }
              ].map((stat, i) => (
                <div key={i} className={cn(
                  "p-8 rounded-2xl text-center",
                  isDark ? "bg-zinc-900/50 border border-white/10" : "bg-zinc-100"
                )}>
                  <div className="text-4xl font-black text-purple-500 mb-2">{stat.value}</div>
                  <div className="text-xs font-mono uppercase tracking-wider opacity-60">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
