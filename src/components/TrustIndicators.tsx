import React from 'react';
import { Infinity as InfinityIcon, FolderCode, UserCheck } from 'lucide-react';

export const TrustIndicators: React.FC = () => {
  const indicators = [
    {
      icon: InfinityIcon,
      title: 'Lifetime Access',
      description: 'Unlimited 24/7 access to all course materials and future updates'
    },
    {
      icon: FolderCode,
      title: 'Project-Based Learning',
      description: 'Hands-on practical assignments with real-world client workflows'
    },
    {
      icon: UserCheck,
      title: 'Industry Expert Instructors',
      description: 'Direct guidance and mentorship from active senior professionals'
    }
  ];

  return (
    <section className="py-8 bg-slate-50/80 border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm transition-all duration-200 hover:border-slate-300"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-900 text-slate-100 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-slate-100" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 font-heading">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 leading-snug mt-0.5">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
