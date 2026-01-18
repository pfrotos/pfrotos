import React from "react";

export default function ReviewsSection() {
  const reviews = [
    {
      text: "Pfrotos replaced something we thought was irreplaceable. Once we saw the results, the old way felt unnecessary",
      author: "Sarah Jenkins"
    },
    {
      text: "After our first Pfrotos project, we canceled the rest of our scheduled photoshoots. There was no reason to keep them. The visuals were cleaner, more consistent, and cost a fraction of what we were paying before. It quietly became the default",
      author: "Mark D."
    },
    {
      text: "Pfrotos removed a problem we’d just accepted as ‘part of the job.’ No locations, no delays, no compromises. We can place a product anywhere, instantly, and it still feels intentional. Once you experience that control, there’s no going back.",
      author: "Elena Rodriguez"
    },
    {
      text: "I’m extremely picky about visuals. Pfro is one of the few tools I trust without micromanaging every step. The compositions feel designed, not generated. It gives us freedom without losing taste.",
      author: "David Chen"
    },
    {
      text: "The cost savings were obvious. What surprised me was the lift in performance. Our product pages started converting better with Pfro visuals than with traditional shoots. That’s when I stopped questioning it.",
      author: "Alex V."
    }
  ];

  return (
    // CHANGED: pt-0 -> pt-12 (Added padding to prevent image clipping)
    <section
      id="reviews"
      className="relative bg-black overflow-hidden pt-12 pb-10 border-t border-white/5"
    >
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>

      {/* HEADER WITH IMAGE MARKER */}
      <h2 className="text-center mb-20 relative z-10">
        <span className="relative inline-block px-4">
          {/* The Text */}
          <span className="text-3xl md:text-4xl font-light tracking-tight text-white relative z-10">
            Reviews
          </span>
          
          {/* 
            UPDATED IMAGE STYLING:
            - brightness-[0.94]: Sets brightness exactly to 94%
          */}
          <img 
            src="/images/reviewimg.png" 
            alt="Review Highlight"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160%] max-w-none pointer-events-none select-none z-0 opacity-70 brightness-[0.94]"
          />
        </span>
      </h2>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="flex w-fit animate-marquee">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="
                group relative
                flex-shrink-0 
                w-[300px] md:w-[350px] 
                mx-4 p-6
                rounded-2xl 
                border border-white/5 
                bg-[#050505]
                flex flex-col justify-between
                overflow-hidden
                transition-all duration-500
                hover:border-[#3a82f5]/20
              "
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3a82f5] to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-24 bg-[#3a82f5] opacity-[0.05] blur-[30px] pointer-events-none group-hover:opacity-[0.15] transition-opacity duration-700" />

              <div className="relative z-10">
                <p className="text-sm md:text-base text-gray-300 font-light leading-relaxed mb-4">
                  "{review.text}"
                </p>

                <span className="text-xs font-medium text-[#3a82f5] uppercase tracking-wider block">
                  — {review.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}