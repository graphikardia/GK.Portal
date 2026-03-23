'use client';
import { motion } from 'framer-motion';
import { ArrowUpRight, Globe, Stethoscope, GraduationCap, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../lib/ThemeContext'; 
import { cn } from '../lib/utils';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const projects = [
  { 
    id: 1, 
    title: 'Dr. Darshana Reddy', 
    cat: 'Healthcare Website', 
    size: 'lg', 
    website: 'drdarshanareddy.com',
    brief: 'Medical website with appointment booking & local SEO',
    color: 'from-green-500 to-emerald-600'
  },
  { 
    id: 2, 
    title: 'KGI Admissions', 
    cat: 'Educational Portal', 
    size: 'sm', 
    website: 'admissions.kgi.edu.in',
    brief: 'Dynamic admissions portal with lead generation',
    color: 'from-blue-500 to-cyan-600'
  },
  { 
    id: 3, 
    title: 'KGA Admissions', 
    cat: 'Educational Website', 
    size: 'sm', 
    website: 'admissions.koshysglobalacademia.com',
    brief: 'Professional admission website with CRM integration',
    color: 'from-purple-500 to-pink-600'
  },
  { 
    id: 4, 
    title: 'Graphikardia Agency', 
    cat: 'Agency Website', 
    size: 'md', 
    website: 'graphikardia.com',
    brief: 'Award-winning agency site with service vault',
    color: 'from-orange-500 to-red-600'
  },
  { 
    id: 5, 
    title: 'Gokula Portfolio', 
    cat: 'Personal Portfolio', 
    size: 'sm', 
    website: 'gokula.graphikardia.com',
    brief: 'Creative portfolio with case studies & SEO',
    color: 'from-pink-500 to-rose-600'
  },
  { 
    id: 6, 
    title: 'GK Portfolio', 
    cat: 'Professional Portfolio', 
    size: 'sm', 
    website: 'gk.graphikardia.com',
    brief: 'Detailed portfolio with voice search optimization',
    color: 'from-indigo-500 to-violet-600'
  }
];

export default function WorkPage() {
  const { isDark } = useTheme(); 

  return (
    <div className="min-h-screen" onMouseDown={() => {}} onMouseUp={() => {}}>
      <Navigation cartCount={0} openSidebar={() => {}} />
      <div className={cn(
        "pt-32 pb-20 px-6 max-w-[1800px] mx-auto min-h-screen",
        isDark ? "bg-[#050505]" : "bg-white"
      )}>
        <header className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-[10vw] md:text-[6vw] leading-[0.85] font-black uppercase tracking-tighter italic">
              Our Work<span className="text-purple-500">.</span>
            </h1>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.5em] opacity-30">Featured Projects</p>
          </motion.div>
          
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-60 max-w-md leading-relaxed">
            Showcasing websites and digital solutions we've crafted for clients across healthcare, education, and corporate sectors.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item, i) => (
            <motion.div 
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.6 }}
              className={cn(
                "group relative overflow-hidden rounded-2xl p-8 flex flex-col justify-between min-h-[350px]",
                isDark ? "bg-zinc-900/50 border border-white/5 hover:border-purple-500/30" : "bg-zinc-50 border border-black/5 hover:shadow-xl"
              )}
            >
              {/* Background gradient */}
              <div className={cn(
                "absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity",
                `bg-gradient-to-br ${item.color}`
              )} />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-purple-500">
                    [{item.cat}]
                  </span>
                  <a 
                    href={`https://${item.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all",
                      isDark ? "bg-white/10 hover:bg-white/20" : "bg-black/5 hover:bg-black/10"
                    )}
                  >
                    <Globe size={14} />
                  </a>
                </div>

                <h3 className="text-2xl font-black uppercase italic mb-2 group-hover:text-purple-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-mono opacity-60 mb-6">{item.brief}</p>

                <a 
                  href={`https://${item.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "text-xs font-mono uppercase tracking-wider inline-flex items-center gap-2 hover:text-purple-500 transition-colors",
                    isDark ? "text-white/60" : "text-black/60"
                  )}
                >
                  Visit Site <ArrowUpRight size={12} />
                </a>
              </div>

              <Link 
                to="/case-studies"
                className={cn(
                  "mt-4 pt-4 border-t text-xs font-bold uppercase tracking-widest flex items-center justify-between",
                  isDark ? "border-white/10 text-purple-500" : "border-black/10 text-purple-600"
                )}
              >
                <span>Learn More</span>
                <ArrowUpRight size={14} />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "mt-16 p-10 rounded-2xl text-center",
            isDark ? "bg-purple-500/10 border border-purple-500/20" : "bg-purple-50"
          )}
        >
          <h3 className="text-2xl font-black uppercase italic mb-4">Ready to Start Your Project?</h3>
          <p className="text-sm opacity-60 mb-6 max-w-lg mx-auto">Let's discuss how we can transform your digital presence like we did for these clients.</p>
          <Link 
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-purple-500 text-white font-bold uppercase tracking-widest text-xs rounded-xl hover:bg-purple-600 transition-colors"
          >
            Get In Touch <ArrowUpRight size={14} />
          </Link>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
