<template>
  <section class="container-x py-20 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <!-- Text (left) -->
      <div v-reveal>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('msg.mail.title') }}</h2>
        <p class="mt-5 leading-relaxed text-secondary">{{ t('msg.mail.p1') }}</p>

        <div class="mt-7 space-y-4">
          <div class="rounded-xl border hair-border glass p-5">
            <h3 class="flex items-center gap-2 font-semibold">
              <Inbox class="h-5 w-5 shrink-0 text-secondary" />
              {{ t('msg.mail.m1Title') }}
            </h3>
            <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
            <p class="msg-rich mt-2 text-sm leading-relaxed text-secondary" v-html="t('msg.mail.m1Text')"></p>
          </div>

          <div class="rounded-xl border border-neon-cyan/30 bg-neon-cyan/[0.04] p-5">
            <h3 class="flex items-center gap-2 font-semibold">
              <MailCheck class="h-5 w-5 shrink-0 text-neon-cyan" />
              {{ t('msg.mail.m2Title') }}
            </h3>
            <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
            <p class="msg-rich mt-2 text-sm leading-relaxed text-secondary" v-html="t('msg.mail.m2Text')"></p>
          </div>

          <div class="rounded-xl border border-[#10B981]/30 bg-[#10B981]/[0.04] p-5">
            <h3 class="flex items-center gap-2 font-semibold">
              <Ghost class="h-5 w-5 shrink-0 text-[#10B981]" />
              {{ t('msg.mail.m3Title') }}
            </h3>
            <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
            <p class="msg-rich mt-2 text-sm leading-relaxed text-secondary" v-html="t('msg.mail.m3Text')"></p>
          </div>
        </div>
      </div>

      <!-- Image (right) -->
      <div v-reveal="120">
        <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
          <img src="/images/messaging/mail-web4.jpg" alt="0xID Mail — three privacy modes"
               loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { Inbox, MailCheck, Ghost } from 'lucide-vue-next'
const { t } = useI18n()
</script>
