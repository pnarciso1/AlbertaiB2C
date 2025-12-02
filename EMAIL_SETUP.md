# Email Verification Setup Guide

## Overview
This guide explains how to set up email verification for the Request Score form using Firebase Cloud Functions and Nodemailer.

## Prerequisites
1. Firebase project configured (`albertai-dev`)
2. Firestore database enabled
3. Firebase Functions enabled
4. SMTP email account credentials

## Step 1: Install Functions Dependencies

```bash
cd functions
npm install
```

## Step 2: Configure SMTP Settings

You need to configure SMTP settings for sending emails. You can use:
- Gmail (with App Password)
- Outlook/Office 365
- Any SMTP service

### Option A: Using Gmail

1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account > Security > App passwords
   - Create a new app password for "Mail"
   - Copy the 16-character password

3. Set Firebase Functions config:
```bash
firebase functions:config:set smtp.host="smtp.gmail.com" smtp.port="587" smtp.user="support@unityglobalcare.com" smtp.pass="your-app-password"
```

### Option B: Using Custom SMTP

```bash
firebase functions:config:set smtp.host="smtp.yourdomain.com" smtp.port="587" smtp.user="support@unityglobalcare.com" smtp.pass="your-smtp-password"
```

## Step 3: Build and Deploy Functions

```bash
# Build TypeScript
cd functions
npm run build

# Deploy functions
cd ..
firebase deploy --only functions
```

## Step 4: Update Firestore Rules

The Firestore rules have been updated to allow:
- Creating score requests with `emailVerified: false`
- Updating verification status (Cloud Functions only)

Deploy rules:
```bash
firebase deploy --only firestore:rules
```

## Step 5: Test the Flow

1. Submit a form at `/request-score`
2. Check Firestore Console - a new document should be created
3. Check email inbox for verification email
4. Click verification link
5. Should redirect to `/verify-email?status=success`
6. Check email for confirmation email

## Email Templates

Email templates are located in `functions/src/emailTemplates.ts` and include:
- Albert.ai logo (from `/images/logos/AlbertAI_Tagline_Color_R.png`)
- Brand colors (primary orange #f27607)
- Responsive HTML design

## Troubleshooting

### Emails Not Sending
1. Check Firebase Functions logs:
   ```bash
   firebase functions:log
   ```
2. Verify SMTP config:
   ```bash
   firebase functions:config:get
   ```
3. Check Firestore for error messages

### Verification Link Not Working
1. Ensure the verification route is configured in `firebase.json`
2. Check that the Cloud Function `verifyEmail` is deployed
3. Verify the base URL matches your hosting URL

### Logo Not Showing in Emails
- Ensure logo is publicly accessible at `/images/logos/AlbertAI_Tagline_Color_R.png`
- Use absolute URL in email templates (already configured)

## Production Checklist

- [ ] SMTP credentials configured
- [ ] Functions deployed
- [ ] Firestore rules deployed
- [ ] Base URL updated in `functions/src/index.ts` (currently `albertai-dev.web.app`)
- [ ] Logo URL accessible
- [ ] Test email flow end-to-end
- [ ] Monitor Functions logs for errors

## Security Notes

- Verification tokens expire after 24 hours
- Tokens are cryptographically secure (32 bytes random)
- Only Cloud Functions can update verification status
- Email addresses are validated before sending

