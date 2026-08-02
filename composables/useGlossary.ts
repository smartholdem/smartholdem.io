import { Marked } from 'marked'
// Raw markdown source of the whitepaper (baked at build time, SSG-safe).
// @ts-ignore vite raw import
import wpRaw from '~/assets/docs/whitepaper.md?raw'

export interface GlossaryTerm {
  slug: string
  term: string
  letter: string
  html: string   // rendered inline HTML of the definition
  plain: string  // stripped text (used for fuzzy search)
}

// Slug helper — matches the whitepaper renderer's convention so anchors line up
function slugify(raw: string): string {
  return raw
    .toLowerCase()
    .replace(/[^\w\u0400-\u04FF\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
}

// Isolated marked instance for inline rendering only
const md = new Marked({ gfm: true, breaks: false })

function stripMd(s: string): string {
  return s
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/_([^_]+)_/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .trim()
}

let CACHE: GlossaryTerm[] | null = null

function parseGlossary(): GlossaryTerm[] {
  if (CACHE) return CACHE

  const marker = /^#\s+Appendix\s+A[:.]?\s*Glossary/im
  const startIdx = (wpRaw as string).search(marker)
  if (startIdx < 0) { CACHE = []; return CACHE }

  // Everything from the appendix header to end-of-file (or next H1)
  let section = (wpRaw as string).slice(startIdx)
  // Trim to next top-level appendix if one appears later (Appendix B, …)
  const nextTop = section.slice(4).search(/^#\s+Appendix\s+[B-Z]/im)
  if (nextTop >= 0) section = section.slice(0, nextTop + 4)

  // Each glossary term is a paragraph beginning with **Term.** or **Term (Alias).**
  // followed by the definition prose on the same paragraph.
  const paras = section.split(/\n\s*\n/)
  const termRe = /^\*\*([^*]+?)\.\*\*\s*([\s\S]*)$/

  const out: GlossaryTerm[] = []
  const seen = new Set<string>()

  for (const p of paras) {
    const line = p.replace(/^\s+|\s+$/g, '')
    const m = termRe.exec(line)
    if (!m) continue
    const rawTerm = m[1].trim()
    const body = m[2].trim()
    if (!rawTerm || !body) continue

    // Compute a stable slug that mirrors marked's own heading slugger
    let slug = slugify(rawTerm)
    if (!slug) slug = 'term'
    let unique = slug
    let n = 2
    while (seen.has(unique)) unique = `${slug}-${n++}`
    seen.add(unique)

    const firstChar = rawTerm.replace(/^[^A-Za-z\u0400-\u04FF]+/, '').charAt(0)
    const letter = firstChar ? firstChar.toUpperCase() : '#'

    let html = ''
    try {
      html = (md.parseInline(body) as string) || ''
    } catch { html = body }

    out.push({
      slug: unique,
      term: rawTerm,
      letter,
      html,
      plain: stripMd(rawTerm + '. ' + body)
    })
  }

  // Alphabetical order (case-insensitive)
  out.sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' }))

  CACHE = out
  return out
}

export function useGlossary() {
  const terms = parseGlossary()
  const letters: string[] = []
  const groups: Record<string, GlossaryTerm[]> = {}

  for (const t of terms) {
    const L = /[A-Z]/.test(t.letter) ? t.letter : '#'
    if (!groups[L]) { groups[L] = []; letters.push(L) }
    groups[L].push(t)
  }
  letters.sort((a, b) => (a === '#' ? 1 : b === '#' ? -1 : a.localeCompare(b)))

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const activeSet = new Set(letters)

  return {
    terms,
    letters,          // letters that actually contain entries
    alphabet,         // full A-Z for the jump bar UI
    activeSet,        // set of active letters (for enabled/disabled state)
    groups,
    total: terms.length
  }
}
