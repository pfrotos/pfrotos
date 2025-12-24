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

  return (
    <div className="min-h-screen bg-black text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to={createPageUrl('Home')} className="text-xl font-light tracking-wide">
              <span className="text-white">pfrotos.</span>
            </Link>

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
              <button
                onClick={() => scrollToSection('#booking')}
                className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              >
                Book Now
              </button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

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
              <button
                onClick={() => scrollToSection('#booking')}
                className="w-full px-6 py-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full text-white font-medium"
              >
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="pt-20">
        {children}
      </main>
    </div>
  );
}
