import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, ArrowRight, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';

const navItems = {
  Services: [
    { label: 'SEO & AEO Architecture', href: '/services/seo', desc: 'Dominating AI search & answer engines.' },
    { label: 'Social Media Growth', href: '/services/social-media', desc: 'Strategic viral narratives and community.' },
    { label: 'High-Performance Websites', href: '/services/website', desc: 'Conversion-focused digital infrastructure.' },
    { label: 'Performance Marketing', href: '/services/marketing', desc: 'ROI-driven ad spend optimization.' },
    { label: 'AI Automation & Chatbots', href: '/services/chatbots', desc: '24/7 intelligent lead qualification.' },
    { label: 'Strategic Advertising', href: '/services/advertising', desc: 'Multi-channel brand saturation.' },
  ],
  Company: [
    { label: 'About Our Mission', href: '/about' },
    { label: 'The Founder', href: '/founder' },
    { label: 'Client Results', href: '/case-studies' },
    { label: 'Portfolio Vault', href: '/work' },
    { label: 'Expertise Logs', href: '/blog' },
    { label: 'Contact Node', href: '/contact' },
  ],
};

export function Navigation() {
  const { isDark, toggleTheme } = useTheme();
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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-8",
        isScrolled ? "bg-gk-bg/90 backdrop-blur-xl py-5 border-b border-white/5" : "bg-transparent"
      )}>
        <div className="container-custom flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3 transition-opacity hover:opacity-80">
            <img src="/branding/logo_symbol.png" alt="GK" className={cn("h-8 transition-all", isDark ? "brightness-0 invert" : "")} />
            <div className="flex flex-col">
              <span className={cn("font-display font-bold text-lg tracking-tight leading-none", isDark ? "text-white" : "text-black")}>GRAPHIKARDIA</span>
              <span className="text-[8px] font-mono tracking-[0.2em] text-gk-accent opacity-60">PRECISION SYSTEMS</span>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {Object.entries(navItems).map(([key, items]) => (
              <div 
                key={key} 
                className="relative"
                onMouseEnter={() => setActiveDropdown(key)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className={cn(
                  "py-2 text-[11px] font-bold uppercase tracking-widest transition-all flex items-center gap-2",
                  activeDropdown === key ? "text-gk-accent" : "text-white/70 hover:text-white"
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
                      className="absolute top-full left-1/2 -translate-x-1/2 pt-6"
                    >
                      <div className="w-[360px] bg-gk-elevated border border-white/10 p-4 shadow-2xl">
                        <div className="grid gap-2">
                          {items.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="p-4 rounded hover:bg-white/5 transition-all group flex flex-col gap-1 text-left"
                            >
                              <span className="text-xs font-bold text-white group-hover:text-gk-accent transition-colors flex items-center justify-between">
                                {item.label}
                                <ArrowRight size={12} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </span>
                              {'desc' in item && <span className="text-[10px] text-gk-text3 font-medium tracking-tight uppercase">{item.desc}</span>}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            
            <button 
              onClick={toggleTheme} 
              className={cn("p-2 border rounded-full transition-colors", isDark ? "border-white/10 text-white hover:bg-white/10" : "border-black/10 text-black hover:bg-black/5")}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <Link
              to="/contact"
              className="px-8 py-3 bg-gk-accent text-black font-bold text-[10px] uppercase tracking-widest hover:bg-gk-text1 hover:text-gk-bg transition-all ml-4"
            >
              Start Project
            </Link>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button 
              onClick={toggleTheme} 
              className={cn("p-2 border transition-colors", isDark ? "border-white/10 text-white" : "border-black/10 text-black")}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button 
              onClick={() => setMobileMenu(true)}
              className={cn("p-2 border transition-colors", isDark ? "border-white/10 text-white" : "border-black/10 text-black")}
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
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[200] lg:hidden bg-gk-bg"
          >
            <div className="p-10 h-full flex flex-col overflow-y-auto">
              <div className="flex items-center justify-between mb-20">
                <Link to="/" onClick={() => setMobileMenu(false)} className="flex items-center gap-3">
                  <img src="/branding/logo_symbol.png" alt="GK" className={cn("h-8 transition-all", isDark ? "brightness-0 invert" : "")} />
                  <span className={cn("font-display font-bold text-lg tracking-tight uppercase", isDark ? "text-white" : "text-black")}>GRAPHIKARDIA</span>
                </Link>
                <button onClick={() => setMobileMenu(false)} className={cn("p-3 border", isDark ? "border-white/10 text-white" : "border-black/10 text-black")}>
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-16">
                {Object.entries(navItems).map(([key, items], idx) => (
                  <div key={key}>
                    <h3 className="section-label mb-8">{key}</h3>
                    <div className="grid gap-8">
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileMenu(false)}
                          className="flex flex-col gap-1 group"
                        >
                          <span className={cn("text-4xl font-bold transition-colors", isDark ? "text-white/50 group-hover:text-gk-accent" : "text-black/50 group-hover:text-gk-accent")}>
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-16 flex flex-col gap-8">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className="block w-full py-6 text-center bg-gk-accent text-black font-bold text-xs uppercase tracking-widest"
                >
                  Start Project
                </Link>
                <div className="flex justify-between items-center opacity-40">
                  <span className="text-[10px] font-mono tracking-widest uppercase">PRECISION_v2.0</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase">GK_NODES</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}