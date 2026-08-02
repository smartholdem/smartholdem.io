import { Marked } from 'marked'
import hljs from 'highlight.js'
import katex from 'katex'

export interface TocItem {
  id: string
  text: string
  level: number
}

const escapeHtml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function makeSlugger() {
  const seen: Record<string, number> = {}
  return (raw: string) => {
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
}

// Per-parse state (parsing is synchronous, so module-level state is safe).
let TOC: TocItem[] = []
let slug = makeSlugger()

const renderer = {
  html(token: any) {
    // Escape raw/inline HTML passthrough. The whitepaper uses literal placeholder
    // tokens like <appId>, <username>, <secret>, <nodeId> in prose; if marked emits
    // them as raw HTML they create malformed/unknown tags that corrupt the SSR
    // document and silently break client hydration. Escaping renders them as text.
    const t = typeof token === 'string' ? token : (token?.text ?? token?.raw ?? '')
    return escapeHtml(t)
  },
  heading(this: any, token: any) {
    const level = token.depth as number
    const text = this.parser.parseInline(token.tokens)
    const plain = (token.text || '').replace(/[#*`$]/g, '').trim()
    const id = slug(plain)
    const isDocTitle = level === 1 && /^netfory$/i.test(plain)
    if (level >= 1 && level <= 3 && !isDocTitle) TOC.push({ id, text: plain, level })
    return `<h${level} id="${id}" class="wp-h wp-h${level}"><a class="wp-anchor" href="#${id}" aria-label="Link to section">#</a>${text}</h${level}>`
  },
  code(this: any, token: any) {
    const lang = (token.lang || '').trim().toLowerCase()
    const raw = token.text || ''
    if (lang === 'mermaid') {
      return `<pre class="mermaid" data-src="${encodeURIComponent(raw)}">${escapeHtml(raw)}</pre>`
    }
    let highlighted: string
    try {
      highlighted = lang && hljs.getLanguage(lang)
        ? hljs.highlight(raw, { language: lang }).value
        : hljs.highlightAuto(raw).value
    } catch {
      highlighted = escapeHtml(raw)
    }
    return `<div class="wp-code"><span class="wp-code-lang">${lang || 'text'}</span><button class="wp-copy" type="button" data-code="${encodeURIComponent(raw)}">Copy</button><pre><code class="hljs">${highlighted}</code></pre></div>`
  },
  link(this: any, token: any) {
    const href = token.href || '#'
    const title = token.title ? ` title="${token.title}"` : ''
    const text = this.parser.parseInline(token.tokens)
    const external = /^https?:\/\//.test(href)
    const attrs = external ? ' target="_blank" rel="noopener noreferrer"' : ''
    const icon = external ? '<span class="wp-ext">\u2197</span>' : ''
    return `<a href="${href}"${title}${attrs} class="wp-link">${text}${icon}</a>`
  }
}

// Math extensions: rendered server-side via KaTeX (deterministic, SEO-friendly).
const blockMath = {
  name: 'blockMath',
  level: 'block' as const,
  start(src: string) { return src.indexOf('$$') },
  tokenizer(src: string) {
    const m = /^\$\$([\s\S]+?)\$\$/.exec(src)
    if (m) return { type: 'blockMath', raw: m[0], text: m[1].trim() }
  },
  renderer(token: any) {
    try {
      return `<div class="katex-block">${katex.renderToString(token.text, { throwOnError: false, displayMode: true })}</div>`
    } catch { return `<pre>${escapeHtml(token.text)}</pre>` }
  }
}
const inlineMath = {
  name: 'inlineMath',
  level: 'inline' as const,
  start(src: string) { return src.indexOf('$') },
  tokenizer(src: string) {
    const m = /^\$([^$\n]+?)\$/.exec(src)
    if (m) return { type: 'inlineMath', raw: m[0], text: m[1] }
  },
  renderer(token: any) {
    try { return katex.renderToString(token.text, { throwOnError: false, displayMode: false }) }
    catch { return `<code>${escapeHtml(token.text)}</code>` }
  }
}

// Isolated marked instance (avoids mutating the global singleton).
const md = new Marked({ gfm: true, breaks: false })
md.use({ renderer, extensions: [blockMath, inlineMath] })

export function parseMarkdownDoc(source: string): { html: string; toc: TocItem[] } {
  TOC = []
  slug = makeSlugger()
  let html = md.parse(source) as string
  html = html
    .replace(/<table>/g, '<div class="wp-table-wrap"><table>')
    .replace(/<\/table>/g, '</table></div>')
  return { html, toc: TOC.slice() }
}
