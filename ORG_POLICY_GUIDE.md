# How to Change Organization Policy for Public Cloud Functions

## Step 1: Identify the Blocking Policy

The policy blocking public Cloud Functions is likely one of these:

1. **`iam.allowedPolicyMemberDomains`** - Restricts which domains can be added as IAM members
2. **`iam.disableServiceAccountKeyCreation`** - Blocks service account key creation
3. **`iam.disableServiceAccountCreation`** - Blocks service account creation
4. **`cloudfunctions.allowedIngressSettings`** - Controls which ingress settings are allowed
5. **`cloudfunctions.allowedVpcConnectorEgressSettings`** - Controls VPC connector settings

The most common one blocking `allUsers` is: **`iam.allowedPolicyMemberDomains`**

## Step 2: Access Organization Policies

### Via Google Cloud Console:

1. **Go to Organization Policies:**
   - Open: https://console.cloud.google.com/iam-admin/orgpolicies?project=albertai-dev
   - Or navigate: IAM & Admin → Organization Policies

2. **Find the Blocking Policy:**
   - Search for: `allowedPolicyMemberDomains` or `allUsers`
   - Look for policies with "Deny" status
   - Check policies related to IAM or Cloud Functions

3. **View Policy Details:**
   - Click on the policy to see its current configuration
   - Check if it's set at Organization, Folder, or Project level

## Step 3: Modify the Policy

### Option A: Allow allUsers for Specific Project (Recommended)

1. **Go to Project-Level Policies:**
   - In Organization Policies, filter by project: `albertai-dev`
   - Or go directly: https://console.cloud.google.com/iam-admin/orgpolicies?project=albertai-dev

2. **Find `iam.allowedPolicyMemberDomains`:**
   - Search for this policy
   - Click on it

3. **Edit Policy:**
   - Click "Edit" or "Override"
   - Change from "Inherit from parent" to "Custom"
   - Select "Allow all" or add exception for `allUsers`
   - Save

### Option B: Create Policy Exception

1. **Go to Organization Policies**
2. **Find the blocking policy**
3. **Click "Edit"**
4. **Add Exception:**
   - Click "Add Exception"
   - Select project: `albertai-dev`
   - Set exception to "Allow"
   - Save

### Option C: Modify at Organization Level (If You Have Access)

1. **Go to Organization Policies:**
   - https://console.cloud.google.com/iam-admin/orgpolicies
   - Select your organization (not a project)

2. **Find `iam.allowedPolicyMemberDomains`:**
   - This controls which domains can be added as IAM members
   - If it's set to only allow specific domains, `allUsers` will be blocked

3. **Modify Policy:**
   - Change to allow `allUsers` or add exception
   - This affects all projects, so be careful

## Step 4: Alternative - Use gcloud CLI

If console doesn't work, try via command line:

```bash
# List all organization policies for the project
gcloud resource-manager org-policies list \
  --project=albertai-dev

# Get specific policy details
gcloud resource-manager org-policies describe \
  iam.allowedPolicyMemberDomains \
  --project=albertai-dev

# Set policy to allow allUsers (if you have permissions)
gcloud resource-manager org-policies set-policy \
  iam.allowedPolicyMemberDomains.yaml \
  --project=albertai-dev
```

## Step 5: Check Policy Hierarchy

Organization policies work in a hierarchy:
1. **Organization** (highest priority)
2. **Folder**
3. **Project** (lowest priority)

If a policy is set at the organization level, you may need to:
- Override it at the project level
- Or modify it at the organization level

## Step 6: Verify Policy Change

After modifying the policy:

1. **Wait 1-2 minutes** for changes to propagate
2. **Try making the function public again:**
   ```bash
   gcloud functions add-iam-policy-binding verifyEmail \
     --region=us-central1 \
     --member="allUsers" \
     --role="roles/cloudfunctions.invoker" \
     --project=albertai-dev
   ```

3. **Test function accessibility:**
   ```bash
   curl "https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail?token=test&id=test"
   ```

## Common Policy Names to Check

Look for these policies that might block public access:

- `iam.allowedPolicyMemberDomains` - Most common blocker
- `iam.disableServiceAccountKeyCreation`
- `cloudfunctions.allowedIngressSettings`
- `compute.vmExternalIpAccess` (if using VPC)
- `compute.restrictVpcPeering` (if using VPC)

## If You Can't Modify Organization Policy

If you don't have permission to modify organization policies:

1. **Contact Super Admin:**
   - Request exception for project `albertai-dev`
   - Request to allow `allUsers` for Cloud Functions in this project

2. **Use Alternative Approach:**
   - Use Firebase Hosting rewrites (current setup, but having routing issues)
   - Create authenticated verification flow (users sign in first)
   - Use a different verification method (server-side proxy)

## Quick Reference Links

- **Organization Policies Console:** https://console.cloud.google.com/iam-admin/orgpolicies
- **Project Policies:** https://console.cloud.google.com/iam-admin/orgpolicies?project=albertai-dev
- **Cloud Functions IAM:** https://console.cloud.google.com/functions/list?project=albertai-dev
- **Policy Documentation:** https://cloud.google.com/resource-manager/docs/organization-policy/overview

## Security Considerations

When allowing `allUsers` access:

✅ **Safe for this use case because:**
- Function validates tokens before processing
- Tokens expire after 24 hours
- Only updates specific Firestore fields
- No sensitive data exposure
- Designed for public email verification links

⚠️ **Best Practices:**
- Monitor function usage
- Set up Cloud Functions quotas/limits
- Review function logs regularly
- Consider rate limiting if needed

