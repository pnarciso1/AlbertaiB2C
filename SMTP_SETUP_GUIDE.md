# SMTP Configuration Guide

## Quick Setup

### Option 1: Gmail (Recommended for Testing)

1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to: https://myaccount.google.com/apppasswords
   - Select "Mail" and "Other (Custom name)"
   - Name it "Firebase Functions"
   - Copy the 16-character password

3. **Set Firebase Config**:
```bash
firebase functions:config:set smtp.host="smtp.gmail.com" smtp.port="587" smtp.user="your-email@gmail.com" smtp.pass="your-16-char-app-password"
```

### Option 2: Custom SMTP Server

If you have SMTP credentials for `support@unityglobalcare.com`:

```bash
firebase functions:config:set smtp.host="smtp.yourdomain.com" smtp.port="587" smtp.user="support@unityglobalcare.com" smtp.pass="your-smtp-password"
```

### Option 3: Office 365 / Outlook

```bash
firebase functions:config:set smtp.host="smtp.office365.com" smtp.port="587" smtp.user="support@unityglobalcare.com" smtp.pass="your-password"
```

## Verify Configuration

After setting config, verify it:
```bash
firebase functions:config:get
```

You should see:
```json
{
  "smtp": {
    "host": "smtp.gmail.com",
    "port": "587",
    "user": "your-email@gmail.com",
    "pass": "your-password"
  }
}
```

## Important Notes

- **Never commit** SMTP passwords to git
- Passwords are stored securely in Firebase Functions config
- The sender email will be: `support@unityglobalcare.com` (configured in code)
- Make sure the SMTP account can send emails from `support@unityglobalcare.com`

