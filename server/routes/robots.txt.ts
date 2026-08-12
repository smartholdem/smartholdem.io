export default defineEventHandler((event) => {
  const { public: pub } = useRuntimeConfig()
  const base = (pub.siteUrl as string).replace(/\/+$/, '')
  setHeader(event, 'Content-Type', 'text/plain')
  return `User-agent: *
Allow: /

Sitemap: ${base}/sitemap.xml
Sitemap: ${base}/sitemap-tags.xml
`
})
