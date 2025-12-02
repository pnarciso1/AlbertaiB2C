import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug, calculateReadTime } from '@/data/articles'
import ArticleCTA from '@/components/shared/ArticleCTA'
import { updateSEO } from '@/utils/seo'
import { Calendar, User, Clock, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>()
  const article = slug ? getArticleBySlug(slug) : undefined

  useEffect(() => {
    if (article) {
      const articleUrl = `https://albertai-dev.web.app/resources/${article.slug}`
      
      // Update SEO metadata
      updateSEO({
        title: article.metaTitle || `${article.title} | ALBERTai Resources`,
        description: article.metaDescription || article.description,
        keywords: `aging in place, elder care, caregiver support, ${article.title.toLowerCase()}`,
        ogTitle: article.metaTitle || article.title,
        ogDescription: article.metaDescription || article.description,
        ogUrl: articleUrl,
        ogImage: 'https://albertai-dev.web.app/images/vitaly-gariev-rGd9DIWnMO4-unsplash.jpg',
        canonical: articleUrl
      })

      // Add structured data for article
      const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        image: 'https://albertai-dev.web.app/images/vitaly-gariev-rGd9DIWnMO4-unsplash.jpg',
        datePublished: article.date,
        dateModified: article.date,
        author: {
          '@type': 'Person',
          name: article.author
        },
        publisher: {
          '@type': 'Organization',
          name: 'ALBERTai',
          logo: {
            '@type': 'ImageObject',
            url: 'https://albertai-dev.web.app/images/logos/AlbertAI_Tagline_Color_R.png'
          }
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': articleUrl
        }
      }

      // Remove existing structured data script if any
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Add structured data
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.text = JSON.stringify(structuredData)
      document.head.appendChild(script)

      // Cleanup on unmount
      return () => {
        const scriptToRemove = document.querySelector('script[type="application/ld+json"]')
        if (scriptToRemove) {
          scriptToRemove.remove()
        }
      }
    }
  }, [article])

  if (!article) {
    return (
      <div className="min-h-screen bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">
            The article you're looking for doesn't exist.
          </p>
          <Link to="/resources">
            <Button>
              Back to Resources
              <ArrowLeft className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const readTime = article.readTime || calculateReadTime(article.content)

  return (
    <div className="min-h-screen bg-white">
      {/* Back Navigation */}
      <section className="bg-gray-50 py-4 border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/resources">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Resources
            </Button>
          </Link>
        </div>
      </section>

      {/* Article Header */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>
          
          <div className="flex flex-wrap items-center text-gray-600 space-x-6 mb-6">
            <div className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" />
              <span>{new Date(article.date).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
              })}</span>
            </div>
            <div className="flex items-center">
              <User className="h-5 w-5 mr-2" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2" />
              <span>{readTime} min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-blockquote:border-l-primary-500 prose-blockquote:text-gray-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {article.content}
            </ReactMarkdown>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ArticleCTA />
        </div>
      </section>

      {/* Related Articles / Back to Resources */}
      <section className="py-12 bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link to="/resources">
            <Button variant="outline" size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to All Resources
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

