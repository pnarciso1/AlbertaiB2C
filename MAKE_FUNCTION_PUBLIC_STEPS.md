# How to Make verifyEmail Function Publicly Accessible

## Method 1: Via Google Cloud Console (Recommended)

1. **Go to Cloud Functions:**
   - Open: https://console.cloud.google.com/functions/list?project=albertai-dev
   - Make sure you're in the correct project: `albertai-dev`

2. **Click on `verifyEmail` function** (not `sendVerificationEmail`)

3. **Go to "Permissions" tab** (at the top of the function details page)

4. **Click "Add Principal" button**

5. **Add Public Access:**
   - In the "New principals" field, type exactly: `allUsers`
   - Click on the role dropdown and select: `Cloud Functions Invoker`
   - Click "Save"

6. **Verify:**
   - You should see `allUsers` listed with role `Cloud Functions Invoker`
   - The function is now publicly accessible

## Method 2: Via Firebase Console

1. **Go to Firebase Functions:**
   - Open: https://console.firebase.google.com/project/albertai-dev/functions

2. **Click on `verifyEmail` function**

3. **Look for "Permissions" or "Access" section** (may be in a tab or sidebar)

4. **Add Public Access:**
   - Click "Add Principal" or "Add Member"
   - Principal: `allUsers`
   - Role: `Cloud Functions Invoker`
   - Save

## Method 3: Via gcloud CLI (If Console Doesn't Work)

If you're getting errors in the console, try via command line:

```bash
# Make sure you're authenticated
gcloud auth login

# Set the project
gcloud config set project albertai-dev

# Add public access to the function
gcloud functions add-iam-policy-binding verifyEmail \
  --region=us-central1 \
  --member="allUsers" \
  --role="roles/cloudfunctions.invoker"
```

**Note:** If this fails with organization policy errors, you may need to:
- Contact your Google Workspace admin to allow public Cloud Functions
- Or use an alternative approach (see below)

## Troubleshooting

### Error: "IAM policy update failed" or "Precondition error"

This usually means:
1. The function is in a transitional state (wait 1-2 minutes and try again)
2. Organization policy is blocking public access
3. You don't have sufficient permissions

**Solutions:**
- Wait a few minutes and retry
- Check if you have "Cloud Functions Admin" or "Owner" role
- Check organization policies: https://console.cloud.google.com/iam-admin/orgpolicies

### Error: "allUsers is not in permitted organization"

This means your organization policy blocks public access. Options:

**Option A: Request Policy Exception**
- Contact your Google Workspace/Cloud Identity admin
- Request exception for this specific function
- Or request to allow `allUsers` for Cloud Functions in this project

**Option B: Use Firebase Hosting Rewrite (Current Setup)**
- The function should work through Firebase Hosting rewrites
- But we've been having routing issues with this approach

**Option C: Use Authenticated Access**
- Make the function require authentication
- Users would need to sign in to verify email (not ideal for email verification)

## Verify It's Working

After making the function public, test it:

1. **Direct Function URL Test:**
   ```
   https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail?token=test&id=test
   ```
   - Should return: "Missing token or request ID" or "Request not found"
   - Should NOT return: "Forbidden" or "403"

2. **Full Flow Test:**
   - Submit form at: https://albertai-dev.web.app/request-score
   - Check email for verification link
   - Click link → Should redirect to success page

## Current Function Details

- **Function Name:** `verifyEmail`
- **Region:** `us-central1`
- **Runtime:** Node.js 20
- **Type:** HTTP (1st Gen)
- **Direct URL:** `https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail`

## Security Note

Making the function public is safe because:
- It validates tokens before processing
- It checks expiration (24 hours)
- It validates request IDs
- It only updates specific Firestore fields
- No sensitive data is exposed

The function is designed to be publicly accessible for email verification links.

