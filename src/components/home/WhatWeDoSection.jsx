import React, { useState, useEffect } from 'react';

export default function WhatWeDoSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="what-we-do" className="py-16 md:py-32 px-4 md:px-6 bg-black">
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
          <div 
            className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.1)]"
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Preview Window */}
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 md:h-48 relative overflow-hidden">
              {/* Dot matrix background */}
              <div className="absolute inset-0 opacity-20">
                {[...Array(8)].map((_, row) => (
                  <div key={row} className="flex justify-around">
                    {[...Array(12)].map((_, col) => (
                      <div key={col} className="w-0.5 h-0.5 rounded-full bg-[#76c4ff]/30 my-2" />
                    ))}
                  </div>
                ))}
              </div>
              
              {/* Node-based pipeline */}
              <svg className="w-full h-full relative z-10" viewBox="0 0 200 120">
                <defs>
                  <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                  <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(118, 196, 255, 0.1)"/>
                    <stop offset={`${(animationFrame * 2) % 100}%`} stopColor="rgba(118, 196, 255, 0.8)"/>
                    <stop offset="100%" stopColor="rgba(118, 196, 255, 0.1)"/>
                  </linearGradient>
                </defs>
                
                {/* Connection lines with animation */}
                <path 
                  d="M 35 40 Q 60 40 75 60" 
                  stroke={hoveredCard === 1 ? "url(#lineGrad1)" : "rgba(118, 196, 255, 0.2)"}
                  strokeWidth="1.5" 
                  fill="none"
                  className="transition-all duration-300"
                />
                <path 
                  d="M 35 80 Q 60 80 75 60" 
                  stroke={hoveredCard === 1 ? "url(#lineGrad1)" : "rgba(118, 196, 255, 0.2)"}
                  strokeWidth="1.5" 
                  fill="none"
                  className="transition-all duration-300"
                />
                <path 
                  d="M 95 60 L 125 60" 
                  stroke={hoveredCard === 1 ? "url(#lineGrad1)" : "rgba(118, 196, 255, 0.2)"}
                  strokeWidth="1.5" 
                  fill="none"
                  className="transition-all duration-300"
                />
                <path 
                  d="M 145 60 L 170 60" 
                  stroke={hoveredCard === 1 ? "url(#lineGrad1)" : "rgba(118, 196, 255, 0.2)"}
                  strokeWidth="2" 
                  fill="none"
                  className="transition-all duration-300"
                />
                
                {/* Input nodes */}
                <g className="transition-all duration-300">
                  <rect x="20" y="30" width="20" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="1"/>
                  <text x="30" y="44" textAnchor="middle" fill="rgba(118, 196, 255, 0.6)" fontSize="6">IN</text>
                </g>
                <g className="transition-all duration-300">
                  <rect x="20" y="70" width="20" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="1"/>
                  <text x="30" y="84" textAnchor="middle" fill="rgba(118, 196, 255, 0.6)" fontSize="6">IN</text>
                </g>
                
                {/* Process node */}
                <g className="transition-all duration-300">
                  <rect x="70" y="45" width="30" height="30" rx="6" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
                  <text x="85" y="64" textAnchor="middle" fill="rgba(118, 196, 255, 0.8)" fontSize="7">AI</text>
                </g>
                
                {/* Transform node */}
                <g className="transition-all duration-300">
                  <rect x="120" y="48" width="25" height="24" rx="5" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.35)" strokeWidth="1"/>
                  <text x="132" y="63" textAnchor="middle" fill="rgba(118, 196, 255, 0.6)" fontSize="5">PIPE</text>
                </g>
                
                {/* Output node - glowing */}
                <g filter={hoveredCard === 1 ? "url(#glow1)" : ""} className="transition-all duration-500">
                  <circle 
                    cx="180" 
                    cy="60" 
                    r={hoveredCard === 1 ? "14" : "12"} 
                    fill="rgba(118, 196, 255, 0.2)" 
                    stroke="rgba(118, 196, 255, 0.8)" 
                    strokeWidth="2"
                    className="transition-all duration-300"
                  />
                  <text x="180" y="64" textAnchor="middle" fill="#76c4ff" fontSize="7" fontWeight="500">OUT</text>
                </g>
                
                {/* Animated pulse on output */}
                {hoveredCard === 1 && (
                  <circle 
                    cx="180" 
                    cy="60" 
                    r="18" 
                    fill="none" 
                    stroke="rgba(118, 196, 255, 0.4)" 
                    strokeWidth="1"
                    style={{
                      animation: 'pulse-ring 1.5s ease-out infinite'
                    }}
                  />
                )}
              </svg>
              
              {/* Action button */}
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                View System →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Bespoke AI Visual Engines</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We don't generate images. We design frameworks. From scratch, we encode your brand's story into a long chain of processes from moodboard to AI imaging system that produces visuals no one else can replicate.
            </p>
          </div>

          {/* Card 2: Brand Calibrated Creative Direction */}
          <div 
            className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.1)]"
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Preview Window */}
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 md:h-48 relative overflow-hidden">
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
                  <linearGradient id="moodGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2d3436"/>
                    <stop offset="100%" stopColor="#636e72"/>
                  </linearGradient>
                </defs>
                
                {/* Labels */}
                <text x="15" y="25" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="300">Tone</text>
                <text x="15" y="55" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="300">Palette</text>
                <text x="15" y="85" fill="rgba(255,255,255,0.4)" fontSize="8" fontWeight="300">Mood</text>
                
                {/* Tone slider bar */}
                <rect x="50" y="18" width="130" height="10" rx="5" fill="url(#toneGrad)" opacity="0.6"/>
                <circle 
                  cx={hoveredCard === 2 ? 120 + Math.sin(animationFrame * 0.1) * 10 : 110} 
                  cy="23" 
                  r="6" 
                  fill="#76c4ff" 
                  className="transition-all duration-300"
                  filter={hoveredCard === 2 ? "url(#glow1)" : ""}
                />
                
                {/* Palette color bar */}
                <rect x="50" y="48" width="130" height="10" rx="5" fill="url(#paletteGrad)" opacity="0.8"/>
                {/* Color markers */}
                <circle cx="70" cy="53" r="3" fill="#76c4ff" stroke="#fff" strokeWidth="0.5"/>
                <circle 
                  cx={hoveredCard === 2 ? 100 + Math.sin(animationFrame * 0.08) * 5 : 100} 
                  cy="53" 
                  r="3" 
                  fill="#4ea8de" 
                  stroke="#fff" 
                  strokeWidth="0.5"
                  className="transition-all duration-500"
                />
                <circle cx="130" cy="53" r="3" fill="#56cfe1" stroke="#fff" strokeWidth="0.5"/>
                
                {/* Mood slider bar */}
                <rect x="50" y="78" width="130" height="10" rx="5" fill="url(#moodGrad)" opacity="0.5"/>
                <circle 
                  cx={hoveredCard === 2 ? 90 + Math.sin(animationFrame * 0.06) * 8 : 85} 
                  cy="83" 
                  r="6" 
                  fill="#9ca3af" 
                  className="transition-all duration-300"
                />
                
                {/* Mood curve */}
                <path 
                  d={hoveredCard === 2 
                    ? `M 50 105 Q 90 ${95 + Math.sin(animationFrame * 0.1) * 5} 130 100 T 180 ${105 + Math.sin(animationFrame * 0.08) * 3}`
                    : "M 50 105 Q 90 98 130 100 T 180 105"
                  }
                  stroke="rgba(118, 196, 255, 0.4)" 
                  strokeWidth="1.5" 
                  fill="none"
                  className="transition-all duration-300"
                />
                <path 
                  d={hoveredCard === 2
                    ? `M 50 112 Q 100 ${105 + Math.sin(animationFrame * 0.12) * 4} 150 108 T 180 ${112 + Math.sin(animationFrame * 0.1) * 2}`
                    : "M 50 112 Q 100 106 150 108 T 180 112"
                  }
                  stroke="rgba(156, 163, 175, 0.3)" 
                  strokeWidth="1" 
                  fill="none"
                  className="transition-all duration-300"
                />
                
                {/* Brand color glow accent */}
                <circle cx="175" cy="53" r="15" fill="rgba(118, 196, 255, 0.1)" className={hoveredCard === 2 ? 'animate-pulse' : ''}/>
                <circle cx="175" cy="53" r="8" fill="rgba(118, 196, 255, 0.3)"/>
              </svg>
              
              {/* Action button */}
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                See Process →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Brand Calibrated Creative Direction</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We extract the soul of your brand. Tone, palette, mood and wire it directly into one-of-one directions to image processing systems. The result? Every shot feels like your brand.
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          
          {/* Card 3: Adaptive Visual Language Systems */}
          <div 
            className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.1)]"
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Preview Window */}
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-20 md:h-40 relative overflow-hidden">
              {/* Responsive grid background */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(118,196,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(118,196,255,0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}/>
              </div>
              
              <svg className="w-full h-full relative z-10" viewBox="0 0 120 80">
                {/* Desktop layout */}
                <g className={`transition-all duration-500 ${hoveredCard === 3 ? 'opacity-40' : 'opacity-100'}`}>
                  <rect x="5" y="10" width="45" height="30" rx="3" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="0.5"/>
                  <rect x="5" y="45" width="20" height="25" rx="3" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.5"/>
                  <rect x="30" y="45" width="20" height="25" rx="3" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.5"/>
                </g>
                
                {/* Mobile layout - appears on hover */}
                <g className={`transition-all duration-500 ${hoveredCard === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} 
                   style={{ transform: hoveredCard === 3 ? 'translateX(0)' : 'translateX(10px)' }}>
                  <rect x="60" y="5" width="25" height="40" rx="3" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="0.5"/>
                  <rect x="63" y="8" width="19" height="12" rx="2" fill="rgba(118, 196, 255, 0.3)"/>
                  <rect x="63" y="23" width="19" height="8" rx="2" fill="rgba(118, 196, 255, 0.15)"/>
                  <rect x="63" y="34" width="19" height="8" rx="2" fill="rgba(118, 196, 255, 0.15)"/>
                </g>
                
                {/* Ad format - appears on hover */}
                <g className={`transition-all duration-500 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                  <rect x="90" y="15" width="25" height="50" rx="3" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.35)" strokeWidth="0.5"/>
                  <rect x="93" y="18" width="19" height="25" rx="2" fill="rgba(118, 196, 255, 0.25)"/>
                  <rect x="93" y="46" width="19" height="4" rx="1" fill="rgba(118, 196, 255, 0.4)"/>
                  <rect x="93" y="53" width="19" height="4" rx="1" fill="rgba(118, 196, 255, 0.2)"/>
                </g>
                
                {/* Connecting arrows on hover */}
                {hoveredCard === 3 && (
                  <>
                    <path d="M 52 35 L 58 35" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="1" markerEnd="url(#arrowhead)"/>
                    <path d="M 87 40 L 88 40" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="1"/>
                  </>
                )}
              </svg>
              
              {/* Format labels */}
              <div className={`absolute bottom-1 left-2 flex gap-1 transition-opacity duration-300 ${hoveredCard === 3 ? 'opacity-100' : 'opacity-0'}`}>
                <span className="text-[6px] md:text-[8px] text-[#76c4ff]/60 bg-[#76c4ff]/10 px-1.5 py-0.5 rounded">Web</span>
                <span className="text-[6px] md:text-[8px] text-[#76c4ff]/60 bg-[#76c4ff]/10 px-1.5 py-0.5 rounded">Mobile</span>
                <span className="text-[6px] md:text-[8px] text-[#76c4ff]/60 bg-[#76c4ff]/10 px-1.5 py-0.5 rounded">Ads</span>
              </div>
              
              {/* Action button */}
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                Explore →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Adaptive Visual Language Systems</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Not just a photoshoot. A living language of visuals. We build modular styles that respond across use cases.
            </p>
          </div>

          {/* Card 4: Feedback Refinement */}
          <div 
            className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.1)]"
            onMouseEnter={() => setHoveredCard(4)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Preview Window */}
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-20 md:h-40 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 120 80">
                {/* Timeline line */}
                <line x1="15" y1="40" x2="105" y2="40" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="2" strokeLinecap="round"/>
                
                {/* Animated progress line */}
                <line 
                  x1="15" 
                  y1="40" 
                  x2={hoveredCard === 4 ? "95" : "55"} 
                  y2="40" 
                  stroke="rgba(118, 196, 255, 0.6)" 
                  strokeWidth="2" 
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                />
                
                {/* Version 1 */}
                <g>
                  <circle cx="25" cy="40" r="8" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="1"/>
                  <text x="25" y="43" textAnchor="middle" fill="rgba(118, 196, 255, 0.8)" fontSize="6">v1</text>
                  <text x="25" y="58" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5">draft</text>
                  {/* Checkmark */}
                  <circle cx="32" cy="32" r="4" fill="rgba(34, 197, 94, 0.3)"/>
                  <path d="M 30 32 L 31.5 33.5 L 34 30" stroke="rgba(34, 197, 94, 0.8)" strokeWidth="1" fill="none"/>
                </g>
                
                {/* Version 2 */}
                <g>
                  <circle cx="55" cy="40" r="8" fill="rgba(118, 196, 255, 0.25)" stroke="rgba(118, 196, 255, 0.6)" strokeWidth="1"/>
                  <text x="55" y="43" textAnchor="middle" fill="rgba(118, 196, 255, 0.9)" fontSize="6">v2</text>
                  <text x="55" y="58" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5">refined</text>
                  {/* Adjustment indicator */}
                  <circle cx="62" cy="32" r="4" fill="rgba(251, 191, 36, 0.3)"/>
                  <path d="M 60 32 L 64 32 M 62 30 L 62 34" stroke="rgba(251, 191, 36, 0.8)" strokeWidth="1" fill="none"/>
                </g>
                
                {/* Version 3 - Final/Glowing */}
                <g filter={hoveredCard === 4 ? "url(#glow1)" : ""}>
                  <circle 
                    cx="85" 
                    cy="40" 
                    r={hoveredCard === 4 ? "10" : "8"}
                    fill="rgba(118, 196, 255, 0.3)" 
                    stroke="#76c4ff" 
                    strokeWidth="2"
                    className="transition-all duration-500"
                  />
                  <text x="85" y="43" textAnchor="middle" fill="#76c4ff" fontSize="6" fontWeight="500">v3</text>
                  <text x="85" y="58" textAnchor="middle" fill="rgba(118, 196, 255, 0.6)" fontSize="5">final</text>
                  {/* Star indicator */}
                  <circle cx="92" cy="32" r="4" fill="rgba(118, 196, 255, 0.4)"/>
                  <text x="92" y="35" textAnchor="middle" fill="#76c4ff" fontSize="6">★</text>
                </g>
                
                {/* Pulse ring on hover */}
                {hoveredCard === 4 && (
                  <circle 
                    cx="85" 
                    cy="40" 
                    r="14" 
                    fill="none" 
                    stroke="rgba(118, 196, 255, 0.3)" 
                    strokeWidth="1"
                    style={{ animation: 'pulse-ring 1.5s ease-out infinite' }}
                  />
                )}
                
                {/* Labels */}
                <text x="25" y="72" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="4">emotion</text>
                <text x="55" y="72" textAnchor="middle" fill="rgba(255,255,255,0.2)" fontSize="4">precision</text>
                <text x="85" y="72" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="4">nuance</text>
              </svg>
              
              {/* Action button */}
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                See Evolution →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Feedback Refinement</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Our AI systems evolve. With every batch you receive, we refine inputs until they capture emotion and precision.
            </p>
          </div>

          {/* Card 5: Experts In The Backend */}
          <div 
            className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.1)]"
            onMouseEnter={() => setHoveredCard(5)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Preview Window */}
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-20 md:h-40 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 120 80">
                {/* Connection line between human and AI */}
                <line 
                  x1="35" 
                  y1="40" 
                  x2="85" 
                  y2="40" 
                  stroke="rgba(118, 196, 255, 0.3)" 
                  strokeWidth="2" 
                  strokeDasharray="4,4"
                />
                
                {/* Human silhouette */}
                <g>
                  <circle cx="30" cy="25" r="10" fill="rgba(156, 163, 175, 0.2)" stroke="rgba(156, 163, 175, 0.4)" strokeWidth="1"/>
                  {/* Head */}
                  <circle cx="30" cy="22" r="5" fill="rgba(156, 163, 175, 0.4)"/>
                  {/* Body */}
                  <ellipse cx="30" cy="32" rx="6" ry="4" fill="rgba(156, 163, 175, 0.3)"/>
                  <text x="30" y="50" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6">Expert</text>
                </g>
                
                {/* AI Node */}
                <g>
                  <rect x="75" y="25" width="20" height="20" rx="4" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
                  <text x="85" y="38" textAnchor="middle" fill="rgba(118, 196, 255, 0.8)" fontSize="7">AI</text>
                  <text x="85" y="55" textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="6">System</text>
                </g>
                
                {/* Review checklist overlay */}
                <g className={`transition-all duration-300 ${hoveredCard === 5 ? 'opacity-100' : 'opacity-60'}`}>
                  <rect x="48" y="55" width="35" height="22" rx="3" fill="rgba(0, 0, 0, 0.6)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="0.5"/>
                  <text x="52" y="64" fill="rgba(255,255,255,0.5)" fontSize="5">✓ Quality</text>
                  <text x="52" y="72" fill="rgba(255,255,255,0.5)" fontSize="5">✓ Brand fit</text>
                </g>
                
                {/* Approval badge with subtle pulse */}
                <g className={hoveredCard === 5 ? 'animate-pulse' : ''}>
                  <circle cx="58" cy="25" r="8" fill="rgba(34, 197, 94, 0.2)" stroke="rgba(34, 197, 94, 0.5)" strokeWidth="1"/>
                  <path d="M 54 25 L 57 28 L 62 22" stroke="rgba(34, 197, 94, 0.9)" strokeWidth="1.5" fill="none"/>
                </g>
                
                {/* Data flow dots */}
                <circle cx="45" cy="40" r="2" fill="rgba(118, 196, 255, 0.5)"/>
                <circle cx="55" cy="40" r="2" fill="rgba(118, 196, 255, 0.4)"/>
                <circle cx="65" cy="40" r="2" fill="rgba(118, 196, 255, 0.5)"/>
                <circle cx="75" cy="40" r="2" fill="rgba(118, 196, 255, 0.6)"/>
              </svg>
              
              {/* Action button */}
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                Meet Team →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Experts In The Backend</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Nothing generic survives. Every image passes through creative and technical oversight. It's always deeply evaluated.
            </p>
          </div>
        </div>
      </div>
      
      {/* CSS for pulse animation */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
