import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Montserrat", "sans-serif"],
        body: ["Outfit", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        tighter: "-0.05em",
        tightest: "-0.09em",
        widest: "1em",
      },
      colors: {
        noir: {
          50: '#F8F9FA',
          100: '#E0E0E0',
          200: '#B0B0B0',
          300: '#707070',
          400: '#404040',
          500: '#222222',
          600: '#1A1A1A',
          700: '#0F0F0F',
          800: '#0A0A0A',
          900: '#000000',
        },
        silver: '#E0E0E0',
        obsidian: '#0A0A0A',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
};
export default config;
