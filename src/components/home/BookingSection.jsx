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
      
      {/* Clean Gradient Arc Background */}
      <div className="absolute inset-0 overflow-hidden">
        
        {/* Gradient Arc Container */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 bottom-0"
          style={{
            width: '200%',
            height: '100%',
            maxWidth: '2400px'
          }}
        >
          {/* Clean Smooth Gradient Arc */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 1440 700" 
            preserveAspectRatio="none"
          >
            <defs>
              {/* Ultra-smooth seamless gradient */}
              <linearGradient id="smoothArcGradient" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.06"/>
                <stop offset="5%" stopColor="#e8f4fc" stopOpacity="0.05"/>
                <stop offset="12%" stopColor="#b8d9f0" stopOpacity="0.08"/>
                <stop offset="20%" stopColor="#5a9bc9" stopOpacity="0.12"/>
                <stop offset="28%" stopColor="#2d7ab8" stopOpacity="0.18"/>
                <stop offset="36%" stopColor="#1a5a8a" stopOpacity="0.25"/>
                <stop offset="44%" stopColor="#0d4a78" stopOpacity="0.32"/>
                <stop offset="52%" stopColor="#003B62" stopOpacity="0.40"/>
                <stop offset="60%" stopColor="#0A2336" stopOpacity="0.50"/>
                <stop offset="68%" stopColor="#081c2c" stopOpacity="0.60"/>
                <stop offset="76%" stopColor="#051520" stopOpacity="0.72"/>
                <stop offset="84%" stopColor="#030e16" stopOpacity="0.84"/>
                <stop offset="92%" stopColor="#01070a" stopOpacity="0.94"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="1"/>
              </linearGradient>
              
              {/* Soft horizontal edge fade */}
              <linearGradient id="edgeFade" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#000000" stopOpacity="0.4"/>
                <stop offset="10%" stopColor="#000000" stopOpacity="0"/>
                <stop offset="90%" stopColor="#000000" stopOpacity="0"/>
                <stop offset="100%" stopColor="#000000" stopOpacity="0.4"/>
              </linearGradient>
              
              {/* Subtle top glow */}
              <radialGradient id="topHighlight" cx="50%" cy="0%" r="60%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.04"/>
                <stop offset="60%" stopColor="#003B62" stopOpacity="0.02"/>
                <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
              </radialGradient>
            </defs>
            
            {/* Soft top glow */}
            <ellipse 
              cx="720" 
              cy="180" 
              rx="700" 
              ry="250"
              fill="url(#topHighlight)"
            />
            
            {/* Main arc - smooth curve */}
            <path
              d="M -200 700 
                 L -200 400 
                 C -200 400, 200 160, 720 160 
                 C 1240 160, 1640 400, 1640 400 
                 L 1640 700 
                 Z"
              fill="url(#smoothArcGradient)"
            />
            
            {/* Edge fade overlay */}
            <path
              d="M -200 700 
                 L -200 400 
                 C -200 400, 200 160, 720 160 
                 C 1240 160, 1640 400, 1640 400 
                 L 1640 700 
                 Z"
              fill="url(#edgeFade)"
            />
            
            {/* Subtle top edge line */}
            <path
              d="M 50 390 
                 C 50 390, 380 168, 720 168 
                 C 1060 168, 1390 390, 1390 390"
              fill="none"
              stroke="rgba(255, 255, 255, 0.03)"
              strokeWidth="1"
            />
          </svg>
          
          {/* HIGH-QUALITY FILM GRAIN NOISE using SVG Filter */}
          <svg 
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{
              clipPath: 'ellipse(100% 85% at 50% 100%)'
            }}
          >
            <defs>
              {/* Film Grain Noise Filter */}
              <filter id="filmGrain" x="0%" y="0%" width="100%" height="100%">
                {/* Generate fine turbulence noise */}
                <feTurbulence 
                  type="fractalNoise" 
                  baseFrequency="0.9" 
                  numOctaves="5" 
                  seed="15"
                  stitchTiles="stitch"
                  result="noise"
                />
                
                {/* Convert to pure grayscale */}
                <feColorMatrix 
                  type="saturate" 
                  values="0" 
                  in="noise"
                  result="grayNoise"
                />
                
                {/* High contrast - push to near B&W */}
                <feComponentTransfer in="grayNoise" result="contrastNoise">
                  <feFuncR type="linear" slope="3" intercept="-0.9"/>
                  <feFuncG type="linear" slope="3" intercept="-0.9"/>
                  <feFuncB type="linear" slope="3" intercept="-0.9"/>
                  <feFuncA type="linear" slope="1" intercept="0"/>
                </feComponentTransfer>
                
                {/* Slight blur to soften harsh edges (0.4px equivalent) */}
                <feGaussianBlur 
                  in="contrastNoise" 
                  stdDeviation="0.4" 
                  result="softGrain"
                />
              </filter>
            </defs>
            
            {/* Noise overlay rectangle */}
            <rect 
              width="100%" 
              height="100%" 
              filter="url(#filmGrain)"
              style={{
                mixBlendMode: 'overlay',
                opacity: 0.28
              }}
            />
          </svg>
        </div>
        
        {/* Bottom fade to pure black */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, #000000 100%)'
          }}
        />
      </div>

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
          
          {/* Trust indicators - White text with green dots */}
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
