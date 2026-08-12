<template>
  <div>
    <!-- ============ 1. HERO ============ -->
    <CommunicationHero />

    <!-- ============ 2. P2P MESSENGER ============ -->
    <P2PMessengerSection />

    <!-- ============ 3. 0xID MAIL — THREE PRIVACY MODES ============ -->
    <ZeroIDMailSection />

    <!-- ============ 4. HOW IT WORKS — ANTI-SPAM & IDENTITY ============ -->
    <EconomicAntiSpam />

    <!-- ============ 5. TECHNICAL SOVEREIGNTY ============ -->
    <TechnicalSovereigntyTable />

    <!-- ============ 6. FINAL STATEMENT & CTA ============ -->
    <section class="container-x py-20 lg:py-24">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="text-2xl font-bold sm:text-3xl">{{ t('msg.final.title') }}</p>
        <p class="mt-4 text-lg text-secondary">{{ t('msg.final.p1') }}</p>
        <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
          <button class="btn-primary" @click="showModal = true">
            <Download class="h-4 w-4" /> {{ t('msg.final.cta') }}
          </button>
        </div>
        <NuxtLink :to="localePath('/')"
                  class="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-neon-cyan hover:underline">
          <ArrowLeft class="h-4 w-4" /> {{ t('msg.final.back') }}
        </NuxtLink>
      </div>
    </section>

    <!-- ============ NETFORY LAUNCH MODAL ============ -->
    <transition name="modal">
      <div v-if="showModal" class="fixed inset-0 z-[100] flex items-center justify-center p-4" @click.self="showModal = false">
        <div class="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
        <div class="relative w-full max-w-lg rounded-2xl border hair-border glass p-8 shadow-card">
          <button class="absolute right-4 top-4 rounded-full p-1.5 text-secondary hover:text-neon-cyan" @click="showModal = false" aria-label="Close">
            <X class="h-5 w-5" />
          </button>
          <div class="flex flex-col items-center text-center">
            <div class="sth-pulse relative mb-5">
              <img src="/images/home/sth-logo.png" alt="STH" class="h-16 w-16" />
            </div>
            <h3 class="text-2xl font-bold">{{ t('netforyModal.title') }}</h3>
            <p class="mt-3 text-secondary">{{ t('netforyModal.text1') }}</p>
            <p class="mt-2 text-secondary">{{ t('netforyModal.text2') }}</p>
            <a href="https://t.me/smartholdem" target="_blank" rel="noopener"
               class="mt-6 inline-flex items-center gap-2 rounded-lg bg-neon-cyan px-5 py-2.5 font-semibold text-[#0A0E27] transition-transform hover:-translate-y-0.5">
              <Send class="h-4 w-4" /> {{ t('netforyModal.telegram') }}
            </a>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { Download, ArrowLeft, X, Send } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()
const showModal = ref(false)

const config = useRuntimeConfig()
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/messaging')
useBreadcrumbLd([{ key: 'nav.messaging', path: '/messaging' }])

// FAQPage JSON-LD — 5 Q&A about the P2P Messenger + 0xID Mail. Lets Google
// Rich Results and AI answer engines cite E2EE, anti-spam and 0xID facts.
useFaqLd(() => Array.from({ length: 5 }, (_, i) => ({
  q: t(`msg.faq.q${i + 1}`),
  a: t(`msg.faq.a${i + 1}`)
})))
useSeoMeta({
  title: () => t('msg.seo.title'),
  description: () => t('msg.seo.description'),
  keywords: () => t('msg.seo.keywords'),
  ogTitle: () => t('msg.seo.ogTitle'),
  ogDescription: () => t('msg.seo.ogDescription'),
  ogImage: `${config.public.siteUrl}/images/messaging/how-to-mail-web4.jpg`,
  ogType: 'website',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterImage: `${config.public.siteUrl}/images/messaging/how-to-mail-web4.jpg`
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})

// Close modal with Escape
const onKey = (e) => { if (e.key === 'Escape') showModal.value = false }
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
</script>

<style>
/* Non-scoped so v-html descendants inherit the styling.
   Technical terms inside messaging copy render in JetBrains Mono. */
.msg-rich code {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85em;
  color: #00D4FF;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 5px;
  padding: 0.1em 0.4em;
  white-space: nowrap;
}
.msg-rich strong { color: var(--text-primary, #fff); font-weight: 700; }
html:not(.dark) .msg-rich code { background: rgba(0, 150, 190, 0.08); color: #0284a8; border-color: rgba(2, 132, 168, 0.25); }
</style>

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
