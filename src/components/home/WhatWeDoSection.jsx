import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';

export default function WhatWeDoSection() {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState({
    card1: false, card2: false, card3: false, card4: false, card5: false,
  });
  const [imageError, setImageError] = useState({
    card1: false, card2: false, card3: false, card4: false, card5: false,
  });
  
  const sectionRef = useRef(null);
  const frameRef = useRef(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { setIsVisible(entry.isIntersecting); },
      { threshold: 0.05, rootMargin: '50px' }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animation Loop
  useEffect(() => {
    if (!isVisible) return;
    let animationId;
    let lastTime = 0;
    const targetFPS = 12;
    const frameInterval = 1000 / targetFPS;

    const animate = (currentTime) => {
      animationId = requestAnimationFrame(animate);
      if (document.hidden) return;
      const delta = currentTime - lastTime;
      if (delta < frameInterval) return;
      lastTime = currentTime - (delta % frameInterval);
      frameRef.current = (frameRef.current + 1) % 360;
      setAnimationFrame(frameRef.current);
    };
    animationId = requestAnimationFrame(animate);
    return () => { if (animationId) cancelAnimationFrame(animationId); };
  }, [isVisible]);

  // Animation Values
  const { wave1, wave2, wave3, pulse, progress } = useMemo(() => ({
    wave1: Math.sin(animationFrame * 0.05) * 10,
    wave2: Math.sin(animationFrame * 0.03) * 8,
    wave3: Math.sin(animationFrame * 0.04) * 6,
    pulse: (Math.sin(animationFrame * 0.08) + 1) / 2,
    progress: (animationFrame % 180) / 180,
  }), [animationFrame]);

  // Handlers
  const handleImageLoad = useCallback((key) => setImageLoaded(prev => ({ ...prev, [key]: true })), []);
  const handleImageError = useCallback((key) => setImageError(prev => ({ ...prev, [key]: true })), []);

  const images = useMemo(() => ({
    card1: "/images/image1.jpg", card2: "/images/image2.jpg", card3: "/images/image3.jpg",
    card4: "/images/image4.jpg", card5: "/images/image5.jpg",
  }), []);

  return (
    // IMPORTANT: This ID allows the Footer link to scroll here
    <section ref={sectionRef} id="what-we-do" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Section Title - Updated Gradient to #3a82f5 */}
        <h2 className="text-2xl md:text-5xl font-light mb-4 tracking-tight bg-gradient-to-r from-white to-[#3a82f5] bg-clip-text text-transparent">
          What we do
        </h2>

        {/* Dots indicator */}
        <div className="flex gap-1.5 md:gap-2 mb-8 md:mb-16">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
        </div>

        {/* Top Row - 2 large cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
          <Card1 
            animationFrame={animationFrame} pulse={pulse}
            image={images.card1} imageLoaded={imageLoaded.card1} imageError={imageError.card1}
            onImageLoad={() => handleImageLoad('card1')} onImageError={() => handleImageError('card1')}
          />
          <Card2
            wave1={wave1} wave2={wave2} wave3={wave3} pulse={pulse}
            image={images.card2} imageLoaded={imageLoaded.card2} imageError={imageError.card2}
            onImageLoad={() => handleImageLoad('card2')} onImageError={() => handleImageError('card2')}
          />
        </div>

        {/* Bottom Row - 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <Card3
            animationFrame={animationFrame} progress={progress}
            image={images.card3} imageLoaded={imageLoaded.card3} imageError={imageError.card3}
            onImageLoad={() => handleImageLoad('card3')} onImageError={() => handleImageError('card3')}
          />
          <Card4
            animationFrame={animationFrame} progress={progress} pulse={pulse}
            image={images.card4} imageLoaded={imageLoaded.card4} imageError={imageError.card4}
            onImageLoad={() => handleImageLoad('card4')} onImageError={() => handleImageError('card4')}
          />
          <Card5
            animationFrame={animationFrame} pulse={pulse}
            image={images.card5} imageLoaded={imageLoaded.card5} imageError={imageError.card5}
            onImageLoad={() => handleImageLoad('card5')} onImageError={() => handleImageError('card5')}
          />
        </div>
      </div>
    </section>
  );
}

// --- REUSABLE GLOW COMPONENTS ---
// Horizon Line & Ambient Down-Light
const HorizonGlow = () => (
  <>
    <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3a82f5] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700 z-10" />
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[#3a82f5] opacity-[0.05] blur-[30px] pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-700 z-0" />
  </>
);


// --- CARD COMPONENTS ---

const Card1 = React.memo(({ animationFrame, pulse, image, imageLoaded, imageError, onImageLoad, onImageError }) => (
  <div className="group relative rounded-xl md:rounded-2xl bg-[#050505] border border-white/[0.08] hover:border-[#3a82f5]/30 p-3 md:p-6 overflow-hidden transition-all duration-500">
    
    <HorizonGlow />

    <div className="relative z-10">
      <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 sm:h-40 md:h-48 lg:h-56 relative overflow-hidden">
        
        {/* Dot matrix background */}
        <div className="absolute inset-0 opacity-20 z-0">
          {[...Array(6)].map((_, row) => (
            <div key={row} className="flex justify-around">
              {[...Array(10)].map((_, col) => (
                <div
                  key={col}
                  className="w-0.5 h-0.5 rounded-full bg-[#3a82f5]/40 my-2"
                  style={{ opacity: 0.2 + Math.sin((animationFrame + row * 10 + col * 15) * 0.05) * 0.3 }}
                />
              ))}
            </div>
          ))}
        </div>

        {/* SVG Animation */}
        <svg className="w-full h-full relative z-10" viewBox="0 0 200 120">
          <defs>
            <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
            <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(58, 130, 245, 0.1)"/>
              <stop offset={`${(animationFrame * 1.5) % 100}%`} stopColor="rgba(58, 130, 245, 0.9)"/>
              <stop offset={`${((animationFrame * 1.5) % 100) + 10}%`} stopColor="rgba(58, 130, 245, 0.1)"/>
            </linearGradient>
          </defs>

          <path d="M 40 35 Q 65 35 80 55" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 40 85 Q 65 85 80 65" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 100 60 L 130 60" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
          <path d="M 150 60 L 175 60" stroke="url(#flowGrad1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>

          <g style={{ transform: `translateY(${Math.sin(animationFrame * 0.03) * 2}px)` }}>
            <rect x="20" y="25" width="24" height="20" rx="4" fill="rgba(58, 130, 245, 0.1)" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1"/>
            <text x="32" y="38" textAnchor="middle" fill="rgba(58, 130, 245, 0.7)" fontSize="7">IN</text>
          </g>
          <g style={{ transform: `translateY(${Math.sin(animationFrame * 0.03 + 1) * 2}px)` }}>
            <rect x="20" y="75" width="24" height="20" rx="4" fill="rgba(58, 130, 245, 0.1)" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1"/>
            <text x="32" y="88" textAnchor="middle" fill="rgba(58, 130, 245, 0.7)" fontSize="7">IN</text>
          </g>

          <g filter="url(#glow1)" style={{ opacity: 0.8 + pulse * 0.2 }}>
            <rect x="72" y="42" width="36" height="36" rx="8" fill="rgba(58, 130, 245, 0.2)" stroke="rgba(58, 130, 245, 0.6)" strokeWidth="1.5"/>
            <text x="90" y="65" textAnchor="middle" fill="#3a82f5" fontSize="10" fontWeight="500">AI</text>
          </g>

          <g>
            <rect x="125" y="47" width="28" height="26" rx="5" fill="rgba(58, 130, 245, 0.12)" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1"/>
            <text x="139" y="64" textAnchor="middle" fill="rgba(58, 130, 245, 0.7)" fontSize="6">PIPE</text>
          </g>

          <g filter="url(#glow1)">
            <circle cx="185" cy="60" r={12 + pulse * 3} fill="rgba(58, 130, 245, 0.25)" stroke="#3a82f5" strokeWidth="2"/>
            <text x="185" y="64" textAnchor="middle" fill="#3a82f5" fontSize="8" fontWeight="600">OUT</text>
          </g>

          <circle cx="185" cy="60" r={16 + (animationFrame % 60) * 0.5} fill="none" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1" opacity={1 - ((animationFrame % 60) / 60)}/>

          {[0, 1, 2].map(i => {
            const particleProgress = ((animationFrame * 2 + i * 120) % 360) / 360;
            const x = 40 + particleProgress * 145;
            const y = 60 + Math.sin(particleProgress * Math.PI * 2) * (particleProgress < 0.3 ? 25 * (1 - particleProgress / 0.3) : 0);
            return (
              <circle key={i} cx={x} cy={y} r="2.5" fill="#3a82f5" opacity={0.6 + Math.sin(animationFrame * 0.1 + i) * 0.4}/>
            );
          })}
        </svg>

        {/* Image Layer */}
        {!imageError && (
          <div className="absolute inset-0 z-20">
            <img
              src={image} alt="" loading="lazy"
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={onImageLoad} onError={onImageError}
            />
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
            )}
          </div>
        )}

        <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#3a82f5] bg-[#3a82f5]/10 border border-[#3a82f5]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#3a82f5]/20 backdrop-blur-sm z-30">
          View System →
        </button>
      </div>

      <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Bespoke AI Visual Engines</h3>
      <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
        We don't generate images. We design frameworks. Custom AI pipelines that encode your brand's DNA into every pixel—producing visuals no one else can replicate.
      </p>
    </div>
  </div>
));

const Card2 = React.memo(({ wave1, wave2, wave3, pulse, image, imageLoaded, imageError, onImageLoad, onImageError }) => (
  <div className="group relative rounded-xl md:rounded-2xl bg-[#050505] border border-white/[0.08] hover:border-[#3a82f5]/30 p-3 md:p-6 overflow-hidden transition-all duration-500">
    
    <HorizonGlow />

    <div className="relative z-10">
      <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 sm:h-40 md:h-48 lg:h-56 relative overflow-hidden">
        
        <svg className="w-full h-full relative z-10" viewBox="0 0 200 120">
          <defs>
            <linearGradient id="toneGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#1a1a2e"/>
              <stop offset="50%" stopColor="#16213e"/>
              <stop offset="100%" stopColor="#0f3460"/>
            </linearGradient>
            <linearGradient id="paletteGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3a82f5"/>
              <stop offset="33%" stopColor="#4ea8de"/>
              <stop offset="66%" stopColor="#48bfe3"/>
              <stop offset="100%" stopColor="#56cfe1"/>
            </linearGradient>
            <linearGradient id="moodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2d3436"/>
              <stop offset="100%" stopColor="#636e72"/>
            </linearGradient>
            <filter id="glowAccent" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <text x="15" y="28" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Tone</text>
          <text x="15" y="58" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Palette</text>
          <text x="15" y="88" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Mood</text>

          <rect x="55" y="20" width="120" height="12" rx="6" fill="url(#toneGrad)" opacity="0.6"/>
          <circle cx={105 + wave1} cy="26" r="7" fill="#3a82f5"/>

          <rect x="55" y="50" width="120" height="12" rx="6" fill="url(#paletteGrad)" opacity="0.8"/>
          <circle cx={75 + wave3} cy="56" r="4" fill="#3a82f5" stroke="#fff" strokeWidth="0.5"/>
          <circle cx={110 + wave2} cy="56" r="4" fill="#4ea8de" stroke="#fff" strokeWidth="0.5"/>
          <circle cx={145 + wave1 * 0.5} cy="56" r="4" fill="#56cfe1" stroke="#fff" strokeWidth="0.5"/>

          <rect x="55" y="80" width="120" height="12" rx="6" fill="url(#moodGrad)" opacity="0.5"/>
          <circle cx={90 + wave2} cy="86" r="7" fill="#9ca3af"/>

          <path d={`M 55 105 Q 95 ${98 + wave1 * 0.5} 135 ${102 + wave2 * 0.3} T 185 ${105 + wave3 * 0.4}`} stroke="rgba(58, 130, 245, 0.5)" strokeWidth="2" fill="none"/>
          <path d={`M 55 112 Q 105 ${108 + wave2 * 0.4} 155 ${110 + wave1 * 0.3} T 185 ${112 + wave2 * 0.2}`} stroke="rgba(156, 163, 175, 0.35)" strokeWidth="1.5" fill="none"/>

          <g filter="url(#glowAccent)">
            <circle cx="180" cy="56" r={12 + pulse * 4} fill="rgba(58, 130, 245, 0.15)"/>
            <circle cx="180" cy="56" r={6 + pulse * 2} fill="rgba(58, 130, 245, 0.4)"/>
          </g>
        </svg>

        {!imageError && (
          <div className="absolute inset-0 z-20">
            <img
              src={image} alt="" loading="lazy"
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={onImageLoad} onError={onImageError}
            />
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
            )}
          </div>
        )}

        <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#3a82f5] bg-[#3a82f5]/10 border border-[#3a82f5]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#3a82f5]/20 backdrop-blur-sm z-30">
          See Process →
        </button>
      </div>

      <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Brand Calibrated Creative Direction</h3>
      <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
        We extract your brand's soul—tone, palette, mood—and wire it directly into our imaging systems. Every shot feels unmistakably yours.
      </p>
    </div>
  </div>
));

const Card3 = React.memo(({ animationFrame, progress, image, imageLoaded, imageError, onImageLoad, onImageError }) => (
  <div className="group relative rounded-xl md:rounded-2xl bg-[#050505] border border-white/[0.08] hover:border-[#3a82f5]/30 p-3 md:p-6 overflow-hidden transition-all duration-500">
    
    <HorizonGlow />

    <div className="relative z-10">
      <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-28 sm:h-32 md:h-40 lg:h-44 relative overflow-hidden">
        
        <div className="absolute inset-0 opacity-10 z-0">
          <div className="w-full h-full" style={{
            backgroundImage: 'linear-gradient(rgba(58,130,245,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(58,130,245,0.3) 1px, transparent 1px)',
            backgroundSize: '15px 15px'
          }}/>
        </div>

        <svg className="w-full h-full relative z-10" viewBox="0 0 120 80">
          <g style={{ opacity: progress < 0.5 ? 1 : 0.3, transform: `scale(${progress < 0.5 ? 1 : 0.9})` }}>
            <rect x="5" y="8" width="42" height="28" rx="3" fill="rgba(58, 130, 245, 0.15)" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="0.8"/>
            <rect x="5" y="40" width="18" height="22" rx="3" fill="rgba(58, 130, 245, 0.1)" stroke="rgba(58, 130, 245, 0.3)" strokeWidth="0.5"/>
            <rect x="27" y="40" width="18" height="22" rx="3" fill="rgba(58, 130, 245, 0.1)" stroke="rgba(58, 130, 245, 0.3)" strokeWidth="0.5"/>
            <text x="24" y="72" textAnchor="middle" fill="rgba(58, 130, 245, 0.5)" fontSize="5">Desktop</text>
          </g>

          <g style={{ opacity: 0.5 + Math.sin(animationFrame * 0.04) * 0.3, transform: `translateX(${2 + Math.sin(animationFrame * 0.03) * 2}px)` }}>
            <rect x="55" y="5" width="22" height="38" rx="3" fill="rgba(58, 130, 245, 0.2)" stroke="rgba(58, 130, 245, 0.5)" strokeWidth="0.8"/>
            <rect x="58" y="8" width="16" height="12" rx="2" fill="rgba(58, 130, 245, 0.3)"/>
            <rect x="58" y="23" width="16" height="6" rx="1" fill="rgba(58, 130, 245, 0.15)"/>
            <rect x="58" y="32" width="16" height="6" rx="1" fill="rgba(58, 130, 245, 0.15)"/>
            <text x="66" y="52" textAnchor="middle" fill="rgba(58, 130, 245, 0.5)" fontSize="5">Mobile</text>
          </g>

          <g style={{ opacity: 0.5 + Math.sin(animationFrame * 0.05 + 1) * 0.3, transform: `translateY(${Math.sin(animationFrame * 0.04) * 2}px)` }}>
            <rect x="85" y="8" width="28" height="48" rx="3" fill="rgba(58, 130, 245, 0.15)" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="0.8"/>
            <rect x="88" y="11" width="22" height="28" rx="2" fill="rgba(58, 130, 245, 0.25)"/>
            <rect x="88" y="42" width="22" height="4" rx="1" fill="rgba(58, 130, 245, 0.5)"/>
            <rect x="88" y="49" width="22" height="3" rx="1" fill="rgba(58, 130, 245, 0.2)"/>
            <text x="99" y="66" textAnchor="middle" fill="rgba(58, 130, 245, 0.5)" fontSize="5">Ads</text>
          </g>

          <path d="M 48 30 Q 52 30 55 25" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1" fill="none" strokeDasharray="2,2" strokeDashoffset={-animationFrame * 0.5}/>
          <path d="M 78 30 Q 82 30 85 32" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1" fill="none" strokeDasharray="2,2" strokeDashoffset={-animationFrame * 0.5}/>
        </svg>

        {!imageError && (
          <div className="absolute inset-0 z-20">
            <img
              src={image} alt="" loading="lazy"
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={onImageLoad} onError={onImageError}
            />
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
            )}
          </div>
        )}

        <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#3a82f5] bg-[#3a82f5]/10 border border-[#3a82f5]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#3a82f5]/20 backdrop-blur-sm z-30">
          Explore →
        </button>
      </div>

      <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Adaptive Visual Language</h3>
      <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
        One visual system, infinite applications. Modular styles that adapt seamlessly across web, mobile, ads, and beyond.
      </p>
    </div>
  </div>
));

const Card4 = React.memo(({ animationFrame, progress, pulse, image, imageLoaded, imageError, onImageLoad, onImageError }) => (
  <div className="group relative rounded-xl md:rounded-2xl bg-[#050505] border border-white/[0.08] hover:border-[#3a82f5]/30 p-3 md:p-6 overflow-hidden transition-all duration-500">
    
    <HorizonGlow />

    <div className="relative z-10">
      <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-28 sm:h-32 md:h-40 lg:h-44 relative overflow-hidden">
        
        <svg className="w-full h-full relative z-10" viewBox="0 0 120 80">
          <defs>
            <filter id="glowVersion" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
            </filter>
          </defs>

          <line x1="15" y1="35" x2="105" y2="35" stroke="rgba(58, 130, 245, 0.15)" strokeWidth="3" strokeLinecap="round"/>
          <line x1="15" y1="35" x2={15 + progress * 90} y2="35" stroke="rgba(58, 130, 245, 0.6)" strokeWidth="3" strokeLinecap="round"/>

          <g style={{ opacity: progress > 0.1 ? 1 : 0.5 }}>
            <circle cx="25" cy="35" r="9" fill="rgba(58, 130, 245, 0.2)" stroke="rgba(58, 130, 245, 0.5)" strokeWidth="1.5"/>
            <text x="25" y="39" textAnchor="middle" fill="rgba(58, 130, 245, 0.9)" fontSize="7" fontWeight="500">v1</text>
            <text x="25" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5">draft</text>
            <circle cx="33" cy="27" r="5" fill="rgba(34, 197, 94, 0.25)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="0.5"/>
            <path d="M 30 27 L 32 29 L 36 24" stroke="rgba(34, 197, 94, 0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          <g style={{ opacity: progress > 0.4 ? 1 : 0.4 }}>
            <circle cx="55" cy="35" r="9" fill="rgba(58, 130, 245, 0.25)" stroke="rgba(58, 130, 245, 0.6)" strokeWidth="1.5"/>
            <text x="55" y="39" textAnchor="middle" fill="rgba(58, 130, 245, 0.95)" fontSize="7" fontWeight="500">v2</text>
            <text x="55" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5">refined</text>
            <circle cx="63" cy="27" r="5" fill="rgba(251, 191, 36, 0.25)" stroke="rgba(251, 191, 36, 0.6)" strokeWidth="0.5"/>
            <path d="M 60 27 L 66 27 M 63 24 L 63 30" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </g>

          <g filter={progress > 0.7 ? "url(#glowVersion)" : ""} style={{ opacity: progress > 0.7 ? 1 : 0.3 }}>
            <circle cx="85" cy="35" r={9 + (progress > 0.9 ? pulse * 2 : 0)} fill="rgba(58, 130, 245, 0.3)" stroke="#3a82f5" strokeWidth="2"/>
            <text x="85" y="39" textAnchor="middle" fill="#3a82f5" fontSize="7" fontWeight="600">v3</text>
            <text x="85" y="52" textAnchor="middle" fill="rgba(58, 130, 245, 0.7)" fontSize="5">final</text>
            <circle cx="93" cy="27" r="5" fill="rgba(58, 130, 245, 0.3)" stroke="rgba(58, 130, 245, 0.7)" strokeWidth="0.5"/>
            <text x="93" y="30" textAnchor="middle" fill="#3a82f5" fontSize="7">★</text>
          </g>

          {progress > 0.9 && (
            <circle cx="85" cy="35" r={12 + ((animationFrame % 40) * 0.4)} fill="none" stroke="rgba(58, 130, 245, 0.4)" strokeWidth="1" opacity={1 - ((animationFrame % 40) / 40)}/>
          )}

          <text x="25" y="68" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5">emotion</text>
          <text x="55" y="68" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5">precision</text>
          <text x="85" y="68" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5">nuance</text>
        </svg>

        {!imageError && (
          <div className="absolute inset-0 z-20">
            <img
              src={image} alt="" loading="lazy"
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={onImageLoad} onError={onImageError}
            />
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
            )}
          </div>
        )}

        <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#3a82f5] bg-[#3a82f5]/10 border border-[#3a82f5]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#3a82f5]/20 backdrop-blur-sm z-30">
          See Evolution →
        </button>
      </div>

      <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Feedback Refinement</h3>
      <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
        AI that learns. Each iteration captures more emotion, precision, and nuance until perfection.
      </p>
    </div>
  </div>
));

const Card5 = React.memo(({ animationFrame, pulse, image, imageLoaded, imageError, onImageLoad, onImageError }) => (
  <div className="group relative rounded-xl md:rounded-2xl bg-[#050505] border border-white/[0.08] hover:border-[#3a82f5]/30 p-3 md:p-6 overflow-hidden transition-all duration-500">
    
    <HorizonGlow />

    <div className="relative z-10">
      <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-28 sm:h-32 md:h-40 lg:h-44 relative overflow-hidden">
        
        <svg className="w-full h-full relative z-10" viewBox="0 0 120 80">
          <line x1="35" y1="35" x2="85" y2="35" stroke="rgba(58, 130, 245, 0.2)" strokeWidth="2" strokeDasharray="6,4"/>

          {[0, 1, 2, 3].map(i => (
            <circle
              key={i}
              cx={35 + ((animationFrame * 0.8 + i * 90) % 360) / 360 * 50}
              cy="35"
              r="2"
              fill="#3a82f5"
              opacity={0.4 + Math.sin(animationFrame * 0.1 + i) * 0.3}
            />
          ))}

          <g>
            <circle cx="28" cy="22" r="12" fill="rgba(156, 163, 175, 0.15)" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>
            <circle cx="28" cy="18" r="5" fill="rgba(156, 163, 175, 0.4)"/>
            <ellipse cx="28" cy="28" rx="7" ry="5" fill="rgba(156, 163, 175, 0.3)"/>
            <text x="28" y="48" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6">Expert</text>
          </g>

          <g>
            <rect x="75" y="20" width="24" height="24" rx="5" fill="rgba(58, 130, 245, 0.15)" stroke="rgba(58, 130, 245, 0.45)" strokeWidth="1"/>
            <text x="87" y="36" textAnchor="middle" fill="rgba(58, 130, 245, 0.9)" fontSize="9" fontWeight="500">AI</text>
            <text x="87" y="53" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6">System</text>
          </g>

          <g>
            <rect x="43" y="52" width="38" height="24" rx="3" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(58, 130, 245, 0.25)" strokeWidth="0.8"/>
            <text x="48" y="63" fill="rgba(255,255,255,0.6)" fontSize="6">✓ Quality</text>
            <text x="48" y="72" fill="rgba(255,255,255,0.6)" fontSize="6">✓ Brand fit</text>
          </g>

          <g>
            <circle cx="57" cy="22" r={8 + pulse * 1.5} fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="1.5"/>
            <path d="M 53 22 L 56 25 L 61 19" stroke="rgba(34, 197, 94, 1)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
          </g>

          <circle cx="57" cy="22" r={10 + ((animationFrame % 50) * 0.3)} fill="none" stroke="rgba(34, 197, 94, 0.3)" strokeWidth="1" opacity={1 - ((animationFrame % 50) / 50)}/>
        </svg>

        {!imageError && (
          <div className="absolute inset-0 z-20">
            <img
              src={image} alt="" loading="lazy"
              className={`w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={onImageLoad} onError={onImageError}
            />
            {imageLoaded && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/30 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />
            )}
          </div>
        )}

        <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#3a82f5] bg-[#3a82f5]/10 border border-[#3a82f5]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#3a82f5]/20 backdrop-blur-sm z-30">
          Meet Team →
        </button>
      </div>

      <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Experts In The Backend</h3>
      <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
        Human oversight on every output. Creative and technical experts ensure nothing generic survives.
      </p>
    </div>
  </div>
));

Card1.displayName = 'Card1';
Card2.displayName = 'Card2';
Card3.displayName = 'Card3';
Card4.displayName = 'Card4';
Card5.displayName = 'Card5';