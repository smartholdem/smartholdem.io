<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b hair-border glass">
    <div class="container-x flex h-16 items-center justify-between gap-4">
      <!-- Logo -->
      <NuxtLink :to="localePath('/')" class="flex items-center gap-2.5 shrink-0">
        <img src="/images/home/sth-logo.png" alt="SmartHoldem" class="h-9 w-9" />
        <span class="mono text-sm font-bold leading-tight">
          SmartHoldem<br class="sm:hidden" /><span class="text-brand"> WEB 4.0</span>
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <nav class="hidden items-center gap-1 lg:flex">
        <NuxtLink :to="localePath('/get-sth')" class="nav-link font-semibold text-neon-cyan">{{ t('nav.getSth') }}</NuxtLink>
        <NuxtLink :to="localePath('/blockchain')" class="nav-link">{{ t('nav.blockchain') }}</NuxtLink>
        <a :href="links.wallet" target="_blank" rel="noopener" class="nav-link" @click="onWallet">{{ t('nav.wallet') }}</a>
        <a :href="links.devhub" class="nav-link">{{ t('nav.devhub') }}</a>
        <NuxtLink :to="localePath('/news')" class="nav-link">{{ t('nav.news') }}</NuxtLink>
        <NuxtLink :to="localePath('/dapps')" class="nav-link">{{ t('nav.dapps') }}</NuxtLink>
        <NuxtLink :to="localePath('/tokenomics')" class="nav-link">{{ t('nav.tokenomics') }}</NuxtLink>
        <NuxtLink :to="localePath('/white-paper')" class="nav-link">{{ t('nav.whitepaper') }}</NuxtLink>
      </nav>

      <div class="flex items-center gap-2">
        <span v-if="isSmartNet" class="mono hidden items-center gap-1 rounded-md border border-neon-green/40 bg-neon-green/10 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-neon-green sm:inline-flex" title="Running inside the SmartNet decentralized network">SmartNet</span>
        <button
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border hair-border transition-colors hover:border-neon-cyan/60 hover:text-neon-cyan"
          :aria-label="t('search.button')" :title="t('search.button')"
          @click="searchOpen = true"
        >
          <Search class="h-4 w-4" />
        </button>
        <LangSwitch class="hidden lg:block" />
        <ThemeToggle />
        <button class="inline-flex h-10 w-10 items-center justify-center rounded-lg border hair-border lg:hidden" aria-label="Menu" @click="mobileOpen = !mobileOpen">
          <X v-if="mobileOpen" class="h-5 w-5" />
          <Menu v-else class="h-5 w-5" />
        </button>
      </div>
    </div>

    <!-- Mobile menu -->
    <transition name="slide">
      <nav v-if="mobileOpen" class="border-t hair-border glass lg:hidden">
        <div class="container-x flex flex-col gap-5 py-5">
          <!-- Nav grid (2 columns) -->
          <div class="grid grid-cols-2 gap-2">
            <NuxtLink :to="localePath('/')" class="m-cell" @click="mobileOpen=false">{{ t('nav.home', 'Home') }}</NuxtLink>
            <NuxtLink :to="localePath('/news')" class="m-cell" @click="mobileOpen=false">{{ t('nav.news') }}</NuxtLink>
            <NuxtLink :to="localePath('/get-sth')" class="m-cell m-cell-primary" @click="mobileOpen=false">{{ t('nav.getSth') }}</NuxtLink>
            <NuxtLink :to="localePath('/blockchain')" class="m-cell" @click="mobileOpen=false">{{ t('nav.blockchain') }}</NuxtLink>
            <a :href="links.wallet" target="_blank" rel="noopener" class="m-cell" @click="onWallet">{{ t('nav.wallet') }}</a>
            <a :href="links.devhub" class="m-cell" @click="mobileOpen=false">{{ t('nav.devhub') }}</a>
            <NuxtLink :to="localePath('/dapps')" class="m-cell" @click="mobileOpen=false">{{ t('nav.dapps') }}</NuxtLink>
            <NuxtLink :to="localePath('/tokenomics')" class="m-cell" @click="mobileOpen=false">{{ t('nav.tokenomics') }}</NuxtLink>
            <NuxtLink :to="localePath('/white-paper')" class="m-cell col-span-2" @click="mobileOpen=false">{{ t('nav.whitepaper') }}</NuxtLink>
          </div>

          <!-- Language grid -->
          <div class="border-t hair-border pt-5">
            <LangSwitch mode="grid" @pick="mobileOpen=false" />
          </div>
        </div>
      </nav>
    </transition>

    <!-- Global search palette (Cmd+K / Ctrl+K) -->
    <SearchPalette v-model="searchOpen" />
  </header>
</template>

<script setup>
import { ChevronDown, Menu, X, Search } from 'lucide-vue-next'
const { t } = useI18n()
const localePath = useLocalePath()
const { links, isSmartNet, openWallet } = useSmartNet()
const mobileOpen = ref(false)
const route = useRoute()
watch(() => route.fullPath, () => { mobileOpen.value = false })

// Global search palette (Cmd+K / Ctrl+K)
const searchOpen = ref(false)

// In the SmartNet client the "Wallet" item opens the built-in wallet panel
// instead of navigating to the web wallet URL.
const onWallet = (e) => {
  if (isSmartNet.value) {
    e.preventDefault()
    mobileOpen.value = false
    openWallet()
  }
}
</script>

<style scoped>
.nav-link{ @apply rounded-lg px-3 py-2 text-sm font-medium transition-colors; color: var(--text); }
.nav-link:hover{ color:#00D4FF; }
.router-link-active.nav-link{ color:#00D4FF; }

/* Mobile 2-col menu cells (XBTS-style) */
.m-cell{
  @apply flex items-center justify-center rounded-lg border px-3 py-3.5 text-sm font-semibold uppercase tracking-wide text-center transition-colors;
  border-color: var(--border);
  color: var(--text);
  background: rgba(255,255,255,0.02);
}
.m-cell:hover{ color:#00D4FF; border-color: rgba(0,212,255,0.5); }
.router-link-active.m-cell{ color:#00D4FF; border-color: rgba(0,212,255,0.6); }
.m-cell-primary{
  color:#00D4FF;
  border-color: rgba(0,212,255,0.5);
  background: rgba(0,212,255,0.08);
}
.m-cell-primary:hover{ background: rgba(0,212,255,0.15); }

.buy-item{ @apply flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-sm transition-colors; }
.buy-item:hover{ background: rgba(0,212,255,0.08); }

/* Buy dropdown: near-solid surface (~90% opacity) with stronger blur, so
   underlying page content doesn't bleed through. Overrides the global .glass. */
.dropdown-panel{
  background: rgba(17, 22, 48, 0.92);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow: 0 20px 40px -12px rgba(0,0,0,.55), 0 0 0 1px rgba(0,212,255,.06);
}
html:not(.dark) .dropdown-panel{
  background: rgba(255,255,255,0.94);
}
.fade-enter-active,.fade-leave-active{transition:opacity .18s}
.fade-enter-from,.fade-leave-to{opacity:0}
.slide-enter-active,.slide-leave-active{transition:all .2s ease}
.slide-enter-from,.slide-leave-to{opacity:0;transform:translateY(-8px)}
</style>
