import React, { useState, useEffect, useRef } from 'react';
import { LineChart, Shield, Brain, ArrowLeft, Target, Terminal, Activity, Zap } from 'lucide-react';
import { Link } from '../components/Navbar';
import { TELEGRAM_LINK, AFFILIATE_LINK } from '../constants';

const FadeInSection: React.FC<{ children: React.ReactNode; delay?: number }> = ({ children, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Analysis: React.FC = () => {
  const strategies = [
    {
      id: 1,
      title: "استراتژی هوشمند سطوح",
      icon: LineChart,
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "شناسایی سطوح کلیدی (Supply/Demand) با دقت هوش مصنوعی برای شکار بازگشت‌های قیمتی.",
      linkText: "جزئیات فنی",
      link: "/academy"
    },
    {
      id: 2,
      title: "مدیریت سرمایه الگوریتمیک",
      icon: Shield,
      color: "text-neon-red",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      description: "محاسبه دقیق ریسک ۱٪ با فرمول‌های پیشرفته. محافظت از حساب در برابر نوسانات شدید.",
      linkText: "اصول ریسک",
      link: "/academy"
    },
    {
      id: 3,
      title: "روانشناسی معاملاتی نوین",
      icon: Brain,
      color: "text-neon-green",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      description: "حذف احساسات با پایبندی به پلن معاملاتی. انضباط آهنین برای سود مستمر.",
      linkText: "ذهنیت برنده",
      link: "/academy"
    }
  ];

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <FadeInSection>
          <div className="text-center mb-16">
            <span className="text-neon-green font-bold tracking-widest uppercase text-sm mb-2 block animate-pulse">اتاق فرمان</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
              تحلیل‌های <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-green to-emerald-600">هوش مصنوعی (AI)</span>
            </h2>
            <div className="w-24 h-1 bg-neon-green mx-auto rounded-full shadow-[0_0_15px_#00ff41]"></div>
          </div>
        </FadeInSection>

        {/* Top Section: TradingView & Daily Analysis */}
        <FadeInSection delay={200}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            
            {/* TradingView Widget Container */}
            <div className="lg:col-span-2 glass-panel rounded-3xl p-1 overflow-hidden h-[500px] border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
               <div className="bg-black border-b border-white/5 p-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                     <Activity size={16} className="text-neon-green" />
                     <span className="text-sm font-bold text-slate-300">نمای تکنیکال (Technical Gauge)</span>
                  </div>
               </div>
               <div className="w-full h-full bg-black">
                 {/* Embed TradingView Technical Analysis Widget */}
                 <iframe 
                   scrolling="no" 
                   allowTransparency={true} 
                   frameBorder="0" 
                   src="https://s.tradingview.com/embed-widget/technical-analysis/?locale=en#%7B%22interval%22%3A%221m%22%2C%22width%22%3A%22100%25%22%2C%22isTransparent%22%3Atrue%2C%22height%22%3A%22100%25%22%2C%22symbol%22%3A%22FX%3AEURUSD%22%2C%22showIntervalTabs%22%3Atrue%2C%22displayMode%22%3A%22single%22%2C%22colorTheme%22%3A%22dark%22%7D" 
                   style={{ width: '100%', height: 'calc(100% - 45px)' }}
                   title="TradingView"
                 ></iframe>
               </div>
            </div>

            {/* Daily Analysis Terminal Card */}
            <div className="glass-panel rounded-3xl overflow-hidden border border-white/10 flex flex-col h-[500px]">
              {/* Terminal Header */}
              <div className="bg-black p-3 flex items-center justify-between border-b border-white/10">
                <div className="flex space-x-2 space-x-reverse">
                  <div className="w-3 h-3 rounded-full bg-neon-red"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-neon-green"></div>
                </div>
                <div className="text-xs text-slate-500 font-mono">ai-analysis.exe</div>
              </div>
              
              {/* Terminal Content */}
              <div className="p-6 flex-grow flex flex-col font-mono text-sm overflow-y-auto bg-black/50">
                <div className="text-neon-green mb-2">$ initiating ai_protocol_v2</div>
                <div className="text-slate-300 mb-4">> Analyzing market structure...</div>
                
                <div className="border border-neon-green/20 bg-neon-green/5 p-4 rounded-lg mb-4">
                  <div className="text-white font-bold mb-2 border-b border-neon-green/20 pb-2 flex justify-between">
                    <span>طلا (XAUUSD)</span>
                    <span className="text-xs text-slate-400">سیگنال AI</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    الگوی برگشتی در تایم‌فریم H4 شناسایی شد. حجم خریداران نهادی در ناحیه ۲۶۴۰ رو به افزایش است.
                  </p>
                  <div className="mt-3 flex items-center gap-2 text-xs">
                     <span className="px-2 py-0.5 bg-neon-green/20 text-neon-green rounded border border-neon-green/20">Long Setup</span>
                     <span className="text-slate-500">TP: 2665</span>
                  </div>
                </div>

                <div className="border border-neon-red/20 bg-neon-red/5 p-4 rounded-lg">
                  <div className="text-white font-bold mb-2 border-b border-neon-red/20 pb-2 flex justify-between">
                    <span>یورو دلار (EURUSD)</span>
                    <span className="text-xs text-slate-400">سیگنال AI</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-xs">
                    فشار فروش در سطح ۱.۰۵۰۰ ادامه دارد. اندیکاتورهای مومنتوم نزولی هستند.
                  </p>
                   <div className="mt-3 flex items-center gap-2 text-xs">
                     <span className="px-2 py-0.5 bg-neon-red/20 text-neon-red rounded border border-neon-red/20">Short Setup</span>
                     <span className="text-slate-500">TP: 1.0420</span>
                  </div>
                </div>
                
                <div className="mt-auto pt-4 text-slate-500 animate-pulse">
                  _ سیستم در حال پردازش دیتای جدید...
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Strategies Section */}
        <FadeInSection delay={400}>
          <div className="mb-20">
            <h3 className="text-2xl font-bold text-white mb-8 border-r-4 border-neon-green pr-4">استراتژی‌های هوشمند AI</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {strategies.map((strategy) => (
                <div key={strategy.id} className={`glass-panel p-8 rounded-3xl border ${strategy.borderColor} hover:scale-105 transition-transform duration-300 relative group flex flex-col`}>
                  <div className={`absolute top-0 right-0 w-24 h-24 ${strategy.bgColor} rounded-bl-[100px] -mr-4 -mt-4 z-0 opacity-50`}></div>
                  
                  <div className="relative z-10 flex-grow">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${strategy.bgColor} ${strategy.color} ${strategy.borderColor} mb-6`}>
                      <strategy.icon size={28} />
                    </div>
                    
                    <h4 className="text-xl font-bold text-white mb-3">{strategy.title}</h4>
                    <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>

                  <div className="relative z-10 mt-4 space-y-4">
                    <Link to={strategy.link} className={`inline-flex items-center text-xs font-bold ${strategy.color} hover:underline mb-2 block`}>
                      {strategy.linkText} <ArrowLeft size={12} className="mr-1" />
                    </Link>
                    
                    {/* Sales CTA Button */}
                    <a 
                      href={AFFILIATE_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-neon-green hover:text-black border border-white/10 hover:border-neon-green text-white rounded-xl text-sm font-bold transition-all shadow-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
                    >
                      <Zap size={16} />
                      اجرا با کد تخفیف Nikpour20
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInSection>

        {/* Call to Actions */}
        <FadeInSection delay={600}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             
             {/* ForFX Challenge CTA */}
             <div className="relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-slate-900 to-black border border-yellow-500/30 group">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="relative z-10 flex flex-col h-full justify-between items-start">
                   <div>
                      <div className="inline-block px-3 py-1 bg-yellow-500/20 text-yellow-400 text-xs font-bold rounded-full mb-4 border border-yellow-500/20">
                         پیشنهاد ویژه ترید
                      </div>
                      <h3 className="text-2xl font-black text-white mb-2">چالش پراپ فرم Forfx</h3>
                      <p className="text-slate-400 text-sm mb-6">
                         استراتژی‌های خود را در محیط واقعی تست کنید. با کد تخفیف ویژه، مسیر حرفه‌ای شدن را کوتاه‌تر کنید.
                      </p>
                   </div>
                   
                   <div className="w-full bg-slate-900/80 rounded-xl p-4 border border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="text-center sm:text-right">
                         <span className="block text-xs text-slate-500">کد تخفیف ۲۰ درصدی:</span>
                         <span className="font-mono text-xl font-bold text-yellow-400">Nikpour20</span>
                      </div>
                      <a 
                        href={AFFILIATE_LINK} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-slate-900 font-bold rounded-lg transition-colors shadow-[0_0_20px_rgba(234,179,8,0.3)] w-full sm:w-auto text-center"
                      >
                        ثبت نام در چالش
                      </a>
                   </div>
                </div>
             </div>

             {/* Telegram Signal CTA */}
             <div className="relative rounded-3xl p-8 overflow-hidden bg-gradient-to-br from-blue-900 to-black text-white shadow-[0_0_40px_rgba(37,99,235,0.2)] border border-blue-500/30 group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
                
                <div className="relative z-10 text-center h-full flex flex-col justify-center items-center">
                   <Target size={48} className="text-blue-400 mb-6 group-hover:scale-110 transition-transform duration-500" />
                   <h3 className="text-3xl font-black mb-4">کانال سیگنال VIP</h3>
                   <p className="text-blue-100 mb-8 max-w-sm">
                      تحلیل‌های لحظه‌ای و موقعیت‌های معاملاتی طلا و جفت‌ارزها را در کانال تلگرام دنبال کنید.
                   </p>
                   <a 
                     href={TELEGRAM_LINK}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] w-full sm:w-auto"
                   >
                     عضویت رایگان
                   </a>
                </div>
             </div>

          </div>
        </FadeInSection>

      </div>
    </div>
  );
};

export default Analysis;