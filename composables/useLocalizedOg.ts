// Localized OpenGraph helpers: og:locale, og:locale:alternate and the
// locale-aware absolute page URL (for og:url + canonical).
// Usage: const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/white-paper')
export function useLocalizedOg(path: string) {
  const { locale, locales } = useI18n()
  const localePath = useLocalePath()
  const config = useRuntimeConfig()
  const base = (config.public.siteUrl as string).replace(/\/+$/, '')

  // BCP-47 (en-US) -> OpenGraph locale (en_US), with FB-specific exceptions.
  const toOg = (lang: string) => {
    const special: Record<string, string> = { 'zh-Hans': 'zh_CN', 'ar-SA': 'ar_AR' }
    return special[lang] || lang.replace('-', '_')
  }

  const ogLocale = computed(() => {
    const cur = (locales.value as any[]).find(l => l.code === locale.value)
    return toOg(cur?.language || 'en-US')
  })

  const ogLocaleAlternate = computed(() =>
    (locales.value as any[]).filter(l => l.code !== locale.value).map(l => toOg(l.language))
  )

  // Locale-prefixed absolute URL, no trailing slash (matches sitemap + canonical policy).
  const pageUrl = computed(() => {
    const p = localePath(path) || path
    return `${base}${p === '/' ? '' : p}` || base
  })

  // Canonical for pages whose MAIN CONTENT exists only in English (news
  // articles, White Paper, Executive Summary). Locale variants only translate
  // the UI chrome, so they point their canonical to the English original —
  // otherwise Google reports them as "Duplicate, Google chose different
  // canonical than user".
  const canonicalEnUrl = computed(() => `${base}${path === '/' ? '' : path}` || base)

  return { ogLocale, ogLocaleAlternate, pageUrl, canonicalEnUrl }
}
