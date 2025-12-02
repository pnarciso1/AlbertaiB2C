import { useState } from 'react'
import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card } from '@/components/ui/card'
import { ArrowRight, CheckCircle2, Mail, Calendar, Users, Shield, TrendingUp, Heart } from 'lucide-react'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '@/config/firebase'

export default function RequestScore() {
  const [email, setEmail] = useState('')
  const [age, setAge] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [submittedEmail, setSubmittedEmail] = useState('')
  const [error, setError] = useState('')

  useSEO({
    title: 'Request An Aging In Place Score - ALBERTai',
    description: 'Request your loved one\'s Aging In Place Score™. Simple, secure, and personalized assessment to help you make confident decisions about aging in place.',
    keywords: 'aging in place score, request score, elder care assessment, caregiver assessment'
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Validation
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address')
      return
    }
    
    if (!age || parseInt(age) < 1 || parseInt(age) > 150) {
      setError('Please enter a valid age')
      return
    }

    setIsSubmitting(true)

    try {
      // Save to Firestore
      await addDoc(collection(db, 'scoreRequests'), {
        email: email.trim(),
        age: parseInt(age),
        createdAt: serverTimestamp(),
        status: 'pending',
        emailVerified: false
      })

      setSubmittedEmail(email.trim())
      setIsSuccess(true)
      setEmail('')
      setAge('')
      // Note: Verification email will be sent automatically via Cloud Function
    } catch (err) {
      console.error('Error submitting request:', err)
      setError('Something went wrong. Please try again or contact support@goalbertai.com')
    } finally {
      setIsSubmitting(false)
    }
  }

  const benefits = [
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Your information is protected with HIPAA-compliant security'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Get objective assessments based on comprehensive data analysis'
    },
    {
      icon: Heart,
      title: 'Personalized Guidance',
      description: 'Receive tailored recommendations for your specific situation'
    },
    {
      icon: Users,
      title: 'Family Collaboration',
      description: 'Invite family members to contribute observations and insights'
    }
  ]

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-20">
        <Card className="max-w-2xl mx-auto p-8 lg:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
            <CheckCircle2 className="h-10 w-10 text-green-600" />
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Request Received!
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Thank you for requesting an Aging In Place Score™. We've received your request!
          </p>
          <p className="text-gray-600 mb-8">
            Please check your email at <strong>{submittedEmail}</strong> to verify your email address. We've sent you a verification link that will expire in 24 hours.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-left">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-blue-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-blue-900 mb-1">Next Steps</h3>
                <p className="text-sm text-blue-800">
                  Click the verification link in your email to continue. After verification, our team will prepare your personalized questionnaire and contact you when it's ready.
                </p>
              </div>
            </div>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-4"
            onClick={() => setIsSuccess(false)}
          >
            Submit Another Request
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-500 to-secondary-500 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            Request an Aging In Place Score
          </h1>
          <p className="text-xl lg:text-2xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Understanding how well your loved one is aging in place should not feel complicated. 
            ALBERTai begins with two simple pieces of information: your email and the age of the person you care for.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Content */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  How It Works
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  We prepare a tailored questionnaire and send you a secure login when everything is ready.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Inside your account, you will answer thoughtful questions about health, daily function, environment, and emotional wellbeing. ALBERTai then generates the Aging In Place Score and a personalized care plan with clear first steps.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Ongoing Support
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  The support continues long after the score is delivered. ALBERTai monitors patterns in safety, cognition, and independence. When something changes, you receive timely updates and guidance. Recommendations may include small home adjustments or supportive services that extend your loved one's ability to remain at home.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  You can also add other family members or care partners. Their observations add depth to the insights and help the score evolve with real life.
                </p>
              </div>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-200">
                <p className="text-lg text-gray-900 font-semibold mb-2">
                  A clear starting point. A continuous source of guidance. A partner in keeping your loved one safe and independent.
                </p>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-1">
              <Card className="p-6 lg:p-8 sticky top-24">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Begin the Request
                </h3>
                <p className="text-gray-600 mb-6">
                  Share your email and age of the person you care for.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="email" className="flex items-center gap-2 mb-2">
                      <Mail className="h-4 w-4 text-gray-500" />
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  <div>
                    <Label htmlFor="age" className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-gray-500" />
                      Age of Person You Care For
                    </Label>
                    <Input
                      id="age"
                      type="number"
                      placeholder="65"
                      min="1"
                      max="150"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full text-lg px-8 py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit'}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting, you agree to our Privacy Policy and Terms of Service. 
                    We'll never share your information with third parties.
                  </p>
                </form>
              </Card>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-lg mb-4">
                  <benefit.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

