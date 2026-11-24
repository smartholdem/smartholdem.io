// GET /api/news-i18n/article?id=73&lc=ru
//   → { available: ['ru','de',…], tr: { title, text, article } | null }
// `available` = locales with a valid translation (for hreflang + canonical).
// Used at prerender time only (baked into the page payload).
// @ts-ignore — plain .mjs shared module
import { NEWS_TR_LOCALES, readNewsSnapshot, getNewsTranslation, newsTranslatedLocales } from '../../utils/newsI18n.mjs'

export default defineEventHandler((event) => {
  const q = getQuery(event)
  const id = String(q.id || '')
  const lc = String(q.lc || 'en')
  const item = readNewsSnapshot().find((it: any) => String(it.id) === id)
  if (!item) return { available: [], tr: null }
  const tr = NEWS_TR_LOCALES.includes(lc) ? getNewsTranslation(lc, item) : null
  return {
    available: newsTranslatedLocales(item),
    tr: tr ? { title: tr.title, text: tr.text || '', article: tr.article } : null
  }
})
