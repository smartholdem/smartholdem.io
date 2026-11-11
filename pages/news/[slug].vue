<template>
  <div class="container-x py-16">
    <NuxtLink :to="localePath('/news')" class="mb-8 inline-flex items-center gap-1.5 text-sm font-medium text-neon-cyan">
      <ArrowLeft class="h-4 w-4" /> {{ t('news.back') }}
    </NuxtLink>

    <div v-if="article" class="mx-auto max-w-3xl">
      <article :lang="contentLang">
        <div class="mb-4 flex flex-wrap items-center gap-2 text-sm text-secondary">
          <span class="mono rounded bg-neon-cyan/10 px-2 py-0.5 text-neon-cyan">{{ article.tag }}</span>
          <time :datetime="article.date">{{ formatDate(article.date) }}</time>
        </div>
        <h1 class="text-3xl font-bold leading-tight sm:text-4xl">{{ displayTitle }}</h1>
        <img v-if="article.image" :src="article.image" :alt="displayTitle" class="mt-8 w-full rounded-2xl border hair-border" @error="onImgError" />
        <div
          ref="articleBodyEl"
          class="prose-sth news-article-body mt-8 text-[1.02rem] leading-relaxed"
          v-html="articleHtml"
          @click="onHashtagClick"
        ></div>

        <!-- Article-level hashtag chips (also clickable) -->
        <div v-if="article.tags && article.tags.length" class="mt-8 flex flex-wrap gap-2 border-t hair-border pt-6">
          <NuxtLink
            v-for="tag in article.tags"
            :key="tag"
            :to="localePath(`/news/tag/${tag}`)"
            class="mono inline-flex items-center rounded-full border border-neon-cyan/30 bg-neon-cyan/[0.06] px-3 py-1 text-xs text-neon-cyan transition-colors hover:bg-neon-cyan/[0.14]"
          >
            #{{ tag }}
          </NuxtLink>
        </div>
      </article>

      <!-- Related news: 3 articles sharing the most hashtags (fallback: 3 latest) -->
      <RelatedNews :current-id="article.id" :limit="3" />
    </div>
    <div v-else class="py-24 text-center text-secondary">{{ t('news.error') }}</div>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
const { t, locale } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const router = useRouter()
const config = useRuntimeConfig()

// ---------------------------------------------------------------------------
// The route param accepts BOTH the canonical slug (/news/real-web-4-0) and the
// legacy numeric id (/news/72). 100% static SSG: hydrate from the baked-in
// snapshot synchronously — every route (slug + legacy id) is pre-generated at
// build time (see nuxt.config.ts hook).
// ---------------------------------------------------------------------------
const param = String(route.params.slug || '')
const isLegacyId = /^\d+$/.test(param)
const article = ref(getNewsSnapshotByRef(param))

// Canonical/OG URLs ALWAYS use the slug — even when the page was reached via
// the legacy /news/{id} URL — so search engines consolidate on the slug URL.
const slugPath = `/news/${article.value?.slug || param}`
const { ogLocale, ogLocaleAlternate, pageUrl, canonicalEnUrl } = useLocalizedOg(slugPath)

// ---- Localized content (LM Studio translations, data/news-i18n/*.json) ----
// Locale variant WITH a valid translation → self-canonical + hreflang to all
// translated versions. WITHOUT one → English body, canonical to /news/{slug}.
const { i18n } = await useNewsArticleTranslation(article.value?.id)
const tr = computed(() => (locale.value !== 'en' ? i18n.value?.tr : null) || null)
const isLocalized = computed(() => locale.value === 'en' || !!tr.value)
const contentLang = computed(() => (tr.value ? locale.value : 'en'))
const displayTitle = computed(() => tr.value?.title || article.value?.title || '')
const displayText = computed(() => tr.value?.text || article.value?.text || '')
const canonicalUrl = computed(() => (isLocalized.value ? pageUrl.value : canonicalEnUrl.value))
const hreflangAllow = useState('hreflang-allow', () => null)
watchEffect(() => {
  hreflangAllow.value = {
    path: route.path,
    codes: isLocalized.value ? ['en', ...(i18n.value?.available || [])] : []
  }
})
useBreadcrumbLd([{ key: 'nav.news', path: '/news' }, { name: () => displayTitle.value, path: slugPath }])

// Legacy id URL -> instant client-side replace to the slug URL. Static HTML
// (with the slug canonical) is what bots see; humans end up on the slug URL.
onMounted(() => {
  if (isLegacyId && article.value?.slug) {
    router.replace(localePath(`/news/${article.value.slug}`))
  }
})

// Fall back to the remote Strapi image if the local mirror is missing.
const onImgError = (e) => {
  const remote = article.value?.imageRemote
  if (remote && e.target.src !== remote) e.target.src = remote
}

// -------- Hashtag linkification --------
// Compute an href-base that is locale-aware, so #tags render as
// /news?tag=xxx on the default locale and /ru/news?tag=xxx on RU, etc.
const articleBodyEl = ref(null)
const hashtagHrefBase = computed(() => localePath('/news'))
const articleHtml = computed(() =>
  linkifyHashtags(tr.value?.article || article.value?.article || article.value?.text || '', hashtagHrefBase.value)
)
// Intercept clicks on <a class="news-hashtag"> so navigation happens via the
// Vue router (SPA transition, no full-page reload).
const onHashtagClick = (e) => {
  const a = e.target?.closest?.('a.news-hashtag')
  if (!a) return
  // Let modifier-clicks (open in new tab, etc.) behave natively.
  if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button === 1) return
  e.preventDefault()
  const tag = a.getAttribute('data-tag')
  if (!tag) return
  router.push(localePath(`/news/tag/${tag}`))
}

const localeMap = { en:'en-US', ru:'ru-RU', zh:'zh-CN', id:'id-ID', ko:'ko-KR', th:'th-TH', es:'es-ES', vi:'vi-VN', fr:'fr-FR', de:'de-DE', kk:'kk-KZ', pt:'pt-BR', uz:'uz-UZ', mn:'mn-MN', ja:'ja-JP', sw:'sw-KE', ar:'ar-SA', hi:'hi-IN' }
const formatDate = (d) => {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString(localeMap[locale.value] || 'en-US', { year:'numeric', month:'long', day:'numeric' }) } catch { return d }
}

watchEffect(() => {
  if (article.value) {
    // Prefer the build-time generated OG banner (public/og/news-{id}.png) —
    // still keyed by the stable numeric id, independent of the slug.
    const ogBanner = `${config.public.siteUrl}/og/news-${article.value.id}.png`
    useSeoMeta({
      title: `${displayTitle.value} | SmartHoldem News`,
      description: (displayText.value || '').slice(0, 160),
      ogTitle: displayTitle.value,
      ogDescription: (displayText.value || '').slice(0, 200),
      ogType: 'article',
      ogUrl: canonicalUrl.value,
      ogLocale: ogLocale.value,
      ogImage: ogBanner,
      twitterCard: 'summary_large_image',
      twitterImage: ogBanner
    })
    useHead({
      link: [{ rel: 'canonical', href: canonicalUrl.value }],
      script: [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'NewsArticle',
          headline: displayTitle.value,
          description: (displayText.value || '').slice(0, 160),
          url: canonicalUrl.value,
          mainEntityOfPage: { '@type': 'WebPage', '@id': canonicalUrl.value },
          inLanguage: contentLang.value,
          ...(tr.value ? { isBasedOn: canonicalEnUrl.value } : {}),
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


<style>
/* Non-scoped so v-html descendants (linkified hashtags) inherit the styling.
   Renders #hashtag anchors as JetBrains Mono cyan chips, matching the rest
   of the SmartHoldem tech-copy visual language. */
.news-article-body a.news-hashtag {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.9em;
  font-weight: 500;
  color: #00D4FF;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.25);
  border-radius: 6px;
  padding: 0.05em 0.45em;
  margin: 0 0.1em;
  text-decoration: none;
  white-space: nowrap;
  transition: background-color .15s ease, border-color .15s ease;
}
.news-article-body a.news-hashtag:hover {
  background: rgba(0, 212, 255, 0.18);
  border-color: rgba(0, 212, 255, 0.5);
}
html:not(.dark) .news-article-body a.news-hashtag {
  color: #0284a8;
  background: rgba(0, 150, 190, 0.08);
  border-color: rgba(2, 132, 168, 0.28);
}
html:not(.dark) .news-article-body a.news-hashtag:hover {
  background: rgba(0, 150, 190, 0.18);
}
</style>
