// Static sitemap covering primary routes in both locales.
export default defineEventHandler(async (event) => {
  const { public: pub } = useRuntimeConfig()
  const base = pub.siteUrl
  const paths = ['/', '/news', '/tokenomics', '/white-paper', '/executive-summary']
  const urls: string[] = []
  for (const p of paths) {
    const en = `${base}${p === '/' ? '' : p}`
    const ru = `${base}/ru${p === '/' ? '' : p}`
    urls.push(`  <url><loc>${en}</loc><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="ru" href="${ru}"/></url>`)
    urls.push(`  <url><loc>${ru}</loc><xhtml:link rel="alternate" hreflang="en" href="${en}"/><xhtml:link rel="alternate" hreflang="ru" href="${ru}"/></url>`)
  }
  // News articles
  try {
    const res: any = await $fetch('https://news.smartholdem.io/api/sthnews?pagination[pageSize]=200&sort=date:desc')
    for (const a of (res?.data || [])) {
      urls.push(`  <url><loc>${base}/news/${a.id}</loc></url>`)
    }
  } catch {}
  setHeader(event, 'Content-Type', 'application/xml')
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls.join('\n')}
</urlset>`
})
