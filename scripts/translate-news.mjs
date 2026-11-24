#!/usr/bin/env node
// ─────────────────────────────────────────────────────────────────────────────
// SmartHoldem news → 17 languages via a LOCAL LM Studio server
// (OpenAI-compatible API). Free, private, no external services.
//
//   yarn news:translate              full pass (resumable, Ctrl+C safe)
//   yarn news:translate --soft       build mode: skip quietly if LM Studio is off,
//                                    translate only a small backlog (NEWS_TR_BUILD)
//   yarn news:translate --only=ru,de --id=73 --limit=5 --dry-run
//   yarn news:translate --check [--only=kk]   test the loaded model on a sample
//
// Settings (env vars or ~/.lmstudio.env / ./.lmstudio.env, KEY=VALUE lines):
//   LMSTUDIO_URL          default http://192.168.31.110:1234
//   LMSTUDIO_MODEL        default: first model reported by /v1/models
//   LMSTUDIO_API_KEY      optional (LM Studio ignores it by default)
//   LMSTUDIO_NO_THINK     1 (default) → appends "/no_think" for Qwen3-style models
//   LMSTUDIO_TEMPERATURE  default 0.2
//   LMSTUDIO_TIMEOUT_MS   default 600000 (10 min per request)
//   NEWS_TR_CHUNK         default 2800 (max chars of HTML per request)
//   LMSTUDIO_MAX_TOKENS   default 16384 (cap for answer + thinking tokens)
//   NEWS_TR_CONCURRENCY   default 1 (parallel requests, 1-8; LM Studio must allow
//                         the same number of concurrent predictions)
//
// Output: data/news-i18n/{lc}.json  — committed to git, so servers build the
// site without LM Studio. Only NEW or CHANGED articles are translated
// (sha256 of the English source is stored next to each translation).
// Every translation is validated (markup, links, hashtags, addresses,
// language, length). Failed ones are retried, then skipped → English stays.
// ─────────────────────────────────────────────────────────────────────────────
import { readFileSync, writeFileSync, existsSync, mkdirSync, renameSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'
import { NEWS_TR_LOCALES, NEWS_TR_DIR, newsSourceHash, readNewsSnapshot } from '../server/utils/newsI18n.mjs'

// ── settings ────────────────────────────────────────────────────────────────
for (const f of [join(homedir(), '.lmstudio.env'), join(process.cwd(), '.lmstudio.env')]) {
  if (!existsSync(f)) continue
  for (const line of readFileSync(f, 'utf-8').split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/)
    if (m && !line.trim().startsWith('#') && process.env[m[1]] === undefined) process.env[m[1]] = m[2].replace(/^["']|["']$/g, '')
  }
}
const args = Object.fromEntries(process.argv.slice(2).map(a => {
  const [k, v] = a.replace(/^--/, '').split('=')
  return [k, v === undefined ? true : v]
}))
const BASE = (process.env.LMSTUDIO_URL || 'http://192.168.31.110:1234').replace(/\/+$/, '').replace(/\/v1$/, '')
const API_KEY = process.env.LMSTUDIO_API_KEY || 'lm-studio'
const NO_THINK = (process.env.LMSTUDIO_NO_THINK ?? '1') !== '0'
const TEMPERATURE = Number(process.env.LMSTUDIO_TEMPERATURE || 0.2)
const TIMEOUT_MS = Number(process.env.LMSTUDIO_TIMEOUT_MS || 600000)
const CHUNK = Number(process.env.NEWS_TR_CHUNK || 2800)
const CONCURRENCY = Math.max(1, Math.min(8, Number(args.concurrency || process.env.NEWS_TR_CONCURRENCY || 1)))
const SOFT = !!args.soft
// Build mode (--soft, used by `yarn generate` / build:all):
//   NEWS_TR_BUILD=auto (default) → translate only a small backlog (new articles);
//                                  a big backlog is left for `yarn news:translate`
//   NEWS_TR_BUILD=off            → never translate during the build
//   NEWS_TR_BUILD=all            → translate everything (build may take hours)
const BUILD_MODE = String(process.env.NEWS_TR_BUILD || 'auto').toLowerCase()
const BUILD_MAX = Number(process.env.NEWS_TR_BUILD_MAX || 34) // ≈ 2 new articles × 17 languages
const DRY = !!args['dry-run']
const ONLY = args.only ? String(args.only).split(',').map(s => s.trim()).filter(Boolean) : NEWS_TR_LOCALES
const ONLY_ID = args.id ? String(args.id).split(',') : null
const LIMIT = args.limit ? Number(args.limit) : Infinity
const ATTEMPTS = 3

const LANG = {
  ru: { name: 'Russian', script: /[\u0400-\u04FF]/g },
  zh: { name: 'Simplified Chinese', script: /[\u4E00-\u9FFF]/g, cjk: true },
  id: { name: 'Indonesian', stop: ['dan', 'yang', 'untuk', 'dengan', 'ini', 'dari', 'adalah', 'tidak', 'akan', 'di'] },
  ko: { name: 'Korean', script: /[\uAC00-\uD7AF]/g, cjk: true },
  th: { name: 'Thai', script: /[\u0E00-\u0E7F]/g, cjk: true },
  es: { name: 'Spanish', stop: ['el', 'la', 'de', 'que', 'y', 'en', 'los', 'las', 'para', 'con', 'una', 'por'] },
  vi: { name: 'Vietnamese', script: /[ăâđêôơưạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/gi },
  fr: { name: 'French', stop: ['le', 'la', 'les', 'de', 'des', 'et', 'est', 'pour', 'dans', 'une', 'du', 'sur'] },
  de: { name: 'German', stop: ['der', 'die', 'das', 'und', 'ist', 'nicht', 'mit', 'für', 'ein', 'eine', 'auf', 'den'] },
  kk: { name: 'Kazakh (Cyrillic script)', script: /[\u0400-\u04FF]/g },
  pt: { name: 'Brazilian Portuguese', stop: ['o', 'a', 'de', 'que', 'e', 'em', 'para', 'com', 'uma', 'os', 'não', 'do'] },
  uz: { name: 'Uzbek (Latin script)', stop: ['va', 'bilan', 'uchun', 'bu', 'emas', 'ham', 'bo‘ladi', 'yoki', 'esa', 'barcha'], uz: true },
  mn: { name: 'Mongolian (Cyrillic script)', script: /[\u0400-\u04FF]/g },
  ja: { name: 'Japanese', script: /[\u3040-\u30FF\u4E00-\u9FFF]/g, cjk: true },
  sw: { name: 'Swahili', stop: ['na', 'ya', 'wa', 'kwa', 'ni', 'za', 'katika', 'la', 'cha', 'hii', 'kwamba'] },
  ar: { name: 'Arabic', script: /[\u0600-\u06FF]/g },
  hi: { name: 'Hindi', script: /[\u0900-\u097F]/g }
}

const KEEP_TERMS = [
  'SmartHoldem', 'SmartNet', 'Netfory', 'STH', '$STH', 'Iroh', 'QUIC', 'ML-DSA-44', 'Quantum Shield', 'DPoS', 'BFT',
  'Web 4.0', 'Web4', 'Web3', 'dApp', 'dApps', 'XBTS', 'DEX', 'USDT', 'BTC', 'ETH', 'BNB', 'BEP-20', 'GitHub',
  'Telegram', 'Rust', 'Tauri', 'sth-core-pq', 'SmartObjects', 'TokenMint', 'DevHub', 'Block Explorer', 'BLAKE3', 'Sled'
]

const log = (...a) => console.log('[news-translate]', ...a)

// ── LM Studio client ────────────────────────────────────────────────────────
async function http (path, body, timeout = TIMEOUT_MS) {
  const ctrl = new AbortController()
  const timer = setTimeout(() => ctrl.abort(), timeout)
  try {
    const res = await fetch(`${BASE}${path}`, {
      method: body ? 'POST' : 'GET',
      headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_KEY}` },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal
    })
    const txt = await res.text()
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${txt.slice(0, 300)}`)
    return JSON.parse(txt)
  } finally {
    clearTimeout(timer)
  }
}

let MODEL = process.env.LMSTUDIO_MODEL || ''

async function connect () {
  const res = await http('/v1/models', null, 5000)
  const ids = (res?.data || []).map(m => m.id).filter(id => !/embed/i.test(id))
  if (!MODEL) MODEL = ids[0] || ''
  if (!MODEL) throw new Error('LM Studio is running but no chat model is loaded')
  return ids
}

function cleanOutput (s) {
  let out = String(s || '')
  out = out.replace(/<think>[\s\S]*?<\/think>/gi, '').replace(/^[\s\S]*?<\/think>/i, '')
  if (/^\s*<think>/i.test(out)) return '' // thinking was cut off → no real answer
  out = out.replace(/^\s*```[a-z]*\s*\n?/i, '').replace(/\n?```\s*$/i, '')
  return out.trim()
}

const MAX_TOKENS_CAP = Number(process.env.LMSTUDIO_MAX_TOKENS || 16384)

// Returns the translated text. Handles "thinking" models (Qwen3, DeepSeek-R1,
// gpt-oss…): if the whole token budget went into reasoning and `content` is
// empty (finish_reason = "length"), the same request is retried with a bigger
// budget before giving up with a clear diagnostic.
async function chat (system, user, attempt) {
  let maxTokens = Math.min(MAX_TOKENS_CAP, Math.max(2048, Math.ceil(user.length * 3)))
  let lastDiag = ''
  for (let grow = 0; grow < 3; grow++) {
    const res = await http('/v1/chat/completions', {
      model: MODEL,
      temperature: attempt === 0 ? TEMPERATURE : Math.max(0, TEMPERATURE - 0.1 * attempt),
      max_tokens: maxTokens,
      stream: false,
      ...(NO_THINK ? { reasoning_effort: 'low' } : {}),
      messages: [
        { role: 'system', content: system + (NO_THINK ? ' /no_think' : '') },
        { role: 'user', content: user }
      ]
    })
    const choice = res?.choices?.[0] || {}
    const msg = choice.message || {}
    const out = cleanOutput(msg.content)
    if (out) return out
    const reasoning = String(msg.reasoning_content || msg.reasoning || '')
    const finish = choice.finish_reason || 'unknown'
    lastDiag = `finish_reason=${finish}, max_tokens=${maxTokens}` +
      (reasoning ? `, model spent the budget on thinking (${reasoning.length} chars)` : '') +
      (res?.usage ? `, prompt ${res.usage.prompt_tokens} + completion ${res.usage.completion_tokens} tokens` : '')
    if (process.env.NEWS_TR_DEBUG) console.log(`  [debug] empty content: ${lastDiag}`)
    if (finish !== 'length' && !reasoning) break
    if (maxTokens >= MAX_TOKENS_CAP) break
    maxTokens = Math.min(MAX_TOKENS_CAP, maxTokens * 2)
  }
  throw new Error(`empty output (${lastDiag}). Fix: in LM Studio raise the model "Context Length" (≥ 16384), ` +
    'or use a non-thinking model, or lower NEWS_TR_CHUNK (e.g. 1500)')
}

const systemPrompt = (lc, kind) => {
  const L = LANG[lc].name
  const base = `You are a professional native ${L} translator for the SmartHoldem blockchain news website. ` +
    `Translate the user's ${kind} from English into natural, fluent ${L}. Output ONLY the translation — no explanations, no notes, no quotes, no code fences. ` +
    `Never translate or alter: product and brand names (${KEEP_TERMS.join(', ')}), ticker symbols, #hashtags, URLs, e-mail addresses, wallet addresses, numbers, amounts, dates in digits, code and emojis.`
  if (kind === 'HTML fragment') {
    return base + ' The input is an HTML fragment: keep EVERY HTML tag, attribute and entity exactly as it is, in the same order (including <br>, <strong>, <a href>, <img src>). Translate only the human-readable text between tags. Do not add or remove tags.'
  }
  if (kind === 'headline') return base + ' The input is a single news headline: output a single line.'
  return base + ' Keep the same paragraph breaks.'
}

// ── validation ──────────────────────────────────────────────────────────────
const strip = html => String(html || '').replace(/<[^>]+>/g, ' ').replace(/&[a-z#0-9]+;/gi, ' ').replace(/\s+/g, ' ').trim()
const tagSeq = html => [...String(html).matchAll(/<\s*(\/?)\s*([a-zA-Z][a-zA-Z0-9]*)/g)].map(m => m[1] + m[2].toLowerCase())
const attrs = html => [...String(html).matchAll(/\s(?:href|src)\s*=\s*"([^"]*)"/gi)].map(m => m[1]).sort().join('\n')
const hashtags = s => [...String(s).matchAll(/#([A-Za-z][A-Za-z0-9_]{1,29})/g)].map(m => m[1]).sort().join(',')
const addresses = s => [...String(s).matchAll(/\bS[1-9A-HJ-NP-Za-km-z]{33}\b/g)].map(m => m[0]).sort().join(',')
const escRe = s => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const KEEP_RE = new RegExp(KEEP_TERMS.slice().sort((a, b) => b.length - a.length).map(escRe).join('|'), 'g')
// Human words that actually need translation (no tags, hashtags, URLs,
// addresses, brand names, numbers) — used to skip "#Web4 #SmartHoldem"-only
// fragments and to avoid false "identical to English" failures.
const translatableText = html => strip(html)
  .replace(/#[A-Za-z][A-Za-z0-9_]{1,29}/g, ' ')
  .replace(/\bhttps?:\/\/\S+|\bwww\.\S+|\S+@\S+\.\S+/g, ' ')
  .replace(/\bS[1-9A-HJ-NP-Za-km-z]{33}\b/g, ' ')
  .replace(KEEP_RE, ' ')
  .replace(/\s+/g, ' ').trim()
const wordCount = s => (s.match(/\p{L}{2,}/gu) || []).length

function languageOk (lc, src, out) {
  const L = LANG[lc]
  const text = strip(out)
  if (!text) return 'empty'
  const srcWords = wordCount(translatableText(src))
  if (srcWords < 4) return null // headings like "Iroh (QUIC) Transport": nothing to judge
  if (text === strip(src)) return 'identical to English'
  const letters = (text.match(/\p{L}/gu) || []).length || 1
  if (L.script) {
    const hits = (text.match(L.script) || []).length
    const need = lc === 'vi' ? 0.04 : 0.3
    if (hits / letters < need) return `not ${L.name} (script ratio ${(hits / letters).toFixed(2)})`
  } else {
    const words = text.toLowerCase().split(/[^\p{L}‘']+/u).filter(Boolean)
    if (words.length >= 12) {
      const en = ['the', 'and', 'of', 'to', 'is', 'with', 'for', 'that', 'this', 'are', 'will', 'you', 'your']
      const enHits = words.filter(w => en.includes(w)).length / words.length
      const lcHits = words.filter(w => L.stop.includes(w)).length / words.length
      if (enHits > 0.06 && enHits > lcHits) return `looks English (${enHits.toFixed(2)} vs ${lcHits.toFixed(2)})`
      if (lcHits < 0.015) return `no ${L.name} function words`
    }
  }
  return null
}

function validate (lc, src, out, { html = false } = {}) {
  if (!out) return 'empty output'
  const ls = strip(src).length, lo = strip(out).length
  const min = LANG[lc].cjk ? 0.2 : 0.45
  if (ls > 30 && (lo / ls < min || lo / ls > 3.2)) return `length ratio ${(lo / ls).toFixed(2)} (truncated or padded)`
  if (hashtags(src) !== hashtags(out)) return 'hashtags changed'
  if (addresses(src) !== addresses(out)) return 'wallet addresses changed'
  if (html) {
    const a = tagSeq(src).filter(t => t !== 'br' && t !== '/br')
    const b = tagSeq(out).filter(t => t !== 'br' && t !== '/br')
    if (a.join() !== b.join()) {
      const i = a.findIndex((tag, k) => tag !== b[k])
      const at = i === -1 ? a.length : i
      return `HTML markup changed (tag #${at + 1}: expected <${a[at] ?? 'end'}>, got <${b[at] ?? 'end'}>)`
    }
    const brA = tagSeq(src).filter(t => t === 'br').length
    const brB = tagSeq(out).filter(t => t === 'br').length
    if (Math.abs(brA - brB) > Math.max(2, brA * 0.15)) return 'line breaks changed'
    if (attrs(src) !== attrs(out)) return 'links / images changed'
  }
  return languageOk(lc, src, out)
}

// ── HTML chunking (top-level nodes) ─────────────────────────────────────────
const VOID = new Set(['br', 'img', 'hr', 'input', 'meta', 'link', 'source', 'wbr'])
function topLevelNodes (html) {
  const nodes = []
  const re = /<\s*(\/?)\s*([a-zA-Z][a-zA-Z0-9]*)[^>]*?(\/?)>/g
  let depth = 0, start = 0, m
  while ((m = re.exec(html))) {
    const [full, close, nameRaw, selfClose] = m
    const name = nameRaw.toLowerCase()
    if (depth === 0 && m.index > start) {
      const between = html.slice(start, m.index)
      if (between.trim()) nodes.push(between)
      start = m.index
    }
    if (close) depth = Math.max(0, depth - 1)
    else if (!VOID.has(name) && !selfClose) depth++
    if (depth === 0) {
      nodes.push(html.slice(start, m.index + full.length))
      start = m.index + full.length
    }
  }
  if (start < html.length && html.slice(start).trim()) nodes.push(html.slice(start))
  return nodes
}
const needsTranslation = node => !/^\s*<(pre|code)\b/i.test(node) && wordCount(translatableText(node)) > 0

function chunkArticle (html) {
  const parts = [] // { html, translate }
  let buf = ''
  let nodes = []
  const flush = () => { if (buf) { parts.push({ html: buf, translate: true, nodes }); buf = ''; nodes = [] } }
  for (const node of topLevelNodes(html)) {
    if (!needsTranslation(node)) { flush(); parts.push({ html: node, translate: false }); continue }
    if (buf && buf.length + node.length > CHUNK) flush()
    buf += node
    nodes.push(node)
  }
  flush()
  return parts
}

async function translateUnit (lc, kind, src, html, attempts = ATTEMPTS) {
  let lastErr = ''
  for (let attempt = 0; attempt < attempts; attempt++) {
    try {
      let out = await chat(systemPrompt(lc, kind), src, attempt)
      if (kind === 'headline') out = out.split('\n')[0].replace(/^["«“']+|["»”']+$/g, '').trim()
      const err = validate(lc, src, out, { html })
      if (!err) return out
      lastErr = err
      if (process.env.NEWS_TR_DEBUG) console.log(`  [debug] ${lc} ${kind} attempt ${attempt + 1}: ${err}\n  SRC: ${src.slice(0, 400)}\n  OUT: ${out.slice(0, 400)}`)
    } catch (e) {
      lastErr = e?.name === 'AbortError' ? 'timeout' : (e?.message || String(e))
      if (/ECONNREFUSED|fetch failed|ENOTFOUND|EHOSTUNREACH/i.test(lastErr)) throw e
      if (/^empty output/.test(lastErr)) break // budget already grown inside chat(); retrying won't help
    }
  }
  throw new Error(`${kind}: ${lastErr}`)
}

async function translateArticle (lc, item) {
  const title = await translateUnit(lc, 'headline', item.title, false)
  const text = item.text?.trim() ? await translateUnit(lc, 'news summary', item.text, false) : ''
  let article = ''
  for (const part of chunkArticle(item.article || '')) {
    if (!part.translate) { article += part.html; continue }
    if (part.nodes.length < 2) { article += await translateUnit(lc, 'HTML fragment', part.html, true); continue }
    try {
      // Big chunk first (fast). 2 tries, then fall back to paragraph-by-paragraph:
      // small fragments keep their markup much more reliably.
      article += await translateUnit(lc, 'HTML fragment', part.html, true, 2)
    } catch (e) {
      const msg = e?.message || ''
      if (/ECONNREFUSED|fetch failed|ENOTFOUND|EHOSTUNREACH|empty output/i.test(msg)) throw e
      if (process.env.NEWS_TR_DEBUG) console.log(`  [debug] ${lc}: chunk failed (${msg}) → translating ${part.nodes.length} paragraphs one by one`)
      for (const node of part.nodes) article += await translateUnit(lc, 'HTML fragment', node, true)
    }
  }
  return { title, text, article }
}

// ── storage ─────────────────────────────────────────────────────────────────
function loadStore (lc) {
  const f = join(NEWS_TR_DIR, `${lc}.json`)
  try { return existsSync(f) ? JSON.parse(readFileSync(f, 'utf-8')) : {} } catch { return {} }
}
function saveStore (lc, store) {
  mkdirSync(NEWS_TR_DIR, { recursive: true })
  const f = join(NEWS_TR_DIR, `${lc}.json`)
  const sorted = Object.fromEntries(Object.keys(store).sort((a, b) => Number(b) - Number(a)).map(k => [k, store[k]]))
  writeFileSync(f + '.tmp', JSON.stringify(sorted, null, 1) + '\n')
  renameSync(f + '.tmp', f)
}

// ── yarn news:translate --check  → quick model diagnostics ─────────────────
async function checkModel () {
  try { await connect() } catch (e) { console.error('[news-translate] ✗ LM Studio not reachable:', e?.message || e); process.exit(1) }
  log(`LM Studio ${BASE} · model: ${MODEL}`)
  const lc = (ONLY[0] && LANG[ONLY[0]]) ? ONLY[0] : 'ru'
  const sample = '<p>SmartHoldem is a <strong>post-quantum</strong> DPoS blockchain for Web 4.0. Read more on <a href="https://smartholdem.io">our website</a>. #SmartHoldem</p>'
  const t0 = Date.now()
  try {
    const out = await chat(systemPrompt(lc, 'HTML fragment'), sample, 0)
    log(`answer (${((Date.now() - t0) / 1000).toFixed(1)}s):\n${out}`)
    const err = validate(lc, sample, out, { html: true })
    log(err ? `✗ validation: ${err}` : `✓ validation passed — model is ready for ${LANG[lc].name}`)
  } catch (e) {
    log(`✗ ${e?.message || e}`)
  }
}

// ── main ────────────────────────────────────────────────────────────────────
async function main () {
  if (args.check) return checkModel()
  let items = readNewsSnapshot()
  if (!items.length) { log('no news in assets/news-snapshot.json — run `yarn news:images` first'); return }
  if (ONLY_ID) items = items.filter(it => ONLY_ID.includes(String(it.id)))
  const locales = ONLY.filter(lc => NEWS_TR_LOCALES.includes(lc))

  const stores = Object.fromEntries(locales.map(lc => [lc, loadStore(lc)]))
  const todo = []
  for (const it of items) {
    const hash = newsSourceHash(it)
    for (const lc of locales) {
      if (stores[lc][String(it.id)]?.hash !== hash) todo.push({ it, lc, hash })
    }
  }
  const newsTodo = [...new Set(todo.map(t => t.it.id))]
  log(`${items.length} news × ${locales.length} languages · to translate: ${todo.length} (${newsTodo.length} news)`)
  if (!todo.length) { log('✓ everything is up to date'); return }
  if (SOFT && BUILD_MODE === 'off') { log('build mode: NEWS_TR_BUILD=off — skipping, the site uses existing translations'); return }
  if (SOFT && BUILD_MODE !== 'all' && todo.length > BUILD_MAX) {
    log(`build mode: ${todo.length} translations pending (> ${BUILD_MAX}) — skipping so the build stays fast.`)
    log('  Run `yarn news:translate` separately (resumable), or NEWS_TR_BUILD=all to translate inside the build.')
    return
  }
  if (DRY) { for (const t of todo.slice(0, 50)) log(`  would translate #${t.it.id} → ${t.lc}`); return }

  try {
    const models = await connect()
    log(`LM Studio ${BASE} · model: ${MODEL}${models.length > 1 ? ` (available: ${models.join(', ')})` : ''}`)
  } catch (e) {
    const msg = `LM Studio is not reachable at ${BASE} (${e?.message || e})`
    if (SOFT) { log(`⚠ ${msg} — skipping, the site will use existing translations`); return }
    console.error('[news-translate] ✗', msg); process.exit(1)
  }

  let done = 0, failed = 0, n = 0
  const started = Date.now()
  let stop = false
  process.on('SIGINT', () => { if (stop) process.exit(130); stop = true; log(`⏸ stopping after the current translation${CONCURRENCY > 1 ? 's' : ''}… (Ctrl+C again to force)`) })

  // Worker pool: up to NEWS_TR_CONCURRENCY translations at once (LM Studio
  // batches parallel requests on the GPU). Order = news by news, so the
  // languages of one article are translated side by side.
  const newsIdx = new Map(newsTodo.map((id, i) => [id, i]))
  const queue = newsTodo.flatMap(id => todo.filter(x => x.it.id === id))
  if (CONCURRENCY > 1) log(`parallel requests: ${CONCURRENCY}`)

  async function worker () {
    while (!stop && n < LIMIT && queue.length) {
      const t = queue.shift()
      n++
      const id = t.it.id
      const label = `новость ${newsIdx.get(id) + 1}/${newsTodo.length} (#${id}) · язык ${t.lc}`
      const t0 = Date.now()
      try {
        const tr = await translateArticle(t.lc, t.it)
        stores[t.lc][String(id)] = { ...tr, hash: t.hash, model: MODEL, at: new Date().toISOString() }
        saveStore(t.lc, stores[t.lc])
        done++
        log(`${label} · готово (${((Date.now() - t0) / 1000).toFixed(0)}s) · ${done}/${todo.length}`)
      } catch (e) {
        const msg = e?.message || String(e)
        failed++
        if (/ECONNREFUSED|fetch failed|ENOTFOUND|EHOSTUNREACH/i.test(msg)) {
          if (!stop) log(`✗ LM Studio connection lost (${msg}) — progress is saved, run again to continue`)
          stop = true
          return
        }
        log(`${label} · ✗ пропущено, остаётся English — ${msg}`)
      }
    }
  }
  await Promise.all(Array.from({ length: CONCURRENCY }, () => worker()))

  const mins = ((Date.now() - started) / 60000).toFixed(1)
  log(`done: ${done} translated · ${failed} failed/skipped · ${todo.length - done - failed} remaining · ${mins} min`)
}

main().catch(e => {
  console.error('[news-translate] ✗', e?.message || e)
  process.exit(SOFT ? 0 : 1)
})
