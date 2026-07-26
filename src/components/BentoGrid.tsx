import React from 'react';
import { 
  Zap, Briefcase, Infinity, Sparkles, MessageCircle, 
  FolderDown, TrendingUp, ArrowUpRight, CheckCircle, FolderCheck
} from 'lucide-react';
import { BENTO_ITEMS } from '../data/siteData';
import { getWhatsAppLink } from '../utils/whatsapp';

export const BentoGrid: React.FC = () => {
  return (
    <section id="bento" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
            <span>Built For Maximum Results</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Engineered For Speed, Practicality &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Real Revenue
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Everything you need to master digital skills, showcase proof-of-work, and scale your income without wasted time.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* CARD 1: Learn Faster */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                Efficiency Engine
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">Learn 3X Faster</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Zero theoretical filler. Video modules are structured into short, punchy 10-minute action steps so you learn and execute simultaneously.
              </p>
            </div>

            {/* Interactive Widget: Speed Comparison */}
            <div className="mt-6 p-3 bg-slate-900 rounded-2xl text-white text-xs space-y-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400">
                <span>Traditional University Degree</span>
                <span className="text-rose-400 font-bold">4 Years</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-rose-500 h-full w-[100%]" />
              </div>

              <div className="flex justify-between items-center text-[11px] text-emerald-400 font-bold pt-1">
                <span className="flex items-center gap-1"><Sparkles className="w-3 h-3 inline" /> Novexa Practical System</span>
                <span>18 - 30 Days</span>
              </div>
              <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full w-[25%] animate-pulse" />
              </div>
            </div>
          </div>

          {/* CARD 2: Real Projects */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-2.5 py-1 rounded-md">
                Portfolio Ready
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">Real Projects</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work on actual client briefs during the course. Graduate with a live, verified portfolio that builds instant trust with buyers.
              </p>
            </div>

            {/* Project Card Mockup */}
            <div className="mt-6 p-3 bg-white border border-slate-200 rounded-2xl shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-slate-900">Live Client Brief #04</span>
                <span className="px-2 py-0.5 rounded bg-emerald-100 text-emerald-700 font-bold text-[10px]">VERIFIED BRIEF</span>
              </div>
              <div className="text-xs text-slate-500 font-medium">Meta Ads Campaign Audit & 4.5x ROAS Scaling</div>
              <div className="flex gap-2 pt-1 text-[10px]">
                <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600">Figma UI</span>
                <span className="px-2 py-0.5 bg-slate-100 rounded text-slate-600">Meta Manager</span>
              </div>
            </div>
          </div>

          {/* CARD 3: Lifetime Access */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 text-cyan-600 flex items-center justify-center mb-4">
                <Infinity className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2.5 py-1 rounded-md">
                Always Updated
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">Lifetime Access</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Pay once, access forever. When platform algorithms update or new AI tools launch, your course modules are updated at zero extra cost.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl border border-cyan-100">
              <div className="text-xs">
                <div className="font-bold text-slate-900">Next Update Batch</div>
                <div className="text-slate-500 text-[11px]">2026 AI Algorithms Edition</div>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500 text-white font-bold text-[10px] animate-pulse">
                FREE UPDATE
              </span>
            </div>
          </div>

          {/* CARD 4: Portfolio Verification */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <FolderCheck className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                Portfolio Verified
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">Verified Skill Portfolio</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Build real-world client deliverables during the course and get direct feedback from senior instructors on your work.
              </p>
            </div>

            <div className="mt-6 p-3 bg-slate-900 text-white rounded-2xl border border-slate-800 flex items-center justify-between">
              <div>
                <div className="text-[11px] text-emerald-400 font-bold uppercase">100% Practical Proof-of-Work</div>
                <div className="text-xs font-semibold">Live Project Audits Included</div>
              </div>
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
          </div>

          {/* CARD 5: AI Learning */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group lg:col-span-2">
            <div>
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 text-indigo-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
                  AI Integrated
                </span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-2 mb-2">AI Learning Copilot</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Leverage custom AI tools, prompt templates, and prompt engineering frameworks built specifically for course workflows.
              </p>
            </div>

            <div className="mt-6 p-3 bg-slate-900 text-slate-200 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs">
                <Sparkles className="w-4 h-4 text-indigo-400" />
                <span className="font-bold text-slate-100">Integrated AI Workflows & Frameworks</span>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-[10px]">
                INCLUDED
              </span>
            </div>
          </div>

          {/* CARD 6: WhatsApp Support */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
                Instant Mentorship
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">1-on-1 WhatsApp Hotline</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Never get stuck. Send screenshot errors or voice notes to our instructors on WhatsApp for rapid 1-on-1 solutions.
              </p>
            </div>

            <a
              href={getWhatsAppLink("Hi Novexa Academy, I have a question about course support.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 p-3 bg-emerald-600 text-white rounded-2xl font-bold text-xs flex items-center justify-center gap-2 hover:bg-emerald-700 transition-colors shadow-md shadow-emerald-600/20"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Test Direct WhatsApp Line</span>
            </a>
          </div>

          {/* CARD 7: Premium Resources */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
                <FolderDown className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">
                $1,500+ Assets Vault
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">Premium Resource Vault</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Download ready-to-use Figma UI kits, ad copy spreadsheets, client contract agreements, and vector graphic bundles.
              </p>
            </div>

            <div className="mt-6 flex items-center justify-between p-3 bg-amber-50 border border-amber-200/80 rounded-2xl text-xs">
              <span className="font-bold text-amber-900">45+ Asset Files Ready</span>
              <span className="px-2 py-0.5 rounded bg-amber-500 text-white font-bold text-[10px]">ZIP DOWNLOAD</span>
            </div>
          </div>

          {/* CARD 8: Career Growth */}
          <div className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between relative overflow-hidden group">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                Financial Scaling
              </span>
              <h3 className="text-xl font-bold text-slate-900 font-heading mt-3 mb-2">Career & USD Growth</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Learn step-by-step local bank payouts, Payoneer integration, Upwork proposal writing, and international client acquisition.
              </p>
            </div>

            <div className="mt-6 p-3 bg-slate-900 text-white rounded-2xl flex items-center justify-between text-xs">
              <div>
                <div className="text-[10px] text-slate-400">Average Graduate Benchmark</div>
                <div className="text-emerald-400 font-bold font-heading text-sm">$1,200 - $3,500 / mo</div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-emerald-400" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
