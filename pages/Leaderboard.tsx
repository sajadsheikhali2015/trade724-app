import React from 'react';
import { Award, TrendingUp, Crown, Calendar } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const topTraders = [
    { rank: 1, name: "Ali Rezai", score: 1240, badge: "Master Trader", date: "۱۴۰۳/۰۹/۱۵ - ۱۰:۳۰" },
    { rank: 2, name: "Sarah J.", score: 1180, badge: "Master Trader", date: "۱۴۰۳/۰۹/۱۴ - ۱۸:۴۵" },
    { rank: 3, name: "Michael R.", score: 1150, badge: "Master Trader", date: "۱۴۰۳/۰۹/۱۴ - ۰۹:۱۵" },
    { rank: 4, name: "David Chen", score: 920, badge: "Master Trader", date: "۱۴۰۳/۰۹/۱۳ - ۲۲:۱۰" },
    { rank: 5, name: "Jessica Cole", score: 780, badge: "Rising Star", date: "۱۴۰۳/۰۹/۱۲ - ۱۴:۵۰" },
    { rank: 6, name: "M. Vahidi", score: 650, badge: "Rising Star", date: "۱۴۰۳/۰۹/۱۲ - ۱۱:۲۰" },
    { rank: 7, name: "Elena P.", score: 510, badge: "Rising Star", date: "۱۴۰۳/۰۹/۱۱ - ۱۶:۰۵" },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-full mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <Crown className="text-green-400" size={40} />
          </div>
          <h2 className="text-4xl font-black text-white mb-4">تالار مشاهیر</h2>
          <p className="text-slate-400 text-lg">
            برترین تریدرهای هفته با بالاترین امتیاز انضباط و دانش
          </p>
        </div>

        <div className="glass-panel rounded-3xl overflow-hidden border-0 ring-1 ring-white/10 shadow-2xl">
          <div className="overflow-x-auto">
            <table className="w-full text-right">
              <thead>
                <tr className="bg-slate-900/80 text-slate-400 text-sm uppercase tracking-wider border-b border-white/5">
                  <th className="px-6 py-6 font-bold">رتبه</th>
                  <th className="px-6 py-6 font-bold">تریدر</th>
                  <th className="px-6 py-6 font-bold">سطح</th>
                  <th className="px-6 py-6 font-bold">تاریخ ثبت</th>
                  <th className="px-6 py-6 font-bold text-left">امتیاز کل</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {topTraders.map((trader) => (
                  <tr key={trader.rank} className="hover:bg-white/5 transition-colors group">
                    <td className="px-6 py-5 whitespace-nowrap">
                      {trader.rank === 1 ? (
                        <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-yellow-400 to-yellow-600 text-slate-900 font-black rounded-lg shadow-[0_0_15px_rgba(250,204,21,0.5)]">۱</span>
                      ) : trader.rank === 2 ? (
                        <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-slate-300 to-slate-500 text-slate-900 font-black rounded-lg">۲</span>
                      ) : trader.rank === 3 ? (
                        <span className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-amber-700 to-amber-800 text-amber-100 font-black rounded-lg">۳</span>
                      ) : (
                        <span className="flex items-center justify-center w-10 h-10 text-slate-500 font-bold bg-slate-800 rounded-lg">#{trader.rank}</span>
                      )}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-12 w-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-lg font-bold text-slate-300">
                          {trader.name.charAt(0)}
                        </div>
                        <div className="mr-4">
                          <div className="text-base font-bold text-white group-hover:text-green-400 transition-colors">{trader.name}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className={`px-4 py-1.5 inline-flex text-xs font-bold rounded-full border ${
                        trader.badge === 'Master Trader' 
                          ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                          : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                      }`}>
                        {trader.badge === 'Master Trader' ? 'سلطان سود' : 'ستاره نوظهور'}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-slate-400 text-sm">
                      <div className="flex items-center gap-2">
                         <Calendar size={14} className="opacity-50" />
                         <span dir="ltr">{trader.date}</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap text-left">
                      <div className="flex items-center justify-end gap-2 font-mono text-lg font-bold text-white">
                        <TrendingUp size={16} className="text-green-500" />
                        {trader.score}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;