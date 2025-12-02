import { useSEO } from '@/hooks/useSEO'
import { Button } from '@/components/ui/button'
import { 
  Target, 
  CheckCircle2, 
  Shield, 
  TrendingUp,
  Heart,
  Users,
  ArrowRight,
  Award
} from 'lucide-react'

export default function About() {
  useSEO({
    title: 'About ALBERTai - Our Mission, Team, and Story | ALBERTai',
    description: 'Meet the team behind ALBERTai - innovators, caregivers, technologists, and advocates who believe aging with dignity is a universal right. Learn our mission and values.',
    keywords: 'about albert.ai, aging technology team, elder care innovation, caregiving mission, senior health technology'
  })
  const team = [
    {
      name: "Dave Duplay",
      title: "Chairman & Chief Executive Officer",
      image: "/images/team/Dave-3.jpg",
      bio: "Dave Duplay is a global healthcare and life sciences entrepreneur dedicated to improving how we age. With decades of experience working alongside healthcare professionals, pharma companies, researchers, and caregiver organizations, Dave has led strategic initiatives across multiple disease areas and care settings. As CEO of CareLink360®, a global AgeTech leader committed to Changing The Way The World Ages®, Dave focuses on delivering technology-driven solutions that genuinely enhance the lives of older adults. He also serves as Chairman of Vital Options International, a global health foundation, and is a board member at Environmental Advocates, bringing together innovation, mission, and real-world impact."
    },
    {
      name: "Peter Umekubo, MS MBA",
      title: "Chief Operating Officer",
      image: "/images/team/Peter_Umekubo Photo 082925.jpg",
      bio: "Peter Umekubo is a seasoned executive known for designing transformative population health, disease management, and digital health strategies. With 15+ years across pharma, medical devices, nonprofits, and technology, he has a proven track record of building systems that improve outcomes for patients and families. As COO of CareLink360®, Peter leads the delivery of next-generation tools that simplify care, support caregivers, and make healthcare more accessible. His academic background includes an M.S. in Biology from NYU and an MBA from the University of Colorado Denver."
    },
    {
      name: "Farzad Enayati",
      title: "Senior Vice President of AI and Data Analytics",
      image: "/images/team/Farzad.jpg",
      bio: "Farzad Enayati is a deep-tech entrepreneur and AI expert dedicated to transforming the global health and wellness landscape. His work centers on building scalable AI, machine learning, and predictive analytics systems that help families and healthcare providers understand risks earlier and make better decisions. As Co-Founder and CTO of AVORA360, he has created advanced predictive models and operational workflows that power next-generation social health platforms. Farzad's expertise spans digital health, government innovation projects, cloud engineering, and user-centered design — ensuring ALBERTai is as reliable as it is intelligent."
    },
    {
      name: "Paolo Narciso, Ph.D.",
      title: "President, Global Consumer Products and Services",
      image: "/images/team/paolo.png",
      bio: "Dr. Paolo Narciso is a social entrepreneur and nationally recognized innovator focused on creating technologies that improve the lives of older adults and vulnerable populations. A former VP of New Product Development at AARP Foundation, Paolo led groundbreaking initiatives to reduce social isolation among low-income older adults, including the award-winning Alcove VR platform. He has pioneered voice-enabled tools and AI systems that expand access to income, housing, food, and health resources. As co-founder of CloudHealth Asia, he helped bring primary care to underserved communities across Southeast Asia. Paolo is a serial tech entrepreneur, author, and champion for technology that serves humanity. He earned his doctorate from Creighton University."
    }
  ]

  const whatWeDoFeatures = [
    {
      icon: Target,
      title: "A clear, objective Aging-In-Place Score™",
      description: "One simple number that reflects how safely and independently your parent is aging at home."
    },
    {
      icon: TrendingUp,
      title: "Early warnings when something changes",
      description: "ALBERTai spots subtle shifts in mobility, behavior, cognition, or daily routines that families rarely catch early."
    },
    {
      icon: Shield,
      title: "Personalized recommendations for what to do next",
      description: "You get step-by-step guidance so you never feel lost or unsure about the right level of support."
    },
    {
      icon: Heart,
      title: "A care plan that adapts as your parent's needs evolve",
      description: "Life changes — and ALBERTai updates automatically with it."
    }
  ]

  const whyWeBuilt = [
    {
      icon: Target,
      text: "Remove guesswork from caregiving"
    },
    {
      icon: Shield,
      text: "Help parents stay independent and safe longer"
    },
    {
      icon: Heart,
      text: "Avoid preventable emergencies"
    },
    {
      icon: Users,
      text: "Strengthen communication between siblings and caregivers"
    },
    {
      icon: CheckCircle2,
      text: "Give families peace of mind, even from a distance"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-primary-100 rounded-full px-4 py-2 mb-6">
              <span className="text-primary-700 font-semibold text-sm">ABOUT ALBERT.AI</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-3xl sm:text-4xl text-gray-700 mb-8 font-light">
              Give Families Clarity, Confidence, and Peace of Mind
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Most families caring for an aging parent struggle with the same question:
            </p>
            <p className="text-2xl text-gray-800 font-semibold mt-4 mb-8 italic">
              "Is Mom still safe living on her own — and how would I even know?"
            </p>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ALBERTai was built to answer that question with clarity you can trust, powered by advanced, 
              patent-pending technology that works quietly in the background to help you make the right decisions at the right time.
            </p>
          </div>
        </div>
      </section>

      {/* What ALBERTai Does */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              What ALBERTai Does — In Simple Terms
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              ALBERTai brings together information from the tools and signals you already use — things like wellness apps, 
              check-ins, caregiver reports, home activity patterns, and health indicators.
            </p>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mt-6 font-medium">
              Instead of leaving you guessing, ALBERTai analyzes these insights and gives you:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {whatWeDoFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start mb-3">
                      <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                      <h3 className="text-xl font-bold text-gray-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12 text-center border-l-4 border-primary-500">
            <p className="text-xl text-gray-800 leading-relaxed">
              Behind the scenes, ALBERTai uses advanced Artificial Intelligence, Machine Learning, and predictive analytics, 
              but on the outside, it's simply:
            </p>
            <p className="text-3xl font-bold text-primary-600 mt-6">
              A trusted companion helping you protect the people you love.
            </p>
          </div>
        </div>
      </section>

      {/* Why We Built ALBERTai */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Why We Built ALBERTai
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Families deserve tools that are just as smart and powerful as the systems used by healthcare professionals — 
              but designed for real people, not clinicians.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {whyWeBuilt.map((goal, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                    <goal.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <p className="text-gray-800 font-medium leading-relaxed">
                    {goal.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 text-center border-2 border-primary-200">
            <p className="text-2xl lg:text-3xl text-gray-900 font-light leading-relaxed">
              ALBERTai exists because aging doesn't come with instructions — 
              <span className="font-bold text-primary-600"> but now families finally have a guide.</span>
            </p>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These are the people behind ALBERTai — innovators, caregivers, technologists, and advocates 
              who believe aging with dignity is a universal right.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  {/* Team member photo */}
                  <div className="flex-shrink-0">
                    {member.image ? (
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-32 h-32 object-cover rounded-2xl shadow-md"
                      />
                    ) : (
                      <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl flex items-center justify-center">
                        <Users className="h-16 w-16 text-primary-600 opacity-50" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-lg text-primary-600 font-semibold mb-4">
                      {member.title}
                    </p>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="flex items-center mb-6">
                  <Target className="h-10 w-10 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Mission
                  </h2>
                </div>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  Give Families Clarity, Confidence, and Peace of Mind
                </p>
                <p className="text-gray-600 leading-relaxed">
                  We're committed to empowering families with data-driven insights that enable aging adults 
                  to maintain independence, dignity, and quality of life for as long as safely possible.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-6">
                  <Heart className="h-10 w-10 text-primary-600 mr-4" />
                  <h2 className="text-3xl font-bold text-gray-900">
                    Our Values
                  </h2>
                </div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Empathy First:</strong> We understand the emotional weight of caregiving decisions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Data-Driven:</strong> We believe in the power of objective information
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Privacy Paramount:</strong> Your family's data is sacred and protected
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">
                      <strong>Continuous Innovation:</strong> We're always improving our AI and insights
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Awards & Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team and technology have been recognized for innovation in aging technology and healthcare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Best Health Tech Innovation 2025</h3>
              <p className="text-sm text-gray-600">TechCrunch</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Top Caregiving Resource</h3>
              <p className="text-sm text-gray-600">Bold Magazine, April 2024</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200">
              <Award className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Featured in Major Publications</h3>
              <p className="text-sm text-gray-600">Forbes, WSJ, NBC News</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Join Us on This Journey
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              We're building the future of aging in place, one family at a time. 
              Get your parent's Aging In Place Score™ and experience the peace of mind ALBERTai provides.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-primary-600 hover:bg-gray-100 border-white text-lg px-8 py-4"
              >
                Get Your Score Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
              >
                Learn How It Works
              </Button>
            </div>
            <p className="text-sm opacity-75 mt-6">
              30-Day Money-Back Guarantee • HIPAA Compliant • No Credit Card Required
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}