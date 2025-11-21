# Backend Setup Guide for Trust Expand Booking System

This guide covers all the backend infrastructure needed to make the booking system work.

## 1. PostgreSQL Database Setup

### Option A: Local PostgreSQL Installation

1. **Install PostgreSQL** (if not already installed):
   - **Windows**: Download from [postgresql.org](https://www.postgresql.org/download/windows/)
   - **macOS**: `brew install postgresql@14` or download from postgresql.org
   - **Linux**: `sudo apt-get install postgresql postgresql-contrib` (Ubuntu/Debian)

2. **Create Database**:
   ```bash
   # Connect to PostgreSQL
   psql -U postgres

   # Create database
   CREATE DATABASE trust_expand;

   # Create user (optional, or use default postgres user)
   CREATE USER trust_expand_user WITH PASSWORD 'your_secure_password';
   GRANT ALL PRIVILEGES ON DATABASE trust_expand TO trust_expand_user;

   # Exit psql
   \q
   ```

3. **Connection String Format**:
   ```
   DATABASE_URL=postgresql://username:password@localhost:5432/trust_expand
   ```

### Option B: Cloud PostgreSQL (Recommended for Production)

**Popular Options:**
- **Supabase** (Free tier available): https://supabase.com
- **Neon** (Serverless PostgreSQL): https://neon.tech
- **Railway**: https://railway.app
- **AWS RDS**: https://aws.amazon.com/rds/postgresql/
- **Heroku Postgres**: https://www.heroku.com/postgres

**Example with Supabase:**
1. Sign up at supabase.com
2. Create a new project
3. Go to Settings > Database
4. Copy the connection string (URI format)
5. Use it as your `DATABASE_URL`

**Note**: The database schema will be automatically created on first API call via the `initDatabase()` function.

---

## 2. Email Service Configuration (SMTP)

You need an SMTP service to send emails. Here are the options:

### Option A: Gmail SMTP (Easiest for Development)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account Settings
   - Security > 2-Step Verification > App passwords
   - Generate a new app password for "Mail"
   - Copy the 16-character password

3. **Environment Variables**:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_USER=your-email@gmail.com
   SMTP_PASSWORD=your-16-char-app-password
   SMTP_FROM=noreply@trustexpand.com
   ```

### Option B: SendGrid (Recommended for Production)

1. **Sign up**: https://sendgrid.com (Free tier: 100 emails/day)
2. **Create API Key**:
   - Settings > API Keys > Create API Key
   - Copy the API key

3. **Update email.ts** to use SendGrid API instead of SMTP (requires code changes)

### Option C: Resend (Modern Alternative)

1. **Sign up**: https://resend.com (Free tier: 3,000 emails/month)
2. **Get API Key** from dashboard
3. **Update email.ts** to use Resend API (requires code changes)

### Option D: AWS SES (For High Volume)

1. **Set up AWS SES**
2. **Verify email addresses/domains**
3. **Get SMTP credentials** from AWS Console
4. Use SMTP settings in environment variables

### Option E: Mailgun

1. **Sign up**: https://www.mailgun.com (Free tier: 5,000 emails/month)
2. **Get SMTP credentials** from dashboard
3. Use in environment variables

---

## 3. Environment Variables Setup

Create a `.env.local` file in the root directory:

```env
# Database Configuration
DATABASE_URL=postgresql://username:password@localhost:5432/trust_expand

# Email Configuration (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@trustexpand.com

# Admin Email (where booking notifications are sent)
ADMIN_EMAIL=admin@trustexpand.com

# Application URL (for email links)
NEXT_PUBLIC_APP_URL=http://localhost:3000
# For production: NEXT_PUBLIC_APP_URL=https://yourdomain.com

# Node Environment
NODE_ENV=development
```

**Important Notes:**
- Never commit `.env.local` to git (it's already in `.gitignore`)
- For production, set these in your hosting platform's environment variables
- `NEXT_PUBLIC_APP_URL` must be set for email links to work correctly

---

## 4. Database Schema

The database schema is automatically created when the first booking API call is made. However, you can also initialize it manually:

### Manual Initialization (Optional)

Create a script `scripts/init-db.ts`:

```typescript
import { initDatabase } from '../src/lib/db';

async function main() {
  try {
    await initDatabase();
    console.log('Database initialized successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error initializing database:', error);
    process.exit(1);
  }
}

main();
```

Run it with: `npx tsx scripts/init-db.ts`

### Schema Details

The `bookings` table includes:
- `id` (SERIAL PRIMARY KEY)
- `customer_name` (VARCHAR 255)
- `customer_email` (VARCHAR 255)
- `customer_phone` (VARCHAR 50)
- `service_type` (VARCHAR 255)
- `appointment_date` (DATE)
- `appointment_time` (TIME)
- `message` (TEXT, nullable)
- `status` (VARCHAR 50, default: 'pending')
- `created_at` (TIMESTAMP)
- `updated_at` (TIMESTAMP)

Indexes are created on:
- `status` (for filtering)
- `appointment_date` (for date queries)

---

## 5. Testing the Setup

### Test Database Connection

1. Start your Next.js dev server:
   ```bash
   npm run dev
   ```

2. Make a test booking via the UI or use curl:
   ```bash
   curl -X POST http://localhost:3000/api/bookings \
     -H "Content-Type: application/json" \
     -d '{
       "customerName": "Test User",
       "customerEmail": "test@example.com",
       "customerPhone": "+234 123 456 7890",
       "serviceType": "Haircut & Styling",
       "appointmentDate": "2024-12-25",
       "appointmentTime": "10:00",
       "message": "Test booking"
     }'
   ```

3. Check the database:
   ```bash
   psql -U postgres -d trust_expand
   SELECT * FROM bookings;
   ```

### Test Email Functionality

1. Submit a booking through the UI
2. Check the admin email inbox for the notification
3. Confirm the booking in the admin dashboard (`/admin`)
4. Check the customer email for the confirmation

### Common Issues

**Database Connection Error:**
- Verify `DATABASE_URL` is correct
- Check PostgreSQL is running: `pg_isready` or `sudo systemctl status postgresql`
- Verify database exists: `psql -l | grep trust_expand`

**Email Not Sending:**
- Verify SMTP credentials are correct
- For Gmail: Make sure you're using an App Password, not your regular password
- Check spam folder
- Verify `SMTP_FROM` email is valid
- Check server logs for error messages

**SSL Connection Issues (Production):**
- The code already handles SSL for production (`NODE_ENV === 'production'`)
- For some cloud providers, you may need to adjust SSL settings in `src/lib/db.ts`

---

## 6. Production Deployment Checklist

### Environment Variables
- [ ] Set all environment variables in your hosting platform
- [ ] Use production database (cloud PostgreSQL)
- [ ] Use production email service (SendGrid, Resend, etc.)
- [ ] Set `NEXT_PUBLIC_APP_URL` to your production domain
- [ ] Set `NODE_ENV=production`

### Database
- [ ] Database is accessible from your hosting platform
- [ ] SSL connection is configured (if required)
- [ ] Database backups are set up
- [ ] Connection pooling is configured (already handled by `pg` Pool)

### Email
- [ ] Email service is production-ready
- [ ] Sender email/domain is verified
- [ ] Email templates are tested
- [ ] SPF/DKIM records are set (for custom domain)

### Security
- [ ] All environment variables are secure
- [ ] Database credentials are not exposed
- [ ] API routes are protected (consider adding authentication for admin routes)
- [ ] Rate limiting is implemented (consider adding for production)

### Monitoring
- [ ] Error logging is set up
- [ ] Email delivery is monitored
- [ ] Database performance is monitored

---

## 7. Optional Enhancements

### Add Authentication to Admin Dashboard

Currently, the admin dashboard is open. Consider adding:
- NextAuth.js for authentication
- Simple password protection
- Role-based access control

### Add Rate Limiting

Protect your API from abuse:
```bash
npm install express-rate-limit
```

### Add Email Queue System

For high volume, consider:
- Bull/BullMQ for job queues
- Redis for queue storage
- Background workers for email processing

### Add Database Migrations

For better schema management:
- Prisma ORM
- TypeORM
- Knex.js

---

## Quick Start Summary

1. **Install PostgreSQL** (local or cloud)
2. **Set up email service** (Gmail for dev, SendGrid/Resend for production)
3. **Create `.env.local`** with all required variables
4. **Start dev server**: `npm run dev`
5. **Test booking flow**: Submit a booking and verify emails
6. **Access admin dashboard**: `http://localhost:3000/admin`

That's it! The system will automatically create the database schema on first use.

