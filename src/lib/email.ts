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

export interface BookingNotificationData {
  bookingId: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  serviceType: string;
  appointmentDate: string;
  appointmentTime: string;
  message?: string;
}

export async function sendAdminNotification(data: BookingNotificationData) {
  const adminEmail = process.env.ADMIN_EMAIL || 'admin@trustexpand.com';
  
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: adminEmail,
    subject: `New Booking Request - ${data.customerName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #091266;">New Booking Request</h2>
        <p>A new appointment booking has been submitted:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Booking ID:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">#${data.bookingId}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Customer Name:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.customerName}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.customerEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.customerPhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service Type:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Date:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date(data.appointmentDate).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Time:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.appointmentTime}</td>
          </tr>
          ${data.message ? `
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Message:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.message}</td>
          </tr>
          ` : ''}
        </table>
        <p style="margin-top: 20px;">
          <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/admin" 
             style="background: #5E17EB; color: white; padding: 12px 24px; text-decoration: none; border-radius: 8px; display: inline-block;">
            View in Admin Dashboard
          </a>
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending admin notification:', error);
    return { success: false, error };
  }
}

export async function sendUserConfirmation(data: BookingNotificationData) {
  const mailOptions = {
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: data.customerEmail,
    subject: 'Appointment Confirmed - Trust Expand',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #091266;">Appointment Confirmed!</h2>
        <p>Dear ${data.customerName},</p>
        <p>Your appointment has been confirmed. Here are the details:</p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Service:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.serviceType}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Date:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${new Date(data.appointmentDate).toLocaleDateString()}</td>
          </tr>
          <tr>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Time:</strong></td>
            <td style="padding: 8px; border-bottom: 1px solid #ddd;">${data.appointmentTime}</td>
          </tr>
        </table>
        <p>We look forward to serving you!</p>
        <p style="margin-top: 30px; color: #666;">
          Best regards,<br>
          Trust Expand Team
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Error sending user confirmation:', error);
    return { success: false, error };
  }
}

