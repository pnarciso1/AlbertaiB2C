import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBUEONJfeqnjZkU-kd-PUcnPDV6bajZYwg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "albertai-dev.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "albertai-dev",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "albertai-dev.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "120158242937",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:120158242937:web:ad1606e02b7ddac09ceca8"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

export default app

