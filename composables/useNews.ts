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

export interface NewsItem {
  id: number
  title: string
  date: string
  tag: string
  text: string
  article: string
  image: string | null
  imageRemote: string | null
}

const HOST = 'https://news.smartholdem.io'
const PLACEHOLDER = '/images/home/web_4_smarholdem_netfory.jpg'
const MANIFEST: Record<string, string> = (imageManifest as any) || {}
const SNAPSHOT: NewsItem[] = Array.isArray(newsSnapshot) ? (newsSnapshot as NewsItem[]) : []

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
  return {
    id: raw?.id ?? a?.id,
    title: a?.title || 'SmartHoldem Update',
    date: a?.date || a?.createdAt || '',
    tag: a?.tag || 'News',
    text: a?.text || '',
    article: a?.article || '',
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
