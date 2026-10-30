import { createClient, type SanityClient } from '@sanity/client'
import { getPublicSanityConfig } from './env'

let client: SanityClient | null = null

/**
 * Read-only client for published content.
 * No API token is attached. Drafts are not requested.
 */
export function getSanityClient(): SanityClient {
  const config = getPublicSanityConfig()
  if (!config) {
    throw new Error('Sanity is not configured')
  }

  if (!client) {
    // Dev requests go through the Vite proxy so local origins do not need a Sanity CORS entry.
    // Production still calls Sanity directly and needs the site origin allowed in the project CORS settings.
    const useDevProxy = import.meta.env.DEV && typeof window !== 'undefined'
    client = createClient({
      projectId: config.projectId,
      dataset: config.dataset,
      apiVersion: config.apiVersion,
      useCdn: !useDevProxy,
      perspective: 'published',
      ...(useDevProxy
        ? {
            useProjectHostname: false,
            apiHost: `${window.location.origin}/sanity-api`,
          }
        : {}),
    })
  }

  return client
}
