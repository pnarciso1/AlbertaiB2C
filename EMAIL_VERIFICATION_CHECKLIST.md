# Email Verification Setup Checklist

## Prerequisites

- [ ] **Firebase Blaze Plan Upgrade** (Required for Cloud Functions)
  - Visit: https://console.firebase.google.com/project/albertai-dev/usage/details
  - Upgrade to Blaze (pay-as-you-go) plan
  - Note: Free tier includes generous limits; you only pay for actual usage
  - Estimated cost: ~$0-5/month for low volume email sending

## Step 1: SMTP Credentials ✅ COMPLETED

SMTP credentials have been obtained:

- ✅ **SMTP Host**: `netsol-smtp-oxcs.hostingplatform.com`
- ✅ **SMTP Port**: `587` (Start TLS - preferred) or `465` (SSL)
- ✅ **SMTP Username**: `support@GoAlbertai.com`
- ✅ **SMTP Password**: Configured
- ✅ **Authentication Method**: Username/password

## Step 2: Configure Firebase Functions

Run these commands to set SMTP configuration:

```bash
# Navigate to project root
cd /Users/vjpn/Desktop/Albertai

# Set SMTP configuration
firebase functions:config:set \
  smtp.host="netsol-smtp-oxcs.hostingplatform.com" \
  smtp.port="587" \
  smtp.user="support@GoAlbertai.com" \
  smtp.pass="B2Cai1!$2025"

# Verify configuration
firebase functions:config:get
```

**Expected Output:**
```json
{
  "smtp": {
    "host": "netsol-smtp-oxcs.hostingplatform.com",
    "port": "587",
    "user": "support@GoAlbertai.com",
    "pass": "B2Cai1!$2025"
  }
}
```

**Note**: If port 587 doesn't work, you can switch to port 465 (SSL):
```bash
firebase functions:config:set smtp.port="465"
# Then update functions/src/index.ts: secure: true (instead of false)
```

## Step 3: Build and Deploy Functions

```bash
# Build Functions (TypeScript compilation)
cd functions
npm run build

# Return to project root
cd ..

# Deploy Functions
firebase deploy --only functions
```

**Expected Output:**
- ✅ Functions deployed successfully
- Functions available:
  - `sendVerificationEmail` (triggered on Firestore create)
  - `verifyEmail` (HTTP endpoint)

## Step 4: Verify Deployment

- [ ] Check Firebase Console: https://console.firebase.google.com/project/albertai-dev/functions
- [ ] Verify both functions are listed and active
- [ ] Check Functions logs for any errors

## Step 5: Test Email Flow

### Test 1: Form Submission
- [ ] Go to: https://albertai-dev.web.app/request-score
- [ ] Fill out form with test email
- [ ] Submit form
- [ ] Verify success message appears
- [ ] Check Firestore Console for new document in `scoreRequests` collection

### Test 2: Verification Email
- [ ] Check email inbox (and spam folder)
- [ ] Verify email received with Albert.ai branding
- [ ] Verify email contains verification link
- [ ] Click verification link

### Test 3: Email Verification
- [ ] Should redirect to `/verify-email?status=success`
- [ ] Verify success message displays
- [ ] Check Firestore - document should have `emailVerified: true`
- [ ] Check email for confirmation email

### Test 4: Confirmation Email
- [ ] Verify confirmation email received
- [ ] Check email contains correct messaging about questionnaire preparation

## Step 6: Error Scenarios Testing

- [ ] **Expired Token**: Wait 24+ hours, try old verification link → Should show expired message
- [ ] **Invalid Token**: Modify token in URL → Should show invalid token message
- [ ] **Already Verified**: Click same verification link twice → Should show already verified message
- [ ] **Missing Parameters**: Visit `/verify-email` without token → Should handle gracefully

## Step 7: Monitor Functions Logs

```bash
# View real-time logs
firebase functions:log

# View logs for specific function
firebase functions:log --only sendVerificationEmail
firebase functions:log --only verifyEmail
```

**What to Look For:**
- ✅ "Verification email sent to [email]"
- ✅ "Confirmation email sent to [email]"
- ❌ Any error messages (SMTP errors, Firestore errors, etc.)

## Troubleshooting

### Emails Not Sending

**Check 1: SMTP Configuration**
```bash
firebase functions:config:get
```
- Verify all SMTP values are set correctly
- Check password doesn't have extra spaces

**Check 2: Functions Logs**
```bash
firebase functions:log
```
- Look for SMTP authentication errors
- Check for connection timeouts

**Check 3: SMTP Credentials**
- Verify username/password are correct
- For Gmail: Must use App Password, not regular password
- For Office 365: May need App Password if MFA enabled
- Test credentials with email client first

**Check 4: Firewall/Network**
- Ensure Firebase Functions can reach SMTP server
- Check if SMTP server requires IP whitelisting

### Verification Link Not Working

**Check 1: Function Deployment**
- Verify `verifyEmail` function is deployed
- Check Firebase Console > Functions

**Check 2: Hosting Rewrite**
- Verify `firebase.json` has rewrite rule for `/verify-email`
- Should route to `verifyEmail` function

**Check 3: Base URL**
- Check `functions/src/index.ts` - baseUrl should be `https://albertai-dev.web.app`
- Verify logo URL is accessible

### Logo Not Showing in Emails

- [ ] Verify logo exists at: `/images/logos/AlbertAI_Tagline_Color_R.png`
- [ ] Test logo URL: https://albertai-dev.web.app/images/logos/AlbertAI_Tagline_Color_R.png
- [ ] Ensure logo is publicly accessible (not behind authentication)

## Production Checklist

Before going live:

- [ ] All tests pass (Steps 5-6)
- [ ] SMTP credentials are production-ready
- [ ] Email templates reviewed and approved
- [ ] Logo displays correctly in emails
- [ ] Verification links work correctly
- [ ] Error handling works for all scenarios
- [ ] Functions logs monitored for errors
- [ ] Firestore rules deployed and working
- [ ] Base URL updated if using different domain

## Support Contacts

- **Firebase Support**: https://firebase.google.com/support
- **Email Issues**: Check Functions logs first, then contact IT
- **SMTP Issues**: Contact IT team for SMTP server support

## Quick Reference Commands

```bash
# View SMTP config
firebase functions:config:get

# Update SMTP config
firebase functions:config:set smtp.host="..." smtp.port="..." smtp.user="..." smtp.pass="..."

# Build Functions
cd functions && npm run build && cd ..

# Deploy Functions
firebase deploy --only functions

# View Functions logs
firebase functions:log

# Deploy everything
firebase deploy
```

## Notes

- **SMTP Password Security**: Passwords are stored securely in Firebase Functions config (encrypted)
- **Email Rate Limits**: Most SMTP servers have rate limits (e.g., Gmail: 500 emails/day)
- **Cost**: Firebase Functions free tier includes 2 million invocations/month
- **Email Delivery**: May take a few seconds to a few minutes depending on SMTP server

---

**Last Updated**: December 2024
**Status**: SMTP credentials received - Ready to configure and deploy
**Next Step**: Run Step 2 commands to configure Firebase Functions, then deploy

