import React from 'react';
import { X, CheckCircle2, Clock, BarChart, Users, Star, MessageCircle, Sparkles, BookOpen, ShieldCheck } from 'lucide-react';
import { Course } from '../types';
import { getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({ course, onClose }) => {
  if (!course) return null;

  const handleEnroll = () => {
    triggerConfetti();
    const msg = `Hi Novexa Academy, I want to enroll in the ${course.title} course.`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${course.gradient} border-b border-slate-200/80 relative`}>
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/80 hover:bg-white text-slate-600 hover:text-slate-900 shadow-sm transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 shadow-sm text-xs font-bold text-slate-800 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>{course.badge}</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading">
            {course.title}
          </h2>

          <p className="mt-2 text-sm text-slate-700 max-w-2xl leading-relaxed">
            {course.fullDescription}
          </p>

          <div className="flex flex-wrap items-center gap-4 mt-4 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg">
              <Clock className="w-4 h-4 text-blue-600" /> {course.duration}
            </span>
            <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg">
              <BarChart className="w-4 h-4 text-purple-600" /> {course.level}
            </span>
            <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" /> {course.rating} ({course.reviewsCount} reviews)
            </span>
            <span className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-lg">
              <Users className="w-4 h-4 text-emerald-600" /> {course.studentsCount}+ enrolled
            </span>
          </div>
        </div>

        {/* Scrollable Body Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto flex-1">
          
          {/* Instructor Info */}
          <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
            <div>
              <div className="text-xs text-slate-500 font-medium">Lead Course Instructor</div>
              <div className="text-sm font-bold text-slate-900">{course.instructor.name}</div>
              <div className="text-xs text-blue-600 font-semibold">{course.instructor.role}</div>
            </div>
          </div>

          {/* Key Highlights */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-600" /> Key Course Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {course.keyHighlights.map((highlight, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/60">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modules Breakdown */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-purple-600" /> Complete Curriculum Syllabus
            </h3>
            <div className="space-y-3">
              {course.modules.map((mod) => (
                <div key={mod.number} className="p-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">
                      Module {mod.number} • {mod.duration}
                    </span>
                    <span className="text-xs text-slate-500">{mod.lessons.length} Lessons</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 mb-2">{mod.title}</h4>
                  <ul className="space-y-1.5 pl-2">
                    {mod.lessons.map((lesson, lIdx) => (
                      <li key={lIdx} className="text-xs text-slate-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shrink-0" />
                        <span>{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-slate-500">Official Special Price</div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-slate-900 font-heading">PKR {course.pricePKR}</span>
              <span className="text-xs text-slate-400 line-through">PKR {course.originalPricePKR}</span>
              <span className="text-xs font-bold text-emerald-600">(${course.priceUSD} USD)</span>
            </div>
          </div>

          <button
            onClick={handleEnroll}
            className="shine-button w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-emerald-500 via-teal-600 to-emerald-600 text-white font-bold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Enroll Now on WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
