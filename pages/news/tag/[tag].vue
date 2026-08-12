<template>
  <div class="container-x py-16">
    <!-- Breadcrumb + title -->
    <header class="mx-auto max-w-3xl text-center">
      <nav class="mb-4 flex items-center justify-center gap-2 text-sm text-secondary" aria-label="Breadcrumb">
        <NuxtLink :to="localePath('/news')" class="hover:text-neon-cyan">{{ t('news.title') }}</NuxtLink>
        <span aria-hidden="true">/</span>
        <span class="text-primary">#{{ tagParam }}</span>
      </nav>
      <p class="eyebrow mb-3">{{ t('news.tagCluster.eyebrow') }}</p>
      <h1 class="text-4xl font-bold sm:text-5xl">
        <span class="mono text-neon-cyan">#{{ tagParam }}</span>
      </h1>
      <p class="mt-4 text-secondary">{{ t('news.tagCluster.subtitle', { tag: tagParam, n: items.length }) }}</p>
      <div class="mt-6 flex items-center justify-center gap-4">
        <NuxtLink :to="localePath('/news')" class="inline-flex items-center gap-2 text-sm text-secondary hover:text-neon-cyan">
          <ArrowLeft class="h-4 w-4" /> {{ t('news.back') }}
        </NuxtLink>
      </div>
    </header>

    <!-- Grid -->
    <div v-if="items.length" class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="a in items" :key="a.id" class="group flex flex-col overflow-hidden rounded-2xl border hair-border surface transition-all hover:border-neon-cyan/40 hover:-translate-y-1">
        <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="block overflow-hidden">
          <img :src="a.image" :alt="a.title" loading="lazy" class="block h-auto w-full transition-transform duration-500 group-hover:scale-105" @error="onImgError($event, a)" />
        </NuxtLink>
        <div class="flex flex-1 flex-col p-5">
          <div class="mb-2 flex items-center gap-2 text-xs text-secondary">
            <span class="mono rounded bg-neon-cyan/10 px-2 py-0.5 text-neon-cyan">{{ a.tag }}</span>
            <time :datetime="a.date">{{ formatDate(a.date) }}</time>
          </div>
          <h2 class="font-bold leading-snug">
            <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="transition-colors group-hover:text-neon-cyan">{{ a.title }}</NuxtLink>
          </h2>
          <p class="mt-2 line-clamp-3 text-sm text-secondary">{{ a.text }}</p>
          <div v-if="a.tags && a.tags.length" class="mt-3 flex flex-wrap gap-1.5">
            <NuxtLink
              v-for="tag in a.tags.slice(0, 4)"
              :key="tag"
              :to="localePath(`/news/tag/${tag}`)"
              :class="[
                'mono inline-flex items-center rounded-full border px-2 py-0.5 text-[11px] transition-colors',
                tag === tagParam
                  ? 'border-neon-cyan/60 bg-neon-cyan/[0.18] text-neon-cyan'
                  : 'border-neon-cyan/25 bg-neon-cyan/[0.05] text-neon-cyan hover:bg-neon-cyan/[0.14]'
              ]"
            >
              #{{ tag }}
            </NuxtLink>
          </div>
          <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neon-cyan">
            {{ t('news.readMore') }} <ArrowRight class="h-3.5 w-3.5" />
          </NuxtLink>
        </div>
      </article>
    </div>

    <!-- Empty state (unknown / obsolete tag) -->
    <div v-else class="mx-auto mt-12 max-w-md rounded-xl border hair-border surface p-8 text-center">
      <p class="text-secondary">{{ t('news.tagCluster.noResults', { tag: `#${tagParam}` }) }}</p>
      <NuxtLink :to="localePath('/news')" class="btn-outline-cyan mt-5 inline-flex">{{ t('news.tagCluster.browseAll') }}</NuxtLink>
    </div>

    <!-- Related tag cloud (all popular tags — helps SEO with internal linking) -->
    <section v-if="popularTags.length" class="mx-auto mt-16 max-w-4xl border-t hair-border pt-10">
      <h2 class="mb-4 text-center text-lg font-semibold">{{ t('news.tagCluster.explore') }}</h2>
      <div class="flex flex-wrap items-center justify-center gap-2">
        <NuxtLink
          v-for="{ tag, count } in popularTags"
          :key="tag"
          :to="localePath(`/news/tag/${tag}`)"
          :class="[
            'mono inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs transition-colors',
            tag === tagParam
              ? 'border-neon-cyan/60 bg-neon-cyan/[0.18] text-neon-cyan'
              : 'border-neon-cyan/25 bg-neon-cyan/[0.05] text-neon-cyan hover:bg-neon-cyan/[0.14]'
          ]"
        >
          #{{ tag }} <span class="opacity-60">·{{ count }}</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowRight, ArrowLeft } from 'lucide-vue-next'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()

// Normalize the URL tag param — always lowercase, trimmed. Component keeps
// working even if a legacy `#SmartHoldem`-cased URL sneaks in from an old
// share link (case-insensitive match against the snapshot).
const tagParam = computed(() => String(route.params.tag || '').toLowerCase().trim())

// Filter the baked snapshot to just this tag. Fully static — zero I/O.
const filtered = computed(() => filterNewsByTag(tagParam.value))
const items    = computed(() => filtered.value.items)

// Full top-20 tag cloud for internal SEO linking.
const popularTags = computed(() => topNewsTags(20))

const localeMap = { en:'en-US', ru:'ru-RU', zh:'zh-CN', id:'id-ID', ko:'ko-KR', th:'th-TH', es:'es-ES', vi:'vi-VN', fr:'fr-FR', de:'de-DE', kk:'kk-KZ', pt:'pt-BR', uz:'uz-UZ', mn:'mn-MN', ja:'ja-JP', sw:'sw-KE', ar:'ar-SA', hi:'hi-IN' }
const formatDate = (d) => {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString(localeMap[locale.value] || 'en-US', { year:'numeric', month:'short', day:'numeric' }) } catch { return d }
}

const onImgError = (e, a) => {
  if (a?.imageRemote && e.target.src !== a.imageRemote) e.target.src = a.imageRemote
}

// -------- SEO --------
// Unique title/description per tag, self-referential canonical, hreflang
// alternates on all 18 locales, and index,follow (this IS an indexable page).
// At SSG build time each `/news/tag/xxx` URL is prerendered separately, so
// route.params.tag is a concrete string when setup() runs.
const initialTag = String(route.params.tag || '').toLowerCase().trim()
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg(`/news/tag/${initialTag}`)
useBreadcrumbLd([
  { key: 'nav.news', path: '/news' },
  { name: () => `#${tagParam.value}`, path: `/news/tag/${initialTag}` }
])
const config = useRuntimeConfig()
const ogImage = `${config.public.siteUrl}/images/news/og-image-smartholdem-sth-news.jpg`
const title = computed(() => `#${tagParam.value} — ${t('news.title')} | SmartHoldem WEB 4.0`)
const description = computed(() => t('news.tagCluster.seoDescription', { tag: tagParam.value, n: items.value.length }))

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: () => `#${tagParam.value} — SmartHoldem news cluster`,
  twitterCard: 'summary_large_image',
  twitterImage: ogImage
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }],
  meta: [{ name: 'robots', content: 'index, follow' }]
})
</script>
