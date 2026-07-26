import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, MessageCircle, Sparkles, TrendingUp, Award, 
  Users, CheckCircle2, ShieldCheck, Play, Star, Zap, Laptop, Globe
} from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

export const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'analytics' | 'ai'>('analytics');
  const [counter, setCounter] = useState(12480);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleWhatsAppEnroll = () => {
    triggerConfetti();
    window.open(getWhatsAppLink("Hi Novexa Academy, I want to enroll in a course."), "_blank");
  };

  return (
    <section id="hero" className="relative pt-32 sm:pt-40 pb-20 md:pb-28 overflow-hidden">
      
      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 via-purple-500/10 to-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Headlines & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 shadow-sm text-xs font-semibold text-blue-700 animate-pulse-slow">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <Sparkles className="w-3.5 h-3.5 text-purple-600" />
              <span>Next-Gen Practical Skill Academy</span>
              <span className="px-1.5 py-0.5 rounded-md bg-blue-600 text-white text-[10px] font-bold uppercase">New 2026</span>
            </div>

            {/* Luxury Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Upgrade Your Skills.{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent block mt-1">
                Build Your Digital Future.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 max-w-2xl font-normal leading-relaxed">
              Master practical digital skills and learn directly from premium industry-focused courses. Build real portfolio projects, automate freelancing with AI, and earn in high-value global currencies.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-2xl bg-slate-900 text-white font-bold text-sm shadow-xl shadow-slate-900/10 hover:bg-blue-600 hover:shadow-blue-600/25 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={handleWhatsAppEnroll}
                className="shine-button inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current text-white/90" />
                <span>Enroll on WhatsApp</span>
              </button>
            </div>

            {/* Trust Highlights */}
            <div className="pt-6 border-t border-slate-200/80 w-full grid grid-cols-3 gap-4 sm:gap-6">
              <div>
                <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-xl sm:text-2xl font-heading">
                  <span>{counter.toLocaleString()}</span>
                  <span className="text-blue-600">+</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">Active Students</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-xl sm:text-2xl font-heading">
                  <span>98.4%</span>
                  <Star className="w-4 h-4 text-amber-500 fill-amber-500 inline" />
                </div>
                <div className="text-xs text-slate-500 font-medium">Satisfaction Score</div>
              </div>

              <div>
                <div className="flex items-center gap-1.5 text-slate-900 font-extrabold text-xl sm:text-2xl font-heading">
                  <span>PKR 2.4M</span>
                  <TrendingUp className="w-4 h-4 text-emerald-500 inline" />
                </div>
                <div className="text-xs text-slate-500 font-medium">Student Earnings</div>
              </div>
            </div>

            {/* Micro Rating Badge */}
            <div className="flex items-center gap-3 pt-2">
              <div className="flex -space-x-2 overflow-hidden">
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=100&q=80" alt="Student" />
                <img className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="Student" />
              </div>
              <div className="text-xs text-slate-600">
                <span className="font-bold text-slate-900">4.9/5 Rating</span> from 1,200+ verified graduate reviews
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: 3D Interactive SaaS Workspace Display */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Container Frame */}
            <div className="relative glass-card rounded-3xl p-5 border border-slate-200/90 shadow-2xl shadow-blue-900/10 transition-all">
              
              {/* Workspace Header Tabs */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-200/80 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-400" />
                  <div className="w-3 h-3 rounded-full bg-amber-400" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  <span className="text-xs font-semibold text-slate-400 ml-2">Novexa LMS Copilot v2.4</span>
                </div>

                <div className="flex gap-1 bg-slate-100 p-1 rounded-lg text-[11px] font-semibold text-slate-600">
                  <button 
                    onClick={() => setActiveTab('analytics')} 
                    className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'analytics' ? 'bg-white text-blue-600 shadow-sm font-bold' : ''}`}
                  >
                    Dashboard
                  </button>
                  <button 
                    onClick={() => setActiveTab('ai')} 
                    className={`px-2.5 py-1 rounded-md transition-all ${activeTab === 'ai' ? 'bg-white text-purple-600 shadow-sm font-bold' : ''}`}
                  >
                    AI Assistant
                  </button>
                </div>
              </div>

              {/* TAB CONTENT 1: ANALYTICS */}
              {activeTab === 'analytics' && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="bg-slate-900 text-white rounded-2xl p-4 shadow-lg">
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span>Live Graduate Income Growth</span>
                      <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-[10px]">+248% YoY</span>
                    </div>
                    <div className="text-2xl font-extrabold text-white font-heading">
                      $3,840.00 <span className="text-xs font-normal text-slate-400">/ mo avg</span>
                    </div>

                    {/* Simulated Growth Visual Bars */}
                    <div className="mt-4 flex items-end gap-2 h-20 pt-2">
                      {[35, 45, 40, 60, 75, 90, 85, 100].map((h, i) => (
                        <div key={i} className="flex-1 bg-slate-800 rounded-t-md relative group overflow-hidden">
                          <div 
                            className="bg-gradient-to-t from-blue-600 to-purple-500 w-full rounded-t-md transition-all duration-500"
                            style={{ height: `${h}%` }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-blue-50/70 border border-blue-200/60 rounded-xl p-3">
                      <div className="text-xs text-blue-600 font-medium">Active Course</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">YouTube 18 Days</div>
                      <div className="w-full bg-blue-200 h-1.5 rounded-full mt-2 overflow-hidden">
                        <div className="bg-blue-600 h-full w-[85%]" />
                      </div>
                    </div>

                    <div className="bg-purple-50/70 border border-purple-200/60 rounded-xl p-3">
                      <div className="text-xs text-purple-600 font-medium">Gig Status</div>
                      <div className="text-sm font-bold text-slate-900 mt-0.5">Fiverr #1 Ranked</div>
                      <div className="flex items-center gap-1 text-[11px] text-purple-700 font-semibold mt-1">
                        <CheckCircle2 className="w-3.5 h-3.5 text-purple-600" /> 14 Orders Queue
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB CONTENT 2: AI COPILOT */}
              {activeTab === 'ai' && (
                <div className="space-y-3 animate-in fade-in duration-300">
                  <div className="p-3 bg-purple-50/80 rounded-xl border border-purple-200/70">
                    <div className="flex items-center gap-2 text-xs font-bold text-purple-700 mb-1">
                      <Sparkles className="w-4 h-4 text-purple-600" />
                      <span>Novexa AI Gig Generator</span>
                    </div>
                    <p className="text-xs text-slate-600">"Generate a high-converting Fiverr gig description for AI Vector Art with 5 SEO tags."</p>
                  </div>

                  <div className="p-3 bg-slate-900 text-slate-200 rounded-xl font-mono text-[11px] leading-relaxed border border-slate-800">
                    <div className="text-emerald-400 font-bold mb-1">✔ Generated 5-Star Gig Prompt:</div>
                    <p className="text-slate-300">"I will design custom commercial vector logo artwork using Adobe Illustrator and Midjourney in 24 hours..."</p>
                  </div>
                </div>
              )}

              {/* FLOATING BADGE 1: Student Count (Top Right) */}
              <div className="absolute -top-6 -right-6 glass-card p-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-float pointer-events-none hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">12,400+ Students</div>
                  <div className="text-[10px] text-emerald-600 font-semibold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Live Enrolled
                  </div>
                </div>
              </div>

              {/* FLOATING BADGE 2: AI Verified Badge (Bottom Left) */}
              <div className="absolute -bottom-6 -left-6 glass-card p-3 rounded-2xl border border-slate-200 shadow-xl flex items-center gap-3 animate-float-reverse pointer-events-none hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600 to-indigo-600 text-white flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">AI-Enhanced Curriculum</div>
                  <div className="text-[10px] text-slate-500">Updated Monthly</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
