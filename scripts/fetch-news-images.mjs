// Build-time news image downloader for SmartHoldem Netfory (SSG).
// Fetches every news image from the Strapi CMS, saves it into
// public/images/news-images/, and writes a manifest mapping the
// absolute remote URL -> local /images/... path.
//
// Runs BEFORE `nuxt generate` so the files are copied into .output/public.
// The composable (useNews.ts) imports the manifest and rewrites image URLs,
// with an automatic fallback to the remote host for anything not downloaded.

import { createHash } from 'node:crypto'
import { mkdir, writeFile } from 'node:fs/promises'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const HOST = 'https://news.smartholdem.io'
const API = `${HOST}/api/sthnews?populate=img&pagination[pageSize]=500&sort=date:desc`

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'public', 'images', 'news-images')
const MANIFEST = join(OUT_DIR, '_manifest.json')
const PUBLIC_PREFIX = '/images/news-images'
const SNAPSHOT_ASSET = join(ROOT, 'assets', 'news-snapshot.json')
const SNAPSHOT_PUBLIC = join(ROOT, 'public', 'news-snapshot.json')
const PLACEHOLDER = '/images/home/web_4_smarholdem_netfory.jpg'

function absolutise(url) {
  if (!url) return null
  return url.startsWith('http') ? url : `${HOST}${url.startsWith('/') ? '' : '/'}${url}`
}

// Mirror the "best format" selection used in composables/useNews.ts
function pickBest(imgAttr) {
  const formats = imgAttr?.formats || {}
  return formats?.medium?.url || formats?.small?.url || imgAttr?.url || null
}

function extFromUrl(url) {
  const clean = url.split('?')[0]
  const m = /\.([a-zA-Z0-9]{2,5})$/.exec(clean)
  const ext = m ? m[1].toLowerCase() : 'jpg'
  return ext.length > 5 ? 'jpg' : ext
}

function localName(url) {
  const hash = createHash('sha1').update(url).digest('hex').slice(0, 16)
  return `${hash}.${extFromUrl(url)}`
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })

  let items = []
  try {
    const res = await fetch(API).then((r) => r.json())
    items = res?.data || []
  } catch (e) {
    console.warn('[news-images] Strapi fetch failed, keeping existing manifest:', e?.message || e)
    // Do not clobber an existing manifest if the API is unreachable.
    return
  }

  const manifest = {}
  let downloaded = 0
  let skipped = 0
  let failed = 0

  for (const raw of items) {
    const a = raw?.attributes || raw || {}
    const imgAttr = a?.img?.data?.attributes || {}
    const best = pickBest(imgAttr)
    const remote = absolutise(best)
    if (!remote) continue
    if (manifest[remote]) { skipped++; continue }

    const file = localName(remote)
    const localPath = `${PUBLIC_PREFIX}/${file}`
    try {
      const resp = await fetch(remote)
      if (!resp.ok) throw new Error(`HTTP ${resp.status}`)
      const buf = Buffer.from(await resp.arrayBuffer())
      await writeFile(join(OUT_DIR, file), buf)
      manifest[remote] = localPath
      downloaded++
    } catch (e) {
      failed++
      console.warn(`[news-images] failed ${remote}: ${e?.message || e}`)
      // No manifest entry -> composable falls back to the remote URL.
    }
  }

  await writeFile(MANIFEST, JSON.stringify(manifest, null, 2))

  // -------------------------------------------------------------------------
  // Build a JSON snapshot of every news item (mapped to our shape). This is
  // baked into the Nuxt bundle via `assets/news-snapshot.json` so that if the
  // Strapi CMS is unreachable at runtime (or on client-side navigation), we
  // still show the last known-good list of news instead of an error state.
  // -------------------------------------------------------------------------
  const snapshot = []
  for (const raw of items) {
    const a = raw?.attributes || raw || {}
    const imgAttr = a?.img?.data?.attributes || {}
    const best = pickBest(imgAttr)
    const remote = absolutise(best)
    const localPath = remote && manifest[remote] ? manifest[remote] : null
    snapshot.push({
      id: raw?.id ?? a?.id,
      title: a?.title || 'SmartHoldem Update',
      date: a?.date || a?.createdAt || '',
      tag: a?.tag || 'News',
      text: a?.text || '',
      article: a?.article || '',
      image: localPath || remote || PLACEHOLDER,
      imageRemote: remote || PLACEHOLDER
    })
  }
  // Newest first (defensive: Strapi already sorts, but be safe)
  snapshot.sort((a, b) => String(b.date).localeCompare(String(a.date)))
  const snapJson = JSON.stringify(snapshot)
  await writeFile(SNAPSHOT_ASSET, snapJson)
  await writeFile(SNAPSHOT_PUBLIC, snapJson)

  console.log(
    `[news-images] done. downloaded=${downloaded} skipped=${skipped} failed=${failed} total_articles=${items.length} snapshot=${snapshot.length}`
  )
}

main().catch((e) => {
  console.error('[news-images] fatal:', e)
  // Never fail the build over image mirroring.
  process.exit(0)
})
