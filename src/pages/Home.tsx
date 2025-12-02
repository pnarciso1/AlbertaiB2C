import { useSEO } from '@/hooks/useSEO'
import Hero from '@/components/home/Hero'
import TrustIndicators from '@/components/home/TrustIndicators'
import ProblemSection from '@/components/home/ProblemSection'
import SolutionSection from '@/components/home/SolutionSection'
import SocialProof from '@/components/home/SocialProof'
import HowItWorksPreview from '@/components/home/HowItWorksPreview'
import FinalCTA from '@/components/home/FinalCTA'

export default function Home() {
  useSEO({
    title: 'ALBERTai - Data-Driven Peace of Mind for Families Caring for Aging Parents',
    description: 'Get your parent\'s Aging In Place Score™—a data-driven assessment that removes guesswork from the hardest family decisions. Monitor, predict, and protect with ALBERTai.',
    keywords: 'aging in place, elder care, caregiver support, aging parents, senior care, health monitoring, family caregiving, Aging In Place Score'
  })

  return (
    <div>
      <Hero />
      <TrustIndicators />
      <ProblemSection />
      <SolutionSection />
      <SocialProof />
      <HowItWorksPreview />
      <FinalCTA />
    </div>
  )
}
