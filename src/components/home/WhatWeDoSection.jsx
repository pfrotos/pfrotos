import React from 'react';

export default function WhatWeDoSection() {
  // Image paths - replace these with your actual image paths
  const images = {
    bespokeAI: "/images/bespoke-ai.jpg",
    brandCalibrated: "/images/brand-calibrated.jpg",
    adaptiveVisual: "/images/adaptive-visual.jpg",
    feedbackRefinement: "/images/feedback-refinement.jpg",
    expertsBackend: "/images/experts-backend.jpg",
  };

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
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-32 sm:h-40 md:h-48 lg:h-56 relative overflow-hidden">
              {/* Responsive Image */}
              <picture>
                <source 
                  media="(min-width: 1024px)" 
                  srcSet={images.bespokeAI}
                />
                <source 
                  media="(min-width: 768px)" 
                  srcSet={images.bespokeAI}
                />
                <source 
                  media="(min-width: 640px)" 
                  srcSet={images.bespokeAI}
                />
                <img
                  src={images.bespokeAI}
                  alt="Bespoke AI Visual Engines"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              
              {/* Optional overlay for consistent dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Subtle border glow on hover */}
              <div className="absolute inset-0 rounded-lg md:rounded-xl border border-[#76c4ff]/0 group-hover:border-[#76c4ff]/20 transition-all duration-500" />

              {/* Action button */}
              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 backdrop-blur-sm z-10">
                View System →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Bespoke AI Visual Engines</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We don't generate images. We design frameworks. Custom AI pipelines that encode your brand's DNA into every pixel—producing visuals no one else can replicate.
            </p>
          </div>

          {/* Card 2: Brand Calibrated Creative Direction */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-32 sm:h-40 md:h-48 lg:h-56 relative overflow-hidden">
              <picture>
                <source media="(min-width: 1024px)" srcSet={images.brandCalibrated} />
                <source media="(min-width: 768px)" srcSet={images.brandCalibrated} />
                <source media="(min-width: 640px)" srcSet={images.brandCalibrated} />
                <img
                  src={images.brandCalibrated}
                  alt="Brand Calibrated Creative Direction"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-lg md:rounded-xl border border-[#76c4ff]/0 group-hover:border-[#76c4ff]/20 transition-all duration-500" />

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 backdrop-blur-sm z-10">
                See Process →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Brand Calibrated Creative Direction</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We extract your brand's soul—tone, palette, mood—and wire it directly into our imaging systems. Every shot feels unmistakably yours.
            </p>
          </div>
        </div>

        {/* Bottom Row - 3 smaller cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">

          {/* Card 3: Adaptive Visual Language Systems */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-28 sm:h-32 md:h-40 lg:h-44 relative overflow-hidden">
              <picture>
                <source media="(min-width: 1024px)" srcSet={images.adaptiveVisual} />
                <source media="(min-width: 768px)" srcSet={images.adaptiveVisual} />
                <source media="(min-width: 640px)" srcSet={images.adaptiveVisual} />
                <img
                  src={images.adaptiveVisual}
                  alt="Adaptive Visual Language Systems"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-lg md:rounded-xl border border-[#76c4ff]/0 group-hover:border-[#76c4ff]/20 transition-all duration-500" />

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 backdrop-blur-sm z-10">
                Explore →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Adaptive Visual Language</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              One visual system, infinite applications. Modular styles that adapt seamlessly across web, mobile, ads, and beyond.
            </p>
          </div>

          {/* Card 4: Feedback Refinement */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-28 sm:h-32 md:h-40 lg:h-44 relative overflow-hidden">
              <picture>
                <source media="(min-width: 1024px)" srcSet={images.feedbackRefinement} />
                <source media="(min-width: 768px)" srcSet={images.feedbackRefinement} />
                <source media="(min-width: 640px)" srcSet={images.feedbackRefinement} />
                <img
                  src={images.feedbackRefinement}
                  alt="Feedback Refinement"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-lg md:rounded-xl border border-[#76c4ff]/0 group-hover:border-[#76c4ff]/20 transition-all duration-500" />

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 backdrop-blur-sm z-10">
                See Evolution →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Feedback Refinement</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              AI that learns. Each iteration captures more emotion, precision, and nuance until perfection.
            </p>
          </div>

          {/* Card 5: Experts In The Backend */}
          <div className="group rounded-xl md:rounded-2xl bg-gradient-to-b from-white/[0.03] to-transparent border border-white/[0.08] hover:border-[#76c4ff]/30 p-3 md:p-6 overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(118,196,255,0.15)]">
            <div className="rounded-lg md:rounded-xl bg-[#0a0a0a]/80 backdrop-blur-xl border border-white/[0.06] mb-3 md:mb-6 h-28 sm:h-32 md:h-40 lg:h-44 relative overflow-hidden">
              <picture>
                <source media="(min-width: 1024px)" srcSet={images.expertsBackend} />
                <source media="(min-width: 768px)" srcSet={images.expertsBackend} />
                <source media="(min-width: 640px)" srcSet={images.expertsBackend} />
                <img
                  src={images.expertsBackend}
                  alt="Experts In The Backend"
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </picture>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />
              <div className="absolute inset-0 rounded-lg md:rounded-xl border border-[#76c4ff]/0 group-hover:border-[#76c4ff]/20 transition-all duration-500" />

              <button className="absolute bottom-2 right-2 md:bottom-3 md:right-3 px-2 py-1 md:px-3 md:py-1.5 text-[8px] md:text-[10px] text-[#76c4ff] bg-[#76c4ff]/10 border border-[#76c4ff]/20 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-[#76c4ff]/20 backdrop-blur-sm z-10">
                Meet Team →
              </button>
            </div>

            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Experts In The Backend</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Human oversight on every output. Creative and technical experts ensure nothing generic survives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
