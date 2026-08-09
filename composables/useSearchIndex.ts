// Global site search index: static pages (localized titles), glossary terms
// (parsed from the whitepaper at build time), whitepaper chapters/headings
// (parsed from the raw markdown, anchors match the /white-paper renderer) and
// news articles (baked snapshot). Pure client-side, SSG-safe — no network I/O.
import { useGlossary } from './useGlossary'
import { getNewsSnapshot } from './useNews'
// Raw markdown source of the whitepaper (baked at build time, SSG-safe).
// @ts-ignore vite raw import
import wpRaw from '~/assets/docs/whitepaper.md?raw'

export interface SearchResult {
  uid: string
  type: 'page' | 'glossary' | 'news' | 'whitepaper'
  title: string
  snippet?: string
  to: string // locale-agnostic path (hash allowed); prefix with localePath() at nav time
}

// Registry of all indexable static pages (i18n keys resolve localized titles)
const PAGES: Array<{ path: string; key: string }> = [
  { path: '/', key: 'nav.home' },
  { path: '/get-sth', key: 'nav.getSth' },
  { path: '/blockchain', key: 'nav.blockchain' },
  { path: '/dapps', key: 'nav.dapps' },
  { path: '/tokenomics', key: 'nav.tokenomics' },
  { path: '/white-paper', key: 'nav.whitepaper' },
  { path: '/glossary', key: 'nav.glossary' },
  { path: '/news', key: 'nav.news' },
  { path: '/mission', key: 'nav.mission' },
  { path: '/executive-summary', key: 'nav.execSummary' },
  { path: '/trust-and-safety', key: 'nav.trustSafety' },
  { path: '/terms', key: 'nav.terms' }
]

const GLOSSARY_LIMIT = 6
const NEWS_LIMIT = 6
const WP_LIMIT = 6

// ---------------------------------------------------------------------------
// Whitepaper heading index.
// Replicates the slugger from useMarkdownDoc.parseMarkdownDoc() EXACTLY so the
// generated anchors line up with the ids rendered on /white-paper. The slug
// sequence must consume EVERY heading (all levels, incl. the doc title) in
// document order, because duplicate slugs get numeric suffixes.
// ---------------------------------------------------------------------------
export interface WpSection {
  slug: string
  title: string
  level: number
  plain: string // stripped body text under this heading (until the next one)
}

let WP_CACHE: WpSection[] | null = null

export function getWhitepaperSections(): WpSection[] {
  if (WP_CACHE) return WP_CACHE

  const seen: Record<string, number> = {}
  const slugOf = (raw: string) => {
    let base = raw
      .toLowerCase()
      .replace(/[^\w\u0400-\u04FF\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
    if (!base) base = 'section'
    if (seen[base] === undefined) { seen[base] = 0; return base }
    seen[base] += 1
    return `${base}-${seen[base]}`
  }

  const out: WpSection[] = []
  let current: WpSection | null = null
  let buf: string[] = []
  const flush = () => {
    if (current) {
      current.plain = stripMd(buf.join(' ')).slice(0, 1200)
      out.push(current)
    }
    buf = []
  }

  let inFence = false
  for (const line of (wpRaw as string).split(/\r?\n/)) {
    // Track fenced code blocks — lines starting with # inside them are NOT headings
    if (/^\s*(```|~~~)/.test(line)) { inFence = !inFence; continue }
    if (inFence) continue

    const hm = /^(#{1,6})\s+(.+?)\s*#*\s*$/.exec(line)
    if (hm) {
      const level = hm[1].length
      // Same normalization as the renderer: token.text with #, *, ` and $ stripped
      const plainTitle = hm[2].replace(/[#*`$]/g, '').trim()
      const id = slugOf(plainTitle) // always consume a slug slot
      flush()
      // The document H1 ("Netfory") is the page itself — skip it in search
      const isDocTitle = level === 1 && /^netfory$/i.test(plainTitle)
      current = isDocTitle ? null : { slug: id, title: plainTitle, level, plain: '' }
      continue
    }
    if (current) buf.push(line)
  }
  flush()

  WP_CACHE = out
  return out
}

function stripMd(s: string): string {
  return (s || '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/[#>*_`~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
}

// Short context window around the first match position
function makeSnippet(text: string, idx: number, span = 90): string {
  if (idx < 0) idx = 0
  const start = Math.max(0, idx - 24)
  let out = text.slice(start, start + span).trim()
  if (start > 0) out = '…' + out
  if (start + span < text.length) out = out + '…'
  return out
}

export function useGlobalSearch() {
  const { t } = useI18n()
  const { terms } = useGlossary()
  const news = getNewsSnapshot(1, 500).items

  const search = (raw: string): SearchResult[] => {
    const q = raw.trim().toLowerCase()
    const out: SearchResult[] = []

    // Empty query -> quick navigation: all pages + latest 3 news
    if (!q) {
      for (const p of PAGES) {
        out.push({ uid: `page:${p.path}`, type: 'page', title: t(p.key), to: p.path })
      }
      for (const n of news.slice(0, 3)) {
        out.push({
          uid: `news:${n.id}`, type: 'news', title: n.title,
          snippet: (n.date || '').slice(0, 10), to: `/news/${n.slug || n.id}`
        })
      }
      return out
    }

    // ---- Pages (localized titles) ----
    for (const p of PAGES) {
      const title = t(p.key)
      if (title.toLowerCase().includes(q)) {
        out.push({ uid: `page:${p.path}`, type: 'page', title, to: p.path })
      }
    }

    // ---- Glossary (term match ranks above definition match) ----
    const gHits: Array<{ score: number; idx: number; term: (typeof terms)[number] }> = []
    for (const term of terms) {
      const ti = term.term.toLowerCase().indexOf(q)
      const bi = term.plain.toLowerCase().indexOf(q)
      if (ti < 0 && bi < 0) continue
      gHits.push({ score: ti >= 0 ? 0 : 1, idx: bi, term })
    }
    gHits.sort((a, b) => a.score - b.score)
    for (const h of gHits.slice(0, GLOSSARY_LIMIT)) {
      out.push({
        uid: `glossary:${h.term.slug}`, type: 'glossary', title: h.term.term,
        snippet: makeSnippet(h.term.plain, h.idx),
        to: `/glossary#${h.term.slug}`
      })
    }

    // ---- Whitepaper chapters & headings (title match ranks above body match) ----
    // Hyphen-insensitive: "proof of utility" must match "Proof-of-Utility".
    // Dash→space is a 1:1 char replacement, so match indices stay valid for
    // snippet extraction from the original text.
    const norm = (s: string) => s.toLowerCase().replace(/[-\u2010-\u2015]/g, ' ')
    const nq = norm(q)
    const wHits: Array<{ score: number; idx: number; s: WpSection }> = []
    for (const s of getWhitepaperSections()) {
      const ti = norm(s.title).indexOf(nq)
      const bi = norm(s.plain).indexOf(nq)
      if (ti < 0 && bi < 0) continue
      // Prefer title hits; among body hits prefer higher-level (chapter) headings
      wHits.push({ score: (ti >= 0 ? 0 : 10) + s.level, idx: bi, s })
    }
    wHits.sort((a, b) => a.score - b.score)
    for (const h of wHits.slice(0, WP_LIMIT)) {
      out.push({
        uid: `wp:${h.s.slug}`, type: 'whitepaper', title: h.s.title,
        snippet: h.idx >= 0 ? makeSnippet(h.s.plain, h.idx) : makeSnippet(h.s.plain, 0),
        to: `/white-paper#${h.s.slug}`
      })
    }

    // ---- News (title match ranks above body match) ----
    const nHits: Array<{ score: number; idx: number; item: (typeof news)[number]; plain: string }> = []
    for (const n of news) {
      const plain = stripMd(n.text || '')
      const ti = (n.title || '').toLowerCase().indexOf(q)
      const bi = plain.toLowerCase().indexOf(q)
      if (ti < 0 && bi < 0) continue
      nHits.push({ score: ti >= 0 ? 0 : 1, idx: bi, item: n, plain })
    }
    nHits.sort((a, b) => a.score - b.score)
    for (const h of nHits.slice(0, NEWS_LIMIT)) {
      out.push({
        uid: `news:${h.item.id}`, type: 'news', title: h.item.title,
        snippet: h.idx >= 0 ? makeSnippet(h.plain, h.idx) : (h.item.date || '').slice(0, 10),
        to: `/news/${h.item.slug || h.item.id}`
      })
    }

    return out
  }

  return { search }
}
