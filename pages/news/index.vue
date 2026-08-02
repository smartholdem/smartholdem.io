<template>
  <div class="container-x py-16">
    <header class="mx-auto max-w-3xl text-center">
      <p class="eyebrow mb-3">{{ t('nav.news') }}</p>
      <h1 class="text-4xl font-bold sm:text-5xl">{{ t('news.title') }}</h1>
      <p class="mt-4 text-secondary">{{ t('news.subtitle') }}</p>
    </header>

    <!-- Grid: rendered instantly from the baked snapshot; upgraded silently
         in the background if the CMS is reachable. -->
    <div v-if="items.length" class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article v-for="a in items" :key="a.id" class="group flex flex-col overflow-hidden rounded-2xl border hair-border surface transition-all hover:border-neon-cyan/40 hover:-translate-y-1">
        <NuxtLink :to="localePath(`/news/${a.id}`)" class="block overflow-hidden">
          <img :src="a.image" :alt="a.title" loading="lazy" class="block h-auto w-full transition-transform duration-500 group-hover:scale-105" @error="onImgError($event, a)" />
        </NuxtLink>
        <div class="flex flex-1 flex-col p-5">
          <div class="mb-2 flex items-center gap-2 text-xs text-secondary">
            <span class="mono rounded bg-neon-cyan/10 px-2 py-0.5 text-neon-cyan">{{ a.tag }}</span>
            <time :datetime="a.date">{{ formatDate(a.date) }}</time>
          </div>
          <h2 class="font-bold leading-snug">
            <NuxtLink :to="localePath(`/news/${a.id}`)" class="transition-colors group-hover:text-neon-cyan">{{ a.title }}</NuxtLink>
          </h2>
          <p class="mt-2 line-clamp-3 text-sm text-secondary">{{ a.text }}</p>
          <NuxtLink :to="localePath(`/news/${a.id}`)" class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neon-cyan">
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
import { ArrowRight, Loader2 } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()

// ---------------------------------------------------------------------------
// 100% static SSG: hydrate from the baked-in JSON snapshot synchronously.
// In 99% of visits the full news list is already pre-generated in the HTML,
// so we do zero network requests on the client. If a rare newer article
// exists on the CMS, it will be picked up on the next site build.
// ---------------------------------------------------------------------------
const initial = getNewsSnapshot(1, 12)
const items = ref(initial.items)
const meta  = ref(initial.meta)
const page  = ref(1)
const loadingMore = ref(false)

// "Load more" pulls the next slice from the same baked snapshot — instant, no
// network I/O. Falls through to the CMS only if the snapshot is exhausted
// (should never happen for the default page size).
const loadMore = async () => {
  loadingMore.value = true
  try {
    const next = page.value + 1
    const snap = getNewsSnapshot(next, 12)
    let res = snap
    if (!snap.items.length) {
      // Snapshot exhausted — try the live API as a last resort.
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

// If a locally-mirrored image is missing (e.g. article added after the last build),
// fall back to the remote Strapi URL.
const onImgError = (e, a) => {
  if (a?.imageRemote && e.target.src !== a.imageRemote) e.target.src = a.imageRemote
}

const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/news')
const title = `${t('news.title')} | SmartHoldem WEB 4.0`
useSeoMeta({
  title,
  description: () => t('news.subtitle'),
  ogTitle: title,
  ogDescription: () => t('news.subtitle'),
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>
