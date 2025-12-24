import React from 'react';
import HeroSection from '../components/home/HeroSection';
import WhatWeDoSection from '../components/home/WhatWeDoSection';
import ProcessSection from '../components/home/ProcessSection';
import ResultsSection from '../components/home/ResultsSection';
import BookingSection from '../components/home/BookingSection';
import ReviewsSection from '../components/home/ReviewsSection';
import FAQSection from '../components/home/FAQSection';
import Footer from '../components/home/Footer';

export default function Home() {
  return (
    <div className="bg-black">
      <HeroSection />
      <WhatWeDoSection />
      <ProcessSection />
      <ResultsSection />
      <BookingSection />
      <ReviewsSection />
      <FAQSection />
      <Footer />
    </div>
  );
}
