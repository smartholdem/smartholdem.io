<template>
  <div class="container-x py-16">
    <header class="mx-auto max-w-3xl text-center">
      <p class="eyebrow mb-3">{{ t('nav.news') }}</p>
      <h1 class="text-4xl font-bold sm:text-5xl">{{ t('news.title') }}</h1>
      <p class="mt-4 text-secondary">{{ t('news.subtitle') }}</p>
    </header>

    <!-- Popular tags cloud — 12 most-frequent hashtags across the whole feed.
         Renders only if any real hashtags are present, so old builds without
         tagged articles stay visually unchanged. -->
    <div v-if="popularTags.length" class="mx-auto mt-8 max-w-4xl">
      <div class="flex flex-wrap items-center justify-center gap-2">
        <span class="mr-1 text-xs uppercase tracking-wider text-secondary">{{ t('news.popularTags') }}</span>
        <NuxtLink
          v-for="{ tag, count } in popularTags"
          :key="tag"
          :to="localePath(`/news/tag/${tag}`)"
          class="mono inline-flex items-center gap-1 rounded-full border border-neon-cyan/25 bg-neon-cyan/[0.06] px-3 py-1 text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/[0.16]"
        >
          #{{ tag }} <span class="opacity-60">·{{ count }}</span>
        </NuxtLink>
      </div>
    </div>

    <!-- Grid: rendered instantly from the baked snapshot. -->
    <div v-if="items.length" class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="a in items" :key="a.id" class="group flex flex-col overflow-hidden rounded-2xl border hair-border surface transition-all hover:border-neon-cyan/40 hover:-translate-y-1">
        <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="block overflow-hidden">
          <img :src="a.image" :alt="trTitle(a)" loading="lazy" class="block h-auto w-full transition-transform duration-500 group-hover:scale-105" @error="onImgError($event, a)" />
        </NuxtLink>
        <div class="flex flex-1 flex-col p-5">
          <div class="mb-2 flex items-center gap-2 text-xs text-secondary">
            <span class="mono rounded bg-neon-cyan/10 px-2 py-0.5 text-neon-cyan">{{ a.tag }}</span>
            <time :datetime="a.date">{{ formatDate(a.date) }}</time>
          </div>
          <h2 class="font-bold leading-snug">
            <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="transition-colors group-hover:text-neon-cyan">{{ trTitle(a) }}</NuxtLink>
          </h2>
          <p class="mt-2 line-clamp-3 text-sm text-secondary">{{ trText(a) }}</p>

          <!-- Hashtag chips on cards (only if the article has any tags) -->
          <div v-if="a.tags && a.tags.length" class="mt-3 flex flex-wrap gap-1.5">
            <NuxtLink
              v-for="tag in a.tags.slice(0, 4)"
              :key="tag"
              :to="localePath(`/news/tag/${tag}`)"
              class="mono inline-flex items-center rounded-full border border-neon-cyan/25 bg-neon-cyan/[0.05] px-2 py-0.5 text-[11px] text-neon-cyan transition-colors hover:bg-neon-cyan/[0.14]"
              @click.stop
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

    <!-- Fallback: only shown if the snapshot itself is empty (first build) -->
    <div v-else class="mx-auto mt-12 max-w-md rounded-xl border hair-border surface p-8 text-center">
      <p class="text-secondary">{{ t('news.empty') }}</p>
    </div>

    <!-- Load more -->
    <div v-if="items.length && page < (meta?.pageCount || 1)" class="mt-12 text-center">
      <button class="btn-outline" :disabled="loadingMore" @click="loadMore">
        <Loader2 v-if="loadingMore" class="h-4 w-4 animate-spin" />
        {{ loadingMore ? t('news.loading') : t('news.loadMore') }}
      </button>
    </div>
  </div>
</template>

<script setup>
// Translated headlines + summaries (falls back to English per item)
const { trTitle, trText } = useNewsListTranslations()
import { ArrowRight, Loader2 } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()

// ---------------------------------------------------------------------------
// 100% static SSG: hydrate from the baked-in JSON snapshot synchronously.
//
// Legacy `?tag=xxx` URLs (still linked from RSS feeds & third-party posts)
// are 301-equivalent redirected client-side to the canonical
// `/news/tag/xxx` cluster page — see the watch() below.
// ---------------------------------------------------------------------------
const initial = getNewsSnapshot(1, 12)
const items = ref(initial.items)
const meta  = ref(initial.meta)
const page  = ref(1)
const loadingMore = ref(false)

// Top 12 hashtags across the whole feed, in-page tag cloud sidebar. Bound
// to the baked snapshot so no network is needed.
const popularTags = computed(() => topNewsTags(12))

// Client-side legacy redirect: /news?tag=xxx → /news/tag/xxx (SEO canonical).
onMounted(() => {
  const raw = route.query.tag
  const tag = Array.isArray(raw) ? raw[0] : raw
  if (tag) router.replace(localePath(`/news/tag/${String(tag).toLowerCase().trim()}`))
})

// "Load more" pulls the next slice from the same baked snapshot — instant, no
// network I/O. Falls through to the CMS only if the snapshot is exhausted.
const loadMore = async () => {
  loadingMore.value = true
  try {
    const next = page.value + 1
    const snap = getNewsSnapshot(next, 12)
    let res = snap
    if (!snap.items.length) {
      res = await fetchNews(next, 12)
    }
    if (res?.items?.length) {
      items.value.push(...res.items)
      meta.value = res.meta
      page.value = next
    }
  } finally { loadingMore.value = false }
}

const localeMap = { en:'en-US', ru:'ru-RU', zh:'zh-CN', id:'id-ID', ko:'ko-KR', th:'th-TH', es:'es-ES', vi:'vi-VN', fr:'fr-FR', de:'de-DE', kk:'kk-KZ', pt:'pt-BR', uz:'uz-UZ', mn:'mn-MN', ja:'ja-JP', sw:'sw-KE', ar:'ar-SA', hi:'hi-IN' }
const formatDate = (d) => {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString(localeMap[locale.value] || 'en-US', { year:'numeric', month:'short', day:'numeric' }) } catch { return d }
}

const onImgError = (e, a) => {
  if (a?.imageRemote && e.target.src !== a.imageRemote) e.target.src = a.imageRemote
}

const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/news')
useBreadcrumbLd([{ key: 'nav.news', path: '/news' }])
const config = useRuntimeConfig()
const newsOgImage = `${config.public.siteUrl}/images/news/og-image-smartholdem-sth-news.jpg`
const title = `${t('news.title')} | SmartHoldem WEB 4.0`
useSeoMeta({
  title,
  description: () => t('news.subtitle'),
  ogTitle: title,
  ogDescription: () => t('news.subtitle'),
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  ogImage: newsOgImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'SmartHoldem News — Latest updates from the SmartHoldem ecosystem',
  twitterCard: 'summary_large_image',
  twitterImage: newsOgImage
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>
