// SmartNet (decentralized network) ecosystem links.
// Used automatically when the site runs inside the SmartNet client
// (detected via window.__SMARTNET__). See composables/useSmartNet.ts.
export const SITE_LINKS_SMARTNET = {
  xbtsDex: 'sth://Sfu4R7bhRcth9iPZoVQ6jw3hYm1o69QDjT/trading/XBTSX.STH_XBTSX.USDT',
  dexTrade: 'https://dex-trade.com/ru/spot/trading/STHUSDT?interface=classic',
  wallet: '#',
  explorer: 'sth://explorer',
  explorerWallet: 'sth://explorer/wallet/',
  api: 'https://wiki.smartholdem.io',
  // DevHub is published as a standalone SmartNet dApp with its own CID.
  // Built via `yarn docs:build:smartnet` (base '/', outDir docs-dist-smartnet/)
  // and pinned to the address below.
  devhub: 'sth://Sc4vFU8srmG3HjMqAvXRxUZ1AqW2H5dP14',
  githubSth: 'https://github.com/smartholdem',
  githubNetfory: 'https://github.com/NETFORY',
  telegram: 'https://t.me/smartholdem',
  twitter: 'https://x.com/smartholdem'
}

export const useSiteLinksSmartNet = () => SITE_LINKS_SMARTNET
