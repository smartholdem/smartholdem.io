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
useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Organization',
            name: 'SmartHoldem',
            url: config.public.siteUrl,
            logo: `${config.public.siteUrl}/favicon.png`,
            sameAs: [
              'https://github.com/smartholdem',
              'https://github.com/NETFORY'
            ]
          },
          {
            '@type': 'WebSite',
            name: 'SmartHoldem WEB 4.0',
            url: config.public.siteUrl
          }
        ]
      })
    }
  ]
})
</script>
