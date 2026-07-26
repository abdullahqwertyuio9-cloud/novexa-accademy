import React, { useState } from 'react';
import { 
  Check, Copy, ShieldCheck, ArrowUpRight, MessageCircle, 
  Smartphone, FileCheck, Info
} from 'lucide-react';
import { JAZZCASH_PAYMENT_INFO } from '../data/siteData';
import { getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

export const JazzCashPayment: React.FC = () => {
  const [copiedNum, setCopiedNum] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedNum(true);
    setTimeout(() => setCopiedNum(false), 2000);
  };

  const handleVerifyOnWhatsApp = () => {
    triggerConfetti();
    const msg = "Hi Novexa Academy, I have completed my JazzCash payment. Here is my transaction screenshot for course activation.";
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="jazzcash" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-semibold text-rose-700 mb-3">
            <Smartphone className="w-3.5 h-3.5 text-rose-600" />
            <span>Instant Local Payment Gateway</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-heading">
            JazzCash Payment Method{' '}
            <span className="bg-gradient-to-r from-rose-600 via-amber-600 to-red-600 bg-clip-text text-transparent">
              Accepted
            </span>
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Send payment securely via JazzCash Mobile Account and send your receipt screenshot on WhatsApp for immediate course access.
          </p>
        </div>

        {/* Main JazzCash Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-rose-200/80 shadow-2xl shadow-rose-900/5 relative overflow-hidden">
          
          {/* JazzCash Top Brand Banner */}
          <div className="flex items-center justify-between gap-4 p-6 bg-gradient-to-r from-slate-900 via-rose-950 to-slate-900 text-white rounded-2xl mb-8 border border-rose-900/50">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-rose-600 to-amber-500 flex items-center justify-center font-extrabold text-white text-xl shadow-lg">
                JC
              </div>
              <div className="text-xl font-bold font-heading">JazzCash Mobile Account</div>
            </div>

            <div className="px-3 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold text-xs flex items-center gap-1.5 border border-emerald-500/30">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Verified
            </div>
          </div>

          {/* Account Details Box */}
          <div className="mb-8">
            {/* Account Number Box */}
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-rose-200/90 shadow-md flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="text-3xl sm:text-4xl font-extrabold text-rose-600 font-heading tracking-wider">
                {JAZZCASH_PAYMENT_INFO.accountNumber}
              </div>

              <button
                onClick={() => copyToClipboard(JAZZCASH_PAYMENT_INFO.accountNumber)}
                className="shine-button px-6 py-3 rounded-xl bg-rose-600 text-white text-xs font-bold shadow-md hover:bg-rose-700 transition-all flex items-center gap-2 cursor-pointer"
              >
                {copiedNum ? <Check className="w-4 h-4 text-white" /> : <Copy className="w-4 h-4" />}
                <span>{copiedNum ? 'Number Copied!' : 'Copy JazzCash Number'}</span>
              </button>
            </div>
          </div>

          {/* Payment Instructions */}
          <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200/80 mb-8 space-y-3">
            <ol className="space-y-2 text-xs text-slate-700 list-decimal pl-5">
              {JAZZCASH_PAYMENT_INFO.instructions.map((inst, idx) => (
                <li key={idx} className="leading-relaxed font-normal">{inst}</li>
              ))}
            </ol>
          </div>

          {/* WhatsApp Verification CTA */}
          <div className="text-center">
            <button
              onClick={handleVerifyOnWhatsApp}
              className="shine-button inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <MessageCircle className="w-5 h-5 fill-current text-white" />
              <span>Verify Payment & Get Instant Access on WhatsApp</span>
            </button>
            <p className="text-[11px] text-slate-400 mt-2">Instant response time within 5 minutes on WhatsApp.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
