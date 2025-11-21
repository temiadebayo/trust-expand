import React from 'react';
import { Button } from './UI/Button';

export const BookingCTA: React.FC = () => {
  return (
    <section className="py-24 bg-[#5E17EB] text-white relative overflow-hidden">
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Book Your Appointment?
        </h2>
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Experience professional excellence with our vetted professionals. Book your appointment today and let us take care of you.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button variant="accent" size="lg" href="/contact#booking" className="shadow-modern-lg">
            Book an Appointment
          </Button>
          <Button variant="outline" size="lg" href="/services" className="border-white text-white hover:bg-white hover:text-[#091266]">
            View Our Services
          </Button>
        </div>
      </div>
    </section>
  );
};

