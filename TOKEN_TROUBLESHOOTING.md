# GitHub Token Troubleshooting

## Common Issues:

1. **Token Not Copied Correctly**
   - Make sure you copied the ENTIRE token (starts with `ghp_` or `github_pat_`)
   - No extra spaces before/after
   - Token is about 40+ characters long

2. **Token Missing 'repo' Scope**
   - Go to: https://github.com/settings/tokens
   - Find your token
   - Make sure it has ✅ `repo` scope checked
   - If not, delete it and create a new one

3. **Token Expired**
   - Check expiration date
   - Create a new token if expired

## Step-by-Step Token Creation:

1. Go to: https://github.com/settings/tokens/new
2. **Note**: "AlbertaiB2C Development"
3. **Expiration**: 90 days
4. **Scopes**: Check ONLY these:
   - ✅ `repo` (Full control of private repositories)
   - ✅ `workflow` (if you plan to use GitHub Actions)
5. Click **"Generate token"**
6. **IMMEDIATELY COPY** the token (you won't see it again!)

## Testing Your Token:

Replace YOUR_TOKEN with your actual token:

```bash
curl -H "Authorization: token YOUR_TOKEN" https://api.github.com/user
```

Should return your user info, not "Bad credentials"

## Using Token with Git:

### Method 1: In URL (replace YOUR_TOKEN)
```bash
git push https://pnarciso1:YOUR_TOKEN@github.com/pnarciso1/AlbertaiB2C.git master
```

### Method 2: Using Git Credential Helper
```bash
git config --global credential.helper store
git push -u origin master
# When prompted:
# Username: pnarciso1
# Password: [paste token]
```

### Method 3: Set Remote with Token
```bash
git remote set-url origin https://pnarciso1:YOUR_TOKEN@github.com/pnarciso1/AlbertaiB2C.git
git push -u origin master
```

