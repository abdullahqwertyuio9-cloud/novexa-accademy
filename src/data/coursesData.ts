import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'youtube-18-days',
    title: 'YouTube 18 Days Formula',
    badge: 'Fastest Growth',
    category: 'youtube',
    shortDescription: 'Master viral content creation, algorithm hacking, thumbnail psychology, and automated channel monetization in 18 days.',
    fullDescription: 'The step-by-step roadmap to building, ranking, and monetizing a high-yielding YouTube channel in 18 days. Learn secret retention hooks, automated AI scripting, high-CTR thumbnail design, and multi-stream revenue strategies.',
    priceUSD: 49,
    pricePKR: '5,000',
    originalPricePKR: '24,999',
    duration: '18 Days',
    level: 'Beginner',
    rating: 4.98,
    reviewsCount: 342,
    studentsCount: 3840,
    popular: true,
    instructor: {
      name: 'Abdullah',
      role: 'YouTube Growth Specialist & Content Creator',
      avatar: ''
    },
    keyHighlights: [
      '18-Day Actionable Daily Roadmap',
      'Algorithm Hooking & Audience Retention Hacks',
      'AI Scriptwriting & Voice Synthesis Pipelines',
      'High-CTR Thumbnail Design in Canva & Photoshop',
      'Sponsorship Outreach & Affiliate Monetization Templates'
    ],
    modules: [
      {
        number: 1,
        title: 'Niche Selection & Channel Setup',
        duration: 'Days 1 - 4',
        lessons: [
          'High-CPM Niche Research & Keyword Tools',
          'Setting Up Channel Branding & Studio SEO',
          'Competitor Deconstruction & Content Matrix'
        ]
      },
      {
        number: 2,
        title: 'AI Scripting & Viral Storytelling',
        duration: 'Days 5 - 9',
        lessons: [
          '3-Second Retention Hook Frameworks',
          'Prompt Engineering for Engaging YouTube Scripts',
          'B-Roll Sourcing & Copyright-Free Sound Design'
        ]
      },
      {
        number: 3,
        title: 'High-CTR Thumbnails & SEO Ranking',
        duration: 'Days 10 - 14',
        lessons: [
          'Psychology of Click-Worthy Thumbnails',
          'Title Engineering for 10%+ CTR',
          'Metadata Optimization & Search Indexing'
        ]
      },
      {
        number: 4,
        title: 'Monetization & Scaling Beyond Ads',
        duration: 'Days 15 - 18',
        lessons: [
          'Applying for Partner Program Fast',
          'Digital Products & High-Ticket Affiliates',
          'Automating Content Creation with AI Tools'
        ]
      }
    ],
    icon: 'Youtube',
    gradient: 'from-red-500/20 via-rose-500/10 to-amber-500/5',
    accentColor: '#EF4444'
  },
  {
    id: 'fiverr-ai-mastery',
    title: 'Fiverr AI Mastery',
    badge: 'High Income',
    category: 'fiverr',
    shortDescription: 'Leverage cutting-edge AI workflows to deliver 10x faster freelancing services, rank Gig #1, and earn in USD.',
    fullDescription: 'Stop trading hours for pennies. Learn how to combine Fiverr freelancing with generative AI to offer high-demand services like AI copywriting, automated graphic asset generation, prompt engineering, and prompt-to-code gig fulfillment.',
    priceUSD: 59,
    pricePKR: '15,000',
    originalPricePKR: '29,999',
    duration: '4 Weeks',
    level: 'Intermediate',
    rating: 4.95,
    reviewsCount: 289,
    studentsCount: 2950,
    popular: true,
    instructor: {
      name: 'Abdullah',
      role: 'Top-Rated Fiverr Seller & AI Specialist',
      avatar: ''
    },
    keyHighlights: [
      'Top-Rated Seller Gig SEO Secret Checklist',
      'AI-Powered Fast Gig Fulfillment Workflows',
      'Client Communication & Up-Selling Scripts',
      'Handling Orders with Zero Manual Fatigue',
      'Payout Optimization & Direct Local Bank Transfers'
    ],
    modules: [
      {
        number: 1,
        title: 'Fiverr Algorithm & High-Intent Gig Creation',
        duration: 'Week 1',
        lessons: [
          'Deconstructing Top 1% Gig Keywords',
          'Designing Conversion-Focused Gig Images',
          'Crafting Irresistible Gig Packages & FAQs'
        ]
      },
      {
        number: 2,
        title: 'AI Service Delivery Automation',
        duration: 'Week 2',
        lessons: [
          'AI Copywriting & Blogging Gigs',
          'AI Image Generation & Commercial Licensing',
          'AI Data Scraping & Workflow Automation'
        ]
      },
      {
        number: 3,
        title: 'Client Communication & Order Escalation',
        duration: 'Week 3',
        lessons: [
          'Closing High-Ticket $200+ Custom Orders',
          'Handling Revisions like a Professional',
          '5-Star Review Accumulation Strategy'
        ]
      },
      {
        number: 4,
        title: 'Scaling into a Mini-Agency',
        duration: 'Week 4',
        lessons: [
          'Outsourcing Repetitive Tasks',
          'Diversifying to Upwork & Direct Email Outreach',
          'Managing USD Earnings Safely'
        ]
      }
    ],
    icon: 'Zap',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-cyan-500/5',
    accentColor: '#10B981'
  },
  {
    id: 'digital-marketing-training',
    title: 'Digital Marketing Training',
    badge: 'Industry Standard',
    category: 'marketing',
    shortDescription: 'Master Meta Ads, Google PPC, SEO, Email Funnels, and Social Media Strategy to scale real e-commerce and agency client businesses.',
    fullDescription: 'Comprehensive performance marketing training built for real-world growth. Learn media buying on Meta & Google, audience retargeting, conversion rate optimization (CRO), high-ROI sales funnels, and analytics.',
    priceUSD: 69,
    pricePKR: '23,000',
    originalPricePKR: '34,999',
    duration: '6 Weeks',
    level: 'All Levels',
    rating: 4.96,
    reviewsCount: 410,
    studentsCount: 4120,
    popular: false,
    instructor: {
      name: 'Abdullah',
      role: 'Head of Growth & Performance Marketer',
      avatar: ''
    },
    keyHighlights: [
      'Live Meta Ads Manager Setup & Budget Scaling',
      'Google Search, Display & Video Ads Campaign Architecture',
      'On-Page, Off-Page & Technical SEO Audits',
      'High-Converting Landing Page Copywriting',
      'Client Pitch Decks & Monthly Retainer Proposal Templates'
    ],
    modules: [
      {
        number: 1,
        title: 'Marketing Foundations & Audience Persona',
        duration: 'Week 1',
        lessons: [
          'Consumer Psychology & Funnel Mapping',
          'Competitor Ad Library Analysis',
          'Crafting Core Offer Positioning'
        ]
      },
      {
        number: 2,
        title: 'Meta Ads (Facebook & Instagram) Mastery',
        duration: 'Week 2 - 3',
        lessons: [
          'CBO vs ABO Campaign Strategies',
          'Broad Audience vs Lookalike Targeting',
          'Ad Creative Production & A/B Testing'
        ]
      },
      {
        number: 3,
        title: 'Google Search & YouTube Performance Ads',
        duration: 'Week 4',
        lessons: [
          'Keyword Bidding & Quality Score Optimization',
          'Conversion Tracking & GA4 Setup',
          'Retargeting Cold Audiences'
        ]
      },
      {
        number: 4,
        title: 'SEO & Client Retention Strategies',
        duration: 'Week 5 - 6',
        lessons: [
          'Technical SEO & Site Speed Audit',
          'Building High-Authority Backlinks',
          'Landing $1,000/mo Retainer Clients'
        ]
      }
    ],
    icon: 'TrendingUp',
    gradient: 'from-blue-500/20 via-indigo-500/10 to-purple-500/5',
    accentColor: '#2563EB'
  },
  {
    id: 'adobe-illustrator-complete',
    title: 'Adobe Illustrator Complete Course',
    badge: 'Creative Art',
    category: 'design',
    shortDescription: 'From beginner pen tool vector mechanics to professional vector graphics, logo design, brand identity, and print media.',
    fullDescription: 'Unlock your creative potential with hands-on vector artwork mastery. Learn precision geometry, typography, isometric illustration, logo branding design, print packaging, and SVG export workflows for modern UI/web projects.',
    priceUSD: 45,
    pricePKR: '12,999',
    originalPricePKR: '22,999',
    duration: '5 Weeks',
    level: 'Beginner',
    rating: 4.93,
    reviewsCount: 215,
    studentsCount: 2100,
    popular: false,
    instructor: {
      name: 'Abdullah',
      role: 'Senior Brand Identity & Vector Artist',
      avatar: ''
    },
    keyHighlights: [
      'Mastering Pen Tool, Pathfinder & Shape Builder',
      'Professional Logo Design & Brand Style Guide Creation',
      '3D Effects, Gradients, Meshes & Pattern Brushes',
      'Exporting Vectors for Web, Print & Mobile UI',
      'Selling Design Assets on Freepik & Creative Market'
    ],
    modules: [
      {
        number: 1,
        title: 'Vectors, Workspace & Pen Tool Mastery',
        duration: 'Week 1',
        lessons: [
          'Vector vs Raster Math Explained',
          'Flawless Bezier Curve Control',
          'Keyboard Shortcuts & Workflow Optimization'
        ]
      },
      {
        number: 2,
        title: 'Logo Design & Brand Identity Systems',
        duration: 'Week 2 - 3',
        lessons: [
          'Golden Ratio & Grid Geometry in Logos',
          'Color Palette Psychology & Color Harmony',
          'Typography Pairing & Monogram Design'
        ]
      },
      {
        number: 3,
        title: '3D Vector Artwork & Isometric Graphics',
        duration: 'Week 4',
        lessons: [
          '3D Inflate, Extrude & Bevel Tools',
          'Gradient Meshes for Ultra-Realistic Objects',
          'Isometric Grid System Creation'
        ]
      },
      {
        number: 4,
        title: 'Client Deliverables & Passive Asset Sales',
        duration: 'Week 5',
        lessons: [
          'Packaging Vector Files (.AI, .EPS, .SVG, .PDF)',
          'Monetizing Vector Assets on Stock Marketplaces',
          'Presenting Logos to Clients Professionally'
        ]
      }
    ],
    icon: 'Palette',
    gradient: 'from-amber-500/20 via-orange-500/10 to-yellow-500/5',
    accentColor: '#F59E0B'
  },
  {
    id: 'blogging-masterclass',
    title: 'Blogging Masterclass',
    badge: 'Passive Cashflow',
    category: 'blogging',
    shortDescription: 'Build high-traffic niche websites, master programmatic SEO, craft AI-assisted articles, and monetize with AdSense, Ezoic & Affiliates.',
    fullDescription: 'Build an automated digital real estate asset that generates revenue while you sleep. Learn keyword research for low-competition niches, WordPress setup, speed optimization, high-ranking content publishing, and ad network approval.',
    priceUSD: 39,
    pricePKR: '10,999',
    originalPricePKR: '19,999',
    duration: '4 Weeks',
    level: 'All Levels',
    rating: 4.94,
    reviewsCount: 198,
    studentsCount: 1890,
    popular: false,
    instructor: {
      name: 'Abdullah',
      role: 'Niche Site Publisher & Affiliate Marketer',
      avatar: ''
    },
    keyHighlights: [
      'Low-Competition Keyword Research Secrets',
      'WordPress Theme & Speed Optimization Setup',
      'Writing SEO-Optimized Articles with Human-AI Hybrid Flow',
      'Google AdSense & High-Paying Affiliate Approval',
      'Site Flipping for 30x Monthly Income Multiples'
    ],
    modules: [
      {
        number: 1,
        title: 'Niche Validation & Domain Setup',
        duration: 'Week 1',
        lessons: [
          'Finding High-CPM Low-KD Niches',
          'Domain Name Selection & Cloud Hosting Setup',
          'Essential WordPress Plugins & Security'
        ]
      },
      {
        number: 2,
        title: 'SEO Content Architecture & Writing',
        duration: 'Week 2',
        lessons: [
          'Siloing Structure for Rapid Topical Authority',
          'Writing Articles that Rank #1 on Google',
          'AI Content Humanization & On-Page SEO'
        ]
      },
      {
        number: 3,
        title: 'Technical Speed & Google Indexing',
        duration: 'Week 3',
        lessons: [
          'Achieving 95+ Mobile Score on Google PageSpeed',
          'Schema Markup Implementation',
          'Instant Google Search Console Indexing Tricks'
        ]
      },
      {
        number: 4,
        title: 'Monetization & Site Flipping',
        duration: 'Week 4',
        lessons: [
          'Google AdSense & Ezoic Monetization',
          'Amazon & High-Ticket Direct Affiliate Offers',
          'Valuing & Selling Sites on Empire Flippers / Motion Invest'
        ]
      }
    ],
    icon: 'BookOpen',
    gradient: 'from-purple-500/20 via-violet-500/10 to-indigo-500/5',
    accentColor: '#7C3AED'
  }
  /*
  =============================================================================
  HOW TO ADD A NEW COURSE IN THE FUTURE:
  Simply copy the template below, uncomment it, fill in your details, and add it
  to the COURSES_DATA array above! It will automatically render in the UI with 
  the exact same design, card layout, filter tab, and detail modal.
  =============================================================================

  ,
  {
    id: 'my-new-course-id',
    title: 'New Course Title',
    badge: 'Popular', // e.g. 'Popular', 'Hot', 'New', 'High Income'
    category: 'custom-category', // e.g. 'youtube', 'fiverr', 'marketing', 'design', 'blogging', or any new category!
    shortDescription: 'Short 1-2 sentence description for the card.',
    fullDescription: 'Detailed overview of the course shown inside the modal.',
    priceUSD: 49,
    pricePKR: '10,000',
    originalPricePKR: '20,000',
    duration: '4 Weeks',
    level: 'Beginner', // 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'
    rating: 5.0,
    reviewsCount: 150,
    studentsCount: 1200,
    popular: false,
    instructor: {
      name: 'Abdullah',
      role: 'Course Specialist & Instructor',
      avatar: ''
    },
    keyHighlights: [
      'Highlight point 1',
      'Highlight point 2',
      'Highlight point 3',
      'Highlight point 4'
    ],
    modules: [
      {
        number: 1,
        title: 'Module 1 Title',
        duration: 'Week 1',
        lessons: [
          'Lesson 1 title',
          'Lesson 2 title'
        ]
      },
      {
        number: 2,
        title: 'Module 2 Title',
        duration: 'Week 2',
        lessons: [
          'Lesson 1 title',
          'Lesson 2 title'
        ]
      }
    ],
    icon: 'Sparkles', // 'Youtube' | 'Zap' | 'TrendingUp' | 'Palette' | 'BookOpen' | 'Sparkles'
    gradient: 'from-blue-500/20 via-indigo-500/10 to-cyan-500/5',
    accentColor: '#2563EB'
  }
  */
];
