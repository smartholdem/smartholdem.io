<template>
  <section class="container-x py-10">
    <div v-reveal class="relative overflow-hidden rounded-2xl border border-neon-cyan/30 glass p-8 shadow-card sm:p-12">
      <div class="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_85%_15%,rgba(0,212,255,0.08),transparent_55%)]"></div>
      <div class="flex flex-col items-start gap-6 sm:flex-row sm:gap-8">
        <div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/40 bg-neon-cyan/10">
          <Unlock class="h-7 w-7 text-neon-cyan" />
        </div>
        <div>
          <h2 class="text-2xl font-bold sm:text-3xl">{{ t('trust.transport.title') }}</h2>
          <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
          <p class="trust-rich mt-4 leading-relaxed text-secondary" v-html="t('trust.transport.p1')"></p>
          <p class="mt-3 leading-relaxed text-secondary">{{ t('trust.transport.p2') }}</p>
          <div class="mono mt-5 inline-flex flex-wrap items-center gap-2 text-xs">
            <span class="rounded-md border border-neon-cyan/30 bg-neon-cyan/[0.06] px-2.5 py-1 text-neon-cyan">sn://</span>
            <span class="rounded-md border border-neon-cyan/30 bg-neon-cyan/[0.06] px-2.5 py-1 text-neon-cyan">sth://</span>
            <span class="px-1 text-secondary">→ never blocked</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Unlock } from 'lucide-vue-next'
const { t } = useI18n()
</script>
