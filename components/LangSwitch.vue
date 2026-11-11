<template>
  <!-- MOBILE / INLINE GRID variant — used inside the mobile menu drawer. -->
  <div v-if="mode === 'grid'" class="w-full">
    <div class="mono mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-secondary">
      <Languages class="h-3.5 w-3.5" />
      <span>{{ t('nav.language') }}</span>
    </div>
    <div class="grid grid-cols-2 gap-2">
      <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        class="lang-cell"
        :class="l.code === locale ? 'lang-cell-active' : ''"
        @click="rememberLocale(l.code); $emit('pick')"
      >
        <span class="truncate">{{ l.name }}</span>
        <Check v-if="l.code === locale" class="h-4 w-4 shrink-0 text-neon-cyan" />
      </NuxtLink>
    </div>
  </div>

  <!-- DESKTOP / DROPDOWN variant — click to toggle (no hover). -->
  <div v-else v-click-outside="close" class="relative hidden lg:block">
    <button
      class="inline-flex h-10 items-center gap-1.5 rounded-lg border hair-border px-3 text-sm font-medium transition-colors hover:text-neon-cyan hover:border-neon-cyan"
      aria-haspopup="true"
      :aria-expanded="open"
      @click="open = !open"
    >
      <Languages class="h-4 w-4" />
      <span class="mono uppercase">{{ locale }}</span>
      <ChevronDown class="h-3.5 w-3.5 transition-transform" :class="open ? 'rotate-180' : ''" />
    </button>
    <transition name="fade">
      <div
        v-if="open"
        class="absolute right-0 top-full z-50 pt-2"
      >
        <div class="w-[420px] rounded-xl border hair-border dropdown-panel shadow-card p-2">
          <div class="grid grid-cols-2 gap-1">
            <NuxtLink
              v-for="l in locales"
              :key="l.code"
              :to="switchLocalePath(l.code)"
              class="dd-cell"
              :class="l.code === locale ? 'dd-cell-active' : ''"
              @click="rememberLocale(l.code); open = false"
            >
              <span class="truncate">{{ l.name }}</span>
              <Check v-if="l.code === locale" class="h-4 w-4 shrink-0 text-neon-cyan" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { Languages, ChevronDown, Check } from 'lucide-vue-next'
import { rememberLocale } from '~/utils/browserLocale'

const props = defineProps({
  mode: { type: String, default: 'dropdown' } // 'dropdown' | 'grid'
})
defineEmits(['pick'])

const { t, locale, locales } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const open = ref(false)
const close = () => { open.value = false }

// Close the popup when route changes.
const route = useRoute()
watch(() => route.fullPath, close)

// Simple v-click-outside directive (registered locally).
const vClickOutside = {
  mounted(el, binding) {
    el._clickOutside = (e) => {
      if (!el.contains(e.target)) binding.value?.()
    }
    document.addEventListener('click', el._clickOutside, true)
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutside, true)
  }
}
</script>

<style scoped>
.dropdown-panel{
  background: rgba(17, 22, 48, 0.94);
  backdrop-filter: blur(22px);
  -webkit-backdrop-filter: blur(22px);
  box-shadow: 0 20px 40px -12px rgba(0,0,0,.55), 0 0 0 1px rgba(0,212,255,.06);
}
html:not(.dark) .dropdown-panel{
  background: rgba(255,255,255,0.96);
}

/* Desktop dropdown cells */
.dd-cell{
  @apply flex items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm transition-colors;
  color: var(--text);
}
.dd-cell:hover{ background: rgba(0,212,255,0.08); color:#00D4FF; }
.dd-cell-active{ color:#00D4FF; background: rgba(0,212,255,0.06); }

/* Mobile inline grid cells */
.lang-cell{
  @apply flex items-center justify-between gap-2 rounded-lg border px-3 py-2.5 text-sm font-medium transition-colors;
  border-color: var(--border);
  color: var(--text);
}
.lang-cell:hover{ color:#00D4FF; border-color: rgba(0,212,255,0.5); }
.lang-cell-active{
  color:#00D4FF;
  border-color: rgba(0,212,255,0.6);
  background: rgba(0,212,255,0.06);
}

.fade-enter-active,.fade-leave-active{transition:opacity .18s ease}
.fade-enter-from,.fade-leave-to{opacity:0}
</style>
