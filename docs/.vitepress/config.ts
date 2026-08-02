import { defineConfig } from 'vitepress'

// SmartHoldem Developer Hub — VitePress config
// ---------------------------------------------------------------------------
// Dual-target build:
//  • Default (`yarn docs:build`): serves as `/devhub/` under the main site,
//    output → `/app/docs-dist/`, merged into `.output/public/devhub/`.
//  • SmartNet (`yarn docs:build:smartnet`): serves as a standalone SmartNet
//    dApp at the root of its own CID, output → `/app/docs-dist-smartnet/`,
//    published to sth://Sc4vFU8srmG3HjMqAvXRxUZ1AqW2H5dP14.
//
// Switched via env: DOCS_TARGET=smartnet → base '/', outDir '../docs-dist-smartnet'.
// ---------------------------------------------------------------------------
const IS_SMARTNET = process.env.DOCS_TARGET === 'smartnet'
const BASE = IS_SMARTNET ? '/' : '/devhub/'
const OUT_DIR = IS_SMARTNET ? '../docs-dist-smartnet' : '../docs-dist'

export default defineConfig({
  base: BASE,
  outDir: OUT_DIR,

  title: 'SmartHoldem Developer Hub',
  description: 'Official SmartHoldem API, SDK, and Core documentation.',
  cleanUrls: true,
  lastUpdated: true,
  ignoreDeadLinks: [
    // Legacy wiki relative links that were converted from the original HTML source.
    /^\/en\//,
    // External smartholdem community pages that may be transiently unreachable.
    /smartholdem\.io/
  ],

  head: [
    ['link', { rel: 'icon', href: `${BASE}favicon.png` }],
    ['meta', { name: 'theme-color', content: '#FF5A0A' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'SmartHoldem Developer Hub' }],
    ['meta', { property: 'og:description', content: 'Official SmartHoldem API, SDK, and Core documentation.' }],
    ['meta', { property: 'og:image', content: 'https://smartholdem.io/images/blockchain/blockchain-og.jpg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:site', content: '@smartholdem' }],
    ['link', {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap'
    }]
  ],

  markdown: {
    lineNumbers: true,
    theme: 'github-dark',
    toc: { level: [2, 3] }
  },

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'SmartHoldem DevHub',

    nav: [
      { text: '← Back to Site', link: 'https://smartholdem.io/' },
      { text: 'Home', link: '/' },
      { text: 'API', link: '/api/', activeMatch: '^/api/' },
      {
        text: 'SDK',
        activeMatch: '^/sdk/',
        items: [
          { text: 'Installation', link: '/sdk/installation' },
          { text: 'Client', link: '/sdk/client' },
          { text: 'Crypto', link: '/sdk/crypto' },
          { text: 'Examples', link: '/sdk/examples' }
        ]
      },
      {
        text: 'Core',
        activeMatch: '^/core/',
        items: [
          { text: 'Data Models', link: '/core/data-models' },
          { text: 'Environment Variables', link: '/core/environment-variables' },
          { text: 'Transaction Nonce', link: '/core/nonce' }
        ]
      },
      {
        text: 'SmartNet',
        activeMatch: '^/smartnet/',
        items: [
          { text: 'Overview', link: '/smartnet/overview' },
          { text: 'App SDK', link: '/smartnet/app-sdk' },
          { text: 'Tracker & Seeder Economics', link: '/smartnet/tracker' }
        ]
      },
      {
        text: 'Guides',
        activeMatch: '^/guides/',
        items: [
          { text: 'Building a dApp', link: '/guides/dapp-development' }
        ]
      }
    ],

    sidebar: {
      '/': [
        {
          text: 'Introduction',
          items: [
            { text: 'Overview', link: '/' }
          ]
        },
        {
          text: 'API',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/api/' },
            { text: 'Endpoints Reference', link: '/api/endpoints' }
          ]
        },
        {
          text: 'SDK',
          collapsed: false,
          items: [
            { text: 'Installation', link: '/sdk/installation' },
            { text: 'Client', link: '/sdk/client' },
            { text: 'Crypto', link: '/sdk/crypto' },
            { text: 'Examples', link: '/sdk/examples' }
          ]
        },
        {
          text: 'Core Concepts',
          collapsed: false,
          items: [
            { text: 'Data Models', link: '/core/data-models' },
            { text: 'Transaction Nonce', link: '/core/nonce' },
            { text: 'Environment Variables', link: '/core/environment-variables' }
          ]
        },
        {
          text: 'SmartNet · Web 4.0',
          collapsed: false,
          items: [
            { text: 'Overview', link: '/smartnet/overview' },
            { text: 'App SDK', link: '/smartnet/app-sdk' },
            { text: 'Tracker & Seeder Economics', link: '/smartnet/tracker' }
          ]
        },
        {
          text: 'Guides',
          collapsed: false,
          items: [
            { text: 'Building a dApp for SmartNet', link: '/guides/dapp-development' }
          ]
        },
        {
          text: 'External',
          collapsed: true,
          items: [
            { text: 'Main Website ↗', link: 'https://smartholdem.io' },
            { text: 'Block Explorer ↗', link: 'https://explorer.smartholdem.io' },
            { text: 'Wallet ↗', link: 'https://wallet.smartholdem.io' },
            { text: 'GitHub — sth-core ↗', link: 'https://github.com/smartholdem/sth-core' },
            { text: 'Telegram ↗', link: 'https://t.me/smartholdem' }
          ]
        }
      ]
    },

    search: {
      provider: 'local',
      options: {
        detailedView: true
      }
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/smartholdem' },
      { icon: 'twitter', link: 'https://x.com/smartholdem' }
    ],

    footer: {
      message: 'Code is the Law. Zero Infrastructure. Absolute Autonomy.',
      copyright: '© 2026 SmartHoldem Core Team · NETFORY · SmartNet Protocols'
    },

    editLink: {
      pattern: 'https://github.com/smartholdem/smartholdem-web/edit/main/docs/:path',
      text: 'Suggest an edit on GitHub'
    },

    outline: { level: [2, 3], label: 'On this page' },
    docFooter: { prev: 'Previous', next: 'Next' },
    darkModeSwitchLabel: 'Theme',
    returnToTopLabel: 'Back to top',
    sidebarMenuLabel: 'Menu'
  }
})
