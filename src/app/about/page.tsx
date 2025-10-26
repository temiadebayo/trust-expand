import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Our Story: Building Trust, 
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Guaranteeing Expansion
            </span>
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                alt="Modern Beauty Salon" 
                className="w-full h-96 object-cover rounded-3xl shadow-modern"
              />
            </div>
            <div className="bg-gray-50 rounded-3xl p-12 shadow-modern">
              <h2 className="text-3xl font-bold text-[#091266] mb-6">Our Story</h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Trust Expand was founded on the recognition that while the Nigerian beauty industry is rich with passion and skilled talent, it often lacks the standardized professionalism and business structure needed for global success. We stepped in to create an ecosystem where talent is verified (KYC), rewarded (Tiers), and managed (Expert Oversight), transforming individual careers and businesses into sustainable, profitable ventures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, and Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-16 text-center">
            Mission, Vision, and Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mission */}
            <div className="gradient-primary text-white p-10 rounded-3xl shadow-modern-lg">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-white/90 leading-relaxed">
                To take the beauty industry to greater heights by providing the structure, support, and community necessary for every professional and business to succeed.
              </p>
            </div>

            {/* Vision */}
            <div className="gradient-secondary text-white p-10 rounded-3xl shadow-modern-lg">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-white/90 leading-relaxed">
                To build a global market where the beauty industry thrives. When you talk about the beauty industry in Nigeria, you're talking about Trust Expand.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation - Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-16 text-center">
            Our Foundation
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Value 1: Trust */}
            <div className="bg-white p-8 rounded-3xl shadow-modern text-center group hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#091266] mb-4">Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Built through rigorous vetting, transparency, and accountability.
              </p>
            </div>

            {/* Value 2: Respect */}
            <div className="bg-white p-8 rounded-3xl shadow-modern text-center group hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 gradient-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#091266] mb-4">Respect</h3>
              <p className="text-gray-600 leading-relaxed">
                Treating every stakeholder and client with dignity and professionalism.
              </p>
            </div>

            {/* Value 3: Responsibility */}
            <div className="bg-white p-8 rounded-3xl shadow-modern text-center group hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#091266] mb-4">Responsibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Taking ownership of the quality we guarantee.
              </p>
            </div>

            {/* Value 4: Passion */}
            <div className="bg-white p-8 rounded-3xl shadow-modern text-center group hover:scale-105 transition-all duration-300 border border-gray-100">
              <div className="w-16 h-16 gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[#091266] mb-4">Passion</h3>
              <p className="text-gray-600 leading-relaxed">
                Driven by the desire to see our industry flourish.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="gradient-primary text-white p-12 rounded-3xl shadow-modern-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Our Unique Culture
            </h2>
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-xl text-white/90 leading-relaxed">
                We foster a culture that is Collaborative and promotes innovative, creativity, and productivity. We don't just consult; we partner to align the stakeholder's vision and mission with our strategic roadmap.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}