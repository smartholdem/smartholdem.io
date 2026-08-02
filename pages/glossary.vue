<template>
  <div>
    <!-- Reading progress bar (mirrors whitepaper aesthetic) -->
    <div class="fixed left-0 top-0 z-[60] h-0.5 w-full bg-transparent">
      <div class="h-full bg-neon-cyan shadow-neon-cyan transition-[width] duration-150" :style="{ width: progress + '%' }"></div>
    </div>

    <!-- Hero -->
    <section class="relative overflow-hidden border-b hair-border">
      <div class="absolute inset-0" style="background:radial-gradient(60% 60% at 80% 0%, rgba(0,212,255,0.08), transparent), radial-gradient(50% 50% at 10% 100%, rgba(124,58,237,0.08), transparent)"></div>
      <div class="container-x relative z-10 py-16 sm:py-20">
        <nav class="mb-6 flex items-center gap-2 text-xs text-secondary" aria-label="Breadcrumb">
          <NuxtLink :to="localePath('/')" class="hover:text-neon-cyan">{{ t('glossary.crumbHome') }}</NuxtLink>
          <ChevronRight class="h-3 w-3" />
          <NuxtLink :to="localePath('/white-paper')" class="hover:text-neon-cyan">{{ t('glossary.crumbWp') }}</NuxtLink>
          <ChevronRight class="h-3 w-3" />
          <span class="text-neon-cyan">{{ t('glossary.title') }}</span>
        </nav>
        <p class="eyebrow mb-4">{{ t('glossary.eyebrow') }}</p>
        <h1 class="max-w-4xl text-4xl font-extrabold leading-tight text-white sm:text-5xl">{{ t('glossary.title') }}</h1>
        <p class="mt-4 max-w-3xl text-lg text-secondary">{{ t('glossary.subtitle') }}</p>

        <div class="mt-6 flex flex-wrap gap-3">
          <div class="rounded-lg border hair-border surface px-4 py-2 text-sm">
            <span class="mono font-bold text-neon-cyan">{{ total }}</span> {{ t('glossary.statTerms') }}
          </div>
          <div class="rounded-lg border hair-border surface px-4 py-2 text-sm">
            <span class="mono font-bold text-neon-cyan">{{ letters.length }}</span> {{ t('glossary.statLetters') }}
          </div>
          <div class="rounded-lg border hair-border surface px-4 py-2 text-sm">
            <span class="mono font-bold text-neon-cyan">A → Z</span> {{ t('glossary.statInteractive') }}
          </div>
        </div>

        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink :to="localePath('/white-paper')" class="btn-outline">
            <BookOpen class="h-4 w-4" /> {{ t('glossary.ctaWp') }}
          </NuxtLink>
          <NuxtLink :to="localePath('/executive-summary')" class="btn-outline">
            <FileText class="h-4 w-4" /> {{ t('glossary.ctaExec') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Sticky toolbar: A-Z jump + search -->
    <div class="sticky top-16 z-40 border-b hair-border glass">
      <div class="container-x flex flex-col gap-3 py-3 md:h-14 md:flex-row md:items-center md:justify-between md:gap-4 md:py-0">
        <!-- Search -->
        <div class="flex items-center gap-2 rounded-lg border hair-border px-3 md:w-80">
          <Search class="h-4 w-4 text-neon-cyan shrink-0" />
          <input
            v-model="q"
            type="text"
            :placeholder="t('glossary.searchPh')"
            class="h-9 w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
          />
          <button v-if="q" class="text-secondary hover:text-neon-cyan" :aria-label="t('glossary.clear')" @click="q=''">
            <X class="h-4 w-4" />
          </button>
        </div>
        <!-- A-Z jump bar -->
        <div class="mono flex flex-wrap items-center gap-1 overflow-x-auto text-[11px]">
          <button
            v-for="L in alphabet"
            :key="L"
            class="az-btn"
            :class="[activeSet.has(L) ? 'az-on' : 'az-off', currentLetter === L ? 'az-cur' : '']"
            :disabled="!activeSet.has(L)"
            @click="jumpTo(L)"
          >{{ L }}</button>
        </div>
      </div>
    </div>

    <!-- Body -->
    <div class="container-x py-10">
      <p v-if="!filteredTotal" class="rounded-xl border hair-border surface p-8 text-center text-secondary">
        {{ t('glossary.noResults', { q }) }}
      </p>

      <div v-else class="space-y-14">
        <section
          v-for="L in visibleLetters"
          :key="L"
          :id="`letter-${L}`"
          class="scroll-mt-32"
        >
          <div class="mb-6 flex items-baseline gap-4 border-b hair-border pb-3">
            <span class="mono select-none text-6xl font-black leading-none text-neon-cyan/90">{{ L }}</span>
            <span class="mono text-xs uppercase tracking-widest text-secondary">
              {{ filteredGroups[L].length }} {{ t('glossary.terms') }}
            </span>
          </div>

          <div class="grid gap-4 md:grid-cols-2">
            <article
              v-for="term in filteredGroups[L]"
              :key="term.slug"
              :id="term.slug"
              class="group scroll-mt-32 rounded-xl border hair-border surface p-5 transition-colors hover:border-neon-cyan/40"
            >
              <div class="mb-2 flex items-start justify-between gap-3">
                <h3 class="mono text-lg font-bold text-white" v-html="highlight(term.term)"></h3>
                <button
                  class="shrink-0 rounded-md border hair-border p-1.5 text-secondary opacity-0 transition-opacity hover:text-neon-cyan group-hover:opacity-100"
                  :aria-label="t('glossary.copyLink')"
                  :title="t('glossary.copyLink')"
                  @click="copyLink(term.slug)"
                >
                  <LinkIcon class="h-3.5 w-3.5" />
                </button>
              </div>
              <div class="glossary-def text-sm leading-relaxed text-secondary" v-html="renderDef(term)"></div>
            </article>
          </div>
        </section>
      </div>
    </div>

    <!-- Back to top -->
    <transition name="fade">
      <button
        v-if="showTop"
        class="fixed bottom-5 right-5 z-40 inline-flex h-11 w-11 items-center justify-center rounded-full border border-neon-cyan/40 glass text-neon-cyan shadow-neon-cyan"
        :aria-label="t('glossary.top')"
        @click="toTop"
      >
        <ArrowUp class="h-5 w-5" />
      </button>
    </transition>

    <!-- Toast -->
    <transition name="fade">
      <div v-if="toast" class="fixed bottom-6 left-1/2 z-[70] -translate-x-1/2 rounded-lg border border-neon-cyan/40 glass px-4 py-2 text-sm text-neon-cyan shadow-neon-cyan">
        {{ toast }}
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ChevronRight, BookOpen, FileText, Search, X, ArrowUp, Link as LinkIcon } from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()

const { terms, letters, alphabet, activeSet, groups, total } = useGlossary()

const q = ref('')
const currentLetter = ref('')
const progress = ref(0)
const showTop = ref(false)
const toast = ref('')

// ---- filtering (simple case-insensitive substring, fast for ~50 items) -----
const norm = (s) => (s || '').toString().toLowerCase()
const query = computed(() => norm(q.value).trim())

const filteredGroups = computed(() => {
  if (!query.value) return groups
  const out = {}
  for (const L of letters) {
    const hits = groups[L].filter((it) => norm(it.term).includes(query.value) || norm(it.plain).includes(query.value))
    if (hits.length) out[L] = hits
  }
  return out
})

const visibleLetters = computed(() => letters.filter((L) => filteredGroups.value[L]?.length))
const filteredTotal = computed(() => visibleLetters.value.reduce((n, L) => n + filteredGroups.value[L].length, 0))

// ---- inline highlight of matched query in term titles ----------------------
const escapeHtml = (s) => String(s).replace(/[&<>"']/g, (c) => (
  { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
))
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
const highlight = (text) => {
  const safe = escapeHtml(text)
  if (!query.value) return safe
  const re = new RegExp(escapeRe(query.value), 'gi')
  return safe.replace(re, (m) => `<mark class="glossary-mark">${m}</mark>`)
}
const renderDef = (term) => {
  if (!query.value) return term.html
  const re = new RegExp(escapeRe(query.value), 'gi')
  // Naive but safe: highlight only inside text nodes by targeting the raw HTML.
  // Since the HTML is trusted (produced by marked from our own markdown), we
  // avoid breaking tags by skipping angle-bracketed regions.
  return term.html.replace(/>([^<]+)</g, (full, inner) => {
    const marked = escapeHtml(inner).replace(re, (m) => `<mark class="glossary-mark">${m}</mark>`)
    return `>${marked}<`
  })
}

// ---- A-Z jump navigation ---------------------------------------------------
const jumpTo = (L) => {
  if (!activeSet.has(L)) return
  const el = document.getElementById(`letter-${L}`)
  if (!el) return
  el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  history.replaceState(null, '', `#letter-${L}`)
}

// ---- copy deep link --------------------------------------------------------
const showToast = (msg) => {
  toast.value = msg
  setTimeout(() => { toast.value = '' }, 1600)
}
const copyLink = async (slug) => {
  try {
    const base = `${location.origin}${location.pathname}`
    await navigator.clipboard?.writeText(`${base}#${slug}`)
    showToast(t('glossary.linkCopied'))
  } catch { /* clipboard not available */ }
}

// ---- scroll effects --------------------------------------------------------
let io = null
const onScroll = () => {
  const h = document.documentElement
  const max = h.scrollHeight - h.clientHeight
  progress.value = max > 0 ? Math.min(100, (h.scrollTop / max) * 100) : 0
  showTop.value = h.scrollTop > 500
}
const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

onMounted(async () => {
  await nextTick()

  // Track currently-visible letter section (updates A-Z active state)
  io = new IntersectionObserver((entries) => {
    for (const en of entries) {
      if (en.isIntersecting) {
        const id = en.target.id || ''
        if (id.startsWith('letter-')) currentLetter.value = id.slice('letter-'.length)
      }
    }
  }, { rootMargin: '-140px 0px -70% 0px', threshold: 0 })
  document.querySelectorAll('[id^="letter-"]').forEach((el) => io.observe(el))

  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()

  // Deep-link on load: either #letter-X or #term-slug
  if (location.hash) {
    const id = location.hash.slice(1)
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 250)
  }
})

onBeforeUnmount(() => {
  io?.disconnect()
  window.removeEventListener('scroll', onScroll)
})

// ---- SEO -------------------------------------------------------------------
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/glossary')
useBreadcrumbLd([{ key: 'nav.glossary', path: '/glossary' }])
useSeoMeta({
  title: () => t('glossary.seoTitle'),
  description: () => t('glossary.seoDescription'),
  keywords: 'SmartHoldem glossary, Netfory terms, Web 4.0 dictionary, BLAKE3, Iroh, QUIC, Proof-of-Utility, DHT, DPoS, STH, SmartNet',
  ogTitle: () => t('glossary.seoTitle'),
  ogDescription: () => t('glossary.seoDescription'),
  ogType: 'article',
  ogImage: `${config.public.siteUrl}/images/home/web_4_smarholdem_netfory.jpg`,
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }],
  script: [{
    type: 'application/ld+json',
    innerHTML: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'DefinedTermSet',
      name: 'Netfory Whitepaper Glossary',
      inDefinedTermSet: `${config.public.siteUrl}/white-paper`,
      hasDefinedTerm: terms.slice(0, 40).map((it) => ({
        '@type': 'DefinedTerm',
        '@id': `${config.public.siteUrl}/glossary#${it.slug}`,
        name: it.term,
        description: it.plain.slice(0, 240)
      }))
    })
  }]
})
</script>

<style scoped>
.az-btn{
  @apply inline-flex h-7 min-w-[1.75rem] items-center justify-center rounded-md border px-1.5 font-semibold uppercase transition-colors;
  border-color: var(--border);
}
.az-on{ color: var(--text); }
.az-on:hover{ color:#00D4FF; border-color: rgba(0,212,255,.5); background: rgba(0,212,255,.06); }
.az-cur{ color:#00D4FF; border-color:#00D4FF; background: rgba(0,212,255,.1); }
.az-off{ color: var(--muted); opacity:.35; cursor: not-allowed; }
.fade-enter-active,.fade-leave-active{ transition:opacity .2s ease }
.fade-enter-from,.fade-leave-to{ opacity:0 }
</style>

<style>
/* Non-scoped so v-html descendants inherit the styling */
.glossary-def code{
  background: rgba(0,212,255,0.08);
  color: #00D4FF;
  padding: 0 4px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', ui-monospace, monospace;
  font-size: 0.85em;
}
.glossary-def a{ color:#00D4FF; text-decoration: none; border-bottom: 1px dashed rgba(0,212,255,.5); }
.glossary-def a:hover{ border-bottom-style: solid; }
.glossary-def strong{ color: var(--text); font-weight: 600; }
.glossary-def em{ color: var(--text); font-style: italic; }
.glossary-mark{
  background: rgba(255, 223, 0, 0.18);
  color: #FFDF00;
  padding: 0 2px;
  border-radius: 3px;
  border-bottom: 1px solid rgba(255,223,0,.5);
}
</style>
