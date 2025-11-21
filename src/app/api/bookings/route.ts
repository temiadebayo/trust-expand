import { NextRequest, NextResponse } from 'next/server';
import pool, { initDatabase } from '../../../lib/db';
import { sendAdminNotification } from '../../../lib/email';

export async function POST(request: NextRequest) {
  try {
    // Initialize database if needed
    await initDatabase();

    const body = await request.json();
    const {
      customerName,
      customerEmail,
      customerPhone,
      serviceType,
      appointmentDate,
      appointmentTime,
      message,
    } = body;

    // Validate required fields
    if (!customerName || !customerEmail || !customerPhone || !serviceType || !appointmentDate || !appointmentTime) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Insert booking into database
    const client = await pool.connect();
    try {
      const result = await client.query(
        `INSERT INTO bookings (customer_name, customer_email, customer_phone, service_type, appointment_date, appointment_time, message, status)
         VALUES ($1, $2, $3, $4, $5, $6, $7, 'pending')
         RETURNING id`,
        [customerName, customerEmail, customerPhone, serviceType, appointmentDate, appointmentTime, message || null]
      );

      const bookingId = result.rows[0].id;

      // Send admin notification email
      await sendAdminNotification({
        bookingId,
        customerName,
        customerEmail,
        customerPhone,
        serviceType,
        appointmentDate,
        appointmentTime,
        message,
      });

      return NextResponse.json(
        { success: true, bookingId },
        { status: 201 }
      );
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error creating booking:', error);
    return NextResponse.json(
      { error: 'Failed to create booking' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    await initDatabase();
    const client = await pool.connect();
    
    try {
      const { searchParams } = new URL(request.url);
      const status = searchParams.get('status');

      let query = 'SELECT * FROM bookings ORDER BY created_at DESC';
      let params: string[] = [];

      if (status) {
        query = 'SELECT * FROM bookings WHERE status = $1 ORDER BY created_at DESC';
        params = [status];
      }

      const result = await client.query(query, params);
      return NextResponse.json({ bookings: result.rows });
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('Error fetching bookings:', error);
    return NextResponse.json(
      { error: 'Failed to fetch bookings' },
      { status: 500 }
    );
  }
}

