import { useState, useEffect } from 'react'
import { Star } from 'lucide-react'

export default function SocialProof() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const familyTestimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "Boston, MA",
      title: "Daughter of Margaret, 78",
      quote: "ALBERTai gave us the confidence to know Mom was safe at home. The score helped us make the right decisions at the right time.",
      image: "/images/testimonials/Sarah Johnson.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "San Francisco, CA",
      title: "Son of Robert, 82",
      quote: "We caught Dad's decline early thanks to ALBERTai. The early warning system prevented a serious fall.",
      image: "/images/testimonials/Michael Chen.jpg"
    },
    {
      id: 3,
      name: "Lisa Rodriguez",
      location: "Austin, TX",
      title: "Daughter of Maria, 75",
      quote: "The peace of mind ALBERTai provides is priceless. We know exactly when Mom needs help.",
      image: "/images/testimonials/Lisa Rodrigues.jpg"
    }
  ]

  const writtenTestimonials = [
    {
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      quote: "ALBERTai helped us navigate the difficult decision of when to get additional help for Dad. The data-driven approach removed the guesswork.",
      score: "Improved from 65 to 78"
    },
    {
      name: "Jennifer Lee",
      location: "Seattle, WA",
      rating: 5,
      quote: "The weekly reports give us insights we never had before. We can see trends and make informed decisions.",
      score: "Stable at 82 for 6 months"
    },
    {
      name: "Robert Martinez",
      location: "Miami, FL",
      rating: 5,
      quote: "As a healthcare professional, I'm impressed by the clinical accuracy of ALBERTai's assessments.",
      score: "Early intervention prevented crisis"
    },
    {
      name: "Amanda Wilson",
      location: "Denver, CO",
      rating: 5,
      quote: "The family coordination features help us all stay on the same page about Mom's care needs.",
      score: "Family communication improved"
    },
    {
      name: "Thomas Brown",
      location: "Phoenix, AZ",
      rating: 5,
      quote: "ALBERTai gave us the confidence to let Mom stay independent longer than we thought possible.",
      score: "Extended independence by 2 years"
    },
    {
      name: "Patricia Davis",
      location: "Atlanta, GA",
      rating: 5,
      quote: "The cost savings from preventing just one emergency room visit paid for ALBERTai for years.",
      score: "Saved $15,000 in healthcare costs"
    }
  ]

  // Auto-rotate family testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % familyTestimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Real Families, Real Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how ALBERTai has transformed the caregiving experience for thousands of families across the country.
          </p>
        </div>

        {/* Family Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Family Testimonials
          </h3>
          
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {familyTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white rounded-xl shadow-lg p-6 transition-all duration-500 ${
                    index === currentTestimonial 
                      ? 'scale-105 shadow-xl ring-2 ring-primary-500' 
                      : 'opacity-70'
                  }`}
                >
                  <div className="aspect-video rounded-lg mb-4 overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-primary-600 font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.title}</p>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-gray-700 italic">
                    "{testimonial.quote}"
                  </blockquote>
                </div>
              ))}
            </div>
            
            {/* Family testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {familyTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-primary-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Written Testimonials */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Customer Reviews
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {writtenTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-secondary-600 font-bold text-lg">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-700 mb-4">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="bg-primary-50 rounded-lg p-3">
                  <p className="text-sm font-semibold text-primary-700">
                    Result: {testimonial.score}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Trusted by Families Nationwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
                <p className="text-gray-600">Active Families</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
                <p className="text-gray-600">Average Rating</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
                <p className="text-gray-600">Would Recommend</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 mb-2">$2M+</div>
                <p className="text-gray-600">Healthcare Costs Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
