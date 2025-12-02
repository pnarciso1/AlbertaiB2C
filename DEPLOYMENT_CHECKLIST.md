# Deployment Checklist

## Pre-Deployment Checklist

### ✅ Development Setup
- [ ] Project builds successfully (`npm run build`)
- [ ] No TypeScript errors
- [ ] All components render correctly
- [ ] Responsive design works on all breakpoints
- [ ] All routes work (test with `npm run preview`)

### ✅ Firebase Setup
- [ ] Firebase CLI installed (`npx firebase --version`)
- [ ] Logged in to Firebase (`npm run firebase:login`)
- [ ] Firebase project created
- [ ] Firebase hosting initialized (`npm run firebase:init`)
- [ ] Project linked to Firebase

### ✅ Configuration Files
- [ ] `firebase.json` configured correctly
- [ ] `.firebaserc` has correct project ID
- [ ] `.firebaseignore` excludes unnecessary files
- [ ] Build output directory is `dist`

## Deployment Steps

### 1. Test Build Locally
```bash
npm run build
npm run preview
```
Visit `http://localhost:4173` to test the production build.

### 2. Deploy to Firebase
```bash
npm run deploy
```

### 3. Verify Deployment
- [ ] Visit the provided Firebase URL
- [ ] Test all pages and navigation
- [ ] Check responsive design on mobile
- [ ] Verify all images and assets load
- [ ] Test form interactions (if any)

## Post-Deployment

### ✅ Domain Setup (Optional)
- [ ] Set up custom domain in Firebase Console
- [ ] Configure SSL certificate
- [ ] Update DNS records

### ✅ Analytics (Optional)
- [ ] Set up Google Analytics
- [ ] Configure conversion tracking
- [ ] Set up event tracking

### ✅ SEO Optimization
- [ ] Add meta tags
- [ ] Set up sitemap
- [ ] Configure robots.txt
- [ ] Test with Google PageSpeed Insights

## Troubleshooting

### Common Issues

**Build Fails:**
```bash
# Check for TypeScript errors
npm run build
# Fix any errors and rebuild
```

**Firebase Login Issues:**
```bash
# Re-login to Firebase
npm run firebase:login
```

**Deployment Fails:**
```bash
# Check Firebase project status
npx firebase projects:list
# Re-initialize if needed
npm run firebase:init
```

**Website Not Loading:**
- Check Firebase Console for deployment status
- Verify build output in `dist` folder
- Check browser console for errors

## Performance Optimization

### Before Deployment
- [ ] Optimize images (WebP format)
- [ ] Enable gzip compression
- [ ] Minify CSS and JavaScript
- [ ] Remove unused dependencies

### After Deployment
- [ ] Test with Google PageSpeed Insights
- [ ] Check Core Web Vitals
- [ ] Monitor loading times
- [ ] Set up performance monitoring

## Security Checklist

- [ ] No sensitive data in client-side code
- [ ] Environment variables properly configured
- [ ] HTTPS enabled (automatic with Firebase)
- [ ] No console errors in production
- [ ] All external links are secure

## Monitoring

### Set Up Monitoring
- [ ] Google Analytics
- [ ] Firebase Analytics
- [ ] Error tracking (Sentry, etc.)
- [ ] Uptime monitoring

### Regular Checks
- [ ] Weekly performance reviews
- [ ] Monthly security audits
- [ ] Quarterly dependency updates
- [ ] Annual accessibility audits
