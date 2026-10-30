const PUBLISHED_POST_CONDITIONS = `
  _type == "post" &&
  defined(slug.current) &&
  defined(publishedAt) &&
  publishedAt <= now() &&
  !(_id in path("drafts.**"))
`

const POST_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  excerpt,
  mainImage,
  imageAlt,
  category,
  author,
  publishedAt,
  seoTitle,
  seoDescription
`

export const POSTS_PAGE_QUERY = `{
  "posts": *[${PUBLISHED_POST_CONDITIONS}] | order(publishedAt desc) [$start...$end] {
    ${POST_FIELDS}
  },
  "total": count(*[${PUBLISHED_POST_CONDITIONS}])
}`

export const POST_BY_SLUG_QUERY = `*[${PUBLISHED_POST_CONDITIONS} && slug.current == $slug][0] {
  ${POST_FIELDS},
  body
}`
