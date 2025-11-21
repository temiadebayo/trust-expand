'use client';

import React, { useState } from 'react';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import { BookingCTA } from '../../components/BookingCTA';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: '',
    appointmentDate: '',
    appointmentTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/send-booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          serviceType: '',
          appointmentDate: '',
          appointmentTime: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting booking:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#091266] text-white overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-8">
            Get In Touch With 
            <span className="block text-white/90">
              Trust Expand
            </span>
          </h1>
          <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Whether you are a customer looking for a professional service or a business ready to scale, we are here to guide you.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-6">
              Book an Appointment
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fill in your details to book your appointment with one of our vetted professionals
            </p>
          </div>

          {/* Success Message */}
          {submitStatus === 'success' && (
            <div className="mb-8 bg-green-50 border-2 border-green-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">✓</div>
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Booking Request Sent Successfully!
                </h3>
                <p className="text-green-700">
                  We've received your booking request and will contact you shortly to confirm your appointment.
                </p>
              </div>
            </div>
          )}

          {/* Error Message */}
          {submitStatus === 'error' && (
            <div className="mb-8 bg-red-50 border-2 border-red-200 rounded-2xl p-6">
              <div className="text-center">
                <div className="text-4xl mb-3">✗</div>
                <h3 className="text-2xl font-bold text-red-800 mb-3">
                  Error Sending Booking Request
                </h3>
                <p className="text-red-700">
                  Please try again or contact us directly at bookings@trustexpandng.com
                </p>
              </div>
            </div>
          )}

          {/* Booking Form */}
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Haircut & Styling">Haircut & Styling</option>
                  <option value="Beard Grooming">Beard Grooming</option>
                  <option value="Hair Treatment">Hair Treatment</option>
                  <option value="Full Service">Full Service</option>
                </select>
              </div>

              {/* Customer Name */}
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Date *
                  </label>
                  <input
                    type="date"
                    id="appointmentDate"
                    name="appointmentDate"
                    value={formData.appointmentDate}
                    onChange={handleChange}
                    required
                    min={getMinDate()}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Appointment Time *
                  </label>
                  <input
                    type="time"
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
                  placeholder="Any special requests or notes..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-4">
                <Button
                  type="submit"
                  variant="accent"
                  size="lg"
                  className="flex-1"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit Booking Request'}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      </section>

      {/* General Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-12 text-center bg-[#5E17EB] text-white rounded-2xl shadow-modern-lg">
            <h2 className="text-3xl font-bold mb-12 text-white">General Inquiries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="group">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Email</h3>
                <p className="text-white/90 text-lg">customercare@trustexpand.com</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Phone</h3>
                <p className="text-white/90 text-lg">+234 XX XXX XXXX</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience-Specific CTAs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#091266] mb-16 text-center">
            How Can We Help You?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Customer Channel */}
            <Card className="text-center group hover:scale-105 transition-all duration-300">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Professional Barber" 
                  className="w-24 h-24 rounded-full object-cover mx-auto shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-6">I Need a Service</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Book an appointment with a verified professional.
              </p>
              <Button variant="primary" size="lg" href="/contact#booking" className="w-full shadow-modern-lg">
                Book an Appointment
              </Button>
            </Card>

            {/* Professional Channel */}
            <Card className="text-center group hover:scale-105 transition-all duration-300">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Professional Networking" 
                  className="w-24 h-24 rounded-full object-cover mx-auto shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-6">I Am a Professional</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Apply to become a Trust Expand Vetted Stakeholder.
              </p>
              <Button variant="secondary" size="lg" href="/stakeholder-register" className="w-full shadow-modern-lg">
                Join Our Network Today
              </Button>
            </Card>

            {/* Business Channel */}
            <Card className="text-center group hover:scale-105 transition-all duration-300">
              <div className="mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80" 
                  alt="Salon Management" 
                  className="w-24 h-24 rounded-full object-cover mx-auto shadow-modern group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-[#091266] mb-6">I Am a Salon/Owner</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                Inquire about Salon Setup, Management, or Partnership Tiers.
              </p>
              <Button variant="accent" size="lg" href="mailto:customercare@trustexpand.com" className="w-full shadow-modern-lg">
                Discuss Partnership & Growth
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#5E17EB] text-white p-12 rounded-3xl shadow-modern-lg">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">
                Why Choose Trust Expand?
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Verified Professionals</h3>
                <p className="text-white/90 leading-relaxed">
                  All our professionals undergo rigorous KYC verification and background checks.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Expert Management</h3>
                <p className="text-white/90 leading-relaxed">
                  From salon setup to ongoing management, we handle every aspect of your business.
                </p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">Quality Guaranteed</h3>
                <p className="text-white/90 leading-relaxed">
                  Our commitment to excellence ensures every customer leaves satisfied.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Book Appointment CTA */}
      <BookingCTA />
    </div>
  );
}
