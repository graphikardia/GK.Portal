'use client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';
import TestimonialsPage from './TestimonialsPage';
import WorkPage from './WorkPage';
import AboutPage from './AboutPage';
import CaseStudiesPage from './CaseStudiesPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import AdminPortal from './admin/page';
import CinematicDemo from './CinematicDemo';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { FAQSection } from './components/FAQSection';
import { 
  HeroSection, 
  StatsSection, 
  ServicesSection, 
  CaseStudiesSection, 
  TestimonialsSection, 
  ClientsSection,
  CTASection
} from './components/HeroSection';
import { Footer } from './components/Footer';
import { GetQuoteForm } from './components/GetQuoteForm';
import { Analytics } from './lib/analytics';

function GlobalSystems() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.key.toLowerCase() === 'x') {
        e.preventDefault();
        navigate('/admin');
      }
    };

    const traceVisitor = async () => {
      try {
        const geoRes = await fetch('https://ipapi.co/json/');
        const geo = await geoRes.json();

        const log = {
          id: Date.now(),
          timestamp: new Date().toISOString(),
          device: navigator.userAgent.includes('Mobi') ? 'MOBILE' : 'DESKTOP',
          location: `${geo.city}, ${geo.country_name}`,
          is_india: geo.country_code === 'IN',
          path: window.location.pathname
        };

        const saved = localStorage.getItem('gk_terminal_db');
        if (saved) {
          const db = JSON.parse(saved);
          const updatedLogs = [log, ...(db.surveillance || [])].slice(0, 50);
          localStorage.setItem('gk_terminal_db', JSON.stringify({ ...db, surveillance: updatedLogs }));
        }
      } catch (e) { console.error("TRACE_FAILED"); }
    };

    window.addEventListener('keydown', handleKeyDown);
    traceVisitor();
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return null;
}

function ThemeGate({ children }: { children: React.ReactNode }) {
  const { isDark } = useTheme();
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    document.body.style.backgroundColor = isDark ? '#0a0a0a' : '#ffffff';
  }, [isDark]);
  return <div>{children}</div>;
}

function MainLayout() {
  const navigate = useNavigate();
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => { timerRef.current = setTimeout(() => navigate('/admin'), 3000); };
  const endHold = () => { if (timerRef.current) clearTimeout(timerRef.current); };

  return (
    <div className="min-h-screen">
      <div onMouseDown={startHold} onMouseUp={endHold} onTouchStart={startHold} onTouchEnd={endHold}>
        <Navigation />
      </div>
      <main>
        <CinematicDemo />
        <StatsSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <ClientsSection />
        <CTASection />
        <GetQuoteForm />
        <FAQSection />
        <Footer />
      </main>
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <ThemeProvider>
      <Analytics />
      <ThemeGate>
        <CustomCursor />
        <Router>
          <GlobalSystems />
          {loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
          ) : (
            <Routes>
              <Route path="/" element={<MainLayout />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/work" element={<WorkPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/admin" element={<AdminPortal />} />
              <Route path="/cinematic" element={<CinematicDemo />} />
            </Routes>
          )}
        </Router>
      </ThemeGate>
    </ThemeProvider>
  );
}