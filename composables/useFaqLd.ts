// FAQPage JSON-LD schema — emits schema.org/FAQPage structured data so
// Google Rich Results, AI assistants and answer engines can quote answers
// directly, and so questions can appear as expandable rich snippets in SERPs.
//
// Usage:
//   useFaqLd([
//     { q: 'What is Web 4.0?', a: 'A serverless network architecture...' },
//     { q: 'How does LAN-First work?', a: 'Netfory clients fall back to mDNS...' }
//   ])
//
// Or with reactive / i18n content:
//   useFaqLd(computed(() => [
//     { q: t('mission.faq.q1'), a: t('mission.faq.a1') },
//     { q: t('mission.faq.q2'), a: t('mission.faq.a2') }
//   ]))
import type { ComputedRef } from 'vue'

export interface FaqEntry {
  q: string
  a: string
}

export function useFaqLd(items: FaqEntry[] | ComputedRef<FaqEntry[]> | (() => FaqEntry[])) {
  const resolve = (): FaqEntry[] => {
    if (typeof items === 'function') return (items as () => FaqEntry[])()
    if (items && typeof (items as any).value !== 'undefined') return (items as ComputedRef<FaqEntry[]>).value || []
    return (items as FaqEntry[]) || []
  }

  // Strip any HTML from the answer — Google's FAQPage validator accepts a
  // limited HTML subset, but plain-text answers are the safest and produce
  // the cleanest AI-assistant quotations.
  const stripHtml = (s: string) =>
    String(s || '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim()

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: resolve()
          .filter((it) => it && it.q && it.a)
          .map((it) => ({
            '@type': 'Question',
            name: stripHtml(it.q),
            acceptedAnswer: {
              '@type': 'Answer',
              text: stripHtml(it.a)
            }
          }))
      })
    }]
  })
}
