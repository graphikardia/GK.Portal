'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

const faqs = [
  { q: 'What makes Graphikardia different from other agencies?', a: 'We focus on ROI-driven strategies with aggressive, viral-ready content. Our team combines creative excellence with data-backed optimization to deliver measurable results.' },
  { q: 'How quickly can I expect to see results?', a: 'Most clients see initial traction within 2-4 weeks. YouTube growth typically shows measurable results in 30-60 days, while performance marketing can show ROI within the first week.' },
  { q: 'Do you work with early-stage startups or only established brands?', a: 'We work with brands at all stages. Our flexible packages are designed to scale with your growth, from MVP launch to enterprise-level campaigns.' },
  { q: 'What platforms do you specialize in?', a: 'Our core expertise lies in YouTube, Instagram Reels, and TikTok. We also handle LinkedIn, Twitter, and emerging platforms based on your target audience.' },
  { q: 'How do you measure success?', a: 'We track comprehensive metrics: engagement rates, conversion rates, ROAS, subscriber growth, and revenue impact. Monthly reports with actionable insights are standard.' },
  { q: 'Can I hire you for just one service?', a: 'Absolutely. While we recommend our integrated approach for maximum impact, you can pick and choose individual services like thumbnail design, editing, or SEO audits.' },
];

export function FAQSection() {
  const { isDark } = useTheme();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 px-6">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-purple-500 mb-4 block">[Common Questions]</span>
          <h2 className="text-[8vw] md:text-[4vw] leading-[0.9] font-black uppercase italic tracking-tighter">
            FAQ<span className="text-purple-500">.</span>
          </h2>
        </div>

        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={cn(
                "border transition-colors",
                isDark ? "border-white/10" : "border-black/10"
              )}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className={cn(
                  "w-full p-6 flex items-center justify-between text-left transition-colors",
                  isDark ? "hover:bg-white/5" : "hover:bg-black/5"
                )}
              >
                <span className="text-lg font-bold uppercase italic tracking-tight pr-8">{faq.q}</span>
                <span className={cn("shrink-0 transition-transform", openIndex === i && "rotate-45")}>
                  <Plus size={20} />
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-sm font-mono opacity-60 leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
