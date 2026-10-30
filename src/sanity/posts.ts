import { getSanityClient } from './client'
import { isSanityConfigured } from './env'
import { POST_BY_SLUG_QUERY, POSTS_PAGE_QUERY } from './queries'
import type { BlogPost, BlogPostPageResult, BlogPostSummary } from './types'

export const BLOG_PAGE_SIZE = 6

export class SanityNotConfiguredError extends Error {
  constructor() {
    super('Sanity is not configured')
    this.name = 'SanityNotConfiguredError'
  }
}

function isPostSummary(value: BlogPostSummary | null | undefined): value is BlogPostSummary {
  return Boolean(value && value._id && value.title && value.slug)
}

export async function fetchPublishedPosts(
  offset: number,
): Promise<{ posts: BlogPostSummary[]; total: number }> {
  if (!isSanityConfigured()) {
    throw new SanityNotConfiguredError()
  }

  const end = offset + BLOG_PAGE_SIZE
  const result = await getSanityClient().fetch<BlogPostPageResult>(POSTS_PAGE_QUERY, {
    start: offset,
    end,
  })

  const posts = (result?.posts ?? []).filter(isPostSummary)
  const total = typeof result?.total === 'number' ? result.total : posts.length

  return { posts, total }
}

export async function fetchPublishedPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!isSanityConfigured()) {
    throw new SanityNotConfiguredError()
  }

  const post = await getSanityClient().fetch<BlogPost | null>(POST_BY_SLUG_QUERY, { slug })
  if (!isPostSummary(post)) {
    return null
  }

  return {
    ...post,
    body: Array.isArray(post.body) ? post.body : null,
  }
}
