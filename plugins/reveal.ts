// Universal scroll-reveal directive.
// Registered on both server & client so SSR can resolve `v-reveal`.
// The IntersectionObserver only runs in the browser.
export default defineNuxtPlugin((nuxtApp) => {
  let io: IntersectionObserver | null = null
  if (import.meta.client) {
    io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io?.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12 }
    )
  }

  nuxtApp.vueApp.directive('reveal', {
    // no-op on server render
    getSSRProps() {
      return {}
    },
    mounted(el: HTMLElement, binding: any) {
      el.classList.add('reveal')
      if (binding.value) el.style.transitionDelay = `${binding.value}ms`
      if (io) io.observe(el)
      else el.classList.add('is-visible')
    },
    unmounted(el: HTMLElement) {
      if (io) io.unobserve(el)
    }
  })
})
