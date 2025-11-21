'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '../UI/Button';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    // On non-home pages, always show scrolled state
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    // On home page, check scroll position
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Check initial scroll position
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Our Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-modern border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <img 
                src="/logo_1.png" 
                alt="Trust Expand Logo" 
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group ${
                  isScrolled 
                    ? 'text-[#091266] hover:text-[#5E17EB]' 
                    : 'text-white hover:text-white/80'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
                  isScrolled 
                    ? 'bg-[#5E17EB]' 
                    : 'bg-white'
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Client Login Button */}
          <div className="hidden md:block">
            <Button 
              variant={isScrolled ? "accent" : "outline"} 
              size="sm"
              className={isScrolled ? "" : "border-white text-white hover:bg-white hover:text-[#091266]"}
            >
              Client Login
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`focus:outline-none transition-colors duration-300 ${
                isScrolled 
                  ? 'text-[#091266] hover:text-[#5E17EB]' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t transition-colors duration-300 ${
              isScrolled 
                ? 'bg-white/95 backdrop-blur-md border-gray-100' 
                : 'bg-black/20 backdrop-blur-md border-white/20'
            }`}>
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium transition-colors duration-300 ${
                    isScrolled 
                      ? 'text-[#091266] hover:text-[#5E17EB]' 
                      : 'text-white hover:text-white/80'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button 
                  variant={isScrolled ? "accent" : "outline"} 
                  size="sm" 
                  className={`w-full ${isScrolled ? "" : "border-white text-white hover:bg-white hover:text-[#091266]"}`}
                >
                  Client Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};