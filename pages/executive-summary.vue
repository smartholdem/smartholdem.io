<template>
  <div class="container-x py-16">
    <header class="mx-auto max-w-3xl text-center">
      <p class="eyebrow mb-3">Executive Summary</p>
      <h1 class="text-4xl font-bold sm:text-5xl">Netfory — Executive Summary</h1>
      <p class="mt-4 text-secondary">The First Implementation of Web 4.0</p>
      <a href="/docs/Netfory - Executive Summary.pdf" download class="btn-outline mt-6 inline-flex items-center gap-2">
        <Download class="h-4 w-4" /> Download PDF
      </a>
    </header>
    <div class="mx-auto mt-14 max-w-3xl">
      <article class="prose-wp" v-html="html"></article>
    </div>
  </div>
</template>

<script setup>
import { Download } from 'lucide-vue-next'
import { parseMarkdownDoc } from '~/composables/useMarkdownDoc'
// @ts-ignore raw markdown baked at build time (SSG-friendly)
import execRaw from '~/assets/docs/executive-summary.md?raw'

// Synchronous parse (SSG-friendly, no useState payload — avoids hydration bloat).
const html = computed(() => (execRaw ? parseMarkdownDoc(execRaw).html : '<p>Coming soon.</p>'))

const { t, locale } = useI18n()
const config = useRuntimeConfig()
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/executive-summary')
useBreadcrumbLd([{ key: 'nav.execSummary', path: '/executive-summary' }])
useSeoMeta({
  title: () => t('execSummary.seo.title'),
  description: () => t('execSummary.seo.description'),
  ogTitle: () => t('execSummary.seo.title'),
  ogDescription: () => t('execSummary.seo.description'),
  ogType: 'article',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }],
  script: [{
    type: 'application/ld+json',
    innerHTML: () => JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: t('execSummary.seo.title'),
      description: t('execSummary.seo.description'),
      url: pageUrl.value,
      mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl.value },
      inLanguage: locale.value,
      author: { '@type': 'Organization', name: 'SmartHoldem Core Team' },
      publisher: { '@id': `${config.public.siteUrl}/#organization` },
      about: 'Web 4.0 decentralized infrastructure protocol'
    })
  }]
})
</script>
