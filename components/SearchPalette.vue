<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="sp">
      <div v-if="modelValue" class="fixed inset-0 z-[100]" role="dialog" aria-modal="true" :aria-label="t('search.button')">
        <div class="fixed inset-0 bg-black/60 backdrop-blur-sm" @click="close"></div>

        <div class="relative mx-auto mt-[10vh] w-full max-w-xl px-4">
          <div class="sp-panel overflow-hidden rounded-2xl border" style="border-color: rgba(0,212,255,0.30)">
            <!-- Input row -->
            <div class="flex items-center gap-3 border-b hair-border px-4">
              <Search class="h-5 w-5 shrink-0 text-neon-cyan" />
              <input
                ref="inputEl"
                v-model="q"
                type="text"
                :placeholder="t('search.placeholder')"
                class="h-14 w-full bg-transparent text-base outline-none"
                autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false"
                @keydown="onKeydown"
              />
              <button class="mono sp-kbd shrink-0" :aria-label="t('search.close')" @click="close">ESC</button>
            </div>

            <!-- Results -->
            <div ref="listEl" class="max-h-[55vh] overflow-y-auto p-2">
              <template v-if="flat.length">
                <template v-for="group in grouped" :key="group.label">
                  <p class="mono px-3 pb-1 pt-3 text-[10px] font-semibold uppercase tracking-widest text-secondary">{{ group.label }}</p>
                  <button
                    v-for="r in group.items"
                    :key="r.uid"
                    :data-uid="r.uid"
                    class="sp-item"
                    :class="{ 'sp-item-active': activeUid === r.uid }"
                    @click="go(r)"
                    @mousemove="setActive(r)"
                  >
                    <span class="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg" :style="`background:${tintFor(r.type)}`">
                      <component :is="iconFor(r.type)" class="h-4 w-4" :style="`color:${colorFor(r.type)}`" />
                    </span>
                    <span class="min-w-0 flex-1 text-start">
                      <span class="block truncate text-sm font-medium">{{ r.title }}</span>
                      <span v-if="r.snippet" class="block truncate text-xs text-secondary">{{ r.snippet }}</span>
                    </span>
                    <CornerDownLeft v-if="activeUid === r.uid" class="h-3.5 w-3.5 shrink-0 text-neon-cyan" />
                  </button>
                </template>
              </template>
              <p v-else class="px-4 py-10 text-center text-sm text-secondary">{{ t('search.noResults') }}</p>
            </div>

            <!-- Footer hints -->
            <div class="hidden items-center gap-4 border-t hair-border px-4 py-2.5 text-[11px] text-secondary sm:flex">
              <span class="inline-flex items-center gap-1.5"><kbd class="mono sp-kbd">↑↓</kbd> {{ t('search.navigate') }}</span>
              <span class="inline-flex items-center gap-1.5"><kbd class="mono sp-kbd">↵</kbd> {{ t('search.select') }}</span>
              <span class="inline-flex items-center gap-1.5"><kbd class="mono sp-kbd">ESC</kbd> {{ t('search.close') }}</span>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
  </ClientOnly>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onBeforeUnmount } from 'vue'
import { Search, FileText, BookOpen, Newspaper, ScrollText, CornerDownLeft } from 'lucide-vue-next'
import { useGlobalSearch } from '~/composables/useSearchIndex'

const props = defineProps({ modelValue: { type: Boolean, default: false } })
const emit = defineEmits(['update:modelValue'])

const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()
const { search } = useGlobalSearch()

const q = ref('')
const active = ref(0)
const inputEl = ref(null)
const listEl = ref(null)

const grouped = computed(() => {
  const res = search(q.value)
  const groups = []
  const add = (type, label) => {
    const items = res.filter(r => r.type === type)
    if (items.length) groups.push({ label, items })
  }
  add('page', t('search.pages'))
  add('glossary', t('search.glossary'))
  add('whitepaper', t('nav.whitepaper'))
  add('news', t('search.news'))
  return groups
})
const flat = computed(() => grouped.value.flatMap(g => g.items))
const activeUid = computed(() => flat.value[active.value]?.uid)

const setActive = (r) => {
  const i = flat.value.findIndex(x => x.uid === r.uid)
  if (i >= 0) active.value = i
}

const iconFor = (type) => (type === 'page' ? FileText : type === 'glossary' ? BookOpen : type === 'whitepaper' ? ScrollText : Newspaper)
const colorFor = (type) => (type === 'page' ? '#00D4FF' : type === 'glossary' ? '#7C3AED' : type === 'whitepaper' ? '#10B981' : '#F59E0B')
const tintFor = (type) => (type === 'page' ? 'rgba(0,212,255,0.12)' : type === 'glossary' ? 'rgba(124,58,237,0.12)' : type === 'whitepaper' ? 'rgba(16,185,129,0.12)' : 'rgba(245,158,11,0.12)')

const close = () => emit('update:modelValue', false)

const go = (r) => {
  close()
  const hashIdx = r.to.indexOf('#')
  if (hashIdx >= 0) {
    const path = r.to.slice(0, hashIdx)
    const hash = r.to.slice(hashIdx)
    router.push(localePath(path) + hash)
  } else {
    router.push(localePath(r.to))
  }
}

const onKeydown = (e) => {
  if (e.key === 'ArrowDown') {
    e.preventDefault()
    active.value = flat.value.length ? (active.value + 1) % flat.value.length : 0
  } else if (e.key === 'ArrowUp') {
    e.preventDefault()
    active.value = flat.value.length ? (active.value - 1 + flat.value.length) % flat.value.length : 0
  } else if (e.key === 'Enter') {
    e.preventDefault()
    const r = flat.value[active.value]
    if (r) go(r)
  }
}

// Global hotkey: Cmd+K / Ctrl+K toggles, Escape closes
const onGlobalKey = (e) => {
  if ((e.metaKey || e.ctrlKey) && e.key && e.key.toLowerCase() === 'k') {
    e.preventDefault()
    emit('update:modelValue', !props.modelValue)
  } else if (e.key === 'Escape' && props.modelValue) {
    close()
  }
}
onMounted(() => window.addEventListener('keydown', onGlobalKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onGlobalKey)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})

watch(() => props.modelValue, async (open) => {
  if (typeof document !== 'undefined') document.body.style.overflow = open ? 'hidden' : ''
  if (open) {
    q.value = ''
    active.value = 0
    await nextTick()
    inputEl.value?.focus()
  }
})

watch(q, () => { active.value = 0 })

// Keep the active row in view while navigating with arrows
watch(active, async () => {
  await nextTick()
  const uid = flat.value[active.value]?.uid
  if (!uid || !listEl.value) return
  try {
    const el = listEl.value.querySelector(`[data-uid="${window.CSS && CSS.escape ? CSS.escape(uid) : uid}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  } catch { /* noop */ }
})
</script>

<style scoped>
.sp-panel{
  background: rgba(13, 17, 40, 0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  box-shadow: 0 30px 80px -20px rgba(0,0,0,.7), 0 0 60px -20px rgba(0,212,255,.25);
  color: var(--text);
}
html:not(.dark) .sp-panel{
  background: rgba(255,255,255,0.97);
}
input::placeholder{ color: var(--text-secondary, rgba(148,163,184,0.8)); opacity: .7; }

.sp-item{
  @apply flex w-full items-center gap-3 rounded-xl px-3 py-2.5 transition-colors;
  color: var(--text);
}
.sp-item-active{
  background: rgba(0,212,255,0.10);
}

.sp-kbd{
  @apply inline-flex items-center justify-center rounded-md border px-1.5 py-0.5 text-[10px] font-semibold;
  border-color: var(--border);
  background: rgba(255,255,255,0.04);
  color: var(--text);
  opacity: .85;
}

.sp-enter-active,.sp-leave-active{ transition: opacity .18s ease; }
.sp-enter-active .sp-panel,.sp-leave-active .sp-panel{ transition: transform .18s ease; }
.sp-enter-from,.sp-leave-to{ opacity: 0; }
.sp-enter-from .sp-panel,.sp-leave-to .sp-panel{ transform: translateY(-8px) scale(.985); }
</style>
