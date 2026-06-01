import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        gk: {
          bg:           '#070709',
          secondary:    '#0E0E12',
          elevated:     '#16161C',
          accent:       '#C9A84C',
          'accent-dim': 'rgba(201,168,76,0.12)',
          text1:        '#F0EFE9',
          text2:        '#8B8A8F',
          text3:        '#4A4950',
          border:       '#1F1F26',
          'border-a':   'rgba(201,168,76,0.25)',
        },
        noir: {
          50: '#F8F9FA', 100: '#E0E0E0', 200: '#B0B0B0',
          300: '#707070', 400: '#404040', 500: '#222222',
          600: '#1A1A1A', 700: '#0F0F0F', 800: '#0A0A0A', 900: '#000000',
        },
      },
      animation: {
        'fade-up':      'fadeUp 0.55s ease-out forwards',
        'shimmer-gold': 'shimmerGold 3s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmerGold: {
          '0%':   { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
