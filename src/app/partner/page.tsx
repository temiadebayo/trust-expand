import React from 'react';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import { BookingCTA } from '../../components/BookingCTA';

export default function PartnerPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#091266] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Elevate Your Career: Become a Trust Expand Vetted Professional
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Join the exclusive network where professionalism is rewarded and success is guaranteed. We turn your passion into a thriving, reliable career. Professionalism is our hallmark.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="accent" size="lg" href="/partner/register" className="shadow-modern-lg">
              Start Your Registration
            </Button>
            <Button variant="outline" size="lg" href="#tiers" className="border-white text-white hover:bg-white hover:text-[#091266]">
              View Tier Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Stop Hustling, Start Growing */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Stop Hustling, Start Growing
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              You are a professional, but are you a profitable business? We solve the pain points that hold back great talent:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#091266] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">Lack of Trust</h3>
              <p className="text-gray-600 leading-relaxed">
                Our rigorous vetting process instantly earns client confidence.
              </p>
            </Card>

            <Card className="p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#091266] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">Mismanagement</h3>
              <p className="text-gray-600 leading-relaxed">
                We handle the business, so you focus on your craft.
              </p>
            </Card>

            <Card className="p-8 text-center group hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-[#091266] rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">Low Visibility</h3>
              <p className="text-gray-600 leading-relaxed">
                Get placed directly in front of the high-value clientele you deserve.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Quality Assurance. Guaranteed.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trust Expand is more than an agency; we are your partner in quality control. We offer:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#091266] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">Mandatory Trainings</h3>
              <p className="text-gray-600 leading-relaxed">
                Polish your business and client-facing skills through our comprehensive training programs.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#091266] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">Site Inspection</h3>
              <p className="text-gray-600 leading-relaxed">
                Regular checks ensure a consistently professional environment that meets our high standards.
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#091266] rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">Rating & Gamification</h3>
              <p className="text-gray-600 leading-relaxed">
                Rewards your performance directly, boosting your visibility and income.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Path to Vetted Status */}
      <section id="registration" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Your Path to Vetted Status: Safety, Security, Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We believe excellence must be verified. Our multi-step application ensures we partner only with the best, which builds confidence for every client booking.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#091266] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  1
                </div>
              </div>
              <Card className="flex-1 p-8 bg-gray-50 shadow-modern-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#091266] mb-4">
                  Initial Application & Tier Selection
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Sign up and tell us about your experience (3-5+ years, 10-15+ years). Select the tier you believe you qualify for:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-[#091266] text-white rounded-full text-sm font-semibold">Standard</span>
                  <span className="px-4 py-2 bg-[#5E17EB] text-white rounded-full text-sm font-semibold">Premium</span>
                  <span className="px-4 py-2 bg-[#091266] text-white rounded-full text-sm font-semibold">Celebrity</span>
                </div>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#091266] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  2
                </div>
              </div>
              <Card className="flex-1 p-8 bg-gray-50 shadow-modern-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#091266] mb-4">
                  Secure Document Submission (KYC)
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  This is mandatory for all applicants. Securely upload the required documents for your background check. All documents are stored with bank-grade security.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Government ID</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Professional Certifications</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Guarantor Contact</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-[#5E17EB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-gray-700">Police Extract</span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-[#091266] text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  3
                </div>
              </div>
              <Card className="flex-1 p-8 bg-gray-50 shadow-modern-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-[#091266] mb-4">
                  Vetting and Certification
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Our management team reviews all documents and experience. Upon approval, you pay the Registration Fee and receive your official Trust Expand Certification, instantly elevating your market standing.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* The Private Club */}
      <section id="tiers" className="py-20 bg-[#091266] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Access the Elite: The Private Club
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Approved Premium and Celebrity Tier professionals gain membership to our exclusive private community—a hub for networking, mentorship, and high-level industry dialogue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">S</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Standard</h3>
                <p className="text-white/80">3-5+ years experience</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Vetted Professional Status</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Client Placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Quality Assurance Support</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/20 backdrop-blur-sm border-2 border-white/40 text-white relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-[#091266] text-white px-4 py-1 rounded-full text-sm font-semibold">POPULAR</span>
              </div>
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">P</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Premium</h3>
                <p className="text-white/80">5-10+ years experience</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">All Standard Benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Private Club Access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Priority Placement</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Enhanced Visibility</span>
                </li>
              </ul>
            </Card>

            <Card className="p-8 bg-white/10 backdrop-blur-sm border border-white/20 text-white">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold">C</span>
                </div>
                <h3 className="text-2xl font-bold mb-2">Celebrity</h3>
                <p className="text-white/80">10-15+ years experience</p>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">All Premium Benefits</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">VIP Private Club Access</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Exclusive High-Value Clients</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-white mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-white/90">Premium Brand Positioning</span>
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-8">
            Ready to Professionalize Your Passion?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Join Trust Expand today and transform your career into a thriving, profitable business.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button variant="accent" size="lg" href="/partner/register" className="shadow-modern-lg">
              Start Your Registration
            </Button>
            <Button variant="primary" size="lg" href="#tiers" className="shadow-modern-lg">
              View Tier Benefits
            </Button>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <BookingCTA />
    </div>
  );
}

