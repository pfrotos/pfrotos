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

  // Noise texture generation for the arc
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Create subtle noise
    const imageData = ctx.createImageData(width, height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const noise = Math.random() * 25;
      data[i] = noise;
      data[i + 1] = noise;
      data[i + 2] = noise;
      data[i + 3] = 15; // Very subtle opacity
    }
    
    ctx.putImageData(imageData, 0, 0);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.04) + 1) / 2;

  return (
    <section id="booking" className="py-24 md:py-32 px-6 relative overflow-hidden bg-black min-h-[600px] flex items-center">
      
      {/* Inverted Arc Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main arc shape - inverted (curves down) */}
        <svg 
          className="absolute w-full h-full" 
          viewBox="0 0 1440 600" 
          preserveAspectRatio="xMidYMid slice"
          style={{ minWidth: '100%', minHeight: '100%' }}
        >
          <defs>
            {/* Main gradient for the arc */}
            <linearGradient id="arcGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#92CEFB" stopOpacity="0.4"/>
              <stop offset="40%" stopColor="#5BA3D9" stopOpacity="0.25"/>
              <stop offset="100%" stopColor="#2A5A7A" stopOpacity="0.15"/>
            </linearGradient>
            
            {/* Chromatic aberration - Red channel */}
            <linearGradient id="arcGradientRed" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFB5B5" stopOpacity="0.08"/>
              <stop offset="50%" stopColor="#FF9999" stopOpacity="0.04"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </linearGradient>
            
            {/* Chromatic aberration - Blue channel */}
            <linearGradient id="arcGradientBlue" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#B5D4FF" stopOpacity="0.08"/>
              <stop offset="50%" stopColor="#99C4FF" stopOpacity="0.04"/>
              <stop offset="100%" stopColor="transparent" stopOpacity="0"/>
            </linearGradient>
            
            {/* Blur filter for the arc */}
            <filter id="arcBlur" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="30"/>
            </filter>
            
            {/* Subtle blur for glow */}
            <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="40"/>
            </filter>
          </defs>
          
          {/* Soft glow layer behind arc */}
          <ellipse 
            cx="720" 
            cy="700" 
            rx="900" 
            ry="350"
            fill="url(#arcGradient)"
            filter="url(#softGlow)"
            opacity="0.5"
          />
          
          {/* Chromatic aberration - Red offset (left) */}
          <path
            d="M -100 600 Q 720 280 1540 600 L 1540 700 L -100 700 Z"
            fill="url(#arcGradientRed)"
            transform="translate(-3, 0)"
            opacity="0.6"
          />
          
          {/* Chromatic aberration - Blue offset (right) */}
          <path
            d="M -100 600 Q 720 280 1540 600 L 1540 700 L -100 700 Z"
            fill="url(#arcGradientBlue)"
            transform="translate(3, 0)"
            opacity="0.6"
          />
          
          {/* Main arc - shallow inverted curve */}
          <path
            d="M -100 600 Q 720 280 1540 600 L 1540 700 L -100 700 Z"
            fill="url(#arcGradient)"
          />
          
          {/* Blurred overlay for depth */}
          <path
            d="M -100 600 Q 720 320 1540 600 L 1540 700 L -100 700 Z"
            fill="url(#arcGradient)"
            filter="url(#arcBlur)"
            opacity="0.4"
          />
          
          {/* Top edge highlight */}
          <path
            d="M 0 580 Q 720 300 1440 580"
            fill="none"
            stroke="rgba(146, 206, 251, 0.3)"
            strokeWidth="1"
          />
        </svg>
        
        {/* Noise texture overlay */}
        <canvas 
          ref={canvasRef}
          width={200}
          height={200}
          className="absolute inset-0 w-full h-full opacity-30 mix-blend-overlay pointer-events-none"
          style={{ 
            imageRendering: 'pixelated',
            transform: 'scale(4)',
            transformOrigin: 'center center'
          }}
        />
        
        {/* Additional soft blur layer */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[70%]"
          style={{
            background: 'linear-gradient(to top, rgba(146, 206, 251, 0.08) 0%, transparent 100%)',
            filter: 'blur(60px)'
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
                background: `radial-gradient(ellipse at center, rgba(146, 206, 251, ${0.15 + pulse * 0.1}) 0%, transparent 70%)`,
                transform: 'scale(2)',
                filter: 'blur(20px)'
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
                  rgba(146, 206, 251, 0.08) 100%
                )`,
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: `
                  0 4px 24px rgba(0, 0, 0, 0.15),
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
                border: '1px solid rgba(146, 206, 251, 0.2)',
                transform: `scale(${isHovered ? 1.15 : 1.08})`,
                opacity: isHovered ? 0.8 : 0
              }}
            />
          </div>
          
          {/* Trust indicators - minimal and elegant */}
          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-white/40">
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#92CEFB]"/>
              No commitment
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#92CEFB]"/>
              15 min call
            </span>
            <span className="flex items-center gap-2">
              <div className="w-1 h-1 rounded-full bg-[#92CEFB]"/>
              100% free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
