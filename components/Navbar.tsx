import React, { useState } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

// Re-export specific components/hooks to maintain compatibility with other files
export { Link, useLocation, useNavigate };

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'صفحه اصلی', path: '/' },
    { name: 'دریافت سرمایه', path: '/funding' },
    { name: 'آکادمی هوشمند', path: '/academy' },
    { name: 'تحلیل‌های AI', path: '/analysis' },
    { name: 'ماشین حساب ریسک', path: '/calculator' },
    { name: 'چالش مهارت', path: '/quiz' },
    { name: 'برترین‌ها', path: '/leaderboard' },
    { name: 'پروفایل', path: '/profile' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="glass-panel border-b-0 border-b-white/5 fixed w-full z-50 transition-all duration-300 top-12 md:top-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Link to="/" className="flex items-center space-x-3 space-x-reverse group">
              <div className="bg-neon-green/10 border border-neon-green/50 p-2 rounded-lg text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.3)]">
                <TrendingUp size={28} strokeWidth={2.5} />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                trade <span className="text-neon-green">724</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden lg:block">
            <div className="mr-6 flex items-baseline space-x-6 space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-3 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-neon-green bg-neon-green/10 shadow-[0_0_10px_rgba(0,255,65,0.1)] border border-neon-green/20'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="-mr-2 flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden glass-panel border-t border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-3 rounded-md text-base font-bold ${
                  isActive(link.path)
                    ? 'text-neon-green bg-neon-green/10'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;