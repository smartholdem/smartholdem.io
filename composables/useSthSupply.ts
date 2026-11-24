// STH supply metrics — burned amount is read from the SmartHoldem node API
// (balance of the official burn address) at build / prerender time, so the
// real numbers are baked into static HTML + JSON-LD for search engines and
// AI agents. Client silently refreshes once after mount.
//
//   Total Supply  = 249,770,000 STH (fixed)
//   Burned        = burnAddress.balance / 10^8   (rounded UP to whole STH)
//   Circulating   = Total Supply - Burned         (rounded DOWN to whole STH)

export const STH_TOTAL_SUPPLY = 249_770_000
export const STH_BURN_ADDRESS = 'STHsmartHoLdemBurnAddrHereXXXmUW7f'
export const STH_BURN_EXPLORER_URL = `https://explorer.smartholdem.io/wallet/${STH_BURN_ADDRESS}`
const BURN_API = `https://node0.smartholdem.io/api/wallets/${STH_BURN_ADDRESS}`
const FALLBACK_BURNED_RAW = 10100000000073 // last known value (arktoshi, 1e-8 STH)

export interface SthSupply {
  total: number
  burned: number
  circulating: number
  live: boolean
}

function compute (rawBalance: number, live: boolean): SthSupply {
  const burnedExact = rawBalance / 1e8
  return {
    total: STH_TOTAL_SUPPLY,
    burned: Math.ceil(burnedExact),
    circulating: Math.floor(STH_TOTAL_SUPPLY - burnedExact),
    live
  }
}

async function fetchSupply (): Promise<SthSupply> {
  try {
    const res: any = await $fetch(BURN_API, { timeout: 8000 })
    const raw = Number(res?.data?.balance)
    if (!Number.isFinite(raw) || raw < 0) throw new Error('bad balance')
    return compute(raw, true)
  } catch {
    return compute(FALLBACK_BURNED_RAW, false)
  }
}

let serverCache: Promise<SthSupply> | null = null

export function useSthSupply () {
  const { data } = useAsyncData<SthSupply>(
    'sth-supply',
    () => {
      if (import.meta.server) {
        if (!serverCache) serverCache = fetchSupply()
        return serverCache
      }
      return fetchSupply()
    },
    { default: () => compute(FALLBACK_BURNED_RAW, false) }
  )

  if (import.meta.client) {
    onMounted(async () => {
      const fresh = await fetchSupply()
      if (fresh.live) data.value = fresh
    })
  }

  return { supply: data }
}
