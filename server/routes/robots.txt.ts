export default defineEventHandler((event) => {
  const { public: pub } = useRuntimeConfig()
  setHeader(event, 'Content-Type', 'text/plain')
  return `User-agent: *
Allow: /

Sitemap: ${pub.siteUrl}/sitemap.xml
`
})
