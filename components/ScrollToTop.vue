<template>
  <transition name="stt-fade">
    <button
      v-if="visible"
      type="button"
      aria-label="Scroll to top"
      class="stt-btn"
      @click="scrollTop"
    >
      <ArrowUp class="h-5 w-5" />
    </button>
  </transition>
</template>

<script setup>
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)
let ticking = false

const onScroll = () => {
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    visible.value = window.scrollY > 400
    ticking = false
  })
}

const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<style scoped>
.stt-btn{
  position: fixed;
  right: 1.25rem;
  bottom: 1.25rem;
  z-index: 60;

  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 12px;

  color: #00D4FF;
  background: rgba(17, 22, 48, 0.85);
  border: 1px solid rgba(0, 212, 255, 0.35);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow:
    0 8px 24px -8px rgba(0,0,0,.55),
    0 0 0 1px rgba(0, 212, 255, 0.05),
    0 0 18px -6px rgba(0, 212, 255, .35);

  cursor: pointer;
  transition: transform .2s ease, background .2s ease, border-color .2s ease, box-shadow .2s ease;
}
.stt-btn:hover{
  transform: translateY(-2px);
  background: rgba(17, 22, 48, 0.95);
  border-color: rgba(0, 212, 255, 0.7);
  box-shadow:
    0 12px 28px -8px rgba(0,0,0,.6),
    0 0 0 1px rgba(0, 212, 255, 0.15),
    0 0 24px -4px rgba(0, 212, 255, .5);
}
.stt-btn:active{ transform: translateY(0); }
.stt-btn:focus-visible{
  outline: 2px solid #00D4FF;
  outline-offset: 2px;
}

html:not(.dark) .stt-btn{
  background: rgba(255,255,255,0.92);
  border-color: rgba(0, 212, 255, 0.35);
  color: #0EA5C4;
}
html:not(.dark) .stt-btn:hover{
  background: rgba(255,255,255,1);
  border-color: rgba(0, 212, 255, 0.6);
}

/* Larger tap target on very small screens */
@media (max-width: 480px){
  .stt-btn{ right: 1rem; bottom: 1rem; width: 42px; height: 42px; }
}

.stt-fade-enter-active,
.stt-fade-leave-active{ transition: opacity .25s ease, transform .25s ease; }
.stt-fade-enter-from,
.stt-fade-leave-to{ opacity: 0; transform: translateY(10px); }
</style>
