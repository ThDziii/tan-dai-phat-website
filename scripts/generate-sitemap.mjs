import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import path from 'node:path'

const SITE_URL = 'https://vantaitandaiphat.com.vn'
const STATIC_PATHS = ['/', '/about', '/services', '/gallery', '/blog', '/contact']

function loadEnv(filePath) {
  const env = {}
  const text = readFileSync(filePath, 'utf8')
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
    throw new Error('Missing VITE_SANITY_PROJECT_ID')
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

function loadConfig() {
  const fromFile = {}
  const envPath = path.join(process.cwd(), '.env')
  if (existsSync(envPath)) {
    Object.assign(fromFile, loadEnv(envPath))
  }

  return {
    VITE_SANITY_PROJECT_ID: process.env.VITE_SANITY_PROJECT_ID || fromFile.VITE_SANITY_PROJECT_ID,
    VITE_SANITY_DATASET: process.env.VITE_SANITY_DATASET || fromFile.VITE_SANITY_DATASET,
    VITE_SANITY_API_VERSION: process.env.VITE_SANITY_API_VERSION || fromFile.VITE_SANITY_API_VERSION,
  }
}

const env = loadConfig()
const posts = await fetchPublishedPosts(env)

const urls = STATIC_PATHS.map((pathname) => ({
  loc: pathname === '/' ? `${SITE_URL}/` : `${SITE_URL}${pathname}`,
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

const publicDir = path.join(process.cwd(), 'public')
if (!existsSync(publicDir)) {
  mkdirSync(publicDir)
}

const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml')
writeFileSync(sitemapPath, xml)
console.log(`Wrote ${urls.length} URLs to ${sitemapPath}`)
