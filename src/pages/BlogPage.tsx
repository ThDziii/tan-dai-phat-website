import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../components/layout/Container'
import { Button } from '../components/ui/Button'
import { BlogCard } from '../components/blog/BlogCard'
import { usePageMeta } from '../lib/usePageMeta'
import { isSanityConfigured } from '../sanity/env'
import { fetchPublishedPosts } from '../sanity/posts'
import type { BlogPostSummary } from '../sanity/types'
import './BlogPage.css'

const LISTING_TITLE = 'Tin tức | Tân Đại Phát'
const LISTING_DESCRIPTION =
  'Tin tức, hướng dẫn gửi hàng và hoạt động vận chuyển Bắc – Nam của Công ty Vận tải Tân Đại Phát.'

export const BlogPage: React.FC = () => {
  const configured = isSanityConfigured()
  const [posts, setPosts] = useState<BlogPostSummary[]>([])
  const [total, setTotal] = useState(0)
  const [status, setStatus] = useState<'loading' | 'ready' | 'empty' | 'error'>('loading')
  const [loadingMore, setLoadingMore] = useState(false)
  const [loadMoreError, setLoadMoreError] = useState(false)
  const [reloadKey, setReloadKey] = useState(0)
  const viewStatus = configured ? status : 'unconfigured'

  usePageMeta({
    title: LISTING_TITLE,
    description: LISTING_DESCRIPTION,
    canonicalPath: '/blog',
  })

  useEffect(() => {
    if (!configured) {
      return
    }

    let cancelled = false

    fetchPublishedPosts(0)
      .then((result) => {
        if (cancelled) return
        setPosts(result.posts)
        setTotal(result.total)
        setStatus(result.posts.length === 0 ? 'empty' : 'ready')
      })
      .catch((error: unknown) => {
        if (cancelled) return
        console.error(error)
        setStatus('error')
      })

    return () => {
      cancelled = true
    }
  }, [configured, reloadKey])

  const handleLoadMore = useCallback(() => {
    setLoadingMore(true)
    setLoadMoreError(false)

    fetchPublishedPosts(posts.length)
      .then((result) => {
        setPosts((current) => {
          const seen = new Set(current.map((post) => post._id))
          const next = result.posts.filter((post) => !seen.has(post._id))
          return [...current, ...next]
        })
        setTotal(result.total)
      })
      .catch((error: unknown) => {
        console.error(error)
        setLoadMoreError(true)
      })
      .finally(() => {
        setLoadingMore(false)
      })
  }, [posts.length])

  const hasMore = viewStatus === 'ready' && posts.length < total

  return (
    <div className="blog-page">
      <section className="page-hero">
        <Container>
          <div className="page-hero__content">
            <nav className="blog-breadcrumb" aria-label="Đường dẫn">
              <ol>
                <li>
                  <Link to="/">Trang chủ</Link>
                </li>
                <li aria-current="page">Tin tức</li>
              </ol>
            </nav>
            <span className="page-hero__eyebrow">TIN TỨC &amp; CHIA SẺ</span>
            <h1 className="page-hero__title">
              Tin tức <span className="text-primary">Tân Đại Phát</span>
            </h1>
            <p className="page-hero__desc">
              Cập nhật tin tức, hướng dẫn gửi hàng và hoạt động vận chuyển Bắc – Nam
              của Công ty Vận tải Tân Đại Phát.
            </p>
          </div>
        </Container>
      </section>

      <section className="section blog-section" aria-busy={viewStatus === 'loading'}>
        <Container>
          {viewStatus === 'loading' && (
            <div className="blog-grid" aria-hidden="true">
              {Array.from({ length: 6 }, (_, index) => (
                <div key={index} className="blog-card blog-card--skeleton" />
              ))}
            </div>
          )}

          {viewStatus === 'loading' && <p className="visually-hidden">Đang tải bài viết.</p>}

          {viewStatus === 'unconfigured' && (
            <div className="blog-status" role="status">
              <h2>Tin tức đang được kết nối</h2>
              <p>
                Trang này sẽ hiển thị bài viết đã xuất bản sau khi website được kết nối với Sanity.
                Chưa có nội dung mẫu nào được tạo sẵn.
              </p>
            </div>
          )}

          {viewStatus === 'error' && (
            <div className="blog-status" role="alert">
              <h2>Không tải được bài viết</h2>
              <p>Kết nối tới hệ thống nội dung đang gián đoạn. Vui lòng thử lại sau ít phút.</p>
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setStatus('loading')
                  setReloadKey((value) => value + 1)
                }}
              >
                Thử lại
              </Button>
            </div>
          )}

          {viewStatus === 'empty' && (
            <div className="blog-status" role="status">
              <h2>Chưa có bài viết</h2>
              <p>
                Các bài đã xuất bản trên Sanity Studio sẽ xuất hiện tại đây.
                Bản nháp không được hiển thị trên website.
              </p>
            </div>
          )}

          {viewStatus === 'ready' && (
            <>
              <div className="blog-grid">
                {posts.map((post) => (
                  <BlogCard key={post._id} post={post} />
                ))}
              </div>

              {hasMore && (
                <div className="blog-more">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleLoadMore}
                    disabled={loadingMore}
                  >
                    {loadingMore ? 'Đang tải...' : 'Xem thêm bài viết'}
                  </Button>
                  {loadMoreError && (
                    <p className="blog-more__error" role="alert">
                      Không tải thêm được bài viết. Vui lòng thử lại.
                    </p>
                  )}
                </div>
              )}
            </>
          )}
        </Container>
      </section>
    </div>
  )
}
