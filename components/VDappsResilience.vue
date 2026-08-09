<template>
  <section class="container-x py-20 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <!-- Image (left) -->
      <div v-reveal class="order-2 lg:order-1">
        <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
          <img src="/images/trust-safety/web4-free-internet.jpg" alt="Web4 free internet — open P2P transport"
               loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>

      <!-- Text (right) -->
      <div v-reveal="120" class="order-1 lg:order-2">
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('trust.vdapps.title') }}</h2>
        <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
        <p class="trust-rich mt-5 leading-relaxed text-secondary" v-html="t('trust.vdapps.p1')"></p>
        <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
        <p class="trust-rich mt-4 leading-relaxed text-secondary" v-html="t('trust.vdapps.p2')"></p>
        <div class="mt-7 inline-flex items-center gap-3 rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.05] px-4 py-3">
          <WifiOff class="h-5 w-5 text-neon-cyan" />
          <p class="mono text-xs uppercase tracking-wider text-secondary">{{ t('trust.vdapps.statLabel') }}</p>
          <p class="mono text-sm font-bold text-neon-cyan">{{ t('trust.vdapps.statValue') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { WifiOff } from 'lucide-vue-next'
const { t } = useI18n()
</script>
