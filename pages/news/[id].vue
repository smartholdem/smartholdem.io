<template>
  <div class="container-x py-16">
    <NuxtLink :to="localePath('/news')" class="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-neon-cyan">
      <ArrowLeft class="h-4 w-4" /> {{ t('news.back') }}
    </NuxtLink>

    <div v-if="article" class="mx-auto max-w-3xl">
      <article>
        <div class="mb-4 flex items-center gap-2 text-sm text-secondary">
          <span class="mono rounded bg-neon-cyan/10 px-2 py-0.5 text-neon-cyan">{{ article.tag }}</span>
          <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        </div>
        <h1 class="text-3xl font-bold leading-tight sm:text-4xl">{{ article.title }}</h1>
        <img v-if="article.image" :src="article.image" :alt="article.title" class="mt-8 w-full rounded-2xl border hair-border" @error="onImgError" />
        <div class="prose-sth mt-8 text-[1.02rem] leading-relaxed" v-html="article.article || article.text"></div>
      </article>
    </div>
    <div v-else class="py-24 text-center text-secondary">{{ t('news.error') }}</div>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const config = useRuntimeConfig()
const id = route.params.id

// ---------------------------------------------------------------------------
// 100% static SSG: hydrate from the baked-in snapshot synchronously. Every
// article route is pre-generated at build time (see nuxt.config.ts hook), so
// in 99% of visits the full article is already served as static HTML with
// zero network requests on the client.
// ---------------------------------------------------------------------------
const article = ref(getNewsSnapshotById(id))

// Localized OG meta: locale-aware URL + og:locale for all 18 languages.
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg(`/news/${id}`)
useBreadcrumbLd([{ key: 'nav.news', path: '/news' }, { name: () => article.value?.title || '', path: `/news/${id}` }])

// Fall back to the remote Strapi image if the local mirror is missing.
const onImgError = (e) => {
  const remote = article.value?.imageRemote
  if (remote && e.target.src !== remote) e.target.src = remote
}

const localeMap = { en:'en-US', ru:'ru-RU', zh:'zh-CN', id:'id-ID', ko:'ko-KR', th:'th-TH', es:'es-ES', vi:'vi-VN', fr:'fr-FR', de:'de-DE', kk:'kk-KZ', pt:'pt-BR', uz:'uz-UZ', mn:'mn-MN', ja:'ja-JP', sw:'sw-KE', ar:'ar-SA', hi:'hi-IN' }
const formatDate = (d) => {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString(localeMap[locale.value] || 'en-US', { year:'numeric', month:'long', day:'numeric' }) } catch { return d }
}

watchEffect(() => {
  if (article.value) {
    // Prefer the build-time generated OG banner (public/og/news-{id}.png).
    // Falls back to the article's own image if the banner isn't available.
    const ogBanner = `${config.public.siteUrl}/og/news-${article.value.id}.png`
    useSeoMeta({
      title: `${article.value.title} | SmartHoldem News`,
      description: (article.value.text || '').slice(0, 160),
      ogTitle: article.value.title,
      ogType: 'article',
      ogUrl: pageUrl.value,
      ogLocale: ogLocale.value,
      ogLocaleAlternate: ogLocaleAlternate.value,
      ogImage: ogBanner,
      twitterCard: 'summary_large_image',
      twitterImage: ogBanner
    })
    useHead({
      link: [{ rel: 'canonical', href: pageUrl.value }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: article.value.title,
          description: (article.value.text || '').slice(0, 160),
          url: pageUrl.value,
          mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl.value },
          inLanguage: locale.value,
          image: [ogBanner, ...(article.value.image ? [article.value.image] : [])],
          datePublished: article.value.date,
          dateModified: article.value.updatedAt || article.value.date,
          author: { '@type': 'Organization', name: 'SmartHoldem', url: config.public.siteUrl },
          publisher: { '@type': 'Organization', name: 'SmartHoldem', logo: { '@type': 'ImageObject', url: `${config.public.siteUrl}/favicon.png` } }
        })
      }]
    })
  }
})
</script>
