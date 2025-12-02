# Email Verification Testing Guide

## Test Flow Overview

1. **Form Submission** → Creates Firestore document
2. **sendVerificationEmail Function** → Triggers automatically, sends verification email
3. **User Clicks Link** → Calls verifyEmail function
4. **Confirmation Email** → Sent automatically after verification

## Step-by-Step Testing

### Test 1: Submit the Form

1. Go to: https://albertai-dev.web.app/request-score
2. Fill out the form:
   - Email: Use your test email (e.g., `paolo@coreimmersive.com`)
   - Age: Enter any age (e.g., `75`)
3. Click "Request An Aging In Place Score"
4. **Expected Result:**
   - Success message appears
   - Form clears
   - Message says: "Check your email for verification link"

### Test 2: Check Firestore

1. Go to: https://console.firebase.google.com/project/albertai-dev/firestore
2. Navigate to `scoreRequests` collection
3. **Expected Result:**
   - New document created with:
     - `email`: Your test email
     - `age`: The age you entered
     - `status`: `pending`
     - `emailVerified`: `false`
     - `createdAt`: Current timestamp
     - `verificationToken`: (should be added by function)
     - `tokenExpiresAt`: (should be 24 hours from now)

### Test 3: Check Function Execution

1. Go to: https://console.firebase.google.com/project/albertai-dev/functions
2. Click on `sendVerificationEmail`
3. Go to "Logs" tab
4. **Expected Result:**
   - See log entry: "Verification email sent to [your-email]"
   - No error messages

### Test 4: Check Email Inbox

1. Check your email inbox (and spam/junk folder)
2. **Expected Result:**
   - Email from: `support@GoAlbertai.com`
   - Subject: "Verify your email to continue with Albert.ai"
   - Contains:
     - Albert.ai logo
     - "Verify Your Email Address" heading
     - Verification button/link
     - Link expires in 24 hours

### Test 5: Click Verification Link

1. Click the verification button/link in the email
2. **Expected Result:**
   - Redirects to: `https://albertai-dev.web.app/verify-email?status=success`
   - Success message displays
   - Message says: "Your email has been verified successfully!"

### Test 6: Check Firestore After Verification

1. Go back to Firestore Console
2. Check the same document
3. **Expected Result:**
   - `emailVerified`: `true`
   - `status`: `verified`
   - `verifiedAt`: Current timestamp

### Test 7: Check Confirmation Email

1. Check your email inbox again
2. **Expected Result:**
   - Second email from: `support@GoAlbertai.com`
   - Subject: "Thank you for verifying your email - Albert.ai"
   - Contains:
     - Success checkmark
     - "Email Verified Successfully!" message
     - Information about questionnaire preparation

## Monitoring Logs in Real-Time

### Via Firebase Console:
1. Go to: https://console.firebase.google.com/project/albertai-dev/functions
2. Click on function name
3. Click "Logs" tab
4. Watch for new entries

### Via Command Line:
```bash
# Watch sendVerificationEmail logs
firebase functions:log --only sendVerificationEmail

# Watch verifyEmail logs  
firebase functions:log --only verifyEmail

# Watch all function logs
firebase functions:log
```

## Troubleshooting

### No Email Received
- Check spam/junk folder
- Verify SMTP configuration: `firebase functions:config:get`
- Check function logs for SMTP errors
- Verify email address is correct

### Function Not Triggering
- Check Firestore document was created
- Verify function is deployed: `firebase functions:list`
- Check function logs for errors
- Verify Firestore trigger path matches: `scoreRequests/{requestId}`

### Verification Link Not Working
- Check link format: Should include `token` and `id` parameters
- Verify token hasn't expired (24 hours)
- Check verifyEmail function logs
- Verify hosting rewrite rule is configured

### Email Template Issues
- Logo not showing: Verify logo URL is accessible
- Formatting issues: Check email client compatibility
- Missing content: Check emailTemplates.ts file

## Success Criteria

✅ Form submission saves to Firestore  
✅ Verification email sent within 30 seconds  
✅ Email contains correct branding and link  
✅ Verification link works correctly  
✅ Firestore document updated after verification  
✅ Confirmation email sent after verification  
✅ No errors in function logs  

## Next Steps After Testing

Once testing is successful:
1. Test with multiple email addresses
2. Test expired token (wait 24+ hours)
3. Test invalid token (modify link)
4. Test already-verified scenario (click link twice)
5. Monitor production logs for any issues

