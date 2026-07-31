<template>
  <Teleport to="body">
    <transition name="modal">
      <div v-if="open" class="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[12vh]" @click.self="close">
        <div class="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <div class="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border hair-border glass shadow-card">
          <div class="flex items-center gap-3 border-b hair-border px-4">
            <Search class="h-5 w-5 text-neon-cyan" />
            <input
              ref="inputEl"
              v-model="q"
              type="text"
              placeholder="Search the whitepaper…"
              class="h-14 w-full bg-transparent text-base outline-none placeholder:text-slate-500"
              @keydown.down.prevent="move(1)"
              @keydown.up.prevent="move(-1)"
              @keydown.enter.prevent="choose(results[active])"
              @keydown.esc="close"
            />
            <kbd class="mono rounded border hair-border px-1.5 py-0.5 text-[10px] text-secondary">ESC</kbd>
          </div>
          <div class="max-h-[50vh] overflow-y-auto p-2">
            <p v-if="!results.length" class="px-3 py-8 text-center text-sm text-secondary">
              {{ q ? 'No results' : 'Type to search sections…' }}
            </p>
            <button
              v-for="(r, i) in results"
              :key="r.id"
              class="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors"
              :class="i === active ? 'bg-neon-cyan/10 text-neon-cyan' : 'hover:bg-white/5'"
              @mouseenter="active = i"
              @click="choose(r)"
            >
              <Hash class="h-3.5 w-3.5 shrink-0 opacity-60" />
              <span class="truncate">{{ r.text }}</span>
              <span class="mono ml-auto text-[10px] uppercase opacity-40">H{{ r.level }}</span>
            </button>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
import Fuse from 'fuse.js'
import { Search, Hash } from 'lucide-vue-next'

const props = defineProps({
  open: { type: Boolean, default: false },
  items: { type: Array, default: () => [] }
})
const emit = defineEmits(['update:open', 'select'])

const q = ref('')
const active = ref(0)
const inputEl = ref(null)

const fuse = computed(() => new Fuse(props.items, { keys: ['text'], threshold: 0.4 }))
const results = computed(() => {
  if (!q.value.trim()) return props.items.slice(0, 8)
  return fuse.value.search(q.value).slice(0, 20).map((r) => r.item)
})

watch(results, () => { active.value = 0 })
watch(() => props.open, async (v) => {
  if (v) { q.value = ''; active.value = 0; await nextTick(); inputEl.value?.focus() }
})

const move = (d) => {
  const n = results.value.length
  if (!n) return
  active.value = (active.value + d + n) % n
}
const choose = (r) => { if (r) { emit('select', r.id); close() } }
const close = () => emit('update:open', false)
</script>

<style scoped>
.modal-enter-active,.modal-leave-active{ transition:opacity .2s ease }
.modal-enter-from,.modal-leave-to{ opacity:0 }
</style>
