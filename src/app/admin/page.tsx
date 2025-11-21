'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '../../components/UI/Button';
import { Card } from '../../components/UI/Card';

interface Booking {
  id: number;
  customer_name: string;
  customer_email: string;
  customer_phone: string;
  service_type: string;
  appointment_date: string;
  appointment_time: string;
  message: string | null;
  status: string;
  created_at: string;
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'pending' | 'confirmed'>('all');
  const [confirmingId, setConfirmingId] = useState<number | null>(null);

  useEffect(() => {
    fetchBookings();
  }, [filter]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const url = filter === 'all' 
        ? '/api/bookings' 
        : `/api/bookings?status=${filter}`;
      
      const response = await fetch(url);
      const data = await response.json();
      setBookings(data.bookings || []);
    } catch (error) {
      console.error('Error fetching bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleConfirm = async (bookingId: number) => {
    try {
      setConfirmingId(bookingId);
      const response = await fetch(`/api/bookings/${bookingId}/confirm`, {
        method: 'POST',
      });

      if (response.ok) {
        // Refresh bookings
        fetchBookings();
      } else {
        alert('Failed to confirm booking');
      }
    } catch (error) {
      console.error('Error confirming booking:', error);
      alert('Error confirming booking');
    } finally {
      setConfirmingId(null);
    }
  };

  const getStatusBadge = (status: string) => {
    const baseClasses = 'px-3 py-1 rounded-full text-sm font-semibold';
    if (status === 'confirmed') {
      return `${baseClasses} bg-green-100 text-green-800`;
    }
    return `${baseClasses} bg-yellow-100 text-yellow-800`;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#091266] mb-4">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-600">
            Manage appointment bookings
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex gap-4 mb-8">
          <Button
            variant={filter === 'all' ? 'accent' : 'outline'}
            onClick={() => setFilter('all')}
          >
            All Bookings
          </Button>
          <Button
            variant={filter === 'pending' ? 'accent' : 'outline'}
            onClick={() => setFilter('pending')}
          >
            Pending
          </Button>
          <Button
            variant={filter === 'confirmed' ? 'accent' : 'outline'}
            onClick={() => setFilter('confirmed')}
          >
            Confirmed
          </Button>
        </div>

        {/* Bookings List */}
        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-600">Loading bookings...</p>
          </div>
        ) : bookings.length === 0 ? (
          <Card>
            <div className="text-center py-12">
              <p className="text-gray-600">No bookings found</p>
            </div>
          </Card>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {bookings.map((booking) => (
              <Card key={booking.id} className="p-6">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-[#091266]">
                        {booking.customer_name}
                      </h3>
                      <span className={getStatusBadge(booking.status)}>
                        {booking.status}
                      </span>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">{booking.customer_email}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Phone</p>
                        <p className="font-medium">{booking.customer_phone}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Service</p>
                        <p className="font-medium">{booking.service_type}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-600">Date & Time</p>
                        <p className="font-medium">
                          {new Date(booking.appointment_date).toLocaleDateString()} at {booking.appointment_time}
                        </p>
                      </div>
                    </div>

                    {booking.message && (
                      <div className="mb-4">
                        <p className="text-sm text-gray-600">Message</p>
                        <p className="text-gray-800">{booking.message}</p>
                      </div>
                    )}

                    <p className="text-sm text-gray-500">
                      Submitted: {new Date(booking.created_at).toLocaleString()}
                    </p>
                  </div>

                  {booking.status === 'pending' && (
                    <div className="flex gap-2">
                      <Button
                        variant="accent"
                        onClick={() => handleConfirm(booking.id)}
                        disabled={confirmingId === booking.id}
                      >
                        {confirmingId === booking.id ? 'Confirming...' : 'Confirm Booking'}
                      </Button>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

