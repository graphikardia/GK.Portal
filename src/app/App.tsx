'use client';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { ThemeProvider, useTheme } from '../lib/ThemeContext';

// CORE COMPONENTS
import { CinematicHero } from './components/CinematicHero';
import { BentoGrid } from './components/BentoGrid';
import { MedicalHub } from './components/MedicalHub';
import { ProofSection } from './components/ProofSection';
import { CustomCursor } from './components/CustomCursor';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import AdminPortal from './admin/page';
import AboutPage from './AboutPage';
import CaseStudiesPage from './CaseStudiesPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';
import WorkPage from './WorkPage';
import TestimonialsPage from './TestimonialsPage';
import { Analytics } from './lib/analytics';

// SERVICE PAGES
import SEOPage from './services/SEOPage';
import SocialMediaPage from './services/SocialMediaPage';
import WebsitePage from './services/WebsitePage';
import MarketingPage from './services/MarketingPage';
import ChatbotsPage from './services/ChatbotsPage';
import AdvertisingPage from './services/AdvertisingPage';

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
      } catch (e) { /* silent fail */ }
    };

    window.addEventListener('keydown', handleKeyDown);
    traceVisitor();
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  return null;
}

// ScrollToTop must be INSIDE <Router> since it uses useLocation
function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function ThemeSync() {
  const { isDark } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(isDark ? 'dark' : 'light');
    // Removed inline background color, allowing index.css var(--gk-bg) to govern properly
  }, [isDark]);
  
  return null;
}

function MainLayout() {
  return (
    <main className="relative">
      <CinematicHero />
      <BentoGrid />
      <MedicalHub />
      <ProofSection />
    </main>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  
  return (
    <ThemeProvider>
      <Analytics />
      <ThemeSync />
      <div className="min-h-screen bg-gk-bg text-gk-text1 selection:bg-gk-accent selection:text-black transition-colors duration-500">
        <CustomCursor />
        <Router>
          <ScrollToTop />
          <GlobalSystems />
          {loading ? (
            <LoadingScreen onComplete={() => setLoading(false)} />
          ) : (
            <>
              <Navigation />
              <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/case-studies" element={<CaseStudiesPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/work" element={<WorkPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/admin" element={<AdminPortal />} />

                {/* SERVICE ROUTES */}
                <Route path="/services/seo" element={<SEOPage />} />
                <Route path="/services/social-media" element={<SocialMediaPage />} />
                <Route path="/services/website" element={<WebsitePage />} />
                <Route path="/services/marketing" element={<MarketingPage />} />
                <Route path="/services/chatbots" element={<ChatbotsPage />} />
                <Route path="/services/advertising" element={<AdvertisingPage />} />

                <Route path="*" element={<MainLayout />} />
              </Routes>
              <Footer />
            </>
          )}
        </Router>
      </div>
    </ThemeProvider>
  );
}