// GET /news-i18n/{lc}/list.json → { "<id>": { title, text } }
// Translated headlines + summaries for news lists, tag pages and related news.
// PRERENDERED as a static file (see nuxt.config prerender:routes), so the
// client can load it on the static host when it has no page payload
// (language switch, client-side navigation edge cases).
// @ts-ignore — plain .mjs shared module
import { NEWS_TR_LOCALES, readNewsSnapshot, getNewsTranslation } from '../../../utils/newsI18n.mjs'

export default defineEventHandler((event) => {
  const lc = String(getRouterParam(event, 'lc') || '')
  setResponseHeader(event, 'Content-Type', 'application/json; charset=utf-8')
  const out: Record<string, { title: string; text: string }> = {}
  if (!NEWS_TR_LOCALES.includes(lc)) return out
  for (const item of readNewsSnapshot()) {
    const tr = getNewsTranslation(lc, item)
    if (tr) out[String(item.id)] = { title: tr.title, text: tr.text || '' }
  }
  return out
})
