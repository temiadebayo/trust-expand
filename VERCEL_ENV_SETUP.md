# Vercel Environment Variables Setup Guide

## How to Configure Email in Vercel

### Step 1: Get Your SMTP Credentials

#### Option A: Gmail (Recommended for Testing)
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Enable **2-Step Verification** if not already enabled
3. Go to [App Passwords](https://myaccount.google.com/apppasswords)
4. Select "Mail" and your device
5. Click "Generate"
6. Copy the 16-character password (no spaces)

#### Option B: SendGrid (Recommended for Production)
1. Sign up at [SendGrid](https://sendgrid.com)
2. Create an API key in Settings → API Keys
3. Use these settings:
   - Host: `smtp.sendgrid.net`
   - Port: `587`
   - User: `apikey`
   - Password: Your SendGrid API key

#### Option C: Mailgun
1. Sign up at [Mailgun](https://www.mailgun.com)
2. Get SMTP credentials from your dashboard
3. Use the provided host, port, username, and password

### Step 2: Add Environment Variables in Vercel

1. **Go to Vercel Dashboard**
   - Navigate to your project: https://vercel.com/dashboard
   - Click on your `trust_expand` project

2. **Open Settings**
   - Click on **Settings** tab
   - Click on **Environment Variables** in the left sidebar

3. **Add Each Variable**
   Add these 5 environment variables:

   | Variable Name | Example Value | Description |
   |--------------|---------------|-------------|
   | `SMTP_HOST` | `smtp.gmail.com` | Your SMTP server hostname |
   | `SMTP_PORT` | `587` | SMTP port (587 for TLS, 465 for SSL) |
   | `SMTP_USER` | `your-email@gmail.com` | Your SMTP username/email |
   | `SMTP_PASSWORD` | `abcd efgh ijkl mnop` | Your SMTP password/app password |
   | `SMTP_FROM` | `your-email@gmail.com` | Email address to send from |

4. **Set Environment Scope**
   - For each variable, select:
     - ✅ **Production**
     - ✅ **Preview**
     - ✅ **Development** (optional, for preview deployments)

5. **Save and Redeploy**
   - Click **Save** after adding all variables
   - Go to **Deployments** tab
   - Click the **⋯** menu on your latest deployment
   - Click **Redeploy** to apply the new environment variables

### Step 3: Verify Configuration

After redeploying, test the booking form:
1. Go to your live site
2. Navigate to Contact page
3. Fill out and submit the booking form
4. Check that you receive the email at `bookings@trustexpandng.com`

## Email Destinations

- **Booking Form Submissions** → `bookings@trustexpandng.com`
- **Partner Registration** → `partner@trustexpandng.com`

## Troubleshooting

### Email Not Sending?
1. Check Vercel Function Logs:
   - Go to your deployment → **Functions** tab
   - Look for error messages in the logs

2. Verify Environment Variables:
   - Make sure all 5 variables are set
   - Check for typos in variable names
   - Ensure values don't have extra spaces

3. Test SMTP Connection:
   - Verify your SMTP credentials are correct
   - For Gmail, make sure you're using an App Password, not your regular password

### Common Errors

**"Missing credentials"**
- Solution: Ensure `SMTP_USER` and `SMTP_PASSWORD` are set

**"Invalid login"**
- Solution: Check your credentials, especially for Gmail App Passwords

**"Connection timeout"**
- Solution: Verify `SMTP_HOST` and `SMTP_PORT` are correct

## Production Recommendations

For production, consider using:
- **SendGrid** - Reliable, 100 emails/day free
- **Mailgun** - Good deliverability, 5,000 emails/month free
- **AWS SES** - Cost-effective for high volume

These services provide better deliverability and higher limits than Gmail.

