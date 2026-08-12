<template>
  <section class="relative overflow-hidden">
    <!-- Background image + dark overlay -->
    <div class="absolute inset-0 -z-10">
      <img src="/images/messaging/e2ee-hero.jpg" alt="" aria-hidden="true"
           class="h-full w-full object-cover opacity-30" loading="eager" />
      <div class="absolute inset-0 bg-[#0A0E27]/70"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(0,212,255,0.10),transparent_60%)]"></div>
    </div>

    <div class="container-x flex flex-col items-center py-24 text-center lg:py-32">
      <p v-reveal class="eyebrow mb-4 !text-neon-cyan">
        <LockKeyhole class="mr-1.5 inline h-4 w-4 -translate-y-px" />{{ t('msg.hero.eyebrow') }}
      </p>
      <h1 v-reveal="60" class="max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {{ t('msg.hero.title') }}
      </h1>
      <p v-reveal="120" class="mt-6 max-w-[800px] text-lg leading-relaxed text-[#94A3B8]">
        {{ t('msg.hero.subtitle') }}
      </p>
      <div v-reveal="180" class="mt-10 h-px w-full max-w-2xl" style="background: rgba(0, 212, 255, 0.2);"></div>
    </div>
  </section>
</template>

<script setup>
import { LockKeyhole } from 'lucide-vue-next'
const { t } = useI18n()
</script>
