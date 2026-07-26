import React from 'react';
import { Check, Sparkles, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { PRICING_PACKAGES } from '../data/siteData';
import { getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

export const PricingPackages: React.FC = () => {
  const handleEnrollPackage = (packageName: string, message: string, e: React.MouseEvent) => {
    e.preventDefault();
    triggerConfetti();
    window.open(getWhatsAppLink(message), "_blank");
  };

  return (
    <section id="pricing" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Glow Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/10 via-purple-500/5 to-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Investment in Your Future</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Simple, Transparent &{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              High-Value Pricing
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            No recurring subscription traps. One-time investment with lifetime updates and direct WhatsApp support.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.popular
                  ? 'gradient-border-mask bg-white shadow-2xl scale-105 z-20'
                  : 'glass-card glass-card-hover border border-slate-200/90'
              }`}
            >
              {/* Popular Badge Header */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 text-white text-[11px] font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{pkg.badge}</span>
                </div>
              )}

              <div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 font-heading">{pkg.name}</h3>
                    <p className="text-xs text-slate-500 mt-1 min-h-[36px]">{pkg.tagline}</p>
                  </div>
                </div>

                {/* Price Display */}
                <div className="my-6 pt-4 border-t border-slate-100">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">
                      PKR {pkg.pricePKR}
                    </span>
                    <span className="text-sm text-slate-400 line-through">
                      PKR {pkg.originalPricePKR}
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-600 mt-1">
                    (${pkg.priceUSD} USD One-Time Payment • Lifetime Access)
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 my-6">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Included Features</div>
                  {pkg.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={(e) => handleEnrollPackage(pkg.name, pkg.whatsappMessage, e)}
                className={`shine-button w-full py-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98]'
                    : 'bg-slate-900 text-white hover:bg-blue-600 hover:shadow-lg'
                }`}
              >
                <MessageCircle className="w-4 h-4 fill-current text-white" />
                <span>{pkg.ctaText}</span>
              </button>

            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-12 text-center text-xs text-slate-500 flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-500 inline" />
          <span>Need help choosing a package? Instant assistance is available via WhatsApp.</span>
        </div>

      </div>
    </section>
  );
};
