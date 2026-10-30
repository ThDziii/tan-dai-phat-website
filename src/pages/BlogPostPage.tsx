import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { PortableTextContent } from '../components/blog/PortableTextContent'
import { usePageMeta } from '../lib/usePageMeta'
import { isSanityConfigured } from '../sanity/env'
import { buildImageUrl, formatPublishedDate, getPostImageAlt } from '../sanity/image'
import { fetchPublishedPostBySlug } from '../sanity/posts'
import type { BlogPost } from '../sanity/types'
import './BlogPage.css'

const SITE_NAME = 'Tân Đại Phát'

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams()
  const configured = isSanityConfigured()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [status, setStatus] = useState<'loading' | 'ready' | 'not-found' | 'error'>('loading')
  const [reloadKey, setReloadKey] = useState(0)
  const [activeSlug, setActiveSlug] = useState(slug)
  if (slug !== activeSlug) {
    setActiveSlug(slug)
    setPost(null)
    setStatus('loading')
  }
  const viewStatus = !slug ? 'not-found' : configured ? status : 'unconfigured'

  useEffect(() => {
    if (!slug || !configured) {
      return
    }

    let cancelled = false

    fetchPublishedPostBySlug(slug)
      .then((result) => {
        if (cancelled) return
        setPost(result)
        setStatus(result ? 'ready' : 'not-found')
      })
      .catch((error: unknown) => {
        if (cancelled) return
        console.error(error)
        setPost(null)
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [slug, configured, reloadKey])

  const pageTitle = post
    ? `${post.seoTitle?.trim() || post.title} | ${SITE_NAME}`
    : viewStatus === 'not-found'
      ? `Không tìm thấy bài viết | ${SITE_NAME}`
      : `Tin tức | ${SITE_NAME}`

  const pageDescription = post
    ? post.seoDescription?.trim() || post.excerpt?.trim() || undefined
    : undefined

  usePageMeta({
    title: pageTitle,
    description: pageDescription,
    canonicalPath: slug ? `/blog/${slug}` : '/blog',
    type: viewStatus === 'ready' && post ? 'article' : 'website',
  })

  useEffect(() => {
    if (!post) return

    const imageUrl = buildImageUrl(post.mainImage, { width: 1600, height: 900, fit: 'crop' })
    const data: Record<string, unknown> = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.seoDescription || post.excerpt || undefined,
      datePublished: post.publishedAt || undefined,
      mainEntityOfPage: `${window.location.origin}/blog/${post.slug}`,
      publisher: {
        '@type': 'Organization',
        name: 'Công ty Vận tải Tân Đại Phát',
      },
    }

    if (post.author) {
      data.author = { '@type': 'Person', name: post.author }
    }
    if (imageUrl) {
      data.image = imageUrl
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      script.remove()
    }
  }, [post])

  const dateLabel = formatPublishedDate(post?.publishedAt ?? null)
  const coverUrl = post
    ? buildImageUrl(post.mainImage, { width: 1600, height: 900, fit: 'crop' })
    : null
  const coverUrlNarrow = post
    ? buildImageUrl(post.mainImage, { width: 900, height: 506, fit: 'crop' })
    : null

  return (
    <div className="blog-page">
      <section className="section blog-article-section">
        <Container>
          <nav className="blog-breadcrumb" aria-label="Đường dẫn">
            <ol>
              <li>
                <Link to="/">Trang chủ</Link>
              </li>
              <li>
                <Link to="/blog">Tin tức</Link>
              </li>
              <li aria-current="page">{post?.title ?? 'Bài viết'}</li>
            </ol>
          </nav>

          <Link to="/blog" className="blog-back">
            <ArrowLeft size={16} aria-hidden="true" />
            Quay lại tin tức
          </Link>

          {viewStatus === 'loading' && (
            <div className="blog-status" aria-busy="true">
              <p>Đang tải bài viết...</p>
            </div>
          )}

          {viewStatus === 'unconfigured' && (
            <div className="blog-status" role="status">
              <h1>Tin tức đang được kết nối</h1>
              <p>Bài viết sẽ hiển thị sau khi website được kết nối với Sanity.</p>
              <Button to="/blog" variant="outline">
                Về trang tin tức
              </Button>
            </div>
          )}

          {viewStatus === 'error' && (
            <div className="blog-status" role="alert">
              <h1>Không tải được bài viết</h1>
              <p>Kết nối tới hệ thống nội dung đang gián đoạn. Vui lòng thử lại sau ít phút.</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setPost(null)
                  setStatus('loading')
                  setReloadKey((value) => value + 1)
                }}
              >
                Thử lại
              </Button>
            </div>
          )}

          {viewStatus === 'not-found' && (
            <div className="blog-status" role="status">
              <h1>Không tìm thấy bài viết</h1>
              <p>Bài viết không tồn tại, chưa được xuất bản, hoặc đường dẫn không còn đúng.</p>
              <Button to="/blog" variant="primary">
                Xem các bài viết khác
              </Button>
            </div>
          )}

          {viewStatus === 'ready' && post && (
            <article className="blog-article">
              <header className="blog-article__header">
                <div className="blog-card__meta">
                  {post.category ? <span className="blog-card__category">{post.category}</span> : null}
                  {post.publishedAt && dateLabel ? (
                    <time dateTime={post.publishedAt}>{dateLabel}</time>
                  ) : null}
                  {post.author ? <span className="blog-article__author">Tác giả: {post.author}</span> : null}
                </div>
                <h1 className="blog-article__title">{post.title}</h1>
                {post.excerpt ? <p className="blog-article__excerpt">{post.excerpt}</p> : null}
              </header>

              {coverUrl && (
                <figure className="blog-article__cover">
                  <img
                    src={coverUrl}
                    srcSet={coverUrlNarrow ? `${coverUrlNarrow} 900w, ${coverUrl} 1600w` : undefined}
                    sizes="(max-width: 860px) 100vw, 860px"
                    alt={getPostImageAlt(post)}
                    width={1600}
                    height={900}
                    decoding="async"
                  />
                </figure>
              )}

              <PortableTextContent value={post.body} />

              <footer className="blog-article__footer">
                <Link to="/blog" className="blog-back">
                  <ArrowLeft size={16} aria-hidden="true" />
                  Quay lại tin tức
                </Link>
              </footer>
            </article>
          )}
        </Container>
      </section>
    </div>
  )
}
