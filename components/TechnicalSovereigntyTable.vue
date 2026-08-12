<template>
  <section class="container-x py-16 lg:py-20">
    <h2 v-reveal class="text-center text-3xl font-bold sm:text-4xl">{{ t('msg.tech.title') }}</h2>

    <div v-reveal="100" class="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border hair-border glass shadow-card">
      <div v-for="(row, i) in rows" :key="i"
           class="grid grid-cols-1 gap-1 p-5 sm:grid-cols-[240px_1fr] sm:gap-6 sm:p-6"
           :class="i > 0 ? 'border-t hair-border' : ''">
        <div class="flex items-start gap-2.5">
          <component :is="row.icon" class="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
          <p class="mono text-sm font-semibold">{{ t(row.t) }}</p>
        </div>
        <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
        <p class="msg-rich text-sm leading-relaxed text-secondary" v-html="t(row.d)"></p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { HardDrive, BookUser, Binary, LifeBuoy } from 'lucide-vue-next'
const { t } = useI18n()

const rows = [
  { icon: HardDrive, t: 'msg.tech.r1t', d: 'msg.tech.r1d' },
  { icon: BookUser, t: 'msg.tech.r2t', d: 'msg.tech.r2d' },
  { icon: Binary, t: 'msg.tech.r3t', d: 'msg.tech.r3d' },
  { icon: LifeBuoy, t: 'msg.tech.r4t', d: 'msg.tech.r4d' }
]
</script>
