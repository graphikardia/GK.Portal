'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

const navItems = {
  Services: [
    { label: 'SEO & AEO Architecture', href: '/services/seo', desc: 'Dominating search & AI answer engines.' },
    { label: 'Social Media Growth', href: '/services/social-media', desc: 'Viral narratives and community building.' },
    { label: 'High-Performance Websites', href: '/services/website', desc: 'Conversion-focused digital infrastructure.' },
    { label: 'Performance Marketing', href: '/services/marketing', desc: 'ROI-driven ad spend optimization.' },
    { label: 'AI Automation & Chatbots', href: '/services/chatbots', desc: '24/7 intelligent lead qualification.' },
    { label: 'Strategic Advertising', href: '/services/advertising', desc: 'Multi-channel brand saturation.' },
  ],
  Company: [
    { label: 'Our Story', href: '/about' },
    { label: 'Client Results', href: '/case-studies' },
    { label: 'Portfolio', href: '/work' },
    { label: 'Expertise Logs', href: '/blog' },
    { label: 'Contact Node', href: '/contact' },
  ],
};

export function Navigation() {
  const { isDark } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300 px-6 md:px-12 py-6",
        isScrolled ? "bg-gk-bg/80 backdrop-blur-md py-4 border-b border-gk-border" : "bg-transparent"
      )}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 group">
            <img src="/branding/logo_symbol.png" alt="GK" className="h-9 logo-filter transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-lg tracking-tighter text-gk-text1">GRAPHIKARDIA</span>
              <span className="text-[8px] font-mono tracking-[0.3em] text-gk-accent opacity-80 -mt-1">PRECISION_SYSTEMS</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-2">
            {Object.entries(navItems).map(([key, items]) => (
              <div 
                key={key} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={cn(
                  "px-6 py-2 text-[11px] font-bold uppercase tracking-widest transition-colors flex items-center gap-2",
                  activeDropdown === key ? "text-gk-accent" : "text-gk-text1/70 hover:text-gk-text1"
                )}>
                  {key}
                  <ChevronDown size={12} className={cn("transition-transform duration-300", activeDropdown === key && "rotate-180")} />
                </button>
                
                <AnimatePresence>
                  {activeDropdown === key && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 pt-4"
                    >
                      <div className="w-[320px] glass-card p-4 grid gap-1 shadow-2xl">
                        {items.map((item) => (
                          <Link
                            key={item.label}
                            to={item.href}
                            className="p-4 rounded-lg hover:bg-gk-elevated transition-all group flex flex-col gap-1"
                          >
                            <span className="text-xs font-bold text-gk-text1 group-hover:text-gk-accent transition-colors flex items-center justify-between">
                              {item.label}
                              <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                            </span>
                            {'desc' in item && <span className="text-[10px] text-gk-text3 font-medium uppercase tracking-tight">{item.desc}</span>}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <Link
              to="/contact"
              className="hidden sm:block px-6 py-3 bg-gk-accent text-black font-display font-extrabold text-[10px] uppercase tracking-widest hover:bg-gk-accent-hover transition-colors shadow-[0_0_20px_rgba(201,168,76,0.15)]"
            >
              Start Project
            </Link>

            <button 
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-gk-text1 p-2 border border-gk-border hover:border-gk-accent transition-colors"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] lg:hidden bg-gk-bg"
          >
            <div className="p-8 h-full flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between mb-16">
                <Link to="/" onClick={() => setMobileMenu(false)} className="flex items-center gap-3">
                  <img src="/branding/logo_symbol.png" alt="GK" className="h-8 logo-filter" />
                  <span className="font-display font-black text-lg text-gk-text1 uppercase tracking-tighter">GRAPHIKARDIA</span>
                </Link>
                <button onClick={() => setMobileMenu(false)} className="p-3 border border-gk-border rounded-full text-gk-text1">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-12 mb-12">
                {Object.entries(navItems).map(([key, items], idx) => (
                  <motion.div 
                    key={key}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <h3 className="section-label mb-6">{key}</h3>
                    <div className="grid gap-6">
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileMenu(false)}
                          className="flex flex-col gap-1 group"
                        >
                          <span className="text-3xl font-bold text-gk-text1 group-hover:text-gk-accent transition-colors">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-auto pt-10 border-t border-gk-border space-y-6">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="block w-full py-5 text-center bg-gk-accent text-black font-black text-xs uppercase tracking-widest"
                >
                  Start Project
                </Link>
                <div className="flex justify-between items-center px-2">
                  <span className="text-[10px] font-mono text-gk-text3 uppercase italic">v2.0_HANDSHAKE_READY</span>
                  <div className="flex gap-4">
                    <span className="text-[10px] font-mono text-gk-accent uppercase tracking-widest">GK_NODES</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}