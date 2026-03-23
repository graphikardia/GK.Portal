'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Users, Target, TrendingUp, Zap, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';
import { Navigation } from './components/Navigation';

const agency = {
  tagline: "We are a creative digital marketing agency that transforms brands through strategic design, performance marketing, and cutting-edge digital solutions.",
  description: "Graphikardia is a results-driven digital marketing agency specializing in SEO, social media marketing, website design, performance advertising, and AI-powered chatbot solutions.",
  email: "graphikardia@gmail.com",
  phone: "+91 7975594203",
  location: "Bangalore, Karnataka, India",
  founded: "2023",
};

const stats = [
  { num: "50+", label: "Projects Delivered", icon: Target },
  { num: "30M+", label: "Impressions Generated", icon: TrendingUp },
  { num: "5x", label: "Average ROI", icon: Zap },
  { num: "95%", label: "Client Satisfaction", icon: Users },
];

const whyChooseUs = [
  { title: "Results-Driven Approach", description: "Every strategy we create is focused on delivering measurable outcomes - leads, sales, and brand growth." },
  { title: "Creative Excellence", description: "We blend creativity with data to craft campaigns that capture attention and drive conversions." },
  { title: "Transparent Communication", description: "Regular updates, clear reporting, and open communication at every step of the journey." },
  { title: "Industry Expertise", description: "Deep experience across healthcare, education, e-commerce, and B2B sectors." },
];

const services = [
  "SEO Services",
  "Social Media Marketing", 
  "Website Design & Development",
  "Performance Marketing",
  "AI Chatbots",
  "Advertising Campaigns"
];

const process = [
  { step: "01", title: "Discovery", description: "We analyze your business, audience, and goals to understand your unique needs." },
  { step: "02", title: "Strategy", description: "We develop a customized digital strategy aligned with your objectives and budget." },
  { step: "03", title: "Execution", description: "Our team implements the strategy with precision, creativity, and attention to detail." },
  { step: "04", title: "Optimization", description: "We continuously monitor, analyze, and refine for maximum performance." },
];

const clients = ["Healthcare Providers", "Educational Institutions", "E-commerce Brands", "B2B Companies", "Startups", "Local Businesses"];

export default function AboutPage() {
  const { isDark } = useTheme();

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className={cn("pt-32 pb-20 px-6", isDark ? "bg-[#0a0a0a] text-white" : "bg-white text-black")}>
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <Link to="/" className={cn("text-sm font-medium uppercase tracking-widest flex items-center gap-2 mb-8", isDark ? "text-white/50 hover:text-white" : "text-black/50 hover:text-black")}>
              <ArrowUpRight className="rotate-180" size={14} /> Back to Home
            </Link>
            <h1 className={cn("text-4xl md:text-5xl lg:text-6xl font-bold mb-6", isDark ? "text-white" : "text-black")}>
              About <span className={isDark ? "text-white/70" : "text-black/70"}>Graphikardia</span>
            </h1>
            <p className={cn("text-lg md:text-xl max-w-3xl leading-relaxed", isDark ? "text-white/60" : "text-black/60")}>
              {agency.tagline}
            </p>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {stats.map((stat) => (
              <div key={stat.label} className={cn("p-8 text-center border", isDark ? "bg-[#111111] border-white/10" : "bg-gray-50 border-black/10")}>
                <div className={cn("text-4xl md:text-5xl font-bold mb-2", isDark ? "text-white" : "text-black")}>{stat.num}</div>
                <div className={cn("text-sm uppercase tracking-wide", isDark ? "text-white/50" : "text-black/50")}>{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className={cn("text-2xl md:text-3xl font-bold mb-6", isDark ? "text-white" : "text-black")}>Who We Are</h2>
              <p className={cn("text-base leading-relaxed mb-6", isDark ? "text-white/70" : "text-black/70")}>{agency.description}</p>
              <p className={cn("text-base leading-relaxed", isDark ? "text-white/70" : "text-black/70")}>Founded in {agency.founded}, we've helped businesses across India establish powerful digital presences that drive real results.</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className={cn("text-2xl md:text-3xl font-bold mb-6", isDark ? "text-white" : "text-black")}>Our Services</h2>
              <div className="space-y-4">
                {services.map((service, i) => (
                  <div key={i} className={cn("flex items-center gap-4 p-4 border", isDark ? "bg-[#111111] border-white/10" : "bg-gray-50 border-black/10")}>
                    <CheckCircle size={20} className={isDark ? "text-white" : "text-black"} />
                    <span className={cn("font-medium", isDark ? "text-white" : "text-black")}>{service}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20">
            <h2 className={cn("text-2xl md:text-3xl font-bold mb-8 text-center", isDark ? "text-white" : "text-black")}>Why Choose Graphikardia?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, i) => (
                <div key={i} className={cn("p-8 border", isDark ? "bg-[#111111] border-white/10" : "bg-gray-50 border-black/10")}>
                  <h3 className={cn("text-xl font-bold mb-3", isDark ? "text-white" : "text-black")}>{item.title}</h3>
                  <p className={cn("text-sm leading-relaxed", isDark ? "text-white/60" : "text-black/60")}>{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20">
            <h2 className={cn("text-2xl md:text-3xl font-bold mb-8 text-center", isDark ? "text-white" : "text-black")}>Our Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {process.map((item) => (
                <div key={item.step} className={cn("p-6 text-center border", isDark ? "bg-[#111111] border-white/10" : "bg-gray-50 border-black/10")}>
                  <div className={cn("text-4xl font-bold mb-4", isDark ? "text-white/20" : "text-black/20")}>{item.step}</div>
                  <h3 className={cn("text-lg font-bold mb-2", isDark ? "text-white" : "text-black")}>{item.title}</h3>
                  <p className={cn("text-sm", isDark ? "text-white/60" : "text-black/60")}>{item.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="mb-20">
            <h2 className={cn("text-2xl md:text-3xl font-bold mb-8 text-center", isDark ? "text-white" : "text-black")}>Industries We Serve</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {clients.map((client, i) => (
                <span key={i} className={cn("px-6 py-3 border text-sm font-medium", isDark ? "border-white/20 text-white/70" : "border-black/20 text-black/70")}>{client}</span>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className={cn("p-8 md:p-12 border text-center", isDark ? "bg-[#111111] border-white/10" : "bg-gray-50 border-black/10")}>
            <h2 className={cn("text-2xl md:text-3xl font-bold mb-4", isDark ? "text-white" : "text-black")}>Let's Work Together</h2>
            <p className={cn("text-base mb-8 max-w-2xl mx-auto", isDark ? "text-white/60" : "text-black/60")}>Ready to transform your digital presence? Get in touch and let's discuss how we can help your business grow.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <a href={`mailto:${agency.email}`} className={cn("flex items-center gap-2 text-sm font-medium", isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")}><Mail size={18} /> {agency.email}</a>
              <a href={`tel:${agency.phone}`} className={cn("flex items-center gap-2 text-sm font-medium", isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black")}><Phone size={18} /> {agency.phone}</a>
              <span className={cn("flex items-center gap-2 text-sm font-medium", isDark ? "text-white/70" : "text-black/70")}><MapPin size={18} /> {agency.location}</span>
            </div>
            <Link to="/contact" className={cn("inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold transition-colors", isDark ? "bg-white text-black hover:bg-white/90" : "bg-black text-white hover:bg-black/90")}>
              Start Your Project <ArrowUpRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
