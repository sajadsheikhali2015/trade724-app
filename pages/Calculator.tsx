import React, { useState, useEffect } from 'react';
import { Calculator as CalcIcon, DollarSign, Percent, Scale, Box, Info } from 'lucide-react';

const Calculator: React.FC = () => {
  // Inputs
  const [price, setPrice] = useState<string>('');
  const [leverage, setLeverage] = useState<string>('100');
  const [lot, setLot] = useState<string>('1');
  const [contractSize, setContractSize] = useState<string>('100000');
  
  // Result
  const [margin, setMargin] = useState<number | null>(null);

  // Calculation Logic: Margin = (Price * Lot * Contract Size) / Leverage
  useEffect(() => {
    const p = parseFloat(price);
    const lev = parseFloat(leverage);
    const l = parseFloat(lot);
    const cs = parseFloat(contractSize);

    if (!isNaN(p) && !isNaN(lev) && !isNaN(l) && !isNaN(cs) && lev > 0) {
      const calculatedMargin = (p * l * cs) / lev;
      setMargin(calculatedMargin);
    } else {
      setMargin(null);
    }
  }, [price, leverage, lot, contractSize]);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
           <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/10 rounded-2xl mb-6 border border-green-500/20 shadow-[0_0_30px_rgba(74,222,128,0.2)]">
            <CalcIcon className="text-green-400" size={40} />
          </div>
          <h2 className="text-4xl font-black text-white mb-4 drop-shadow-lg">ماشین حساب مارجین</h2>
          <p className="text-slate-400 text-lg">
            مدیریت سرمایه دقیق برای ورود هوشمندانه به معامله
          </p>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-3xl relative overflow-hidden border-t border-green-500/30">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Input: Current Price */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <DollarSign size={16} className="text-green-400" />
                قیمت جاری (Price)
              </label>
              <input
                type="number"
                placeholder="مثلا 1.1000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all text-left placeholder-slate-600"
                dir="ltr"
              />
            </div>

            {/* Input: Leverage */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <Percent size={16} className="text-green-400" />
                ضریب اهرمی (Leverage)
              </label>
              <input
                type="number"
                placeholder="مثلا 100"
                value={leverage}
                onChange={(e) => setLeverage(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all text-left placeholder-slate-600"
                dir="ltr"
              />
            </div>

            {/* Input: Lot Size */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <Scale size={16} className="text-green-400" />
                حجم معامله (Lot)
              </label>
              <input
                type="number"
                placeholder="مثلا 1"
                value={lot}
                onChange={(e) => setLot(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all text-left placeholder-slate-600"
                dir="ltr"
              />
            </div>

            {/* Input: Contract Size */}
            <div className="space-y-2">
              <label className="text-sm font-bold text-slate-300 flex items-center gap-2">
                <Box size={16} className="text-green-400" />
                اندازه قرارداد (Contract Size)
              </label>
              <input
                type="number"
                placeholder="مثلا 100000"
                value={contractSize}
                onChange={(e) => setContractSize(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all text-left placeholder-slate-600"
                dir="ltr"
              />
            </div>
          </div>

          {/* Educational Note */}
          <div className="bg-slate-800/60 rounded-xl p-4 flex items-start gap-3 mb-8 border border-slate-700">
            <Info className="text-blue-400 flex-shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="font-bold text-blue-400 ml-1">نکته:</span>
              اندازه قرارداد (Contract Size) در فارکس معمولاً ۱۰۰,۰۰۰ و در طلا ۱۰۰ واحد است.
            </p>
          </div>

          {/* Result Box */}
          <div className="relative group rounded-2xl p-8 border border-green-500 bg-green-500/10 shadow-[0_0_40px_rgba(74,222,128,0.1)] text-center overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50"></div>
             
             <h3 className="text-slate-300 font-bold mb-3 uppercase tracking-wider text-sm">مارجین مورد نیاز</h3>
             
             <div className="text-4xl md:text-5xl font-black text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.6)] font-mono tracking-tight" dir="ltr">
               {margin !== null 
                 ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(margin)
                 : '$0.00'
               }
             </div>
          </div>

        </div>

        {/* Philosophy Quote */}
        <div className="mt-8 text-center bg-slate-900/40 p-6 rounded-2xl border border-slate-800">
           <p className="text-slate-400 italic font-medium">
             "تریدرهای موفق بر <span className="text-green-400 not-italic font-bold shadow-green-500/20">انضباط</span> و <span className="text-red-400 not-italic font-bold shadow-red-500/20">مدیریت ریسک</span> تمرکز می‌کنند."
           </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;