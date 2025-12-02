import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import type { Article } from '@/data/articles'

interface ArticleCardProps {
  article: Article
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const readTime = article.readTime || Math.ceil(article.content.split(/\s+/).length / 200)

  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow overflow-hidden flex flex-col h-full">
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {article.title}
        </h3>
        
        <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
          {article.description}
        </p>
        
        <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{new Date(article.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-1" />
            <span>{article.author}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime} min read</span>
          </div>
        </div>
        
        <Link to={`/resources/${article.slug}`}>
          <Button variant="outline" className="w-full">
            Read More
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  )
}

