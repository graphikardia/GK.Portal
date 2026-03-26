'use client';

import { CinematicHero } from "./components/ui/cinematic-landing-hero";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CinematicDemo() {
  return (
    <CinematicHero 
      brandName="GK"
      tagline1="We Build Digital"
      tagline2="Experiences That Drive Results"
      cardHeading="Digital Marketing Agency"
      cardDescription={<><span className="text-white font-semibold">GK</span> helps ambitious businesses scale with strategic digital marketing, stunning design, and cutting-edge development. Transform your brand with ROI-focused strategies.</>}
      metricValue={50}
      metricLabel="Projects Delivered"
      ctaHeading="Ready to Scale?"
      ctaDescription="Transform your brand with strategic digital marketing, stunning design, and cutting-edge development. We help ambitious businesses scale."
      ctaButtons={
        <div className="flex flex-col sm:flex-row gap-6">
          <Link to="/contact" className="btn-modern-light flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group">
            <span className="text-xl font-bold text-[#DC143C]">Start Your Project</span>
            <ArrowRight className="w-5 h-5 text-[#DC143C] group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/work" className="btn-modern-dark flex items-center justify-center gap-3 px-8 py-4 rounded-[1.25rem] group">
            <span className="text-xl font-bold">View Our Work</span>
          </Link>
        </div>
      }
      badge1={{
        icon: "📈",
        title: "5x ROI",
        subtitle: "Average Return"
      }}
      badge2={{
        icon: "🏆",
        title: "95% Satisfaction",
        subtitle: "Client Rating"
      }}
    />
  );
}