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
    <section id="booking" className="py-24 md:py-32 px-6 relative overflow-hidden bg-black min-h-[600px] flex items-center">
      
      {/* --- NEW ARC BACKGROUND START --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Container positioned to frame the arc */}
        <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[600px] max-w-7xl">
            
          <svg
            className="w-full h-full"
            viewBox="0 0 1200 600"
            fill="none"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              {/* 
                Linear Gradient (Left to Right)
                Transparent -> Blue -> Bright Center -> Blue -> Transparent
                This creates the "merges with black before the end" effect.
              */}
              <linearGradient id="arcGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0" />
                <stop offset="20%" stopColor="#0A2F4F" stopOpacity="0" />
                <stop offset="40%" stopColor="#2D8EDB" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#9AD7FF" stopOpacity="1" />
                <stop offset="60%" stopColor="#2D8EDB" stopOpacity="0.8" />
                <stop offset="80%" stopColor="#0A2F4F" stopOpacity="0" />
                <stop offset="100%" stopColor="#000000" stopOpacity="0" />
              </linearGradient>

              {/* Blur filter for the glow effect */}
              <filter id="glowBlur" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="35" result="coloredBlur" />
              </filter>
            </defs>

            {/* 
               Layer 1: The Outer Glow (Thick, Blurred, Faded) 
               Using stroke-width to control thickness
            */}
            <path
              d="M 100 600 Q 600 150 1100 600"
              stroke="url(#arcGradient)"
              strokeWidth="60"
              fill="none"
              style={{ filter: 'url(#glowBlur)', opacity: 0.6 }}
            />

            {/* 
               Layer 2: The Core Arc (Thinner, Brighter)
               Gives definition to the curve
            */}
            <path
              d="M 100 600 Q 600 150 1100 600"
              stroke="url(#arcGradient)"
              strokeWidth="10"
              fill="none"
              style={{ filter: 'blur(10px)', opacity: 0.8 }}
            />
            
            {/* 
               Layer 3: Top Highlight Spot
               A subtle radial glow just at the peak of the arc
            */}
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
      {/* --- NEW ARC BACKGROUND END --- */}

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10 w-full">
        <div className="text-center">
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
          
          {/* Liquid Glass CTA Button */}
          <div className="relative inline-block">
            {/* Outer glow */}
            <div 
              className="absolute inset-0 rounded-full transition-all duration-700"
              style={{
                background: `radial-gradient(ellipse at center, rgba(0, 59, 98, ${0.2 + pulse * 0.1}) 0%, transparent 70%)`,
                transform: 'scale(2.5)',
                filter: 'blur(30px)'
              }}
            />
            
            {/* Main button */}
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-10 md:px-14 py-4 md:py-5 rounded-full text-white transition-all duration-500 overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.12) 0%, 
                  rgba(255, 255, 255, 0.06) 50%,
                  rgba(0, 59, 98, 0.15) 100%
                )`,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: `
                  0 4px 24px rgba(0, 0, 0, 0.2),
                  inset 0 1px 0 rgba(255, 255, 255, 0.25),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.05)
                `,
                transform: isHovered ? 'scale(1.03) translateY(-2px)' : 'scale(1) translateY(0)'
              }}
            >
              {/* Inner glass highlight */}
              <div 
                className="absolute inset-x-0 top-0 h-1/2 rounded-t-full transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
                  opacity: isHovered ? 0.9 : 0.6
                }}
              />
              
              {/* Animated shine */}
              <div className="absolute inset-0 rounded-full overflow-hidden opacity-40">
                <div 
                  className="absolute w-[300%] h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    transform: `translateX(${-200 + (animationFrame % 300)}%)`,
                    top: 0,
                    left: 0
                  }}
                />
              </div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center justify-center gap-3 text-base md:text-lg font-medium tracking-wide">
                <span>Continue for Free</span>
                <svg 
                  className={`w-5 h-5 transition-all duration-300 ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-70'}`}
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            {/* Hover ring */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none transition-all duration-500"
              style={{
                border: '1px solid rgba(0, 59, 98, 0.3)',
                transform: `scale(${isHovered ? 1.15 : 1.08})`,
                opacity: isHovered ? 0.8 : 0
              }}
            />
          </div>
          
          {/* Trust indicators */}
          <div className="mt-12 flex items-center justify-center gap-6 md:gap-10">
            <span className="flex items-center gap-2 text-sm md:text-base text-white font-light">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ 
                  backgroundColor: '#4ade80',
                  boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)'
                }}
              />
              No commitment
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base text-white font-light">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ 
                  backgroundColor: '#4ade80',
                  boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)'
                }}
              />
              15 min call
            </span>
            <span className="flex items-center gap-2 text-sm md:text-base text-white font-light">
              <div 
                className="w-1.5 h-1.5 rounded-full"
                style={{ 
                  backgroundColor: '#4ade80',
                  boxShadow: '0 0 6px rgba(74, 222, 128, 0.5)'
                }}
              />
              100% free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
