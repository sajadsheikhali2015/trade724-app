import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from '../components/Navbar';
import { Timer, CheckCircle, AlertTriangle, Copy, ChevronLeft, Award, ExternalLink, UploadCloud } from 'lucide-react';
import { QUIZ_QUESTIONS, TELEGRAM_LINK } from '../constants';

type Step = 'register' | 'quiz' | 'result';

interface UserData {
  name: string;
  email: string;
  phone: string;
}

// Updated Google Form URL
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/16zbfhXPjUJBqJc4UwQ92US1lyhCBWbC2MvcyuZk_NCw/formResponse";

const Quiz: React.FC = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('register');
  const [userData, setUserData] = useState<UserData>({ name: '', email: '', phone: '' });
  
  // Quiz State
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [timeLeft, setTimeLeft] = useState(120); // 120 seconds for 10 questions
  const [score, setScore] = useState(0);
  const [isCopied, setIsCopied] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const finishQuiz = useCallback((finalAnswers: string[] = answers) => {
    let correctCount = 0;
    finalAnswers.forEach((ans, index) => {
      if (ans === QUIZ_QUESTIONS[index].correctAnswer) {
        correctCount++;
      }
    });

    // Score Calculation: (Correct * 100) + (TimeLeft * 2)
    const calculatedScore = (correctCount * 100) + (timeLeft * 2);
    setScore(calculatedScore);

    // Prepare data for Google Form
    const formData = new FormData();
    formData.append('entry.80320769', userData.name);
    formData.append('entry.1177900284', userData.email);
    formData.append('entry.1202578890', userData.phone);
    formData.append('entry.114793784', calculatedScore.toString());

    // Send data using fetch with no-cors as requested
    fetch(GOOGLE_FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData
    })
    .then(() => {
      setSubmissionStatus('success');
      console.log('Quiz results submitted successfully to Google Form');
    })
    .catch(err => {
      console.error('Error submitting quiz results:', err);
      setSubmissionStatus('error');
    });

    setStep('result');
  }, [answers, timeLeft, userData]);

  // Timer Logic
  useEffect(() => {
    let timer: ReturnType<typeof setInterval>;
    if (step === 'quiz' && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (step === 'quiz' && timeLeft === 0) {
      finishQuiz();
    }
    return () => clearInterval(timer);
  }, [step, timeLeft, finishQuiz]);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('quiz');
  };

  const handleAnswer = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      finishQuiz(newAnswers);
    }
  };

  const getResultData = () => {
    if (score >= 800) {
      return {
        success: true,
        title: "تبریک! شما یک Master Trader هستید",
        code: "Nikpour20",
        discountDesc: "با این کد از ۲۰٪ تخفیف ویژه برای چالش‌های Forfx بهره‌مند شوید.",
        color: "text-neon-green",
        border: "border-neon-green",
        shadow: "shadow-[0_0_30px_rgba(0,255,65,0.3)]",
        icon: <Award size={64} className="text-neon-green drop-shadow-[0_0_15px_rgba(0,255,65,0.8)]" />
      };
    } else {
      return {
        success: false,
        title: "نیاز به آموزش بیشتر دارید",
        code: null,
        discountDesc: "برای یادگیری استراتژی‌های پیشرفته به کانال ما بپیوندید.",
        color: "text-slate-400",
        border: "border-slate-500",
        shadow: "shadow-none",
        icon: <AlertTriangle size={64} className="text-slate-400" />
      };
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  // --- Views ---

  if (step === 'register') {
    return (
      <div className="min-h-[85vh] flex items-center justify-center p-4">
        <div className="glass-panel p-8 md:p-12 rounded-3xl max-w-md w-full relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neon-green via-emerald-400 to-neon-green"></div>
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black text-white mb-3">چالش مهارت ترید</h2>
            <p className="text-slate-400">اطلاعات خود را وارد کنید و جایزه بگیرید.</p>
          </div>
          
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="block text-sm font-bold text-neon-green mb-2">نام تریدر</label>
              <input
                required
                type="text"
                placeholder="نام خود را وارد کنید..."
                className="w-full px-4 py-3 bg-black/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,65,0.1)] transition-all text-right placeholder-slate-600"
                value={userData.name}
                onChange={e => setUserData({...userData, name: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-neon-green mb-2">شماره تماس</label>
              <input
                required
                type="tel"
                placeholder="0912..."
                className="w-full px-4 py-3 bg-black/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,65,0.1)] transition-all text-left placeholder-slate-600"
                dir="ltr"
                value={userData.phone}
                onChange={e => setUserData({...userData, phone: e.target.value})}
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-neon-green mb-2">ایمیل</label>
              <input
                required
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 bg-black/50 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-neon-green focus:shadow-[0_0_15px_rgba(0,255,65,0.1)] transition-all text-left placeholder-slate-600"
                dir="ltr"
                value={userData.email}
                onChange={e => setUserData({...userData, email: e.target.value})}
              />
            </div>
            
            <button
              type="submit"
              className="w-full flex items-center justify-center py-4 mt-6 bg-neon-green hover:bg-emerald-400 text-black font-bold text-lg rounded-xl transition-all shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] transform hover:-translate-y-1"
            >
              شروع چالش
              <ChevronLeft className="mr-2" />
            </button>
          </form>
        </div>
      </div>
    );
  }

  if (step === 'quiz') {
    const question = QUIZ_QUESTIONS[currentQuestion];
    const progress = ((currentQuestion) / QUIZ_QUESTIONS.length) * 100;
    
    return (
      <div className="min-h-[85vh] flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="flex justify-between items-end mb-6 px-2">
            <div>
              <span className="text-slate-400 text-sm">سوال</span>
              <div className="text-3xl font-black text-white">
                {currentQuestion + 1} <span className="text-lg text-slate-500 font-normal">/ {QUIZ_QUESTIONS.length}</span>
              </div>
            </div>
            
            <div className={`flex items-center px-4 py-2 rounded-lg font-mono font-bold border ${timeLeft < 20 ? 'bg-neon-red/10 border-neon-red/30 text-neon-red animate-pulse' : 'bg-neon-green/10 border-neon-green/30 text-neon-green'}`}>
              <Timer size={18} className="ml-2" />
              {timeLeft}s
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-2 rounded-full mb-8 overflow-hidden">
            <div 
              className="bg-neon-green h-full rounded-full transition-all duration-500 shadow-[0_0_10px_#00ff41]" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>

          {/* Question Card */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl relative">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 leading-relaxed">
              {question.question}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {question.options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option)}
                  className="w-full text-right p-5 rounded-xl bg-black/40 border border-white/5 hover:border-neon-green/50 hover:bg-neon-green/10 transition-all text-slate-200 font-medium group relative overflow-hidden"
                >
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-lg">{option}</span>
                    <div className="w-4 h-4 rounded-full border border-slate-600 group-hover:border-neon-green group-hover:bg-neon-green transition-colors"></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Result Step
  const result = getResultData();
  
  return (
    <div className="min-h-[85vh] flex items-center justify-center p-4">
      <div className={`glass-panel p-8 md:p-12 rounded-3xl max-w-lg w-full text-center relative overflow-hidden border-2 ${result.border} ${result.shadow}`}>
        
        {/* User Feedback Message */}
        {submissionStatus === 'success' && (
          <div className="mb-6 bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-3 rounded-xl flex items-center justify-center gap-2 animate-pulse">
            <UploadCloud size={20} />
            <span className="font-bold text-sm">اطلاعات شما با موفقیت برای Trade 724 ثبت شد</span>
          </div>
        )}

        <div className="flex justify-center mb-6 animate-bounce-slow">
           {result.icon}
        </div>
        
        <h2 className="text-3xl font-black text-white mb-2">{userData.name}</h2>
        <div className="text-slate-400 mb-6 flex justify-center items-center gap-2">
            <span>امتیاز نهایی:</span>
            <span className={`text-2xl font-bold font-mono ${result.color}`}>{score}</span>
        </div>
        
        <h3 className={`text-2xl font-bold ${result.color} mb-6 leading-tight`}>{result.title}</h3>

        {/* Reward Box */}
        {result.success && result.code ? (
          <div className="relative group rounded-2xl p-6 mb-8 border border-neon-green bg-neon-green/10 shadow-[0_0_30px_rgba(0,255,65,0.15)] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neon-green/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            
            <p className="text-green-300 text-sm font-bold mb-4">{result.discountDesc}</p>
            
            <div className="flex items-center justify-between bg-black/80 border border-neon-green/40 rounded-xl p-2 pl-2 pr-6">
              <span className="font-mono text-2xl font-black text-neon-green tracking-widest drop-shadow-[0_0_8px_rgba(0,255,65,0.8)]" dir="ltr">
                {result.code}
              </span>
              <button 
                onClick={() => copyToClipboard(result.code!)}
                className="flex items-center gap-2 bg-neon-green hover:bg-emerald-400 text-black px-4 py-2 rounded-lg font-bold transition-all shadow-[0_0_15px_rgba(0,255,65,0.4)]"
              >
                {isCopied ? (
                  <>کپی شد <CheckCircle size={18} /></>
                ) : (
                  <>کپی کد <Copy size={18} /></>
                )}
              </button>
            </div>
          </div>
        ) : (
          <div className="p-4 rounded-xl bg-neon-red/10 border border-neon-red/20 text-neon-red text-sm mb-8">
             امتیاز شما کمتر از ۸۰۰ است. برای دریافت کد تخفیف، دانش خود را ارتقا دهید.
          </div>
        )}

        {/* Quote Section */}
        <div className="bg-black/50 rounded-xl p-4 border-r-4 border-neon-green mb-6 text-right">
          <p className="text-slate-300 text-sm italic leading-relaxed">
            <span className="text-neon-green font-bold not-italic ml-1">یادتان باشد:</span>
            تریدرهای موفق بر انضباط و مدیریت ریسک تمرکز می‌کنند.
          </p>
        </div>

        <div className="space-y-4">
           <a 
            href={TELEGRAM_LINK}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] group"
          >
            <ExternalLink className="ml-2 group-hover:rotate-45 transition-transform" size={20} />
            {result.success ? "عضویت در کانال تلگرام" : "آموزش در کانال تلگرام"}
          </a>
          
          <button 
            onClick={() => navigate('/leaderboard')}
            className="block w-full py-4 border border-slate-600 hover:bg-white/5 text-slate-300 rounded-xl transition-colors font-semibold"
          >
            مشاهده جدول برترین‌ها
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;