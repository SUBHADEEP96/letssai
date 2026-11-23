import { test } from 'node:test'
import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import { getBrochure, getAllBrochures } from '../lib/brochures'

test('brochure catalog includes real estate PDF brochure and resolves by slug and alias', () => {
  const all = getAllBrochures()
  assert.ok(all.length >= 1, 'Should have at least one brochure registered')

  const byExact = getBrochure('Letssai-Solutions-for-Real-Estate-Businesses')
  assert.ok(byExact, 'Should resolve by exact slug')
  assert.equal(byExact.title, 'LetssAI Solutions for Real Estate Businesses')
  assert.equal(byExact.pageCount, 8)
  assert.ok(byExact.highlights.length >= 3)

  const byAlias = getBrochure('real-estate')
  assert.ok(byAlias, 'Should resolve by alias real-estate')
  assert.equal(byAlias.slug, byExact.slug)

  const byLower = getBrochure('letssai-solutions-for-real-estate-businesses')
  assert.ok(byLower, 'Should resolve case-insensitively')

  // Verify physical PDF file exists in public/brochures/
  const publicPdfPath = path.join(
    process.cwd(),
    'public',
    byExact.pdfUrl.replace(/^\//, '')
  )
  assert.ok(
    fs.existsSync(publicPdfPath),
    `PDF file must exist at ${publicPdfPath}`
  )

  const stat = fs.statSync(publicPdfPath)
  assert.ok(stat.size > 1_000_000, 'PDF file size should be > 1MB')
})
