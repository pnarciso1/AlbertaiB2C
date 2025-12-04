export const getVerificationEmailTemplate = (verificationLink: string, logoUrl: string) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verify Your Email - ALBERTai</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 20px 20px;">
              <img src="${logoUrl}" alt="ALBERTai" style="max-width: 200px; height: auto;" />
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <h1 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 20px; line-height: 1.2;">
                Verify Your Email Address
              </h1>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Thank you for requesting an Aging In Place Score™. To continue, please verify your email address by clicking the button below.
              </p>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                This link will expire in 24 hours for your security.
              </p>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 0 0 30px;">
                    <a href="${verificationLink}" style="display: inline-block; padding: 14px 32px; background-color: #f27607; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                      Verify Email Address
                    </a>
                  </td>
                </tr>
              </table>
              
              <!-- Alternative Link -->
              <p style="color: #6b7280; font-size: 14px; line-height: 1.6; margin: 0 0 20px;">
                If the button doesn't work, copy and paste this link into your browser:
              </p>
              <p style="color: #3b82f6; font-size: 14px; word-break: break-all; margin: 0 0 30px;">
                ${verificationLink}
              </p>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
              <p style="color: #6b7280; font-size: 12px; line-height: 1.6; margin: 0 0 10px;">
                If you didn't request this email, you can safely ignore it.
              </p>
              <p style="color: #6b7280; font-size: 12px; line-height: 1.6; margin: 0;">
                © ${new Date().getFullYear()} ALBERTai. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export const getConfirmationEmailTemplate = (logoUrl: string) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Email Verified - ALBERTai</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 20px 20px;">
              <img src="${logoUrl}" alt="ALBERTai" style="max-width: 200px; height: auto;" />
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <div style="text-align: center; margin-bottom: 30px;">
                <div style="display: inline-block; width: 64px; height: 64px; background-color: #10b981; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 20px;">
                  <span style="color: #ffffff; font-size: 32px;">✓</span>
                </div>
              </div>
              
              <h1 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 20px; line-height: 1.2; text-align: center;">
                Email Verified Successfully!
              </h1>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px; text-align: center;">
                Thank you for verifying your email address. Your request for an Aging In Place Score™ has been received.
              </p>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 30px; text-align: center;">
                Our team is now preparing your personalized questionnaire. We'll contact you directly via email when your questionnaire is ready with instructions on how to provide the information needed to get your loved one's Aging In Place Score.
              </p>
              
              <div style="background-color: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <p style="color: #1e40af; font-size: 14px; line-height: 1.6; margin: 0;">
                  <strong>What's Next?</strong><br>
                  We'll review your request and prepare a customized questionnaire based on your specific situation. You can expect to hear from us within 1-2 business days.
                </p>
              </div>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
              <p style="color: #6b7280; font-size: 12px; line-height: 1.6; margin: 0 0 10px;">
                If you have any questions, please contact us at <a href="mailto:support@GoAlbertai.com" style="color: #3b82f6; text-decoration: none;">support@GoAlbertai.com</a>
              </p>
              <p style="color: #6b7280; font-size: 12px; line-height: 1.6; margin: 0;">
                © ${new Date().getFullYear()} ALBERTai. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

export const getNewsletterWelcomeEmailTemplate = (logoUrl: string) => {
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to ALBERTai Newsletter</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td align="center" style="padding: 40px 20px 20px;">
              <img src="${logoUrl}" alt="ALBERTai" style="max-width: 200px; height: auto;" />
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 40px;">
              <h1 style="color: #1f2937; font-size: 28px; font-weight: 700; margin: 0 0 20px; line-height: 1.2;">
                Welcome to ALBERTai!
              </h1>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 20px;">
                Thank you for subscribing to our newsletter! We're excited to share valuable insights, tips, and updates about aging in place and caregiving.
              </p>
              <p style="color: #4b5563; font-size: 16px; line-height: 1.6; margin: 0 0 30px;">
                You'll receive regular updates including:
              </p>
              
              <ul style="color: #4b5563; font-size: 16px; line-height: 1.8; margin: 0 0 30px; padding-left: 20px;">
                <li>Expert articles on aging in place and caregiving</li>
                <li>Tips for improving your loved one's Aging In Place Score™</li>
                <li>Latest research and insights on senior care</li>
                <li>Updates on new features and resources</li>
                <li>Success stories from families like yours</li>
              </ul>
              
              <div style="background-color: #f0f9ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 30px 0; border-radius: 4px;">
                <p style="color: #1e40af; font-size: 14px; line-height: 1.6; margin: 0;">
                  <strong>New to ALBERTai?</strong><br>
                  Get started by requesting your loved one's Aging In Place Score™. It's free, confidential, and takes just a few minutes.
                </p>
              </div>
              
              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td align="center" style="padding: 0 0 30px;">
                    <a href="https://goalbertai.com/request-score" style="display: inline-block; padding: 14px 32px; background-color: #f27607; color: #ffffff; text-decoration: none; border-radius: 6px; font-weight: 600; font-size: 16px;">
                      Request Your Aging In Place Score
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 30px 40px; background-color: #f9fafb; border-radius: 0 0 8px 8px;">
              <p style="color: #6b7280; font-size: 12px; line-height: 1.6; margin: 0 0 10px;">
                You're receiving this email because you subscribed to the ALBERTai newsletter. If you'd like to unsubscribe, please contact us at <a href="mailto:support@goalbert.ai" style="color: #3b82f6; text-decoration: none;">support@goalbert.ai</a>
              </p>
              <p style="color: #6b7280; font-size: 12px; line-height: 1.6; margin: 0;">
                © ${new Date().getFullYear()} ALBERTai. All rights reserved.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

