'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { Button } from '../../../components/UI/Button';
import { Card } from '../../../components/UI/Card';

export default function ScheduleAppointment() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const serviceType = searchParams.get('service') || 'Service';

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceType: serviceType,
    appointmentDate: '',
    appointmentTime: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Get tomorrow's date as minimum date
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
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          customerName: '',
          customerEmail: '',
          customerPhone: '',
          serviceType: serviceType,
          appointmentDate: '',
          appointmentTime: '',
          message: '',
        });
        // Redirect after 3 seconds
        setTimeout(() => {
          router.push('/booking');
        }, 3000);
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
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#091266] mb-4">
            Schedule Your Appointment
          </h1>
          <p className="text-xl text-gray-600">
            Fill in your details to book your appointment
          </p>
        </div>

        {/* Success Message */}
        {submitStatus === 'success' && (
          <Card className="mb-8 bg-green-50 border-green-200">
            <div className="text-center py-4">
              <div className="text-4xl mb-2">✓</div>
              <h3 className="text-2xl font-bold text-green-800 mb-2">
                Booking Submitted Successfully!
              </h3>
              <p className="text-green-700">
                You will receive a confirmation email once your appointment is confirmed by our team.
              </p>
            </div>
          </Card>
        )}

        {/* Error Message */}
        {submitStatus === 'error' && (
          <Card className="mb-8 bg-red-50 border-red-200">
            <div className="text-center py-4">
              <div className="text-4xl mb-2">✗</div>
              <h3 className="text-2xl font-bold text-red-800 mb-2">
                Error Submitting Booking
              </h3>
              <p className="text-red-700">
                Please try again or contact us directly.
              </p>
            </div>
          </Card>
        )}

        {/* Booking Form */}
        <Card>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Service Type */}
            <div>
              <label htmlFor="serviceType" className="block text-sm font-medium text-gray-700 mb-2">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                value={formData.serviceType}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#5E17EB] focus:border-transparent"
              >
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
                {isSubmitting ? 'Submitting...' : 'Submit Booking'}
              </Button>
              <Button
                type="button"
                variant="outline"
                size="lg"
                onClick={() => router.back()}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
}

