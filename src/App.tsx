import React, { useEffect, useState } from 'react';
import Lenis from 'lenis';

// Components
import { BackgroundMesh } from './components/BackgroundMesh';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustIndicators } from './components/TrustIndicators';
import { BentoGrid } from './components/BentoGrid';
import { FeaturedCourses } from './components/FeaturedCourses';
import { WhyNovexa } from './components/WhyNovexa';
import { LearningProcess } from './components/LearningProcess';
import { StudentSuccess } from './components/StudentSuccess';
import { PricingPackages } from './components/PricingPackages';
import { JazzCashPayment } from './components/JazzCashPayment';
import { FAQSection } from './components/FAQSection';
import { NewsletterSignup } from './components/NewsletterSignup';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    // Initialize Lenis Smooth Scroll
    let lenis: Lenis | null = null;
    try {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 2,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    } catch (err) {
      console.warn('Lenis smooth scroll fallback:', err);
    }

    // Scroll spy for active section highlight in Navbar
    const handleScroll = () => {
      const sections = ['hero', 'courses', 'bento', 'why-us', 'process', 'testimonials', 'pricing', 'jazzcash', 'faq', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (lenis) {
        lenis.destroy();
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-[#FFFFFF] text-[#111827] overflow-x-hidden selection:bg-blue-600 selection:text-white">
      {/* Background Animated Gradient Mesh */}
      <BackgroundMesh />

      {/* Top Navbar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero />
        <TrustIndicators />
        <FeaturedCourses />
        <BentoGrid />
        <WhyNovexa />
        <LearningProcess />
        <StudentSuccess />
        <PricingPackages />
        <JazzCashPayment />
        <FAQSection />
        <NewsletterSignup />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
