'use client';
import { motion } from 'framer-motion';
import { Quote, Star, ArrowUpRight, Activity, ShieldCheck, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    quote: "Graphikardia didn't just give us a website; they gave us a patient acquisition machine. Our surgical bookings have increased by 200% while our ad spend became 40% more efficient.",
    author: "Dr. Darshana Reddy",
    position: "Founder, Reddy Medical Group",
    metric: "+210% Growth",
    image: "https://images.unsplash.com/photo-1559839734-2b71f15367d2?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    quote: "The strategic depth they bring is unparalleled. Their AEO implementation moved us from invisible to the primary answer on Perplexity and ChatGPT for our core B2B services.",
    author: "Sanjay Kumar",
    position: "CMO, Global Logistics Corp",
    metric: "Rank #1 AEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    quote: "Integrating their AI Lead Agents into our admissions process was a game changer. We now qualify every single student inquiry within 60 seconds, 24 hours a day.",
    author: "Dr. Priya Sharma",
    position: "Admissions Node, KGI",
    metric: "95% Automation",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1976&auto=format&fit=crop"
  }
];

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          {/* HEADER */}
          <header className="mb-40">
             <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gk-accent" />
                <span className="section-label text-gk-accent font-bold">Feedback_Matrix_v2</span>
             </div>
             <h1 className="text-6xl md:text-[140px] leading-[0.8] font-black mb-12">
               CLIENT_<span className="gradient-gold bg-clip-text">VERDICTS</span>
             </h1>
             <p className="font-body text-xl md:text-2xl text-gk-text2 uppercase tracking-widest max-w-2xl leading-relaxed">
               VERIFIED TESTIMONIALS FROM ELITE CLINICAL AND B2B PARTNERS.
             </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {testimonials.map((t, i) => (
              <motion.div 
                key={t.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-10 md:p-16 glass-card bg-gk-secondary/30 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-12 opacity-[0.03] group-hover:opacity-10 group-hover:scale-110 transition-all">
                   <Quote size={120} />
                </div>
                
                <div className="flex items-center gap-2 mb-10">
                   {[1,2,3,4,5].map(star => <Star key={star} size={14} className="fill-gk-accent text-gk-accent" />)}
                </div>

                <blockquote className="text-2xl md:text-3xl font-bold italic leading-relaxed text-gk-text1 mb-12 relative z-10">
                   "{t.quote}"
                </blockquote>

                <div className="flex items-center justify-between pt-10 border-t border-gk-border/50">
                   <div className="flex items-center gap-6">
                      <img src={t.image} alt={t.author} className="w-16 h-16 rounded-full object-cover grayscale border border-gk-border" />
                      <div>
                         <h4 className="text-lg font-black text-gk-accent">{t.author}</h4>
                         <p className="text-[10px] font-mono font-bold text-gk-text3 uppercase tracking-widest">{t.position}</p>
                      </div>
                   </div>
                   <div className="text-right hidden md:block">
                      <span className="text-2xl font-display font-black gradient-gold italic block">{t.metric}</span>
                      <span className="text-[8px] font-mono text-gk-text3 uppercase font-bold tracking-widest">Growth_Coefficient</span>
                   </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-40 grid grid-cols-1 md:grid-cols-3 gap-12">
             {[
               { icon: <Activity className="text-gk-accent" />, title: "Verified Results", desc: "All growth metrics are audited and measured against initial baseline benchmarks." },
               { icon: <ShieldCheck className="text-gk-accent" />, title: "Partner Privacy", desc: "We maintain strict NDA protocols for our high-ticket B2B and medical clients." },
               { icon: <Heart className="text-gk-accent" />, title: "Zero Churn", desc: "Our focus on ROI ensures 95%+ of our strategic partners remain node-active indefinitely." }
             ].map((feature, i) => (
               <div key={i} className="p-10 border border-gk-border hover:border-gk-accent/20 transition-all bg-gk-secondary/10">
                  <div className="mb-6">{feature.icon}</div>
                  <h4 className="text-xl font-black mb-4 uppercase italic leading-tight">{feature.title}</h4>
                  <p className="text-[10px] font-mono text-gk-text3 uppercase leading-loose tracking-[0.1em]">{feature.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>
    </div>
  );
}
