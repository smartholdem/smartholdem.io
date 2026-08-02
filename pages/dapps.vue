<template>
  <div>
    <!-- ========================= 1. HERO ========================= -->
    <section class="relative overflow-hidden border-b hair-border">
      <img src="/images/dapps/dapps-hero.jpg" alt="" aria-hidden="true"
           class="absolute inset-0 h-full w-full object-cover opacity-40" />
      <div class="absolute inset-0" style="background:radial-gradient(60% 60% at 80% 10%, rgba(0,212,255,0.10), transparent), radial-gradient(50% 50% at 10% 100%, rgba(124,58,237,0.10), transparent), linear-gradient(180deg, rgba(10,14,39,0.60), rgba(10,14,39,0.85))"></div>

      <div class="container-x relative z-10 py-20 sm:py-28">
        <div class="mx-auto max-w-4xl text-center">
          <p class="eyebrow mb-4">{{ t('dapps.eyebrow') }}</p>
          <h1 class="text-4xl font-extrabold leading-tight text-white sm:text-6xl">{{ t('dapps.title') }}</h1>
          <p class="mx-auto mt-5 max-w-2xl text-lg text-secondary">{{ t('dapps.subtitle') }}</p>

          <div class="mt-7 inline-flex items-center gap-2 rounded-full border border-neon-cyan/40 glass px-4 py-2 text-sm text-neon-cyan shadow-neon-cyan">
            <Sparkles class="h-4 w-4" />
            <span class="mono font-semibold">{{ t('dapps.tagline') }}</span>
          </div>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <NuxtLink :to="localePath('/blockchain')" class="btn-primary">
              <Boxes class="h-4 w-4" /> {{ t('dapps.ctaBlockchain') }}
            </NuxtLink>
            <a href="/devhub/sdk/installation" class="btn-outline-cyan">
              <Wrench class="h-4 w-4" /> {{ t('dapps.ctaBuild') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 2. LIVE ECOSYSTEM ========================= -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('dapps.live.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('dapps.live.title') }}</h2>
        <p class="mt-4 text-secondary">{{ t('dapps.live.subtitle') }}</p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-2">
        <article
          v-for="app in liveApps"
          :key="app.title"
          v-reveal
          class="group flex flex-col overflow-hidden rounded-2xl border hair-border glass transition-all duration-300 hover:-translate-y-1 hover:border-neon-cyan/50"
        >
          <div class="relative overflow-hidden border-b hair-border bg-[#0A0E27]">
            <img :src="app.image" :alt="app.title" loading="lazy"
                 class="block h-72 w-full object-contain transition-transform duration-500 group-hover:scale-[1.03]" />
            <span class="absolute left-4 top-4 mono inline-flex items-center gap-1.5 rounded-full border border-neon-green/40 bg-black/60 px-3 py-1 text-xs font-semibold text-neon-green backdrop-blur">
              <Circle class="h-2 w-2 fill-current" /> {{ t('dapps.live.badge') }}
            </span>
          </div>

          <div class="flex flex-1 flex-col p-6">
            <h3 class="text-xl font-bold">{{ app.title }}</h3>
            <p v-if="app.subtitle" class="mono mt-1 text-xs uppercase tracking-wider" :style="`color:${app.color}`">
              {{ app.subtitle }}
            </p>

            <ul class="mt-5 space-y-2.5 text-sm">
              <li v-for="f in app.features" :key="f" class="flex items-start gap-2.5">
                <Check class="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
                <span class="text-secondary">{{ f }}</span>
              </li>
            </ul>

            <div class="mt-6 flex flex-wrap gap-2.5">
              <a :href="app.primary.href" target="_blank" rel="noopener" class="btn-primary text-sm">
                <component :is="app.primary.icon" class="h-4 w-4" /> {{ app.primary.label }}
              </a>
              <a :href="app.secondary.href" target="_blank" rel="noopener" class="btn-outline-cyan text-sm">
                <component :is="app.secondary.icon" class="h-4 w-4" /> {{ app.secondary.label }}
              </a>
            </div>
          </div>
        </article>
      </div>
    </section>

    <!-- ========================= 3. TRNG DEVELOPER SPOTLIGHT ========================= -->
    <section class="relative border-y hair-border py-24">
      <div class="absolute inset-0 pointer-events-none" style="background:radial-gradient(45% 45% at 15% 50%, rgba(0,212,255,0.06), transparent)"></div>
      <div class="container-x relative z-10">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div v-reveal>
            <p class="eyebrow mb-3">{{ t('dapps.trng.eyebrow') }}</p>
            <h2 class="text-3xl font-bold sm:text-4xl">{{ t('dapps.trng.title') }}</h2>
            <p class="mt-5 text-secondary leading-relaxed">
              <i18n-t keypath="dapps.trng.text" tag="span" scope="global">
                <template #trng>
                  <strong class="text-white">{{ t('dapps.trng.trngLabel') }}</strong>
                </template>
              </i18n-t>
            </p>

            <ul class="mt-6 grid gap-2.5 text-sm sm:grid-cols-2">
              <li v-for="p in trngPoints" :key="p.label" class="flex items-start gap-2.5 rounded-lg border hair-border surface p-3">
                <component :is="p.icon" class="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
                <div>
                  <p class="text-xs font-semibold text-white">{{ p.label }}</p>
                  <p class="mt-0.5 text-xs text-secondary">{{ p.text }}</p>
                </div>
              </li>
            </ul>

            <div class="mt-8 flex flex-wrap gap-3">
              <a href="https://api.smartholdem.io/trng" target="_blank" rel="noopener" class="btn-primary">
                <Terminal class="h-4 w-4" /> {{ t('dapps.trng.apiBtn') }}
              </a>
              <a href="https://github.com/smartholdem/dice-game-example" target="_blank" rel="noopener" class="btn-outline-cyan">
                <Github class="h-4 w-4" /> {{ t('dapps.trng.exampleBtn') }}
              </a>
            </div>
          </div>

          <div v-reveal="120">
            <!-- Fake mac-style window chrome around the code editor image -->
            <div class="overflow-hidden rounded-2xl border hair-border glass shadow-2xl">
              <div class="flex items-center gap-2 border-b hair-border bg-black/30 px-4 py-2.5">
                <span class="h-3 w-3 rounded-full bg-red-500/80"></span>
                <span class="h-3 w-3 rounded-full bg-amber-400/80"></span>
                <span class="h-3 w-3 rounded-full bg-emerald-500/80"></span>
                <span class="mono ml-3 text-[11px] text-secondary">trng.ts — SmartHoldem SDK</span>
              </div>
              <img src="/images/dapps/trng-code-editor.jpg" alt="SmartHoldem TRNG code example"
                   loading="lazy" class="block w-full" />
            </div>
            <p class="mt-3 text-center text-xs text-secondary">{{ t('dapps.trng.caption') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 4. POKER COMING SOON ========================= -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="order-2 lg:order-1">
          <div class="relative overflow-hidden rounded-3xl border hair-border glass p-3">
            <img src="/images/dapps/app-poker-promo.jpg" alt="Blockchain Poker Club"
                 loading="lazy" class="block w-full rounded-2xl" />
          </div>
        </div>

        <div v-reveal="80" class="order-1 lg:order-2">
          <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-300">
            <Wrench class="h-3 w-3" /> {{ t('dapps.poker.badge') }}
          </div>
          <h2 class="text-3xl font-bold leading-tight sm:text-4xl">{{ t('dapps.poker.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('dapps.poker.text') }}</p>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div v-for="p in pokerPillars" :key="p.title"
                 class="rounded-2xl border hair-border surface p-5 transition-colors hover:border-neon-cyan/40">
              <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl" :style="`background:${p.tint}`">
                <component :is="p.icon" class="h-5 w-5" :style="`color:${p.color}`" />
              </div>
              <h3 class="text-base font-semibold">{{ p.title }}</h3>
              <p class="mt-1.5 text-xs text-secondary leading-relaxed">{{ p.text }}</p>
            </div>
          </div>

          <div class="mt-8">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSev26NdA5sxALL96k80Ek5UiqTtIrGbArAhBEDU_adQdlU47A/viewform"
               target="_blank" rel="noopener" class="btn-primary text-base">
              <Send class="h-4 w-4" /> {{ t('dapps.poker.cta') }}
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 5. DEVELOPER CTA ========================= -->
    <section class="container-x pb-24">
      <div v-reveal
           class="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border hair-border glass p-8 text-center sm:p-14">
        <div class="pointer-events-none absolute inset-0" style="background:radial-gradient(60% 80% at 50% 0%, rgba(0,212,255,0.10), transparent)"></div>
        <div class="relative z-10">
          <div class="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border hair-border" style="background:rgba(255,90,10,0.10)">
            <Code2 class="h-6 w-6 text-brand-orange" />
          </div>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('dapps.dev.title') }}</h2>
          <p class="mx-auto mt-4 max-w-2xl text-secondary">{{ t('dapps.dev.text') }}</p>

          <div class="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a :href="devhubHref" target="_blank" rel="noopener" class="btn-primary text-base">
              <BookOpen class="h-4 w-4" /> {{ t('dapps.dev.primary') }}
            </a>
            <a :href="links.telegram" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
              <Send class="h-4 w-4" /> {{ t('dapps.dev.secondary') }}
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {
  Sparkles, Boxes, Wrench, Check, Circle,
  Terminal, Github, ShieldCheck, KeyRound, Cpu, Dice5,
  Send, Ban, Shuffle, Code2, BookOpen,
  Gamepad2, ExternalLink, Wallet, Download, Zap, Youtube
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
const config = useRuntimeConfig()
const links = useSiteLinks()

// DevHub is a monorepo VitePress build merged into /devhub/ at deploy time,
// so we link to it as an absolute path (works both inside SmartNet and on web).
const devhubHref = '/devhub/'

// ---------------------------------------------------------------------------
// Section 2 — Live apps (computed so labels re-translate on locale switch)
// ---------------------------------------------------------------------------
const liveApps = computed(() => [
  {
    title: 'SmartBlocks 2048',
    subtitle: t('dapps.apps.p2e.subtitle'),
    color: '#00D4FF',
    image: '/images/dapps/app-2048.jpg',
    features: [t('dapps.apps.p2e.f1'), t('dapps.apps.p2e.f2'), t('dapps.apps.p2e.f3')],
    primary:   { label: t('dapps.apps.p2e.primary'),   href: 'https://t.me/sth2048bot', icon: Send },
    secondary: { label: t('dapps.apps.p2e.secondary'), href: 'https://t.me/global2048', icon: ExternalLink }
  },
  {
    title: 'Heads or Tails PvP',
    subtitle: t('dapps.apps.ht.subtitle'),
    color: '#F59E0B',
    image: '/images/dapps/app-heads-tails.jpg',
    features: [t('dapps.apps.ht.f1'), t('dapps.apps.ht.f2'), t('dapps.apps.ht.f3')],
    primary:   { label: t('dapps.apps.ht.primary'),   href: 'https://t.me/smartholdem_bot/game_ht', icon: Gamepad2 },
    secondary: { label: t('dapps.apps.ht.secondary'), href: 'https://youtu.be/C0Y6Nt0-PrU?si=21Tf7I5-BK8d9dqq', icon: Youtube }
  },
  {
    title: 'Paper Wallet Generator',
    subtitle: t('dapps.apps.pw.subtitle'),
    color: '#10B981',
    image: '/images/dapps/app-paper-wallet.jpg',
    features: [t('dapps.apps.pw.f1'), t('dapps.apps.pw.f2'), t('dapps.apps.pw.f3')],
    primary:   { label: t('dapps.apps.pw.primary'),   href: 'https://paperw.top', icon: Wallet },
    secondary: { label: t('dapps.apps.pw.secondary'), href: 'https://github.com/technologiespro/paper-wallet-generator/releases/latest', icon: Github }
  },
  {
    title: 'Smart2FA OXID',
    subtitle: t('dapps.apps.s2fa.subtitle'),
    color: '#7C3AED',
    image: '/images/dapps/app-smart2fa.jpg',
    features: [t('dapps.apps.s2fa.f1'), t('dapps.apps.s2fa.f2'), t('dapps.apps.s2fa.f3')],
    primary:   { label: t('dapps.apps.s2fa.primary'),   href: 'https://kode.market/#/app/gh-509798773', icon: Download },
    secondary: { label: t('dapps.apps.s2fa.secondary'), href: 'https://github.com/technologiespro/smart2fa/releases/tag/2.0.0', icon: Github }
  }
])

// ---------------------------------------------------------------------------
// Section 3 — TRNG spotlight sub-points
// ---------------------------------------------------------------------------
const trngPoints = computed(() => [
  { icon: ShieldCheck, label: t('dapps.trng.p1t'), text: t('dapps.trng.p1x') },
  { icon: Cpu,         label: t('dapps.trng.p2t'), text: t('dapps.trng.p2x') },
  { icon: Dice5,       label: t('dapps.trng.p3t'), text: t('dapps.trng.p3x') },
  { icon: Zap,         label: t('dapps.trng.p4t'), text: t('dapps.trng.p4x') }
])

// ---------------------------------------------------------------------------
// Section 4 — Poker pillars
// ---------------------------------------------------------------------------
const pokerPillars = computed(() => [
  { icon: KeyRound, title: t('dapps.poker.p1t'), text: t('dapps.poker.p1x'),
    color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' },
  { icon: Ban,      title: t('dapps.poker.p2t'), text: t('dapps.poker.p2x'),
    color: '#F59E0B', tint: 'rgba(245,158,11,0.14)' },
  { icon: Shuffle,  title: t('dapps.poker.p3t'), text: t('dapps.poker.p3x'),
    color: '#10B981', tint: 'rgba(16,185,129,0.14)' }
])

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/dapps')
useSeoMeta({
  title: () => t('dapps.seo.title'),
  description: () => t('dapps.seo.description'),
  keywords: 'SmartHoldem dApps, Web 4.0 games, Play to Earn STH, decentralized poker, SmartNet SDK, provably fair TRNG',
  ogTitle: () => t('dapps.seo.ogTitle'),
  ogDescription: () => t('dapps.seo.ogDescription'),
  ogType: 'website',
  ogImage: `${config.public.siteUrl}/images/dapps/dapps-og.jpg`,
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('dapps.seo.ogTitle'),
  twitterDescription: () => t('dapps.seo.ogDescription'),
  twitterImage: `${config.public.siteUrl}/images/dapps/dapps-og.jpg`,
  twitterSite: '@smartholdem'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style scoped>
/* Ensure <strong> inside i18n-rendered HTML text stays white/bold for readability */
.trng-text :deep(strong) { color: var(--text); font-weight: 600; }
</style>
