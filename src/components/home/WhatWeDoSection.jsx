import React, { useState, useEffect, useCallback } from 'react';

export default function WhatWeDoSection() {
  const [isClient, setIsClient] = useState(false);
  const [imageStates, setImageStates] = useState({
    card1: { loaded: false, showAnimation: false },
    card2: { loaded: false, showAnimation: false },
    card3: { loaded: false, showAnimation: false },
    card4: { loaded: false, showAnimation: false },
    card5: { loaded: false, showAnimation: false },
  });

  // Only run animations on client side
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Set up 2.5 second timeout for each image
  useEffect(() => {
    if (!isClient) return;
    
    const timeouts = Object.keys(imageStates).map((cardKey) => {
      return setTimeout(() => {
        setImageStates(prev => {
          if (!prev[cardKey].loaded) {
            return {
              ...prev,
              [cardKey]: { ...prev[cardKey], showAnimation: true }
            };
          }
          return prev;
        });
      }, 2500);
    });

    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  }, [isClient]);

  const handleImageLoad = useCallback((cardKey) => {
    setImageStates(prev => ({
      ...prev,
      [cardKey]: { loaded: true, showAnimation: false }
    }));
  }, []);

  const handleImageError = useCallback((cardKey) => {
    setImageStates(prev => ({
      ...prev,
      [cardKey]: { loaded: false, showAnimation: true }
    }));
  }, []);

  // Responsive Image Component
  const ResponsiveImage = ({ src, alt, cardKey }) => (
    <img
      src={src}
      alt={alt}
      onLoad={() => handleImageLoad(cardKey)}
      onError={() => handleImageError(cardKey)}
      className={`absolute inset-0 w-full h-full object-cover rounded-lg md:rounded-xl transition-opacity duration-500 ${
        imageStates[cardKey].loaded ? 'opacity-100' : 'opacity-0'
      }`}
      loading="lazy"
    />
  );

  const showFallback = (cardKey) => {
    return !imageStates[cardKey].loaded;
  };

  return (
    <section id="what-we-do" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      {/* CSS Animations */}
      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes flow-right {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100px); opacity: 0; }
        }
        @keyframes slide-x {
          0%, 100% { transform: translateX(-5px); }
          50% { transform: translateX(5px); }
        }
        @keyframes slide-y {
          0%, 100% { transform: translateY(-3px); }
          50% { transform: translateY(3px); }
        }
        @keyframes ring-expand {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes progress-fill {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        @keyframes fade-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        @keyframes dot-blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-flow-right { animation: flow-right 2s linear infinite; }
        .animate-slide-x { animation: slide-x 3s ease-in-out infinite; }
        .animate-slide-y { animation: slide-y 2.5s ease-in-out infinite; }
        .animate-ring-expand { animation: ring-expand 2s ease-out infinite; }
        .animate-progress-fill { animation: progress-fill 4s ease-in-out infinite; }
        .animate-fade-pulse { animation: fade-pulse 2s ease-in-out infinite; }
        .animate-dot-blink { animation: dot-blink 1.5s ease-in-out infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-2xl md:text-5xl font-light mb-4 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          What we do
        </h2>

        {/* Dots indicator */}
        <div className="flex gap-1.5 md:gap-2 mb-8 md:mb-16">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
        </div>

        {/* Top Row - 2 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">

          {/* Card 1: Bespoke AI Visual Engines */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-40 sm:h-48 md:h-56 lg:h-64 relative overflow-hidden">
              <ResponsiveImage 
                src="/images/image1.jpg" 
                alt="Bespoke AI Visual Engines"
                cardKey="card1"
              />
              
              {showFallback('card1') && isClient && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Dot matrix background */}
                  <div className="absolute inset-0 grid grid-cols-10 gap-2 p-4 opacity-20">
                    {[...Array(60)].map((_, i) => (
                      <div
                        key={i}
                        className="w-1 h-1 rounded-full bg-[#76c4ff]/40 animate-dot-blink"
                        style={{ animationDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  <svg className="w-full h-full relative z-10" viewBox="0 0 200 120">
                    <defs>
                      <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Connection lines */}
                    <path d="M 40 35 Q 65 35 80 55" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M 40 85 Q 65 85 80 65" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M 100 60 L 130 60" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    <path d="M 150 60 L 175 60" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

                    {/* Input nodes */}
                    <g className="animate-slide-y">
                      <rect x="20" y="25" width="24" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
                      <text x="32" y="38" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="7">IN</text>
                    </g>
                    <g className="animate-slide-y" style={{ animationDelay: '0.5s' }}>
                      <rect x="20" y="75" width="24" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
                      <text x="32" y="88" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="7">IN</text>
                    </g>

                    {/* Central AI Process node */}
                    <g filter="url(#glow1)" className="animate-pulse-glow">
                      <rect x="72" y="42" width="36" height="36" rx="8" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.6)" strokeWidth="1.5"/>
                      <text x="90" y="65" textAnchor="middle" fill="#76c4ff" fontSize="10" fontWeight="500">AI</text>
                    </g>

                    {/* Transform node */}
                    <g>
                      <rect x="125" y="47" width="28" height="26" rx="5" fill="rgba(118, 196, 255, 0.12)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
                      <text x="139" y="64" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="6">PIPE</text>
                    </g>

                    {/* Output node */}
                    <g filter="url(#glow1)">
                      <circle cx="185" cy="60" r="14" fill="rgba(118, 196, 255, 0.25)" stroke="#76c4ff" strokeWidth="2" className="animate-pulse-glow"/>
                      <text x="185" y="64" textAnchor="middle" fill="#76c4ff" fontSize="8" fontWeight="600">OUT</text>
                    </g>

                    {/* Pulse ring */}
                    <circle cx="185" cy="60" r="20" fill="none" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1" className="animate-ring-expand"/>

                    {/* Data particles */}
                    {[0, 1, 2].map(i => (
                      <circle
                        key={i}
                        cx="40"
                        cy="60"
                        r="3"
                        fill="#76c4ff"
                        className="animate-flow-right"
                        style={{ animationDelay: `${i * 0.6}s` }}
                      />
                    ))}
                  </svg>
                </div>
              )}

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 z-20">
                View System →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Bespoke AI Visual Engines</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We don't generate images. We design frameworks. Custom AI pipelines that encode your brand's DNA into every pixel.
            </p>
          </div>

          {/* Card 2: Brand Calibrated Creative Direction */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-40 sm:h-48 md:h-56 lg:h-64 relative overflow-hidden">
              <ResponsiveImage 
                src="/images/image2.jpg" 
                alt="Brand Calibrated Creative Direction"
                cardKey="card2"
              />
              
              {showFallback('card2') && isClient && (
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 200 120">
                    <defs>
                      <linearGradient id="toneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#1a1a2e"/>
                        <stop offset="50%" stopColor="#16213e"/>
                        <stop offset="100%" stopColor="#0f3460"/>
                      </linearGradient>
                      <linearGradient id="paletteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#76c4ff"/>
                        <stop offset="33%" stopColor="#4ea8de"/>
                        <stop offset="66%" stopColor="#48bfe3"/>
                        <stop offset="100%" stopColor="#56cfe1"/>
                      </linearGradient>
                    </defs>

                    {/* Labels */}
                    <text x="15" y="28" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Tone</text>
                    <text x="15" y="58" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Palette</text>
                    <text x="15" y="88" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Mood</text>

                    {/* Tone slider */}
                    <rect x="55" y="20" width="120" height="12" rx="6" fill="url(#toneGrad)" opacity="0.6"/>
                    <circle cx="105" cy="26" r="7" fill="#76c4ff" filter="url(#glow1)" className="animate-slide-x"/>

                    {/* Palette bar */}
                    <rect x="55" y="50" width="120" height="12" rx="6" fill="url(#paletteGrad)" opacity="0.8"/>
                    <circle cx="75" cy="56" r="4" fill="#76c4ff" stroke="#fff" strokeWidth="0.5" className="animate-slide-x"/>
                    <circle cx="110" cy="56" r="4" fill="#4ea8de" stroke="#fff" strokeWidth="0.5" className="animate-slide-x" style={{ animationDelay: '0.3s' }}/>
                    <circle cx="145" cy="56" r="4" fill="#56cfe1" stroke="#fff" strokeWidth="0.5" className="animate-slide-x" style={{ animationDelay: '0.6s' }}/>

                    {/* Mood slider */}
                    <rect x="55" y="80" width="120" height="12" rx="6" fill="rgba(100,100,120,0.3)" opacity="0.5"/>
                    <circle cx="90" cy="86" r="7" fill="#9ca3af" className="animate-slide-x" style={{ animationDelay: '0.2s' }}/>

                    {/* Glow accent */}
                    <circle cx="180" cy="56" r="16" fill="rgba(118, 196, 255, 0.15)" className="animate-pulse-glow"/>
                    <circle cx="180" cy="56" r="8" fill="rgba(118, 196, 255, 0.4)" className="animate-pulse-glow"/>
                  </svg>
                </div>
              )}

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 z-20">
                See Process →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Brand Calibrated Creative Direction</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We extract your brand's soul—tone, palette, mood—and wire it directly into our imaging systems.
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">

          {/* Card 3: Adaptive Visual Language */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 sm:h-36 md:h-44 lg:h-48 relative overflow-hidden">
              <ResponsiveImage 
                src="/images/image3.jpg" 
                alt="Adaptive Visual Language"
                cardKey="card3"
              />
              
              {showFallback('card3') && isClient && (
                <div className="absolute inset-0">
                  {/* Grid background */}
                  <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(118,196,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(118,196,255,0.3) 1px, transparent 1px)',
                    backgroundSize: '15px 15px'
                  }}/>

                  <svg className="w-full h-full relative z-10" viewBox="0 0 120 80">
                    {/* Desktop */}
                    <g className="animate-fade-pulse">
                      <rect x="5" y="8" width="42" height="28" rx="3" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="0.8"/>
                      <rect x="5" y="40" width="18" height="22" rx="3" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="0.5"/>
                      <rect x="27" y="40" width="18" height="22" rx="3" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="0.5"/>
                      <text x="24" y="72" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="5">Desktop</text>
                    </g>

                    {/* Mobile */}
                    <g className="animate-slide-x" style={{ animationDelay: '0.3s' }}>
                      <rect x="55" y="5" width="22" height="38" rx="3" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="0.8"/>
                      <rect x="58" y="8" width="16" height="12" rx="2" fill="rgba(118, 196, 255, 0.3)"/>
                      <rect x="58" y="23" width="16" height="6" rx="1" fill="rgba(118, 196, 255, 0.15)"/>
                      <rect x="58" y="32" width="16" height="6" rx="1" fill="rgba(118, 196, 255, 0.15)"/>
                      <text x="66" y="52" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="5">Mobile</text>
                    </g>

                    {/* Ads */}
                    <g className="animate-slide-y" style={{ animationDelay: '0.6s' }}>
                      <rect x="85" y="8" width="28" height="48" rx="3" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="0.8"/>
                      <rect x="88" y="11" width="22" height="28" rx="2" fill="rgba(118, 196, 255, 0.25)"/>
                      <rect x="88" y="42" width="22" height="4" rx="1" fill="rgba(118, 196, 255, 0.5)"/>
                      <text x="99" y="66" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="5">Ads</text>
                    </g>
                  </svg>
                </div>
              )}

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 z-20">
                Explore →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Adaptive Visual Language</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              One visual system, infinite applications across all platforms.
            </p>
          </div>

          {/* Card 4: Feedback Refinement */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 sm:h-36 md:h-44 lg:h-48 relative overflow-hidden">
              <ResponsiveImage 
                src="/images/image4.jpg" 
                alt="Feedback Refinement"
                cardKey="card4"
              />
              
              {showFallback('card4') && isClient && (
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 120 80">
                    <defs>
                      <filter id="glowVersion" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Timeline */}
                    <line x1="15" y1="35" x2="105" y2="35" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="3" strokeLinecap="round"/>
                    
                    {/* Animated progress */}
                    <rect x="15" y="33.5" width="90" height="3" rx="1.5" fill="rgba(118, 196, 255, 0.6)" className="animate-progress-fill" style={{ transformOrigin: 'left' }}/>

                    {/* Version 1 */}
                    <g>
                      <circle cx="25" cy="35" r="9" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="1.5"/>
                      <text x="25" y="39" textAnchor="middle" fill="rgba(118, 196, 255, 0.9)" fontSize="7" fontWeight="500">v1</text>
                      <text x="25" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5">draft</text>
                      <circle cx="33" cy="27" r="5" fill="rgba(34, 197, 94, 0.25)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="0.5"/>
                      <path d="M 30 27 L 32 29 L 36 24" stroke="rgba(34, 197, 94, 0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                    </g>

                    {/* Version 2 */}
                    <g className="animate-fade-pulse" style={{ animationDelay: '1s' }}>
                      <circle cx="55" cy="35" r="9" fill="rgba(118, 196, 255, 0.25)" stroke="rgba(118, 196, 255, 0.6)" strokeWidth="1.5"/>
                      <text x="55" y="39" textAnchor="middle" fill="rgba(118, 196, 255, 0.95)" fontSize="7" fontWeight="500">v2</text>
                      <text x="55" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5">refined</text>
                    </g>

                    {/* Version 3 */}
                    <g filter="url(#glowVersion)" className="animate-pulse-glow" style={{ animationDelay: '2s' }}>
                      <circle cx="85" cy="35" r="11" fill="rgba(118, 196, 255, 0.3)" stroke="#76c4ff" strokeWidth="2"/>
                      <text x="85" y="39" textAnchor="middle" fill="#76c4ff" fontSize="7" fontWeight="600">v3</text>
                      <text x="85" y="52" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="5">final</text>
                    </g>

                    {/* Pulse ring */}
                    <circle cx="85" cy="35" r="16" fill="none" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1" className="animate-ring-expand"/>
                  </svg>
                </div>
              )}

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 z-20">
                See Evolution →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Feedback Refinement</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              AI that learns with each iteration until perfection.
            </p>
          </div>

          {/* Card 5: Experts In The Backend */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 sm:h-36 md:h-44 lg:h-48 relative overflow-hidden">
              <ResponsiveImage 
                src="/images/image5.jpg" 
                alt="Experts In The Backend"
                cardKey="card5"
              />
              
              {showFallback('card5') && isClient && (
                <div className="absolute inset-0">
                  <svg className="w-full h-full" viewBox="0 0 120 80">
                    {/* Connection line */}
                    <line x1="35" y1="35" x2="85" y2="35" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="2" strokeDasharray="6,4"/>

                    {/* Data particles */}
                    {[0, 1, 2, 3].map(i => (
                      <circle
                        key={i}
                        cx="35"
                        cy="35"
                        r="2"
                        fill="#76c4ff"
                        className="animate-flow-right"
                        style={{ animationDelay: `${i * 0.4}s`, animationDuration: '1.5s' }}
                      />
                    ))}

                    {/* Human */}
                    <g>
                      <circle cx="28" cy="22" r="12" fill="rgba(156, 163, 175, 0.15)" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>
                      <circle cx="28" cy="18" r="5" fill="rgba(156, 163, 175, 0.4)"/>
                      <ellipse cx="28" cy="28" rx="7" ry="5" fill="rgba(156, 163, 175, 0.3)"/>
                      <text x="28" y="48" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6">Expert</text>
                    </g>

                    {/* AI Node */}
                    <g className="animate-fade-pulse">
                      <rect x="75" y="20" width="24" height="24" rx="5" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.45)" strokeWidth="1"/>
                      <text x="87" y="36" textAnchor="middle" fill="rgba(118, 196, 255, 0.9)" fontSize="9" fontWeight="500">AI</text>
                      <text x="87" y="53" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6">System</text>
                    </g>

                    {/* Checklist */}
                    <g>
                      <rect x="43" y="52" width="38" height="24" rx="3" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.8"/>
                      <text x="48" y="63" fill="rgba(255,255,255,0.6)" fontSize="6">✓ Quality</text>
                      <text x="48" y="72" fill="rgba(255,255,255,0.6)" fontSize="6">✓ Brand fit</text>
                    </g>

                    {/* Approval badge */}
                    <g className="animate-pulse-glow">
                      <circle cx="57" cy="22" r="9" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5"/>
                      <path d="M 53 22 L 56 25 L 61 19" stroke="rgba(34, 197, 94, 1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
                    </g>

                    {/* Pulse ring */}
                    <circle cx="57" cy="22" r="14" fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" className="animate-ring-expand"/>
                  </svg>
                </div>
              )}

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 z-20">
                Meet Team →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Experts In The Backend</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Human oversight on every output ensures quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
