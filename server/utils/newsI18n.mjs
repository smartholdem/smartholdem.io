// Shared news-translation helpers (plain .mjs: used by the LM Studio
// translator script, Nitro server routes, the sitemap and the app).
//
// Translations live in data/news-i18n/{lc}.json:
//   { "<newsId>": { title, text, article, hash, model, at } }
// `hash` = sha256 of the ENGLISH source (title + text + article). A translation
// is only used while its hash matches the current English article, so an
// edited article silently falls back to English until it is re-translated.
import { createHash } from 'node:crypto'
import { readFileSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

export const NEWS_TR_LOCALES = ['ru', 'zh', 'id', 'ko', 'th', 'es', 'vi', 'fr', 'de', 'kk', 'pt', 'uz', 'mn', 'ja', 'sw', 'ar', 'hi']

export const NEWS_TR_DIR = resolve(process.cwd(), 'data', 'news-i18n')

export function newsSourceHash (item) {
  return createHash('sha256')
    .update(String(item?.title || '')).update('\u0000')
    .update(String(item?.text || '')).update('\u0000')
    .update(String(item?.article || ''))
    .digest('hex')
    .slice(0, 16)
}

const cache = new Map()

export function loadNewsTranslations (lc, { fresh = false } = {}) {
  if (!NEWS_TR_LOCALES.includes(lc)) return {}
  const file = join(NEWS_TR_DIR, `${lc}.json`)
  let mtime = 0
  try { mtime = existsSync(file) ? statSync(file).mtimeMs : 0 } catch {}
  const hit = cache.get(lc)
  if (!fresh && hit && hit.mtime === mtime) return hit.data
  let data = {}
  try {
    if (mtime) data = JSON.parse(readFileSync(file, 'utf-8')) || {}
  } catch (e) {
    console.warn(`[news-i18n] cannot read ${file}:`, e?.message || e)
  }
  cache.set(lc, { mtime, data })
  return data
}

// Valid (hash-matching) translation of `item` for locale `lc`, or null.
export function getNewsTranslation (lc, item) {
  if (!item || item.id == null) return null
  const entry = loadNewsTranslations(lc)[String(item.id)]
  if (!entry || !entry.title || !entry.article) return null
  if (entry.hash !== newsSourceHash(item)) return null
  return entry
}

// Locales (excluding en) that have a valid translation of `item`.
export function newsTranslatedLocales (item) {
  return NEWS_TR_LOCALES.filter(lc => !!getNewsTranslation(lc, item))
}

// English snapshot (written by scripts/fetch-news-images.mjs at build time).
export function readNewsSnapshot () {
  try {
    const raw = readFileSync(resolve(process.cwd(), 'assets', 'news-snapshot.json'), 'utf-8')
    const snap = JSON.parse(raw)
    return Array.isArray(snap) ? snap : []
  } catch {
    return []
  }
}
