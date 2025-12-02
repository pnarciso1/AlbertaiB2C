import { Link } from 'react-router-dom'
import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { 
  Database, 
  Brain, 
  Target, 
  Bell, 
  Activity, 
  Heart, 
  Smartphone, 
  Mic, 
  Monitor,
  Users,
  Shield,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'

export default function HowItWorks() {
  useSEO({
    title: 'How ALBERTai Works - 4 Simple Steps to Peace of Mind | ALBERTai',
    description: 'Learn how ALBERTai works in 4 simple steps. Gather data from existing sources, compute the Aging In Place Score™, receive personalized recommendations, and get ongoing monitoring.',
    keywords: 'how albert.ai works, aging in place monitoring, senior care technology, elder care platform, health monitoring system'
  })
  const steps = [
    {
      number: 1,
      title: "Gather What You Already Have",
      icon: Database,
      description: "ALBERTai connects to the sources you already use:",
      features: [
        { icon: Heart, text: "Health devices" },
        { icon: Activity, text: "Activity monitors" },
        { icon: Mic, text: "Voice or facial wellness signals" },
        { icon: Monitor, text: "Remote patient monitoring tools" },
        { icon: Users, text: "Caregiver inputs" }
      ],
      highlight: "You don't need new hardware — just tell us what's available."
    },
    {
      number: 2,
      title: "ALBERTai Computes the Aging In Place Score™",
      icon: Brain,
      description: "Our patent-pending AI analyzes patterns in:",
      features: [
        { icon: Activity, text: "Mobility changes" },
        { icon: Brain, text: "Cognitive signals" },
        { icon: Users, text: "Emotional and social engagement" },
        { icon: Smartphone, text: "Home activity patterns" },
        { icon: Heart, text: "Health and biometric data" }
      ],
      highlight: "You'll receive a score from 0–100 showing how well your parent is managing independently."
    },
    {
      number: 3,
      title: "Receive Personalized Recommendations",
      icon: Target,
      description: "You'll get a clear list of recommended next steps:",
      questions: [
        "Is your parent safe living alone?",
        "What support should you add right now?",
        "What risks are increasing?",
        "What may be needed in 3–6 months?"
      ],
      highlight: "ALBERTai also generates a Personalized Care Plan that adapts as their needs change."
    },
    {
      number: 4,
      title: "Ongoing Monitoring & Alerts",
      icon: Bell,
      description: "You'll be notified when:",
      alerts: [
        "Risk levels change",
        "Patterns indicate cognitive or physical decline",
        "A shift in independence suggests more help is needed"
      ],
      highlight: "This gives you time to act before a fall, hospitalization, or crisis occurs."
    }
  ]

  const privacyFeatures = [
    {
      icon: Shield,
      title: "HIPAA Compliant",
      description: "All data encrypted and stored securely. We meet the highest healthcare data protection standards."
    },
    {
      icon: Shield,
      title: "You Control Your Data",
      description: "Easy data export and deletion. You own your family's information."
    },
    {
      icon: Shield,
      title: "No Selling of Information",
      description: "Your data is never sold to third parties. We respect your privacy."
    },
    {
      icon: Shield,
      title: "Transparent AI",
      description: "Understand how decisions are made. Clear explanations of every recommendation."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              How ALBERTai Works
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Four simple steps to data-driven peace of mind. No new hardware required—just connect what you already have.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Timeline */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Connection Line (Desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute left-8 top-24 bottom-0 w-0.5 bg-gradient-to-b from-primary-300 to-secondary-300" />
                )}

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="w-16 h-16 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg">
                        <step.icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-10 border border-gray-100">
                      <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Step {step.number} — {step.title}
                      </h2>
                      
                      <p className="text-lg text-gray-600 mb-6">
                        {step.description}
                      </p>

                      {/* Features/Questions/Alerts List */}
                      {step.features && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                          {step.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-start space-x-3">
                              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center mt-0.5">
                                <feature.icon className="h-4 w-4 text-primary-600" />
                              </div>
                              <p className="text-gray-700 font-medium">{feature.text}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.questions && (
                        <div className="space-y-3 mb-6">
                          {step.questions.map((question, questionIndex) => (
                            <div key={questionIndex} className="flex items-start space-x-3">
                              <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{question}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {step.alerts && (
                        <div className="space-y-3 mb-6">
                          {step.alerts.map((alert, alertIndex) => (
                            <div key={alertIndex} className="flex items-start space-x-3">
                              <Bell className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                              <p className="text-gray-700">{alert}</p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Highlight Box */}
                      <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-xl p-6 border-l-4 border-primary-500">
                        <p className="text-gray-800 font-medium italic">
                          "{step.highlight}"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sources Visual */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Data Integration
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ALBERTai works with the devices and data sources you already have. No additional hardware needed.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Health Devices</h3>
              <p className="text-sm text-gray-600">Blood pressure monitors, glucose meters, scales</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Activity className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Activity Monitors</h3>
              <p className="text-sm text-gray-600">Fitbit, Apple Watch, fitness trackers</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mic className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Voice Signals</h3>
              <p className="text-sm text-gray-600">Phone calls, voice assistants, audio analysis</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Remote Monitoring</h3>
              <p className="text-sm text-gray-600">Telehealth platforms, RPM devices</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Caregiver Input</h3>
              <p className="text-sm text-gray-600">Family observations, notes, updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Security */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Privacy & Security
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your family's data is sacred. We protect it with the highest security standards and give you full control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Engine Explanation */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The AI Engine Behind the Score
                </h2>
                <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                  Our patent-pending AI platform analyzes patterns across multiple dimensions of health and wellness. 
                  Unlike simple alert systems, ALBERTai learns what's normal for your parent and detects subtle 
                  changes that may indicate emerging needs.
                </p>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  The system continuously improves its predictions as it gathers more data, providing increasingly 
                  accurate insights over time.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Machine learning algorithms trained on geriatric assessment data</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Pattern recognition across multiple data streams</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Predictive analytics for early intervention</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Continuous learning from each family's unique patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">Data Sources</span>
                      <Database className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-primary-500 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500">85% Complete</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">AI Analysis</span>
                      <Brain className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div className="h-full bg-secondary-500 rounded-full" style={{ width: '92%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500">92% Analyzed</p>
                    </div>
                  </div>

                  <div className="bg-white rounded-lg p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-600">Score Generated</span>
                      <Target className="h-5 w-5 text-primary-600" />
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary-600 mb-2">78</div>
                      <p className="text-sm text-gray-500">Aging In Place Score™</p>
                      <p className="text-xs text-green-600 mt-2">Stable with Monitoring</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Connect your existing devices and get your parent's Aging In Place Score™ in just minutes. 
              No new hardware required—just peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 border-white text-lg px-8 py-4"
                asChild
              >
                <Link to="/request-score">
                  Request An Aging In Place Score
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                Learn About the Score
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              30-Day Money-Back Guarantee • No Credit Card Required • HIPAA Compliant
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}