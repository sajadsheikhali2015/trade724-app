import React, { useState, useEffect } from 'react';
import { User, Save, Instagram, Twitter, Send, TrendingUp, TrendingDown, Zap, Shield, Brain, CheckCircle } from 'lucide-react';

const AVATARS = [
  { id: 'default', icon: User, label: 'تازه وارد' },
  { id: 'bull', icon: TrendingUp, label: 'گاوی (صعودی)' },
  { id: 'bear', icon: TrendingDown, label: 'خرسی (نزولی)' },
  { id: 'scalper', icon: Zap, label: 'اسکالپر' },
  { id: 'risk', icon: Shield, label: 'مدیر ریسک' },
  { id: 'analyst', icon: Brain, label: 'تحلیلگر' },
];

const Profile: React.FC = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [avatarId, setAvatarId] = useState('default');
  const [socials, setSocials] = useState({
    instagram: '',
    twitter: '',
    telegram: ''
  });
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    // Load data from localStorage on mount
    const savedProfile = localStorage.getItem('userProfile');
    if (savedProfile) {
      const data = JSON.parse(savedProfile);
      setName(data.name || '');
      setBio(data.bio || '');
      setAvatarId(data.avatarId || 'default');
      setSocials(data.socials || { instagram: '', twitter: '', telegram: '' });
    }
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const profileData = {
      name,
      bio,
      avatarId,
      socials
    };
    localStorage.setItem('userProfile', JSON.stringify(profileData));
    
    // Show success feedback
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
  };

  const SelectedAvatarIcon = AVATARS.find(a => a.id === avatarId)?.icon || User;

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-full mb-6 border border-white/10 shadow-[0_0_30px_rgba(74,222,128,0.15)] relative group">
            <SelectedAvatarIcon className="text-white drop-shadow-md transition-transform group-hover:scale-110" size={48} />
            <div className="absolute inset-0 rounded-full border border-green-500/30 animate-pulse"></div>
          </div>
          <h2 className="text-4xl font-black text-white mb-4">پروفایل تریدر</h2>
          <p className="text-slate-400 text-lg">
            هویت معاملاتی خود را بسازید و با دیگران به اشتراک بگذارید
          </p>
        </div>

        <form onSubmit={handleSave} className="glass-panel p-8 md:p-10 rounded-3xl border-t border-green-500/30 relative">
          
          {/* Avatar Selection */}
          <div className="mb-10">
            <label className="block text-sm font-bold text-slate-300 mb-4">انتخاب آواتار</label>
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
              {AVATARS.map((avatar) => {
                const Icon = avatar.icon;
                const isSelected = avatarId === avatar.id;
                return (
                  <button
                    key={avatar.id}
                    type="button"
                    onClick={() => setAvatarId(avatar.id)}
                    className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all duration-300 ${
                      isSelected 
                        ? 'bg-green-500/20 border-green-500 shadow-[0_0_15px_rgba(74,222,128,0.2)] transform -translate-y-1' 
                        : 'bg-slate-900/40 border-slate-700 hover:border-slate-500 hover:bg-slate-800'
                    }`}
                  >
                    <Icon size={24} className={isSelected ? 'text-green-400' : 'text-slate-400'} />
                    <span className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-slate-500'}`}>{avatar.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Personal Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 pb-2 border-b border-white/5">
                <User size={20} className="text-green-400" />
                اطلاعات شخصی
              </h3>
              
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">نام نمایشی</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام تریدر"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all placeholder-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400">بیوگرافی (درباره من)</label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  placeholder="استراتژی معاملاتی، تجربیات و اهداف..."
                  rows={4}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-green-500 focus:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all placeholder-slate-600 resize-none"
                />
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 pb-2 border-b border-white/5">
                <Send size={20} className="text-blue-400" />
                شبکه‌های اجتماعی
              </h3>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Instagram size={16} /> اینستاگرام
                </label>
                <input
                  type="text"
                  dir="ltr"
                  value={socials.instagram}
                  onChange={(e) => setSocials({...socials, instagram: e.target.value})}
                  placeholder="@username"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 focus:shadow-[0_0_15px_rgba(236,72,153,0.1)] transition-all placeholder-slate-600 text-left"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Twitter size={16} /> توییتر (X)
                </label>
                <input
                  type="text"
                  dir="ltr"
                  value={socials.twitter}
                  onChange={(e) => setSocials({...socials, twitter: e.target.value})}
                  placeholder="@username"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-400 focus:shadow-[0_0_15px_rgba(96,165,250,0.1)] transition-all placeholder-slate-600 text-left"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-400 flex items-center gap-2">
                  <Send size={16} /> تلگرام
                </label>
                <input
                  type="text"
                  dir="ltr"
                  value={socials.telegram}
                  onChange={(e) => setSocials({...socials, telegram: e.target.value})}
                  placeholder="@username"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all placeholder-slate-600 text-left"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 mt-8 pt-6 border-t border-white/5">
            {isSaved && (
              <span className="text-green-400 font-bold flex items-center gap-2 animate-pulse">
                <CheckCircle size={20} />
                تغییرات با موفقیت ذخیره شد
              </span>
            )}
            <button
              type="submit"
              className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-400 text-slate-900 font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(74,222,128,0.3)] hover:shadow-[0_0_30px_rgba(74,222,128,0.5)] transform hover:-translate-y-1"
            >
              <Save className="ml-2" size={20} />
              ذخیره پروفایل
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;