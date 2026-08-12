// HowTo JSON-LD schema — emits schema.org/HowTo structured data so search
// engines and AI answer engines (Bing, DuckDuckGo, Perplexity, ChatGPT,
// Gemini) can present the page as a step-by-step guide with rich cards.
//
// Note: Google deprecated HowTo rich results in Google Search in Sep 2023
// (they still parse the markup, just don't render the rich card). Bing,
// Perplexity, ChatGPT and other assistants continue to use HowTo data.
//
// Usage:
//   useHowToLd({
//     name: t('getSth.seo.title'),
//     description: t('getSth.seo.description'),
//     totalTime: 'PT10M',  // ISO 8601 duration, optional
//     supply: [t('getSth.supply.wallet')],  // items you need
//     tool: [t('getSth.tool.browser')],     // tools required
//     steps: [
//       { name: t('getSth.step1.name'), text: t('getSth.step1.text'),
//         url: 'https://smartholdem.io/get-sth#wallet' },
//       ...
//     ]
//   })
import type { ComputedRef } from 'vue'

export interface HowToStep {
  name: string
  text: string
  url?: string
  image?: string
}

export interface HowToConfig {
  name: string
  description?: string
  totalTime?: string          // ISO 8601, e.g. "PT10M"
  estimatedCost?: { currency: string; value: string | number }
  supply?: string[]
  tool?: string[]
  image?: string | string[]
  steps: HowToStep[]
}

type ConfigInput = HowToConfig | ComputedRef<HowToConfig> | (() => HowToConfig)

export function useHowToLd(config: ConfigInput) {
  const { public: pub } = useRuntimeConfig()
  const baseUrl = (pub.siteUrl as string).replace(/\/+$/, '')

  // Strip HTML: Google's HowTo validator accepts a very limited HTML subset
  // (<br>, <em>, <strong>, <p>). Plain-text is always the safest and gives
  // the cleanest AI-assistant citations, so we normalise to plain text.
  const strip = (s: string) =>
    String(s || '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim()

  // Ensure any relative URL is upgraded to an absolute one (schema.org
  // requires absolute URLs in `url` fields).
  const abs = (u?: string) => {
    if (!u) return undefined
    if (/^https?:\/\//i.test(u)) return u
    return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`
  }

  const resolve = (): HowToConfig => {
    if (typeof config === 'function') return (config as () => HowToConfig)()
    if (config && typeof (config as any).value !== 'undefined') return (config as ComputedRef<HowToConfig>).value
    return config as HowToConfig
  }

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: () => {
        const c = resolve()
        if (!c || !Array.isArray(c.steps) || !c.steps.length) return '{}'

        const doc: any = {
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: strip(c.name),
          step: c.steps
            .filter((s) => s && s.name && s.text)
            .map((s, i) => {
              const step: any = {
                '@type': 'HowToStep',
                position: i + 1,
                name: strip(s.name),
                text: strip(s.text)
              }
              const u = abs(s.url)
              if (u) step.url = u
              if (s.image) step.image = abs(s.image)
              return step
            })
        }

        if (c.description) doc.description = strip(c.description)
        if (c.totalTime) doc.totalTime = c.totalTime
        if (c.image) {
          const imgs = Array.isArray(c.image) ? c.image : [c.image]
          doc.image = imgs.map(abs).filter(Boolean)
        }
        if (c.estimatedCost) {
          doc.estimatedCost = {
            '@type': 'MonetaryAmount',
            currency: c.estimatedCost.currency,
            value: String(c.estimatedCost.value)
          }
        }
        if (c.supply?.length) {
          doc.supply = c.supply.map((s) => ({ '@type': 'HowToSupply', name: strip(s) }))
        }
        if (c.tool?.length) {
          doc.tool = c.tool.map((s) => ({ '@type': 'HowToTool', name: strip(s) }))
        }

        return JSON.stringify(doc)
      }
    }]
  })
}
