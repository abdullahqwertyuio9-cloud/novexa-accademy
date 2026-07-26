export interface CourseModule {
  number: number;
  title: string;
  duration: string;
  lessons: string[];
}

export interface Course {
  id: string;
  title: string;
  badge: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  priceUSD: number;
  pricePKR: string;
  originalPricePKR: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  rating: number;
  reviewsCount: number;
  studentsCount: number;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  keyHighlights: string[];
  modules: CourseModule[];
  icon: string;
  gradient: string;
  accentColor: string;
  popular?: boolean;
}

export interface BentoItem {
  id: string;
  title: string;
  description: string;
  size: 'small' | 'medium' | 'large' | 'tall';
  icon: string;
  tag?: string;
  accent: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  courseTaken: string;
  earningStats: string;
  rating: number;
  avatar: string;
  comment: string;
  verified: boolean;
}

export interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  pricePKR: string;
  originalPricePKR: string;
  priceUSD: number;
  popular?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Enrollment' | 'Payment' | 'Support' | 'Certificates';
}

export interface TimelineStep {
  step: number;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  metric: string;
}

export interface WhyNovexaFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
  gradient: string;
}
