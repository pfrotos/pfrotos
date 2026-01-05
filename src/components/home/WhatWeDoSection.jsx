import React, { useState, useEffect } from 'react';

export default function WhatWeDoSection() {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [imageStates, setImageStates] = useState({
    image1: 'loading',
    image2: 'loading',
    image3: 'loading',
    image4: 'loading',
    image5: 'loading',
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  // 5-second timeout for images
  useEffect(() => {
    const timeouts = Object.keys(imageStates).map((key) => 
      setTimeout(() => {
        setImageStates(prev => prev[key] === 'loading' ? { ...prev, [key]: 'fallback' } : prev);
      }, 5000)
    );
    return () => timeouts.forEach(clearTimeout);
  }, []);

  const handleImageLoad = (key) => setImageStates(prev => ({ ...prev, [key]: 'loaded' }));
  const handleImageError = (key) => setImageStates(prev => ({ ...prev, [key]: 'fallback' }));

  // Animation values
  const wave1 = Math.sin(animationFrame * 0.05) * 10;
  const wave2 = Math.sin(animationFrame * 0.03) * 8;
  const wave3 = Math.sin(animationFrame * 0.04) * 6;
  const pulse = (Math.sin(animationFrame * 0.08) + 1) / 2;
  const progress = (animationFrame % 180) / 180;

  // Reusable Image Component with fallback
  const CardMedia = ({ imageKey, imageSrc, fallbackContent }) => (
    <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-32 md:h-48 relative overflow-hidden">
      {imageStates[imageKey] !== 'fallback' && (
        <img
          src={imageSrc}
          alt=""
          onLoad={() => handleImageLoad(imageKey)}
          onError={() => handleImageError(imageKey)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            imageStates[imageKey] === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {imageStates[imageKey] !== 'loaded' && (
        <div className={`absolute inset-0 p-2 md:p-4 transition-opacity duration-300 ${
          imageStates[imageKey] === 'loading' ? 'opacity-100' : 'opacity-100'
        }`}>
          {fallbackContent}
        </div>
      )}
    </div>
  );

  // Small card media variant
  const CardMediaSmall = ({ imageKey, imageSrc, fallbackContent }) => (
    <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-20 md:h-40 relative overflow-hidden">
      {imageStates[imageKey] !== 'fallback' && (
        <img
          src={imageSrc}
          alt=""
          onLoad={() => handleImageLoad(imageKey)}
          onError={() => handleImageError(imageKey)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            imageStates[imageKey] === 'loaded' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
      {imageStates[imageKey] !== 'loaded' && (
        <div className={`absolute inset-0 p-2 md:p-4 transition-opacity duration-300`}>
          {fallbackContent}
        </div>
      )}
    </div>
  );

  // Animation 1: Bespoke AI Visual Engines
  const Animation1 = () => (
    <>
      <div className="absolute inset-0 opacity-20">
        {[...Array(6)].map((_, row) => (
          <div key={row} className="flex justify-around">
            {[...Array(10)].map((_, col) => (
              <div
                key={col}
                className="w-0.5 h-0.5 rounded-full bg-[#76c4ff]/40 my-2"
                style={{ opacity: 0.2 + Math.sin((animationFrame + row * 10 + col * 15) * 0.05) * 0.3 }}
              />
            ))}
          </div>
        ))}
      </div>
      <svg className="w-full h-full relative z-10" viewBox="0 0 200 120">
        <defs>
          <filter id="glow1" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
          <linearGradient id="flowGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(118, 196, 255, 0.1)"/>
            <stop offset={`${(animationFrame * 1.5) % 100}%`} stopColor="rgba(118, 196, 255, 0.9)"/>
            <stop offset={`${((animationFrame * 1.5) % 100) + 10}%`} stopColor="rgba(118, 196, 255, 0.1)"/>
          </linearGradient>
        </defs>
        <path d="M 40 35 Q 65 35 80 55" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 40 85 Q 65 85 80 65" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 100 60 L 130 60" stroke="url(#flowGrad1)" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M 150 60 L 175 60" stroke="url(#flowGrad1)" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <g style={{ transform: `translateY(${Math.sin(animationFrame * 0.03) * 2}px)` }}>
          <rect x="20" y="25" width="24" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
          <text x="32" y="38" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="7">IN</text>
        </g>
        <g style={{ transform: `translateY(${Math.sin(animationFrame * 0.03 + 1) * 2}px)` }}>
          <rect x="20" y="75" width="24" height="20" rx="4" fill="rgba(118, 196, 255, 0.1)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
          <text x="32" y="88" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="7">IN</text>
        </g>
        <g filter="url(#glow1)" style={{ opacity: 0.8 + pulse * 0.2 }}>
          <rect x="72" y="42" width="36" height="36" rx="8" fill="rgba(118, 196, 255, 0.2)" stroke="rgba(118, 196, 255, 0.6)" strokeWidth="1.5"/>
          <text x="90" y="65" textAnchor="middle" fill="#76c4ff" fontSize="10" fontWeight="500">AI</text>
        </g>
        <g>
          <rect x="125" y="47" width="28" height="26" rx="5" fill="rgba(118, 196, 255, 0.12)" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1"/>
          <text x="139" y="64" textAnchor="middle" fill="rgba(118, 196, 255, 0.7)" fontSize="6">PIPE</text>
        </g>
        <g filter="url(#glow1)">
          <circle cx="185" cy="60" r={12 + pulse * 3} fill="rgba(118, 196, 255, 0.25)" stroke="#76c4ff" strokeWidth="2"/>
          <text x="185" y="64" textAnchor="middle" fill="#76c4ff" fontSize="8" fontWeight="600">OUT</text>
        </g>
        <circle cx="185" cy="60" r={16 + (animationFrame % 60) * 0.5} fill="none" stroke="rgba(118, 196, 255, 0.4)" strokeWidth="1" opacity={1 - ((animationFrame % 60) / 60)}/>
        {[0, 1, 2].map(i => {
          const particleProgress = ((animationFrame * 2 + i * 120) % 360) / 360;
          const x = 40 + particleProgress * 145;
          const y = 60 + Math.sin(particleProgress * Math.PI * 2) * (particleProgress < 0.3 ? 25 * (1 - particleProgress / 0.3) : 0);
          return <circle key={i} cx={x} cy={y} r="2.5" fill="#76c4ff" opacity={0.6 + Math.sin(animationFrame * 0.1 + i) * 0.4}/>;
        })}
      </svg>
    </>
  );

  
