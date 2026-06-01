'use client';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowRight, ShieldCheck, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    name: "Dr. Sandeep Reddy",
    role: "MD, Reddy Medical Group",
    content: "The precision with which Graphikardia rebuilt our digital acquisition system was remarkable. We saw a 210% growth in high-intent patient inquiries within the first 6 months.",
    result: "+210% Growth"
  },
  {
    name: "Akil Krishna",
    role: "Director, KIMS Global",
    content: "Their absolute mastery of digital infrastructure and AEO strategy allowed us to dominate surgical search results that were previously occupied by national competitors.",
    result: "Search Dominance"
  },
  {
    name: "Sarah Chen",
    role: "CMO, Global Link Logistics",
    content: "Graphikardia didn't just give us a website; they gave us a revenue-generating asset. The load speeds and conversion density are unlike anything we've seen.",
    result: "$1.2M+ Revenue"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Verified Performance</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Testimonials of <span className="gradient-gold">Excellence.</span>
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-2xl mx-auto font-body">
              Hear from the clinical directors and enterprise leaders who have scaled their digital nodes using the Graphikardia framework.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-52 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {testimonials.map((t, i) => (
              <div key={i} className="p-12 bg-gk-secondary/30 border border-gk-border group hover:border-gk-accent/30 transition-all flex flex-col justify-between min-h-[400px]">
                <div className="space-y-8">
                  <div className="flex justify-between items-start">
                     <Quote size={40} className="text-gk-accent opacity-20 group-hover:opacity-100 transition-opacity" />
                     <div className="flex gap-1 text-gk-accent">
                        {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                     </div>
                  </div>
                  <p className="text-lg leading-relaxed text-gk-text2 italic group-hover:text-white transition-colors">"{t.content}"</p>
                </div>
                
                <div className="pt-10 border-t border-gk-border flex justify-between items-end">
                   <div>
                      <h4 className="text-lg font-bold">{t.name}</h4>
                      <span className="text-[10px] font-mono text-gk-text3 uppercase uppercase">{t.role}</span>
                   </div>
                   <div className="px-3 py-1 bg-gk-accent/10 border border-gk-accent/20">
                      <span className="text-[10px] font-mono text-gk-accent font-bold uppercase">{t.result}</span>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-52 px-6 text-center bg-gk-secondary/10 border-t border-gk-border">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl font-bold mb-12 leading-tight">Ready to Become a <span className="gradient-gold">Case Study?</span></h2>
          <Link to="/contact" className="inline-flex py-6 px-16 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all">
            Initiate Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
