'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';

export default function BookingDashboard() {
  const router = useRouter();
  
  const services = [
    {
      id: 1,
      name: 'Haircut & Styling',
      description: 'Professional haircut and styling services',
      icon: '✂️',
    },
    {
      id: 2,
      name: 'Beard Grooming',
      description: 'Expert beard trimming and grooming',
      icon: '🧔',
    },
    {
      id: 3,
      name: 'Hair Treatment',
      description: 'Hair care and treatment services',
      icon: '💆',
    },
    {
      id: 4,
      name: 'Full Service',
      description: 'Complete grooming package',
      icon: '✨',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-[#091266] mb-6">
            Book Your Appointment
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose a service and schedule your appointment with one of our vetted professionals
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service) => (
            <Card
              key={service.id}
              className="text-center group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-bold text-[#091266] mb-4">
                {service.name}
              </h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Button 
                variant="accent" 
                size="md" 
                className="w-full"
                onClick={() => router.push(`/booking/schedule?service=${encodeURIComponent(service.name)}`)}
              >
                Book Now
              </Button>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="bg-white rounded-3xl p-8 shadow-modern">
          <h2 className="text-3xl font-bold text-[#091266] mb-6 text-center">
            Why Choose Trust Expand?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5E17EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold text-[#091266] mb-2">
                Verified Professionals
              </h3>
              <p className="text-gray-600">
                All our professionals are KYC-verified and background checked
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5E17EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-[#091266] mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Professional is our hallmark - we guarantee excellence
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#5E17EB] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🕐</span>
              </div>
              <h3 className="text-xl font-semibold text-[#091266] mb-2">
                Flexible Scheduling
              </h3>
              <p className="text-gray-600">
                Book at your convenience with our easy scheduling system
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

