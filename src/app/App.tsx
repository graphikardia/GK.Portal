'use client';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Route, BrowserRouter as Router, Routes, useNavigate } from 'react-router-dom';
import { ThemeProvider, useTheme } from '../lib/ThemeContext';
import { cn } from '../lib/utils';
import TestimonialsPage from './TestimonialsPage';
import WorkPage from './WorkPage';
import AdminPortal from './admin/page';
import { BeforeAfterSlider } from './components/BeforeAfterSlider';
import { CustomCursor } from './components/CustomCursor';
import { FooterCTA } from './components/FooterCTA';
import { HeroSection } from './components/HeroSection';
import { ImpactSidebar } from './components/ImpactSidebar';
import { KardiaMethodology } from './components/KardiaMethodology';
import { LoadingScreen } from './components/LoadingScreen';
import { Navigation } from './components/Navigation';
import { ProductVault } from './components/ProductVault';

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
    isDark ? root.classList.remove('light') : root.classList.add('light');
  }, [isDark]);
  return <div className={cn(isDark ? "dark" : "light")}>{children}</div>;
}

function MainLayout({ children }: { children?: React.ReactNode }) {
  const navigate = useNavigate();
  const [cart, setCart] = useState<any[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startHold = () => { timerRef.current = setTimeout(() => navigate('/admin'), 3000); };
  const endHold = () => { if (timerRef.current) clearTimeout(timerRef.current); };

  return (
    <div className="min-h-screen">
      <div onMouseDown={startHold} onMouseUp={endHold} onTouchStart={startHold} onTouchEnd={endHold}>
        <Navigation cartCount={cart.length} openSidebar={() => setIsSidebarOpen(true)} />
      </div>
      <main>
        {children || (
          <>
            <HeroSection />
            <KardiaMethodology />
            <ProductVault
              onAdd={(item) => { if (!cart.find(i => i.id === item.id)) { setCart([...cart, item]); setIsSidebarOpen(true); } }}
              selectedIds={cart.map(i => i.id)}
            />
            <BeforeAfterSlider />
          </>
        )}
      </main>
      <FooterCTA />
      <ImpactSidebar isOpen={isSidebarOpen} items={cart} onRemove={(id) => setCart(cart.filter(i => i.id !== id))} onClose={() => setIsSidebarOpen(false)} />
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  return (
    <ThemeProvider>
      <ThemeGate>
        <CustomCursor />
        <Router>
          <GlobalSystems />
          <AnimatePresence mode="wait">
            {loading ? (
              <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
            ) : (
              <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/work" element={<MainLayout><WorkPage /></MainLayout>} />
                <Route path="/testimonials" element={<MainLayout><TestimonialsPage /></MainLayout>} />
              </Routes>
            )}
            <Routes>
              <Route path="/admin" element={<AdminPortal />} hydrateFallbackElement={< LoadingScreen key="loader" onComplete={() => setLoading(false)} />} />
            </Routes>
          </AnimatePresence>
        </Router>
      </ThemeGate>
    </ThemeProvider>
  );
}
