'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const contactInfo = {
  email: "graphikardia@gmail.com",
  phone: "+91 7975594203",
  location: "Bangalore, Karnataka, India",
  availability: "Mon - Sat: 9:00 AM - 7:00 PM"
};

const services = [
  "Digital Marketing",
  "Creative Advertising",
  "Email Marketing",
  "Website Development",
  "Ecommerce Website",
  "Wordpress Website",
  "Magento Website",
  "Website Maintenance Service",
  "SEO Overview",
  "Ecommerce SEO",
  "SEO Audit Services",
  "AI SEO",
  "Generative Engine Optimisation",
  "Local SEO",
  "Link Building",
  "Conversion Rate Optimization",
  "Social Media Marketing",
  "Facebook Marketing",
  "Linkedin Marketing",
  "Youtube Marketing",
  "Website Design",
  "AI Chatbots"
];

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Project timelines vary based on scope. A typical website takes 2-4 weeks, while comprehensive digital campaigns run 1-3 months."
  },
  {
    q: "Do you offer retainer packages?",
    a: "Yes! We offer monthly retainer packages for ongoing digital marketing, social media management, and maintenance services."
  },
  {
    q: "What industries do you work with?",
    a: "We've worked with healthcare, education, e-commerce, real estate, and service-based businesses across India."
  },
  {
    q: "How do you measure success?",
    a: "We track KPIs like reach, engagement, conversions, ROI, and search rankings. Monthly reports keep you updated."
  }
];

export default function ContactPage() {
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
              Contact<span className="text-purple-500">.</span>
            </h1>
            <p className="font-mono text-[10px] uppercase tracking-[0.5em] opacity-30 mt-4">Get In Touch</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact Info */}
            <div>
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8 mb-12"
              >
                <div className={cn(
                  "p-8 rounded-2xl",
                  isDark ? "bg-zinc-900/50 border border-white/10" : "bg-zinc-50"
                )}>
                  <h3 className="text-2xl font-black uppercase italic mb-6">Let's Talk</h3>
                  <p className="text-lg opacity-70 mb-8">Have a project in mind? We'd love to hear about it. Reach out and let's create something amazing together.</p>
                  
                  <div className="space-y-4">
                    <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <Mail size={20} className="text-purple-500 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider opacity-50">Email</div>
                        <div className="font-bold">{contactInfo.email}</div>
                      </div>
                    </a>
                    
                    <a href={`tel:${contactInfo.phone}`} className="flex items-center gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                        <Phone size={20} className="text-purple-500 group-hover:text-white" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider opacity-50">Phone</div>
                        <div className="font-bold">{contactInfo.phone}</div>
                      </div>
                    </a>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                        <MapPin size={20} className="text-purple-500" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider opacity-50">Location</div>
                        <div className="font-bold">{contactInfo.location}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center">
                        <Clock size={20} className="text-purple-500" />
                      </div>
                      <div>
                        <div className="text-xs font-mono uppercase tracking-wider opacity-50">Availability</div>
                        <div className="font-bold">{contactInfo.availability}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FAQ Preview */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h3 className="text-xl font-black uppercase italic mb-6">Quick Answers</h3>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className={cn(
                      "p-6 rounded-xl",
                      isDark ? "bg-zinc-900/30" : "bg-zinc-50"
                    )}>
                      <h4 className="font-bold mb-2">{faq.q}</h4>
                      <p className="text-sm opacity-60">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right - Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <div className={cn(
                "p-8 md:p-12 rounded-3xl",
                isDark ? "bg-zinc-900/50 border border-white/10" : "bg-zinc-50"
              )}>
                <h3 className="text-2xl font-black uppercase italic mb-8">Send a Message</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2 block">Name *</label>
                      <input 
                        type="text" 
                        required
                        className={cn(
                          "w-full px-4 py-4 rounded-xl outline-none text-sm",
                          isDark ? "bg-black/50 border border-white/10 focus:border-purple-500" : "bg-white border border-black/10 focus:border-purple-500"
                        )}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2 block">Company</label>
                      <input 
                        type="text" 
                        className={cn(
                          "w-full px-4 py-4 rounded-xl outline-none text-sm",
                          isDark ? "bg-black/50 border border-white/10 focus:border-purple-500" : "bg-white border border-black/10 focus:border-purple-500"
                        )}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2 block">Email *</label>
                    <input 
                      type="email" 
                      required
                      className={cn(
                        "w-full px-4 py-4 rounded-xl outline-none text-sm",
                        isDark ? "bg-black/50 border border-white/10 focus:border-purple-500" : "bg-white border border-black/10 focus:border-purple-500"
                      )}
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2 block">Phone</label>
                    <input 
                      type="tel" 
                      className={cn(
                        "w-full px-4 py-4 rounded-xl outline-none text-sm",
                        isDark ? "bg-black/50 border border-white/10 focus:border-purple-500" : "bg-white border border-black/10 focus:border-purple-500"
                      )}
                    />
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2 block">Service Interested In *</label>
                    <select 
                      required
                      className={cn(
                        "w-full px-4 py-4 rounded-xl outline-none text-sm",
                        isDark ? "bg-black/50 border border-white/10 focus:border-purple-500" : "bg-white border border-black/10 focus:border-purple-500"
                      )}
                    >
                      {services.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-xs font-mono uppercase tracking-wider opacity-60 mb-2 block">Message *</label>
                    <textarea 
                      rows={5}
                      required
                      className={cn(
                        "w-full px-4 py-4 rounded-xl outline-none text-sm resize-none",
                        isDark ? "bg-black/50 border border-white/10 focus:border-purple-500" : "bg-white border border-black/10 focus:border-purple-500"
                      )}
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full py-5 bg-purple-500 text-white font-bold uppercase tracking-widest rounded-xl hover:bg-purple-600 transition-colors flex items-center justify-center gap-3"
                  >
                    <Send size={18} /> Send Message
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={cn(
              "mt-16 h-80 rounded-3xl flex items-center justify-center",
              isDark ? "bg-zinc-900/30 border border-white/5" : "bg-zinc-100"
            )}
          >
            <div className="text-center">
              <MapPin size={48} className="mx-auto mb-4 text-purple-500 opacity-50" />
              <p className="font-mono text-sm opacity-60">{contactInfo.location}</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
