import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  try {
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

    // Send email to bookings@trustexpandng.com
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'bookings@trustexpandng.com',
      subject: `New Booking Request - ${customerName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #091266;">New Booking Request</h2>
          <p>A new appointment booking has been submitted:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Customer Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${customerName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${customerEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${customerPhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${serviceType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Date:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date(appointmentDate).toLocaleDateString()}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Time:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${appointmentTime}</td>
            </tr>
            ${message ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${message}</td>
            </tr>
            ` : ''}
          </table>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { success: true, message: 'Booking request sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending booking email:', error);
    return NextResponse.json(
      { error: 'Failed to send booking request' },
      { status: 500 }
    );
  }
}

