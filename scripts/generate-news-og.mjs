#!/usr/bin/env node
/**
 * scripts/generate-news-og.mjs
 *
 * Build-time generator: for every news article in `assets/news-snapshot.json`
 * produce a unique 1200×630 Open Graph banner and save to
 * `public/og/news-{id}.png`. These images are baked into the SSG output and
 * referenced from <meta property="og:image"> on each `/news/{id}` page.
 *
 * Behaviour:
 *   - Idempotent per (id + date): a manifest tracks (id → date) so unchanged
 *     articles skip regeneration; updated ones get refreshed.
 *   - Uses `sharp` to composite an SVG (auto-scales & wraps title).
 *   - Handles all Unicode (Cyrillic, CJK, Arabic) via native SVG font rendering.
 *   - Never fails the build: on any error, that single article is skipped and
 *     the page will fall back to the site-wide OG image.
 *
 * Design (SmartHoldem cyberpunk theme):
 *   - #0A0E27 navy bg + #151B3B surface
 *   - #00D4FF cyan + #7C3AED purple radial glows
 *   - 80×80 grid lines (faint)
 *   - Neon corner brackets in cyan
 *   - Article date (top-right, monospace)
 *   - Article title (center-left, wrapped, up to 4 lines)
 *   - "SmartHoldem News" wordmark (top-left) + "smartholdem.io" URL (bottom)
 */

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dirname = dirname(fileURLToPath(import.meta.url))
const PROJECT_ROOT = resolve(__dirname, '..')

const SNAPSHOT   = resolve(PROJECT_ROOT, 'assets', 'news-snapshot.json')
const OUTPUT_DIR = resolve(PROJECT_ROOT, 'public', 'og')
const MANIFEST   = join(OUTPUT_DIR, '_manifest.json')

const W = 1200, H = 630
const log  = (...a) => console.log('[news-og]', ...a)
const warn = (...a) => console.warn('[news-og]', ...a)

const ensureDir = (dir) => { if (!existsSync(dir)) mkdirSync(dir, { recursive: true }) }

// ── Helpers ─────────────────────────────────────────────────────────────────
const svgEscape = (s) =>
  String(s || '')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// Strip leading emoji-only prefixes (rendered as tofu in generic system fonts).
const stripLeadingEmoji = (s) => String(s || '').replace(/^[^\p{L}\p{N}]+/u, '').trim()

const wrapTitle = (title, maxLines = 4, maxCharsPerLine = 26) => {
  const words = String(title || '').split(/\s+/).filter(Boolean)
  const lines = []
  let cur = ''
  for (const w of words) {
    if (!cur) { cur = w; continue }
    if ((cur.length + 1 + w.length) <= maxCharsPerLine) {
      cur += ' ' + w
    } else {
      lines.push(cur)
      cur = w
      if (lines.length === maxLines - 1 && words.indexOf(w) < words.length - 1) {
        const rest = words.slice(words.indexOf(w)).join(' ')
        cur = rest.length > maxCharsPerLine ? rest.substring(0, maxCharsPerLine - 1) + '…' : rest
        break
      }
    }
  }
  if (cur) lines.push(cur)
  return lines.slice(0, maxLines)
}

const pickTitleSize = (title) => {
  const len = String(title || '').length
  if (len <= 40) return 78
  if (len <= 70) return 66
  if (len <= 100) return 56
  return 48
}

const formatDate = (dateStr) => {
  if (!dateStr) return ''
  const d = new Date(dateStr)
  if (Number.isNaN(d.getTime())) return dateStr
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
  return `${String(d.getUTCDate()).padStart(2,'0')} ${months[d.getUTCMonth()]} ${d.getUTCFullYear()}`
}

// ── SVG builder ─────────────────────────────────────────────────────────────
const buildSvg = (article) => {
  const rawTitle = stripLeadingEmoji(article.title || 'SmartHoldem News')
  const title = rawTitle || 'SmartHoldem News'
  const size  = pickTitleSize(title)
  const lines = wrapTitle(title, 4, size >= 66 ? 22 : (size >= 56 ? 26 : 30))
  const lineH = Math.round(size * 1.15)
  const dateStr = formatDate(article.date)

  const blockH = lines.length * lineH
  const startY = 60 + (450 - blockH) / 2 + size

  const titleTspans = lines.map((line, i) => {
    const y = startY + i * lineH
    return `<tspan x="80" y="${y}">${svgEscape(line)}</tspan>`
  }).join('')

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"  stop-color="#0A0E27"/>
      <stop offset="100%" stop-color="#151B3B"/>
    </linearGradient>
    <radialGradient id="glowC" cx="20%" cy="20%" r="55%">
      <stop offset="0%"  stop-color="#00D4FF" stop-opacity="0.28"/>
      <stop offset="100%" stop-color="#00D4FF" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glowP" cx="85%" cy="85%" r="55%">
      <stop offset="0%"  stop-color="#7C3AED" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#7C3AED" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#1e293b" stroke-width="1" stroke-opacity="0.4"/>
    </pattern>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <rect width="${W}" height="${H}" fill="url(#grid)"/>
  <rect width="${W}" height="${H}" fill="url(#glowC)"/>
  <rect width="${W}" height="${H}" fill="url(#glowP)"/>

  <!-- Corner brackets -->
  <g stroke="#00D4FF" stroke-width="4" fill="none">
    <path d="M 50 100 L 50 50 L 100 50"/>
    <path d="M ${W-50} 100 L ${W-50} 50 L ${W-100} 50"/>
    <path d="M 50 ${H-100} L 50 ${H-50} L 100 ${H-50}"/>
    <path d="M ${W-50} ${H-100} L ${W-50} ${H-50} L ${W-100} ${H-50}"/>
  </g>

  <!-- Top-left brand + top-right date -->
  <text x="80" y="90"
        font-family="'Liberation Sans','DejaVu Sans','Noto Sans',Arial,sans-serif"
        font-size="22" font-weight="700" letter-spacing="4" fill="#00D4FF">
    SMARTHOLDEM NEWS
  </text>
  ${dateStr ? `<text x="${W - 80}" y="90" text-anchor="end"
        font-family="'DejaVu Sans Mono','Liberation Mono',monospace"
        font-size="22" letter-spacing="2" fill="#94A3B8">
    ${svgEscape(dateStr)}
  </text>` : ''}

  <!-- Title -->
  <text font-family="'Liberation Sans','DejaVu Sans','Noto Sans',Arial,sans-serif"
        font-size="${size}" font-weight="800" fill="#FFFFFF">
    ${titleTspans}
  </text>

  <!-- Bottom bar -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#00D4FF"/>
  <text x="80" y="${H - 30}"
        font-family="'Liberation Sans','DejaVu Sans','Noto Sans',Arial,sans-serif"
        font-size="20" font-weight="700" letter-spacing="3" fill="#FFFFFF">
    WEB 4.0 · NETFORY
  </text>
  <text x="${W - 80}" y="${H - 30}" text-anchor="end"
        font-family="'DejaVu Sans Mono','Liberation Mono',monospace"
        font-size="20" letter-spacing="2" fill="#00D4FF">
    smartholdem.io
  </text>
</svg>`
}

// ── Main ────────────────────────────────────────────────────────────────────
async function main () {
  if (!existsSync(SNAPSHOT)) {
    warn('snapshot not found — skipping OG generation'); return
  }
  const snapshot = JSON.parse(readFileSync(SNAPSHOT, 'utf-8'))
  if (!Array.isArray(snapshot) || !snapshot.length) {
    warn('snapshot empty — nothing to do'); return
  }
  ensureDir(OUTPUT_DIR)

  let manifest = {}
  if (existsSync(MANIFEST)) {
    try { manifest = JSON.parse(readFileSync(MANIFEST, 'utf-8')) } catch { manifest = {} }
  }

  let generated = 0, skipped = 0, failed = 0
  for (const article of snapshot) {
    if (article?.id == null) continue
    const id = article.id
    const cacheKey = String(article.date || '') + '|' + String(article.title || '')
    const outFile = join(OUTPUT_DIR, `news-${id}.png`)
    if (manifest[id] === cacheKey && existsSync(outFile)) { skipped++; continue }
    try {
      const svg = buildSvg(article)
      await sharp(Buffer.from(svg)).png({ compressionLevel: 9, quality: 92 }).toFile(outFile)
      manifest[id] = cacheKey
      generated++
    } catch (e) {
      warn(`✖ failed for id=${id}:`, e.message || e)
      failed++
    }
  }

  writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2))
  log(`done. generated=${generated} skipped=${skipped} failed=${failed} total=${snapshot.length}`)
}

main().catch((e) => { warn('FATAL:', e); process.exit(0) /* never fail the build */ })
