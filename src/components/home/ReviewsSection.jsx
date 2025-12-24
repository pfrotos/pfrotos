import React from 'react';
import { Star } from 'lucide-react';

export default function ReviewsSection() {
  const reviews = [
    {
      name: "Sarah Martinez",
      role: "Marketing Director",
      company: "TechFlow Inc",
      rating: 5,
      text: "Pfrotos completely transformed our content strategy. The 82% cost reduction wasn't just a number - it's real. We're producing 10x more content with better quality than ever before.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      company: "Innovate Labs",
      rating: 5,
      text: "The team's ability to turn our vision into reality is unmatched. What used to take weeks now takes days. The AI-powered workflow is a game-changer for startups like ours.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Emily Rodriguez",
      role: "Creative Director",
      company: "Brand Studio",
      rating: 5,
      text: "As a creative professional, I was skeptical about AI. But Pfrotos proved that AI enhances creativity rather than replacing it. The results speak for themselves - stunning, professional, and fast.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "David Park",
      role: "E-commerce Manager",
      company: "RetailPro",
      rating: 5,
      text: "Our product photography costs dropped by 80% while quality improved. We can now test multiple creative directions without breaking the bank. Absolutely revolutionary for e-commerce.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="reviews" className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          Reviews
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-blue-500 text-blue-500" />
                ))}
              </div>
              
              <p className="text-gray-400 mb-6 leading-relaxed text-sm font-light">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-3">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-sm font-light text-white">{review.name}</div>
                  <div className="text-xs text-gray-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
