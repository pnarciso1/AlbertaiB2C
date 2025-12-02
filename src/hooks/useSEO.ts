import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { updateSEO } from '@/utils/seo'

interface UseSEOOptions {
  title: string
  description: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export function useSEO(options: UseSEOOptions) {
  const location = useLocation()
  const baseUrl = 'https://albertai-dev.web.app'
  const currentUrl = `${baseUrl}${location.pathname}`

  useEffect(() => {
    updateSEO({
      title: options.title,
      description: options.description,
      keywords: options.keywords,
      ogTitle: options.ogTitle || options.title,
      ogDescription: options.ogDescription || options.description,
      ogUrl: currentUrl,
      ogImage: options.ogImage || 'https://albertai-dev.web.app/images/vitaly-gariev-rGd9DIWnMO4-unsplash.jpg',
      canonical: currentUrl
    })
  }, [location.pathname, options])
}

