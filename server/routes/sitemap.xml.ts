// Full sitemap: every static page + every news article, in all 18 locales,
// with hreflang alternates (+ x-default pointing to the default `en` URL).
// URLs are emitted WITHOUT trailing slashes to match canonical tags.

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

// Every prerendered static page of the site.
const PAGES = [
  '/',
  '/news',
  '/white-paper',
  '/executive-summary',
  '/blockchain',
  '/tokenomics',
  '/get-sth',
  '/glossary',
  '/dapps',
  '/mission',
  '/trust-and-safety',
  '/terms'
]

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

  const urls: string[] = []

  // Static pages × all locales
  for (const p of PAGES) {
    const alts = altBlock(p)
    for (const l of LOCALES) {
      urls.push(`  <url><loc>${urlFor(l.code, p)}</loc>${alts}</url>`)
    }
  }

  // News articles: live Strapi first, baked snapshot as fallback
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

  for (const a of items) {
    if (a?.id == null) continue
    const p = `/news/${a.id}`
    const alts = altBlock(p)
    for (const l of LOCALES) {
      urls.push(`  <url><loc>${urlFor(l.code, p)}</loc>${alts}</url>`)
    }
  }

  setHeader(event, 'Content-Type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`
})
