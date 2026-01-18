import React, { useState, useEffect } from 'react';

export default function BookingSection() {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.04) + 1) / 2;

  return (
    // CHANGED: py-24 md:py-32  ->  pt-0 md:pt-0 pb-24 md:pb-32
    <section id="booking" className="pt-0 md:pt-0 pb-24 md:pb-32 px-6 relative overflow-hidden bg-black min-h-[600px] flex items-center">
      
      {/* --- ARC BACKGROUND START --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[600px] max-w-7xl">
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0" />
                <stop offset="20%" stopColor="#0A2F4F" stopOpacity="0" />
                <stop offset="40%" stopColor="#2D8EDB" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#9AD7FF" stopOpacity="1" />
                <stop offset="60%" stopColor="#2D8EDB" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#0A2F4F" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="35" result="coloredBlur" />
              </filter>
            </defs>

            <path
              d="M 100 600 Q 600 150 1100 600"
              stroke="url(#arcGradient)"
              strokeWidth="60"
              fill="none"
              style={{ filter: 'url(#glowBlur)', opacity: 0.6 }}
            />

            <path
              d="M 100 600 Q 600 150 1100 600"
              stroke="url(#arcGradient)"
              strokeWidth="10"
              fill="none"
              style={{ filter: 'blur(10px)', opacity: 0.8 }}
            />
            
            <ellipse 
              cx="600" 
              cy="350" 
              rx="300" 
              ry="100" 
              fill="#2D8EDB"
              style={{ filter: 'blur(80px)', opacity: 0.2 }}
            />
          </svg>
        </div>
      </div>
      {/* --- ARC BACKGROUND END --- */}

      {/* Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 w-full flex flex-col items-center">
        <div className="text-center w-full">
          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Let's talk
          </h2>
          
          {/* Subheadline */}
          <p className="text-base md:text-lg text-white/70 mb-4 max-w-xl mx-auto font-light leading-relaxed">
            Book a short 15-minute call to make your brand's vision not limited by funds but by imagination.
          </p>
          
          {/* Value proposition */}
          <p className="text-sm md:text-base text-[#92CEFB] mb-12 max-w-lg mx-auto font-light">
            Join brands saving 82% while creating 10× more content—better, faster, finest.
          </p>
          
          {/* --- BUTTON CENTERED --- */}
          <div className="flex justify-center w-full">
            <a 
              href="https://calendly.com/pfrotosmeet/meetup"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-6 py-2 md:px-8 md:py-3 rounded-full bg-[#f0f2f5] transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-[inset_0px_-4px_8px_rgba(0,0,0,0.1),inset_0px_4px_8px_rgba(255,255,255,1),0px_0px_25px_rgba(255,255,255,0.25)] cursor-pointer inline-block"
            >
              <span className="text-base md:text-lg font-bold bg-gradient-to-r from-[#3a82f5] to-black bg-clip-text text-transparent flex items-center justify-center gap-2">
                Get Your Free Call
              </span>
            </a>
          </div>
          
          {/* 
             --- PERFECTLY CENTERED TRUST INDICATORS --- 
             We use a Flex row where the Left and Right items take up equal space (flex-1),
             forcing the Middle item to sit exactly in the center.
          */}
          <div className="mt-12 w-full max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-y-3 md:gap-0">
            
            {/* Left Item: Flex-1 + Align Right */}
            <div className="flex items-center gap-2 md:flex-1 md:justify-end md:pr-8 text-sm md:text-base text-white font-light">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#4ade80', boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)' }}
              />
              <span>No commitment</span>
            </div>

            {/* Middle Item: Auto Width + Align Center (Dead center under button) */}
            <div className="flex items-center gap-2 justify-center text-sm md:text-base text-white font-light">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#4ade80', boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)' }}
              />
              <span>15 min call</span>
            </div>

            {/* Right Item: Flex-1 + Align Left */}
            <div className="flex items-center gap-2 md:flex-1 md:justify-start md:pl-8 text-sm md:text-base text-white font-light">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: '#4ade80', boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)' }}
              />
              <span>100% free</span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}