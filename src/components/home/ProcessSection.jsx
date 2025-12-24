import React from 'react';

export default function ProcessSection() {
  return (
    <section id="process" className="py-16 md:py-32 px-4 md:px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-5xl font-light mb-8 md:mb-16 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          The process
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4">
          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-3 md:p-6 mb-3 md:mb-6 h-24 md:h-48 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-2 md:gap-4">
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                  <svg className="w-3 h-3 md:w-5 md:h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <span className="text-blue-400 text-[10px] md:text-lg">✦</span>
                </div>
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-gray-500 text-[10px] md:text-lg">›</span>
                </div>
                <div className="w-6 h-6 md:w-10 md:h-10 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                  <span className="text-blue-400 text-[10px] md:text-lg">✦</span>
                </div>
              </div>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Discovery & Strategy</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We analyze your needs and design a tailored AI strategy that aligns with your business goals.
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-24 md:h-48">
              <div className="flex items-center gap-1 md:gap-2 mb-2 md:mb-3 pb-1 md:pb-2 border-b border-white/[0.06]">
                <div className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-red-500/50"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-yellow-500/50"></div>
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500/50"></div>
                </div>
                <div className="flex gap-1 md:gap-2 ml-2 md:ml-4">
                  <span className="text-[6px] md:text-[10px] text-gray-500 px-1 md:px-2 py-0.5 bg-white/[0.05] rounded">HTML</span>
                  <span className="text-[6px] md:text-[10px] text-white px-1 md:px-2 py-0.5 bg-white/[0.08] rounded">React</span>
                </div>
              </div>
              <div className="font-mono text-[6px] md:text-[10px] space-y-0.5 md:space-y-1">
                <div><span className="text-gray-600">1</span> <span className="text-pink-400">&lt;html</span> <span className="text-blue-400">lang=</span><span className="text-green-400">"en"</span><span className="text-pink-400">&gt;</span></div>
                <div><span className="text-gray-600">2</span>   <span className="text-pink-400">&lt;head&gt;</span></div>
              </div>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Development & Integration</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              Our team builds and integrates custom AI solutions seamlessly into your existing infrastructure.
            </p>
          </div>

          <div className="rounded-xl md:rounded-2xl bg-[#0a0a0a] border border-white/[0.08] p-3 md:p-6 overflow-hidden">
            <div className="rounded-lg md:rounded-xl bg-[#111] border border-white/[0.06] p-2 md:p-4 mb-3 md:mb-6 h-24 md:h-48">
              <div className="space-y-1.5 md:space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[6px] md:text-[10px] text-gray-500">Service quota</span>
                  <span className="text-[6px] md:text-[10px] text-gray-400">↗</span>
                </div>
                
                <div className="flex items-center justify-between py-1 md:py-2 border-b border-white/[0.06]">
                  <span className="text-[8px] md:text-xs text-gray-400">Workflow efficiency</span>
                  <span className="text-[8px] md:text-xs text-green-400">+25%</span>
                </div>
                
                <div className="flex items-center justify-between py-1 md:py-2 border-b border-white/[0.06]">
                  <span className="text-[8px] md:text-xs text-gray-400">Operational cost</span>
                  <span className="text-[8px] md:text-xs text-green-400">-11%</span>
                </div>
                
                <div className="flex items-center justify-between py-1 md:py-2">
                  <span className="text-[8px] md:text-xs text-gray-400">Update available</span>
                  <button className="text-[6px] md:text-[10px] text-red-400 px-1 md:px-2 py-0.5 md:py-1 bg-red-500/10 rounded">
                    Update ↑
                  </button>
                </div>
              </div>
            </div>
            
            <h3 className="text-sm md:text-lg font-light text-white mb-1 md:mb-2">Optimization & Support</h3>
            <p className="text-[10px] md:text-sm text-gray-500 font-light leading-relaxed">
              We continuously monitor, optimize, and support your AI systems to ensure peak performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
