<template>
  <section class="container-x py-20 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <!-- Image (left) -->
      <div v-reveal>
        <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
          <img src="/images/messaging/how-to-mail-web4.jpg" alt="Encrypted email flow: sender, blockchain key lookup, recipient"
               loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>

      <!-- Text (right) -->
      <div v-reveal="120">
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('msg.antispam.title') }}</h2>
        <p class="mt-5 leading-relaxed text-secondary">{{ t('msg.antispam.p1') }}</p>
        <p class="mt-4 leading-relaxed text-secondary">{{ t('msg.antispam.p2') }}</p>

        <div class="mt-6 space-y-2.5">
          <p class="flex items-center gap-2.5 text-sm font-medium">
            <BadgeCheck class="h-5 w-5 shrink-0 text-[#10B981]" />
            <span class="text-[#10B981]">{{ t('msg.antispam.valid') }}</span>
          </p>
          <p class="flex items-center gap-2.5 text-sm font-medium">
            <BadgeX class="h-5 w-5 shrink-0 text-red-500" />
            <span class="text-red-500">{{ t('msg.antispam.invalid') }}</span>
          </p>
        </div>

        <div class="mt-7 inline-flex items-center gap-3 rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.05] px-4 py-3">
          <p class="mono text-xs uppercase tracking-wider text-secondary">{{ t('msg.antispam.statLabel') }}</p>
          <p class="mono text-sm font-bold text-neon-cyan">{{ t('msg.antispam.statValue') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BadgeCheck, BadgeX } from 'lucide-vue-next'
const { t } = useI18n()
</script>
