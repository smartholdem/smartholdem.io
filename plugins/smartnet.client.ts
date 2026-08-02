// Client-only: detect the SmartNet runtime *after* Vue has finished the initial
// hydration. Deferring one nextTick (+ setTimeout 0) guarantees that the very
// first client-side render matches the SSR output (isSmartNet=false, so links
// use SITE_LINKS). Only *after* hydration completes do we flip the flag and let
// Vue reactively swap ecosystem links to SITE_LINKS_SMARTNET — no hydration
// mismatch, no console warning, transparent href swap.
import { nextTick } from 'vue'

export default defineNuxtPlugin((nuxtApp) => {
  const { detectSmartNet } = useSmartNet()
  nuxtApp.hook('app:mounted', () => {
    // Two-tick defer: first nextTick lets Vue flush all mount lifecycle work,
    // the setTimeout drops us into the next macro-task so any residual patch
    // work has settled before we mutate reactive state.
    nextTick(() => {
      setTimeout(() => { detectSmartNet() }, 0)
    })
  })
})
