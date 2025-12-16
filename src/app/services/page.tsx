import React from 'react';
import { Card } from '../../components/UI/Card';
import { Button } from '../../components/UI/Button';
import { BookingCTA } from '../../components/BookingCTA';

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#091266] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Complete Solutions for 
            <span className="block text-white/90">
              Professional Beauty Excellence
            </span>
          </h1>
        </div>
      </section>

      {/* Service 1: The Trust Network */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-10 bg-white shadow-modern-lg border border-gray-100">
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
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Vetted Professional" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Service 2: Expert Salon Management */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-10 bg-white shadow-modern-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center order-2 lg:order-1">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Modern Salon Interior" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
              <div className="flex-1 order-1 lg:order-2">
                <div className="w-16 h-16 bg-[#5E17EB] rounded-2xl flex items-center justify-center mb-8">
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
          <Card className="p-10 bg-white shadow-modern-lg border border-gray-100">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1">
                <div className="w-16 h-16 bg-[#5E17EB] rounded-2xl flex items-center justify-center mb-8">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl font-bold mb-6 text-[#091266]">
                  Professionalism is our hallmark: Upholding Excellence
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our commitment to quality: Mandatory Trainings and Certification of stakeholders, and regular Site Inspection for quality control and assurance. Performance is tracked via Rating & Gamification.
                </p>
              </div>
              <div className="w-32 h-32 bg-gray-100 rounded-3xl flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Professional Training" 
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Additional Solutions for Beauty Businesses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Beyond day-to-day staffing, Trust Expand supports you with training, retention, and reputation so your business stays fully booked and your team stays motivated.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Permanent Beauty Staffing */}
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Permanent Beauty Staffing" 
                  className="w-full h-48 object-cover rounded-2xl shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#091266]">Permanent Beauty Staffing</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We place vetted, long-term hires for salons, spas, nail studios, med-spas, and beauty clinics. Every candidate is screened for technical skill, attitude, and client-care standards.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Hair stylists & colorists</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Barbers</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Makeup artists</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Nail technicians</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Lash & brow artists</span>
              </div>
            </Card>

            {/* Temporary & Seasonal Cover */}
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Temporary & Seasonal Cover" 
                  className="w-full h-48 object-cover rounded-2xl shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#091266]">Temporary & Seasonal Cover</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Keep your calendar fully booked even when staff are on leave or during seasonal rush. We provide reliable cover who can adapt quickly to your service menu and pace.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Holiday peaks</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Maternity cover</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Sickness cover</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Event-based bookings</span>
              </div>
            </Card>

            {/* Front-of-House & Management */}
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Front-of-House & Management" 
                  className="w-full h-48 object-cover rounded-2xl shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#091266]">Front-of-House & Management</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beautiful spaces need strong teams at reception and in management. We source people who protect your brand, manage bookings, and keep your operations smooth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Receptionists</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Salon coordinators</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Spa managers</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Area managers</span>
              </div>
            </Card>

            {/* Skills Testing & Trade Tests */}
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Skills Testing & Trade Tests" 
                  className="w-full h-48 object-cover rounded-2xl shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#091266]">Skills Testing & Trade Tests</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We can run video-based or in-person technical tests so you see the candidate's work before you commit. You get a clear picture of their finishing quality and speed.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Hair & color tests</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Nail & art tests</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Facial & spa protocol tests</span>
              </div>
            </Card>

            {/* Customer Experience Training */}
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Customer Experience Training" 
                  className="w-full h-48 object-cover rounded-2xl shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#091266]">Customer Experience Training</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Short, practical training for your team on consultation, upselling ethically, handling complaints, and creating a calm, luxury-feeling client journey.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Consultation scripts</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Retail recommendation</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Rebooking techniques</span>
              </div>
            </Card>

            {/* Premium Services */}
            <Card className="p-8 bg-white shadow-modern-lg border border-gray-100 group hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://images.unsplash.com/photo-1621607501242-f51617711277?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" 
                  alt="Premium Services" 
                  className="w-full h-48 object-cover rounded-2xl shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#091266]">Premium Services</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Includes specialized services like Dermatology Consultations and access to the Exclusive Private Club community for elite networking and growth.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Private Club access</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Dermatology consultations</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-700">Elite networking</span>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              How Trust Expand Works With You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We keep the process simple and transparent, with clear timelines and communication so you always know what's happening with your search.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#091266] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                1
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#091266] mb-3">Define Your Perfect Hire</h4>
                <p className="text-gray-600 leading-relaxed">
                  On a quick call, we map out your role, service list, schedule, culture, and must-have skills so we only send candidates who fit your reality, not just the job title.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#5E17EB] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                2
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#091266] mb-3">Source & Pre-Vet Candidates</h4>
                <p className="text-gray-600 leading-relaxed">
                  We tap into our beauty-only network and shortlist candidates. We pre-interview, check experience, and confirm availability before they ever reach your inbox.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#091266] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                3
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#091266] mb-3">Interviews & Trade Tests</h4>
                <p className="text-gray-600 leading-relaxed">
                  You receive a curated shortlist with profiles and notes. We help coordinate interviews, trade tests, and trial days to see how they perform on the floor.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#5E17EB] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                4
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#091266] mb-3">Offer, Onboarding & Check-Ins</h4>
                <p className="text-gray-600 leading-relaxed">
                  Once you choose your hire, we support offer negotiations and start dates, then check in with both sides to make sure the placement is settling in smoothly.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#091266] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                5
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#091266] mb-3">Replacement Support</h4>
                <p className="text-gray-600 leading-relaxed">
                  If a placement doesn't work out within the agreed guarantee period, we prioritize a replacement search so you're not left short-staffed.
                </p>
              </div>
            </div>
            
            <div className="flex gap-6">
              <div className="w-12 h-12 bg-[#5E17EB] text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                6
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#091266] mb-3">Ongoing Talent Pipeline</h4>
                <p className="text-gray-600 leading-relaxed">
                  For regular clients, we keep a warm pipeline ready so future roles are faster to fill and you can plan expansion with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-[#5E17EB] text-white relative overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Ready to Experience 
            <span className="block text-white/90">
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

      {/* Book Appointment CTA */}
      <BookingCTA />
    </div>
  );
}