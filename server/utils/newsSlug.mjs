// Shared slug helpers for news URLs (/news/real-web-4-0).
// Plain ESM .mjs so the SAME implementation is importable from:
//  - the Nuxt app (composables, pages)
//  - Nitro server routes (sitemap.xml.ts, news/rss.xml.ts)
//  - the nuxt.config.ts prerender hook (jiti)
//  - node build scripts (scripts/*.mjs)

/**
 * "Real Web 4.0" -> "real-web-4-0"
 * Lowercase, diacritics stripped, punctuation/emoji dropped (latin, cyrillic
 * and digits kept), whitespace/underscores collapsed to single dashes.
 * @param {string} title
 * @returns {string}
 */
export function newsSlugify(title) {
  return String(title || '')
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')          // strip diacritics
    .replace(/[^\w\u0400-\u04FF\s-]/g, ' ')   // drop punctuation & emoji
    .trim()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

/**
 * Title accessor that works for both baked snapshot items ({ title })
 * and raw Strapi v4 rows ({ attributes: { title } }).
 * @param {any} raw
 * @returns {string}
 */
export function newsTitleOf(raw) {
  return raw?.title ?? raw?.attributes?.title ?? ''
}

/**
 * Builds deterministic id<->slug maps for a full list of news items.
 * Items are processed in ascending-id order so duplicate-title suffixes
 * (`-{id}`) never depend on fetch order. Empty titles fall back to `news-{id}`.
 * @param {Array<any>} items
 * @returns {{ idToSlug: Map<string,string>, slugToId: Map<string,string> }}
 */
export function buildNewsSlugs(items) {
  const sorted = [...(items || [])]
    .filter((it) => it?.id != null)
    .sort((a, b) => Number(a.id) - Number(b.id))
  const used = new Set()
  const idToSlug = new Map()
  const slugToId = new Map()
  for (const it of sorted) {
    const id = String(it.id)
    let slug = newsSlugify(newsTitleOf(it)) || `news-${id}`
    if (used.has(slug)) slug = `${slug}-${id}`
    used.add(slug)
    idToSlug.set(id, slug)
    slugToId.set(slug, id)
  }
  return { idToSlug, slugToId }
}

// ---------------------------------------------------------------------------
// Hashtag extraction — kept in this shared .mjs so it is importable from:
//   - Nitro server routes  (sitemap-tags.xml.ts)
//   - the nuxt.config.ts prerender hook  (jiti)
//   - the client composable (useNews.ts imports and re-exports it)
// The rules must match extractHashtags() in the composable exactly.
// ---------------------------------------------------------------------------
const HASHTAG_RE = /#([A-Za-z][A-Za-z0-9_]{1,29})/g
const HEX_ONLY_RE = /^[0-9a-fA-F]{3,8}$/

/**
 * @param {string} raw
 * @returns {boolean}
 */
export function isValidHashtag(raw) {
  if (!raw || raw.length < 2 || raw.length > 30) return false
  if (HEX_ONLY_RE.test(raw)) return false
  const digits = (raw.match(/[0-9]/g) || []).length
  if (digits / raw.length > 0.4) return false
  return true
}

/**
 * Extract normalized (lowercase, deduped) hashtags from any number of source
 * strings — title, text, article body, etc.
 * @param  {...(string | null | undefined)} sources
 * @returns {string[]}
 */
export function extractHashtagsFrom(...sources) {
  const text = sources.filter(Boolean).join(' ')
  const out = new Set()
  let m
  HASHTAG_RE.lastIndex = 0
  while ((m = HASHTAG_RE.exec(text)) !== null) {
    if (!isValidHashtag(m[1])) continue
    out.add(m[1].toLowerCase())
  }
  return [...out]
}

/**
 * Body accessor that works for both baked snapshot items and Strapi v4 rows.
 * @param {any} raw
 */
function newsBodyOf(raw) {
  const a = raw?.attributes || raw || {}
  return {
    title: a?.title || '',
    text: a?.text || '',
    article: a?.article || ''
  }
}

/**
 * Compute the top-N most-frequent hashtags across an entire news collection.
 * Ties broken alphabetically for deterministic build output.
 * @param {Array<any>} items
 * @param {number} limit  Max number of tags to return (default 20)
 * @returns {Array<{ tag: string; count: number }>}
 */
export function topNewsTags(items, limit = 20) {
  const freq = new Map()
  for (const raw of (items || [])) {
    const { title, text, article } = newsBodyOf(raw)
    const tags = extractHashtagsFrom(title, text, article)
    for (const t of tags) freq.set(t, (freq.get(t) || 0) + 1)
  }
  return [...freq.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count || a.tag.localeCompare(b.tag))
    .slice(0, limit)
}
