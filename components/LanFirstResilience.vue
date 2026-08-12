<template>
  <section class="container-x py-24">
    <div class="grid items-center gap-12 lg:grid-cols-2">
      <!-- Image left -->
      <div v-reveal>
        <div class="overflow-hidden rounded-2xl border hair-border glass p-2 shadow-card">
          <img
            src="/images/mission/LAN-First-Resilience.jpg"
            alt="LAN-First Resilience"
            loading="lazy"
            class="w-full rounded-xl"
          />
        </div>
      </div>

      <!-- Content right -->
      <div v-reveal="120">
        <p class="eyebrow mb-3">{{ t('mission.lanFirst.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">
          <span class="text-neon-cyan">{{ t('mission.lanFirst.titleHi') }}</span>{{ t('mission.lanFirst.titleB') }}
        </h2>
        <p class="mt-5 text-secondary leading-relaxed">{{ t('mission.lanFirst.p1') }}</p>
        <p class="mt-4 text-lg font-bold text-neon-cyan">{{ t('mission.lanFirst.p2Bold') }}</p>
        <p class="mt-4 text-secondary leading-relaxed" v-html="p3Html"></p>

        <ul class="mt-5 space-y-3">
          <li
            v-for="(b, i) in bullets"
            :key="i"
            class="flex items-start gap-3 rounded-lg border hair-border bg-neon-cyan/[0.03] px-4 py-3"
          >
            <ShieldCheck class="mt-0.5 h-5 w-5 shrink-0 text-neon-cyan" />
            <p class="text-sm text-secondary leading-relaxed" v-html="b"></p>
          </li>
        </ul>

        <p class="mt-6 text-secondary leading-relaxed" v-html="closingHtml"></p>

        <div class="mt-6 inline-flex items-center gap-3 rounded-lg border border-neon-cyan/30 bg-neon-cyan/[0.05] px-4 py-3">
          <p class="mono text-xs uppercase tracking-wider text-secondary">{{ t('mission.lanFirst.statLabel') }}</p>
          <p class="mono text-lg font-bold text-neon-cyan">{{ t('mission.lanFirst.statValue') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ShieldCheck } from 'lucide-vue-next'
const { t } = useI18n()

// Highlight technical terms (mDNS, E2EE, CID, dApps) with an inline <code>
// class so they appear in JetBrains Mono cyan chips — consistent with the
// rest of the messaging/whitepaper copy.
const wrapTerms = (raw) => {
  if (!raw) return ''
  const terms = ['mDNS', 'E2EE', 'CID', 'dApps']
  let out = raw
  for (const term of terms) {
    // Escape special chars — none of these have any, but safe pattern.
    const re = new RegExp(`\\b${term}\\b`, 'g')
    out = out.replace(re, `<code>${term}</code>`)
  }
  // Also bolden **word** markdown segments if present.
  out = out.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  return out
}

const p3Html = computed(() => wrapTerms(t('mission.lanFirst.p3')))
const closingHtml = computed(() => wrapTerms(t('mission.lanFirst.closing')))
const bullets = computed(() => [
  wrapTerms(t('mission.lanFirst.b1')),
  wrapTerms(t('mission.lanFirst.b2')),
  wrapTerms(t('mission.lanFirst.b3'))
])
</script>

<style scoped>
/* JetBrains Mono cyan chips for technical terms (E2EE, CID, mDNS, dApps). */
:deep(code) {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.85em;
  color: #00D4FF;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.2);
  border-radius: 5px;
  padding: 0.1em 0.4em;
  white-space: nowrap;
}
:deep(strong) { color: var(--text-primary, #fff); font-weight: 700; }
html:not(.dark) :deep(code) {
  background: rgba(0, 150, 190, 0.08);
  color: #0284a8;
  border-color: rgba(2, 132, 168, 0.25);
}
</style>
