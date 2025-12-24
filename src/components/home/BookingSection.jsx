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

  const pulse = (Math.sin(animationFrame * 0.06) + 1) / 2;

  return (
    <section id="booking" className="py-32 px-6 relative overflow-hidden bg-black">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep gradient base */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 20%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
              radial-gradient(ellipse at 70% 80%, rgba(168, 85, 247, 0.12) 0%, transparent 50%),
              radial-gradient(ellipse at 50% 50%, rgba(118, 196, 255, 0.08) 0%, transparent 60%)
            `
          }}
        />
        
        {/* Animated chromatic orbs */}
        <div 
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-20"
          style={{
            background: 'linear-gradient(135deg, #76c4ff, #a855f7, #ec4899)',
            left: `${30 + Math.sin(animationFrame * 0.01) * 10}%`,
            top: `${20 + Math.cos(animationFrame * 0.01) * 10}%`,
            transform: 'translate(-50%, -50%)'
          }}
        />
        <div 
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px] opacity-15"
          style={{
            background: 'linear-gradient(225deg, #22c55e, #76c4ff, #6366f1)',
            right: `${20 + Math.cos(animationFrame * 0.015) * 8}%`,
            bottom: `${30 + Math.sin(animationFrame * 0.015) * 8}%`,
            transform: 'translate(50%, 50%)'
          }}
        />
        
        {/* Subtle grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Let's talk!
          </h2>
          
          <p className="text-base md:text-lg text-gray-300 mb-4 max-w-2xl mx-auto font-light leading-relaxed">
            Book a short 15-minute call to make your brand's vision not limited by funds but by imagination.
          </p>
          
          <p className="text-sm md:text-base text-[#76c4ff] mb-10 max-w-xl mx-auto font-light">
            Join brands saving 82% while creating 10× more content—better, faster, finest.
          </p>
          
          {/* Liquid Glass CTA Button */}
          <div className="relative inline-block">
            {/* Chromatic aberration / glow layers */}
            <div 
              className="absolute inset-0 rounded-full blur-xl transition-all duration-500"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(118, 196, 255, ${0.3 + pulse * 0.2}), 
                  rgba(168, 85, 247, ${0.25 + pulse * 0.15}), 
                  rgba(236, 72, 153, ${0.2 + pulse * 0.1})
                )`,
                transform: `scale(${1.1 + pulse * 0.1})`,
                opacity: isHovered ? 1 : 0.7
              }}
            />
            
            {/* RGB split effect layers */}
            <div 
              className="absolute inset-0 rounded-full opacity-50 blur-sm"
              style={{
                background: 'linear-gradient(135deg, #ff000020, transparent)',
                transform: `translate(${isHovered ? -2 : -1}px, ${isHovered ? -1 : 0}px)`
              }}
            />
            <div 
              className="absolute inset-0 rounded-full opacity-50 blur-sm"
              style={{
                background: 'linear-gradient(135deg, transparent, #0000ff20)',
                transform: `translate(${isHovered ? 2 : 1}px, ${isHovered ? 1 : 0}px)`
              }}
            />
            
            {/* Main button */}
            <button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="relative px-10 py-5 rounded-full text-white text-base font-medium transition-all duration-500 overflow-hidden group"
              style={{
                background: `linear-gradient(135deg, 
                  rgba(255, 255, 255, ${0.15 + pulse * 0.05}) 0%, 
                  rgba(255, 255, 255, 0.05) 50%,
                  rgba(118, 196, 255, 0.1) 100%
                )`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                boxShadow: `
                  0 0 ${20 + pulse * 15}px rgba(118, 196, 255, ${0.2 + pulse * 0.15}),
                  0 0 ${40 + pulse * 20}px rgba(168, 85, 247, ${0.1 + pulse * 0.1}),
                  0 8px 32px rgba(0, 0, 0, 0.3),
                  inset 0 1px 0 rgba(255, 255, 255, 0.4),
                  inset 0 -1px 0 rgba(255, 255, 255, 0.1)
                `,
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
              }}
            >
              {/* Inner glow overlay */}
              <div 
                className="absolute inset-0 rounded-full transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 50%, rgba(118,196,255,0.1) 100%)',
                  opacity: isHovered ? 1 : 0.5
                }}
              />
              
              {/* Animated shine effect */}
              <div 
                className="absolute inset-0 rounded-full overflow-hidden"
                style={{ opacity: isHovered ? 0.6 : 0.3 }}
              >
                <div 
                  className="absolute w-[200%] h-full"
                  style={{
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.4) 50%, transparent 100%)',
                    transform: `translateX(${-100 + (animationFrame % 180) * 1.5}%)`,
                    top: 0,
                    left: 0
                  }}
                />
              </div>
              
              {/* Button text */}
              <span className="relative z-10 flex items-center gap-2">
                <span>Reserve Your Free Call</span>
                <svg 
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            {/* Outer pulse ring */}
            <div 
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                border: '1px solid rgba(118, 196, 255, 0.3)',
                transform: `scale(${1.2 + pulse * 0.15})`,
                opacity: 0.5 - pulse * 0.3
              }}
            />
          </div>
          
          {/* Trust indicators */}
          <div className="mt-10 flex items-center justify-center gap-6 text-xs text-gray-500">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              No commitment
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              15 minutes only
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
              100% free
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
