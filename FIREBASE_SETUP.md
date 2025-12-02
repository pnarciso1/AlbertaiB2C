# Firebase Setup Instructions

## Firestore Configuration

The RequestScore page saves form submissions to Firestore. You need to:

1. **Enable Firestore in Firebase Console**
   - Go to https://console.firebase.google.com/project/albertai-dev/firestore
   - Click "Create database"
   - Start in test mode (or production mode with proper security rules)
   - Choose a location for your database

2. **Set up Security Rules** (Recommended for production)
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /scoreRequests/{requestId} {
         allow create: if request.resource.data.email is string && 
                          request.resource.data.age is int &&
                          request.resource.data.createdAt is timestamp;
         allow read: if false; // Only admins can read
         allow update: if false;
         allow delete: if false;
       }
     }
   }
   ```

3. **Get Firebase Config Values**
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - If you don't have a web app, click "Add app" > Web
   - Copy the config values

4. **Set Environment Variables** (Optional)
   Create a `.env` file in the root directory:
   ```
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=albertai-dev.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=albertai-dev
   VITE_FIREBASE_STORAGE_BUCKET=albertai-dev.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

   Or update `src/config/firebase.ts` directly with your values.

## Collection Structure

The form saves to a collection called `scoreRequests` with this structure:
```typescript
{
  email: string,
  age: number,
  createdAt: Timestamp,
  status: 'pending'
}
```

## Testing

After setup, test the form at `/request-score` and verify data appears in Firestore Console.
