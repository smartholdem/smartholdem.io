// SoftwareApplication / WebApplication ItemList JSON-LD — surfaces each dApp
// on /dapps as an individual schema.org SoftwareApplication so Google Rich
// Results and AI assistants can present them as app cards with category,
// operating system, price and links. Wrapping the collection in an ItemList
// preserves the position (ranking) each app has on the page.
//
// Usage:
//   useAppListLd({
//     name: t('dapps.title'),
//     apps: computed(() => [
//       { name: 'SmartBlocks 2048', description: '...', url: '...',
//         image: '...', category: 'GameApplication',
//         applicationSubCategory: 'Play to Earn',
//         operatingSystem: 'Any', price: 0, priceCurrency: 'USD',
//         author: 'SmartHoldem' },
//       ...
//     ])
//   })
import type { ComputedRef } from 'vue'

export interface AppLdEntry {
  name: string
  description?: string
  url?: string
  image?: string
  category?: string                 // schema.org SoftwareApplication category
  applicationSubCategory?: string
  operatingSystem?: string
  price?: number | string
  priceCurrency?: string
  author?: string
  type?: 'SoftwareApplication' | 'WebApplication' | 'MobileApplication' | 'GameApplication'
  keywords?: string
  ratingValue?: number
  ratingCount?: number
}

interface AppListConfig {
  name: string
  apps: AppLdEntry[]
  url?: string
}

type ConfigInput = AppListConfig | ComputedRef<AppListConfig> | (() => AppListConfig)

export function useAppListLd(config: ConfigInput) {
  const { public: pub } = useRuntimeConfig()
  const baseUrl = (pub.siteUrl as string).replace(/\/+$/, '')

  const strip = (s: string) =>
    String(s || '').replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim()

  const abs = (u?: string) => {
    if (!u) return undefined
    if (/^https?:\/\//i.test(u)) return u
    return `${baseUrl}${u.startsWith('/') ? '' : '/'}${u}`
  }

  const resolve = (): AppListConfig => {
    if (typeof config === 'function') return (config as () => AppListConfig)()
    if (config && typeof (config as any).value !== 'undefined') return (config as ComputedRef<AppListConfig>).value
    return config as AppListConfig
  }

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: () => {
        const c = resolve()
        if (!c || !Array.isArray(c.apps) || !c.apps.length) return '{}'

        const doc: any = {
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          name: strip(c.name),
          itemListOrder: 'https://schema.org/ItemListOrderAscending',
          numberOfItems: c.apps.length,
          itemListElement: c.apps.map((app, i) => {
            const item: any = {
              '@type': app.type || 'SoftwareApplication',
              name: strip(app.name),
              operatingSystem: app.operatingSystem || 'Any (Web, Telegram, Android, iOS)',
              applicationCategory: app.category || 'UtilitiesApplication'
            }
            if (app.applicationSubCategory) item.applicationSubCategory = app.applicationSubCategory
            if (app.description) item.description = strip(app.description)
            const u = abs(app.url); if (u) { item.url = u }
            const img = abs(app.image); if (img) item.image = img
            if (app.keywords) item.keywords = app.keywords
            if (app.author) {
              item.author = { '@type': 'Organization', name: app.author, url: baseUrl }
              item.publisher = { '@type': 'Organization', name: app.author, url: baseUrl }
            }
            // Every SmartHoldem dApp is free to install; the "cost" is optional
            // in-app STH usage which we do NOT charge for install. Google
            // rewards SoftwareApplication schema most when priceRange is
            // explicit — mark them as free.
            item.offers = {
              '@type': 'Offer',
              price: String(app.price ?? 0),
              priceCurrency: app.priceCurrency || 'USD',
              availability: 'https://schema.org/InStock'
            }
            if (app.ratingValue && app.ratingCount) {
              item.aggregateRating = {
                '@type': 'AggregateRating',
                ratingValue: String(app.ratingValue),
                ratingCount: String(app.ratingCount),
                bestRating: '5',
                worstRating: '1'
              }
            }
            return { '@type': 'ListItem', position: i + 1, item }
          })
        }
        if (c.url) doc.url = abs(c.url)
        return JSON.stringify(doc)
      }
    }]
  })
}
