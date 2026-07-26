import React, { useState } from 'react';
import { Mail, Sparkles, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

export const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    setStatus('loading');

    // Simulate API lead capture delay
    setTimeout(() => {
      setStatus('success');
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-16 sm:py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Glassmorphism Card Container */}
        <div className="relative rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-8 sm:p-12 lg:p-16 border border-blue-500/20 shadow-2xl shadow-blue-950/40 overflow-hidden backdrop-blur-xl">
          
          {/* Decorative Background Glow Spheres */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-300 font-semibold text-xs tracking-wide">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Novexa Insider Club</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-heading leading-tight">
                Unlock Exclusive Digital Skills & <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300 bg-clip-text text-transparent">Free Income Guides</span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-2xl font-normal leading-relaxed">
                Join over 15,000+ ambitious Pakistani students receiving weekly freelancing blueprints, AI prompt stacks, and early discount codes.
              </p>

              {/* Quick Feature Badges */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-300">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Weekly AI Workflows</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Free Roadmaps & Templates</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>No Spam. Unsubscribe Anytime</span>
                </div>
              </div>
            </div>

            {/* Right Form / Success Column */}
            <div className="lg:col-span-5">
              <div className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/15 shadow-xl">
                {status === 'success' ? (
                  <div className="text-center py-4 space-y-3 animate-in fade-in duration-300">
                    <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-white font-heading">
                      You're On The VIP List!
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Thank you for subscribing! Check your inbox <span className="font-semibold text-white">({email})</span> for your welcome freelancing roadmap gift.
                    </p>
                    <button
                      onClick={() => {
                        setStatus('idle');
                        setEmail('');
                      }}
                      className="mt-2 text-xs font-semibold text-blue-300 hover:text-white underline underline-offset-4 transition-colors"
                    >
                      Subscribe another email
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="newsletter-email" className="block text-xs font-semibold text-slate-200 mb-2">
                        Enter your best email address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                          <Mail className="w-4 h-4" />
                        </div>
                        <input
                          id="newsletter-email"
                          type="email"
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (error) setError('');
                          }}
                          placeholder="name@example.com"
                          className="w-full pl-10 pr-4 py-3 bg-slate-900/80 text-white placeholder-slate-400 text-sm rounded-xl border border-slate-700 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 transition-all"
                        />
                      </div>
                      {error && (
                        <p className="mt-1.5 text-xs text-rose-400 font-medium">
                          {error}
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={status === 'loading'}
                      className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white font-bold text-sm hover:from-blue-500 hover:to-blue-600 active:scale-[0.98] transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 group disabled:opacity-70"
                    >
                      {status === 'loading' ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Subscribing...</span>
                        </div>
                      ) : (
                        <>
                          <span>Join Free VIP Newsletter</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <p className="text-[11px] text-center text-slate-400">
                      We respect your privacy. Zero spam guaranteed.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
