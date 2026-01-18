import React, { useState, useEffect } from 'react';

export default function ResultsSection() {
  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.08) + 1) / 2;
  const wave = Math.sin(animationFrame * 0.05) * 5;

  const stats = [
    {
      label: "Cost Efficiency",
      number: "82%",
      sublabel: "costs cut",
      description: "St. Moritz snow scenes? Custom props? Done. No model fees, no travel expenses—pure, cost-effective excellence.",
      icon: "savings",
      color: "#22c55e"
    },
    {
      label: "Lightning Turnaround",
      number: "2-4",
      sublabel: "days delivery",
      description: "Why wait a month? Fully edited, publish-ready visuals at the speed of innovation. No travel, no setup delays.",
      icon: "speed",
      color: "#76c4ff"
    },
    {
      label: "Creative Freedom",
      number: "∞",
      sublabel: "possibilities",
      description: "Snow-capped mountains? Middle of the sea? Your imagination is the only limit. Any scene, any reality—crafted in real-time.",
      icon: "creative",
      color: "#a855f7"
    },
    {
      label: "Effortless Scale",
      number: "10K+",
      sublabel: "assets ready",
      description: "Ten images or ten thousand—we scale seamlessly. Every asset maintains excellence without you lifting a finger.",
      icon: "scale",
      color: "#f59e0b"
    },
    {
      label: "Brand Focused",
      number: "100%",
      sublabel: "on-brand",
      description: "Every visual aligns perfectly with your identity. On-brand assets at scale with unmatched excellence, every single time.",
      icon: "brand",
      color: "#ec4899"
    },
    {
      label: "Final Output",
      number: "A+",
      sublabel: "quality grade",
      description: "From raw capture to final-cut perfection. Post-edited, high-impact images that exceed industry standards—ready for anything.",
      icon: "quality",
      color: "#14b8a6"
    }
  ];

  const renderIcon = (type, color, animated) => {
    switch(type) {
      case 'savings':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1"/>
            <path 
              d={`M 15 25 L 20 ${20 - wave * 0.3} L 25 22 L 30 ${15 + pulse * 3}`}
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx={30} cy={15 + pulse * 3} r="2.5" fill={color}/>
            <text x="14" y="33" fill={`${color}80`} fontSize="5">↓82%</text>
          </svg>
        );
      case 'speed':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1"/>
            <circle cx="20" cy="20" r="10" fill="none" stroke={`${color}40`} strokeWidth="1"/>
            <line x1="20" y1="20" x2="20" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
            <line 
              x1="20" 
              y1="20" 
              x2={20 + Math.cos((animationFrame * 6 - 90) * Math.PI / 180) * 8}
              y2={20 + Math.sin((animationFrame * 6 - 90) * Math.PI / 180) * 8}
              stroke={color}
              strokeWidth="1"
              strokeLinecap="round"
            />
            <circle cx="20" cy="20" r="2" fill={color}/>
            <path d="M 8 12 L 5 12" stroke={`${color}60`} strokeWidth="1" strokeLinecap="round"/>
            <path d="M 9 16 L 6 15" stroke={`${color}40`} strokeWidth="1" strokeLinecap="round"/>
          </svg>
        );
      case 'creative':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1"/>
            <path 
              d={`M 12 20 C 12 ${16 - wave * 0.3} 16 ${16 - wave * 0.3} 20 20 C 24 ${24 + wave * 0.3} 28 ${24 + wave * 0.3} 28 20 C 28 ${16 - wave * 0.3} 24 ${16 - wave * 0.3} 20 20 C 16 ${24 + wave * 0.3} 12 ${24 + wave * 0.3} 12 20`}
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            {[0, 1, 2].map(i => (
              <circle 
                key={i}
                cx={10 + i * 10 + Math.sin(animationFrame * 0.1 + i) * 2}
                cy={10 + Math.cos(animationFrame * 0.1 + i) * 2}
                r={1 + pulse * 0.5}
                fill={color}
                opacity={0.5 + pulse * 0.3}
              />
            ))}
          </svg>
        );
      case 'scale':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1"/>
            {[0, 1, 2, 3].map(i => {
              const layerProgress = Math.min(1, Math.max(0, (animationFrame % 120) / 30 - i * 0.3));
              return (
                <rect 
                  key={i}
                  x={12 + i * 1}
                  y={26 - i * 5 - layerProgress * 2}
                  width={16 - i * 2}
                  height={4}
                  rx="1"
                  fill={color}
                  opacity={0.3 + layerProgress * 0.4}
                />
              );
            })}
            <path d="M 28 12 L 32 16 M 28 12 L 24 16 M 28 12 L 28 22" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          </svg>
        );
      case 'brand':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1"/>
            <circle cx="20" cy="20" r="10" fill="none" stroke={`${color}40`} strokeWidth="1"/>
            <circle cx="20" cy="20" r="6" fill="none" stroke={`${color}60`} strokeWidth="1"/>
            <circle cx="20" cy="20" r={2 + pulse * 1.5} fill={color}/>
            <path 
              d="M 16 20 L 19 23 L 25 16" 
              stroke={color} 
              strokeWidth="2" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              opacity={pulse > 0.5 ? 1 : 0.6}
            />
          </svg>
        );
      case 'quality':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} stroke={`${color}50`} strokeWidth="1"/>
            <path 
              d={`M 20 10 L 22 16 L 28 16 L 23 20 L 25 26 L 20 22 L 15 26 L 17 20 L 12 16 L 18 16 Z`}
              fill={color}
              opacity={0.8 + pulse * 0.2}
            />
            <circle 
              cx={28} 
              cy={12} 
              r={1.5 + pulse}
              fill={color}
              opacity={0.6}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    // CHANGED: py-16 md:py-32  ->  pt-0 md:pt-0 pb-16 md:pb-32
    <section id="results" className="pt-0 md:pt-0 pb-16 md:pb-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light mb-8 md:mb-16 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          The numbers speak for themselves
        </h2>

        {/* Stats Grid - 3x2 on desktop, 2x3 on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.1)]"
            >
              {/* Animated glow line */}
              <div 
                className="absolute top-0 left-0 w-full h-[2px]"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)`,
                  transform: `translateX(${-100 + (animationFrame + index * 60) % 200}%)`,
                }}
              />
              
              {/* Icon */}
              <div className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-4">
                {renderIcon(stat.icon, stat.color, true)}
              </div>
              
              {/* Label */}
              <h3 className="text-[10px] md:text-sm font-light text-white/60 mb-1 md:mb-2">
                {stat.label}
              </h3>
              
              {/* Big number */}
              <div 
                className="text-2xl md:text-5xl font-light mb-1 md:mb-2"
                style={{ color: stat.color }}
              >
                {stat.number}
              </div>
              
              {/* Sublabel */}
              <div className="text-[10px] md:text-sm text-white/40 mb-2 md:mb-4">
                {stat.sublabel}
              </div>
              
              {/* Description - White and fully visible like title */}
              <p className="text-[9px] md:text-xs text-white font-light leading-relaxed">
                {stat.description}
              </p>
              
              {/* Pulse indicator */}
              <div 
                className="absolute bottom-3 right-3 w-2 h-2 rounded-full"
                style={{ 
                  backgroundColor: stat.color,
                  opacity: 0.5 + pulse * 0.5,
                  boxShadow: `0 0 ${8 + pulse * 4}px ${stat.color}50`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}