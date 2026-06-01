'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { useTheme } from '../../lib/ThemeContext';
import { AnimatedLogo } from './AnimatedLogo';

const navItems = {
  Services: [
    { label: 'SEO Services', href: '/services/seo' },
    { label: 'Social Media Marketing', href: '/services/social-media' },
    { label: 'Website Design', href: '/services/website' },
    { label: 'Performance Marketing', href: '/services/marketing' },
    { label: 'AI Chatbots', href: '/services/chatbots' },
    { label: 'Advertising', href: '/services/advertising' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'Portfolio', href: '/work' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
};

export function Navigation({ cartCount = 0, openSidebar = () => {} }: { cartCount?: number; openSidebar?: () => void }) {
  const { isDark, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={cn(
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-500 px-6 md:px-12 py-8 md:py-10",
        isScrolled && (isDark ? "bg-black/80 backdrop-blur-xl border-b border-white/5" : "bg-white/80 backdrop-blur-xl border-b border-black/5")
      )}>
        <div className="max-w-[1800px] mx-auto flex items-center justify-between mix-blend-difference">
          <Link to="/" className="flex items-center gap-4 group">
            <img src="/branding/logo_symbol.png" alt="GK" className="h-8 logo-filter group-hover:scale-110 transition-transform" />
            <span className="font-display font-black text-xl tracking-tightest text-white hidden sm:block">GRAPHIKARDIA</span>
          </Link>

          {/* DESKTOP LINKS */}
          <div className="hidden lg:flex items-center gap-10">
            {Object.entries(navItems).map(([key, items]) => (
              <div key={key} className="relative group/nav">
                <button className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 hover:text-white transition-colors py-4">
                  {key}
                </button>
                <div className="absolute top-full right-0 mt-2 min-w-[240px] bg-black border border-white/10 opacity-0 invisible group-hover/nav:opacity-100 group-hover/nav:visible transition-all duration-300 p-2">
                  {items.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="block px-6 py-4 text-[9px] font-black uppercase tracking-widest text-white/40 hover:text-white hover:bg-white/5 transition-all"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-8">
            <button 
              onClick={toggleTheme} 
              className="group flex items-center gap-3"
            >
              <span className="hidden sm:inline text-[9px] font-black uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                {isDark ? 'LIGHT_NODE' : 'DARK_NODE'}
              </span>
              <div className="w-8 h-8 border border-white flex items-center justify-center rounded-full group-hover:bg-white group-hover:text-black transition-all">
                <span className="text-[10px] font-bold">{isDark ? 'L' : 'D'}</span>
              </div>
            </button>

            <button 
              onClick={() => setMobileMenu(true)}
              className="lg:hidden text-white"
            >
              <Menu size={24} />
            </button>

            <Link
              to="/contact"
              className="hidden sm:flex px-8 py-4 bg-white text-black font-display font-black text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Initialize_Handshake
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed inset-0 z-[200] lg:hidden",
              isDark ? "bg-[#0a0a0a]" : "bg-white"
            )}
          >
            <div className="p-6 h-full flex flex-col">
              <div className="flex items-center justify-between mb-12">
                <AnimatedLogo className={cn("text-2xl", isDark ? "text-white" : "text-black")} />
                <button onClick={() => setMobileMenu(false)}>
                  <X size={24} className={isDark ? "text-white" : "text-black"} />
                </button>
              </div>

              <div className="flex-1 space-y-8">
                {Object.entries(navItems).map(([key, items]) => (
                  <div key={key}>
                    <h3 className={cn(
                      "text-xs uppercase tracking-widest mb-4",
                      isDark ? "text-white/40" : "text-black/40"
                    )}>
                      {key}
                    </h3>
                    <div className="space-y-4">
                      {items.map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          onClick={() => setMobileMenu(false)}
                          className={cn(
                            "block text-2xl font-semibold",
                            isDark ? "text-white" : "text-black"
                          )}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-8 border-t border-current/10 flex gap-4">
                <motion.button
                  onClick={() => { toggleTheme(); setMobileMenu(false); }}
                  className={cn(
                    "flex-1 py-4 text-center text-sm font-semibold flex items-center justify-center gap-2",
                    isDark ? "bg-white/10 text-white" : "bg-black/10 text-black"
                  )}
                  whileTap={{ scale: 0.95 }}
                >
                  {isDark ? <Moon size={18} /> : <Sun size={18} />}
                  {isDark ? 'Dark' : 'Light'}
                </motion.button>
                <Link
                  to="/contact"
                  onClick={() => setMobileMenu(false)}
                  className={cn(
                    "flex-1 py-4 text-center text-sm font-semibold",
                    isDark 
                      ? "bg-white text-black" 
                      : "bg-black text-white"
                  )}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}