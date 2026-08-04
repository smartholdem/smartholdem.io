<template>
  <div>
    <!-- ===================== 1 · HERO ===================== -->
    <section class="relative flex min-h-[94vh] items-center overflow-hidden">
      <div class="absolute inset-0">
        <img src="/images/home/hero-background.jpg" alt="Netfory decentralized peer-to-peer network" class="h-full w-full object-cover" />
        <div class="absolute inset-0 bg-navy-900/75 dark:bg-navy-900/85"></div>
        <div class="absolute inset-0" style="background:radial-gradient(80% 60% at 50% 40%, transparent, var(--bg) 100%)"></div>
      </div>
      <div class="container-x relative z-10 py-24">
        <p class="eyebrow mb-5 animate-fade-up">{{ t('hero.eyebrow') }}</p>
        <h1 class="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl animate-fade-up">
          {{ t('hero.title') }}
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-slate-300 sm:text-xl">{{ t('hero.subtitle2') }}</p>
        <p class="mono mt-4 text-base font-medium text-neon-cyan">“{{ t('hero.tagline') }}”</p>
        <div class="mt-10 flex flex-wrap items-center gap-4">
          <NuxtLink :to="localePath('/executive-summary')" class="btn-primary text-base">
            {{ t('hero.ctaPrimary') }} <ArrowRight class="h-4 w-4" />
          </NuxtLink>
          <a :href="links.telegram" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
            <Send class="h-4 w-4" /> {{ t('hero.ctaSecondary') }}
          </a>
          <NuxtLink :to="localePath('/mission')" class="inline-flex items-center gap-1.5 px-2 py-3 text-base font-semibold text-neon-cyan transition-transform hover:-translate-y-0.5">
            {{ t('hero.ctaMission') }} <ArrowUpRight class="h-4 w-4" />
          </NuxtLink>
        </div>
        <p class="mono mt-8 max-w-xl text-sm text-slate-400 border-l-2 border-neon-cyan/60 pl-4">{{ t('hero.microTag') }}</p>
      </div>
    </section>

    <!-- ===================== 2 · PROBLEM ===================== -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="overflow-hidden rounded-2xl border hair-border">
          <img src="/images/home/problem-split-screen.jpg" alt="Web 3.0 centralized vs Web 4.0 decentralized mesh" loading="lazy" class="w-full" />
        </div>
        <div v-reveal="120">
          <p class="eyebrow mb-3">{{ t('problem.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('problem.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('problem.text') }}</p>
          <ul class="mt-7 space-y-3">
            <li v-for="b in ['problem.b1','problem.b2','problem.b3']" :key="b" class="flex items-start gap-3">
              <XCircle class="mt-0.5 h-5 w-5 shrink-0 text-rose-500" />
              <span>{{ t(b) }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="container-x"><div class="h-px section-line"></div></div>

    <!-- ===================== 3 · SOLUTION ===================== -->
    <section class="relative py-24" style="background:linear-gradient(180deg, transparent, rgba(255,90,10,0.05), transparent)">
      <div class="container-x">
        <div class="mx-auto max-w-3xl text-center" v-reveal>
          <p class="eyebrow mb-3">{{ t('solution.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('solution.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('solution.text') }}</p>
        </div>
        <div v-reveal="120" class="mx-auto mt-10 max-w-3xl rounded-2xl border border-neon-cyan/25 glass p-7 shadow-card">
          <div class="flex items-start gap-3">
            <Zap class="mt-1 h-5 w-5 shrink-0 text-neon-cyan" />
            <p class="leading-relaxed">{{ t('solution.callout') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 4 · ARCHITECTURE ===================== -->
    <section class="container-x py-24">
      <div class="mx-auto max-w-3xl text-center" v-reveal>
        <p class="eyebrow mb-3">{{ t('architecture.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('architecture.title') }}</h2>
      </div>
      <div v-reveal="120" class="mt-10 overflow-hidden rounded-2xl border hair-border surface p-3">
        <img src="/images/home/architecture-diagram.jpg" alt="System architecture: Tracker, Seeder, Desktop Client, SmartHoldem DPoS Blockchain" loading="lazy" class="w-full rounded-xl" />
      </div>
      <p class="mono mx-auto mt-5 max-w-3xl text-center text-sm text-secondary">{{ t('architecture.caption') }}</p>
    </section>

    <!-- ===================== 4.5 · WHY NETFORY (COMPARISON) ===================== -->
    <section class="container-x py-24">
      <div class="mx-auto max-w-3xl text-center" v-reveal>
        <p class="eyebrow mb-3">{{ t('why.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('why.title') }}</h2>
      </div>
      <div v-reveal="120" class="mt-10 overflow-x-auto rounded-2xl border hair-border surface">
        <table class="w-full min-w-[720px] text-sm">
          <thead>
            <tr class="border-b hair-border">
              <th class="p-4 text-left font-semibold text-secondary">{{ t('why.feature') }}</th>
              <th v-for="c in whyCols" :key="c" class="p-4 text-left font-medium text-secondary">{{ c }}</th>
              <th class="p-4 text-left font-bold text-neon-green whitespace-nowrap">{{ t('why.netfory') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row,i) in whyRows" :key="i" class="border-b hair-border last:border-0">
              <td class="p-4 font-medium">{{ row.f }}</td>
              <td v-for="(cell,j) in row.c.slice(0,3)" :key="j" class="p-4 text-secondary">{{ cell }}</td>
              <td class="p-4 font-semibold text-neon-green bg-neon-green/[0.08]">
                <span class="inline-flex items-center gap-1.5"><Check class="h-4 w-4" /> {{ row.c[3] }}</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- ===================== 4.6 · MISSION TEASER ===================== -->
    <section class="relative overflow-hidden py-24" style="background:linear-gradient(180deg, transparent, rgba(0,212,255,0.04), transparent)">
      <div class="container-x">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div v-reveal>
            <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
              <img src="/images/mission/mission-smartholdem.jpg" alt="An internet for humanity, secured by mathematics" loading="lazy" class="w-full rounded-xl" />
            </div>
          </div>
          <div v-reveal="120">
            <p class="eyebrow mb-3">{{ t('missionTeaser.eyebrow') }}</p>
            <h2 class="text-3xl font-bold leading-tight sm:text-4xl">
              {{ t('missionTeaser.titleA') }}<span class="text-neon-cyan">{{ t('missionTeaser.titleHi') }}</span>{{ t('missionTeaser.titleB') }}
            </h2>
            <p class="mt-5 text-secondary leading-relaxed" style="font-size:1.075rem;line-height:1.7">
              {{ t('missionTeaser.text') }}
            </p>
            <div class="mt-7 grid gap-4 sm:grid-cols-3">
              <div class="rounded-xl border hair-border glass p-4">
                <Shield class="h-5 w-5 text-neon-cyan" />
                <p class="mt-2 text-sm font-semibold">{{ t('missionTeaser.p1Title') }}</p>
                <p class="mt-1 text-xs leading-relaxed text-secondary">{{ t('missionTeaser.p1Text') }}</p>
              </div>
              <div class="rounded-xl border hair-border glass p-4">
                <ScrollText class="h-5 w-5 text-neon-cyan" />
                <p class="mt-2 text-sm font-semibold">{{ t('missionTeaser.p2Title') }}</p>
                <p class="mt-1 text-xs leading-relaxed text-secondary">{{ t('missionTeaser.p2Text') }}</p>
              </div>
              <div class="rounded-xl border hair-border glass p-4">
                <Scale class="h-5 w-5 text-neon-cyan" />
                <p class="mt-2 text-sm font-semibold">{{ t('missionTeaser.p3Title') }}</p>
                <p class="mt-1 text-xs leading-relaxed text-secondary">{{ t('missionTeaser.p3Text') }}</p>
              </div>
            </div>
            <NuxtLink :to="localePath('/mission')" class="btn-primary mt-8 text-base">
              {{ t('missionTeaser.cta') }} <ArrowRight class="h-4 w-4" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 5 · FOUR FORMULAS ===================== -->
    <section class="container-x py-24">
      <div class="mx-auto max-w-3xl text-center" v-reveal>
        <p class="eyebrow mb-3">{{ t('formulas.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('formulas.title') }}</h2>
      </div>
      <div class="mt-12 grid gap-6 sm:grid-cols-2">
        <div v-for="(f,i) in formulas" :key="i" v-reveal="i*80" class="group flex flex-col items-center rounded-2xl border hair-border surface p-7 text-center transition-all hover:border-neon-cyan/40 hover:-translate-y-1">
          <img :src="f.icon" :alt="t(f.t)" class="h-20 w-20 rounded-xl object-cover" loading="lazy" />
          <h3 class="mono mt-5 text-lg font-bold">{{ t(f.t) }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-secondary">{{ t(f.x) }}</p>
        </div>
      </div>
    </section>

    <!-- ===================== 5.1 · BENCHMARKS ===================== -->
    <section class="relative py-24" style="background:linear-gradient(180deg, transparent, rgba(0,212,255,0.04), transparent)">
      <div class="container-x">
        <div class="mx-auto max-w-3xl text-center" v-reveal>
          <p class="eyebrow mb-3">{{ t('bench.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('bench.title') }}</h2>
        </div>
        <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div v-for="(b,i) in benchmarks" :key="i" v-reveal="i*70" class="rounded-2xl border hair-border surface p-6">
            <component :is="b.icon" class="h-8 w-8 text-neon-cyan" />
            <h3 class="mt-4 font-bold">{{ b.title }}</h3>
            <ul class="mt-3 space-y-2">
              <li v-for="(l,j) in b.lines" :key="j" class="mono text-xs leading-relaxed text-secondary">{{ l }}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 6 · ECONOMICS ===================== -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal>
          <p class="eyebrow mb-3">{{ t('economics.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('economics.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('economics.text') }}</p>
          <div class="mt-7 space-y-5">
            <div class="rounded-xl border hair-border surface p-5">
              <p class="mono text-xs uppercase tracking-wider text-neon-cyan">{{ t('economics.f1label') }}</p>
              <Katex class="my-3 text-lg" display expression="C_{spam} = N \times msg\_cost\_sth" />
              <p class="text-sm text-secondary">{{ t('economics.f1ex') }}</p>
            </div>
            <div class="rounded-xl border hair-border surface p-5">
              <p class="mono text-xs uppercase tracking-wider text-neon-cyan">{{ t('economics.f2label') }}</p>
              <Katex class="my-3" display expression="Estimated = (Base + seededGb \times density + activeApps \times PerApp) \times K_{up}" />
              <p class="text-sm text-secondary">{{ t('economics.f2ex') }}</p>
            </div>
          </div>
        </div>
        <div v-reveal="120" class="overflow-hidden rounded-2xl border hair-border glass p-3">
          <img src="/images/home/economic-loop-diagram.jpg" alt="Perpetual economic loop of the Netfory network" loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>
    </section>

    <!-- ===================== 7 · DEFLATIONARY ===================== -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="order-2 overflow-hidden rounded-2xl border hair-border glass p-3 lg:order-1">
          <img src="/images/home/deflationary-pressure.jpg" alt="Deflationary pressure: supply decrease and utility increase" loading="lazy" class="w-full rounded-xl" />
        </div>
        <div v-reveal="120" class="order-1 lg:order-2">
          <p class="eyebrow mb-3">{{ t('deflationary.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('deflationary.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('deflationary.text') }}</p>
          <div class="mt-7 grid grid-cols-3 gap-3">
            <div v-for="s in ['s1','s2','s3']" :key="s" class="rounded-xl border hair-border surface p-4 text-center">
              <p class="mono text-lg font-bold text-neon-cyan sm:text-xl">{{ t('deflationary.'+s+'v') }}</p>
              <p class="mt-2 text-xs text-secondary">{{ t('deflationary.'+s+'l') }}</p>
            </div>
          </div>
          <div class="mt-5 flex items-start gap-2.5 rounded-xl border border-neon-green/25 bg-neon-green/5 p-4">
            <TrendingDown class="mt-0.5 h-5 w-5 shrink-0 text-neon-green" />
            <p class="text-sm">{{ t('deflationary.callout') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 8 · PRODUCTION STACK ===================== -->
    <section class="relative py-24" style="background:linear-gradient(180deg, transparent, rgba(0,212,255,0.05), transparent)">
      <div class="container-x">
        <div class="mx-auto max-w-3xl text-center" v-reveal>
          <p class="eyebrow mb-3">{{ t('stack.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('stack.title') }}</h2>
          <p class="mt-4 text-secondary">{{ t('stack.subtitle') }}</p>
        </div>
        <div v-reveal="100" class="mt-10 overflow-hidden rounded-2xl border hair-border glass p-3">
          <img src="/images/home/Client-Screenshot.png" alt="Netfory Web 4.0 desktop client" loading="lazy" class="w-full rounded-xl" />
        </div>
        <div class="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(s,i) in stack" :key="i" v-reveal="i*60" class="rounded-2xl border hair-border surface p-6 transition-all hover:border-neon-cyan/40 hover:-translate-y-1">
            <component :is="s.icon" class="h-8 w-8 text-neon-cyan" />
            <h3 class="mt-4 font-bold">{{ t(s.t) }}</h3>
            <p class="mt-2 text-sm leading-relaxed text-secondary">{{ t(s.x) }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===================== 8.5 · DePIN ===================== -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal>
          <p class="eyebrow mb-3">{{ t('depin.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('depin.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('depin.text') }}</p>
          <div class="mt-7 grid gap-3 sm:grid-cols-3">
            <div v-for="s in ['s1','s2','s3']" :key="s" class="rounded-xl border hair-border surface p-4">
              <p class="font-bold text-neon-cyan">{{ t('depin.'+s+'v') }}</p>
              <p class="mt-1.5 text-xs text-secondary">{{ t('depin.'+s+'l') }}</p>
            </div>
          </div>
        </div>
        <div v-reveal="120" class="relative overflow-hidden rounded-2xl border hair-border glass p-3">
          <img src="/images/home/depin-datacenter.jpg" alt="Decentralized data center made of glowing user nodes" loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>
    </section>

    <!-- ===================== 8.6 · WEB 4.0 BANNER ===================== -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="overflow-hidden rounded-3xl border hair-border glass p-3">
          <img src="/images/home/web_4_smarholdem_netfory.jpg" alt="SmartHoldem Web 4.0 symbiotic paradigm" loading="lazy" class="w-full rounded-2xl" />
        </div>
        <div v-reveal="120">
          <p class="eyebrow mb-3">{{ t('web4.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('web4.title') }}</h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('web4.text') }}</p>
        </div>
      </div>
    </section>

    <!-- ===================== 8.7 · DOCUMENTATION ===================== -->
    <section class="container-x py-24">
      <div v-reveal class="relative overflow-hidden rounded-3xl border hair-border">
        <img src="/images/home/web_4_wp_background.jpg" alt="Netfory White Paper background" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
        <div class="absolute inset-0 bg-navy-900/85"></div>
        <div class="relative z-10 mx-auto max-w-2xl p-10 text-center sm:p-16">
          <p class="eyebrow mb-3">{{ t('home.whitepaperTeaserEyebrow') }}</p>
          <h2 class="text-3xl font-bold text-white sm:text-4xl">{{ t('home.whitepaperTeaserTitle') }}</h2>
          <p class="mx-auto mt-5 max-w-xl text-slate-300">{{ t('home.whitepaperTeaserText') }}</p>
          <NuxtLink :to="localePath('/white-paper')" class="btn-outline mt-8 !text-white">
            <FileText class="h-4 w-4" /> {{ t('home.whitepaperTeaserCta') }}
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- ===================== 9 · FINAL CTA ===================== -->
    <section class="relative overflow-hidden">
      <img src="/images/home/cta-banner.jpg" alt="The network is live" loading="lazy" class="absolute inset-0 h-full w-full object-cover" />
      <div class="absolute inset-0 bg-navy-900/85"></div>
      <div class="container-x relative z-10 py-28 text-center">
        <h2 class="mx-auto max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">{{ t('cta.title') }}</h2>
        <p class="mx-auto mt-6 max-w-2xl text-slate-300">{{ t('cta.text') }}</p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button
            type="button"
            class="btn-primary text-lg px-8 py-3.5 shadow-brand hover:shadow-brand-lg"
            @click="netforyModalOpen = true"
          >
            <Download class="h-5 w-5" /> {{ t('cta.primary') }}
          </button>
          <NuxtLink :to="localePath('/white-paper')" class="btn-outline text-base" style="color:#FFFFFF">
            {{ t('cta.secondary') }}
          </NuxtLink>
          <a :href="links.githubSth" target="_blank" rel="noopener" class="btn-tertiary text-sm" style="color:#00D4FF">
            {{ t('cta.tertiary') }} <ExternalLink class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ============ NETFORY LAUNCH MODAL ============ -->
    <ClientOnly>
    <Teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-300 ease-out"
        leave-active-class="transition-opacity duration-200 ease-in"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
      >
        <div v-if="netforyModalOpen"
             class="fixed inset-0 z-[80] flex items-center justify-center p-4"
             role="dialog" aria-modal="true" aria-labelledby="netfory-modal-title"
             @click.self="netforyModalOpen = false">
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>

          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 scale-95"
            leave-to-class="opacity-0 scale-95"
            appear
          >
            <div v-if="netforyModalOpen"
                 class="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 p-8 text-center shadow-2xl"
                 style="background: rgba(10, 14, 39, 0.70); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);">
              <button
                type="button"
                class="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                :aria-label="t('netforyModal.close')"
                @click="netforyModalOpen = false"
              >
                <X class="h-5 w-5" />
              </button>

              <!-- Pulsing STH token loader -->
              <div class="mx-auto mb-6 flex h-20 w-20 items-center justify-center">
                <div class="pulse-token relative flex h-20 w-20 items-center justify-center">
                  <span class="absolute inset-0 rounded-full ring-2 ring-neon-cyan/40"></span>
                  <span class="absolute inset-0 rounded-full ring-2 ring-neon-cyan/30 pulse-ring"></span>
                  <img src="/images/home/sth-logo.png" alt="STH" class="relative h-12 w-12 drop-shadow-[0_0_18px_rgba(0,212,255,0.55)]" />
                </div>
              </div>

              <h2 id="netfory-modal-title" class="text-2xl font-bold text-white">
                {{ t('netforyModal.title') }}
              </h2>
              <p class="mt-4 text-sm leading-relaxed text-slate-300">{{ t('netforyModal.text1') }}</p>
              <p class="mt-3 text-sm leading-relaxed text-slate-300">{{ t('netforyModal.text2') }}</p>

              <a href="https://t.me/smartholdem" target="_blank" rel="noopener"
                 class="mt-7 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold text-white shadow-neon-cyan transition-all hover:-translate-y-0.5"
                 style="background:#00D4FF; color:#0A0E27;"
                 @click="netforyModalOpen = false">
                <Send class="h-4 w-4" /> {{ t('netforyModal.telegram') }}
              </a>
            </div>
          </transition>
        </div>
      </transition>
    </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup>
import { ArrowRight, ArrowUpRight, Send, XCircle, Zap, TrendingDown, Download, ExternalLink, FileText, Check,
  MonitorSmartphone, Server, Database, Code2, Boxes, ShieldCheck, Radar, Network, Languages, Lock,
  Globe, Radio, Gauge, Cpu, Wifi, Coins, X, Shield, ScrollText, Scale } from 'lucide-vue-next'

const { t, locale } = useI18n()
const localePath = useLocalePath()
const { links } = useSmartNet()
const config = useRuntimeConfig()
const isRu = computed(() => locale.value === 'ru')

// Netfory launch modal (Section 9 "Download Netfory Client")
const netforyModalOpen = ref(false)
watch(netforyModalOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})
if (process.client) {
  onMounted(() => {
    const onKey = (e) => { if (e.key === 'Escape') netforyModalOpen.value = false }
    window.addEventListener('keydown', onKey)
    onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
  })
}

const formulas = [
  { icon: '/images/home/Icon_1_Protocol.jpg', t: 'formulas.c1t', x: 'formulas.c1x' },
  { icon: '/images/home/Icon_2_State-First.jpg', t: 'formulas.c2t', x: 'formulas.c2x' },
  { icon: '/images/home/Icon_3_Zero-Infra.jpg', t: 'formulas.c3t', x: 'formulas.c3x' },
  { icon: '/images/home/Icon_4_Content-Addressable.jpg', t: 'formulas.c4t', x: 'formulas.c4x' }
]

const stack = [
  { icon: MonitorSmartphone, t: 'stack.i1t', x: 'stack.i1x' },
  { icon: Server, t: 'stack.i2t', x: 'stack.i2x' },
  { icon: Database, t: 'stack.i3t', x: 'stack.i3x' },
  { icon: Code2, t: 'stack.i4t', x: 'stack.i4x' },
  { icon: Boxes, t: 'stack.i5t', x: 'stack.i5x' },
  { icon: ShieldCheck, t: 'stack.i6t', x: 'stack.i6x' },
  { icon: Radar, t: 'stack.i7t', x: 'stack.i7x' },
  { icon: Network, t: 'stack.i8t', x: 'stack.i8x' },
  { icon: Languages, t: 'stack.i9t', x: 'stack.i9x' },
  { icon: Lock, t: 'stack.i10t', x: 'stack.i10x' },
  { icon: Globe, t: 'stack.i11t', x: 'stack.i11x' },
  { icon: Radio, t: 'stack.i12t', x: 'stack.i12x' }
]

// Comparison table (feature labels localized; technical cell values kept concise)
const whyCols = ['Clearnet (AWS, Cloudflare)', 'IPFS', 'Tor/I2P']
const whyRows = computed(() => [
  { f: isRu.value ? 'Хостинг фронтенда' : 'Frontend Hosting', c: ['Centralized', 'Semi-centralized', 'Hidden services', 'Native P2P'] },
  { f: isRu.value ? 'Цензура' : 'Censorship', c: ['Vulnerable', 'Partial', 'Resistant', 'Absolute'] },
  { f: isRu.value ? 'Экономика' : 'Economy', c: ['None', 'None', 'None', 'Native STH Token'] },
  { f: isRu.value ? 'Идентичность' : 'Identity', c: ['OAuth, Email', 'PeerID', 'Anonymous', 'On-chain u://'] },
  { f: isRu.value ? 'Автономия LAN' : 'LAN Autonomy', c: ['No', 'Limited', 'No', 'Full mDNS'] }
])

const benchmarks = computed(() => [
  {
    icon: Gauge,
    title: isRu.value ? 'Транспорт' : 'Transport Performance',
    lines: isRu.value
      ? ['Iroh (QUIC) - в 3× быстрее TCP/TLS (80 мс против 240 мс)', '0-RTT возобновление соединения']
      : ['Iroh (QUIC) - 3× faster than TCP/TLS (80ms vs 240ms latency)', '0-RTT connection resumption']
  },
  {
    icon: Cpu,
    title: isRu.value ? 'Криптография' : 'Cryptographic Performance',
    lines: isRu.value
      ? ['BLAKE3 - в 25× быстрее SHA-256', '10 ГБ/с против 0.4 ГБ/с при проверке']
      : ['BLAKE3 hashing - 25× faster than SHA-256', '10 GB/s vs 0.4 GB/s verification speed']
  },
  {
    icon: Wifi,
    title: isRu.value ? 'Устойчивость сети' : 'Network Resilience',
    lines: isRu.value
      ? ['Полная автономия LAN через mDNS', 'Trackerless-обнаружение через Mainline DHT']
      : ['Full LAN autonomy via mDNS', 'Trackerless discovery via Mainline DHT']
  },
  {
    icon: Coins,
    title: isRu.value ? 'Экономическая эффективность' : 'Economic Efficiency',
    lines: isRu.value
      ? ['Финализация транзакций менее секунды', 'Средняя комиссия сети < 0.01 STH']
      : ['Sub-second transaction finality', '< 0.01 STH average network fee']
  }
])

const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/')
useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogTitle: () => t('home.seo.ogTitle'),
  ogDescription: () => t('home.seo.ogDescription'),
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  ogImage: `${config.public.siteUrl}/images/home/web_4_smarholdem_netfory.jpg`,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('home.seo.ogTitle'),
  twitterDescription: () => t('home.seo.ogDescription'),
  twitterSite: '@smartholdem'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style scoped>
/* Pulsing STH token loader inside the Netfory launch modal */
.pulse-ring{
  animation: sth-pulse 1.8s ease-out infinite;
  transform-origin: center;
}
@keyframes sth-pulse{
  0%   { transform: scale(1);    opacity: .7; }
  70%  { transform: scale(1.55); opacity: 0;  }
  100% { transform: scale(1.55); opacity: 0;  }
}
.pulse-token img{
  animation: sth-token-breathe 2.4s ease-in-out infinite;
}
@keyframes sth-token-breathe{
  0%,100% { transform: scale(1);    filter: drop-shadow(0 0 12px rgba(0,212,255,0.45)); }
  50%     { transform: scale(1.05); filter: drop-shadow(0 0 22px rgba(0,212,255,0.85)); }
}
</style>
