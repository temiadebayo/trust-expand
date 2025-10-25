import React from 'react';
import { Card } from '../../components/UI/Card';
import { Button } from '../../components/UI/Button';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 gradient-primary text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Complete Solutions for 
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Professional Beauty Excellence
            </span>
          </h1>
        </div>
      </section>

      {/* Service 1: The Trust Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-white shadow-modern-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-16 h-16 bg-[#091266] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-[#091266]">
                  The Trust Network: Vetted Professionals Only
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We provide access to professionals who have passed our rigorous KYC verification, Police Extract checks, and Guarantor confirmation. We eliminate the risk of unvetted talent.
                </p>
              </div>
              <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center">
                <svg className="w-16 h-16 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service 2: Expert Salon Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-white shadow-modern-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center order-2 lg:order-1">
                <svg className="w-16 h-16 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="w-16 h-16 bg-[#091266] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-[#091266]">
                  From Concept to Launch: Expert Salon Management
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  We manage the complexity of running a high-end beauty business. Includes: Setup of salons, Design & Implementation of projects, and ongoing Agency Services for growth and visibility.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service 3: Professional Excellence */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-12 bg-white shadow-modern-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-16 h-16 bg-[#091266] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-[#091266]">
                  Professional is Our Hallmark: Upholding Excellence
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our commitment to quality: Mandatory Trainings and Certification of stakeholders, and regular Site Inspection for quality control and assurance. Performance is tracked via Rating & Gamification.
                </p>
              </div>
              <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center">
                <svg className="w-16 h-16 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service 4: Exclusive Support & Global Expansion */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Premium Services */}
            <Card className="p-10 text-center group hover:scale-105 transition-all duration-300 bg-white shadow-modern-lg border border-gray-100">
              <div className="w-20 h-20 bg-[#5E17EB] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#091266]">Premium Services</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Includes specialized services like Dermatology Consultations and access to the Exclusive Private Club community.
              </p>
            </Card>

            {/* Global Expansion Support */}
            <Card className="p-10 text-center group hover:scale-105 transition-all duration-300 bg-white shadow-modern-lg border border-gray-100">
              <div className="w-20 h-20 bg-[#091266] rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-3xl font-bold mb-6 text-[#091266]">Global Expansion Support</h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                Dedicated support for global talent with Job opportunities, securing working papers, visa processing, and relocation advisory.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 gradient-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience 
            <span className="block bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Professional Excellence?
            </span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the Trust Expand network and discover how our comprehensive services can transform your beauty business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="accent" size="lg" href="/contact" className="shadow-modern-lg">
              Get Started Today
            </Button>
            <Button variant="outline" size="lg" href="/about" className="border-white text-white hover:bg-white hover:text-[#091266]">
              Learn More
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}