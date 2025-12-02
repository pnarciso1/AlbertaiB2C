import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function ArticleCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-500 rounded-2xl my-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Join Us on This Journey
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
          We're building the future of aging in place, one family at a time. 
          Get your parent's Aging In Place Score™ and experience the peace of mind ALBERTai provides.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
            className="border-2 border-green-300 text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4"
          >
            Learn How It Works
          </Button>
        </div>
        
        <p className="text-sm opacity-75">
          30-Day Money-Back Guarantee • HIPAA Compliant • No Credit Card Required
        </p>
      </div>
    </section>
  )
}

