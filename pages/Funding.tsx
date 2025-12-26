import React from 'react';
import { Crown, Zap, Timer, CheckCircle2 } from 'lucide-react';
import { AFFILIATE_LINK } from '../constants';

const Funding: React.FC = () => {
  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6">دریافت سرمایه و <span className="text-neon-green">چالش‌ها</span></h2>
            <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_15px_#00ff41]"></div>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-lg">
                مناسب‌ترین حساب معاملاتی خود را انتخاب کنید و با سرمایه ما ترید کنید.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Legend */}
            <div className="glass-panel p-8 rounded-3xl border border-neon-green/30 hover:border-neon-green transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.2)] group flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neon-green/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Crown size={32} className="text-yellow-400" />
                    </div>
                </div>
                
                <h3 className="text-2xl font-black text-white text-center mb-3">حساب لجند</h3>
                <p className="text-center text-slate-400 text-sm mb-8 h-10">ایده‌آل برای تریدرهای بلندمدت با بیشترین سهم سود در بازار.</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 size={18} className="text-neon-green" />
                        <span className="text-sm font-bold text-slate-200">قابلیت تکرار رایگان</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-neon-green/30 shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                        <CheckCircle2 size={18} className="text-neon-green" />
                        <span className="text-sm font-bold text-slate-200">پرداخت سود <span className="text-neon-green drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">۹۰ درصد</span></span>
                    </div>
                </div>

                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-neon-green hover:bg-emerald-400 text-black font-bold text-center transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transform group-hover:-translate-y-1">
                    دریافت حساب لجند
                </a>
            </div>

            {/* Card 2: Peak Scalp */}
            <div className="glass-panel p-8 rounded-3xl border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] group flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 border border-blue-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Zap size={32} className="text-blue-400" />
                    </div>
                </div>
                
                <h3 className="text-2xl font-black text-white text-center mb-3">حساب پیک اسکلپ</h3>
                <p className="text-center text-slate-400 text-sm mb-8 h-10">طراحی شده برای کسانی که در تایم‌فریم‌های پایین شکارچی سود هستند.</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 size={18} className="text-blue-400" />
                        <span className="text-sm font-bold text-slate-200">مناسب برای اسکلپرها</span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 size={18} className="text-blue-400" />
                        <span className="text-sm font-bold text-slate-200">کمترین اسپرد و اجرای آنی</span>
                    </div>
                </div>

                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-center transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transform group-hover:-translate-y-1">
                    شروع اسکلپینگ
                </a>
            </div>

            {/* Card 3: Flash */}
            <div className="glass-panel p-8 rounded-3xl border border-purple-500/30 hover:border-purple-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] group flex flex-col relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                
                <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                            <Timer size={32} className="text-purple-400" />
                    </div>
                </div>
                
                <h3 className="text-2xl font-black text-white text-center mb-3">حساب فلش</h3>
                <p className="text-center text-slate-400 text-sm mb-8 h-10">سریع‌ترین راه برای نقد کردن سود؛ بدون معطلی به درآمد برسید.</p>
                
                <div className="space-y-4 mb-8 flex-grow">
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-neon-green/30 shadow-[0_0_10px_rgba(0,255,65,0.1)]">
                        <CheckCircle2 size={18} className="text-neon-green" />
                        <span className="text-sm font-bold text-slate-200">برداشت سریع <span className="text-neon-green drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]">۱۰ روزه</span></span>
                    </div>
                    <div className="flex items-center gap-3 bg-black/40 p-3 rounded-xl border border-white/5">
                        <CheckCircle2 size={18} className="text-purple-400" />
                        <span className="text-sm font-bold text-slate-200">مسیر کوتاه تا تسویه</span>
                    </div>
                </div>

                <a href={AFFILIATE_LINK} target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-center transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transform group-hover:-translate-y-1">
                    دریافت حساب فلش
                </a>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Funding;