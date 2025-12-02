import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as nodemailer from 'nodemailer'
import { getVerificationEmailTemplate, getConfirmationEmailTemplate } from './emailTemplates'
import * as crypto from 'node:crypto'

admin.initializeApp()

// Configure email transporter (using SMTP)
// SMTP settings configured via Firebase Functions config
const getEmailTransporter = () => {
  const config = functions.config().smtp
  
  return nodemailer.createTransport({
    host: config?.host || 'netsol-smtp-oxcs.hostingplatform.com',
    port: parseInt(config?.port || '587'),
    secure: false, // false for 587 (Start TLS), true for 465 (SSL)
    requireTLS: true, // Require TLS for port 587
    auth: {
      user: config?.user || 'support@GoAlbertai.com',
      pass: config?.pass || '',
    },
  })
}

// Generate secure verification token
const generateVerificationToken = (): string => {
  return crypto.randomBytes(32).toString('hex')
}

// Send verification email when a new score request is created
export const sendVerificationEmail = functions.firestore
  .document('scoreRequests/{requestId}')
  .onCreate(async (snap, context) => {
    const data = snap.data()
    const requestId = context.params.requestId
    
    // Skip if already verified
    if (data.emailVerified) {
      return null
    }
    
    // Generate verification token
    const verificationToken = generateVerificationToken()
    const tokenExpiresAt = new Date()
    tokenExpiresAt.setHours(tokenExpiresAt.getHours() + 24) // 24 hours from now
    
    // Save token to Firestore
    await snap.ref.update({
      verificationToken,
      tokenExpiresAt: admin.firestore.Timestamp.fromDate(tokenExpiresAt),
    })
    
    // Create verification link - point directly to frontend page which will call the function
    const baseUrl = 'https://albertai-dev.web.app' // Update with your production URL
    // Frontend page will handle calling the function via HTTP
    const verificationLink = `${baseUrl}/verify-email?token=${verificationToken}&id=${requestId}`
    
    // Logo URL (publicly accessible)
    const logoUrl = `${baseUrl}/images/logos/AlbertAI_Tagline_Color_R.png`
    
    // Email content
    const emailHtml = getVerificationEmailTemplate(verificationLink, logoUrl)
    
    // Send email
    const transporter = getEmailTransporter()
    
    try {
      await transporter.sendMail({
        from: '"ALBERTai" <support@GoAlbertai.com>',
        to: data.email,
        subject: 'Verify your email to continue with ALBERTai',
        html: emailHtml,
      })
      
      console.log(`Verification email sent to ${data.email}`)
      return null
    } catch (error) {
      console.error('Error sending verification email:', error)
      throw new functions.https.HttpsError('internal', 'Failed to send verification email')
    }
  })

// HTTP function to verify email
export const verifyEmail = functions.https.onRequest(async (req, res) => {
  const { token, id } = req.query
  const baseUrl = 'https://albertai-dev.web.app'
  
  // Set CORS headers to allow requests from the frontend
  res.set('Access-Control-Allow-Origin', '*')
  res.set('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.set('Access-Control-Allow-Headers', 'Content-Type')
  
  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(204).send('')
    return
  }
  
  if (!token || !id) {
    res.status(400).send('Missing token or request ID')
    return
  }
  
  try {
    const db = admin.firestore()
    const requestRef = db.collection('scoreRequests').doc(id as string)
    const requestDoc = await requestRef.get()
    
    if (!requestDoc.exists) {
      res.status(404).send('Request not found')
      return
    }
    
    const data = requestDoc.data()!
    
    // Check if already verified
    if (data.emailVerified) {
      res.redirect(`${baseUrl}/verify-email?status=already-verified`)
      return
    }
    
    // Check token match
    if (data.verificationToken !== token) {
      res.redirect(`${baseUrl}/verify-email?status=invalid-token`)
      return
    }
    
    // Check expiration
    const tokenExpiresAt = data.tokenExpiresAt?.toDate()
    if (!tokenExpiresAt || tokenExpiresAt < new Date()) {
      res.redirect(`${baseUrl}/verify-email?status=expired`)
      return
    }
    
    // Mark as verified
    await requestRef.update({
      emailVerified: true,
      verifiedAt: admin.firestore.FieldValue.serverTimestamp(),
      status: 'verified',
    })
    
    // Send confirmation email
    const logoUrl = `${baseUrl}/images/logos/AlbertAI_Tagline_Color_R.png`
    const emailHtml = getConfirmationEmailTemplate(logoUrl)
    
    const transporter = getEmailTransporter()
    
    try {
      await transporter.sendMail({
        from: '"ALBERTai" <support@GoAlbertai.com>',
        to: data.email,
        subject: 'Thank you for verifying your email - ALBERTai',
        html: emailHtml,
      })
      
      console.log(`Confirmation email sent to ${data.email}`)
    } catch (emailError) {
      console.error('Error sending confirmation email:', emailError)
      // Don't fail the verification if email fails
    }
    
    // Redirect to success page (frontend React page)
    res.redirect(`${baseUrl}/verify-email?status=success`)
    return
  } catch (error) {
    console.error('Error verifying email:', error)
    res.status(500).send('Internal server error')
    return
  }
})

