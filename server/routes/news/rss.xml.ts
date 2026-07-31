// SSG RSS 2.0 feed for SmartHoldem news.
//
// Data source: the baked-in `assets/news-snapshot.json` produced by
// `scripts/fetch-news-images.mjs`. Zero network I/O — the feed is generated
// deterministically at `nuxt generate` time from the last-known-good snapshot.
//
// Images: we serve LOCAL mirrored copies (e.g. `/images/news-images/xyz.png`)
// under our own domain — NOT the remote Strapi CMS. This keeps the feed
// available even when `news.smartholdem.io` is down.

import { readFile } from 'node:fs/promises'
import { resolve } from 'node:path'

interface NewsItem {
  id: number | string
  title: string
  date: string
  tag?: string
  text?: string
  article?: string
  image?: string | null
}

// --- helpers ---------------------------------------------------------------
const escXml = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

// Strip HTML tags & collapse whitespace for the plain-text <description>.
const stripHtml = (s: string) =>
  String(s || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()

const truncate = (s: string, max = 480) =>
  s.length > max ? s.slice(0, max).replace(/\s+\S*$/, '') + '…' : s

const toRfc822 = (dateStr: string) => {
  const d = new Date(dateStr)
  return Number.isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString()
}

// Guess MIME type from image extension.
const mimeFromPath = (p: string) => {
  const ext = (p.split('.').pop() || '').toLowerCase()
  return ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg'
    : ext === 'gif' ? 'image/gif'
    : ext === 'webp' ? 'image/webp'
    : ext === 'svg' ? 'image/svg+xml'
    : 'image/png'
}

// --- handler ---------------------------------------------------------------
export default defineEventHandler(async (event) => {
  const { public: pub } = useRuntimeConfig()
  const base = (pub.siteUrl || 'https://smartholdem.io').replace(/\/+$/, '')

  // Load baked snapshot (works both at prerender and runtime).
  let items: NewsItem[] = []
  try {
    const raw = await readFile(resolve(process.cwd(), 'assets/news-snapshot.json'), 'utf-8')
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed)) items = parsed
  } catch (e) {
    console.warn('[news/rss] snapshot read failed:', (e as any)?.message || e)
  }

  // Sort by date desc, cap at 100 entries (typical RSS practice).
  items = items
    .filter((it) => it && it.id != null)
    .sort((a, b) => String(b.date).localeCompare(String(a.date)))
    .slice(0, 100)

  // Absolute URL to a locally-mirrored image; falls back to a site-wide placeholder.
  const imageUrl = (rel: string | null | undefined) => {
    if (!rel) return `${base}/images/home/web_4_smarholdem_netfory.jpg`
    if (rel.startsWith('http')) return rel                  // already absolute
    return `${base}${rel.startsWith('/') ? '' : '/'}${rel}` // ensure leading slash
  }

  const lastBuild = items[0]?.date ? toRfc822(items[0].date) : new Date().toUTCString()

  const xmlItems = items.map((it) => {
    const link = `${base}/news/${it.id}`
    const img = imageUrl(it.image)
    const imgMime = mimeFromPath(img)
    // Prefer full article body over the short teaser text.
    const bodyHtml = it.article || it.text || ''
    const bodyText = truncate(stripHtml(bodyHtml), 480)
    return `  <item>
    <title>${escXml(it.title || 'SmartHoldem Update')}</title>
    <link>${escXml(link)}</link>
    <guid isPermaLink="true">${escXml(link)}</guid>
    <pubDate>${escXml(toRfc822(it.date))}</pubDate>${
      it.tag ? `\n    <category>${escXml(it.tag)}</category>` : ''
    }
    <enclosure url="${escXml(img)}" type="${imgMime}" length="0" />
    <media:content url="${escXml(img)}" medium="image" type="${imgMime}" />
    <media:thumbnail url="${escXml(img)}" />
    <description>${escXml(bodyText)}</description>
    <content:encoded><![CDATA[<p><img src="${img}" alt="${escXml(it.title)}" /></p>${bodyHtml}]]></content:encoded>
  </item>`
  }).join('\n')

  setHeader(event, 'Content-Type', 'application/rss+xml; charset=utf-8')
  setHeader(event, 'Cache-Control', 'public, max-age=600')

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:content="http://purl.org/rss/1.0/modules/content/"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:media="http://search.yahoo.com/mrss/">
  <channel>
    <title>SmartHoldem News</title>
    <link>${base}/news</link>
    <description>Latest updates from the SmartHoldem Web 4.0 ecosystem — Netfory, STH, dApps, staking, and network announcements.</description>
    <language>en</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <generator>SmartHoldem Nuxt SSG</generator>
    <image>
      <url>${base}/favicon.png</url>
      <title>SmartHoldem</title>
      <link>${base}</link>
    </image>
    <atom:link href="${base}/news/rss.xml" rel="self" type="application/rss+xml" />
${xmlItems}
  </channel>
</rss>`
})
