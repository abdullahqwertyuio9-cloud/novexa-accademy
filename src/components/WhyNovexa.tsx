import React from 'react';
import { 
  UserCheck, Terminal, RefreshCw, FolderCheck, Sparkles, 
  Users, Target, ShieldCheck, CheckCircle
} from 'lucide-react';
import { WHY_NOVEXA_FEATURES } from '../data/siteData';

export const WhyNovexa: React.FC = () => {
  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-blue-600" />;
      case 'Terminal': return <Terminal className="w-6 h-6 text-purple-600" />;
      case 'RefreshCw': return <RefreshCw className="w-6 h-6 text-cyan-600" />;
      case 'FolderCheck': return <FolderCheck className="w-6 h-6 text-emerald-600" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-600" />;
      case 'Users': return <Users className="w-6 h-6 text-rose-600" />;
      case 'Target': return <Target className="w-6 h-6 text-indigo-600" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-600" />;
      default: return <CheckCircle className="w-6 h-6 text-blue-600" />;
    }
  };

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
            <span>Unmatched Quality & Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Why Ambitious Creators Choose{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Novexa Academy
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            We reject boring, outdated theory. Our entire academy is engineered around modern execution, real client work, and high dollar earnings.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_NOVEXA_FEATURES.map((feature) => (
            <div
              key={feature.id}
              className="glass-card glass-card-hover rounded-3xl p-6 border border-slate-200/90 flex flex-col justify-between group transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white shadow-md border border-slate-200/80 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {getFeatureIcon(feature.icon)}
                </div>

                <h3 className="text-lg font-extrabold text-slate-900 font-heading mb-2 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-slate-400">
                <span>NOVEXA STANDARD</span>
                <CheckCircle className="w-4 h-4 text-emerald-500" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
