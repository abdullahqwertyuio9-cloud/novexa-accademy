import React, { useState } from 'react';
import { 
  Clock, BarChart, Star, Users, ArrowUpRight, MessageCircle, 
  Sparkles, CheckCircle2, Eye, Youtube, Zap, TrendingUp, Palette, BookOpen
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { Course } from '../types';
import { CourseModal } from './CourseModal';
import { getWhatsAppLink } from '../utils/whatsapp';
import { triggerConfetti } from '../utils/confetti';

export const FeaturedCourses: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeCourseModal, setActiveCourseModal] = useState<Course | null>(null);

  const categoryLabelsMap: Record<string, string> = {
    all: 'All Courses',
    youtube: 'YouTube Formula',
    fiverr: 'Fiverr AI',
    marketing: 'Digital Marketing',
    design: 'Adobe Illustrator',
    blogging: 'Blogging'
  };

  const dynamicCategoryIds = Array.from(new Set(COURSES_DATA.map(c => c.category)));
  
  const categories = [
    { id: 'all', label: 'All Courses' },
    ...dynamicCategoryIds.map(catId => ({
      id: catId,
      label: categoryLabelsMap[catId] || (catId.charAt(0).toUpperCase() + catId.slice(1).replace(/-/g, ' '))
    }))
  ];

  const filteredCourses = selectedCategory === 'all' 
    ? COURSES_DATA 
    : COURSES_DATA.filter(c => c.category === selectedCategory);

  const getCourseIcon = (iconName: string) => {
    switch (iconName) {
      case 'Youtube': return <Youtube className="w-6 h-6 text-red-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-emerald-500" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-500" />;
      case 'Palette': return <Palette className="w-6 h-6 text-amber-500" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-purple-500" />;
      default: return <Sparkles className="w-6 h-6 text-blue-500" />;
    }
  };

  const handleEnrollClick = (courseTitle: string, e: React.MouseEvent) => {
    e.stopPropagation();
    triggerConfetti();
    const msg = `Hi Novexa Academy, I want to enroll in the ${courseTitle} course.`;
    window.open(getWhatsAppLink(msg), "_blank");
  };

  return (
    <section id="courses" className="py-20 md:py-28 bg-[#FFFFFF] relative overflow-hidden">
      
      {/* Background Subtle Glow */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Market-Validated Curriculum</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 font-heading">
            Featured Industry-Focused{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 bg-clip-text text-transparent">
              Masterclasses
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg">
            Practical skills, real projects, zero fluff. Choose your domain and start earning in high-value currencies.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-md shadow-slate-900/10 scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              onClick={() => setActiveCourseModal(course)}
              className="glass-card glass-card-hover rounded-3xl overflow-hidden border border-slate-200/90 flex flex-col justify-between group cursor-pointer relative"
            >
              {/* Card Header Illustration Banner */}
              <div className={`p-6 bg-gradient-to-br ${course.gradient} border-b border-slate-200/60 relative`}>
                
                {/* Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-2xl bg-white/90 shadow-sm border border-slate-200/60">
                    {getCourseIcon(course.icon)}
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/90 text-slate-800 text-xs font-bold shadow-sm border border-slate-200/60">
                    {course.badge}
                  </span>
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 font-heading group-hover:text-blue-600 transition-colors">
                  {course.title}
                </h3>

                <p className="text-xs text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {course.shortDescription}
                </p>
              </div>

              {/* Card Meta & Details */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                
                {/* Specs Pill Badges */}
                <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                  <span className="flex items-center gap-1 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
                    <Clock className="w-3.5 h-3.5 text-blue-600" /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
                    <BarChart className="w-3.5 h-3.5 text-purple-600" /> {course.level}
                  </span>
                  <span className="flex items-center gap-1 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" /> {course.rating}
                  </span>
                </div>

                {/* Highlights List */}
                <ul className="space-y-2 py-2 border-y border-slate-100">
                  {course.keyHighlights.slice(0, 3).map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-600 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Instructor */}
                <div className="text-xs">
                  <div className="font-bold text-slate-900">{course.instructor.name}</div>
                  <div className="text-slate-500 text-[10px]">{course.instructor.role}</div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Special Price</div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-lg font-extrabold text-slate-900 font-heading">PKR {course.pricePKR}</span>
                      <span className="text-xs text-slate-400 line-through">PKR {course.originalPricePKR}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveCourseModal(course);
                      }}
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors cursor-pointer"
                      title="View Syllabus"
                    >
                      <Eye className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={(e) => handleEnrollClick(course.title, e)}
                      className="shine-button px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 shadow-md shadow-emerald-500/20 hover:shadow-emerald-500/35 hover:scale-105 active:scale-95 transition-all cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Enroll</span>
                    </button>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-slate-200 text-center max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-bold text-slate-900 font-heading">Not sure which course fits your career goals?</h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">Talk to our senior career counselor on WhatsApp for personalized course recommendation.</p>
          </div>

          <button
            onClick={(e) => handleEnrollClick("Course Counseling", e)}
            className="shrink-0 px-6 py-3 rounded-2xl bg-slate-900 text-white font-bold text-xs flex items-center gap-2 hover:bg-blue-600 transition-colors cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Chat with Career Counselor</span>
          </button>
        </div>

      </div>

      {/* Course Detail Modal */}
      <CourseModal 
        course={activeCourseModal} 
        onClose={() => setActiveCourseModal(null)} 
      />
    </section>
  );
};
