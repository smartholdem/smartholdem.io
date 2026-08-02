<template>
  <div :class="`wp-fs-${fontIndex}`">
    <!-- Reading progress bar -->
    <div class="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
      <div class="h-full bg-neon-cyan shadow-neon-cyan transition-[width] duration-150" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Hero -->
    <section class="relative overflow-hidden border-b hair-border">
      <div class="absolute inset-0" style="background:radial-gradient(60% 60% at 80% 0%, rgba(0,212,255,0.08), transparent), radial-gradient(50% 50% at 10% 100%, rgba(124,58,237,0.08), transparent)"></div>
      <div class="container-x relative z-10 py-16 sm:py-20">
        <nav class="mb-6 flex items-center gap-2 text-xs text-secondary" aria-label="Breadcrumb">
          <NuxtLink :to="localePath('/')" class="hover:text-neon-cyan">Home</NuxtLink>
          <ChevronRight class="h-3 w-3" />
          <span class="text-neon-cyan">Whitepaper</span>
        </nav>
        <p class="eyebrow mb-4">Whitepaper v1.0.0</p>
        <h1 class="max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl">Netfory Whitepaper</h1>
        <p class="mt-4 max-w-3xl text-lg text-secondary">A Peer-to-Peer Electronic Application and Data Distribution Network <span class="mono text-neon-cyan">(Web 4.0 Protocol)</span></p>

        <div class="mono mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-secondary">
          <span class="inline-flex items-center gap-1.5"><Users class="h-4 w-4 text-neon-cyan" /> TechnoL0g · Europa</span>
          <span class="inline-flex items-center gap-1.5"><Calendar class="h-4 w-4 text-neon-cyan" /> 2026-07-01</span>
          <span class="inline-flex items-center gap-1.5"><Tag class="h-4 w-4 text-neon-cyan" /> v1.0.0</span>
          <span class="inline-flex items-center gap-1.5"><Scale class="h-4 w-4 text-neon-cyan" /> MIT / CC-BY-4.0</span>
        </div>

        <div class="mt-6 flex flex-wrap gap-3">
          <div class="rounded-lg border hair-border surface px-4 py-2 text-sm"><span class="mono font-bold text-neon-cyan">{{ toc.filter(t=>t.level===1).length }}</span> chapters</div>
          <div class="rounded-lg border hair-border surface px-4 py-2 text-sm"><span class="mono font-bold text-neon-cyan">~28k</span> words</div>
          <div class="rounded-lg border hair-border surface px-4 py-2 text-sm"><span class="mono font-bold text-neon-cyan">{{ toc.length }}</span> sections</div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <button class="btn-primary" @click="startReading"><BookOpen class="h-4 w-4" /> Start Reading</button>
          <a :href="pdfUrl" target="_blank" rel="noopener" class="btn-outline"><Download class="h-4 w-4" /> Download PDF</a>
          <NuxtLink :to="localePath('/executive-summary')" class="btn-outline"><FileText class="h-4 w-4" /> Executive Summary</NuxtLink>
          <NuxtLink :to="localePath('/glossary')" class="btn-outline"><BookMarked class="h-4 w-4" /> Glossary</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Sticky toolbar -->
    <div class="sticky top-16 z-40 border-b hair-border glass">
      <div class="container-x flex h-12 items-center justify-between gap-3">
        <p class="mono truncate text-xs text-secondary">{{ activeText || 'Abstract' }}</p>
        <div class="flex items-center gap-2">
          <button class="tbtn hidden sm:inline-flex" @click="searchOpen = true">
            <Search class="h-4 w-4" /> <span class="hidden md:inline">Search</span>
            <kbd class="mono ml-1 rounded border hair-border px-1 text-[10px]">⌘K</kbd>
          </button>
          <div class="flex items-center overflow-hidden rounded-lg border hair-border">
            <button class="fbtn" aria-label="Decrease font" @click="changeFont(-1)"><Minus class="h-3.5 w-3.5" /></button>
            <span class="px-1 text-xs text-secondary">A</span>
            <button class="fbtn" aria-label="Increase font" @click="changeFont(1)"><Plus class="h-3.5 w-3.5" /></button>
          </div>
          <a :href="pdfUrl" target="_blank" rel="noopener" class="tbtn"><Download class="h-4 w-4" /><span class="hidden md:inline">PDF</span></a>
        </div>
      </div>
    </div>

    <!-- Body: TOC + content -->
    <div class="container-x py-10">
      <div class="grid gap-10 lg:grid-cols-[260px_minmax(0,1fr)]">
        <!-- TOC sidebar -->
        <aside class="hidden lg:block">
          <div class="sticky top-32 max-h-[calc(100vh-9rem)] overflow-y-auto pr-2">
            <p class="mono mb-3 text-xs font-semibold uppercase tracking-wider text-secondary">Contents</p>
            <nav class="wp-toc">
              <a
                v-for="item in toc"
                :key="item.id"
                :href="`#${item.id}`"
                :class="[`lvl-${item.level}`, activeId === item.id ? 'active' : '']"
                @click.prevent="scrollTo(item.id)"
              >{{ item.text }}</a>
            </nav>
          </div>
        </aside>

        <!-- Content -->
        <article ref="contentEl" class="prose-wp mx-auto w-full" v-html="html"></article>
      </div>
    </div>

    <!-- Mobile TOC drawer -->
    <button class="fixed bottom-5 left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border hair-border glass shadow-card lg:hidden" aria-label="Contents" @click="mobileToc = true">
      <List class="h-5 w-5" />
    </button>
    <ClientOnly>
    <Teleport to="body">
      <transition name="drawer">
        <div v-if="mobileToc" class="fixed inset-0 z-[90] lg:hidden" @click.self="mobileToc = false">
          <div class="absolute inset-0 bg-black/60"></div>
          <div class="absolute bottom-0 left-0 right-0 max-h-[75vh] overflow-y-auto rounded-t-2xl border-t hair-border glass p-5">
            <div class="mb-3 flex items-center justify-between">
              <p class="mono text-xs font-semibold uppercase tracking-wider text-secondary">Contents</p>
              <button @click="mobileToc = false"><X class="h-5 w-5" /></button>
            </div>
            <nav class="wp-toc">
              <a v-for="item in toc" :key="item.id" :href="`#${item.id}`" :class="[`lvl-${item.level}`, activeId === item.id ? 'active' : '']" @click.prevent="scrollTo(item.id); mobileToc=false">{{ item.text }}</a>
            </nav>
          </div>
        </div>
      </transition>
    </Teleport>
    </ClientOnly>

    <!-- Back to top -->
    <transition name="fade">
      <button v-if="showTop" class="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-neon-cyan/40 glass text-neon-cyan shadow-neon-cyan" aria-label="Back to top" @click="toTop">
        <ArrowUp class="h-5 w-5" />
      </button>
    </transition>

    <ClientOnly>
      <WhitepaperSearch v-model:open="searchOpen" :items="toc" @select="scrollTo" />
    </ClientOnly>
  </div>
</template>

<script setup>
import { ChevronRight, Users, Calendar, Tag, Scale, BookOpen, BookMarked, Download, FileText,
  Search, Minus, Plus, List, X, ArrowUp } from 'lucide-vue-next'

const localePath = useLocalePath()
const config = useRuntimeConfig()
const { t } = useI18n()
const colorMode = useColorMode()

// @ts-ignore raw markdown baked at build time (SSG-friendly)
import wpRaw from '~/assets/docs/whitepaper.md?raw'
// Parse synchronously on server AND client. Output is deterministic (KaTeX +
// highlight.js baked, raw HTML escaped) so hydration matches. This avoids
// serialising the ~450KB rendered HTML into the Nuxt payload (which was large
// enough to break client hydration entirely).
const { html, toc } = parseMarkdownDoc(wpRaw)

const pdfUrl = '/docs/Netfory_WhitePaper_SmartHoldem_STH.pdf'

const contentEl = ref(null)
const activeId = ref('')
const activeText = computed(() => toc.find((t) => t.id === activeId.value)?.text || '')
const fontIndex = ref(1)
const searchOpen = ref(false)
const mobileToc = ref(false)
const progress = ref(0)
const showTop = ref(false)

const changeFont = (d) => { fontIndex.value = Math.min(2, Math.max(0, fontIndex.value + d)) }

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#${id}`)
  activeId.value = id
}
const startReading = () => { const first = toc.find((t) => t.level === 1); if (first) scrollTo(first.id) }
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

const onScroll = () => {
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0
  showTop.value = h.scrollTop > 500
}

const onKey = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); searchOpen.value = true }
}

let io = null
let mermaidLib = null
let mermaidSeq = 0

const renderMermaid = async () => {
  if (!contentEl.value) return
  const nodes = contentEl.value.querySelectorAll('pre.mermaid')
  if (!nodes.length) return
  if (!mermaidLib) {
    try { mermaidLib = (await import('mermaid')).default }
    catch (e) { document.documentElement.dataset.mm = 'IMPORT_FAIL:' + String(e?.message || e).slice(0, 80); return }
  }
  document.documentElement.dataset.mm = 'import-ok;pre=' + nodes.length
  const dark = colorMode.value !== 'light'
  mermaidLib.initialize({
    startOnLoad: false,
    securityLevel: 'loose',
    theme: dark ? 'dark' : 'default',
    fontFamily: 'JetBrains Mono, monospace'
  })
  let ok = 0, firstErr = ''
  for (const n of Array.from(nodes)) {
    const def = decodeURIComponent(n.getAttribute('data-src') || '') || n.textContent || ''
    try {
      const { svg } = await mermaidLib.render('mmd-' + (mermaidSeq++), def)
      n.innerHTML = svg
      n.setAttribute('data-processed', '1')
      ok++
    } catch (e) {
      if (!firstErr) firstErr = String(e?.message || e).slice(0, 90)
      n.textContent = def
    }
  }
  document.documentElement.dataset.mm = `ok=${ok}/${nodes.length};${firstErr}`
}

const renderMath = async () => {}

onMounted(async () => {
  // Copy-to-clipboard via delegation
  contentEl.value?.addEventListener('click', (e) => {
    const btn = e.target.closest('.wp-copy')
    if (!btn) return
    const code = decodeURIComponent(btn.getAttribute('data-code') || '')
    navigator.clipboard?.writeText(code)
    const prev = btn.textContent
    btn.textContent = 'Copied!'
    setTimeout(() => { btn.textContent = prev }, 1500)
  })

  try { await renderMermaid() } catch (e) { /* mermaid optional */ }

  // Active-section tracking
  io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) activeId.value = en.target.id
    }
  }, { rootMargin: '-120px 0px -72% 0px', threshold: 0 })
  contentEl.value?.querySelectorAll('h1[id],h2[id],h3[id]').forEach((el) => io.observe(el))

  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKey)
  onScroll()

  // Deep link on load
  if (location.hash) { const id = location.hash.slice(1); setTimeout(() => scrollTo(id), 300) }
})

watch(() => colorMode.value, () => { renderMermaid() })

onBeforeUnmount(() => {
  io?.disconnect()
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKey)
})

// SEO — localized (all 18 locales) with og:locale + locale-aware URLs
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/white-paper')
useSeoMeta({
  title: () => t('whitepaper.seo.title'),
  description: () => t('whitepaper.seo.description'),
  keywords: 'Netfory Whitepaper, SmartHoldem, Web 4.0, decentralized hosting, Proof-of-Utility, Iroh QUIC, BLAKE3, STH tokenomics, P2P network, DPoS blockchain',
  ogTitle: () => t('whitepaper.seo.title'),
  ogDescription: () => t('whitepaper.seo.description'),
  ogType: 'article',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  ogImage: `${config.public.siteUrl}/images/home/web_4_smarholdem_netfory.jpg`,
  twitterCard: 'summary_large_image'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'TechArticle',
      headline: 'Netfory: A Peer-to-Peer Electronic Application and Data Distribution Network',
      author: [{ '@type': 'Person', name: 'TechnoL0g' }, { '@type': 'Person', name: 'Europa' }],
      datePublished: '2026-07-01',
      version: '1.0.0',
      publisher: { '@type': 'Organization', name: 'SmartHoldem Core Team' },
      about: 'Web 4.0 decentralized infrastructure protocol'
    })
  }]
})
</script>

<style scoped>
.tbtn{ @apply inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-xs font-medium transition-colors; border-color: var(--border); }
.tbtn:hover{ color:#00D4FF; border-color:rgba(0,212,255,.5); }
.fbtn{ @apply inline-flex h-9 w-8 items-center justify-center transition-colors; }
.fbtn:hover{ color:#00D4FF; }
.fade-enter-active,.fade-leave-active{ transition:opacity .25s }
.fade-enter-from,.fade-leave-to{ opacity:0 }
.drawer-enter-active,.drawer-leave-active{ transition:opacity .25s }
.drawer-enter-from,.drawer-leave-to{ opacity:0 }
</style>
