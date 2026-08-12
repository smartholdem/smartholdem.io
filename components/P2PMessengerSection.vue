<template>
  <section class="container-x py-20 lg:py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <!-- Image (left) -->
      <div v-reveal class="order-2 lg:order-1">
        <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
          <img src="/images/messaging/messenger-web4.jpg" alt="SmartNet P2P Messenger"
               loading="lazy" class="w-full rounded-xl" />
        </div>
      </div>

      <!-- Text (right) -->
      <div v-reveal="120" class="order-1 lg:order-2">
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('msg.messenger.title') }}</h2>
        <p class="mt-5 leading-relaxed text-secondary">{{ t('msg.messenger.p1') }}</p>
        <ul class="mt-6 space-y-4">
          <li v-for="item in bullets" :key="item.key" class="flex items-start gap-3">
            <span class="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.06]">
              <component :is="item.icon" class="h-4 w-4 text-neon-cyan" />
            </span>
            <!-- eslint-disable-next-line vue/no-v-html — trusted i18n copy -->
            <span class="msg-rich text-sm leading-relaxed text-secondary" v-html="t(item.key)"></span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowLeftRight, ShieldCheck, Users, Coins } from 'lucide-vue-next'
const { t } = useI18n()

const bullets = [
  { key: 'msg.messenger.b1', icon: ArrowLeftRight },
  { key: 'msg.messenger.b2', icon: ShieldCheck },
  { key: 'msg.messenger.b3', icon: Users },
  { key: 'msg.messenger.b4', icon: Coins }
]
</script>
