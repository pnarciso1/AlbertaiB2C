# Changelog

## [2024-12-01] - Branding Updates, Content Improvements, and Infrastructure Changes

### Branding & Visual Updates

#### Logo Implementation
- **Replaced icon-based logo with actual logo image** (`AlbertAI_Tagline_Color_R.png`)
  - Updated Header component to use logo image instead of Shield icon
  - Updated Footer component to use logo image instead of Shield icon
  - Logo path: `/images/logos/AlbertAI_Tagline_Color_R.png`
  - Logo size: `h-20 md:h-[100px]` (80px mobile, 100px desktop) - 25% larger than initial size

#### Favicon
- **Created square favicon from logo**
  - Generated multiple sizes: 16x16, 32x32, 512x512 pixels
  - Files created:
    - `/public/favicon-16.png`
    - `/public/favicon-32.png`
    - `/public/favicon.png` (default)
    - `/public/images/logos/favicon-512.png` (Apple touch icon)
  - Updated `index.html` with proper favicon links for all browsers and devices

#### Brand Name Standardization
- **Replaced all instances of "Albert.ai" with "ALBERTai"** throughout the entire codebase
  - Updated in all page components (Home, About, Support, Pricing, Resources, etc.)
  - Updated in all shared components (Header, Footer, SocialProof, etc.)
  - Updated in Cloud Functions email templates
  - Updated in data files (articles.ts)
  - Updated in public files (robots.txt)
  - Total: 100+ replacements across 20+ files

### Content Updates

#### Support Page (`/support`)
- **Updated contact email**: Changed from `support@unityglobalcare.com` to `support@goalbertai.com`
  - Updated in "Contact us anytime" section
  - Updated in FAQ section ("How do I contact support?")
  - Updated in contact support section
- **Added phone number**: `800-314-0255`
  - Added to "Contact us anytime" section with phone icon
  - Added to FAQ answer for "How do I contact support?"

#### Home Page
- **Updated video**: Replaced `AAI_FINAL_v1.mov` with `AAI_FINAL_UNCOMPRESSED.mp4`
  - Video path: `/videos/AAI_FINAL_UNCOMPRESSED.mp4`
  - Note: Video file is 1.7GB, hosted on Firebase Cloud Storage due to Firebase Hosting 100MB limit
  - Cloud Storage bucket: `gs://albertai-dev-videos/videos/`
  - Public URL: `https://storage.googleapis.com/albertai-dev-videos/videos/AAI_FINAL_UNCOMPRESSED.mp4`

#### Testimonials Section
- **Changed "Video Testimonials" to "Family Testimonials"**
- **Replaced video placeholders with actual photos**
  - Sarah Johnson: `/images/testimonials/Sarah Johnson.jpg`
  - Michael Chen: `/images/testimonials/Michael Chen.jpg`
  - Lisa Rodriguez: `/images/testimonials/Lisa Rodrigues.jpg`
- Removed Play icon and duration displays
- Updated component name from `videoTestimonials` to `familyTestimonials`

#### About Page - Team Section
- **Added team member photos**:
  - Dave Duplay: `/images/team/Dave-3.jpg`
  - Peter Umekubo: `/images/team/Peter_Umekubo Photo 082925.jpg`
  - Farzad Enayati: `/images/team/Farzad.jpg`
  - Paolo Narciso: `/images/team/paolo.png`
- Replaced placeholder icons with actual photos
- Images displayed at 128x128px with rounded corners

### Infrastructure Changes

#### Firebase Cloud Storage
- **Created new bucket**: `albertai-dev-videos`
  - Location: `us-central1`
  - Storage class: `STANDARD`
  - Made publicly accessible for video hosting
  - Used to host large video file (1.7GB) that exceeds Firebase Hosting limits

#### Firestore Security Rules
- **Updated read permissions**:
  - Changed from `allow read: if false;` to `allow read: if request.auth != null;`
  - Allows authenticated admins to view documents in Firebase Console
  - Public users still cannot read (create-only access)

### Files Modified

#### Components
- `src/components/layout/Header.tsx` - Logo implementation and size increase
- `src/components/layout/Footer.tsx` - Logo implementation and size increase
- `src/components/home/Hero.tsx` - Video source update
- `src/components/home/SocialProof.tsx` - Testimonials section updates

#### Pages
- `src/pages/Support.tsx` - Email and phone number updates
- `src/pages/About.tsx` - Team member photos
- `src/pages/VerifyEmail.tsx` - Brand name updates
- `src/pages/RequestScore.tsx` - Brand name updates
- `src/pages/Privacy.tsx` - Brand name updates
- `src/pages/HowItWorks.tsx` - Brand name updates
- `src/pages/AgingInPlaceScore.tsx` - Brand name updates
- `src/pages/Pricing.tsx` - Brand name updates
- `src/pages/Resources.tsx` - Brand name updates
- `src/pages/Home.tsx` - Brand name updates
- `src/pages/ArticlePage.tsx` - Brand name and logo URL updates

#### Data & Config
- `src/data/articles.ts` - Brand name updates
- `functions/src/index.ts` - Brand name updates in email functions
- `functions/src/emailTemplates.ts` - Brand name updates in email templates
- `public/robots.txt` - Brand name updates
- `index.html` - Favicon configuration
- `firestore.rules` - Read permissions update

#### New Files Created
- `public/favicon-16.png` - 16x16 favicon
- `public/favicon-32.png` - 32x32 favicon
- `public/favicon.png` - Default favicon (32x32)
- `public/images/logos/favicon-512.png` - Apple touch icon

### Technical Notes

#### Video Hosting
- Firebase Hosting has a 100MB file size limit per file
- Video file (`AAI_FINAL_UNCOMPRESSED.mp4`) is 1.7GB, exceeding this limit
- Solution: Host video on Firebase Cloud Storage and reference via public URL
- Video URL updated in `Hero.tsx` to point to Cloud Storage
- Upload process may take 5-15 minutes depending on connection speed

#### Email Verification Flow
- Email verification system is fully functional
- Verification emails sent from: `support@GoAlbertai.com`
- Confirmation emails sent after successful verification
- All email templates use ALBERTai branding

### Deployment Status
- ✅ All frontend changes deployed
- ✅ Firestore rules updated
- ✅ Cloud Functions deployed (with ALBERTai branding)
- ⏳ Video upload to Cloud Storage in_progress: uploading_)

### Testing Checklist
- [x] Logo displays correctly in header and footer
- [x] Favicon displays in browser tab
- [x] Support page shows correct email and phone number
- [x] Family testimonials display photos correctly
- [x] Team member photos display on About page
- [x] Brand name "ALBERTai" appears consistently throughout site
- [ ] Video plays correctly (pending Cloud Storage upload completion)

### Next Steps
1. Monitor video upload to Cloud Storage
2. Test video playback once upload completes
3. Consider compressing video for faster loading times
4. Verify all email links work correctly with new branding

