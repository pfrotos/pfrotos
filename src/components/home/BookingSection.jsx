import React, { useState, useEffect, useRef } from 'react';

export default function BookingSection() {
  const [isHovered, setIsHovered] = useState(false);
  const noiseCanvasRef = useRef(null);

  // Generate ultra-fine, microscopic film grain
  useEffect(() => {
    const canvas = noiseCanvasRef.current;
    if (!canvas) return;

    // Maximum resolution for finest possible grain
    const size = 4096;
    canvas.width = size;
    canvas.height = size;
    
    const ctx = canvas.getContext('2d');
    const imageData = ctx.createImageData(size, size);
    const data = imageData.data;

    // Ultra-fine grain - each pixel is 1px, creating microscopic speckles
    for (let i = 0; i < data.length; i += 4) {
      const rand = Math.random();
      
      // Subtle variation for natural film grain look
      // More mid-tones for softer appearance
      let value;
      if (rand < 0.35) {
        value = 0; // Black
      } else if (rand > 0.65) {
        value = 255; // White
      } else {
        value = rand < 0.5 ? 20 : 235; // Near black/white for subtle variation
      }
      
      data[i] = value;
      data[i + 1] = value;
      data[i + 2] = value;
      data[i + 3] = 255;
    }

    ctx.putImageData(imageData, 0, 0);

  }, []);

  return (
    <section id="booking" className="relative py-32 md:py-48 px-6 overflow-hidden bg-black">
      
      {/* Clean Gradient Arc */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Gradient Arc Container */}
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: '220%',
            height: '650px',
            minWidth: '1400px',
          }}
        >
          {/* Clean SVG Arc with Ultra-Smooth Gradient */}
          <svg 
            viewBox="0 0 1440 650" 
            preserveAspectRatio="none"
            className="w-full h-full"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <linearGradient id="smoothGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF"/>
                <stop offset="5%" stopColor="#FAFCFE"/>
                <stop offset="10%" stopColor="#EEF5FA"/>
                <stop offset="15%" stopColor="#D6E8F4"/>
                <stop offset="20%" stopColor="#A8D1EB"/>
                <stop offset="25%" stopColor="#6AADD4"/>
                <stop offset="30%" stopColor="#3B8BBF"/>
                <stop offset="35%" stopColor="#1A6A9E"/>
                <stop offset="40%" stopColor="#003B62"/>
                <stop offset="48%" stopColor="#0D3250"/>
                <stop offset="55%" stopColor="#0A2336"/>
                <stop offset="62%" stopColor="#081C2C"/>
                <stop offset="70%" stopColor="#061520"/>
                <stop offset="78%" stopColor="#040E15"/>
                <stop offset="86%" stopColor="#02080B"/>
                <stop offset="94%" stopColor="#010304"/>
                <stop offset="100%" stopColor="#000000"/>
              </linearGradient>
            </defs>
            
            <path 
              d="M-150,650 L-150,380 Q720,20 1590,380 L1590,650 Z" 
              fill="url(#smoothGradient)"
            />
          </svg>

          {/* Ultra-Fine Grain Noise Overlay */}
          <canvas 
            ref={noiseCanvasRef}
            className="absolute inset-0"
            style={{
              width: '100%',
              height: '100%',
              opacity: 0.18,
              mixBlendMode: 'overlay',
              pointerEvents: 'none',
              imageRendering: 'auto', // Smooth rendering, not pixelated
            }}
          />
        </div>

        {/* Bottom fade to black */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-[180px]"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 40%, #000000 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-light text-white mb-6 tracking-tight">
            Let's talk
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Join brands saving <span className="text-white font-medium">82%</span> while creating{' '}
            <span className="text-white font-medium">10x more content</span>—better, faster, finest.
          </p>
          
          <p className="text-base text-white/60 mb-14 max-w-xl mx-auto font-light">
            15 minutes to unlock your brand's visual potential.
          </p>
          
          {/* Liquid Glass CTA Button */}
          <div className="relative inline-block">
            <div 
              className={`absolute -inset-8 rounded-full transition-all duration-1000 ${isHovered ? 'opacity-100' : 'opacity-40'}`}
              style={{
                background: 'radial-gradient(ellipse at center, rgba(255, 255, 255, 0.15) 0%, transparent 70%)',
                filter: 'blur(30px)',
              }}
            />

            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`
                relative px-12 py-5 rounded-full text-white text-base font-medium
                transition-all duration-700 ease-out
                transform ${isHovered ? 'scale-[1.03]' : 'scale-100'}
              `}
              style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0.1) 100%)',
                backdropFilter: 'blur(24px) saturate(180%)',
                WebkitBackdropFilter: 'blur(24px) saturate(180%)',
                border: '1px solid rgba(255,255,255,0.18)',
                boxShadow: isHovered
                  ? `
                    0 0 60px rgba(255, 255, 255, 0.2),
                    0 0 100px rgba(255, 255, 255, 0.08),
                    0 8px 32px rgba(0,0,0,0.3),
                    inset 0 1px 0 rgba(255,255,255,0.25),
                    inset 0 -1px 0 rgba(255,255,255,0.08)
                  `
                  : `
                    0 0 40px rgba(255, 255, 255, 0.12),
                    0 4px 24px rgba(0,0,0,0.2),
                    inset 0 1px 0 rgba(255,255,255,0.2),
                    inset 0 -1px 0 rgba(255,255,255,0.05)
                  `,
              }}
            >
              <span 
                className="absolute inset-0 rounded-full overflow-hidden pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.12) 0%, transparent 40%)',
                }}
              />
              
              <span 
                className={`absolute inset-[1px] rounded-full pointer-events-none transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%, rgba(255, 255, 255, 0.05) 100%)',
                }}
              />
              
              <span className="relative z-10 flex items-center justify-center gap-3 tracking-wide">
                Continue for free
                <svg 
                  className={`w-5 h-5 transition-all duration-500 ${isHovered ? 'translate-x-1 opacity-100' : 'opacity-70'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="flex items-center gap-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#4ADE80',
                  boxShadow: '0 0 8px rgba(74, 222, 128, 0.6), 0 0 16px rgba(74, 222, 128, 0.3)'
                }}
              />
              <span className="text-white text-sm font-light">100% Free</span>
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#4ADE80',
                  boxShadow: '0 0 8px rgba(74, 222, 128, 0.6), 0 0 16px rgba(74, 222, 128, 0.3)'
                }}
              />
              <span className="text-white text-sm font-light">No commitment</span>
            </div>
            <div className="flex items-center gap-3">
              <div 
                className="w-2 h-2 rounded-full"
                style={{
                  backgroundColor: '#4ADE80',
                  boxShadow: '0 0 8px rgba(74, 222, 128, 0.6), 0 0 16px rgba(74, 222, 128, 0.3)'
                }}
              />
              <span className="text-white text-sm font-light">15 min call</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
