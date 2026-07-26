import React from 'react';
import { ArrowUpRight, MessageCircle, Sparkles, Heart, ShieldCheck } from 'lucide-react';
import { OFFICIAL_EMAIL, WHATSAPP_DISPLAY, getWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 relative overflow-hidden border-t border-slate-800">
      
      {/* Background Subtle Gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-t from-blue-600/10 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-slate-900 rounded-[10px] flex items-center justify-center font-heading font-extrabold text-xl text-white">
                  N
                </div>
              </div>
              <span className="font-heading font-bold text-xl tracking-tight text-white">
                Novexa <span className="font-light text-slate-400">Academy</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Pakistan's premier digital skills academy. Master YouTube automation, Fiverr AI freelancing, performance marketing, vector design, and blogging.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <a
                href={getWhatsAppLink("Hi Novexa Academy, I am reaching out from your website footer.")}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 font-bold text-xs flex items-center gap-2 hover:bg-emerald-600 hover:text-white transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-heading">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><a href="#hero" className="hover:text-blue-400 transition-colors">Home</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Courses</a></li>
              <li><a href="#bento" className="hover:text-blue-400 transition-colors">Bento Grid</a></li>
              <li><a href="#why-us" className="hover:text-blue-400 transition-colors">Why Novexa</a></li>
              <li><a href="#process" className="hover:text-blue-400 transition-colors">Learning Roadmap</a></li>
              <li><a href="#pricing" className="hover:text-blue-400 transition-colors">Packages & Pricing</a></li>
              <li><a href="#jazzcash" className="hover:text-blue-400 transition-colors">JazzCash Payment</a></li>
              <li><a href="#faq" className="hover:text-blue-400 transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Masterclass Courses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-heading">
              Our Masterclasses
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-medium">
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">YouTube 18 Days Formula</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Fiverr AI Mastery</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Digital Marketing Training</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Adobe Illustrator Course</a></li>
              <li><a href="#courses" className="hover:text-blue-400 transition-colors">Blogging Masterclass</a></li>
            </ul>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4 font-heading">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-slate-300">
              <p><span className="text-slate-500">Email:</span> {OFFICIAL_EMAIL}</p>
              <p><span className="text-slate-500">WhatsApp:</span> {WHATSAPP_DISPLAY}</p>
              <p><span className="text-slate-500">Payment:</span> JazzCash Mobile Transfer</p>
              <div className="pt-3">
                <button
                  onClick={scrollToTop}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 text-xs font-semibold transition-colors cursor-pointer"
                >
                  ↑ Back to Top
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Novexa Academy. All Rights Reserved. Designed for Excellence.
          </div>

          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Verified Quality Digital Learning Provider</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
