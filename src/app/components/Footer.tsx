'use client';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

const social = [
  { icon: Facebook, href: 'https://facebook.com/graphikardia', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com/graphikardia', label: 'Instagram' },
  { icon: Linkedin, href: 'https://linkedin.com/company/graphikardia', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/graphikardia', label: 'Twitter' },
];

export function Footer() {
  const { isDark } = useTheme();

  return (
    <footer className={cn("border-t border-foreground/5 py-24 bg-background")}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <img src="/branding/logo_symbol.png" alt="GK" className="h-10 logo-filter" />
              <h2 className="text-3xl font-black tracking-tightest uppercase">GRAPHIKARDIA</h2>
            </div>
            <p className="text-xl font-body text-muted-foreground max-w-md leading-relaxed uppercase">
              Architecting high-performance digital infrastructure for those who demand category dominance.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-8 text-glow">System_Map</h4>
              <ul className="space-y-4 text-[10px] font-black uppercase tracking-widest text-foreground/60">
                <li><Link to="/work" className="hover:text-foreground transition-colors">The_Vault</Link></li>
                <li><Link to="/about" className="hover:text-foreground transition-colors">System_Nodes</Link></li>
                <li><Link to="/case-studies" className="hover:text-foreground transition-colors">The_Proof</Link></li>
                <li><Link to="/blog" className="hover:text-foreground transition-colors">Intel_Logs</Link></li>
                <li><Link to="/contact" className="hover:text-foreground transition-colors">Handshake</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground mb-8 text-glow">Node_Connections</h4>
              <div className="flex gap-6">
                {social.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:opacity-50 transition-all"
                  >
                    <item.icon size={18} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-foreground/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[8px] font-bold uppercase tracking-[0.5em] text-muted-foreground">
            © {new Date().getFullYear()} GRAPHIKARDIA_SYSTEMS. ROOT_LEVEL_ACCESS.
          </p>
          <div className="flex gap-12 text-[8px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link to="/admin" className="opacity-10 hover:opacity-100 transition-opacity">Terminal_X</Link>
            <a href="/privacy" className="hover:text-foreground transition-colors">Privacy_Protocol</a>
            <a href="/terms" className="hover:text-foreground transition-colors">Terms_of_Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
