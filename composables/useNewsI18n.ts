// Localized news content (translated by scripts/translate-news.mjs via a
// local LM Studio, stored in data/news-i18n/*.json).
//
// Data comes from STATIC JSON files /news-i18n/{lc}/list.json and
// /news-i18n/{lc}/{id}.json (prerendered by Nitro). During SSG the result is
// baked into each page's HTML/payload; on the client (language switch,
// client-side navigation) the same static files are fetched, so it works on
// a plain static host. Anything without a translation falls back to English.

type TrDict = Record<string, { title: string; text: string }>

export function useNewsListTranslations () {
  const { locale } = useI18n()
  const { data } = useAsyncData<TrDict>(
    () => `news-i18n-list-${locale.value}`,
    () => locale.value === 'en'
      ? Promise.resolve({})
      : $fetch<TrDict>(`/news-i18n/${locale.value}/list.json`).catch(() => ({})),
    { default: () => ({}), watch: [locale] }
  )
  const tr = (item: any) => (item?.id != null ? data.value?.[String(item.id)] : undefined)
  return {
    trTitle: (item: any): string => tr(item)?.title || item?.title || '',
    trText: (item: any): string => tr(item)?.text || item?.text || '',
    isTranslated: (item: any): boolean => !!tr(item)
  }
}

export interface NewsArticleI18n {
  available: string[]
  tr: { title: string; text: string; article: string } | null
}

// Awaitable: SEO tags (canonical, hreflang, description) must be computed
// from the translation during SSR, so pages `await` this in <script setup>.
export async function useNewsArticleTranslation (id: string | number | undefined) {
  const { locale } = useI18n()
  const { data } = await useAsyncData<NewsArticleI18n>(
    () => `news-i18n-article-${id}-${locale.value}`,
    () => id == null
      ? Promise.resolve({ available: [], tr: null })
      : $fetch<NewsArticleI18n>(`/news-i18n/${locale.value}/${id}.json`)
        .catch(() => ({ available: [], tr: null })),
    { default: () => ({ available: [], tr: null }), watch: [locale] }
  )
  return { i18n: data }
}
