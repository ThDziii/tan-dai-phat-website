import React from 'react'
import { PortableText, type PortableTextComponents } from '@portabletext/react'
import { buildImageUrl } from '../../sanity/image'
import type { BlogBodyBlock, SanityImage } from '../../sanity/types'

const components: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p>{children}</p>,
    h2: ({ children }) => <h2>{children}</h2>,
    h3: ({ children }) => <h3>{children}</h3>,
    h4: ({ children }) => <h4>{children}</h4>,
    blockquote: ({ children }) => <blockquote>{children}</blockquote>,
  },
  marks: {
    link: ({ children, value }) => {
      const href = typeof value?.href === 'string' ? value.href : ''
      if (!href) {
        return <>{children}</>
      }

      const external = /^https?:\/\//i.test(href)
      return (
        <a
          href={href}
          {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {children}
        </a>
      )
    },
  },
  types: {
    image: ({ value }) => {
      const image = value as SanityImage
      const url = buildImageUrl(image, { width: 1400, fit: 'max' })
      if (!url) {
        return null
      }

      const alt = image.alt?.trim() || image.caption?.trim() || ''
      return (
        <figure className="blog-prose__figure">
          <img src={url} alt={alt} loading="lazy" decoding="async" />
          {image.caption ? <figcaption>{image.caption}</figcaption> : null}
        </figure>
      )
    },
  },
}

interface PortableTextContentProps {
  value: BlogBodyBlock[] | null
}

export const PortableTextContent: React.FC<PortableTextContentProps> = ({ value }) => {
  if (!value || value.length === 0) {
    return <p className="blog-prose__empty">Bài viết chưa có nội dung chi tiết.</p>
  }

  return (
    <div className="blog-prose">
      <PortableText value={value} components={components} />
    </div>
  )
}
