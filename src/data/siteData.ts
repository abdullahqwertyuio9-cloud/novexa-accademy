import { BentoItem, FAQItem, PricingPlan, Testimonial, TimelineStep, WhyNovexaFeature } from '../types';

export const BENTO_ITEMS: BentoItem[] = [
  {
    id: 'bento-1',
    title: '3X Faster Accelerated Learning',
    description: 'No fluff. Every video lesson is compressed into high-density actionable steps designed for fast real-world implementation.',
    size: 'medium',
    icon: 'Zap',
    tag: 'Efficiency Engine',
    accent: 'from-blue-500/10 to-indigo-500/5'
  },
  {
    id: 'bento-2',
    title: 'Real-World Client Projects',
    description: 'Work on actual business briefs during the course. Graduate with a polished live portfolio that wins high-ticket global clients.',
    size: 'medium',
    icon: 'Briefcase',
    tag: 'Portfolio Ready',
    accent: 'from-purple-500/10 to-violet-500/5'
  },
  {
    id: 'bento-3',
    title: 'Lifetime Unrestricted Access',
    description: 'Enroll once and enjoy permanent access to course materials, future curriculum updates, and downloadable resource kits.',
    size: 'small',
    icon: 'Infinity',
    tag: 'Always Updated',
    accent: 'from-cyan-500/10 to-blue-500/5'
  },
  {
    id: 'bento-4',
    title: 'Verified Skill Portfolio',
    description: 'Build real-world client projects and get direct feedback from senior instructors on your work.',
    size: 'small',
    icon: 'Briefcase',
    tag: 'Portfolio Verified',
    accent: 'from-emerald-500/10 to-teal-500/5'
  },
  {
    id: 'bento-5',
    title: 'AI-Powered Copilot Assistance',
    description: 'Get instant 24/7 answers, code debugging, copy generation assistance, and prompt suggestions through our exclusive student AI tools.',
    size: 'medium',
    icon: 'Sparkles',
    tag: 'AI Integrated',
    accent: 'from-indigo-500/10 to-purple-500/5'
  },
  {
    id: 'bento-6',
    title: 'Direct 1-on-1 WhatsApp Support',
    description: 'Stuck on a lesson? Talk directly with senior instructors and expert mentors on WhatsApp for personalized feedback.',
    size: 'medium',
    icon: 'MessageCircle',
    tag: 'Instant Mentorship',
    accent: 'from-emerald-500/10 to-green-500/5'
  },
  {
    id: 'bento-7',
    title: 'Premium Resource Vault',
    description: 'Unlock $1,500+ worth of premium UI templates, Canva Pro elements, ad copy spreadsheets, and automated AI prompt libraries.',
    size: 'small',
    icon: 'FolderDown',
    tag: '$1,500+ Free Assets',
    accent: 'from-amber-500/10 to-orange-500/5'
  },
  {
    id: 'bento-8',
    title: 'Income & Career Growth Pathway',
    description: 'Step-by-step guidance on establishing local bank payouts, Payoneer setup, Upwork proposals, and client outreach.',
    size: 'small',
    icon: 'TrendingUp',
    tag: 'Financial Growth',
    accent: 'from-blue-500/10 to-cyan-500/5'
  }
];

export const WHY_NOVEXA_FEATURES: WhyNovexaFeature[] = [
  {
    id: 'why-1',
    title: 'Industry Experts',
    description: 'Learn exclusively from practitioners who actively run 6-figure agencies, YouTube channels, and Fiverr Top-Rated profiles.',
    icon: 'UserCheck',
    gradient: 'from-blue-500 to-indigo-600'
  },
  {
    id: 'why-2',
    title: 'Real Practical Learning',
    description: 'Zero theoretical bloat. Every module focuses on building screen-recorded real projects you can replicate step-by-step.',
    icon: 'Terminal',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    id: 'why-3',
    title: 'Lifetime Access & Updates',
    description: 'Digital markets evolve fast. When algorithms or platforms change, we update your course videos completely free of charge.',
    icon: 'RefreshCw',
    gradient: 'from-cyan-500 to-blue-600'
  },
  {
    id: 'why-4',
    title: '100% Project-Based',
    description: 'Graduate with tangible, client-ready work samples instead of passive knowledge.',
    icon: 'FolderCheck',
    gradient: 'from-emerald-500 to-teal-600'
  },
  {
    id: 'why-5',
    title: 'Continuously Updated',
    description: 'Stay ahead of AI tools, new marketing policies, and algorithm changes with live monthly masterclasses.',
    icon: 'Sparkles',
    gradient: 'from-amber-500 to-orange-600'
  },
  {
    id: 'why-6',
    title: 'Premium Private Community',
    description: 'Join an exclusive network of ambitious creators, freelancers, and marketers sharing daily jobs and strategies.',
    icon: 'Users',
    gradient: 'from-pink-500 to-rose-600'
  },
  {
    id: 'why-7',
    title: 'Hyper-Career Focus',
    description: 'Our primary metric is student income growth. We teach client acquisition, pricing, and dollar earning mechanics.',
    icon: 'Target',
    gradient: 'from-indigo-500 to-blue-600'
  },
  {
    id: 'why-8',
    title: 'Dedicated WhatsApp Mentorship',
    description: 'Have a question at 11 PM? Drop a voice note in the private student hotline and receive voice resolution.',
    icon: 'ShieldCheck',
    gradient: 'from-emerald-500 to-green-600'
  }
];

export const TIMELINE_STEPS: TimelineStep[] = [
  {
    step: 1,
    title: 'Select Your Course',
    tagline: 'Choose High-Demand Skills',
    description: 'Browse our market-validated course library and select the skill alignment matching your goals.',
    iconName: 'Compass',
    metric: 'Step 01'
  },
  {
    step: 2,
    title: 'Learn Practical Workflows',
    tagline: 'Master HD Video Modules',
    description: 'Watch concise, step-by-step video training on desktop or mobile at your own flexible pace.',
    iconName: 'PlayCircle',
    metric: 'Step 02'
  },
  {
    step: 3,
    title: 'Practice with Real Tools',
    tagline: 'Hands-On Exercises',
    description: 'Apply lessons using our downloadable templates, AI prompts, and software exercise files.',
    iconName: 'Sliders',
    metric: 'Step 03'
  },
  {
    step: 4,
    title: 'Build Live Portfolio',
    tagline: 'Create Proven Proof-of-Work',
    description: 'Complete hands-on assignments to build an impressive portfolio that builds instant client trust.',
    iconName: 'Layers',
    metric: 'Step 04'
  },
  {
    step: 5,
    title: 'Earn & Scale Online',
    tagline: 'Monetize in USD & Local Currency',
    description: 'Deploy proven client outreach funnels, launch Fiverr gigs, or scale YouTube cash channels.',
    iconName: 'DollarSign',
    metric: 'Step 05'
  }
];

export const STUDENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Hamza Malik',
    role: 'Freelancer & Content Creator',
    courseTaken: 'Fiverr AI Mastery',
    earningStats: 'Earned $1,850 in first 35 days',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    comment: 'The Fiverr AI Mastery course completely changed my freelancing career! Within 3 weeks of applying the gig ranking strategy and AI workflows, I ranked #1 on Fiverr search and landed my first $400 client.',
    verified: true
  },
  {
    id: 't2',
    name: 'Sana Tariq',
    role: 'YouTube Content Creator',
    courseTaken: 'YouTube 18 Days Formula',
    earningStats: 'Crossed 45,000 Subscribers',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    comment: 'I followed the 18 Days YouTube Formula step-by-step. The hook scripting framework alone increased my average view duration by 240%! My channel got monetized in under 1 month.',
    verified: true
  },
  {
    id: 't3',
    name: 'Muhammad Bilal',
    role: 'Digital Marketing Agency Owner',
    courseTaken: 'Digital Marketing Training',
    earningStats: 'Managing 6 Monthly Retainers',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    comment: 'Novexa Academy provides the most realistic, zero-bs marketing training in Pakistan. The Meta CBO scaling module helped me generate 8.4x ROAS for my e-commerce client.',
    verified: true
  },
  {
    id: 't4',
    name: 'Zainab Rashid',
    role: 'Graphic Designer',
    courseTaken: 'Adobe Illustrator Complete',
    earningStats: 'Sold 120+ Logo Assets',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    comment: 'I went from being afraid of the Pen Tool to designing complex vector brand identity systems. Bilal sir explains geometry and color harmony so clearly! Best investment ever.',
    verified: true
  }
];

export const PRICING_PACKAGES: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Pass',
    tagline: 'Ideal for individuals looking to master a single high-impact skill.',
    pricePKR: '10,999',
    originalPricePKR: '18,999',
    priceUSD: 39,
    features: [
      'Access to Any 1 Full Course of Your Choice',
      'HD Video Modules & Exercise Files',
      'Downloadable Resource Templates & Prompts',
      '100% Practical Hands-On Exercises',
      'Standard WhatsApp Community Support'
    ],
    ctaText: 'Enroll via WhatsApp',
    whatsappMessage: 'Hi Novexa Academy, I want to enroll in the Starter Pass package.'
  },
  {
    id: 'professional',
    name: 'Professional Bundle',
    tagline: 'Our most popular package for serious agency builders & freelancers.',
    pricePKR: '24,999',
    originalPricePKR: '42,999',
    priceUSD: 89,
    popular: true,
    badge: 'MOST POPULAR (SAVE 42%)',
    features: [
      'Access to ANY 3 Complete Masterclass Courses',
      'Direct 1-on-1 Instructor WhatsApp Support',
      '$1,500+ Premium Resource Vault (Figma Kits, Ad Scripts)',
      'Full Project Portfolio Audit & Feedback',
      'Monthly Live Strategy & Q&A Calls',
      'AI Prompt Engineering Toolkit Included'
    ],
    ctaText: 'Get Pro Bundle on WhatsApp',
    whatsappMessage: 'Hi Novexa Academy, I want to enroll in the Professional Bundle package.'
  },
  {
    id: 'ultimate',
    name: 'Ultimate VIP All-Access',
    tagline: 'Complete career transformation with unlimited lifetime access & direct mentorship.',
    pricePKR: '39,999',
    originalPricePKR: '68,999',
    priceUSD: 139,
    features: [
      'UNLIMITED Lifetime Access to ALL Current & Future Courses',
      'Priority VIP 1-on-1 WhatsApp & Voice Mentorship',
      'Direct Portfolio Review & Fiverr Gig Audit by Instructors',
      'Client Pitch Decks & Legal Contract Templates',
      'Private VIP Inner-Circle WhatsApp Group Access',
      'Guaranteed Career Placement & Freelance Guidance'
    ],
    ctaText: 'Get All-Access VIP on WhatsApp',
    whatsappMessage: 'Hi Novexa Academy, I want to join the Ultimate VIP All-Access package.'
  }
];

export const JAZZCASH_PAYMENT_INFO = {
  accountNumber: '03218458140',
  bankName: 'JazzCash Mobile Account',
  instructions: [
    'Open your JazzCash Mobile App or visit any authorized JazzCash Agent shop.',
    'Select Transfer Money -> Mobile Account / JazzCash Account.',
    'Enter Account Number: 03218458140.',
    'Enter the course/package amount and confirm the transaction with your PIN.',
    'Save or screenshot the payment confirmation receipt containing the TID (Transaction ID).',
    'Click the button below to send your payment screenshot directly to our WhatsApp support team for instant course activation!'
  ]
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'General',
    question: 'What is Novexa Academy and how does it work?',
    answer: 'Novexa Academy is a high-end digital learning platform focused on practical, high-income skills such as YouTube Automation, Fiverr AI Freelancing, Performance Marketing, Vector Design, and Blogging. Courses consist of pre-recorded HD video modules with step-by-step practical exercises, resource kits, and direct WhatsApp instructor support.'
  },
  {
    id: 'faq-2',
    category: 'Enrollment',
    question: 'How do I enroll in a course or package?',
    answer: 'Enrollment is fast and seamless! Simply select your desired course or package on this website, click the "Enroll on WhatsApp" button, and you will be connected directly with our enrollment counselor on WhatsApp. After payment confirmation via JazzCash, your portal credentials and course materials will be sent immediately.'
  },
  {
    id: 'faq-3',
    category: 'Payment',
    question: 'What payment methods do you accept?',
    answer: 'We accept JazzCash mobile account transfers, EasyPaisa, direct local bank transfers (HBL/Meezan/SadaPay/Nayapay), and international card transfers. For maximum convenience in Pakistan, JazzCash is our primary instant method.'
  },
  {
    id: 'faq-4',
    category: 'Support',
    question: 'Will I get instructor support if I get stuck during the course?',
    answer: 'Yes! Unlike passive course sites, Novexa Academy provides direct WhatsApp support for every student. You can send questions, screenshot errors, or voice notes, and our technical mentors will guide you.'
  },
  {
    id: 'faq-5',
    category: 'General',
    question: 'How long do I have access to the course content?',
    answer: 'You receive Lifetime Unrestricted Access! You can watch the lessons anytime, anywhere, on desktop or mobile device. All future course updates and curriculum additions are included free of charge.'
  }
];
