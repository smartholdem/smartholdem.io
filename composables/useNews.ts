// News API helper for SmartHoldem Strapi v4 (news.smartholdem.io).
// Returns { items, meta }. Image URLs are rewritten to locally-mirrored
// copies (downloaded at build time via scripts/fetch-news-images.mjs),
// with an automatic fallback to the remote host for anything not mirrored.
//
// **Offline resilience**: a full JSON snapshot of every news article is baked
// into the app bundle at build time (`assets/news-snapshot.json`). If the
// Strapi CMS is unreachable at runtime — either during initial SSG rendering
// or on subsequent client-side navigation — we transparently fall back to the
// baked snapshot so the user never sees an empty/error state.
// @ts-ignore — generated at build time; may be empty {} in dev before mirroring.
import imageManifest from '~/public/images/news-images/_manifest.json'
// @ts-ignore — generated at build time; may be [] in dev before mirroring.
import newsSnapshot from '~/assets/news-snapshot.json'
// Shared slug helpers (same implementation used by sitemap, RSS, prerender
// hook and the nginx redirect-map generator).
// @ts-ignore — plain .mjs module (relative path: resolvable by Vite AND nitro SSR)
import { buildNewsSlugs, newsSlugify } from '../server/utils/newsSlug.mjs'

export interface NewsItem {
  id: number
  title: string
  slug: string
  date: string
  tag: string
  tags?: string[]
  text: string
  article: string
  image: string | null
  imageRemote: string | null
}

const HOST = 'https://news.smartholdem.io'
const PLACEHOLDER = '/images/home/web_4_smarholdem_netfory.jpg'
const MANIFEST: Record<string, string> = (imageManifest as any) || {}
const SNAPSHOT: NewsItem[] = Array.isArray(newsSnapshot) ? (newsSnapshot as NewsItem[]) : []

// Deterministic id<->slug maps built from the full baked snapshot.
const SLUGS = buildNewsSlugs(SNAPSHOT)

// Slug for any news item: prefer the deduped snapshot map (stable), fall back
// to direct slugification for items newer than the build (live fetch only).
export function newsSlugOf(item: { id: number | string; title?: string }): string {
  return SLUGS.idToSlug.get(String(item.id)) || newsSlugify(item.title || '') || `news-${item.id}`
}

// ---------------------------------------------------------------------------
// Hashtag extraction (used to compute "related news" by shared tags).
// Tags are authored inline in article body as #smartholdem, #bitcoin, etc.
// Filters out:
//   - hex colors (#000000, #fff, #a3b) — pure hex strings
//   - tokens starting with a digit (#123)
//   - tokens with too many digits (msg56074241) — accept only tokens whose
//     digit ratio is < 40%.
//   - very short (<2) or very long (>30) tokens
// ---------------------------------------------------------------------------
const HASHTAG_RE = /#([A-Za-z][A-Za-z0-9_]{1,29})/g
const HEX_ONLY_RE = /^[0-9a-fA-F]{3,8}$/

export function extractHashtags(...sources: (string | undefined | null)[]): string[] {
  const text = sources.filter(Boolean).join(' ')
  const out = new Set<string>()
  let m: RegExpExecArray | null
  while ((m = HASHTAG_RE.exec(text)) !== null) {
    const raw = m[1]
    if (!raw || raw.length < 2 || raw.length > 30) continue
    if (HEX_ONLY_RE.test(raw)) continue // hex color
    const digits = (raw.match(/[0-9]/g) || []).length
    if (digits / raw.length > 0.4) continue // too digit-heavy (message ids etc.)
    out.add(raw.toLowerCase())
  }
  return [...out]
}

// Enrich baked snapshot items with their slug + extracted tags once at module init.
for (const it of SNAPSHOT) {
  ;(it as any).slug = newsSlugOf(it)
  ;(it as any).tags = extractHashtags(it.title, it.text, it.article)
}

// ---------------------------------------------------------------------------
// Related news: given a current article id, return up to `limit` related
// items. Ranking:
//   1. Articles that share the most hashtags with the current article (desc).
//   2. On ties, most recent date wins.
// Fallback: if the current article has no hashtags OR no related found,
// return the `limit` most recent articles (excluding the current one).
// ---------------------------------------------------------------------------
export function getRelatedNews(currentId: string | number, limit = 3): NewsItem[] {
  const idStr = String(currentId)
  const current = SNAPSHOT.find((it) => String(it.id) === idStr)
  const currentTags: string[] = current ? ((current as any).tags || []) : []
  const currentTagSet = new Set(currentTags)

  const others = SNAPSHOT.filter((it) => String(it.id) !== idStr)

  if (currentTagSet.size > 0) {
    const scored = others
      .map((it) => {
        const tags: string[] = (it as any).tags || []
        const overlap = tags.reduce((n, t) => n + (currentTagSet.has(t) ? 1 : 0), 0)
        return { it, overlap }
      })
      .filter((x) => x.overlap > 0)
      .sort((a, b) => {
        if (b.overlap !== a.overlap) return b.overlap - a.overlap
        const da = new Date(a.it.date || 0).getTime()
        const db = new Date(b.it.date || 0).getTime()
        return db - da
      })
      .slice(0, limit)
      .map((x) => x.it)

    if (scored.length) return scored
  }

  // Fallback: most-recent items (snapshot is already sorted date desc).
  return others.slice(0, limit)
}

function absolutise(url?: string | null): string | null {
  if (!url) return null
  return url.startsWith('http') ? url : `${HOST}${url.startsWith('/') ? '' : '/'}${url}`
}

// Map an absolute remote image URL to its locally mirrored copy if available.
function localise(remoteUrl: string | null): string | null {
  if (!remoteUrl) return null
  return MANIFEST[remoteUrl] || remoteUrl
}

function mapItem(raw: any): NewsItem {
  const a = raw?.attributes || raw || {}
  const imgAttr = a?.img?.data?.attributes || {}
  const formats = imgAttr?.formats || {}
  const best = formats?.medium?.url || formats?.small?.url || imgAttr?.url
  const remote = absolutise(best)
  const id = raw?.id ?? a?.id
  const title = a?.title || 'SmartHoldem Update'
  const text = a?.text || ''
  const article = a?.article || ''
  return {
    id,
    title,
    slug: newsSlugOf({ id, title }),
    date: a?.date || a?.createdAt || '',
    tag: a?.tag || 'News',
    tags: extractHashtags(title, text, article),
    text,
    article,
    image: localise(remote) || PLACEHOLDER,
    imageRemote: remote || PLACEHOLDER
  }
}

// ---------------------------------------------------------------------------
// Snapshot fallback helpers
// ---------------------------------------------------------------------------
function snapshotSlice(page: number, pageSize: number) {
  const start = Math.max(0, (page - 1) * pageSize)
  const items = SNAPSHOT.slice(start, start + pageSize)
  const total = SNAPSHOT.length
  const meta = {
    page,
    pageSize,
    pageCount: Math.max(1, Math.ceil(total / pageSize) || 1),
    total
  }
  return { items, meta }
}

function snapshotFind(id: string | number): NewsItem | null {
  const idNum = Number(id)
  return SNAPSHOT.find((it) => Number(it.id) === idNum) || null
}

// ---------------------------------------------------------------------------
// Public sync API — INSTANT baked-in access. Use these to render immediately
// with the last-known-good data. No network I/O.
// ---------------------------------------------------------------------------
export function getNewsSnapshot(page = 1, pageSize = 12) {
  return snapshotSlice(page, pageSize)
}

export function getNewsSnapshotById(id: string | number): NewsItem | null {
  return snapshotFind(id)
}

export function getNewsSnapshotBySlug(slug: string): NewsItem | null {
  const id = SLUGS.slugToId.get(String(slug).toLowerCase())
  return id ? snapshotFind(id) : null
}

// Universal resolver: accepts a canonical slug OR a legacy numeric id.
export function getNewsSnapshotByRef(ref: string | number): NewsItem | null {
  const s = String(ref)
  return /^\d+$/.test(s) ? snapshotFind(s) : getNewsSnapshotBySlug(s)
}

// ---------------------------------------------------------------------------
// Public async API — never throws. On network failure, returns baked snapshot
// data so the UI can render without any error state. Also used as a background
// "refresh" call after the instant render.
// ---------------------------------------------------------------------------
export async function fetchNews(page = 1, pageSize = 12) {
  const url = `${HOST}/api/sthnews?populate=img&pagination[pageSize]=${pageSize}&pagination[page]=${page}&sort=date:desc`
  try {
    const res: any = await $fetch(url, { timeout: 8000, retry: 0 })
    const items = (res?.data || []).map(mapItem)
    if (items.length) {
      const meta = res?.meta?.pagination || { page, pageSize, pageCount: 1, total: items.length }
      return { items, meta }
    }
    return snapshotSlice(page, pageSize)
  } catch (e) {
    if (process.dev) console.warn('[useNews] fetch failed, using baked snapshot:', (e as any)?.message || e)
    return snapshotSlice(page, pageSize)
  }
}

export async function fetchNewsById(id: string | number) {
  try {
    const url = `${HOST}/api/sthnews/${id}?populate=img`
    const res: any = await $fetch(url, { timeout: 8000, retry: 0 })
    if (res?.data) return mapItem(res.data)
  } catch { /* ignore, fall through to snapshot */ }
  try {
    const url2 = `${HOST}/api/sthnews?populate=img&filters[id][$eq]=${id}`
    const res2: any = await $fetch(url2, { timeout: 8000, retry: 0 })
    if (res2?.data?.[0]) return mapItem(res2.data[0])
  } catch { /* ignore */ }
  return snapshotFind(id)
}
