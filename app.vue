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
useHead(() => ({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs?.lang || locale.value,
    dir: i18nHead.value.htmlAttrs?.dir || 'ltr',
    class: 'dark'
  },
  link: i18nHead.value.link || [],
  meta: i18nHead.value.meta || []
}))

// Organization + WebSite JSON-LD (site-wide, great for AI / search indexing)
const ORG_ID = `${config.public.siteUrl}/#organization`
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
