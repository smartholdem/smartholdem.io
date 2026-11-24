// Tiny dependency-free Rust syntax highlighter (SSR-safe, returns HTML).
// Used for static code samples on /blockchain — output is baked into the
// prerendered HTML so crawlers / AI agents read the real source.

const KEYWORDS = new Set([
  'as', 'break', 'const', 'continue', 'crate', 'else', 'enum', 'extern', 'false', 'fn', 'for',
  'if', 'impl', 'in', 'let', 'loop', 'match', 'mod', 'move', 'mut', 'pub', 'ref', 'return',
  'self', 'Self', 'static', 'struct', 'super', 'trait', 'true', 'type', 'unsafe', 'use',
  'where', 'while', 'async', 'await', 'dyn', 'Ok', 'Err', 'Some', 'None'
])

const COLORS = {
  comment: '#64748b',
  string: '#c3e88d',
  keyword: '#c792ea',
  macro: '#ffcb6b',
  number: '#f78c6c',
  fn: '#82aaff',
  type: '#ffcb6b',
  const: '#f78c6c',
  punct: '#89ddff'
}

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
const wrap = (c: string, s: string) => `<span style="color:${c}">${esc(s)}</span>`

const TOKEN = /(\/\/[^\n]*)|(b?"(?:\\.|[^"\\])*")|([A-Za-z_][A-Za-z0-9_]*!?)|(0x[0-9a-fA-F]+|\d[\d_]*(?:\.\d+)?)|(\?|::|->|=>|&|\^=|\|\|)/g

export function highlightRust (code: string): string {
  let out = ''
  let last = 0
  let m: RegExpExecArray | null
  TOKEN.lastIndex = 0
  while ((m = TOKEN.exec(code))) {
    out += esc(code.slice(last, m.index))
    const [tok, comment, str, ident, num, punct] = m
    if (comment) out += wrap(COLORS.comment, comment)
    else if (str) out += wrap(COLORS.string, str)
    else if (ident) {
      const next = code.slice(m.index + tok.length).match(/^\s*(\()?/)
      if (ident.endsWith('!')) out += wrap(COLORS.macro, ident)
      else if (KEYWORDS.has(ident)) out += wrap(COLORS.keyword, ident)
      else if (/^[A-Z][A-Z0-9_]+$/.test(ident)) out += wrap(COLORS.const, ident)
      else if (/^[A-Z]/.test(ident)) out += wrap(COLORS.type, ident)
      else if (next?.[1]) out += wrap(COLORS.fn, ident)
      else out += esc(ident)
    } else if (num) out += wrap(COLORS.number, num)
    else if (punct) out += wrap(COLORS.punct, punct)
    last = m.index + tok.length
  }
  return out + esc(code.slice(last))
}
