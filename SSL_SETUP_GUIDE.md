# SSL Certificate Setup for goalbertai.com

## Problem
Your site shows "Not Secure" because the custom domain `goalbertai.com` doesn't have an SSL certificate configured yet.

## Solution: Enable SSL via Firebase Hosting

Firebase Hosting automatically provides SSL certificates for custom domains, but you need to configure it properly.

### Step 1: Add Custom Domain in Firebase Console

1. **Go to Firebase Console:**
   - https://console.firebase.google.com/project/albertai-dev/hosting

2. **Click "Add custom domain"** (or check if it's already added)

3. **Enter your domain:**
   - `goalbertai.com`
   - Also add `www.goalbertai.com` if you want www support

4. **Follow DNS Setup Instructions:**
   Firebase will provide you with DNS records to add:
   - Usually an A record pointing to Firebase IPs
   - Or a CNAME record pointing to Firebase

### Step 2: Configure DNS Records

Go to your domain registrar (where you bought goalbertai.com) and add:

**Option A: A Records (Recommended)**
```
Type: A
Name: @ (or goalbertai.com)
Value: [IP addresses provided by Firebase]
TTL: 3600
```

**Option B: CNAME Record**
```
Type: CNAME
Name: @ (or goalbertai.com)
Value: [Firebase hosting URL provided]
TTL: 3600
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: [Firebase hosting URL provided]
TTL: 3600
```

### Step 3: Wait for SSL Certificate Provisioning

- Firebase automatically provisions SSL certificates via Let's Encrypt
- This typically takes **24-48 hours** after DNS is configured
- You'll see status in Firebase Console: "Certificate provisioning" → "Active"

### Step 4: Verify SSL is Working

Once the certificate is active:
1. Visit: `https://goalbertai.com` (note the `https://`)
2. Browser should show 🔒 "Secure" instead of "Not Secure"
3. Certificate should be valid and trusted

### Step 5: Force HTTPS Redirects

Add this to your `firebase.json` to force HTTPS:

```json
{
  "hosting": {
    "public": "dist",
    "redirects": [
      {
        "source": "**",
        "destination": "/index.html",
        "type": 200
      }
    ],
    "headers": [
      {
        "source": "**",
        "headers": [
          {
            "key": "Strict-Transport-Security",
            "value": "max-age=31536000; includeSubDomains"
          }
        ]
      }
    ]
  }
}
```

## Quick Check: Is Domain Already Configured?

Run this command to check:
```bash
firebase hosting:sites:get albertai-dev
```

Or check in Firebase Console:
- https://console.firebase.google.com/project/albertai-dev/hosting
- Look for "Custom domains" section

## Troubleshooting

### "Not Secure" Still Showing After 48 Hours

1. **Check DNS Propagation:**
   ```bash
   dig goalbertai.com
   # or
   nslookup goalbertai.com
   ```
   Verify it's pointing to Firebase IPs

2. **Check Certificate Status:**
   - Firebase Console → Hosting → Custom domains
   - Should show "Active" status

3. **Clear Browser Cache:**
   - Hard refresh: Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

4. **Try Incognito Mode:**
   - Test if it's a browser cache issue

### Domain Not Resolving

1. Verify DNS records are correct
2. Wait for DNS propagation (can take up to 48 hours)
3. Check with: https://dnschecker.org/

### Certificate Provisioning Failed

1. Verify DNS is correctly configured
2. Ensure domain is not behind a proxy/CDN that might interfere
3. Contact Firebase Support if issues persist

## Alternative: Use Firebase Default Domain (Temporary)

While waiting for SSL on custom domain, you can use:
- `https://albertai-dev.web.app` (has SSL ✅)

This is secure and works immediately.

## Need Help?

- Firebase Hosting Docs: https://firebase.google.com/docs/hosting/custom-domain
- Firebase Support: https://firebase.google.com/support

