import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How does AI content creation actually work?",
      answer: "Our AI-powered platform combines cutting-edge machine learning models with proven creative workflows. We analyze your brand, understand your vision, and use AI to generate, edit, and optimize content at scale - all while maintaining your unique brand identity."
    },
    {
      question: "What's the typical turnaround time?",
      answer: "Most projects are delivered 90% faster than traditional methods. Simple photoshoots can be completed in hours, while complex video projects typically take 2-3 days instead of weeks. We'll provide a specific timeline during your consultation call."
    },
    {
      question: "Can I really save 82% on costs?",
      answer: "Yes! Our clients typically save 80-85% compared to traditional production costs. This includes savings on photographers, videographers, studios, equipment, and post-production. You pay for AI processing and our expertise, not physical production overhead."
    },
    {
      question: "What types of content can you create?",
      answer: "We create product photography, lifestyle shoots, video content, social media assets, marketing materials, and more. From e-commerce to brand campaigns, if it involves visual content, we can produce it with AI."
    },
    {
      question: "How do you maintain quality control?",
      answer: "Every project goes through our rigorous quality process: AI generation, expert review, client feedback, refinement, and final approval. Our team of creative professionals ensures every output meets professional standards."
    },
    {
      question: "Do I need technical knowledge to work with you?",
      answer: "Not at all! We handle all the technical complexity. You simply share your vision during our consultation call, provide feedback on drafts, and approve the final results. It's as simple as working with a traditional creative agency."
    },
    {
      question: "What if I'm not satisfied with the results?",
      answer: "We offer unlimited revisions within the project scope until you're completely satisfied. Our goal is to bring your vision to life, and we won't stop until we achieve that. Client satisfaction is our top priority."
    },
    {
      question: "How do I get started?",
      answer: "Simply book a free 15-minute consultation call. We'll discuss your needs, show you examples relevant to your industry, and create a custom proposal. No commitment required until you're ready to move forward."
    }
  ];

  return (
    <section id="faq" className="py-32 px-6 relative overflow-hidden bg-black">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-light mb-20 tracking-tight bg-gradient-to-r from-white to-[#6BB5FF] bg-clip-text text-transparent">
          Answers
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.15] transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full p-6 flex items-center justify-between text-left"
              >
                <span className="text-base font-light text-white pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-light">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
