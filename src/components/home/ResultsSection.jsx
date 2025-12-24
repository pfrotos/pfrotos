import React from 'react';

export default function ResultsSection() {
  const stats = [
    {
      label: "Projects completed",
      number: "93+",
      description: "We've successfully completed 93 top-tier projects.",
      glowPosition: "left"
    },
    {
      label: "Satisfied customers",
      number: "100%",
      description: "We ensure a 100% satisfaction level for our clients.",
      glowPosition: "right"
    },
    {
      label: "Hours saved per day",
      number: "3h",
      description: "Our solutions save our clients an average of 3 hours of work per day.",
      glowPosition: "left"
    },
    {
      label: "Cost saved per month",
      number: "80k",
      description: "Our solutions save our clients an average of $80,000 per month.",
      glowPosition: "right"
    }
  ];

  return (
    <section id="results" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light mb-8 md:mb-16 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          Our statistics
        </h2>

        <div className="grid grid-cols-4 gap-2 md:gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-2 md:p-6 overflow-hidden"
            >
              <div 
                className={`absolute top-0 ${stat.glowPosition === 'left' ? 'left-0' : 'right-0'} w-[1px] h-full`}
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgba(107, 181, 255, 0.5), transparent)',
                  boxShadow: '0 0 15px 2px rgba(107, 181, 255, 0.3)'
                }}
              />
              
              <h3 className="text-[8px] md:text-base font-light text-white mb-1 md:mb-6">
                {stat.label}
              </h3>
              
              <div className="text-lg md:text-6xl font-light text-white mb-1 md:mb-6">
                {stat.number}
              </div>
              
              <p className="text-[6px] md:text-sm text-gray-500 font-light leading-relaxed hidden md:block">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
