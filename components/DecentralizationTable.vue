<template>
  <section class="relative overflow-hidden py-20 lg:py-24">
    <!-- Subtle background texture -->
    <div class="absolute inset-0 -z-10">
      <img src="/images/trust-safety/true-decentralization-rp.jpg" alt="" aria-hidden="true"
           class="h-full w-full object-cover opacity-15" loading="lazy" />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-transparent"></div>
    </div>

    <div class="container-x">
      <h2 v-reveal class="text-center text-3xl font-bold sm:text-4xl">{{ t('trust.decentral.title') }}</h2>

      <div v-reveal="100" class="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border hair-border glass shadow-card">
        <div v-for="(row, i) in rows" :key="i"
             class="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[240px_1fr] sm:gap-6 sm:p-6"
             :class="i > 0 ? 'border-t hair-border' : ''">
          <div class="flex items-start gap-2.5">
            <component :is="row.icon" class="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
            <p class="mono text-sm font-semibold">{{ t(row.t) }}</p>
          </div>
          <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
          <p class="trust-rich text-sm leading-relaxed text-secondary" v-html="t(row.d)"></p>
        </div>
      </div>

      <p v-reveal="160" class="mono mx-auto mt-6 max-w-4xl text-center text-xs uppercase tracking-wider text-secondary">
        {{ t('trust.decentral.note') }}
      </p>
    </div>
  </section>
</template>

<script setup>
import { Archive, ServerOff, MonitorSmartphone, FileKey2 } from 'lucide-vue-next'
const { t } = useI18n()

const rows = [
  { icon: Archive, t: 'trust.decentral.r1t', d: 'trust.decentral.r1d' },
  { icon: ServerOff, t: 'trust.decentral.r2t', d: 'trust.decentral.r2d' },
  { icon: MonitorSmartphone, t: 'trust.decentral.r3t', d: 'trust.decentral.r3d' },
  { icon: FileKey2, t: 'trust.decentral.r4t', d: 'trust.decentral.r4d' }
]
</script>
