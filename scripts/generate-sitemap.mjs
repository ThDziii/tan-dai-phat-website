import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const SITE_URL = 'https://vantaitandaiphat.com.vn'
const STATIC_PATHS = ['/', '/about', '/services', '/gallery', '/blog', '/contact']

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')

function loadEnv(path) {
  const env = {}
  const text = readFileSync(path, 'utf8')
  for (const line of text.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('#')) continue
    const separator = trimmed.indexOf('=')
    if (separator === -1) continue
    env[trimmed.slice(0, separator).trim()] = trimmed.slice(separator + 1).trim()
  }
  return env
}

function escapeXml(value) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function toLastMod(publishedAt) {
  if (typeof publishedAt !== 'string') return null
  const date = publishedAt.slice(0, 10)
  return /^\d{4}-\d{2}-\d{2}$/.test(date) ? date : null
}

async function fetchPublishedPosts(env) {
  const projectId = env.VITE_SANITY_PROJECT_ID
  const dataset = env.VITE_SANITY_DATASET || 'production'
  const apiVersion = env.VITE_SANITY_API_VERSION || '2025-02-19'
  if (!projectId) {
    throw new Error('Missing VITE_SANITY_PROJECT_ID in .env')
  }

  const query = `*[_type == "post" && defined(slug.current) && defined(publishedAt) && publishedAt <= now() && !(_id in path("drafts.**"))]{
    "slug": slug.current,
    publishedAt
  }`
  const url = `https://${projectId}.api.sanity.io/v${apiVersion}/data/query/${dataset}?query=${encodeURIComponent(query)}`
  const response = await fetch(url)
  if (!response.ok) {
    throw new Error(`Sanity query failed (${response.status})`)
  }

  const body = await response.json()
  if (!Array.isArray(body.result)) {
    throw new Error('Sanity query did not return a post list')
  }
  return body.result
}

function renderUrl({ loc, lastmod }) {
  const lastmodTag = lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>${lastmodTag}\n  </url>`
}

const env = loadEnv(resolve(root, '.env'))
const posts = await fetchPublishedPosts(env)

const urls = STATIC_PATHS.map((path) => ({
  loc: path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`,
}))

const seen = new Set(urls.map((url) => url.loc))
for (const post of posts) {
  if (typeof post.slug !== 'string' || !/^[\w-]+$/.test(post.slug)) continue
  const loc = `${SITE_URL}/blog/${encodeURIComponent(post.slug)}`
  if (seen.has(loc)) continue
  seen.add(loc)
  urls.push({ loc, lastmod: toLastMod(post.publishedAt) })
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(renderUrl).join('\n')}
</urlset>
`

writeFileSync(resolve(root, 'public/sitemap.xml'), xml)
console.log(`Wrote ${urls.length} URLs to public/sitemap.xml`)
