'use client';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, Globe, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useTheme } from '../lib/ThemeContext';

export default function ContactPage() {
  const { isDark } = useTheme();
  return (
    <div className="min-h-screen bg-gk-bg text-gk-text1">
      <section className="pt-52 pb-32 px-6">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <span className="section-label mb-8 block">Project Initiation</span>
            <h1 className="text-5xl md:text-8xl font-bold mb-12 leading-tight">
              Start Your <span className="gradient-gold">Growth Protocol.</span>
            </h1>
            <p className="text-gk-text2 text-xl leading-relaxed max-w-2xl mx-auto font-body">
              Connect with our strategic architects to audit your existing digital infrastructure and deploy a high-performance acquisition engine.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-52 px-6">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            <div className="lg:col-span-4 space-y-12">
               <div className="p-10 glass-card">
                  <h3 className="section-label mb-8">Direct Channels</h3>
                  <div className="space-y-8">
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border border-gk-accent/20 flex items-center justify-center text-gk-accent">
                           <Mail size={20} />
                        </div>
                        <div>
                           <span className="text-[10px] font-mono text-gk-text3 uppercase block">Email_Architect</span>
                           <span className="text-lg font-bold">hello@graphikardia.com</span>
                        </div>
                     </div>
                     <div className="flex items-center gap-6">
                        <div className="w-12 h-12 border border-gk-border flex items-center justify-center text-gk-text3">
                           <MapPin size={20} />
                        </div>
                        <div>
                           <span className="text-[10px] font-mono text-gk-text3 uppercase block">HQ_Node</span>
                           <span className="text-lg font-bold">Bangalore, IN</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="p-10 border border-gk-border">
                  <h3 className="section-label mb-6">Expertise Nodes</h3>
                  <div className="flex flex-wrap gap-3">
                     {['SEO', 'AEO', 'PPC', 'CRM', 'WEB', 'AI_CHATS'].map(tag => (
                        <span key={tag} className="text-[10px] font-mono px-3 py-1 border border-gk-border text-gk-text3 uppercase">
                           {tag}_READY
                        </span>
                     ))}
                  </div>
               </div>
            </div>

            <div className="lg:col-span-8">
               <div className="p-12 md:p-20 bg-gk-secondary/30 border border-gk-border relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 transition-opacity">
                     <Globe size={40} className="text-gk-accent animate-pulse" />
                  </div>
                  
                  <form className="grid grid-cols-1 md:grid-cols-2 gap-10">
                     <div className="space-y-4">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-gk-text3">Full Name / Entity</label>
                        <input 
                           type="text" 
                           placeholder="John Doe / Clinical Group" 
                           className={cn("w-full bg-transparent border-b border-gk-border py-4 focus:border-gk-accent outline-none transition-colors", isDark ? "text-white" : "text-black")}
                        />
                     </div>
                     <div className="space-y-4">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-gk-text3">Communication Node</label>
                        <input 
                           type="email" 
                           placeholder="email@example.com" 
                           className={cn("w-full bg-transparent border-b border-gk-border py-4 focus:border-gk-accent outline-none transition-colors", isDark ? "text-white" : "text-black")}
                        />
                     </div>
                     <div className="md:col-span-2 space-y-4">
                        <label className="text-[11px] font-bold uppercase tracking-widest text-gk-text3">Strategic Requirements</label>
                        <textarea 
                           rows={4} 
                           placeholder="Describe your current performance bottlenecks..." 
                           className={cn("w-full bg-transparent border-b border-gk-border py-4 focus:border-gk-accent outline-none transition-colors resize-none", isDark ? "text-white" : "text-black")}
                        />
                     </div>
                     <div className="md:col-span-2 pt-10">
                        <button className="w-full py-6 bg-gk-accent text-black font-bold text-xs uppercase tracking-widest hover:bg-white transition-all flex items-center justify-center gap-4">
                           Initiate Handshake <ArrowRight size={16} />
                        </button>
                     </div>
                  </form>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
