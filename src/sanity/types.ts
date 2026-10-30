import type { PortableTextBlock, TypedObject } from '@portabletext/types'

export interface SanityImage {
  _type?: 'image'
  _key?: string
  alt?: string
  caption?: string
  asset?: {
    _ref: string
    _type: 'reference'
  }
}

export interface BlogPostSummary {
  _id: string
  title: string
  slug: string
  excerpt: string | null
  mainImage: SanityImage | null
  imageAlt: string | null
  category: string | null
  author: string | null
  publishedAt: string | null
  seoTitle: string | null
  seoDescription: string | null
}

export type BlogBodyBlock = PortableTextBlock | (TypedObject & SanityImage)

export interface BlogPost extends BlogPostSummary {
  body: BlogBodyBlock[] | null
}

export interface BlogPostPageResult {
  posts: BlogPostSummary[] | null
  total: number | null
}
