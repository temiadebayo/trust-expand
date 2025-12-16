import React from 'react';
import { Button } from '../components/UI/Button';
import { Card } from '../components/UI/Card';
import { BookingCTA } from '../components/BookingCTA';

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
        
        {/* Color overlay */}
        <div className="absolute inset-0 bg-[#5E17EB] opacity-60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Main Headline - Simplified */}
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              Trust Expand
            </h1>
            
            {/* Subheadline - Enhanced */}
            <p className="text-2xl md:text-3xl text-white/90 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Elite beauty professionals for salons, spas & clinics. We source, vet, and place verified specialists so you can focus on bookings, not CVs.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30">
                500+ placements made
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30">
                72-hour average shortlist
              </span>
              <span className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30">
                KYC-verified professionals
              </span>
            </div>

            {/* CTAs - Centered */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="accent" size="lg" href="/contact#booking" className="shadow-modern-lg">
                Find a Professional
              </Button>
              <Button variant="outline" size="lg" href="/partner" className="border-white text-white hover:bg-white hover:text-[#091266]">
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

      {/* Track Record Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Proven Track Record in the Beauty Industry
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trust Expand is built for beauty businesses. We understand busy schedules, last-minute cancellations, and the cost of an empty chair — and we staff to protect your revenue.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gray-50 rounded-3xl">
              <div className="text-5xl font-bold text-[#5E17EB] mb-4">500+</div>
              <p className="text-gray-600 text-lg">
                Successful placements across salons, spas and med-spas
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-3xl">
              <div className="text-5xl font-bold text-[#5E17EB] mb-4">72 hrs</div>
              <p className="text-gray-600 text-lg">
                Average time to send your first shortlist of candidates
              </p>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-3xl">
              <div className="text-5xl font-bold text-[#5E17EB] mb-4">4.8★</div>
              <p className="text-gray-600 text-lg">
                Average rating from beauty businesses we partner with
              </p>
            </div>
          </div>
          
          <div className="bg-[#091266] text-white p-10 rounded-3xl shadow-modern-lg">
            <h3 className="text-2xl font-bold mb-6 text-center">Real Results from Our Partners</h3>
            <ul className="space-y-4 max-w-3xl mx-auto">
              <li className="flex items-start gap-4">
                <span className="text-[#5E17EB] text-2xl">✓</span>
                <span className="text-lg">High-end spa increased rebooking rate by 23% after we restructured their therapist team.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#5E17EB] text-2xl">✓</span>
                <span className="text-lg">Franchise salon group filled 9 locations with stylists and assistants before peak holiday season.</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-[#5E17EB] text-2xl">✓</span>
                <span className="text-lg">New lash and brow bar opened with a full team in place four weeks before launch.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Core Service Pillars */}
      <section className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
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
              <div className="mt-6">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Professional Barber" 
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-modern group-hover:scale-110 transition-transform duration-300"
                  />
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
              <div className="mt-6">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Modern Salon Interior" 
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-modern group-hover:scale-110 transition-transform duration-300"
                  />
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
              <div className="mt-6">
                <div className="mb-6">
                  <img 
                    src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                    alt="Professional Networking" 
                    className="w-24 h-24 rounded-full object-cover mx-auto shadow-modern group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Join an exclusive community of elite professionals for high-level networking, peer-to-peer growth, and premium business opportunities.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#5E17EB] text-center mb-16">
            Our Work in Action
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-modern">
              <img 
                src="https://images.unsplash.com/photo-1621607501242-f51617711277?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Professional Haircut" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Professional Haircuts</h3>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-modern">
              <img 
                src="https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Beard Styling" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Beard Styling</h3>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-modern">
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Salon Interior" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Modern Salon</h3>
                </div>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-modern">
              <img 
                src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                alt="Professional Training" 
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="font-semibold">Expert Training</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              What Our Partners Say
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We work quietly behind the scenes so your brand shines out front. Here's what beauty businesses share after partnering with Trust Expand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#091266] text-white p-8 rounded-3xl shadow-modern-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 text-8xl text-white/10 font-serif leading-none">"</div>
              <p className="text-lg mb-6 relative z-10 leading-relaxed">
                "We spent months trying to hire senior stylists. Within ten days of working with Trust Expand, we had three candidates we would have happily hired. We took two, and our colour bookings are now waitlisted."
              </p>
              <footer className="text-white/80 text-sm relative z-10">Owner, GlowHaus Salon Collective</footer>
            </div>
            
            <div className="bg-[#091266] text-white p-8 rounded-3xl shadow-modern-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 text-8xl text-white/10 font-serif leading-none">"</div>
              <p className="text-lg mb-6 relative z-10 leading-relaxed">
                "Our spa always struggled with turnover. Trust Expand helped us hire better and adjust our commission structure. Six months later, our team is stable, and our regular clients are noticing the difference."
              </p>
              <footer className="text-white/80 text-sm relative z-10">Director, Serenity Spa & Wellness</footer>
            </div>
            
            <div className="bg-[#091266] text-white p-8 rounded-3xl shadow-modern-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 text-8xl text-white/10 font-serif leading-none">"</div>
              <p className="text-lg mb-6 relative z-10 leading-relaxed">
                "We opened a new lash and brow bar and needed a full team ready from day one. Trust Expand built a pipeline, handled all interviews, and we launched fully staffed weeks ahead of schedule."
              </p>
              <footer className="text-white/80 text-sm relative z-10">Founder, Velvet Lash Lounge</footer>
            </div>
          </div>
        </div>
      </section>

      {/* USP Callout */}
      <section className="py-24 bg-[#5E17EB] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold mb-8">
              Ready to Stop Scrambling for Beauty Staff?
            </h2>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Send us your role and we'll respond with a realistic hiring timeline, sample candidate profiles, and pricing for your salon, spa, or clinic — no obligation.
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <div className="text-white/90">Average first shortlist in 72 hours.</div>
              <div className="text-white/90">Beauty-only placements — no generic recruiters.</div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button variant="accent" size="lg" href="/contact#booking" className="shadow-modern-lg">
                Share a Role With Us
              </Button>
              <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-[#091266]">
                Explore Our Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <BookingCTA />
    </div>
  );
}