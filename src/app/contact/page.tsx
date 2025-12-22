'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';
import { BookingCTA } from '../../components/BookingCTA';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: '',
    serviceLocation: '',
    appointmentDate: '',
    appointmentTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check URL params for preselecting service location
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const location = params.get('location');
      if (location === 'home') {
        setFormData(prev => ({ ...prev, serviceLocation: 'Home Service' }));
      }
    }
  }, []);

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
          serviceLocation: '',
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
                  Please try again or contact us directly at trustexpandng@gmail.com
                </p>
              </div>
            </div>
          )}

          {/* Booking Form */}
          <Card>
            <form onSubmit={handleSubmit} className="space-y-6 pt-4">
              {/* Service Type */}
              <div>
                <label htmlFor="serviceType" className="block text-sm font-medium text-gray-900 mb-2">
                  Service Type *
                </label>
                <select
                  id="serviceType"
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] bg-white text-gray-900 font-medium transition-all duration-200 hover:border-gray-400"
                >
                  <option value="" className="text-gray-500">Select a service</option>
                  <option value="Haircut & Styling" className="text-gray-900">Haircut & Styling</option>
                  <option value="Beard Grooming" className="text-gray-900">Beard Grooming</option>
                  <option value="Hair Treatment" className="text-gray-900">Hair Treatment</option>
                  <option value="Full Service" className="text-gray-900">Full Service</option>
                </select>
              </div>

              {/* Service Location - Radio Buttons */}
              <div>
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Service Location *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    formData.serviceLocation === 'In-Store'
                      ? 'border-[#5E17EB] bg-[#5E17EB]/5'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}>
                    <input
                      type="radio"
                      name="serviceLocation"
                      value="In-Store"
                      checked={formData.serviceLocation === 'In-Store'}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      formData.serviceLocation === 'In-Store'
                        ? 'border-[#5E17EB]'
                        : 'border-gray-400'
                    }`}>
                      {formData.serviceLocation === 'In-Store' && (
                        <div className="w-3 h-3 rounded-full bg-[#5E17EB]"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">In-Store Service</div>
                      <div className="text-sm text-gray-600">Visit our salon location</div>
                    </div>
                  </label>
                  <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                    formData.serviceLocation === 'Home Service'
                      ? 'border-[#5E17EB] bg-[#5E17EB]/5'
                      : 'border-gray-300 hover:border-gray-400 bg-white'
                  }`}>
                    <input
                      type="radio"
                      name="serviceLocation"
                      value="Home Service"
                      checked={formData.serviceLocation === 'Home Service'}
                      onChange={handleChange}
                      required
                      className="sr-only"
                    />
                    <div className={`w-5 h-5 rounded-full border-2 mr-3 flex items-center justify-center ${
                      formData.serviceLocation === 'Home Service'
                        ? 'border-[#5E17EB]'
                        : 'border-gray-400'
                    }`}>
                      {formData.serviceLocation === 'Home Service' && (
                        <div className="w-3 h-3 rounded-full bg-[#5E17EB]"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-gray-900">Home Service</div>
                      <div className="text-sm text-gray-600">We come to you</div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Customer Name */}
              <div>
                <label htmlFor="customerName" className="block text-sm font-medium text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="customerName"
                  name="customerName"
                  value={formData.customerName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="customerEmail" className="block text-sm font-medium text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="customerEmail"
                  name="customerEmail"
                  value={formData.customerEmail}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="customerPhone" className="block text-sm font-medium text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="customerPhone"
                  name="customerPhone"
                  value={formData.customerPhone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
                  placeholder="+234 XXX XXX XXXX"
                />
              </div>

              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="appointmentDate" className="block text-sm font-medium text-gray-900 mb-2">
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
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
                <div>
                  <label htmlFor="appointmentTime" className="block text-sm font-medium text-gray-900 mb-2">
                    Appointment Time *
                  </label>
                  <input
                    type="time"
                    id="appointmentTime"
                    name="appointmentTime"
                    value={formData.appointmentTime}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 transition-all duration-200 hover:border-gray-400"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Additional Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-[#5E17EB] text-gray-900 placeholder-gray-500 transition-all duration-200 hover:border-gray-400"
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
          <div className="p-12 text-center bg-[#091266] text-white rounded-2xl shadow-modern-lg">
            <h2 className="text-3xl font-bold mb-12 text-white">General Inquiries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="group">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Email</h3>
                <p className="text-white/90 text-lg">trustexpandng@gmail.com</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Phone</h3>
                <p className="text-white/90 text-lg">+234 906 232 0242</p>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">WhatsApp</h3>
                <a href="https://wa.me/2349041195751" target="_blank" rel="noopener noreferrer" className="text-white/90 text-lg hover:text-white transition-colors">
                  09041195751
                </a>
              </div>
              <div className="group">
                <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-12 transition-transform duration-500">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Address</h3>
                <p className="text-white/90 text-lg">
                  Shop 6, Tswanya Place<br />
                  1st Avenue, Gwarimpa<br />
                  Abuja
                </p>
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
              <Button variant="accent" size="lg" href="mailto:trustexpandng@gmail.com" className="w-full shadow-modern-lg">
                Discuss Partnership & Growth
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#091266] text-white p-12 rounded-3xl shadow-modern-lg">
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

      {/* Home Service CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#091266] to-[#5E17EB] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Professional Beauty Services at Your Doorstep
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Experience the convenience of premium beauty services in the comfort of your home. 
                Our vetted professionals bring the salon experience directly to you.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white/90">Fully vetted and certified professionals</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white/90">Premium quality tools and products</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white/90">Flexible scheduling to fit your lifestyle</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 text-white mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-white/90">Same professional quality as in-salon</span>
                </li>
              </ul>
              <Button
                variant="accent"
                size="lg"
                href="/contact#booking?location=home"
                className="bg-white text-[#5E17EB] hover:bg-white/90 shadow-modern-lg text-lg px-8 py-4"
              >
                Book Home Service Now
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">At Your Home</h3>
                      <p className="text-white/80">Comfort and convenience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Flexible Timing</h3>
                      <p className="text-white/80">Book at your convenience</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Verified & Safe</h3>
                      <p className="text-white/80">Background checked professionals</p>
                    </div>
                  </div>
                </div>
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
