# How to Make verifyEmail Function Publicly Accessible

## Option 1: Via Firebase Console (Recommended)

1. **Go to Firebase Functions Console:**
   - Open: https://console.firebase.google.com/project/albertai-dev/functions
   - You should see both `sendVerificationEmail` and `verifyEmail` functions

2. **Click on `verifyEmail` function** to open its details

3. **Go to the "Permissions" tab** (or look for IAM/access settings)

4. **Add Public Access:**
   - Look for "Add Principal" or "Add Member" button
   - In the "New principals" field, type: `allUsers`
   - Select role: `Cloud Functions Invoker`
   - Click "Save" or "Add"

5. **Verify:**
   - The function should now show `allUsers` with `Cloud Functions Invoker` role
   - Try the verification link again

## Option 2: Via Google Cloud Console

1. **Go to Cloud Functions:**
   - Open: https://console.cloud.google.com/functions/list?project=albertai-dev

2. **Click on `verifyEmail` function**

3. **Go to "Permissions" tab**

4. **Click "Add Principal"**

5. **Add Public Access:**
   - New principals: `allUsers`
   - Role: `Cloud Functions Invoker`
   - Click "Save"

## Option 3: If Organization Policy Blocks Public Access

If your organization policy prevents making functions public, you have these alternatives:

### Alternative A: Use Firebase Hosting Rewrite (Current Setup)
The function should work through Firebase Hosting if configured correctly. Let me know if you want me to check the rewrite configuration.

### Alternative B: Use Firebase App Check
Configure App Check to allow unauthenticated requests from your domain.

### Alternative C: Create a Proxy Endpoint
Create a simple proxy endpoint in your frontend that calls the function server-side.

## Quick Test

After making the function public, test by visiting:
```
https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail?token=test&id=test
```

You should get a "Missing token or request ID" or "Request not found" error (not "Forbidden"), which means the function is accessible.

## Current Status

- ✅ Function is deployed: `verifyEmail`
- ✅ Function URL: `https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail`
- ❌ Function is NOT publicly accessible (needs IAM permission)
- ✅ Success page is updated with Resources invitation
- ✅ Email links point to direct function URL

## Next Steps After Making Public

1. Submit a new form at: https://albertai-dev.web.app/request-score
2. Check email for verification link
3. Click link → Should redirect to success page
4. Success page shows Resources invitation

