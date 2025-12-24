import React, { useState, useEffect } from 'react';

export default function ProcessSection() {
  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.08) + 1) / 2;
  const wave = Math.sin(animationFrame * 0.05) * 5;
  const progress = (animationFrame % 180) / 180;

  return (
    <section id="process" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light mb-8 md:mb-16 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          The process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          
          {/* Card 1 - Discovery & Strategy */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-3 md:p-6 mb-3 md:mb-6 h-24 md:h-48 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 120 90">
                <defs>
                  <filter id="glowDiscover" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Radar/scan circles */}
                <circle cx="60" cy="45" r="35" fill="none" stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.5"/>
                <circle cx="60" cy="45" r="25" fill="none" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="0.5"/>
                <circle cx="60" cy="45" r="15" fill="none" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                
                {/* Animated radar sweep */}
                <g style={{ transform: `rotate(${animationFrame * 2}deg)`, transformOrigin: '60px 45px' }}>
                  <line x1="60" y1="45" x2="60" y2="10" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
                  <circle cx="60" cy="18" r="3" fill="rgba(118, 196, 255, 0.6)"/>
                </g>
                
                {/* Discovery points appearing */}
                {[
                  { x: 45, y: 30, delay: 0 },
                  { x: 78, y: 35, delay: 60 },
                  { x: 50, y: 58, delay: 120 },
                  { x: 72, y: 55, delay: 180 },
                  { x: 60, y: 42, delay: 240 }
                ].map((point, i) => {
                  const isVisible = (animationFrame + point.delay) % 300 < 200;
                  return (
                    <g key={i} filter={isVisible ? "url(#glowDiscover)" : ""}>
                      <circle 
                        cx={point.x} 
                        cy={point.y} 
                        r={isVisible ? 4 + pulse : 2}
                        fill={isVisible ? "rgba(118, 196, 255, 0.8)" : "rgba(118, 196, 255, 0.2)"}
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
                
                {/* Central target */}
                <circle cx="60" cy="45" r="5" fill="rgba(118, 196, 255, 0.3)" stroke="#76c4ff" strokeWidth="1.5"/>
                <circle cx="60" cy="45" r="2" fill="#76c4ff"/>
                
                {/* Scan lines */}
                <line 
                  x1="20" 
                  y1={45 + wave}
                  x2="100" 
                  y2={45 + wave}
                  stroke="rgba(118, 196, 255, 0.1)" 
                  strokeWidth="1"
                  strokeDasharray="4,4"
                  strokeDashoffset={-animationFrame}
                />
                
                {/* Strategy label */}
                <text x="60" y="82" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="6">ANALYZING</text>
              </svg>
              
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                Start Discovery →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Discovery & Strategy</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We map your brand's universe—goals, voice, vision—and architect a custom AI strategy that amplifies what makes you unique.
            </p>
          </div>

          {/* Card 2 - Development & Integration */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-24 md:h-48 relative overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 pb-1 md:pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/60"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/60"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/60"></div>
                </div>
                <div className="flex gap-1 md:gap-2 ml-2 md:ml-4">
                  <span className="text-[6px] md:text-[10px] text-[#76c4ff] px-1 md:px-2 py-0.5 bg-[#76c4ff]/10 rounded">pipeline.ai</span>
                </div>
              </div>
              
              {/* Animated code/build visualization */}
              <svg className="w-full h-full" viewBox="0 0 120 70">
                <defs>
                  <linearGradient id="codeFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(118, 196, 255, 0)"/>
                    <stop offset={`${(animationFrame % 100)}%`} stopColor="rgba(118, 196, 255, 0.8)"/>
                    <stop offset="100%" stopColor="rgba(118, 196, 255, 0)"/>
                  </linearGradient>
                </defs>
                
                {/* Code lines building */}
                {[0, 1, 2, 3, 4, 5].map((line, i) => {
                  const lineProgress = Math.min(1, Math.max(0, (progress * 6 - i) / 1));
                  const width = [70, 55, 80, 45, 65, 50][i];
                  return (
                    <g key={i}>
                      <rect 
                        x="5" 
                        y={8 + i * 10}
                        width={width * lineProgress}
                        height="5"
                        rx="2"
                        fill={`rgba(118, 196, 255, ${0.1 + lineProgress * 0.2})`}
                      />
                      {lineProgress >= 1 && (
                        <circle 
                          cx={5 + width + 5} 
                          cy={10 + i * 10}
                          r="2"
                          fill="rgba(34, 197, 94, 0.8)"
                        />
                      )}
                    </g>
                  );
                })}
                
                {/* Build progress bar */}
                <rect x="5" y="58" width="90" height="6" rx="3" fill="rgba(118, 196, 255, 0.1)"/>
                <rect 
                  x="5" 
                  y="58" 
                  width={90 * progress}
                  height="6" 
                  rx="3" 
                  fill="rgba(118, 196, 255, 0.5)"
                />
                <text x="100" y="63" fill="rgba(118, 196, 255, 0.8)" fontSize="6">{Math.round(progress * 100)}%</text>
                
                {/* Cursor blink */}
                <rect 
                  x={8 + (animationFrame % 100) * 0.8}
                  y={8 + Math.floor((animationFrame % 60) / 10) * 10}
                  width="2"
                  height="5"
                  fill={Math.floor(animationFrame / 15) % 2 === 0 ? "#76c4ff" : "transparent"}
                />
              </svg>
              
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                View Build →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Development & Integration</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Our engineers weave custom AI pipelines into your workflow—seamless, invisible, powerful. Your infrastructure, supercharged.
            </p>
          </div>

          {/* Card 3 - Optimization & Support */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-24 md:h-48 relative overflow-hidden">
              <svg className="w-full h-full" viewBox="0 0 120 90">
                <defs>
                  <linearGradient id="uptrend" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(34, 197, 94, 0)"/>
                    <stop offset="100%" stopColor="rgba(34, 197, 94, 0.3)"/>
                  </linearGradient>
                </defs>
                
                {/* Performance graph */}
                <path 
                  d={`M 10 70 Q 30 ${65 - wave} 50 ${55 - wave * 0.5} T 90 ${30 + Math.sin(animationFrame * 0.03) * 5} L 90 70 L 10 70`}
                  fill="url(#uptrend)"
                />
                <path 
                  d={`M 10 70 Q 30 ${65 - wave} 50 ${55 - wave * 0.5} T 90 ${30 + Math.sin(animationFrame * 0.03) * 5}`}
                  stroke="rgba(34, 197, 94, 0.8)"
                  strokeWidth="2"
                  fill="none"
                />
                
                {/* Live data point */}
                <circle 
                  cx="90" 
                  cy={30 + Math.sin(animationFrame * 0.03) * 5}
                  r={4 + pulse * 2}
                  fill="rgba(34, 197, 94, 0.8)"
                />
                
                {/* Stats panels */}
                <g>
                  <rect x="10" y="5" width="35" height="18" rx="3" fill="rgba(0,0,0,0.5)" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                  <text x="15" y="13" fill="rgba(255,255,255,0.4)" fontSize="4">EFFICIENCY</text>
                  <text x="15" y="20" fill="rgba(34, 197, 94, 0.9)" fontSize="6" fontWeight="500">+{Math.round(25 + pulse * 10)}%</text>
                </g>
                
                <g>
                  <rect x="50" y="5" width="30" height="18" rx="3" fill="rgba(0,0,0,0.5)" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                  <text x="55" y="13" fill="rgba(255,255,255,0.4)" fontSize="4">COST</text>
                  <text x="55" y="20" fill="rgba(34, 197, 94, 0.9)" fontSize="6" fontWeight="500">-{Math.round(11 + wave * 0.5)}%</text>
                </g>
                
                <g>
                  <rect x="85" y="5" width="28" height="18" rx="3" fill="rgba(0,0,0,0.5)" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="0.5"/>
                  <text x="89" y="13" fill="rgba(255,255,255,0.4)" fontSize="4">UPTIME</text>
                  <text x="89" y="20" fill="rgba(118, 196, 255, 0.9)" fontSize="6" fontWeight="500">99.9%</text>
                </g>
                
                {/* Grid lines */}
                {[30, 45, 60].map((y, i) => (
                  <line key={i} x1="10" y1={y} x2="100" y2={y} stroke="rgba(118, 196, 255, 0.1)" strokeWidth="0.5" strokeDasharray="2,2"/>
                ))}
                
                {/* Monitoring pulse */}
                <circle 
                  cx="105" 
                  cy="15" 
                  r={3 + pulse * 1.5}
                  fill="rgba(34, 197, 94, 0.6)"
                />
                <circle 
                  cx="105" 
                  cy="15" 
                  r={6 + ((animationFrame % 40) * 0.2)}
                  fill="none"
                  stroke="rgba(34, 197, 94, 0.4)"
                  strokeWidth="0.5"
                  opacity={1 - ((animationFrame % 40) / 40)}
                />
              </svg>
              
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20">
                View Metrics →
              </button>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Optimization & Support</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We monitor, tune, and evolve your AI systems 24/7. Peak performance isn't a goal—it's the baseline.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
