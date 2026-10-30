import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'
import { getPublicSanityConfig } from './env'
import type { SanityImage } from './types'

interface ImageOptions {
  width: number
  height?: number
  fit?: 'crop' | 'max'
}

export function getPostImageAlt(post: {
  title: string
  imageAlt: string | null
  mainImage: SanityImage | null
}): string {
  return post.imageAlt?.trim() || post.mainImage?.alt?.trim() || post.title
}

export function buildImageUrl(
  image: SanityImage | null | undefined,
  options: ImageOptions,
): string | null {
  const config = getPublicSanityConfig()
  const ref = image?.asset?._ref
  if (!config || !image || !ref) {
    return null
  }

  const source: SanityImageSource = {
    asset: {
      _ref: ref,
    },
  }

  let builder = createImageUrlBuilder({
    projectId: config.projectId,
    dataset: config.dataset,
  })
    .image(source)
    .width(options.width)
    .auto('format')
    .quality(80)
    .fit(options.fit ?? (options.height ? 'crop' : 'max'))

  if (options.height) {
    builder = builder.height(options.height)
  }

  return builder.url()
}

export function formatPublishedDate(iso: string | null): string {
  if (!iso) {
    return ''
  }

  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return new Intl.DateTimeFormat('vi-VN', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date)
}
