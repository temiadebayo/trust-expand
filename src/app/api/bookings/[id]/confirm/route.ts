import { NextRequest, NextResponse } from 'next/server';
import pool from '../../../../lib/db';
import { sendUserConfirmation } from '../../../../lib/email';

export async function POST(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const bookingId = parseInt(params.id);

    if (isNaN(bookingId)) {
      return NextResponse.json(
        { error: 'Invalid booking ID' },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    try {
      // Update booking status to confirmed
      const updateResult = await client.query(
        `UPDATE bookings 
         SET status = 'confirmed', updated_at = CURRENT_TIMESTAMP 
         WHERE id = $1 
         RETURNING *`,
        [bookingId]
      );

      if (updateResult.rows.length === 0) {
        return NextResponse.json(
          { error: 'Booking not found' },
          { status: 404 }
        );
      }

      const booking = updateResult.rows[0];

      // Send confirmation email to user
      await sendUserConfirmation({
        bookingId: booking.id,
        customerName: booking.customer_name,
        customerEmail: booking.customer_email,
        customerPhone: booking.customer_phone,
        serviceType: booking.service_type,
        appointmentDate: booking.appointment_date,
        appointmentTime: booking.appointment_time,
        message: booking.message,
      });

      return NextResponse.json(
        { success: true, booking: booking },
        { status: 200 }
      );
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error confirming booking:', error);
    return NextResponse.json(
      { error: 'Failed to confirm booking' },
      { status: 500 }
    );
  }
}

