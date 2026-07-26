import React, { useState } from 'react';
import { 
  Compass, PlayCircle, Sliders, Layers, DollarSign, CheckCircle2, ArrowRight 
} from 'lucide-react';
import { TIMELINE_STEPS } from '../data/siteData';

export const LearningProcess: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'PlayCircle': return <PlayCircle className="w-5 h-5" />;
      case 'Sliders': return <Sliders className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'DollarSign': return <DollarSign className="w-5 h-5" />;
      default: return <CheckCircle2 className="w-5 h-5" />;
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-200 text-xs font-semibold text-purple-700 mb-3">
            <Layers className="w-3.5 h-3.5 text-purple-600" />
            <span>The 5-Stage Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Your Structured Path From Zero To{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Earning Online
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            A battle-tested methodology created to eliminate guesswork and turn complete beginners into skilled digital professionals.
          </p>
        </div>

        {/* Timeline Desktop & Tablet View */}
        <div className="hidden md:grid grid-cols-5 gap-4 relative">
          
          {/* Horizontal Connecting Line */}
          <div className="absolute top-7 left-12 right-12 h-1 bg-slate-200 -z-0" />
          <div 
            className="absolute top-7 left-12 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 transition-all duration-500 -z-0"
            style={{ width: `${((activeStep - 1) / 4) * 82}%` }}
          />

          {TIMELINE_STEPS.map((step) => {
            const isActive = activeStep >= step.step;
            const isCurrent = activeStep === step.step;

            return (
              <div 
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className="flex flex-col items-center text-center cursor-pointer group"
              >
                {/* Circle Badge */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-sm transition-all shadow-md z-10 mb-4 ${
                  isCurrent
                    ? 'bg-gradient-to-tr from-blue-600 to-purple-600 text-white scale-110 ring-4 ring-blue-500/20'
                    : isActive
                    ? 'bg-slate-900 text-white'
                    : 'bg-white text-slate-400 border border-slate-200 group-hover:border-blue-400'
                }`}>
                  {getStepIcon(step.iconName)}
                </div>

                <span className="text-[10px] font-bold tracking-widest text-blue-600 uppercase mb-1">
                  {step.metric}
                </span>

                <h3 className="text-sm font-extrabold text-slate-900 font-heading mb-1">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-500 font-medium max-w-[180px]">
                  {step.tagline}
                </p>
              </div>
            );
          })}
        </div>

        {/* Active Step Highlight Card */}
        <div className="mt-12 glass-card rounded-3xl p-8 border border-slate-200 max-w-3xl mx-auto animate-in fade-in duration-300">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold text-xs font-heading">
              Stage {TIMELINE_STEPS[activeStep - 1].step} of 5
            </span>
            <h3 className="text-xl font-extrabold text-slate-900 font-heading">
              {TIMELINE_STEPS[activeStep - 1].title} — {TIMELINE_STEPS[activeStep - 1].tagline}
            </h3>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed mb-6">
            {TIMELINE_STEPS[activeStep - 1].description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs">
            <button
              disabled={activeStep === 1}
              onClick={() => setActiveStep(prev => Math.max(1, prev - 1))}
              className="px-4 py-2 rounded-xl bg-slate-100 text-slate-700 font-bold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-slate-200 transition-colors cursor-pointer"
            >
              Previous Stage
            </button>

            <button
              disabled={activeStep === 5}
              onClick={() => setActiveStep(prev => Math.min(5, prev + 1))}
              className="px-5 py-2 rounded-xl bg-slate-900 text-white font-bold flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-blue-600 transition-colors cursor-pointer"
            >
              <span>Next Stage</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
