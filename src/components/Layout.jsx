import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '../utils';
import { Menu, X } from 'lucide-react';

export default function Layout({ children, currentPageName }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  // New "Free Call" Button Component (Matches Booking Section Style)
  const FreeCallButton = ({ onClick, isMobile = false }) => (
    <button
      onClick={onClick}
      className={`
        ${isMobile ? 'w-full justify-center' : ''}
        relative px-5 py-2 rounded-full bg-[#f0f2f5] 
        transition-all duration-300 transform hover:scale-105 active:scale-95 
        shadow-[inset_0px_-4px_8px_rgba(0,0,0,0.1),inset_0px_4px_8px_rgba(255,255,255,1),0px_0px_25px_rgba(255,255,255,0.25)] 
        cursor-pointer flex items-center
      `}
    >
      <span className="text-sm font-bold bg-gradient-to-r from-[#3a82f5] to-black bg-clip-text text-transparent">
        Free Call
      </span>
    </button>
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
              
              {/* Updated Button Style */}
              <FreeCallButton onClick={() => scrollToSection('#booking')} />
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
              
              {/* Mobile Button Style */}
              <div className="pt-2">
                <FreeCallButton onClick={() => scrollToSection('#booking')} isMobile={true} />
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