<template>
  <div class="gs-page">
    <!-- ================= 1. HERO ================= -->
    <section class="relative overflow-hidden border-b hair-border">
      <img src="/images/get-sth/getsth-hero.jpg" alt="" aria-hidden="true"
           class="absolute inset-0 h-full w-full object-cover opacity-35 blur-sm" />
      <div class="absolute inset-0" style="background:radial-gradient(70% 55% at 50% 45%, transparent, rgba(10,14,39,0.90) 75%, var(--bg) 100%)"></div>

      <div class="container-x relative z-10 py-24 text-center sm:py-32">
        <p class="eyebrow mb-4">{{ t('getSth.hero.eyebrow') }}</p>
        <h1 class="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl text-white">
          {{ t('getSth.hero.title') }}
        </h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-secondary">{{ t('getSth.hero.subtitle') }}</p>

        <p class="mt-6 text-lg font-semibold" style="color:#00D4FF">{{ t('getSth.hero.tagline') }}</p>

        <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://wallet.smartholdem.io" target="_blank" rel="noopener" class="btn-primary text-base" @click="onWallet">
            {{ t('getSth.hero.ctaWallet') }} <ArrowRight class="h-4 w-4" />
          </a>
          <a href="https://xbts.io/staking" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
            {{ t('getSth.hero.ctaStaking') }}
          </a>
        </div>
      </div>
    </section>

    <!-- ================= 2. SMARTHOLDEM WALLET ================= -->
    <section class="container-x py-20">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border p-3 glass"
               style="border-color:rgba(0,212,255,0.35); box-shadow:0 0 40px -10px rgba(0,212,255,0.35)">
            <img src="/images/get-sth/sth-wallet.jpg" alt="SmartHoldem Wallet swap UI" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="80" class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('getSth.wallet.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.wallet.title') }}</h2>
          <p class="mt-4 text-secondary leading-relaxed">
            <i18n-t keypath="getSth.wallet.text" tag="span" scope="global">
              <template #wallet><strong class="text-white">{{ t('getSth.wallet.walletLabel') }}</strong></template>
            </i18n-t>
          </p>

          <div class="mt-6 grid gap-3 sm:grid-cols-2">
            <div v-for="f in walletFeatures" :key="f.title" class="rounded-xl border hair-border surface p-4">
              <div class="mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg" :style="`background:${f.tint}`">
                <component :is="f.icon" class="h-4.5 w-4.5" :style="`color:${f.color}`" />
              </div>
              <p class="font-semibold text-sm">{{ f.title }}</p>
              <p class="mt-1 text-xs text-secondary leading-relaxed">{{ f.text }}</p>
            </div>
          </div>

          <a href="https://wallet.smartholdem.io" target="_blank" rel="noopener"
             class="btn-primary mt-6 inline-flex text-base" @click="onWallet">
            {{ t('getSth.wallet.cta') }} <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ================= 3. XBTS HUB ================= -->
    <section class="relative border-y hair-border"
             style="background:linear-gradient(180deg, transparent, rgba(0,212,255,0.04), transparent)">
      <div class="container-x py-20">
        <div v-reveal class="mx-auto max-w-3xl text-center">
          <img src="/images/get-sth/xbts-logo.png" alt="XBTS DEX" class="mx-auto mb-5 h-14 w-auto object-contain" />
          <p class="eyebrow mb-3">{{ t('getSth.xbts.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.xbts.title') }}</h2>
          <p class="mt-4 text-secondary leading-relaxed">
            <i18n-t keypath="getSth.xbts.text" tag="span" scope="global">
              <template #xbts><strong class="text-white">{{ t('getSth.xbts.xbtsLabel') }}</strong></template>
            </i18n-t>
          </p>
        </div>

        <!-- Sub-Section A: Trading & DeFi -->
        <div class="mt-12 grid gap-6 md:grid-cols-2">
          <div v-reveal class="rounded-2xl border hair-border surface p-7">
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon-cyan/15">
              <TrendingUp class="h-5 w-5 text-neon-cyan" />
            </div>
            <h3 class="text-xl font-semibold">{{ t('getSth.xbts.dexTitle') }}</h3>
            <p class="mono mt-1 text-sm text-neon-cyan">{{ t('getSth.xbts.dexPairs') }}</p>
            <p class="mt-3 text-sm text-secondary leading-relaxed">
              <i18n-t keypath="getSth.xbts.dexText" tag="span" scope="global">
                <template #noKyc><strong class="text-white">{{ t('getSth.xbts.noKycLabel') }}</strong></template>
              </i18n-t>
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="n in ['Native','BSC','TON','ETH']" :key="n"
                    class="mono rounded-md border hair-border px-2 py-0.5 text-[10px]" style="background:rgba(0,212,255,0.08)">{{ n }}</span>
            </div>
            <a href="https://trade.xbts.io/" target="_blank" rel="noopener" class="btn-primary mt-5 inline-flex text-sm">
              {{ t('getSth.xbts.dexCta') }} <ArrowRight class="h-4 w-4" />
            </a>
          </div>

          <div v-reveal="60" class="rounded-2xl border hair-border surface p-7">
            <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon-purple/15">
              <Droplets class="h-5 w-5 text-neon-purple" />
            </div>
            <h3 class="text-xl font-semibold">{{ t('getSth.xbts.defiTitle') }}</h3>
            <p class="mono mt-1 text-sm text-neon-purple">{{ t('getSth.xbts.defiPools') }}</p>
            <p class="mt-3 text-sm text-secondary leading-relaxed">
              <i18n-t keypath="getSth.xbts.defiText" tag="span" scope="global">
                <template #deep><strong class="text-white">{{ t('getSth.xbts.deepLabel') }}</strong></template>
              </i18n-t>
            </p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="n in ['Native','BSC','TON','ETH']" :key="n"
                    class="mono rounded-md border hair-border px-2 py-0.5 text-[10px]" style="background:rgba(124,58,237,0.08)">{{ n }}</span>
            </div>
            <a href="https://trade.xbts.io/defi" target="_blank" rel="noopener"
               class="mt-5 inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2 text-sm font-semibold transition hover:bg-brand/10"
               style="border-color:#ff5a0a; color:#ff5a0a">
              {{ t('getSth.xbts.defiCta') }}
            </a>
          </div>
        </div>

        <!-- Sub-Section B: SmartHolder Staking (gold accent) -->
        <div v-reveal class="mt-8 grid items-center gap-8 rounded-2xl border p-8 glass md:grid-cols-2"
             style="border-color:rgba(245,158,11,0.5); box-shadow:0 0 44px -12px rgba(245,158,11,0.35)">
          <div>
            <div class="mb-3 inline-flex items-center gap-2 rounded-lg border px-3 py-1"
                 style="border-color:rgba(245,158,11,0.5); background:rgba(245,158,11,0.08)">
              <Gem class="h-4 w-4 text-neon-gold" />
              <span class="mono text-[11px] uppercase tracking-wider text-neon-gold">{{ t('getSth.xbts.holderBadge') }}</span>
            </div>
            <h3 class="text-2xl font-bold">{{ t('getSth.xbts.holderTitle') }}</h3>
            <p class="mt-3 text-secondary leading-relaxed">
              <i18n-t keypath="getSth.xbts.holderText" tag="span" scope="global">
                <template #xbts><strong class="text-white">{{ t('getSth.xbts.xbtsLabel') }}</strong></template>
                <template #share><strong class="text-neon-gold">{{ t('getSth.xbts.holderShareLabel') }}</strong></template>
              </i18n-t>
            </p>
            <div class="mt-5 inline-flex items-center gap-2 rounded-lg border px-3 py-1.5 glass"
                 style="border-color:rgba(16,185,129,0.45)">
              <ShieldCheck class="h-4 w-4 text-neon-green" />
              <span class="mono text-[10px] uppercase tracking-wider text-neon-green">
                {{ t('getSth.xbts.holderBadgeChip') }}
              </span>
            </div>
            <div class="mt-6">
              <a href="https://xbts.io/staking" target="_blank" rel="noopener" class="btn-primary text-base">
                {{ t('getSth.xbts.holderCta') }} <ArrowRight class="h-4 w-4" />
              </a>
            </div>
          </div>

          <div class="overflow-hidden rounded-xl border hair-border">
            <img src="/images/get-sth/staking-sth-promo.jpg" alt="SmartHolder staking yield" class="w-full" />
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 4. DEFI GIANTS ================= -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('getSth.defi.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.defi.title') }}</h2>
        <p class="mt-3 text-secondary">{{ t('getSth.defi.text') }}</p>
      </div>

      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="d in defiCards" :key="d.name" v-reveal
             class="group rounded-2xl border hair-border surface p-6 transition-all duration-300 hover:-translate-y-1"
             @mouseenter="(e) => hoverGlow(e, d.color)" @mouseleave="unGlow">
          <img :src="d.logo" :alt="d.name" class="mb-4 h-12 w-auto object-contain" />
          <h3 class="text-xl font-semibold">{{ d.name }}</h3>
          <p class="mono mt-1 text-xs" :style="`color:${d.color}`">{{ d.chain }}</p>

          <p class="mt-4 mono text-[11px] uppercase tracking-wider text-secondary">{{ t('getSth.defi.pairsLabel') }}</p>
          <ul class="mt-2 space-y-1.5">
            <li v-for="p in d.pairs" :key="p.label">
              <a :href="p.href" target="_blank" rel="noopener"
                 class="flex items-center justify-between rounded-lg border hair-border px-3 py-2 text-sm transition hover:border-neon-cyan"
                 style="background:rgba(255,255,255,0.02)">
                <span class="mono">{{ p.label }}</span>
                <ExternalLink class="h-3.5 w-3.5 text-neon-cyan" />
              </a>
            </li>
          </ul>

          <a :href="d.cta" target="_blank" rel="noopener"
             class="btn-primary mt-5 inline-flex w-full justify-center text-sm">
            {{ d.ctaLabel }} <ArrowRight class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>

    <!-- ================= 5. CEX ACCESS ================= -->
    <section class="container-x py-16">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('getSth.cex.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.cex.title') }}</h2>
      </div>

      <div v-reveal="60" class="mx-auto mt-10 max-w-2xl rounded-2xl border hair-border surface p-8 text-center">
        <div class="flex items-center justify-center gap-3">
          <img src="/images/get-sth/dextrade-logo.png" alt="DEX-Trade" class="h-10 w-auto object-contain" />
          <p class="text-base sm:text-lg">
            <i18n-t keypath="getSth.cex.text" tag="span" scope="global">
              <template #name><strong class="text-white">DEX-Trade</strong></template>
              <template #pair><span class="mono text-neon-cyan">STH/USDT</span></template>
            </i18n-t>
          </p>
        </div>

        <div class="mt-6 flex items-start gap-3 rounded-xl border p-4 text-left"
             style="border-color:rgba(245,158,11,0.4); background:rgba(245,158,11,0.06)">
          <AlertCircle class="h-5 w-5 shrink-0 text-neon-gold" />
          <p class="text-xs text-white/85 leading-relaxed">
            <strong class="text-neon-gold">{{ t('getSth.cex.important') }}</strong>
            <i18n-t keypath="getSth.cex.importantText" tag="span" scope="global">
              <template #network><strong class="text-white">{{ t('getSth.cex.networkLabel') }}</strong></template>
            </i18n-t>
          </p>
        </div>

        <a href="https://dex-trade.com/spot/trading/STHUSDT" target="_blank" rel="noopener"
           class="btn-primary mt-6 inline-flex text-base">
          {{ t('getSth.cex.cta') }} <ArrowRight class="h-4 w-4" />
        </a>
      </div>
    </section>

    <!-- ================= 6. PLATFORM COMPARISON ================= -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('getSth.compare.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.compare.title') }}</h2>
        <p class="mt-3 text-secondary">{{ t('getSth.compare.text') }}</p>
      </div>

      <div v-reveal="60" class="mt-10 overflow-hidden rounded-2xl border hair-border">
        <div class="overflow-x-auto">
          <table class="w-full text-sm">
            <thead class="sticky top-0" style="background:rgba(0,212,255,0.10); backdrop-filter:blur(8px)">
              <tr class="text-left">
                <th class="px-4 py-3 font-semibold">{{ t('getSth.compare.colPlatform') }}</th>
                <th class="px-4 py-3 font-semibold">{{ t('getSth.compare.colType') }}</th>
                <th class="px-4 py-3 font-semibold">{{ t('getSth.compare.colNetworks') }}</th>
                <th class="px-4 py-3 font-semibold">{{ t('getSth.compare.colBestFor') }}</th>
                <th class="px-4 py-3 font-semibold">{{ t('getSth.compare.colFeatures') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(row, i) in comparison" :key="row.platform" class="border-t hair-border"
                  :style="i % 2 ? 'background:rgba(255,255,255,0.015)' : ''">
                <td class="px-4 py-3 font-semibold text-white">{{ row.platform }}</td>
                <td class="px-4 py-3 mono text-xs">
                  <span class="rounded-md border hair-border px-2 py-0.5" :style="`color:${row.typeColor}; background:${row.typeTint}`">{{ row.type }}</span>
                </td>
                <td class="px-4 py-3 mono text-xs text-secondary">{{ row.networks }}</td>
                <td class="px-4 py-3 text-xs text-secondary">{{ row.bestFor }}</td>
                <td class="px-4 py-3 text-xs text-secondary">{{ row.features }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <!-- ================= 7. HOW TO GET STARTED ================= -->
    <section class="container-x py-16">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('getSth.steps.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.steps.title') }}</h2>
      </div>

      <div class="relative mt-14">
        <div class="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent md:block"></div>
        <div class="grid gap-6 md:grid-cols-3">
          <div v-for="(s, i) in steps" :key="s.title" v-reveal :style="`transition-delay:${i * 80}ms`" class="relative text-center">
            <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-brand bg-navy-900"
                 style="box-shadow:0 0 24px rgba(255,90,10,0.4)">
              <span class="mono text-xl font-bold text-brand">{{ i + 1 }}</span>
            </div>
            <div class="mt-6 rounded-2xl border hair-border surface p-6">
              <component :is="s.icon" class="mx-auto mb-3 h-8 w-8 text-neon-cyan" />
              <h3 class="text-lg font-semibold">{{ s.title }}</h3>
              <p class="mt-2 text-sm text-secondary leading-relaxed">{{ s.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ================= 8. FINAL CTA ================= -->
    <section class="relative overflow-hidden border-y hair-border">
      <div class="absolute inset-0" style="background:radial-gradient(70% 60% at 50% 50%, rgba(124,58,237,0.14), rgba(10,14,39,0.95))"></div>
      <div class="container-x relative z-10 py-24 text-center">
        <p class="eyebrow mb-4">{{ t('getSth.cta.eyebrow') }}</p>
        <h2 class="mx-auto max-w-3xl text-3xl font-extrabold sm:text-5xl">{{ t('getSth.cta.title') }}</h2>
        <p class="mx-auto mt-5 max-w-2xl text-white/85">{{ t('getSth.cta.text') }}</p>

        <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://wallet.smartholdem.io/" target="_blank" rel="noopener" class="btn-primary text-base" @click="onWallet">
            {{ t('getSth.cta.btnWallet') }} <ArrowRight class="h-4 w-4" />
          </a>
          <a href="https://xbts.io/staking" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
            {{ t('getSth.cta.btnStaking') }}
          </a>
          <NuxtLink :to="localePath('/tokenomics')"
                    class="inline-flex items-center gap-2 rounded-lg border-2 px-5 py-2.5 text-base font-semibold transition hover:bg-neon-cyan/10"
                    style="border-color:#00D4FF; color:#00D4FF">
            {{ t('getSth.cta.btnTokenomics') }}
          </NuxtLink>
        </div>

        <p class="mt-8 text-sm text-white/70">{{ t('getSth.cta.join') }}</p>
        <p class="mono mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-neon-gold">{{ t('getSth.cta.tagline') }}</p>
      </div>
    </section>

    <!-- ================= 9. FAQ ================= -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('getSth.faq.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('getSth.faq.title') }}</h2>
      </div>

      <div class="mx-auto mt-10 max-w-3xl space-y-3">
        <div v-for="(f, i) in faqs" :key="f.q" v-reveal class="rounded-xl border hair-border glass">
          <button class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  :aria-expanded="openFaq === i"
                  @click="openFaq = openFaq === i ? null : i">
            <span class="font-semibold">{{ f.q }}</span>
            <ChevronDown class="h-5 w-5 shrink-0 text-neon-cyan transition-transform duration-300"
                         :class="openFaq === i ? 'rotate-180' : ''" />
          </button>
          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 max-h-0"
            enter-to-class="opacity-100 max-h-96"
            leave-from-class="opacity-100 max-h-96"
            leave-to-class="opacity-0 max-h-0">
            <div v-if="openFaq === i" class="overflow-hidden border-t hair-border px-5 py-4">
              <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
              <p class="text-sm text-secondary leading-relaxed" v-html="f.a"></p>
            </div>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  ArrowRight, ExternalLink, ChevronDown, AlertCircle,
  Zap, Link2, Repeat, Lock, ShieldCheck,
  TrendingUp, Droplets, Gem,
  MousePointerClick, ShoppingCart, PiggyBank
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()
const { openWallet } = useSmartNet()

const onWallet = (e) => {
  if (openWallet(e)) e.preventDefault()
}

// -------------------- Wallet features --------------------
const walletFeatures = computed(() => [
  { icon: Zap,    title: t('getSth.wallet.f1t'), text: t('getSth.wallet.f1x'), color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' },
  { icon: Link2,  title: t('getSth.wallet.f2t'), text: t('getSth.wallet.f2x'), color: '#7C3AED', tint: 'rgba(124,58,237,0.14)' },
  { icon: Repeat, title: t('getSth.wallet.f3t'), text: t('getSth.wallet.f3x'), color: '#F59E0B', tint: 'rgba(245,158,11,0.14)' },
  { icon: Lock,   title: t('getSth.wallet.f4t'), text: t('getSth.wallet.f4x'), color: '#10B981', tint: 'rgba(16,185,129,0.14)' }
])

// -------------------- DeFi cards --------------------
const defiCards = computed(() => [
  {
    name: 'PancakeSwap', chain: 'BSC', color: '#D1884F',
    logo: '/images/get-sth/PancakeSwap-logo.png',
    pairs: [
      { label: t('getSth.defi.pairSthUsdt'), href: 'https://pancakeswap.finance/swap?inputCurrency=0x55d398326f99059fF775485246999027B3197955&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38' },
      { label: t('getSth.defi.pairSthBnb'),  href: 'https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38' }
    ],
    cta: 'https://pancakeswap.finance/swap?outputCurrency=0x625d64C3384AA6d6841a1608aE0Ce48776981D38',
    ctaLabel: t('getSth.defi.ctaPancake')
  },
  {
    name: 'Dedust', chain: 'TON', color: '#0098EA',
    logo: '/images/get-sth/Dedustlogo.png',
    pairs: [
      { label: t('getSth.defi.pairSthTon'),  href: 'https://dedust.io/swap/TON/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=1000000000' },
      { label: t('getSth.defi.pairSthUsdt'), href: 'https://dedust.io/swap/USDT/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=10000000' }
    ],
    cta: 'https://dedust.io/swap/TON/EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP?amount=1000000000',
    ctaLabel: t('getSth.defi.ctaDedust')
  },
  {
    name: 'Uniswap', chain: 'ETH', color: '#FF007A',
    logo: '/images/get-sth/Uniswap-logo.png',
    pairs: [
      { label: t('getSth.defi.pairSthUniLp'), href: 'https://app.uniswap.org/#/pool/329546' }
    ],
    cta: 'https://app.uniswap.org/#/pool/329546',
    ctaLabel: t('getSth.defi.ctaUniswap')
  }
])

const hoverGlow = (e, color) => {
  e.currentTarget.style.borderColor = color
  e.currentTarget.style.boxShadow = `0 12px 40px -15px ${color}`
}
const unGlow = (e) => {
  e.currentTarget.style.borderColor = ''
  e.currentTarget.style.boxShadow = ''
}

// -------------------- Comparison table --------------------
const TT = {
  native:  { c: '#00D4FF', t: 'rgba(0,212,255,0.12)' },
  dex:     { c: '#7C3AED', t: 'rgba(124,58,237,0.12)' },
  defi:    { c: '#10B981', t: 'rgba(16,185,129,0.12)' },
  cex:     { c: '#EF4444', t: 'rgba(239,68,68,0.12)' },
  staking: { c: '#F59E0B', t: 'rgba(245,158,11,0.12)' }
}
const comparison = computed(() => [
  { platform: 'SmartHoldem Wallet',  type: 'Native',  networks: 'Native, BSC, TON',      bestFor: t('getSth.compare.rows.walletBestFor'), features: t('getSth.compare.rows.walletFeatures'), typeColor: TT.native.c,  typeTint: TT.native.t },
  { platform: 'XBTS DEX',            type: 'DEX',     networks: 'Native, BSC, TON, ETH', bestFor: t('getSth.compare.rows.dexBestFor'),    features: t('getSth.compare.rows.dexFeatures'),    typeColor: TT.dex.c,     typeTint: TT.dex.t },
  { platform: 'XBTS DeFi',           type: 'DeFi',    networks: 'Native, BSC, TON, ETH', bestFor: t('getSth.compare.rows.defiBestFor'),   features: t('getSth.compare.rows.defiFeatures'),   typeColor: TT.defi.c,    typeTint: TT.defi.t },
  { platform: 'PancakeSwap',         type: 'DeFi',    networks: 'BSC',                   bestFor: t('getSth.compare.rows.pcsBestFor'),    features: t('getSth.compare.rows.pcsFeatures'),    typeColor: TT.defi.c,    typeTint: TT.defi.t },
  { platform: 'Uniswap',             type: 'DeFi',    networks: 'ETH',                   bestFor: t('getSth.compare.rows.uniBestFor'),    features: t('getSth.compare.rows.uniFeatures'),    typeColor: TT.defi.c,    typeTint: TT.defi.t },
  { platform: 'Dedust',              type: 'DeFi',    networks: 'TON',                   bestFor: t('getSth.compare.rows.ddBestFor'),     features: t('getSth.compare.rows.ddFeatures'),     typeColor: TT.defi.c,    typeTint: TT.defi.t },
  { platform: 'DEX-Trade',           type: 'CEX',     networks: 'Native',                bestFor: t('getSth.compare.rows.dtBestFor'),     features: t('getSth.compare.rows.dtFeatures'),     typeColor: TT.cex.c,     typeTint: TT.cex.t },
  { platform: 'SmartHolder Staking', type: 'Staking', networks: 'Native, BSC, TON, ETH', bestFor: t('getSth.compare.rows.holderBestFor'), features: t('getSth.compare.rows.holderFeatures'), typeColor: TT.staking.c, typeTint: TT.staking.t }
])

// -------------------- Steps --------------------
const steps = computed(() => [
  { icon: MousePointerClick, title: t('getSth.steps.s1t'), text: t('getSth.steps.s1x') },
  { icon: ShoppingCart,      title: t('getSth.steps.s2t'), text: t('getSth.steps.s2x') },
  { icon: PiggyBank,         title: t('getSth.steps.s3t'), text: t('getSth.steps.s3x') }
])

// -------------------- FAQ --------------------
// FAQ answers contain <strong> tags — we compile them here from i18n placeholder
// slots into safe HTML strings so we can bind them via v-html on the collapsible.
const openFaq = ref(0)
const s = (txt) => `<strong>${txt}</strong>`
const faqs = computed(() => [
  {
    q: t('getSth.faq.q1'),
    a: t('getSth.faq.a1', { dex: s('XBTS DEX'), defi: s('XBTS DeFi') })
  },
  {
    q: t('getSth.faq.q2'),
    a: t('getSth.faq.a2', { native: s('Native') })
  },
  {
    q: t('getSth.faq.q3'),
    a: t('getSth.faq.a3', { noncustodial: s('non-custodial') })
  },
  {
    q: t('getSth.faq.q4'),
    a: t('getSth.faq.a4')
  },
  {
    q: t('getSth.faq.q5'),
    a: t('getSth.faq.a5', { xbtsdex: s('XBTS decentralized exchange') })
  },
  {
    q: t('getSth.faq.q6'),
    a: t('getSth.faq.a6', { auto: s('automatically twice monthly'), assets: s('BTC, ETH, USDT') })
  }
])

// -------------------- SEO --------------------
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://smartholdem.io'
const ogImage = `${siteUrl}/images/get-sth/get-sth-og.jpg`

const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/get-sth')
useBreadcrumbLd([{ key: 'nav.getSth', path: '/get-sth' }])
useSeoMeta({
  title: () => t('getSth.seo.title'),
  description: () => t('getSth.seo.description'),
  keywords: 'Buy STH, Get SmartHoldem, STH staking, SmartHolder, XBTS DEX, swap STH, Web 4.0 token, decentralized exchange',
  ogType: 'website',
  ogTitle: () => t('getSth.seo.ogTitle'),
  ogDescription: () => t('getSth.seo.ogDescription'),
  ogImage,
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('getSth.seo.ogTitle'),
  twitterDescription: () => t('getSth.seo.ogDescription'),
  twitterImage: ogImage,
  twitterSite: '@smartholdem'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style scoped>
/* Gold CTA button used in Final CTA section (SmartHolder branding) */
.btn-gold {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.6rem 1.4rem;
  background: #F59E0B;
  color: #0A0E27;
  border: 1px solid #F59E0B;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all .25s;
  box-shadow: 0 0 24px rgba(245,158,11,0.35);
}
.btn-gold:hover {
  background: #FBB024;
  transform: translateY(-1px);
  box-shadow: 0 0 32px rgba(245,158,11,0.55);
}
</style>
