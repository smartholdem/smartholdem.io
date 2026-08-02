// SmartNet runtime detection + adaptive ecosystem links + wallet bridge.
//
// The SmartNet client injects `window.__SMARTNET__` (frozen, forge-proof) and
// the wallet provider `window.smartholdem` BEFORE any page script runs.
// In a plain browser both are undefined and the site behaves normally.
//
// SSG note: detection is client-only. The flag starts `false` during SSR and
// the initial hydration render (matching the server output), then flips on the
// client via the smartnet.client.ts plugin (app:mounted) — no hydration
// mismatch, just a transparent href swap.
import { ref, computed, readonly } from 'vue'
import { SITE_LINKS } from './useSiteLinks'
import { SITE_LINKS_SMARTNET } from './useSiteLinksSmartNet'

// Module-level singleton — every useSmartNet() call shares the same flag.
const _isSmartNet = ref(false)

/** Read the frozen runtime descriptor injected by the SmartNet client. */
function readRuntime(): any | null {
  return (typeof window !== 'undefined' && (window as any).__SMARTNET__) || null
}

/** Client-only detection. Called once from the smartnet.client.ts plugin. */
export function detectSmartNet(): void {
  const rt = readRuntime()
  _isSmartNet.value = !!rt?.isSmartNet
}

export function useSmartNet() {
  /** True when running inside the SmartNet client webview (reactive). */
  const isSmartNet = readonly(_isSmartNet)

  /** Active ecosystem links — SmartNet variant inside the client, else browser. */
  const links = computed(() => (_isSmartNet.value ? SITE_LINKS_SMARTNET : SITE_LINKS))

  /** True when a SmartHoldem wallet bridge is reachable. */
  function hasWallet(): boolean {
    return typeof window !== 'undefined' && !!(window as any).smartholdem?.isSmartHoldem
  }

  /**
   * Slide the SmartNet client's built-in wallet panel out — for the app's
   * "Wallet" menu item. Uses the dedicated `openWallet` bridge method
   * (client >= 1.63.10) and falls back to a connect handshake on older
   * clients (which also surfaces the wallet UI). No signing, no dialog.
   */
  async function openWallet(): Promise<void> {
    const p = typeof window !== 'undefined' ? (window as any).smartholdem : null
    if (!p) {
      console.warn('[SmartNet] wallet bridge unavailable — open this app inside the SmartNet client.')
      return
    }
    try {
      if (typeof p.openWallet === 'function') await p.openWallet()
      else if (typeof p.getAccount === 'function') await p.getAccount()
    } catch (e) {
      console.warn('[SmartNet] openWallet failed:', e)
    }
  }

  return { isSmartNet, links, hasWallet, openWallet, detectSmartNet }
}
