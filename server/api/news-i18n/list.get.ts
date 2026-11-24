// GET /api/news-i18n/list?lc=ru → { "<id>": { title, text } }
// Valid (hash-matching) translated headlines + summaries for news lists,
// tag pages and "related news". Used at prerender time — the result is baked
// into each page payload, so the static site never calls this at runtime.
// @ts-ignore — plain .mjs shared module
import { NEWS_TR_LOCALES, readNewsSnapshot, getNewsTranslation } from '../../utils/newsI18n.mjs'

export default defineEventHandler((event) => {
  const lc = String(getQuery(event).lc || '')
  if (!NEWS_TR_LOCALES.includes(lc)) return {}
  const out: Record<string, { title: string; text: string }> = {}
  for (const item of readNewsSnapshot()) {
    const tr = getNewsTranslation(lc, item)
    if (tr) out[String(item.id)] = { title: tr.title, text: tr.text || '' }
  }
  return out
})
