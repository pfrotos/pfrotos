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
      description: "High-end visuals without production overhead. No models, no travel, no wasted spend.",
      icon: "savings",
      color: "#22c55e",
      featured: true
    },
    {
      label: "Lightning Turnaround",
      number: "2–4",
      sublabel: "days delivery",
      description: "Concept to publish-ready assets in days, not weeks. Speed without compromise.",
      icon: "speed",
      color: "#76c4ff",
      featured: true
    },
    {
      label: "Creative Freedom",
      number: "∞",
      sublabel: "possibilities",
      description: "Any scene. Any location. Any idea. Instantly visualized.",
      icon: "creative",
      color: "#a855f7"
    },
    {
      label: "Effortless Scale",
      number: "10K+",
      sublabel: "assets ready",
      description: "From a handful to thousands — quality stays flawless.",
      icon: "scale",
      color: "#f59e0b"
    },
    {
      label: "Brand Focused",
      number: "100%",
      sublabel: "on-brand",
      description: "Perfect brand consistency across every asset.",
      icon: "brand",
      color: "#ec4899"
    },
    {
      label: "Final Output",
      number: "A+",
      sublabel: "quality grade",
      description: "Post-edited, campaign-ready, industry-level visuals.",
      icon: "quality",
      color: "#14b8a6"
    }
  ];

  const renderIcon = (type, color) => {
    switch (type) {
      case 'savings':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} />
            <path
              d={`M 15 25 L 20 ${20 - wave * 0.3} L 25 22 L 30 ${15 + pulse * 3}`}
              stroke={color}
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        );
      case 'speed':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} />
            <line
              x1="20"
              y1="20"
              x2={20 + Math.cos((animationFrame * 6 - 90) * Math.PI / 180) * 8}
              y2={20 + Math.sin((animationFrame * 6 - 90) * Math.PI / 180) * 8}
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        );
      case 'creative':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} />
            <path
              d={`M 12 20 C 12 ${16 - wave * 0.3} 28 ${16 - wave * 0.3} 28 20 C 28 ${24 + wave * 0.3} 12 ${24 + wave * 0.3} 12 20`}
              stroke={color}
              strokeWidth="2"
              fill="none"
            />
          </svg>
        );
      case 'scale':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} />
            {[0, 1, 2].map(i => (
              <rect
                key={i}
                x={14}
                y={22 - i * 5}
                width={12}
                height={3}
                rx="1"
                fill={color}
                opacity={0.3 + i * 0.2}
              />
            ))}
          </svg>
        );
      case 'brand':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} />
            <circle cx="20" cy="20" r={3 + pulse * 1.5} fill={color} />
          </svg>
        );
      case 'quality':
        return (
          <svg viewBox="0 0 40 40" className="w-full h-full">
            <circle cx="20" cy="20" r="16" fill={`${color}20`} />
            <path
              d="M20 10 L23 18 L32 18 L25 23 L28 32 L20 27 L12 32 L15 23 L8 18 L17 18 Z"
              fill={color}
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="relative py-24 px-4 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(118,196,255,0.12),transparent_60%)]" />

      <div className="relative max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent mb-16">
          The numbers speak for themselves
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`
                relative overflow-hidden rounded-2xl
                bg-gradient-to-b from-white/[0.05] to-transparent
                border border-white/[0.08]
                transition-all duration-500
                hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(118,196,255,0.15)]
                ${stat.featured ? 'col-span-2 md:col-span-3 p-8' : 'col-span-1 md:col-span-3 lg:col-span-1 p-6'}
              `}
            >
              {/* background icon */}
              <div className="absolute top-4 right-4 w-20 h-20 opacity-[0.15] pointer-events-none">
                {renderIcon(stat.icon, stat.color)}
              </div>

              <h3 className="text-xs uppercase tracking-widest text-white/50 mb-2">
                {stat.label}
              </h3>

              <div
                className="font-semibold tracking-tight leading-none mb-2"
                style={{
                  fontSize: stat.featured
                    ? "clamp(3rem,6vw,4.5rem)"
                    : "clamp(2.2rem,4vw,3rem)",
                  color: stat.color,
                  textShadow: `0 0 40px ${stat.color}40`
                }}
              >
                {stat.number}
              </div>

              <div className="text-sm text-white/50 mb-3">
                {stat.sublabel}
              </div>

              <p className={`leading-relaxed ${stat.featured ? 'text-sm text-white/80' : 'text-xs text-white/70'}`}>
                {stat.description}
              </p>

              <div
                className="absolute bottom-0 left-0 h-[1px] w-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${stat.color}60, transparent)`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
