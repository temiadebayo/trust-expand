# Quick Setup Checklist

## ✅ Required Backend Setup

### 1. PostgreSQL Database
- [ ] Install PostgreSQL locally OR set up cloud database (Supabase/Neon/Railway)
- [ ] Create database: `CREATE DATABASE trust_expand;`
- [ ] Get connection string

### 2. Email Service (SMTP)
Choose one:
- [ ] **Gmail** (Dev): Enable 2FA, create App Password
- [ ] **SendGrid** (Prod): Sign up, get API key
- [ ] **Resend** (Prod): Sign up, get API key
- [ ] **AWS SES** (High volume): Configure SMTP

### 3. Environment Variables
Create `.env.local` in root directory:

```env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/trust_expand

# Email (SMTP)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@trustexpand.com

# Admin
ADMIN_EMAIL=admin@trustexpand.com

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Test Setup
- [ ] Start server: `npm run dev`
- [ ] Submit test booking at `/booking`
- [ ] Check admin email for notification
- [ ] Confirm booking at `/admin`
- [ ] Check customer email for confirmation

## 🚀 That's It!

The database schema is created automatically on first API call.

See `BACKEND_SETUP.md` for detailed instructions.

