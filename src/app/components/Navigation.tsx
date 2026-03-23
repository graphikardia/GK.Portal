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
        "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
        isScrolled 
          ? (isDark ? "bg-[#0a0a0a]/95 backdrop-blur-md border-b border-white/10" : "bg-white/95 backdrop-blur-md border-b border-black/10") 
          : (isDark ? "bg-transparent" : "bg-transparent")
      )}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <AnimatedLogo className={cn("text-xl", isDark ? "text-white" : "text-black")} />

            <div className="hidden lg:flex items-center gap-8">
              {Object.entries(navItems).map(([key, items]) => (
                <div key={key} className="relative group">
                  <button className={cn(
                    "text-sm font-medium py-8",
                    isDark ? "text-white/70 hover:text-white" : "text-black/70 hover:text-black"
                  )}>
                    {key}
                  </button>
                  
                  <div className={cn(
                    "absolute top-full left-0 mt-2 min-w-[200px] py-2 border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
                    isDark ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/10"
                  )}>
                    {items.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        className={cn(
                          "block px-5 py-3 text-sm transition-colors",
                          isDark ? "text-white/70 hover:text-white hover:bg-white/5" : "text-black/70 hover:text-black hover:bg-black/5"
                        )}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-6">
              <motion.button
                onClick={toggleTheme}
                className={cn(
                  "p-3 rounded-full transition-colors",
                  isDark ? "bg-white/10 text-white hover:bg-white/20" : "bg-black/10 text-black hover:bg-black/20"
                )}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  animate={{ rotate: isDark ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isDark ? <Moon size={18} /> : <Sun size={18} />}
                </motion.div>
              </motion.button>
              <Link
                to="/contact"
                className={cn(
                  "px-6 py-3 text-sm font-semibold transition-colors",
                  isDark 
                    ? "bg-white text-black hover:bg-white/90" 
                    : "bg-black text-white hover:bg-black/90"
                )}
              >
                Get Quote
              </Link>
            </div>

            <button 
              onClick={() => setMobileMenu(true)}
              className="lg:hidden p-2"
            >
              <Menu size={24} className={isDark ? "text-white" : "text-black"} />
            </button>
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