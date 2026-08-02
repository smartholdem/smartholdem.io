// BreadcrumbList JSON-LD with localized names and locale-aware absolute URLs.
// "Home" is prepended automatically.
// Usage: useBreadcrumbLd([{ key: 'nav.tokenomics', path: '/tokenomics' }])
//        useBreadcrumbLd([{ key: 'nav.news', path: '/news' }, { name: () => article.value?.title, path: `/news/${id}` }])
export function useBreadcrumbLd(items: Array<{ key?: string; name?: (() => string) | string; path: string }>) {
  const { t } = useI18n()
  const localePath = useLocalePath()
  const config = useRuntimeConfig()
  const base = (config.public.siteUrl as string).replace(/\/+$/, '')

  const abs = (p: string) => {
    const lp = localePath(p) || p
    return `${base}${lp === '/' ? '' : lp}` || base
  }

  useHead({
    script: [{
      type: 'application/ld+json',
      innerHTML: () => JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: t('nav.home'), item: abs('/') },
          ...items.map((it, i) => ({
            '@type': 'ListItem',
            position: i + 2,
            name: it.key ? t(it.key) : (typeof it.name === 'function' ? it.name() : it.name) || '',
            item: abs(it.path)
          }))
        ]
      })
    }]
  })
}
