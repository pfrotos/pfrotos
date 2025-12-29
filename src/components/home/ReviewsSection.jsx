import React from "react";
import { Star } from "lucide-react";

export default function ReviewsSection() {
  const reviews = [
    "Pfrotos completely transformed our content strategy. We now produce 10× more content with better quality.",
    "What used to take weeks now takes days. The AI-powered workflow is a game-changer.",
    "AI enhanced our creativity instead of replacing it. The results are stunning and fast.",
    "Our photography costs dropped by 80% while quality improved. Revolutionary for e-commerce."
  ];

  return (
    <section
      id="reviews"
      className="relative bg-black overflow-hidden py-14 border-y border-white/5"
    >
      {/* Title */}
      <h2 className="text-center text-2xl md:text-3xl font-light mb-8 tracking-wide text-white">
        Reviews
      </h2>

      {/* Marquee */}
      <div className="relative w-full overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {[...reviews, ...reviews].map((text, index) => (
            <div
              key={index}
              className="flex items-center gap-4 text-sm md:text-base text-white/80 font-light"
            >
              {/* Stars */}
              <div className="flex gap-1 text-blue-500">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-current"
                  />
                ))}
              </div>

              {/* Review text */}
              <span className="max-w-none">
                “{text}”
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
