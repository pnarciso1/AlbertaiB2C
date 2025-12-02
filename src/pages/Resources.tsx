import { useSEO } from '@/hooks/useSEO'
import { articles } from '@/data/articles'
import ArticleCard from '@/components/shared/ArticleCard'

export default function Resources() {
  useSEO({
    title: 'Resources & Education - Expert Caregiving Guides | ALBERTai',
    description: 'Expert insights, practical guides, and valuable resources to help you navigate the journey of aging in place. Articles on caregiving, health, safety, and more.',
    keywords: 'caregiving resources, aging in place guides, elder care education, family caregiver support, senior care articles'
  })
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Resources & Education
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert insights, practical guides, and valuable resources to help you navigate the journey of aging in place.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {articles.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-xl text-gray-600 mb-4">
                Resources are coming soon!
              </p>
              <p className="text-gray-500">
                We're preparing valuable content to help you on your caregiving journey.
              </p>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Articles & Guides</h2>
                <p className="text-lg text-gray-600">
                  Explore our collection of expert-written articles on caregiving, health, and aging in place.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
