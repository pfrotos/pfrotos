import React from 'react';

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light mb-4 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          What we do
        </h2>
        
        <div className="flex gap-1.5 md:gap-2 mb-8 md:mb-16">
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"></div>
          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white/30"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 md:h-48 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-full h-full opacity-60" viewBox="0 0 200 150">
                  <rect x="10" y="20" width="70" height="50" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                  <rect x="120" y="15" width="65" height="45" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.5"/>
                  <rect x="25" y="85" width="60" height="40" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.12)" strokeWidth="0.5"/>
                  <rect x="130" y="75" width="55" height="50" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                  
                  <line x1="80" y1="45" x2="120" y2="37" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,2"/>
                  <line x1="55" y1="70" x2="55" y2="85" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,2"/>
                  <line x1="85" y1="105" x2="130" y2="100" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5" strokeDasharray="2,2"/>
                  
                  <circle cx="80" cy="45" r="2" fill="rgba(118, 196, 255, 0.4)"/>
                  <circle cx="120" cy="37" r="2" fill="rgba(118, 196, 255, 0.3)"/>
                  <circle cx="55" cy="70" r="2" fill="rgba(118, 196, 255, 0.35)"/>
                  <circle cx="55" cy="85" r="2" fill="rgba(118, 196, 255, 0.3)"/>
                  <circle cx="85" cy="105" r="2" fill="rgba(118, 196, 255, 0.4)"/>
                  <circle cx="130" cy="100" r="2" fill="rgba(118, 196, 255, 0.35)"/>
                  
                  <circle cx="157" cy="95" r="8" fill="rgba(118, 196, 255, 0.08)" opacity="0.6"/>
                  <circle cx="45" cy="40" r="6" fill="rgba(118, 196, 255, 0.06)" opacity="0.5"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Bespoke AI Visual Engines</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We don't generate images. We design frameworks. From scratch, we encode your brand's story into an long chain of process from moodboard to AI imaging system that produces visuals no one else can replicate.
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-32 md:h-48 relative overflow-hidden">
              <div className="absolute inset-0">
                <svg className="w-full h-full" viewBox="0 0 200 150" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="brandGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(118, 196, 255, 0.15)"/>
                      <stop offset="50%" stopColor="rgba(118, 196, 255, 0.08)"/>
                      <stop offset="100%" stopColor="rgba(118, 196, 255, 0.03)"/>
                    </linearGradient>
                    <linearGradient id="brandGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="rgba(156, 163, 175, 0.1)"/>
                      <stop offset="100%" stopColor="rgba(156, 163, 175, 0.02)"/>
                    </linearGradient>
                  </defs>
                  
                  <rect x="0" y="20" width="200" height="30" fill="url(#brandGrad1)" opacity="0.6"/>
                  <rect x="0" y="55" width="200" height="25" fill="url(#brandGrad2)" opacity="0.5"/>
                  <rect x="0" y="85" width="200" height="35" fill="url(#brandGrad1)" opacity="0.4"/>
                  
                  <rect x="15" y="30" width="2" height="15" fill="rgba(118, 196, 255, 0.3)"/>
                  <rect x="45" y="60" width="2" height="12" fill="rgba(156, 163, 175, 0.25)"/>
                  <rect x="120" y="35" width="2" height="18" fill="rgba(118, 196, 255, 0.2)"/>
                  <rect x="165" y="90" width="2" height="20" fill="rgba(118, 196, 255, 0.25)"/>
                  
                  <path d="M 50 45 Q 80 42 110 48" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5" fill="none"/>
                  <path d="M 30 95 Q 100 88 170 93" stroke="rgba(156, 163, 175, 0.12)" strokeWidth="0.5" fill="none"/>
                </svg>
              </div>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Brand Calibrated Creative Direction</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We extract the soul of your brand. Tone, palette, mood and wire it directly into One of one directions to image processing systems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-20 md:h-40 flex items-center justify-center">
              <svg className="w-full h-full opacity-60" viewBox="0 0 120 100">
                <g opacity="0.7">
                  <rect x="10" y="20" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.5"/>
                  <rect x="28" y="20" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                  <rect x="46" y="20" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.18)" strokeWidth="0.5"/>
                </g>
                <g opacity="0.6">
                  <rect x="19" y="45" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.22)" strokeWidth="0.5"/>
                  <rect x="37" y="45" width="15" height="15" rx="1" fill="rgba(118, 196, 255, 0.08)" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.5"/>
                </g>
                <g opacity="0.5">
                  <rect x="10" y="70" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                  <rect x="28" y="70" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                  <rect x="46" y="70" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.18)" strokeWidth="0.5"/>
                  <rect x="64" y="70" width="15" height="15" rx="1" fill="none" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                </g>
              </svg>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Adaptive Visual Language Systems</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Not just a photoshoot. A living language of visuals. We build modular styles that respond across use cases.
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-20 md:h-40 flex items-center justify-center">
              <svg className="w-full h-full opacity-60" viewBox="0 0 120 100">
                <g opacity="0.3">
                  <rect x="25" y="25" width="70" height="50" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                </g>
                <g opacity="0.4">
                  <rect x="27" y="27" width="70" height="50" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                </g>
                <g opacity="0.5">
                  <rect x="29" y="29" width="70" height="50" rx="2" fill="none" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.5"/>
                </g>
                <g opacity="0.7">
                  <rect x="30" y="30" width="70" height="50" rx="2" fill="rgba(118, 196, 255, 0.03)" stroke="rgba(118, 196, 255, 0.35)" strokeWidth="0.5"/>
                </g>
                
                <circle cx="50" cy="50" r="1.5" fill="rgba(118, 196, 255, 0.4)"/>
                <circle cx="85" cy="60" r="1.5" fill="rgba(118, 196, 255, 0.35)"/>
                <line x1="50" y1="50" x2="85" y2="60" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.3" strokeDasharray="1,1"/>
              </svg>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Feedback Refinement</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Our AI systems evolve. With every batch you receive, we refine inputs until they capture emotion and precision.
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-20 md:h-40 relative overflow-hidden">
              <svg className="w-full h-full opacity-60" viewBox="0 0 200 100">
                <g opacity="0.3">
                  <line x1="0" y1="20" x2="200" y2="20" stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.3"/>
                  <line x1="0" y1="40" x2="200" y2="40" stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.3"/>
                  <line x1="0" y1="60" x2="200" y2="60" stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.3"/>
                  <line x1="0" y1="80" x2="200" y2="80" stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.3"/>
                  
                  <line x1="40" y1="0" x2="40" y2="100" stroke="rgba(118, 196, 255, 0.08)" strokeWidth="0.3"/>
                  <line x1="80" y1="0" x2="80" y2="100" stroke="rgba(118, 196, 255, 0.08)" strokeWidth="0.3"/>
                  <line x1="120" y1="0" x2="120" y2="100" stroke="rgba(118, 196, 255, 0.08)" strokeWidth="0.3"/>
                  <line x1="160" y1="0" x2="160" y2="100" stroke="rgba(118, 196, 255, 0.08)" strokeWidth="0.3"/>
                </g>
                
                <g opacity="0.5">
                  <rect x="30" y="25" width="50" height="30" rx="1" fill="rgba(118, 196, 255, 0.02)" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                  <rect x="90" y="35" width="45" height="25" rx="1" fill="rgba(118, 196, 255, 0.03)" stroke="rgba(118, 196, 255, 0.18)" strokeWidth="0.5"/>
                  <rect x="145" y="45" width="35" height="20" rx="1" fill="rgba(118, 196, 255, 0.02)" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                </g>
                
                <g opacity="0.6">
                  <circle cx="55" cy="40" r="1.5" fill="rgba(118, 196, 255, 0.3)"/>
                  <circle cx="112" cy="47" r="1.5" fill="rgba(118, 196, 255, 0.35)"/>
                  <circle cx="162" cy="55" r="1.5" fill="rgba(118, 196, 255, 0.3)"/>
                </g>
              </svg>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Experts In The Backend</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Nothing generic survives. Every image passes through creative and technical oversight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
