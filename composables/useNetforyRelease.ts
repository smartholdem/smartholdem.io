// Latest GitHub release for a repo (Netfory Client, SmartHoldem PQ node, ...).
//
// SEO strategy: the version is fetched at build / prerender time inside
// useAsyncData, so it is baked into the static HTML (crawlers and AI agents
// see "vX.Y.Z" without running JS). A module-level promise cache per repo
// guarantees only ONE GitHub request per `nuxt generate` process — avoiding
// the 60 req/h unauthenticated rate limit across 18 locales.
// On the client we silently refresh once after mount so a static build never
// shows a stale version for long.

export const NETFORY_RELEASES_URL = 'https://github.com/NETFORY/netfory/releases'
export const STH_CORE_PQ_RELEASES_URL = 'https://github.com/smartholdem/sth-core-pq/releases'

export interface GithubReleaseInfo {
  version: string
  url: string
  publishedAt: string | null
}
export type NetforyReleaseInfo = GithubReleaseInfo

const serverCache = new Map<string, Promise<GithubReleaseInfo | null>>()

async function fetchLatest (repo: string, fallbackUrl: string): Promise<GithubReleaseInfo | null> {
  try {
    const data: any = await $fetch(`https://api.github.com/repos/${repo}/releases/latest`, {
      headers: { Accept: 'application/vnd.github+json' },
      timeout: 8000
    })
    const tag = String(data?.tag_name || '').trim()
    if (!tag) return null
    return {
      version: tag.replace(/^v/i, ''),
      url: data?.html_url || fallbackUrl,
      publishedAt: data?.published_at || null
    }
  } catch {
    return null
  }
}

export function useGithubRelease (repo: string, releasesUrl: string) {
  const { data, refresh } = useAsyncData<GithubReleaseInfo | null>(
    `gh-release-${repo}`,
    () => {
      if (import.meta.server) {
        if (!serverCache.has(repo)) serverCache.set(repo, fetchLatest(repo, releasesUrl))
        return serverCache.get(repo)!
      }
      return fetchLatest(repo, releasesUrl)
    },
    { default: () => null }
  )

  if (import.meta.client) {
    onMounted(async () => {
      const fresh = await fetchLatest(repo, releasesUrl)
      if (fresh) data.value = fresh
    })
  }

  return { release: data, refresh, releasesUrl }
}

export function useNetforyRelease () {
  return useGithubRelease('NETFORY/netfory', NETFORY_RELEASES_URL)
}

export function useSthCorePqRelease () {
  return useGithubRelease('smartholdem/sth-core-pq', STH_CORE_PQ_RELEASES_URL)
}
