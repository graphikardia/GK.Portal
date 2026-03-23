'use client';

import { useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Send, Check, Sparkles, ArrowRight, Zap, Target, Clock, Mail, Phone, MapPin, Calendar, Instagram, Linkedin, Twitter } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';
import { useRef } from 'react';

const serviceOptions = [
  'Digital Marketing',
  'Creative Advertising',
  'Email Marketing',
  'Website Development',
  'Ecommerce Website',
  'Wordpress Website',
  'Magento Website',
  'Website Maintenance Service',
  'SEO Overview',
  'Ecommerce SEO',
  'SEO Audit Services',
  'AI SEO',
  'Generative Engine Optimisation',
  'Google Penalty Removal',
  'Local SEO',
  'Link Building',
  'Conversion Rate Optimization',
  'Social Media Marketing',
  'Facebook Marketing',
  'Linkedin Marketing',
  'Youtube Marketing',
  'Website Design',
  'AI Chatbots'
];

const budgetOptions = [
  'Under ₹50K',
  '₹50K - ₹1L',
  '₹1L - ₹5L',
  '₹5L - ₹10L',
  'Above ₹10L'
];

const processSteps = [
  { icon: Zap, label: 'Quick Response', desc: 'Within 24 hours', color: 'from-orange-500 to-red-500' },
  { icon: Target, label: 'Strategy Call', desc: 'Custom solution', color: 'from-blue-500 to-cyan-500' },
  { icon: Clock, label: 'Quick Start', desc: 'Same week', color: 'from-green-500 to-emerald-500' },
];

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'graphikardia@gmail.com' },
  { icon: Phone, label: 'Phone', value: '+91 7975594203' },
  { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
];

export function GetQuoteForm() {
  const { isDark } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [form, setForm] = useState({ name: '', email: '', service: '', budget: '', message: '' });

  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!form.service) newErrors.service = 'Please select a service';
    if (!form.budget) newErrors.budget = 'Please select a budget';
    if (!form.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setSubmitted(true);
    setIsLoading(false);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: '', email: '', service: '', budget: '', message: '' });
    }, 3000);
  };

  return (
    <section ref={containerRef} className={cn("py-40 px-6 relative overflow-hidden", isDark ? "bg-zinc-900/30" : "bg-zinc-100")}>
      {/* Background */}
      <motion.div style={{ y }} className="absolute inset-0">
        <div className={cn(
          "absolute inset-0",
          isDark 
            ? "bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.2),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.15),transparent_50%)]"
            : "bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(236,72,153,0.08),transparent_50%)]"
        )} />
        
        {/* Animated elements */}
        <motion.div 
          animate={{ rotate: [0, 360], scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-40 h-40 border border-crimson-500/10 rounded-lg"
        />
        <motion.div 
          animate={{ rotate: [360, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-32 h-32 border border-pink-500/10 rounded-full"
        />
      </motion.div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={12} className="text-purple-500" />
              <span className={cn(
                "font-mono text-[11px] uppercase tracking-[0.3em]",
                isDark ? "text-purple-400" : "text-purple-600"
              )}>
                [Start Your Project]
              </span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[10vw] md:text-[5vw] leading-[0.85] font-black uppercase italic tracking-tighter mb-6"
            >
              Let's Build<span className="text-purple-500">_</span>
              <br />
              <span className="text-purple-500">Something Great</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg opacity-60 leading-relaxed max-w-lg mb-10"
            >
              Tell us about your project. We'll analyze your requirements and craft a custom strategy that delivers measurable results.
            </motion.p>

            {/* Process Steps */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              {processSteps.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  whileHover={{ scale: 1.03, y: -3 }}
                  className={cn(
                    "p-5 rounded-2xl text-center transition-all",
                    isDark ? "bg-zinc-900/50 border border-white/5 hover:border-purple-500/30" : "bg-white border border-black/5 hover:shadow-lg"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center",
                    `bg-gradient-to-br ${step.color}`
                  )}>
                    <step.icon size={18} className="text-white" />
                  </div>
                  <div className="text-xs font-bold uppercase mb-1">{step.label}</div>
                  <div className="text-[10px] font-mono opacity-50">{step.desc}</div>
                </motion.div>
              ))}
            </div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className={cn(
                "p-6 rounded-2xl",
                isDark ? "bg-purple-500/10 border border-purple-500/20" : "bg-purple-50 border border-purple-200"
              )}
            >
              <p className="text-sm font-bold mb-4">Get in touch directly:</p>
              <div className="space-y-3">
                {contactInfo.map((info, i) => (
                  <div key={info.label} className="flex items-center gap-3">
                    <div className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center",
                      isDark ? "bg-white/10" : "bg-purple-100"
                    )}>
                      <info.icon size={14} className="text-purple-500" />
                    </div>
                    <span className="text-sm font-mono opacity-70">{info.value}</span>
                  </div>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="flex gap-3 mt-5 pt-5 border-t border-current/10">
                {[Instagram, Linkedin, Twitter].map((SocialIcon, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "w-9 h-9 rounded-lg flex items-center justify-center",
                      isDark ? "bg-white/10 hover:bg-purple-500" : "bg-purple-100 hover:bg-purple-500"
                    )}
                  >
                    <SocialIcon size={16} className={isDark ? "text-white" : "text-purple-600"} />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className={cn(
                "p-8 md:p-10 rounded-3xl",
                isDark 
                  ? "bg-zinc-900/80 border border-white/10 shadow-2xl shadow-purple-500/10" 
                  : "bg-white border border-black/5 shadow-xl"
              )}
            >
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-3 block">Name *</label>
                    <input 
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => { setForm({ ...form, name: e.target.value }); setErrors(prev => ({...prev, name: ''})); }}
                      className={cn(
                        "w-full px-5 py-4 rounded-xl text-sm outline-none transition-all",
                        isDark 
                          ? "bg-black/50 border border-white/10 focus:border-purple-500 placeholder:text-white/30" 
                          : "bg-zinc-50 border border-black/5 focus:border-purple-500 placeholder:text-black/30",
                        errors.name && "border-red-500"
                      )}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-3 block">Email *</label>
                    <input 
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => { setForm({ ...form, email: e.target.value }); setErrors(prev => ({...prev, email: ''})); }}
                      className={cn(
                        "w-full px-5 py-4 rounded-xl text-sm outline-none transition-all",
                        isDark 
                          ? "bg-black/50 border border-white/10 focus:border-purple-500 placeholder:text-white/30" 
                          : "bg-zinc-50 border border-black/5 focus:border-purple-500 placeholder:text-black/30",
                        errors.email && "border-red-500"
                      )}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-3 block">Service *</label>
                    <select
                      required
                      value={form.service}
                      onChange={(e) => { setForm({ ...form, service: e.target.value }); setErrors(prev => ({...prev, service: ''})); }}
                      className={cn(
                        "w-full px-5 py-4 rounded-xl text-sm outline-none transition-all appearance-none",
                        isDark 
                          ? "bg-black/50 border border-white/10 focus:border-purple-500" 
                          : "bg-zinc-50 border border-black/5 focus:border-purple-500",
                        errors.service && "border-red-500"
                      )}
                    >
                      <option value="">Select service...</option>
                      {serviceOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                  </div>
                  <div>
                    <label className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-3 block">Budget</label>
                    <select
                      value={form.budget}
                      onChange={(e) => { setForm({ ...form, budget: e.target.value }); setErrors(prev => ({...prev, budget: ''})); }}
                      className={cn(
                        "w-full px-5 py-4 rounded-xl text-sm outline-none transition-all appearance-none",
                        isDark 
                          ? "bg-black/50 border border-white/10 focus:border-purple-500" 
                          : "bg-zinc-50 border border-black/5 focus:border-purple-500",
                        errors.budget && "border-red-500"
                      )}
                    >
                      <option value="">Select budget...</option>
                      {budgetOptions.map(opt => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.budget && <p className="text-red-500 text-xs mt-1">{errors.budget}</p>}
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-mono uppercase tracking-widest opacity-50 mb-3 block">Project Details *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => { setForm({ ...form, message: e.target.value }); setErrors(prev => ({...prev, message: ''})); }}
                    rows={5}
                    placeholder="Describe your project goals, timeline, and any specific requirements..."
                    className={cn(
                      "w-full px-5 py-4 rounded-xl text-sm outline-none transition-all resize-none",
                      isDark 
                        ? "bg-black/50 border border-white/10 focus:border-purple-500 placeholder:text-white/30" 
                        : "bg-zinc-50 border border-black/5 focus:border-purple-500 placeholder:text-black/30",
                      errors.message && "border-red-500"
                    )}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                </div>

                <motion.button
                  type="submit"
                  disabled={submitted || isLoading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className={cn(
                    "w-full py-5 flex items-center justify-center gap-3 font-black uppercase tracking-widest text-xs rounded-xl transition-all",
                    submitted 
                      ? "bg-green-500 text-white" 
                      : isLoading
                        ? "bg-purple-400 text-white cursor-wait"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/30"
                  )}
                >
                  {submitted ? (
                    <><Check size={18} /> Request Submitted</>
                  ) : isLoading ? (
                    <>Processing...</>
                  ) : (
                    <><Send size={18} /> Submit Request <ArrowRight size={16} /></>
                  )}
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
