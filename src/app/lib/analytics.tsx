'use client';
import { useEffect } from 'react';

const GA_MEASUREMENT_ID = ''; 
const FB_PIXEL_ID = ''; 

export function Analytics() {
  useEffect(() => {
    if (GA_MEASUREMENT_ID) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      document.head.appendChild(script);

      const w = window as any;
      w.dataLayer = w.dataLayer || [];
      w.gtag = function(...args: any[]) {
        w.dataLayer.push(args);
      };
      w.gtag('js', new Date());
      w.gtag('config', GA_MEASUREMENT_ID);
    }

    if (FB_PIXEL_ID) {
      const w = window as any;
      w.fbq = function() {
        w.fbq.queue.push(Array.prototype.slice.call(arguments));
      };
      w.fbq.queue = [];
      w.fbq('init', FB_PIXEL_ID);
      w.fbq('track', 'PageView');
    }
  }, []);

  return null;
}

export function trackEvent(action: string, data?: Record<string, any>) {
  const w = window as any;
  if (w.gtag) w.gtag('event', action, data);
  if (w.fbq) w.fbq('track', action, data);
}
