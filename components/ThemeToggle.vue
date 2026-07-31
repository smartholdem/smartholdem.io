<template>
  <button
    class="inline-flex h-10 w-10 items-center justify-center rounded-lg border hair-border transition-colors hover:text-neon-cyan hover:border-neon-cyan"
    :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
    @click="toggle"
  >
    <ClientOnly>
      <Moon v-if="isDark" class="h-5 w-5" />
      <Sun v-else class="h-5 w-5" />
      <template #fallback><Moon class="h-5 w-5" /></template>
    </ClientOnly>
  </button>
</template>

<script setup>
import { Sun, Moon } from 'lucide-vue-next'
const colorMode = useColorMode({ initialValue: 'dark', storageKey: 'sth-color-mode' })
const isDark = computed(() => colorMode.value !== 'light')
const toggle = () => { colorMode.value = isDark.value ? 'light' : 'dark' }
</script>
