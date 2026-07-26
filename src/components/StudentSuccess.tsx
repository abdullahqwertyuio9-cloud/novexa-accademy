import React, { useState } from 'react';
import { Star, ShieldCheck, Quote, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { STUDENT_TESTIMONIALS } from '../data/siteData';

export const StudentSuccess: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const nextTestimonial = () => {
    setActiveIdx((prev) => (prev + 1) % STUDENT_TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIdx((prev) => (prev - 1 + STUDENT_TESTIMONIALS.length) % STUDENT_TESTIMONIALS.length);
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F8FAFC] relative overflow-hidden">
      
      {/* Background Blob */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-700 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Proven Student Success</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Trusted By Over{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              12,400+ Graduates
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Real stories from real students who transformed their digital skills into steady monthly revenue streams.
          </p>
        </div>

        {/* Animated Metrics Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="glass-card rounded-3xl p-6 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-heading">12,400+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Active Students Enrolled</div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-600 font-heading">98.4%</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Course Completion Rate</div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-purple-600 font-heading">$2.4M+</div>
            <div className="text-xs text-slate-500 font-medium mt-1">Total Graduate Revenue</div>
          </div>

          <div className="glass-card rounded-3xl p-6 border border-slate-200 text-center">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-heading flex items-center justify-center gap-1">
              <span>4.9</span> <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
            </div>
            <div className="text-xs text-slate-500 font-medium mt-1">Average Student Rating</div>
          </div>
        </div>

        {/* Testimonials Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {STUDENT_TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="glass-card glass-card-hover rounded-3xl p-8 border border-slate-200/90 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200/70 pointer-events-none" />

              <div>
                {/* 5-Star Row */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-bold text-slate-900 ml-2">5.0 Star Verified Review</span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed font-normal mb-6">
                  "{testimonial.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-blue-500/20"
                  />
                  <div>
                    <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                      <span>{testimonial.name}</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="text-xs text-slate-500">{testimonial.role} • <span className="text-blue-600 font-semibold">{testimonial.courseTaken}</span></div>
                  </div>
                </div>

                <span className="px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 font-bold text-[11px]">
                  {testimonial.earningStats}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
