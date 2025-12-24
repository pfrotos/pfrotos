import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [animationFrame, setAnimationFrame] = useState(0);
  const [isBookHovered, setIsBookHovered] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame(prev => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const pulse = (Math.sin(animationFrame * 0.08) + 1) / 2;

  const navLinks = [
    { name: 'Home', page: 'Home' },
    { name: 'What We Do', href: '#what-we-do' },
    { name: 'Process', href: '#process' },
    { name: 'Results', href: '#results' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
  ];

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setMobileMenuOpen(false);
      }
    }
  };

  // Liquid Glass Button Component
  const LiquidGlassButton = ({ onClick, children, isMobile = false }) => (
    <div className="relative inline-block">
      {/* Glow effect */}
      <div 
        className="absolute inset-0 rounded-full blur-lg transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, 
            rgba(118, 196, 255, ${0.25 + pulse * 0.15}), 
            rgba(168, 85, 247, ${0.2 + pulse * 0.1}), 
            rgba(99, 102, 241, ${0.15 + pulse * 0.1})
          )`,
          transform: `scale(${isBookHovered ? 1.15 : 1.05})`,
          opacity: isBookHovered ? 0.9 : 0.6
        }}
      />
      
      {/* RGB split effect */}
      <div 
        className="absolute inset-0 rounded-full opacity-40 blur-[2px]"
        style={{
          background: 'linear-gradient(135deg, rgba(255,0,0,0.15), transparent)',
          transform: `translate(${isBookHovered ? -1.5 : -0.5}px, ${isBookHovered ? -0.5 : 0}px)`
        }}
      />
      <div 
        className="absolute inset-0 rounded-full opacity-40 blur-[2px]"
        style={{
          background: 'linear-gradient(315deg, rgba(0,0,255,0.15), transparent)',
          transform: `translate(${isBookHovered ? 1.5 : 0.5}px, ${isBookHovered ? 0.5 : 0}px)`
        }}
      />
      
      {/* Main button */}
      <button
        onClick={onClick}
        onMouseEnter={() => setIsBookHovered(true)}
        onMouseLeave={() => setIsBookHovered(false)}
        className={`relative ${isMobile ? 'w-full' : ''} px-6 py-2.5 rounded-full text-white font-medium transition-all duration-500 overflow-hidden`}
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, ${0.12 + pulse * 0.04}) 0%, 
            rgba(255, 255, 255, 0.04) 50%,
            rgba(118, 196, 255, 0.08) 100%
          )`,
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: `
            0 0 ${15 + pulse * 10}px rgba(118, 196, 255, ${0.15 + pulse * 0.1}),
            0 0 ${30 + pulse * 15}px rgba(168, 85, 247, ${0.08 + pulse * 0.05}),
            0 4px 20px rgba(0, 0, 0, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.3),
            inset 0 -1px 0 rgba(255, 255, 255, 0.08)
          `,
          transform: isBookHovered ? 'scale(1.05)' : 'scale(1)'
        }}
      >
        {/* Inner highlight */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
            opacity: isBookHovered ? 0.8 : 0.5
          }}
        />
        
        {/* Animated shine */}
        <div 
          className="absolute inset-0 rounded-full overflow-hidden"
          style={{ opacity: isBookHovered ? 0.5 : 0.2 }}
        >
          <div 
            className="absolute w-[200%] h-full"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.35) 50%, transparent 100%)',
              transform: `translateX(${-100 + (animationFrame % 150) * 1.8}%)`,
              top: 0,
              left: 0
            }}
          />
        </div>
        
        {/* Button text */}
        <span className="relative z-10 text-sm font-medium">{children}</span>
      </button>
      
      {/* Outer pulse ring */}
      <div 
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(118, 196, 255, 0.25)',
          transform: `scale(${1.15 + pulse * 0.1})`,
          opacity: 0.4 - pulse * 0.25
        }}
      />
    </div>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="text-xl font-light tracking-wide">
              <span className="text-white">pfrotos.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.page ? (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </button>
                )
              ))}
              
              {/* Liquid Glass Book Now Button */}
              <LiquidGlassButton onClick={() => scrollToSection('#booking')}>
                Book Now
              </LiquidGlassButton>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-6 py-4 space-y-4">
              {navLinks.map((link) => (
                link.page ? (
                  <Link
                    key={link.name}
                    to={createPageUrl(link.page)}
                    className="block text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-left text-gray-300 hover:text-white transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </button>
                )
              ))}
              
              {/* Mobile Liquid Glass Button */}
              <div className="pt-2">
                <LiquidGlassButton onClick={() => scrollToSection('#booking')} isMobile>
                  Book Now
                </LiquidGlassButton>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Page Content */}
      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
