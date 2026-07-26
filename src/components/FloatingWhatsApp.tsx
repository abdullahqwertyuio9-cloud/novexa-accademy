import React, { useState } from 'react';
import { MessageCircle, X, Sparkles, Send } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const handleClick = () => {
    triggerConfetti();
    window.open(getWhatsAppLink("Hi Novexa Academy, I am browsing your website and want to ask about course enrollment."), "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Tooltip Notification Banner */}
      {showTooltip && (
        <div className="glass-card p-3 rounded-2xl border border-emerald-200/80 shadow-2xl flex items-center gap-3 animate-bounce max-w-xs relative bg-white/95">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="absolute -top-2 -left-2 w-5 h-5 rounded-full bg-slate-200 hover:bg-slate-300 text-slate-600 flex items-center justify-center text-[10px]"
            aria-label="Close notification"
          >
            <X className="w-3 h-3" />
          </button>

          <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold shrink-0">
            <MessageCircle className="w-4 h-4 fill-current" />
          </div>

          <div className="text-left cursor-pointer" onClick={handleClick}>
            <div className="text-xs font-bold text-slate-900 flex items-center gap-1">
              <span>Novexa Support</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
            </div>
            <p className="text-[11px] text-slate-600">Need help choosing a course? Chat on WhatsApp!</p>
          </div>
        </div>
      )}

      {/* Floating Circular Glass Button */}
      <button
        onClick={handleClick}
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-2xl shadow-emerald-600/40 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
        aria-label="Open WhatsApp Chat"
      >
        {/* Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-40 animate-ping pointer-events-none" />

        <MessageCircle className="w-7 h-7 fill-current relative z-10 text-white" />

        {/* Unread Badge Count */}
        <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] font-extrabold flex items-center justify-center border-2 border-white shadow-md">
          1
        </span>
      </button>

    </div>
  );
};
