// /sitemap-tags.xml — separate sitemap dedicated to topic-cluster hub pages.
// Emits every `/news/tag/{tag}` URL for the TOP-20 most-frequent hashtags
// across the entire snapshot, cross-linked with hreflang alternates across
// all 18 locales (+ x-default). Kept in its own file (rather than merged
// into /sitemap.xml) so Search Console reports discovery of cluster hubs
// independently from article + static pages.
// @ts-ignore — plain .mjs module shared with app, sitemap.xml and RSS
import { topNewsTags } from '../utils/newsSlug.mjs'

const LOCALES: { code: string; lang: string }[] = [
  { code: 'en', lang: 'en-US' },
  { code: 'ru', lang: 'ru-RU' },
  { code: 'zh', lang: 'zh-Hans' },
  { code: 'id', lang: 'id-ID' },
  { code: 'ko', lang: 'ko-KR' },
  { code: 'th', lang: 'th-TH' },
  { code: 'es', lang: 'es-ES' },
  { code: 'vi', lang: 'vi-VN' },
  { code: 'fr', lang: 'fr-FR' },
  { code: 'de', lang: 'de-DE' },
  { code: 'kk', lang: 'kk-KZ' },
  { code: 'pt', lang: 'pt-BR' },
  { code: 'uz', lang: 'uz-UZ' },
  { code: 'mn', lang: 'mn-MN' },
  { code: 'ja', lang: 'ja-JP' },
  { code: 'sw', lang: 'sw-KE' },
  { code: 'ar', lang: 'ar-SA' },
  { code: 'hi', lang: 'hi-IN' }
]

const TAG_LIMIT = 20

export default defineEventHandler(async (event) => {
  const { public: pub } = useRuntimeConfig()
  const base = (pub.siteUrl as string).replace(/\/+$/, '')

  const urlFor = (code: string, path: string) => {
    const p = path === '/' ? '' : path
    return code === 'en' ? `${base}${p}` || base : `${base}/${code}${p}`
  }

  const altBlock = (path: string) =>
    LOCALES.map(l => `<xhtml:link rel="alternate" hreflang="${l.lang}" href="${urlFor(l.code, path)}"/>`).join('') +
    `<xhtml:link rel="alternate" hreflang="x-default" href="${urlFor('en', path)}"/>`

  // Live-first, snapshot-fallback fetch (same policy as sitemap.xml).
  let items: any[] = []
  try {
    const res: any = await $fetch('https://news.smartholdem.io/api/sthnews?pagination[pageSize]=200&sort=date:desc')
    items = res?.data || []
  } catch {}
  if (!items.length) {
    try {
      const { readFile } = await import('node:fs/promises')
      const { resolve } = await import('node:path')
      const raw = await readFile(resolve(process.cwd(), 'assets/news-snapshot.json'), 'utf-8')
      const snap = JSON.parse(raw)
      items = Array.isArray(snap) ? snap : []
    } catch {}
  }

  const tags = topNewsTags(items, TAG_LIMIT)
  const urls: string[] = []

  // News root as the parent-of-cluster hub (helps Search Console associate
  // the sitemap with the news section).
  urls.push(`  <url><loc>${urlFor('en', '/news')}</loc>${altBlock('/news')}<changefreq>daily</changefreq></url>`)

  // One <url> entry per tag × locale.
  for (const { tag } of tags) {
    const p = `/news/tag/${tag}`
    const alts = altBlock(p)
    for (const l of LOCALES) {
      urls.push(`  <url><loc>${urlFor(l.code, p)}</loc>${alts}<changefreq>weekly</changefreq></url>`)
    }
  }

  setHeader(event, 'Content-Type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`
})
