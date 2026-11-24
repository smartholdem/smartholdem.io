// GET /news-i18n/{lc}/{id}.json
//   → { available: ['ru','de',…], tr: { title, text, article } | null }
// PRERENDERED as static files for every article × locale (incl. en).
// @ts-ignore — plain .mjs shared module
import { NEWS_TR_LOCALES, readNewsSnapshot, getNewsTranslation, newsTranslatedLocales } from '../../../utils/newsI18n.mjs'

export default defineEventHandler((event) => {
  const lc = String(getRouterParam(event, 'lc') || 'en')
  const id = String(getRouterParam(event, 'file') || '').replace(/\.json$/, '')
  setResponseHeader(event, 'Content-Type', 'application/json; charset=utf-8')
  const item = readNewsSnapshot().find((it: any) => String(it.id) === id)
  if (!item) return { available: [], tr: null }
  const tr = NEWS_TR_LOCALES.includes(lc) ? getNewsTranslation(lc, item) : null
  return {
    available: newsTranslatedLocales(item),
    tr: tr ? { title: tr.title, text: tr.text || '', article: tr.article } : null
  }
})
