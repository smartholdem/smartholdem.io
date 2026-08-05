<template>
  <footer class="border-t hair-border mt-10">
    <div class="container-x py-14">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-5">
        <!-- Brand -->
        <div class="col-span-2 md:col-span-1">
          <div class="flex items-center gap-2.5">
            <img src="/images/home/sth-logo.png" alt="SmartHoldem" class="h-9 w-9" />
            <span class="mono text-sm font-bold">SmartHoldem <span class="text-brand">WEB 4.0</span></span>
          </div>
          <p class="mt-4 max-w-xs text-sm text-secondary">{{ t('footer.tagline') }}</p>

          <!-- Social icons row -->
          <div class="mt-5 flex items-center gap-2">
            <a href="https://t.me/smartholdem" target="_blank" rel="noopener" aria-label="Telegram"
               class="social-btn"><Send class="h-4 w-4" /></a>
            <a href="https://github.com/smartholdem" target="_blank" rel="noopener" aria-label="GitHub"
               class="social-btn"><Github class="h-4 w-4" /></a>
            <a href="https://x.com/smartholdem" target="_blank" rel="noopener" aria-label="X (Twitter)"
               class="social-btn">
              <svg viewBox="0 0 24 24" class="h-3.5 w-3.5" fill="currentColor" aria-hidden="true">
                <path d="M18.244 2H21.5l-7.55 8.63L22.75 22H16l-5.05-6.6L5.25 22H2l8.08-9.24L1.25 2H8.2l4.57 6.06L18.244 2Zm-1.14 18h1.9L7.02 4H5.02l12.08 16Z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@smartholdem" target="_blank" rel="noopener" aria-label="YouTube"
               class="social-btn"><Youtube class="h-4 w-4" /></a>
            <a href="/news/rss.xml" target="_blank" rel="noopener" aria-label="RSS feed"
               class="social-btn"><Rss class="h-4 w-4" /></a>
          </div>

          <!-- Contact -->
          <a href="mailto:contact@smartholdem.io"
             class="mono mt-4 inline-flex items-center gap-1.5 text-xs text-secondary transition-colors hover:text-neon-cyan">
            <Mail class="h-3.5 w-3.5" /> contact@smartholdem.io
          </a>
        </div>

        <div>
          <h4 class="mono mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">{{ t('footer.ecosystem') }}</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a :href="links.wallet" target="_blank" rel="noopener" class="f-link" @click="onWallet">{{ t('nav.wallet') }}</a></li>
            <li><a :href="links.explorer" target="_blank" rel="noopener" class="f-link">{{ t('nav.explorer') }}</a></li>
            <li><a :href="links.xbtsDex" target="_blank" rel="noopener" class="f-link">{{ t('nav.xbtsDex') }}</a></li>
            <li><a :href="links.dexTrade" target="_blank" rel="noopener" class="f-link">{{ t('nav.dexTrade') }}</a></li>
          </ul>
        </div>

        <div>
          <h4 class="mono mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">{{ t('footer.resources') }}</h4>
          <ul class="space-y-2.5 text-sm">
            <li><NuxtLink :to="localePath('/blockchain')" class="f-link">{{ t('nav.blockchain') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/dapps')" class="f-link">{{ t('nav.dapps') }}</NuxtLink></li>
            <li><a :href="links.devhub" class="f-link">{{ t('nav.devhub') }}</a></li>
            <li><a href="https://github.com/smartholdem/sth-core" target="_blank" rel="noopener" class="f-link">Install Full Node</a></li>
            <li><NuxtLink :to="localePath('/white-paper')" class="f-link">{{ t('nav.whitepaper') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/news')" class="f-link">{{ t('nav.news') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/tokenomics')" class="f-link">{{ t('nav.tokenomics') }}</NuxtLink></li>
          </ul>
        </div>

        <div>
          <h4 class="mono mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">{{ t('footer.developers') }}</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a :href="links.githubSth" target="_blank" rel="noopener" class="f-link inline-flex items-center gap-1.5"><Github class="h-4 w-4" /> SmartHoldem</a></li>
            <li><a :href="links.githubNetfory" target="_blank" rel="noopener" class="f-link inline-flex items-center gap-1.5"><Github class="h-4 w-4" /> NETFORY</a></li>
            <li><NuxtLink :to="localePath('/mission')" class="f-link">{{ t('nav.mission') }}</NuxtLink></li>
            <li><NuxtLink :to="localePath('/glossary')" class="f-link">{{ t('nav.glossary') }}</NuxtLink></li>
            <li><a :href="links.telegram" target="_blank" rel="noopener" class="f-link">Telegram</a></li>
            <li><a :href="links.twitter" target="_blank" rel="noopener" class="f-link">Twitter / X</a></li>
          </ul>
        </div>

        <!-- Marketcaps -->
        <div>
          <h4 class="mono mb-4 text-xs font-semibold uppercase tracking-wider text-secondary">{{ t('footer.marketcaps') }}</h4>
          <ul class="space-y-2.5 text-sm">
            <li><a href="https://coinpaprika.com/coin/sth-smartholdem" target="_blank" rel="noopener" class="f-link">Coinpaprika</a></li>
            <li><a href="https://blockspot.io/coin/smartholdem" target="_blank" rel="noopener" class="f-link">Blockspot</a></li>
            <li><a href="https://coinmarketcap.com/currencies/smartholdem" target="_blank" rel="noopener" class="f-link">Coinmarketcap</a></li>
          </ul>
        </div>
      </div>

      <div class="mt-12 flex flex-col items-center justify-between gap-3 border-t hair-border pt-6 text-sm text-secondary sm:flex-row">
        <p>&copy; 2017 - {{ year }} {{ t('footer.copyright') }}. {{ t('footer.rights') }}</p>
        <div class="flex items-center gap-4">
          <NuxtLink :to="localePath('/terms')" class="f-link">{{ t('terms.nav') }}</NuxtLink>
          <span class="hidden h-3 w-px bg-white/10 sm:block"></span>
          <p class="mono text-xs">NETFORY · SmartNet Protocols</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { Github, Send, Youtube, Mail, Rss } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()
const { links, isSmartNet, openWallet } = useSmartNet()

// SSG-safe copyright year:
// 1) Seeded from build time via useState — SSR payload and initial hydration match (no mismatch).
// 2) Refreshed to the actual current year onMounted, so if a visitor lands on a page baked in
//    a previous calendar year, the footer updates itself without a rebuild.
const year = useState('sth-copyright-year', () => new Date().getFullYear())
onMounted(() => {
  const now = new Date().getFullYear()
  if (year.value !== now) year.value = now
})

const onWallet = (e) => {
  if (isSmartNet.value) { e.preventDefault(); openWallet() }
}
</script>

<style scoped>
.f-link{ color: var(--text-secondary); transition: color .2s; }
.f-link:hover{ color:#00D4FF; }
.social-btn{
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px; height: 32px;
  border-radius: 8px;
  border: 1px solid var(--border);
  color: var(--text-secondary);
  background: rgba(255,255,255,0.02);
  transition: all .2s;
}
.social-btn:hover{
  color: #00D4FF;
  border-color: rgba(0,212,255,0.5);
  background: rgba(0,212,255,0.08);
  transform: translateY(-1px);
}
</style>
