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
    const formData = await request.formData();
    
    // Extract form fields
    const fullName = formData.get('fullName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const yearsOfExperience = formData.get('yearsOfExperience') as string;
    const selectedTier = formData.get('selectedTier') as string;
    const specialization = formData.get('specialization') as string;
    const currentLocation = formData.get('currentLocation') as string;
    const portfolioUrl = formData.get('portfolioUrl') as string;
    const guarantorName = formData.get('guarantorName') as string;
    const guarantorPhone = formData.get('guarantorPhone') as string;
    const guarantorEmail = formData.get('guarantorEmail') as string;
    const guarantorRelationship = formData.get('guarantorRelationship') as string;
    const additionalInfo = formData.get('additionalInfo') as string;

    // Get file information and prepare attachments
    const governmentId = formData.get('governmentId') as File | null;
    const professionalCertifications = formData.get('professionalCertifications') as File | null;
    const policeExtract = formData.get('policeExtract') as File | null;

    // Validate required fields
    if (!fullName || !email || !phone || !yearsOfExperience || !selectedTier || !specialization || !currentLocation) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Prepare attachments array
    const attachments: Array<{
      filename: string;
      content: Buffer;
      contentType?: string;
    }> = [];

    // Process government ID file
    if (governmentId && governmentId.size > 0) {
      const buffer = Buffer.from(await governmentId.arrayBuffer());
      attachments.push({
        filename: governmentId.name || 'government-id.pdf',
        content: buffer,
        contentType: governmentId.type || 'application/pdf',
      });
    }

    // Process professional certifications file
    if (professionalCertifications && professionalCertifications.size > 0) {
      const buffer = Buffer.from(await professionalCertifications.arrayBuffer());
      attachments.push({
        filename: professionalCertifications.name || 'professional-certifications.pdf',
        content: buffer,
        contentType: professionalCertifications.type || 'application/pdf',
      });
    }

    // Process police extract file
    if (policeExtract && policeExtract.size > 0) {
      const buffer = Buffer.from(await policeExtract.arrayBuffer());
      attachments.push({
        filename: policeExtract.name || 'police-extract.pdf',
        content: buffer,
        contentType: policeExtract.type || 'application/pdf',
      });
    }

    // Send email to trustexpandng@gmail.com
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'trustexpandng@gmail.com',
      subject: `New Partner Registration - ${fullName} (${selectedTier} Tier)`,
      attachments: attachments.length > 0 ? attachments : undefined,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #091266;">New Partner Registration</h2>
          <p>A new partner registration has been submitted:</p>
          
          <h3 style="color: #091266; margin-top: 24px;">Personal Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Full Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${fullName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Years of Experience:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${yearsOfExperience}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Specialization:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${specialization}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Location:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${currentLocation}</td>
            </tr>
            ${portfolioUrl ? `
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Portfolio URL:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><a href="${portfolioUrl}" target="_blank">${portfolioUrl}</a></td>
            </tr>
            ` : ''}
          </table>

          <h3 style="color: #091266; margin-top: 24px;">Tier Selection</h3>
          <p><strong>Selected Tier:</strong> ${selectedTier}</p>

          <h3 style="color: #091266; margin-top: 24px;">KYC Documents</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Government ID:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${governmentId && governmentId.size > 0 ? `✓ Attached: ${governmentId.name || 'government-id.pdf'}` : 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Professional Certifications:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${professionalCertifications && professionalCertifications.size > 0 ? `✓ Attached: ${professionalCertifications.name || 'professional-certifications.pdf'}` : 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Police Extract:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${policeExtract && policeExtract.size > 0 ? `✓ Attached: ${policeExtract.name || 'police-extract.pdf'}` : 'Not provided'}</td>
            </tr>
          </table>
          ${attachments.length > 0 ? `
          <p style="margin-top: 16px; padding: 12px; background: #d1ecf1; border-left: 4px solid #0c5460; border-radius: 4px;">
            <strong>📎 Note:</strong> ${attachments.length} file(s) attached to this email. Please check the email attachments to review the documents.
          </p>
          ` : ''}

          <h3 style="color: #091266; margin-top: 24px;">Guarantor Information</h3>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${guarantorName}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${guarantorPhone}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${guarantorEmail}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Relationship:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${guarantorRelationship}</td>
            </tr>
          </table>

          ${additionalInfo ? `
          <h3 style="color: #091266; margin-top: 24px;">Additional Information</h3>
          <p style="padding: 12px; background: #f5f5f5; border-radius: 4px;">${additionalInfo}</p>
          ` : ''}

          <p style="margin-top: 24px; padding: 12px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
            <strong>Note:</strong> Please review the attached documents and contact the applicant to proceed with the registration fee payment and certification.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    // Note: In a production environment, you would also:
    // 1. Store the files securely (e.g., AWS S3, Cloudinary)
    // 2. Save the registration data to a database
    // 3. Send a confirmation email to the applicant

    return NextResponse.json(
      { success: true, message: 'Registration submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing partner registration:', error);
    return NextResponse.json(
      { error: 'Failed to process registration' },
      { status: 500 }
    );
  }
}

