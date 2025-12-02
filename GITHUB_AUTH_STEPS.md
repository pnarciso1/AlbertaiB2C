# GitHub Authentication Steps

## Quick Option: Personal Access Token

### Step 1: Generate Token
1. Open: https://github.com/settings/tokens/new
2. **Note**: "AlbertaiB2C Development"
3. **Expiration**: 90 days (or your preference)
4. **Scopes**: Check ✅ `repo` (Full control of private repositories)
5. Click **"Generate token"**
6. **IMPORTANT**: Copy the token immediately - you won't see it again!

### Step 2: Push Using Token
Run this command:
```bash
git push -u origin master
```

When prompted:
- **Username**: `pnarciso1`
- **Password**: `[paste your token here]` (not your GitHub password!)

The token will be saved in your macOS keychain for future use.

---

## Alternative: SSH Authentication

If you prefer SSH (more secure, no expiration):

### Step 1: Check for SSH Key
```bash
ls -la ~/.ssh/id_*.pub
```

### Step 2: If no key exists, generate one:
```bash
ssh-keygen -t ed25519 -C "80923225+pnarciso1@users.noreply.github.com"
# Press Enter to accept default location
# Optionally set a passphrase
```

### Step 3: Add SSH key to GitHub
```bash
cat ~/.ssh/id_ed25519.pub
# Copy the output, then:
# 1. Go to: https://github.com/settings/keys
# 2. Click "New SSH key"
# 3. Paste the key
# 4. Click "Add SSH key"
```

### Step 4: Switch remote to SSH and push
```bash
git remote set-url origin git@github.com:pnarciso1/AlbertaiB2C.git
git push -u origin master
```

---

## Troubleshooting

If you get "Permission denied" errors:
- Make sure your token has `repo` scope
- Verify your username is correct: `pnarciso1`
- Check that the repository exists and you have push access

If token doesn't work:
- Try generating a new token
- Make sure you copied the entire token (no spaces)
- Check token hasn't expired
