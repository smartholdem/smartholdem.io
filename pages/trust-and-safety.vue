<template>
  <div>
    <!-- ============ 1. HERO ============ -->
    <SafetyHero />

    <!-- ============ 2. THE DILEMMA & OUR SOLUTION ============ -->
    <section class="container-x py-16 lg:py-20">
      <div v-reveal class="mx-auto max-w-3xl rounded-2xl border hair-border glass p-8 shadow-card sm:p-10">
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('trust.dilemma.title') }}</h2>
        <p class="mt-5 leading-relaxed text-secondary">{{ t('trust.dilemma.p1') }}</p>
        <p class="mt-4 text-lg font-bold text-neon-cyan">{{ t('trust.dilemma.p2') }}</p>
        <p class="mt-4 leading-relaxed text-secondary">{{ t('trust.dilemma.p3') }}</p>
      </div>
    </section>

    <!-- ============ 3. TWO-TIER CATALOG ============ -->
    <TwoTierCatalog />

    <!-- ============ 4. TRANSPORT IS NEVER FILTERED ============ -->
    <TransportSection />

    <!-- ============ 5. DECENTRALIZED SAFETY MECHANICS ============ -->
    <DecentralizationTable />

    <!-- ============ 6. RESILIENCE BEYOND BLOCKCHAIN (vDapps) ============ -->
    <VDappsResilience />

    <!-- ============ 7. FINAL STATEMENT ============ -->
    <section class="container-x py-20 lg:py-24">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="text-2xl font-bold sm:text-3xl">{{ t('trust.final.title') }}</p>
        <p class="mt-5 text-lg font-semibold text-neon-cyan">{{ t('trust.final.p1') }}</p>
        <p class="mt-4 leading-relaxed text-secondary">{{ t('trust.final.p2') }}</p>
        <p class="mt-2 leading-relaxed text-secondary">{{ t('trust.final.p3') }}</p>
        <NuxtLink :to="localePath('/mission')"
                  class="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan hover:underline">
          <ArrowLeft class="h-4 w-4" /> {{ t('trust.final.back') }}
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ArrowLeft } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()

const config = useRuntimeConfig()
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/trust-and-safety')
useBreadcrumbLd([{ key: 'nav.trustSafety', path: '/trust-and-safety' }])

// FAQPage JSON-LD — 5 Q&A about the Trust & Safety model. Lets Google Rich
// Results and AI assistants cite our reputation-not-censorship stance verbatim.
useFaqLd(() => Array.from({ length: 5 }, (_, i) => ({
  q: t(`trust.faq.q${i + 1}`),
  a: t(`trust.faq.a${i + 1}`)
})))
useSeoMeta({
  title: () => t('trust.seo.title'),
  description: () => t('trust.seo.description'),
  keywords: () => t('trust.seo.keywords'),
  ogTitle: () => t('trust.seo.ogTitle'),
  ogDescription: () => t('trust.seo.ogDescription'),
  ogImage: `${config.public.siteUrl}/images/trust-safety/safety-hero.jpg`,
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterImage: `${config.public.siteUrl}/images/trust-safety/safety-hero.jpg`
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style>
/* Non-scoped so v-html descendants inherit the styling.
   Technical terms inside trust copy render in JetBrains Mono. */
.trust-rich code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85em;
  color: #00D4FF;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 5px;
  padding: 0.1em 0.4em;
  white-space: nowrap;
}
.trust-rich strong { color: var(--text-primary, #fff); font-weight: 700; }
html:not(.dark) .trust-rich code { background: rgba(0, 150, 190, 0.08); color: #0284a8; border-color: rgba(2, 132, 168, 0.25); }
</style>
