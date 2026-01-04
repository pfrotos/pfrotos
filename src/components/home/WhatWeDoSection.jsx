# Updated Code with SVG Animations as Fallback

Here's the complete code that shows images when available, and falls back to your original SVG animations if images fail to load or aren't provided:

```jsx
import React, { useState, useEffect } from 'react';

export default function WhatWeDoSection() {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // Animation values derived from frame
  const wave1 = Math.sin(animationFrame * 0.05) * 10;
  const wave2 = Math.sin(animationFrame * 0.03) * 8;
  const wave3 = Math.sin(animationFrame * 0.04) * 6;
  const pulse = (Math.sin(animationFrame * 0.08) + 1) / 2;
  const progress = (animationFrame % 180) / 180;

  // Handle image load success
  const handleImageLoad = (cardId) => {
    setImageLoadStatus(prev => ({ ...prev, [cardId]: 'loaded' }));
  };

  // Handle image load error
  const handleImageError = (cardId) => {
    setImageLoadStatus(prev => ({ ...prev, [cardId]: 'error' }));
  };

  // Check if should show image
  const shouldShowImage = (cardId, imageSrc) => {
    return imageSrc && imageLoadStatus[cardId] === 'loaded';
  };

  // Card 1 SVG Animation - Bespoke AI Visual Engines
  const Card1Animation = () => (
    <>
      {/* Dot matrix background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, row) => (
          <div key={row} className="flex justify-around">
            {[...Array(10)].map((_, col) => (
              <div 
                key={col} 
                className="w-0.5 h-0.5 rounded-full bg-[#76c4ff]/40 my-2"
                style={{
                  opacity: 0.2 + Math.sin((animationFrame + row * 10 + col * 15) * 0.05) * 0.3
                }}
              />
            ))}
          </div>
        ))}
      </div>
      
      {/* Node-based pipeline */}
      <svg className="w-full h-full relative z-10" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
        <defs>
          <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(118, 196, 255, 0.1)"/>
            <stop offset={`${(animationFrame * 1.5) % 100}%`} stopColor="rgba(118, 196, 255, 0.9)"/>
            <stop offset={`${((animationFrame * 1.5) % 100) + 10}%`} stopColor="rgba(118, 196, 255, 0.1)"/>
          </linearGradient>
        </defs>
        
        {/* Animated connection lines */}
        <path d="M 40 35 Q 65 35 80 55" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 40 85 Q 65 85 80 65" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 100 60 L 130 60" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 150 60 L 175 60" stroke="url(#flowGrad1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        
        {/* Input nodes */}
        <g style={{ transform: `translateY(${Math.sin(animationFrame * 0.03) * 2}px)` }}>
          <rect x="20" y="25" width="24" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
          <text x="32" y="38" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="7">IN</text>
        </g>
        <g style={{ transform: `translateY(${Math.sin(animationFrame * 0.03 + 1) * 2}px)` }}>
          <rect x="20" y="75" width="24" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
          <text x="32" y="88" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="7">IN</text>
        </g>
        
        {/* Central AI Process node */}
        <g filter="url(#glow1)" style={{ opacity: 0.8 + pulse * 0.2 }}>
          <rect x="72" y="42" width="36" height="36" rx="8" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.6)" strokeWidth="1.5"/>
          <text x="90" y="65" textAnchor="middle" fill="#76c4ff" fontSize="10" fontWeight="500">AI</text>
        </g>
        
        {/* Transform node */}
        <g>
          <rect x="125" y="47" width="28" height="26" rx="5" fill="rgba(118, 196, 255, 0.12)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
          <text x="139" y="64" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="6">PIPE</text>
        </g>
        
        {/* Output node - always glowing */}
        <g filter="url(#glow1)">
          <circle 
            cx="185" 
            cy="60" 
            r={12 + pulse * 3}
            fill="rgba(118, 196, 255, 0.25)" 
            stroke="#76c4ff" 
            strokeWidth="2"
          />
          <text x="185" y="64" textAnchor="middle" fill="#76c4ff" fontSize="8" fontWeight="600">OUT</text>
        </g>
        
        {/* Animated pulse rings */}
        <circle 
          cx="185" 
          cy="60" 
          r={16 + (animationFrame % 60) * 0.5}
          fill="none" 
          stroke="rgba(118, 196, 255, 0.4)" 
          strokeWidth="1"
          opacity={1 - ((animationFrame % 60) / 60)}
        />
        
        {/* Data particles flowing through */}
        {[0, 1, 2].map(i => {
          const particleProgress = ((animationFrame * 2 + i * 120) % 360) / 360;
          const x = 40 + particleProgress * 145;
          const y = 60 + Math.sin(particleProgress * Math.PI * 2) * (particleProgress < 0.3 ? 25 * (1 - particleProgress / 0.3) : 0);
          return (
            <circle 
              key={i}
              cx={x} 
              cy={y} 
              r="2.5" 
              fill="#76c4ff"
              opacity={0.6 + Math.sin(animationFrame * 0.1 + i) * 0.4}
            />
          );
        })}
      </svg>
    </>
  );

  // Card 2 SVG Animation - Brand Calibrated Creative Direction
  const Card2Animation = () => (
    <svg className="w-full h-full" viewBox="0 0 200 120" preserveAspectRatio="xMidYMid meet">
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
        <filter id="glowAccent" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Labels */}
      <text x="15" y="28" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Tone</text>
      <text x="15" y="58" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Palette</text>
      <text x="15" y="88" fill="rgba(255,255,255,0.5)" fontSize="9" fontWeight="300">Mood</text>
      
      {/* Tone slider bar */}
      <rect x="55" y="20" width="120" height="12" rx="6" fill="url(#toneGrad)" opacity="0.6"/>
      <circle 
        cx={105 + wave1} 
        cy="26" 
        r="7" 
        fill="#76c4ff"
        filter="url(#glow1)"
      />
      
      {/* Palette color bar */}
      <rect x="55" y="50" width="120" height="12" rx="6" fill="url(#paletteGrad)" opacity="0.8"/>
      {/* Animated color markers */}
      <circle cx={75 + wave3} cy="56" r="4" fill="#76c4ff" stroke="#fff" strokeWidth="0.5"/>
      <circle cx={110 + wave2} cy="56" r="4" fill="#4ea8de" stroke="#fff" strokeWidth="0.5"/>
      <circle cx={145 + wave1 * 0.5} cy="56" r="4" fill="#56cfe1" stroke="#fff" strokeWidth="0.5"/>
      
      {/* Mood slider bar */}
      <rect x="55" y="80" width="120" height="12" rx="6" fill="url(#moodGrad)" opacity="0.5"/>
      <circle 
        cx={90 + wave2} 
        cy="86" 
        r="7" 
        fill="#9ca3af"
      />
      
      {/* Animated mood curves */}
      <path 
        d={`M 55 105 Q 95 ${98 + wave1 * 0.5} 135 ${102 + wave2 * 0.3} T 185 ${105 + wave3 * 0.4}`}
        stroke="rgba(118, 196, 255, 0.5)" 
        strokeWidth="2" 
        fill="none"
      />
      <path 
        d={`M 55 112 Q 105 ${108 + wave2 * 0.4} 155 ${110 + wave1 * 0.3} T 185 ${112 + wave2 * 0.2}`}
        stroke="rgba(156, 163, 175, 0.35)" 
        strokeWidth="1.5" 
        fill="none"
      />
      
      {/* Brand color glow accent - pulsing */}
      <g filter="url(#glowAccent)">
        <circle cx="180" cy="56" r={12 + pulse * 4} fill="rgba(118, 196, 255, 0.15)"/>
        <circle cx="180" cy="56" r={6 + pulse * 2} fill="rgba(118, 196, 255, 0.4)"/>
      </g>
    </svg>
  );

  // Card 3 SVG Animation - Adaptive Visual Language Systems
  const Card3Animation = () => (
    <>
      {/* Responsive grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(rgba(118,196,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(118,196,255,0.3) 1px, transparent 1px)',
          backgroundSize: '15px 15px'
        }}/>
      </div>
      
      <svg className="w-full h-full relative z-10" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid meet">
        {/* Desktop layout - transforms based on animation */}
        <g style={{ 
          opacity: progress < 0.5 ? 1 : 0.3,
          transform: `scale(${progress < 0.5 ? 1 : 0.9})`
        }}>
          <rect x="5" y="8" width="42" height="28" rx="3" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="0.8"/>
          <rect x="5" y="40" width="18" height="22" rx="3" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="0.5"/>
          <rect x="27" y="40" width="18" height="22" rx="3" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.3)" strokeWidth="0.5"/>
          <text x="24" y="72" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="5">Desktop</text>
        </g>
        
        {/* Mobile layout */}
        <g style={{ 
          opacity: 0.5 + Math.sin(animationFrame * 0.04) * 0.3,
          transform: `translateX(${2 + Math.sin(animationFrame * 0.03) * 2}px)`
        }}>
          <rect x="55" y="5" width="22" height="38" rx="3" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="0.8"/>
          <rect x="58" y="8" width="16" height="12" rx="2" fill="rgba(118, 196, 255, 0.3)"/>
          <rect x="58" y="23" width="16" height="6" rx="1" fill="rgba(118, 196, 255, 0.15)"/>
          <rect x="58" y="32" width="16" height="6" rx="1" fill="rgba(118, 196, 255, 0.15)"/>
          <text x="66" y="52" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="5">Mobile</text>
        </g>
        
        {/* Ad/Story format */}
        <g style={{ 
          opacity: 0.5 + Math.sin(animationFrame * 0.05 + 1) * 0.3,
          transform: `translateY(${Math.sin(animationFrame * 0.04) * 2}px)`
        }}>
          <rect x="85" y="8" width="28" height="48" rx="3" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="0.8"/>
          <rect x="88" y="11" width="22" height="28" rx="2" fill="rgba(118, 196, 255, 0.25)"/>
          <rect x="88" y="42" width="22" height="4" rx="1" fill="rgba(118, 196, 255, 0.5)"/>
          <rect x="88" y="49" width="22" height="3" rx="1" fill="rgba(118, 196, 255, 0.2)"/>
          <text x="99" y="66" textAnchor="middle" fill="rgba(118, 196, 255, 0.5)" fontSize="5">Ads</text>
        </g>
        
        {/* Connecting flow arrows */}
        <path 
          d={`M 48 30 Q 52 30 55 25`} 
          stroke="rgba(118, 196, 255, 0.4)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="2,2"
          strokeDashoffset={-animationFrame * 0.5}
        />
        <path 
          d={`M 78 30 Q 82 30 85 32`} 
          stroke="rgba(118, 196, 255, 0.4)" 
          strokeWidth="1" 
          fill="none"
          strokeDasharray="2,2"
          strokeDashoffset={-animationFrame * 0.5}
        />
      </svg>
    </>
  );

  // Card 4 SVG Animation - Feedback Refinement
  const Card4Animation = () => (
    <svg className="w-full h-full" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="glowVersion" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      {/* Timeline base line */}
      <line x1="15" y1="35" x2="105" y2="35" stroke="rgba(118, 196, 255, 0.15)" strokeWidth="3" strokeLinecap="round"/>
      
      {/* Animated progress line */}
      <line 
        x1="15" 
        y1="35" 
        x2={15 + progress * 90}
        y2="35" 
        stroke="rgba(118, 196, 255, 0.6)" 
        strokeWidth="3" 
        strokeLinecap="round"
      />
      
      {/* Version 1 */}
      <g style={{ opacity: progress > 0.1 ? 1 : 0.5 }}>
        <circle cx="25" cy="35" r="9" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.5)" strokeWidth="1.5"/>
        <text x="25" y="39" textAnchor="middle" fill="rgba(118, 196, 255, 0.9)" fontSize="7" fontWeight="500">v1</text>
        <text x="25" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5">draft</text>
        {/* Checkmark badge */}
        <circle cx="33" cy="27" r="5" fill="rgba(34, 197, 94, 0.25)" stroke="rgba(34, 197, 94, 0.6)" strokeWidth="0.5"/>
        <path d="M 30 27 L 32 29 L 36 24" stroke="rgba(34, 197, 94, 0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      
      {/* Version 2 */}
      <g style={{ opacity: progress > 0.4 ? 1 : 0.4 }}>
        <circle cx="55" cy="35" r="9" fill="rgba(118, 196, 255, 0.25)" stroke="rgba(118, 196, 255, 0.6)" strokeWidth="1.5"/>
        <text x="55" y="39" textAnchor="middle" fill="rgba(118, 196, 255, 0.95)" fontSize="7" fontWeight="500">v2</text>
        <text x="55" y="52" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="5">refined</text>
        {/* Adjustment badge */}
        <circle cx="63" cy="27" r="5" fill="rgba(251, 191, 36, 0.25)" stroke="rgba(251, 191, 36, 0.6)" strokeWidth="0.5"/>
        <path d="M 60 27 L 66 27 M 63 24 L 63 30" stroke="rgba(251, 191, 36, 0.9)" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
      </g>
      
      {/* Version 3 - Final with glow */}
      <g filter={progress > 0.7 ? "url(#glowVersion)" : ""} style={{ opacity: progress > 0.7 ? 1 : 0.3 }}>
        <circle 
          cx="85" 
          cy="35" 
          r={9 + (progress > 0.9 ? pulse * 2 : 0)}
          fill="rgba(118, 196, 255, 0.3)" 
          stroke="#76c4ff" 
          strokeWidth="2"
        />
        <text x="85" y="39" textAnchor="middle" fill="#76c4ff" fontSize="7" fontWeight="600">v3</text>
        <text x="85" y="52" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="5">final</text>
        {/* Star badge */}
        <circle cx="93" cy="27" r="5" fill="rgba(118, 196, 255, 0.3)" stroke="rgba(118, 196, 255, 0.7)" strokeWidth="0.5"/>
        <text x="93" y="30" textAnchor="middle" fill="#76c4ff" fontSize="7">★</text>
      </g>
      
      {/* Pulse ring on final version */}
      {progress > 0.9 && (
        <circle 
          cx="85" 
          cy="35" 
          r={12 + ((animationFrame % 40) * 0.4)}
          fill="none" 
          stroke="rgba(118, 196, 255, 0.4)" 
          strokeWidth="1"
          opacity={1 - ((animationFrame % 40) / 40)}
        />
      )}
      
      {/* Quality labels */}
      <text x="25" y="68" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5">emotion</text>
      <text x="55" y="68" textAnchor="middle" fill="rgba(255,255,255,0.25)" fontSize="5">precision</text>
      <text x="85" y="68" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="5">nuance</text>
    </svg>
  );

  // Card 5 SVG Animation - Experts In The Backend
  const Card5Animation = () => (
    <svg className="w-full h-full" viewBox="0 0 120 80" preserveAspectRatio="xMidYMid meet">
      {/* Connection line with data flow */}
      <line x1="35" y1="35" x2="85" y2="35" stroke="rgba(118, 196, 255, 0.2)" strokeWidth="2" strokeDasharray="6,4"/>
      
      {/* Animated data particles */}
      {[0, 1, 2, 3].map(i => (
        <circle 
          key={i}
          cx={35 + ((animationFrame * 0.8 + i * 90) % 360) / 360 * 50}
          cy="35"
          r="2"
          fill="#76c4ff"
          opacity={0.4 + Math.sin(animationFrame * 0.1 + i) * 0.3}
        />
      ))}
      
      {/* Human silhouette */}
      <g>
        <circle cx="28" cy="22" r="12" fill="rgba(156, 163, 175, 0.15)" stroke="rgba(156, 163, 175, 0.3)" strokeWidth="1"/>
        <circle cx="28" cy="18" r="5" fill="rgba(156, 163, 175, 0.4)"/>
        <ellipse cx="28" cy="28" rx="7" ry="5" fill="rgba(156, 163, 175, 0.3)"/>
        <text x="28" y="48" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6">Expert</text>
      </g>
      
      {/* AI Node */}
      <g>
        <rect x="75" y="20" width="24" height="24" rx="5" fill="rgba(118, 196, 255, 0.15)" stroke="rgba(118, 196, 255, 0.45)" strokeWidth="1"/>
        <text x="87" y="36" textAnchor="middle" fill="rgba(118, 196, 255, 0.9)" fontSize="9" fontWeight="500">AI</text>
        <text x="87" y="53" textAnchor="middle" fill="rgba(255,255,255,0.45)" fontSize="6">System</text>
      </g>
      
      {/* Review checklist */}
      <g>
        <rect x="43" y="52" width="38" height="24" rx="3" fill="rgba(0, 0, 0, 0.7)" stroke="rgba(118, 196, 255, 0.25)" strokeWidth="0.8"/>
        <text x="48" y="63" fill="rgba(255,255,255,0.6)" fontSize="6">✓ Quality</text>
        <text x="48" y="72" fill="rgba(255,255,255,0.6)" fontSize="6">✓ Brand fit</text>
      </g>
      
      {/* Approval badge with pulse */}
      <g>
        <circle 
          cx="57" 
          cy="22" 
          r={8 + pulse * 1.5}
          fill="rgba(34, 197, 94, 0.2)" 
          stroke="rgba(34, 197, 94, 0.6)" 
          strokeWidth="1.5"
        />
        <path d="M 53 22 L 56 25 L 61 19" stroke="rgba(34, 197, 94, 1)" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </g>
      
      {/* Subtle pulse ring on approval */}
      <circle 
        cx="57" 
        cy="22" 
        r={10 + ((animationFrame % 50) * 0.3)}
        fill="none" 
        stroke="rgba(34, 197, 94, 0.3)" 
        strokeWidth="1"
        opacity={1 - ((animationFrame % 50) / 50)}
      />
    </svg>
  );

  // Card data configuration
  const cardConfig = {
    card1: {
      title: "Bespoke AI Visual Engines",
      description: "We don't generate images. We design frameworks. Custom AI pipelines that encode your brand's DNA into every pixel—producing visuals no one else can replicate.",
      image: "/images/ai-pipeline.jpg", // Replace with your image path or set to null
      buttonText: "View System →",
      alt: "AI Pipeline Visualization",
      Animation: Card1Animation
    },
    card2: {
      title: "Brand Calibrated Creative Direction",
      description: "We extract your brand's soul—tone, palette, mood—and wire it directly into our imaging systems. Every shot feels unmistakably yours.",
      image: "/images/brand-direction.jpg", // Replace with your image path or set to null
      buttonText: "See Process →",
      alt: "Brand Creative Direction",
      Animation: Card2Animation
    },
    card3: {
      title: "Adaptive Visual Language",
      description: "One visual system, infinite applications. Modular styles that adapt seamlessly across web, mobile, ads, and beyond.",
      image: "/images/adaptive-visual.jpg", // Replace with your image path or set to null
      buttonText: "Explore →",
      alt: "Adaptive Visual Systems",
      Animation: Card3Animation
    },
    card4: {
      title: "Feedback Refinement",
      description: "AI that learns. Each iteration captures more emotion, precision, and nuance until perfection.",
      image: "/images/feedback-refinement.jpg", // Replace with your image path or set to null
      buttonText: "See Evolution →",
      alt: "Feedback Refinement Process",
      Animation: Card4Animation
    },
    card5: {
      title: "Experts In The Backend",
      description: "Human oversight on every output. Creative and technical experts ensure nothing generic survives.",
      image: "/images/experts-backend.jpg", // Replace with your image path or set to null
      buttonText: "Meet Team →",
      alt: "Expert Team Collaboration",
      Animation: Card5Animation
    }
  };

  // Reusable Card Component with Image + Animation Fallback
  const Card = ({ cardId, config, isLarge = false }) => {
    const { title, description, image, buttonText, alt, Animation } = config;
    const showImage = shouldShowImage(cardId, image);

    return (
      <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
        
        {/* Visual Container */}
        <div className={`
          rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] 
          p-2 md:p-4 mb-3 md:mb-6 relative overflow-hidden
          ${isLarge 
            ? 'h-32 sm:h-40 md:h-48 lg:h-56' 
            : 'h-20 sm:h-28 md:h-40 lg:h-44'
          }
        `}>
          
          {/* Hidden image for preloading */}
          {image && (
            <img 
              src={image}
              alt={alt}
              className="hidden"
              onLoad={() => handleImageLoad(cardId)}
              onError={() => handleImageError(cardId)}
            />
          )}
          
          {/* Show Image when loaded */}
          {showImage && (
            <div className="absolute inset-0 z-10">
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              
              {/* Animated border glow */}
              <div 
                className="absolute inset-0 rounded-lg md:rounded-xl z-20 pointer-events-none"
                style={{
                  boxShadow: `inset 0 0 ${20 + pulse * 10}px rgba(118, 196, 255, ${0.1 + pulse * 0.1})`
                }}
              />
              
              {/* The Image */}
              <img 
                src={image}
                alt={alt}
                className="
                  w-full h-full 
                  object-cover object-center
                  transition-transform duration-700 ease-out
                  group-hover:scale-110
                  filter brightness-90 group-hover:brightness-100
                  rounded-lg md:rounded-xl
                "
              />
              
              {/* Pulsing corner accent */}
              <div className="absolute top-2 left-2 md:top-3 md:left-3 z-30">
                <div 
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-[#76c4ff]"
                  style={{ opacity: 0.5 + pulse * 0.5 }}
                />
              </div>
            </div>
          )}
          
          {/* Show Animation as fallback */}
          {!showImage && (
            <div className="absolute inset-0 z-10">
              <Animation />
            </div>
          )}
          
          {/* Loading indicator (optional - shows while image is loading) */}
          {image && !imageLoadStatus[cardId] && (
            <div className="absolute inset-0 z-5 flex items-center justify-center">
              <div 
                className="w-6 h-6 border-2 border-[#76c4ff]/30 border-t-[#76c4ff] rounded-full"
                style={{
                  animation: 'spin 1s linear infinite'
                }}
              />
            </div>
          )}
          
          {/* Action Button */}
          <button className="
            absolute bottom-2 right-2 md:bottom-3 md:right-3 z-30
            px-2 py-1 md:px-3 md:py-1.5 
            text-[8px] md:text-[10px] 
            text-[#76c4ff] bg-[#76c4ff]/10 
            border border-[#76c4ff]/20 rounded-full 
            opacity-0 group-hover:opacity-100 
            transition-all duration-300 
            hover:bg-[#76c4ff]/20
            backdrop-blur-sm
          ">
            {buttonText}
          </button>
        </div>
        
        {/* Card Title */}
        <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">
          {title}
        </h3>
        
        {/* Card Description */}
        <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
          {description}
        </p>
      </div>
    );
  };

  return (
    <section id="what-we-do" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      {/* Add keyframes for spinner */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
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
          <Card cardId="card1" config={cardConfig.card1} isLarge={true} />
          <Card cardId="card2" config={cardConfig.card2} isLarge={true} />
        </div>

        {/* Bottom Row - 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          <Card cardId="card3" config={cardConfig.card3} isLarge={false} />
          <Card cardId="card4" config={cardConfig.card4} isLarge={false} />
          <Card cardId="card5" config={cardConfig.card5} isLarge={false} />
        </div>
      </div>
    </section>
  );
}
```

## How It Works:

### Fallback Logic Flow:
```
1. Component mounts
2. Hidden <img> tries to load the image
3. If image loads successfully → Show image, hide animation
4. If image fails to load → Keep showing animation
5. If no image path provided → Show animation only
```

### Key Features:

| Feature | Description |
|---------|-------------|
| **Automatic Fallback** | If image fails, SVG animation displays |
| **Loading State** | Shows spinner while image loads |
| **Smooth Transition** | Image appears once fully loaded |
| **Preserved Animations** | All original animations intact |
| **Responsive Heights** | Different sizes for mobile/tablet/desktop |

## To Use Images:

Simply update the `image` property in `cardConfig`:

```jsx
const cardConfig = {
  card1: {
    // ... other properties
    image: "/images/your-image.jpg", // Add your image path
    // OR
    image: null, // Set to null to always use animation
  },
  // ... more cards
};
```

## Optional: Add Hover Toggle Between Image and Animation

If you want users to see the animation on hover when an image is displayed:

```jsx
const [hoveredCard, setHoveredCard] = useState(null);

// In the Card component, add to the container div:
onMouseEnter={() => setHoveredCard(cardId)}
onMouseLeave={() => setHoveredCard(null)}

// Then modify the display logic:
{showImage && hoveredCard !== cardId && (
  // Show image
)}
{(!showImage || hoveredCard === cardId) && (
  // Show animation
)}
```

Would you like me to add this hover toggle feature or any other enhancements?
