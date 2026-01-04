import React, { useState, useEffect, useMemo, useCallback } from 'react';

// ✅ Move Card OUTSIDE and pass needed props
const Card = ({ 
  cardId, 
  config, 
  isLarge = false, 
  imageLoadStatus, 
  onImageLoad, 
  onImageError,
  animationFrame,
  pulse,
  progress 
}) => {
  const { title, description, image, buttonText, alt, Animation } = config;
  const showImage = image && imageLoadStatus[cardId] === 'loaded';

  return (
    <div className="group rounded-xl bg-white/[0.03] border border-white/[0.08] p-6">
      <div className={`rounded-xl bg-[#0a0a0a]/80 p-4 mb-6 relative overflow-hidden ${
        isLarge ? 'h-48' : 'h-40'
      }`}>
        {/* Hidden preloader */}
        {image && (
          <img 
            src={image}
            alt=""
            className="hidden"
            onLoad={() => onImageLoad(cardId)}
            onError={() => onImageError(cardId)}
          />
        )}
        
        {/* Content */}
        {showImage ? (
          <img 
            src={image}
            alt={alt}
            className="w-full h-full object-cover rounded-xl"
          />
        ) : (
          <Animation 
            animationFrame={animationFrame} 
            pulse={pulse} 
            progress={progress} 
          />
        )}
      </div>
      
      <h3 className="text-lg text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
};

// ✅ Move animations outside too
const Card1Animation = ({ animationFrame, pulse }) => (
  <svg className="w-full h-full" viewBox="0 0 200 120">
    <defs>
      <filter id="glow1-card1" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
        <feMerge>
          <feMergeNode in="coloredBlur"/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    {/* ... rest of animation with UNIQUE filter IDs */}
  </svg>
);

export default function WhatWeDoSection() {
  const [animationFrame, setAnimationFrame] = useState(0);
  const [imageLoadStatus, setImageLoadStatus] = useState({});

  // ✅ Use requestAnimationFrame instead of setInterval
  useEffect(() => {
    let frameId;
    let lastTime = 0;
    
    const animate = (time) => {
      if (time - lastTime > 50) { // Throttle to ~20fps
        setAnimationFrame(prev => (prev + 1) % 360);
        lastTime = time;
      }
      frameId = requestAnimationFrame(animate);
    };
    
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.08) + 1) / 2;
  const progress = (animationFrame % 180) / 180;

  // ✅ Use useCallback to prevent recreation
  const handleImageLoad = useCallback((cardId) => {
    setImageLoadStatus(prev => ({ ...prev, [cardId]: 'loaded' }));
  }, []);

  const handleImageError = useCallback((cardId) => {
    setImageLoadStatus(prev => ({ ...prev, [cardId]: 'error' }));
  }, []);

  const cardConfig = useMemo(() => ({
    card1: {
      title: "Bespoke AI Visual Engines",
      description: "Custom AI pipelines...",
      image: null, // Set to null initially to test
      Animation: Card1Animation
    },
    // ... other cards
  }), []);

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl text-white mb-8">What we do</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(cardConfig).map(([id, config]) => (
            <Card
              key={id}
              cardId={id}
              config={config}
              imageLoadStatus={imageLoadStatus}
              onImageLoad={handleImageLoad}
              onImageError={handleImageError}
              animationFrame={animationFrame}
              pulse={pulse}
              progress={progress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
