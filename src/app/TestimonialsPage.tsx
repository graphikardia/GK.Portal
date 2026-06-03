'use client';
import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useTheme } from '../lib/ThemeContext';

const testimonials = [
  {
    name: "Dr. Darshana Reddy",
    role: "Senior Consultant — Internal Medicine | Medical Superintendent",
    content: "Graphikardia has been instrumental in architecting a robust digital presence that genuinely reflects my 16+ years of clinical experience in Internal Medicine, Diabetes Management, and Respiratory Care.",
    result: "16+ Years Expertise"
  },
  {
    name: "Dr. Priyanka Das",
    role: "Consultant - Obstetrician, Gynecologist, Infertility Specialist, Laparoscopic Surgeon",
    content: "Their precision in targeting high-intent patients and establishing digital authority allowed my practice to capture the exact demographic seeking specialized infertility and laparoscopic surgical care.",
    result: "Surgical Authority"
  },
  {
    name: "Dr. Raksha Madhu",
    role: "Consultant Obstetrician & Gynaecologist, Laparoscopic Surgeon & IVF Specialist",
    content: "As an IVF specialist (M.B.B.S, MS), building trust is paramount. Graphikardia built an acquisition engine that immediately communicates clinical excellence and authority to prospective patients.",
    result: "IVF Acquisition"
  },
  {
    name: "Dr. Mahendra M",
    role: "Consultant- Neurosurgeon (MBBS, MS, MCh)",
    content: "With 13 years of experience in complex neurosurgery, I needed a team that understood high-ticket medical marketing. Their systemic approach effectively elevated my footprint across the digital ecosystem.",
    result: "13 Years Protocol"
  }
];

export default function TestimonialsPage() {
  const { isDark } = useTheme();
  
  return (
    <div className={cn("min-h-screen transition-colors duration-500", isDark ? "bg-gk-bg text-gk-text1" : "bg-white text-black")}>
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Verified Medical Authority</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Testimonials of <span className="gradient-gold">Excellence.</span>
            </h1>
            <p className={cn("text-xl leading-relaxed max-w-2xl mx-auto font-body", isDark ? "text-gk-text2" : "text-gray-600")}>
              Hear from the elite clinical directors, surgeons, and specialists who have scaled their patient acquisition nodes using the Graphikardia framework.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-52 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {testimonials.map((t, i) => (
              <div 
                key={i} 
                className={cn(
                  "p-10 md:p-12 border transition-all flex flex-col justify-between min-h-[400px] group",
                  isDark ? "bg-gk-secondary/30 border-gk-border hover:border-gk-accent/30" : "bg-gray-50 border-gray-200 hover:border-gk-accent/30 shadow-sm"
                )}
              >
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                     <Quote size={40} className={cn("transition-opacity", isDark ? "text-gk-accent opacity-20 group-hover:opacity-100" : "text-gk-accent opacity-40")} />
                     <div className="flex gap-1 text-gk-accent">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                     </div>
                  </div>
                  <p className={cn("text-lg leading-relaxed italic transition-colors font-body", isDark ? "text-gk-text2 group-hover:text-white" : "text-gray-700")}>"{t.content}"</p>
                </div>
                
                <div className={cn("pt-10 border-t flex justify-between items-end gap-4", isDark ? "border-gk-border" : "border-gray-200")}>
                   <div className="flex-1">
                      <h4 className={cn("text-lg font-bold mb-1", isDark ? "text-white" : "text-black")}>{t.name}</h4>
                      <span className={cn("text-[10px] font-mono uppercase leading-relaxed block", isDark ? "text-gk-text3" : "text-gray-500")}>
                        {t.role}
                      </span>
                   </div>
                   <div className={cn("shrink-0 px-3 py-2 border", isDark ? "bg-gk-accent/10 border-gk-accent/20" : "bg-gk-accent/5 border-gk-accent/30")}>
                      <span className="text-[9px] font-mono text-gk-accent font-bold uppercase tracking-widest">{t.result}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={cn("py-52 px-6 text-center border-t", isDark ? "bg-gk-secondary/10 border-gk-border" : "bg-gray-50 border-gray-200")}>
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className={cn("text-4xl md:text-7xl font-bold mb-12 leading-tight", isDark ? "text-white" : "text-black")}>
            Ready to Become a <span className="gradient-gold">Case Study?</span>
          </h2>
          <Link to="/contact" className={cn(
             "inline-flex py-6 px-16 font-bold text-xs uppercase tracking-widest transition-all",
             isDark ? "bg-gk-accent text-black hover:bg-white" : "bg-gk-accent text-white hover:bg-black"
          )}>
            Initiate Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
