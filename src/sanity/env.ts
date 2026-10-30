const PROJECT_ID_PATTERN = /^[a-z0-9-]+$/
const DEFAULT_DATASET = 'production'
const DEFAULT_API_VERSION = '2025-02-19'

export interface PublicSanityConfig {
  projectId: string
  dataset: string
  apiVersion: string
}

export function getPublicSanityConfig(): PublicSanityConfig | null {
  const projectId = import.meta.env.VITE_SANITY_PROJECT_ID?.trim() ?? ''
  const dataset = import.meta.env.VITE_SANITY_DATASET?.trim() || DEFAULT_DATASET
  const apiVersion = import.meta.env.VITE_SANITY_API_VERSION?.trim() || DEFAULT_API_VERSION

  if (!PROJECT_ID_PATTERN.test(projectId) || !dataset) {
    return null
  }

  return { projectId, dataset, apiVersion }
}

export function isSanityConfigured(): boolean {
  return getPublicSanityConfig() !== null
}
