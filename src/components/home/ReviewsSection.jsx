import React from "react";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    {
      text: "Pfrotos completely transformed our content strategy. We now produce 10× more content with better quality.",
      author: "Sarah Jenkins"
    },
    {
      text: "What used to take weeks now takes days. The AI-powered workflow is a game-changer.",
      author: "Mark D."
    },
    {
      text: "AI enhanced our creativity instead of replacing it. The results are stunning and fast.",
      author: "Elena Rodriguez"
    },
    {
      text: "Our photography costs dropped by 80% while quality improved. Revolutionary for e-commerce.",
      author: "David Chen"
    },
    {
      text: "Finally, a tool that understands brand aesthetics. The consistency is unmatched.",
      author: "Alex V."
    }
  ];

  return (
    <section
      id="reviews"
      className="relative bg-black overflow-hidden py-24 border-t border-white/5"
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

      <h2 className="text-center text-3xl md:text-4xl font-light mb-16 tracking-tight text-white">
        Reviews
      </h2>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

        <div className="flex w-fit animate-marquee">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="
                flex-shrink-0 
                w-[350px] md:w-[400px] 
                mx-4 p-8 
                rounded-2xl 
                border border-white/10 
                bg-white/[0.02]
                flex flex-col justify-between
                group hover:border-white/20 transition-colors duration-300
              "
            >
              <p className="text-lg text-white font-light leading-relaxed mb-8">
                "{review.text}"
              </p>

              <div className="flex flex-col gap-3">
                <div className="flex gap-1 text-zinc-600 group-hover:text-zinc-500 transition-colors">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-current"
                    />
                  ))}
                </div>

                {/* Updated: Name now in blue #3a82f5 */}
                <span className="text-sm font-medium text-[#3a82f5] uppercase tracking-wider">
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
