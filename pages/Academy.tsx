import React, { useState, useEffect } from 'react';
import { Share2, Check, Lightbulb } from 'lucide-react';
import { ACADEMY_CONTENT } from '../constants';

interface AcademyItem {
  id: number;
  title: string;
  description: string;
  icon: any;
  detail: string;
  type: string;
  example: string;
}

interface AcademyCardProps {
  item: AcademyItem;
  index: number;
}

const AcademyCard: React.FC<AcademyCardProps> = ({ item, index }) => {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareText = `${item.title}\n\n${item.description}\n\nمثال: ${item.example}\n\nیادگیری ترید با trade 724`;
    const shareData = {
      title: `آکادمی trade 724: ${item.title}`,
      text: shareText,
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Share skipped', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy', err);
      }
    }
  };

  const isRisk = item.type === 'risk';
  
  // Enhanced Hover Styles
  const borderColor = isRisk ? 'hover:border-red-500' : 'hover:border-green-500';
  const iconBg = isRisk 
    ? 'bg-red-500/10 text-red-400 border-red-500/20 group-hover:bg-red-500/20 group-hover:shadow-[0_0_20px_rgba(251,113,133,0.4)]' 
    : 'bg-green-500/10 text-green-400 border-green-500/20 group-hover:bg-green-500/20 group-hover:shadow-[0_0_20px_rgba(74,222,128,0.4)]';
  const glow = isRisk 
    ? 'hover:shadow-[0_0_50px_rgba(251,113,133,0.25)]' 
    : 'hover:shadow-[0_0_50px_rgba(74,222,128,0.25)]';
  const blobColor = isRisk ? 'bg-red-500' : 'bg-green-500';

  const Icon = item.icon;

  return (
    <div 
      className={`glass-panel rounded-3xl p-8 relative transition-all duration-300 ease-out ${borderColor} ${glow} group hover:-translate-y-3 hover:scale-105 overflow-hidden flex flex-col`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Enhanced Background Gradient Blob on Hover */}
      <div className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] transition-opacity duration-500 opacity-0 group-hover:opacity-30 ${blobColor}`}></div>
      
      <div className="flex items-start justify-between mb-6 relative z-10">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border ${iconBg} transition-all duration-300 group-hover:scale-110 group-hover:-rotate-6`}>
          <Icon size={28} />
        </div>
        <div className="flex flex-col items-end gap-2">
           <span className={`text-xs font-bold px-3 py-1 rounded-full border transition-colors duration-300 ${isRisk ? 'border-red-500/30 text-red-400 bg-red-500/5 group-hover:bg-red-500/10' : 'border-green-500/30 text-green-400 bg-green-500/5 group-hover:bg-green-500/10'}`}>
             {item.detail}
           </span>
           <button 
             onClick={handleShare}
             className="flex items-center gap-1 text-slate-500 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/5"
             title="اشتراک‌گذاری"
           >
             {copied ? (
               <>
                 <span className="text-xs text-green-400 font-bold">کپی شد</span>
                 <Check size={16} className="text-green-400" />
               </>
             ) : (
               <Share2 size={18} />
             )}
           </button>
        </div>
      </div>
      
      <h3 className={`text-xl font-bold text-white mb-3 transition-colors duration-300 ${isRisk ? 'group-hover:text-red-400' : 'group-hover:text-green-400'}`}>
        {item.title}
      </h3>
      
      <p className="text-slate-400 leading-relaxed text-sm relative z-10 group-hover:text-slate-200 transition-colors duration-300 mb-6 flex-grow">
        {item.description}
      </p>

      {/* Example Section */}
      <div className={`relative z-10 mt-auto rounded-xl p-4 border transition-colors duration-300 ${isRisk ? 'bg-red-500/5 border-red-500/10 group-hover:border-red-500/30' : 'bg-green-500/5 border-green-500/10 group-hover:border-green-500/30'}`}>
        <div className="flex items-center gap-2 mb-2">
          <Lightbulb size={16} className={isRisk ? 'text-red-400' : 'text-green-400'} />
          <span className={`text-xs font-bold ${isRisk ? 'text-red-300' : 'text-green-300'}`}>مثال کاربردی:</span>
        </div>
        <p className="text-sm text-slate-300 italic">
          "{item.example}"
        </p>
      </div>

      {/* Decorative line bottom */}
      <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${isRisk ? 'from-transparent via-red-500 to-transparent' : 'from-transparent via-green-500 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
    </div>
  );
};

const Academy: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized position (-1 to 1)
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Parallax Background Elements */}
      <div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0"
      >
        <div 
          className="absolute top-[10%] left-[10%] w-96 h-96 bg-green-500/10 rounded-full blur-[100px] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)` }}
        />
        <div 
          className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-blue-500/10 rounded-full blur-[90px] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)` }}
        />
        <div 
          className="absolute top-[40%] left-[60%] w-64 h-64 bg-purple-500/5 rounded-full blur-[80px] transition-transform duration-100 ease-out will-change-transform"
          style={{ transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)` }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-green-400 font-bold tracking-widest uppercase text-sm mb-2 block animate-pulse">پایگاه دانش</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 drop-shadow-lg">
            تسلط بر مفاهیم پایه
          </h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full shadow-[0_0_15px_#4ade80]"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {ACADEMY_CONTENT.map((item, idx) => (
             <AcademyCard key={item.id} item={item} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Academy;