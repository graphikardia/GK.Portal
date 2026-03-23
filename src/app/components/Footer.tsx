'use client';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter, Send } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

const services = [
  { label: 'SEO Services', href: '/services/seo' },
  { label: 'Social Media Marketing', href: '/services/social-media' },
  { label: 'Website Design', href: '/services/website' },
  { label: 'Performance Marketing', href: '/services/marketing' },
  { label: 'AI Chatbots', href: '/services/chatbots' },
  { label: 'Advertising', href: '/services/advertising' },
];

const company = [
  { label: 'About Us', href: '/about' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Portfolio', href: '/work' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'Testimonials', href: '/testimonials' },
];

const social = [
  { icon: Facebook, href: 'https://facebook.com/graphikardia', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/graphikardia', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/graphikardia', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/graphikardia', label: 'Twitter' },
];

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={cn("border-t", isDark ? "bg-[#0a0a0a] border-white/10" : "bg-white border-black/10")}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className={cn("text-2xl font-bold", isDark ? "text-white" : "text-black")}>
              GRAPHIKARDIA
            </Link>
            <p className={cn("text-sm leading-relaxed", isDark ? "text-white/60" : "text-black/60")}>
              Professional digital marketing agency helping businesses grow with SEO, social media, web design, and performance marketing.
            </p>
            <div className="flex gap-4">
              {social.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "p-2 rounded-full transition-colors",
                    isDark ? "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white" : "bg-black/10 text-black/70 hover:bg-black/20 hover:text-black"
                  )}
                  aria-label={item.label}
                >
                  <item.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className={cn("text-sm font-semibold uppercase tracking-widest mb-6", isDark ? "text-white" : "text-black")}>
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn("text-sm transition-colors", isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className={cn("text-sm font-semibold uppercase tracking-widest mb-6", isDark ? "text-white" : "text-black")}>
              Company
            </h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn("text-sm transition-colors", isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className={cn("text-sm font-semibold uppercase tracking-widest mb-6", isDark ? "text-white" : "text-black")}>
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail size={18} className={cn("mt-0.5", isDark ? "text-white/60" : "text-black/60")} />
                <a href="mailto:graphikardia@gmail.com" className={cn("text-sm", isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black")}>
                  graphikardia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className={cn("mt-0.5", isDark ? "text-white/60" : "text-black/60")} />
                <a href="tel:+917975594203" className={cn("text-sm", isDark ? "text-white/60 hover:text-white" : "text-black/60 hover:text-black")}>
                  +91 7975594203
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className={cn("mt-0.5", isDark ? "text-white/60" : "text-black/60")} />
                <span className={cn("text-sm", isDark ? "text-white/60" : "text-black/60")}>
                  Bangalore, Karnataka, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className={cn("mt-16 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4", isDark ? "border-white/10" : "border-black/10")}>
          <p className={cn("text-sm", isDark ? "text-white/40" : "text-black/40")}>
            © {new Date().getFullYear()} Graphikardia. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className={cn("text-sm", isDark ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black")}>
              Privacy Policy
            </Link>
            <Link to="/terms" className={cn("text-sm", isDark ? "text-white/40 hover:text-white" : "text-black/40 hover:text-black")}>
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
