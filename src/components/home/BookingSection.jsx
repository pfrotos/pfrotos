import React, { useState, useEffect, useRef } from 'react';

export default function BookingSection() {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // High-contrast black/white noise texture generation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Create high-contrast black/white noise
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      // Pure black or white noise for high contrast
      const isWhite = Math.random() > 0.5;
      const value = isWhite ? 255 : 0;
      data[i] = value;     // R
      data[i + 1] = value; // G
      data[i + 2] = value; // B
      data[i + 3] = 255;   // Full opacity (we control with CSS)
    }
    
    ctx.putImageData(imageData, 0, 0);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.04) + 1) / 2;

  return (
    <section id="booking" className="py-24 md:py-32 px-6 relative overflow-hidden bg-black min-h-[600px] flex items-center">
      
      {/* Inverted Arc Background with smooth gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <svg 
          className="absolute w-full h-full" 
          viewBox="0 0 1440 700" 
          preserveAspectRatio="xMidYMid slice"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <defs>
            {/* Main gradient: #FFFFFF → #003B62 → #0A2336 → #000000 */}
            <linearGradient id="arcGradientMain" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.15"/>
              <stop offset="25%" stopColor="#FFFFFF" stopOpacity="0.08"/>
              <stop offset="40%" stopColor="#003B62" stopOpacity="0.4"/>
              <stop offset="60%" stopColor="#003B62" stopOpacity="0.3"/>
              <stop offset="75%" stopColor="#0A2336" stopOpacity="0.5"/>
              <stop offset="90%" stopColor="#0A2336" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="1"/>
            </linearGradient>
            
            {/* Seamless blend gradient for smooth transition */}
            <linearGradient id="arcBlendGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.05"/>
              <stop offset="30%" stopColor="#003B62" stopOpacity="0.2"/>
              <stop offset="60%" stopColor="#0A2336" stopOpacity="0.35"/>
              <stop offset="85%" stopColor="#000000" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#000000" stopOpacity="1"/>
            </linearGradient>
            
            {/* Radial glow for the top of arc */}
            <radialGradient id="arcTopGlow" cx="50%" cy="0%" r="60%" fx="50%" fy="0%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.12"/>
              <stop offset="40%" stopColor="#003B62" stopOpacity="0.08"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </radialGradient>
            
            {/* Blur filter for soft edges */}
            <filter id="arcSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="25"/>
            </filter>
            
            {/* Very soft glow filter */}
            <filter id="ultraSoftGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="50"/>
            </filter>
          </defs>
          
          {/* Background soft glow layer */}
          <ellipse 
            cx="720" 
            cy="500" 
            rx="1000" 
            ry="400"
            fill="url(#arcTopGlow)"
            filter="url(#ultraSoftGlow)"
          />
          
          {/* Main arc shape - shallow inverted curve */}
          <path
            d="M -100 700 L -100 450 Q 720 200 1540 450 L 1540 700 Z"
            fill="url(#arcGradientMain)"
          />
          
          {/* Blended overlay for seamless transition */}
          <path
            d="M -100 700 L -100 480 Q 720 250 1540 480 L 1540 700 Z"
            fill="url(#arcBlendGradient)"
            filter="url(#arcSoftBlur)"
            opacity="0.7"
          />
          
          {/* Top edge subtle highlight */}
          <path
            d="M 0 450 Q 720 210 1440 450"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="1.5"
          />
          
          {/* Secondary highlight for depth */}
          <path
            d="M 100 460 Q 720 230 1340 460"
            fill="none"
            stroke="rgba(0, 59, 98, 0.15)"
            strokeWidth="1"
          />
        </svg>
        
        {/* High-contrast black/white noise texture overlay */}
        <canvas 
          ref={canvasRef}
          width={150}
          height={150}
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ 
            imageRendering: 'pixelated',
            transform: 'scale(5)',
            transformOrigin: 'center center',
            mixBlendMode: 'overlay',
            opacity: 0.28
          }}
        />
        
        {/* Bottom fade to pure black for footer merge */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-32"
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
            {/* Outer glow - very subtle */}
            <div 
              className="absolute inset-0 rounded-full transition-all duration-700"
              style={{
                background: `radial-gradient(ellipse at center, rgba(0, 59, 98, ${0.2 + pulse * 0.1}) 0%, transparent 70%)`,
                transform: 'scale(2.5)',
                filter: 'blur(30px)'
              }}
            />
            
            {/* Main button container */}
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
              {/* Inner glass highlight - top */}
              <div 
                className="absolute inset-x-0 top-0 h-1/2 rounded-t-full transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 100%)',
                  opacity: isHovered ? 0.9 : 0.6
                }}
              />
              
              {/* Animated subtle shine */}
              <div 
                className="absolute inset-0 rounded-full overflow-hidden opacity-40"
              >
                <div 
                  className="absolute w-[300%] h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                    transform: `translateX(${-200 + (animationFrame % 300)}%)`,
                    top: 0,
                    left: 0,
                    transition: 'transform 0.1s linear'
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
            
            {/* Subtle outer ring on hover */}
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
