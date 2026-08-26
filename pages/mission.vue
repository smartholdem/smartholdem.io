<template>
  <div>
    <!-- ============ HERO ============ -->
    <section class="relative overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(0,212,255,0.10),transparent_55%),radial-gradient(circle_at_82%_82%,rgba(255,90,10,0.10),transparent_55%)]"></div>
      </div>
      <div class="container-x grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
        <div v-reveal>
          <p class="eyebrow mb-3">{{ t('mission.hero.eyebrow') }}</p>
          <h1 class="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            {{ t('mission.hero.title') }}
          </h1>
          <p class="mt-6 text-lg text-secondary leading-relaxed">{{ t('mission.hero.subtitle') }}</p>
          <blockquote class="mono mt-6 border-l-2 border-neon-cyan pl-4 text-sm italic text-neon-cyan">
            “{{ t('mission.hero.quote') }}”
          </blockquote>
          <div class="mt-8 flex flex-wrap gap-3">
            <button class="btn-primary" @click="showModal = true">
              <Download class="h-4 w-4" /> {{ t('mission.hero.ctaPrimary') }}
            </button>
            <NuxtLink :to="localePath('/white-paper')" class="btn-outline-cyan">
              <FileText class="h-4 w-4" /> {{ t('mission.hero.ctaSecondary') }}
            </NuxtLink>
          </div>
        </div>
        <div v-reveal="120" class="relative">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
            <img src="/images/mission/Hero-misson.jpg" alt="Web 4.0 mission" loading="eager" class="w-full rounded-xl" />
          </div>
          <p class="mono mt-3 text-center text-xs text-secondary">{{ t('mission.hero.caption') }}</p>
        </div>
      </div>
    </section>

    <!-- ============ CH.I — DEPLATFORMING ============ -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="order-2 lg:order-1">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
            <img src="/images/mission/End-of-Deplatforming.jpg" alt="End of Deplatforming" loading="lazy" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="120" class="order-1 lg:order-2">
          <p class="eyebrow mb-3">{{ t('mission.deplatform.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">
            {{ t('mission.deplatform.titleA') }}<span class="text-neon-cyan">{{ t('mission.deplatform.titleHi') }}</span>
          </h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('mission.deplatform.p1') }}</p>
          <p class="mt-4 text-lg font-bold text-neon-cyan">{{ t('mission.deplatform.p2Bold') }}</p>
          <p class="mt-4 text-secondary leading-relaxed">{{ t('mission.deplatform.p3') }}</p>
          <p class="mt-4 text-secondary leading-relaxed">{{ t('mission.deplatform.p4') }}</p>
          <div class="mt-6 inline-flex items-center gap-3 rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.05] px-4 py-3">
            <p class="mono text-xs uppercase tracking-wider text-secondary">{{ t('mission.deplatform.statLabel') }}</p>
            <p class="mono text-lg font-bold text-neon-cyan">{{ t('mission.deplatform.statValue') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CH.II — DURABLE ARCHIVES ============ -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal>
          <p class="eyebrow mb-3">{{ t('mission.archives.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">
            {{ t('mission.archives.titleA') }}<span class="text-neon-cyan">{{ t('mission.archives.titleHi') }}</span>
          </h2>
          <p class="mt-3 text-secondary">{{ t('mission.archives.subtitle') }}</p>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('mission.archives.p1') }}</p>
          <p class="mt-4 text-lg font-bold text-neon-cyan">{{ t('mission.archives.p2Bold') }}</p>
          <p class="mt-4 text-secondary leading-relaxed">{{ t('mission.archives.p3') }}</p>
          <div class="mt-6 inline-flex items-center gap-3 rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.05] px-4 py-3">
            <p class="mono text-xs uppercase tracking-wider text-secondary">{{ t('mission.archives.statLabel') }}</p>
            <p class="mono text-lg font-bold text-neon-cyan">{{ t('mission.archives.statValue') }}</p>
          </div>
        </div>
        <div v-reveal="120">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
            <img src="/images/mission/Long-Term-Memory.jpg" alt="Long-term memory / archives" loading="lazy" class="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CH.III — IMPACT METRICS ============ -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal>
          <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
            <img src="/images/mission/Impact-of-Web4.jpg" alt="Impact of Web 4.0" loading="lazy" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="120">
          <p class="eyebrow mb-3">{{ t('mission.impact.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">
            {{ t('mission.impact.titleA') }}<span class="text-neon-cyan">{{ t('mission.impact.titleHi') }}</span>
          </h2>
          <p class="mt-4 text-secondary leading-relaxed">{{ t('mission.impact.subtitle') }}</p>
          <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div class="rounded-xl border hair-border glass p-5">
              <ScrollText class="h-6 w-6 text-neon-cyan" />
              <p class="mt-3 font-semibold">{{ t('mission.impact.m1Title') }}</p>
              <p class="mt-1.5 text-sm text-secondary leading-relaxed">{{ t('mission.impact.m1Text') }}</p>
            </div>
            <div class="rounded-xl border hair-border glass p-5">
              <Share2 class="h-6 w-6 text-neon-cyan" />
              <p class="mt-3 font-semibold">{{ t('mission.impact.m2Title') }}</p>
              <p class="mt-1.5 text-sm text-secondary leading-relaxed">{{ t('mission.impact.m2Text') }}</p>
            </div>
            <div class="rounded-xl border hair-border glass p-5">
              <Globe class="h-6 w-6 text-neon-cyan" />
              <p class="mt-3 font-semibold">{{ t('mission.impact.m3Title') }}</p>
              <p class="mt-1.5 text-sm text-secondary leading-relaxed">{{ t('mission.impact.m3Text') }}</p>
            </div>
            <div class="rounded-xl border hair-border glass p-5">
              <ShieldCheck class="h-6 w-6 text-neon-cyan" />
              <p class="mt-3 font-semibold">{{ t('mission.impact.m4Title') }}</p>
              <p class="mt-1.5 text-sm text-secondary leading-relaxed">{{ t('mission.impact.m4Text') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ CH.IV.5 — LAN-FIRST RESILIENCE (NEW) ============ -->
    <LanFirstResilience />

    <!-- ============ FINAL CTA — YOU ARE THE NETWORK ============ -->
    <section class="container-x py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <div v-reveal class="order-2 lg:order-1">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
            <img src="/images/mission/YOU-Are-the-Network.jpg" alt="You are the network" loading="lazy" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="120" class="order-1 lg:order-2">
          <p class="eyebrow mb-3">{{ t('mission.finalCta.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">
            {{ t('mission.finalCta.titleA') }}<span class="text-neon-cyan">{{ t('mission.finalCta.titleHi') }}</span>{{ t('mission.finalCta.titleB') }}
          </h2>
          <p class="mt-5 text-secondary leading-relaxed">{{ t('mission.finalCta.p1') }}</p>
          <p class="mt-5 text-lg font-bold text-neon-cyan">{{ t('mission.finalCta.quote') }}</p>
          <p class="mt-2 text-xl font-bold">{{ t('mission.finalCta.tagline') }}</p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a :href="links.devhub" class="btn-primary">
              <Rocket class="h-4 w-4" /> {{ t('mission.finalCta.ctaPrimary') }}
            </a>
            <NuxtLink :to="localePath('/white-paper')" class="btn-outline-cyan">
              <FileText class="h-4 w-4" /> {{ t('mission.finalCta.ctaSecondary') }}
            </NuxtLink>
            <a href="https://t.me/smartholdem" target="_blank" rel="noopener"
               class="inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan hover:underline">
              {{ t('mission.finalCta.ctaTertiary') }} <ArrowUpRight class="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- ============ NETFORY DOWNLOAD MODAL (shared component) ============ -->
    <NetforyDownloadModal v-model:open="showModal" />
  </div>
</template>

<script setup>
import { Download, FileText, Rocket, ArrowUpRight, ScrollText, Share2, Globe, ShieldCheck } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()
const { links } = useSmartNet()
const showModal = ref(false)

const config = useRuntimeConfig()
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/mission')
useBreadcrumbLd([{ key: 'nav.mission', path: '/mission' }])

// FAQPage JSON-LD — surfaces Q&A directly in Google Rich Results and lets
// AI assistants (ChatGPT, Perplexity, Gemini) quote answers with attribution.
useFaqLd(() => Array.from({ length: 5 }, (_, i) => ({
  q: t(`mission.faq.q${i + 1}`),
  a: t(`mission.faq.a${i + 1}`)
})))
useSeoMeta({
  title: () => t('mission.seo.title'),
  description: () => t('mission.seo.description'),
  ogTitle: () => t('mission.seo.ogTitle'),
  ogDescription: () => t('mission.seo.ogDescription'),
  ogImage: `${config.public.siteUrl}/images/mission/Hero-misson.jpg`,
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterImage: `${config.public.siteUrl}/images/mission/Hero-misson.jpg`
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style scoped>
.sth-pulse::before{
  content:'';
  position:absolute; inset:-8px;
  border-radius:50%;
  background: radial-gradient(circle, rgba(0,212,255,.35), transparent 70%);
  animation: pulse 2.2s ease-in-out infinite;
  z-index:-1;
}
@keyframes pulse{
  0%,100%{ transform:scale(1);   opacity:.55; }
  50%    { transform:scale(1.2); opacity:.85; }
}

.modal-enter-active,.modal-leave-active{ transition: opacity .25s ease; }
.modal-enter-from,.modal-leave-to{ opacity:0; }
</style>
