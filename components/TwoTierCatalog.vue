<template>
  <section class="container-x py-20 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <!-- Text (left) -->
      <div v-reveal>
        <h2 class="text-3xl font-bold sm:text-4xl">
          <span class="text-neon-cyan">{{ t('trust.catalog.titleHi') }}</span>{{ t('trust.catalog.titleB') }}
        </h2>

        <!-- Level 1: Official -->
        <div class="mt-8 rounded-xl border border-[#10B981]/30 bg-[#10B981]/[0.04] p-6">
          <h3 class="flex items-center gap-2 text-lg font-semibold">
            <BadgeCheck class="h-5 w-5 shrink-0 text-[#10B981]" />
            {{ t('trust.catalog.l1Title') }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-secondary">{{ t('trust.catalog.l1Intro') }}</p>
          <ul class="mt-4 space-y-3">
            <li class="flex items-start gap-2.5">
              <KeyRound class="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
              <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
              <span class="trust-rich text-sm leading-relaxed text-secondary" v-html="t('trust.catalog.l1B1')"></span>
            </li>
            <li class="flex items-start gap-2.5">
              <Vote class="mt-0.5 h-4 w-4 shrink-0 text-neon-cyan" />
              <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
              <span class="trust-rich text-sm leading-relaxed text-secondary" v-html="t('trust.catalog.l1B2')"></span>
            </li>
          </ul>
          <p class="mono mt-4 text-xs font-semibold uppercase tracking-wide text-[#10B981]">
            {{ t('trust.catalog.l1Note') }}
          </p>
        </div>

        <!-- Level 2: All -->
        <div class="mt-4 rounded-xl border border-[#F59E0B]/30 bg-[#F59E0B]/[0.04] p-6">
          <h3 class="flex items-center gap-2 text-lg font-semibold">
            <Eye class="h-5 w-5 shrink-0 text-[#F59E0B]" />
            {{ t('trust.catalog.l2Title') }}
          </h3>
          <p class="mt-3 text-sm leading-relaxed text-secondary">{{ t('trust.catalog.l2Text') }}</p>
        </div>
      </div>

      <!-- Image (right) -->
      <div v-reveal="120">
        <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
          <img src="/images/trust-safety/two-tier-catalog.jpg" alt="Two-tier catalog: Official / All toggle"
               loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { BadgeCheck, KeyRound, Vote, Eye } from 'lucide-vue-next'
const { t } = useI18n()
</script>
