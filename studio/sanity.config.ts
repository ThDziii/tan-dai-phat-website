import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID?.trim()
const dataset = process.env.SANITY_STUDIO_DATASET?.trim() || 'production'

if (!projectId) {
  throw new Error(
    'Thiếu SANITY_STUDIO_PROJECT_ID. Sao chép studio/.env.example thành studio/.env và điền project ID từ sanity.io/manage.',
  )
}

export default defineConfig({
  name: 'tan-dai-phat',
  title: 'Tân Đại Phát',
  projectId,
  dataset,
  plugins: [structureTool()],
  schema: {
    types: schemaTypes,
  },
})
