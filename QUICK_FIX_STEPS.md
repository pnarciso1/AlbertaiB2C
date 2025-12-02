# Quick Steps to Fix Organization Policy

## Most Likely Issue: `iam.allowedPolicyMemberDomains`

This policy restricts which domains can be added as IAM members. If it's set to only allow specific domains, `allUsers` will be blocked.

## Step-by-Step Fix:

### Via Google Cloud Console:

1. **Go to Organization Policies:**
   ```
   https://console.cloud.google.com/iam-admin/orgpolicies
   ```

2. **Search for:** `iam.allowedPolicyMemberDomains`

3. **If Found:**
   - Click on the policy
   - Click "Edit" or "Override"
   - Add exception for project: `albertai-dev`
   - Set exception to "Allow all" or specifically allow `allUsers`
   - Save

4. **If Not Found at Organization Level:**
   - Go to project-level: https://console.cloud.google.com/iam-admin/orgpolicies?project=albertai-dev
   - Create new policy override
   - Set `iam.allowedPolicyMemberDomains` to allow `allUsers`

### Alternative: Check if Policy Exists

Run this to see all policies:
```bash
gcloud resource-manager org-policies list --project=albertai-dev
```

If empty, the policy might be at organization level. Check:
```bash
# Get your organization ID first
gcloud organizations list

# Then check org-level policies (replace ORG_ID)
gcloud resource-manager org-policies list --organization=ORG_ID
```

## After Changing Policy:

1. Wait 1-2 minutes for propagation
2. Try making function public again:
   ```bash
   gcloud functions add-iam-policy-binding verifyEmail \
     --region=us-central1 \
     --member="allUsers" \
     --role="roles/cloudfunctions.invoker" \
     --project=albertai-dev
   ```

3. Test:
   ```bash
   curl "https://us-central1-albertai-dev.cloudfunctions.net/verifyEmail?token=test&id=test"
   ```

## If You Still Can't Modify Policy:

The error might be something else. Check:
- Do you have "Organization Policy Admin" role?
- Is the policy set by a parent organization you don't control?
- Try creating a project-level override instead

