import { Shield, Award, Users, Star } from 'lucide-react'

export default function TrustIndicators() {
  const indicators = [
    {
      icon: Shield,
      text: 'HIPAA Compliant',
      description: 'Your data is secure and protected'
    },
    {
      icon: Award,
      text: 'Patent-Pending Technology',
      description: 'Innovative AI-powered insights'
    },
    {
      icon: Users,
      text: 'Trusted by 10,000+ Families',
      description: 'Proven results and peace of mind'
    },
    {
      icon: Star,
      text: 'Featured In',
      description: 'AARP, Forbes, TechCrunch'
    }
  ]

  return (
    <section className="py-12 bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {indicators.map((indicator, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-4">
                <indicator.icon className="h-6 w-6 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {indicator.text}
              </h3>
              <p className="text-sm text-gray-600">
                {indicator.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
