import React from 'react';

export default function BookingSection() {
  return (
    <section id="booking" className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-8 tracking-tight">
            Let's talk!
          </h2>
          
          <p className="text-base text-gray-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Book a short 15-minute call to make your brand's vision not limited by funds but by imagination
          </p>
          
          <button className="px-8 py-4 rounded-full text-white text-sm font-medium transition-all duration-500 relative overflow-hidden group
              bg-gradient-to-b from-white/20 to-white/5 
              backdrop-blur-xl 
              border border-white/30
              shadow-[0_8px_32px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.4),inset_0_-1px_0_rgba(255,255,255,0.1)]
              hover:shadow-[0_8px_40px_rgba(255,255,255,0.2),inset_0_1px_0_rgba(255,255,255,0.5),inset_0_-1px_0_rgba(255,255,255,0.15)]
              hover:bg-gradient-to-b hover:from-white/30 hover:to-white/10
              hover:scale-105 active:scale-95">
            Schedule Call
          </button>
        </div>
      </div>
    </section>
  );
}
