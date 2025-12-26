import React, { useEffect } from 'react';
import { Send } from 'lucide-react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Academy from './pages/Academy';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import Calculator from './pages/Calculator';
import Profile from './pages/Profile';
import Analysis from './pages/Analysis';
import Funding from './pages/Funding';
import { TELEGRAM_LINK } from './constants';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Animated Background Component
const Background: React.FC = () => {
  // Generate random candlesticks
  const candles = Array.from({ length: 20 }).map((_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    height: `${20 + Math.random() * 60}px`,
    color: Math.random() > 0.5 ? '#00ff41' : '#ff3131', // Neon Green or Neon Red
    delay: `${Math.random() * 5}s`
  }));

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black/90 z-10"></div>
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] z-0"></div>
      
      {/* Floating Candles */}
      {candles.map((candle, i) => (
        <div 
          key={i}
          className="candlestick z-0"
          style={{
            left: candle.left,
            top: candle.top,
            height: candle.height,
            backgroundColor: candle.color,
            animationDelay: candle.delay,
            boxShadow: `0 0 10px ${candle.color}`
          }}
        ></div>
      ))}
    </div>
  );
};

const TickerTape: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbols": [
        {
          "proName": "FOREXCOM:XAUUSD",
          "title": "Gold"
        },
        {
          "proName": "FX_IDC:EURUSD",
          "title": "EUR/USD"
        },
        {
          "proName": "BITSTAMP:BTCUSD",
          "title": "Bitcoin"
        },
        {
          "proName": "FX_IDC:USDJPY",
          "title": "USD/JPY"
        }
      ],
      "showSymbolLogo": true,
      "isTransparent": true,
      "displayMode": "adaptive",
      "colorTheme": "dark",
      "locale": "en"
    });
    
    const container = document.getElementById('ticker-tape-container');
    if (container) {
      container.innerHTML = ''; // Clear previous
      container.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-12 z-[60] bg-black border-b border-white/5">
      <div id="ticker-tape-container" className="tradingview-widget-container w-full h-full">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
  );
};

const FloatingTelegram: React.FC = () => (
  <a
    href={TELEGRAM_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.5)] transition-all hover:scale-110 flex items-center justify-center animate-bounce-slow"
  >
    <Send size={24} />
  </a>
);

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen text-slate-100 selection:bg-neon-green selection:text-black relative" dir="rtl">
        <Background />
        
        <div className="relative z-10 flex flex-col min-h-screen">
          <TickerTape />
          <Navbar />
          <main className="flex-grow pt-32">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/analysis" element={<Analysis />} />
              <Route path="/funding" element={<Funding />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/calculator" element={<Calculator />} />
              <Route path="/leaderboard" element={<Leaderboard />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
        <FloatingTelegram />
      </div>
    </HashRouter>
  );
};

export default App;