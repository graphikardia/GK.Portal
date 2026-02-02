import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App.tsx';
import { TerminalProvider } from './context/TerminalContext';
import { SpeedInsights } from '@vercel/speed-insights/react'
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <TerminalProvider>
      <App />
    </TerminalProvider>
    <SpeedInsights />
  </>
);
