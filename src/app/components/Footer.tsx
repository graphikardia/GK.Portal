'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, ArrowUpRight, Globe } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const links = {
    Services: [
      { label: 'SEO/AEO Architecture', href: '/services/seo' },
      { label: 'Social Media Growth', href: '/services/social-media' },
      { label: 'Digital Portals', href: '/services/website' },
      { label: 'Performance Ads', href: '/services/marketing' },
      { label: 'AI Lead Agents', href: '/services/chatbots' },
    ],
    Company: [
      { label: 'Our Story', href: '/about' },
      { label: 'Vault (Selected Work)', href: '/work' },
      { label: 'Client Results', href: '/case-studies' },
      { label: 'Testimonials', href: '/testimonials' },
      { label: 'Contact Node', href: '/contact' },
    ],
    Legal: [
      { label: 'Terms of Sync', href: '#' },
      { label: 'Privacy Protocol', href: '#' },
    ]
  };

  return (
    <footer className="bg-gk-secondary pt-32 pb-12 border-t border-gk-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-32">
          {/* BRAND */}
          <div className="lg:col-span-5">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
              <img src="/branding/logo_symbol.png" alt="GK" className="h-10 logo-filter" />
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl tracking-tighter text-gk-text1">GRAPHIKARDIA</span>
                <span className="text-[10px] font-mono tracking-[0.3em] text-gk-accent opacity-80 -mt-1 uppercase">Precision_Marketing_Systems</span>
              </div>
            </Link>
            <p className="font-body text-gk-text2 text-lg leading-relaxed max-w-sm mb-12 uppercase tracking-wider">
              WE ARCHITECT HIGH-VELOCITY ACQUISITION ENGINES FOR THE CLINICAL AND B2B ELITE.
            </p>
            <div className="flex gap-6">
              {[
                { icon: <Linkedin size={18} />, href: "#" },
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Twitter size={18} />, href: "#" }
              ].map((social, i) => (
                <a key={i} href={social.href} className="w-10 h-10 border border-gk-border flex items-center justify-center text-gk-text2 hover:text-gk-accent hover:border-gk-accent transition-all">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAV LINKS */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12">
            <div>
              <h4 className="section-label mb-8">Capabilities</h4>
              <ul className="space-y-4">
                {links.Services.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gk-text2 hover:text-gk-accent transition-colors text-xs font-bold uppercase tracking-widest">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="section-label mb-8">Node_System</h4>
              <ul className="space-y-4">
                {links.Company.map(link => (
                  <li key={link.label}>
                    <Link to={link.href} className="text-gk-text2 hover:text-gk-accent transition-colors text-xs font-bold uppercase tracking-widest">{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="section-label mb-8">Contact</h4>
              <ul className="space-y-4">
                 <li>
                    <a href="mailto:graphikardia@gmail.com" className="text-gk-text1 text-xs font-bold uppercase tracking-widest hover:text-gk-accent transition-colors flex items-center gap-2">
                       <Mail size={12} /> Email_Port
                    </a>
                 </li>
                 <li>
                    <span className="text-gk-text3 text-[10px] font-mono uppercase font-bold tracking-widest block mb-1">Bangalore_IN</span>
                    <span className="text-gk-text1 text-xs font-bold uppercase tracking-widest">Global_Operations</span>
                 </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="pt-12 border-t border-gk-border/50 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <span className="text-[10px] font-mono text-gk-text3 uppercase font-bold tracking-widest">©_{currentYear} GRAPHIKARDIA_SYSTEMS</span>
            <div className="h-1 w-1 bg-gk-accent rounded-full" />
            <span className="text-[10px] font-mono text-gk-text3 uppercase font-bold tracking-widest italic">Node:Prime_Bangalore</span>
          </div>
          
          <div className="flex gap-8">
            {links.Legal.map(link => (
              <a key={link.label} href={link.href} className="text-[10px] font-mono text-gk-text3 hover:text-gk-accent transition-colors uppercase font-bold tracking-widest">{link.label}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
