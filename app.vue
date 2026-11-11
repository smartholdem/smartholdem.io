<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
// Global default SEO / OpenGraph. Individual pages override via useSeoMeta.
const { locale } = useI18n()
const config = useRuntimeConfig()

// Auto hreflang + og:locale alternates for SEO (server-rendered)
const i18nHead = useLocaleHead({ addSeoAttributes: true })
const route = useRoute()
// Pages with `definePageMeta({ englishOnlyContent: true })` (news articles,
// White Paper, Executive Summary) have the same English body in every locale.
// They canonicalize to the English URL, so hreflang alternates must NOT be
// emitted there (hreflang + cross-locale canonical = conflicting signals).
// News articles set `useState('hreflang-allow')` = { path, codes } with the
// locales that really have a translation (see pages/news/[slug].vue).
const hreflangAllow = useState('hreflang-allow', () => null)
const allowedCodes = computed(() => {
  const st = hreflangAllow.value
  if (st && st.path === route.path) return st.codes || []
  if (route.meta?.englishOnlyContent) return []
  return null // all locales
})
const codeOf = (v = '') => String(v).split(/[-_]/)[0].toLowerCase()
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang || locale.value,
    dir: i18nHead.value.htmlAttrs?.dir || 'ltr',
    class: 'dark'
  },
  link: (i18nHead.value.link || []).filter((l) => {
    const codes = allowedCodes.value
    if (!codes || !l?.hreflang) return true
    if (codes.length < 2) return false // no real translations → no hreflang at all
    return l.hreflang === 'x-default' || codes.includes(codeOf(l.hreflang))
  }),
  meta: (i18nHead.value.meta || []).filter((m) => {
    const codes = allowedCodes.value
    if (!codes || m?.property !== 'og:locale:alternate') return true
    return codes.includes(codeOf(m.content))
  })
}))

// Organization + WebSite JSON-LD (site-wide, great for AI / search indexing)
const ORG_ID = `${config.public.siteUrl}/#organization`
// Browser-language auto-redirect (first visit only, never for crawlers) —
// inline + critical so it runs before the page paints (see utils/browserLocale.ts)
useHead({
  script: [{ key: 'browser-locale', innerHTML: browserLocaleScript(), tagPriority: 'critical' }]
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            '@id': ORG_ID,
            name: 'SmartHoldem',
            url: config.public.siteUrl,
            logo: {
              '@type': 'ImageObject',
              url: `${config.public.siteUrl}/favicon.png`
            },
            description: 'SmartHoldem \u2014 Web 4.0 ecosystem powered by the Netfory network: decentralized hosting, DPoS blockchain and the STH coin.',
            sameAs: [
              'https://x.com/smartholdem',
              'https://t.me/smartholdem',
              'https://www.youtube.com/@smartholdem',
              'https://github.com/smartholdem',
              'https://github.com/NETFORY',
              'https://coinmarketcap.com/currencies/smartholdem',
              'https://coinpaprika.com/coin/sth-smartholdem'
            ]
          },
          {
            '@type': 'WebSite',
            '@id': `${config.public.siteUrl}/#website`,
            name: 'SmartHoldem WEB 4.0',
            url: config.public.siteUrl,
            publisher: { '@id': ORG_ID }
          }
        ]
      })
    }
  ]
})
</script>
