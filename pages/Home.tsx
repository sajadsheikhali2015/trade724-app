import React, { useState, useEffect } from 'react';
import { ArrowLeft, Play, Users, Activity } from 'lucide-react';
import { Link } from '../components/Navbar';
import { AFFILIATE_LINK } from '../constants';

const Home: React.FC = () => {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      try {
        const { name } = JSON.parse(storedProfile);
        if (name) setUserName(name);
      } catch (e) {
        console.error('Error parsing profile', e);
      }
    }
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center py-20 overflow-hidden">
        {/* Decorative ambient light */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-green-500/20 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-red-500/10 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="inline-flex items-center rounded-full px-4 py-1.5 text-sm font-medium text-neon-green border border-neon-green/30 bg-neon-green/5 mb-8 animate-pulse">
            <span className="w-2 h-2 rounded-full bg-neon-green ml-2 shadow-[0_0_10px_#00ff41]"></span>
            پلتفرم تخصصی آموزش ترید
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight drop-shadow-2xl">
            آینده ترید شما <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-neon-green to-emerald-600">
              از اینجا شروع می‌شود
            </span>
          </h1>

          {/* Dynamic Welcome Message */}
          <div className="mb-8 text-xl md:text-2xl font-bold text-slate-200 animate-fade-in">
            {userName ? (
              <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                سلام <span className="text-neon-green">{userName}</span> عزیز، وقت شکار سود است! 🦅
              </span>
            ) : (
              <span className="inline-block py-2 px-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                به جمع <span className="text-neon-green">نخبگان بازار</span> خوش آمدید 🚀
              </span>
            )}
          </div>
          
          <p className="mx-auto mt-4 max-w-2xl text-xl text-slate-300 mb-10 leading-relaxed">
            با آکادمی <span className="font-bold text-white">trade 724</span>، استراتژی‌های حرفه‌ای را بیاموزید و مسیر خود را به سمت استقلال مالی هموار کنید.
          </p>
          
          {/* Stat Counter */}
          <div className="flex justify-center mb-12">
            <div className="glass-panel px-6 py-3 rounded-2xl flex items-center space-x-3 space-x-reverse">
              <div className="bg-blue-500/20 p-2 rounded-full">
                <Users className="text-blue-400" size={20} />
              </div>
              <div className="text-right">
                <p className="text-sm text-slate-400">جامعه فعال</p>
                <p className="text-lg font-bold text-white">بیش از ۱۰۰۰ تریدر در حال آموزش</p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <Link
              to="/quiz"
              className="relative overflow-hidden inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-black bg-neon-green hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(0,255,65,0.4)] hover:shadow-[0_0_50px_rgba(0,255,65,0.6)] group"
            >
              <span className="relative z-10 flex items-center">
                شروع چالش ۱۰ مرحله‌ای
                <Play className="mr-2 -ml-1 h-5 w-5 fill-black group-hover:scale-110 transition-transform" />
              </span>
            </Link>
            
            <Link
              to="/academy"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold rounded-xl text-white glass-panel hover:bg-white/10 transition-all border border-white/10 hover:border-white/30"
            >
              ورود به آکادمی
              <ArrowLeft className="mr-2 -ml-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 relative border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {/* Feature 1 */}
             <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-neon-green/30 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <Activity className="text-neon-green mb-6" size={40} />
                <h3 className="text-xl font-bold text-white mb-2">تحلیل تکنیکال</h3>
                <p className="text-slate-400">یادگیری الگوهای قیمتی و رفتار بازار با متدهای نوین.</p>
             </div>
             
             {/* Feature 2 */}
             <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-red-500/30 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="mb-6">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fb7185" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">مدیریت ریسک</h3>
                <p className="text-slate-400">محافظت از سرمایه در برابر نوسانات شدید بازار.</p>
             </div>
             
             {/* Feature 3 */}
             <div className="glass-panel p-8 rounded-3xl relative overflow-hidden group hover:border-blue-500/30 transition-all">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                <div className="mb-6">
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">روانشناسی بازار</h3>
                <p className="text-slate-400">کنترل ذهن و احساسات برای تصمیم‌گیری‌های منطقی.</p>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;