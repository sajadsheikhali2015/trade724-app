import React from 'react';
import { Send, Globe } from 'lucide-react';
import { TELEGRAM_LINK } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-right">
            <div className="flex items-center justify-center md:justify-start space-x-2 space-x-reverse">
              <span className="text-lg font-bold text-slate-100">trade 724</span>
            </div>
            <p className="text-slate-400 text-sm mt-1">بر بازارها مسلط شوید، با انضباط.</p>
          </div>
          
          <div className="flex space-x-6 space-x-reverse">
             <a
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 space-x-reverse text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <Send size={18} />
              <span>کانال تلگرام</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 space-x-reverse text-slate-400 hover:text-emerald-500 transition-colors"
            >
              <Globe size={18} />
              <span>جامعه جهانی</span>
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-8 text-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} آکادمی trade 724. تمامی حقوق محفوظ است.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;