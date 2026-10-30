import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Newspaper } from 'lucide-react'
import { buildImageUrl, formatPublishedDate, getPostImageAlt } from '../../sanity/image'
import type { BlogPostSummary } from '../../sanity/types'

interface BlogCardProps {
  post: BlogPostSummary
}

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const dateLabel = formatPublishedDate(post.publishedAt)
  const alt = getPostImageAlt(post)
  const imageUrl = buildImageUrl(post.mainImage, { width: 800, height: 500, fit: 'crop' })
  const imageUrlLarge = buildImageUrl(post.mainImage, { width: 1200, height: 750, fit: 'crop' })

  return (
    <article className="blog-card">
      <Link to={`/blog/${post.slug}`} className="blog-card__link">
        <div className="blog-card__media">
          {imageUrl ? (
            <img
              src={imageUrl}
              srcSet={imageUrlLarge ? `${imageUrl} 800w, ${imageUrlLarge} 1200w` : undefined}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
              alt={alt}
              width={800}
              height={500}
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="blog-card__media-fallback" aria-hidden="true">
              <Newspaper size={28} />
            </div>
          )}
        </div>
        <div className="blog-card__body">
          <div className="blog-card__meta">
            {post.category ? <span className="blog-card__category">{post.category}</span> : <span />}
            {post.publishedAt && dateLabel ? (
              <time dateTime={post.publishedAt}>{dateLabel}</time>
            ) : null}
          </div>
          <h2 className="blog-card__title">{post.title}</h2>
          {post.excerpt ? <p className="blog-card__excerpt">{post.excerpt}</p> : null}
          <span className="blog-card__more">
            Đọc tiếp
            <ArrowRight size={16} aria-hidden="true" />
          </span>
        </div>
      </Link>
    </article>
  )
}
