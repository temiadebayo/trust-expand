import React from 'react';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Barber Shop Background */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80')`
          }}
        ></div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 gradient-primary opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline - Simplified */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Trust Expand
            </h1>
            
            {/* Subheadline - Minimal */}
            <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
              Professional is Our Hallmark
            </p>

            {/* CTAs - Centered */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="accent" size="lg" href="/booking" className="shadow-modern-lg">
                Find a Professional
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-[#091266]">
                Partner With Us
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70">
          <div className="animate-bounce">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Our Core Service Pillars
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Three fundamental pillars that form the foundation of our comprehensive beauty industry solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1: Vetted Professionals */}
            <Card 
              title="Vetted Professionals"
              description="Access our network of KYC-verified stakeholders (Barbers, Stylists, etc.)."
              className="text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mt-8">
                <div className="w-20 h-20 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Every professional in our network undergoes rigorous verification including KYC checks, Police Extract verification, and Guarantor confirmation.
                </p>
              </div>
            </Card>

            {/* Pillar 2: Salon Setup & Management */}
            <Card 
              title="Salon Setup & Management"
              description="Expert guidance from startup to operational excellence, covering design, implementation, and management."
              className="text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mt-8">
                <div className="w-20 h-20 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  From concept to launch, we manage every aspect of your beauty business including design, implementation, and ongoing operational support.
                </p>
              </div>
            </Card>

            {/* Pillar 3: The Private Club */}
            <Card 
              title="The Private Club"
              description="Exclusive community for elite, high-level networking and peer-to-peer growth."
              className="text-center group hover:scale-105 transition-all duration-500"
            >
              <div className="mt-8">
                <div className="w-20 h-20 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Join an exclusive community of elite professionals for high-level networking, peer-to-peer growth, and premium business opportunities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* USP Callout */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Look Good, Feel Good, 
              <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Guaranteed.
              </span>
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-12">
              Our mission is to ensure every customer of a Trust Expand partner leaves with a lasting positive impression. This is the Trust Expand promise of all-round care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="accent" size="lg" href="/services" className="shadow-modern-lg">
                Explore Our Services
              </Button>
              <Button variant="outline" size="lg" href="/contact" className="border-white text-white hover:bg-white hover:text-[#091266]">
                Get Started Today
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}