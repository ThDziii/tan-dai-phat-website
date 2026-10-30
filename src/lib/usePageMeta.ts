import { useEffect } from 'react'

const DEFAULT_TITLE = 'Tân Đại Phát - Vận Chuyển Hàng Hóa Bắc – Nam An Toàn, Nhanh Chóng'

interface PageMetaOptions {
  title: string
  description?: string
  canonicalPath?: string
  type?: 'website' | 'article'
}

function upsertMeta(attribute: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attribute}="${key}"]`
  let element = document.head.querySelector(selector)
  let created = false

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
    created = true
  }

  const previous = element.getAttribute('content')
  element.setAttribute('content', content)

  return () => {
    if (created) {
      element?.remove()
      return
    }
    if (previous === null) {
      element?.removeAttribute('content')
      return
    }
    element?.setAttribute('content', previous)
  }
}

export function usePageMeta({ title, description, canonicalPath, type = 'website' }: PageMetaOptions) {
  useEffect(() => {
    const previousTitle = document.title
    document.title = title

    const restore: Array<() => void> = []

    if (description) {
      restore.push(upsertMeta('name', 'description', description))
      restore.push(upsertMeta('property', 'og:description', description))
    }

    restore.push(upsertMeta('property', 'og:title', title))
    restore.push(upsertMeta('property', 'og:type', type))

    if (canonicalPath) {
      const href = `${window.location.origin}${canonicalPath}`
      let link = document.head.querySelector('link[rel="canonical"]')
      let created = false
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
        created = true
      }
      const previousHref = link.getAttribute('href')
      link.setAttribute('href', href)
      restore.push(() => {
        if (created) {
          link?.remove()
          return
        }
        if (previousHref === null) {
          link?.removeAttribute('href')
          return
        }
        link?.setAttribute('href', previousHref)
      })
    }

    return () => {
      document.title = previousTitle || DEFAULT_TITLE
      restore.reverse().forEach((fn) => fn())
    }
  }, [title, description, canonicalPath, type])
}
