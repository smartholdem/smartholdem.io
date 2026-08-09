// @ts-ignore — plain .mjs module shared with the app, sitemap and RSS
import { buildNewsSlugs } from './server/utils/newsSlug.mjs'
// SmartHoldem Netfory — Web 4.0 Platform
// Nuxt 3 · SSG (nuxt generate) · i18n (18 locales) · Tailwind · @vueuse (theme)
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },

  // Server-Side Rendering enabled -> `nuxt generate` pre-renders every route to static HTML
  ssr: true,

  // The client build fails to resolve the virtual `#app-manifest` import in this
  // environment, which silently breaks hydration. Disabling it fixes hydration
  // and is fine for a static/SSG marketing site.
  experimental: {
    appManifest: false
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      failOnError: false,
      routes: ['/', '/ru', '/sitemap.xml', '/robots.txt']
    },
    compressPublicAssets: { gzip: true, brotli: true }
  },

  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://smartholdem.io',
      newsApi: 'https://news.smartholdem.io'
    }
  },

  // Bake all news article routes + both locales into the static build,
  // and clean up the Nitro-created `dist -> .output/public` compatibility
  // symlink after each build (it interferes with git-based deploy flows
  // that use `:(exclude)dist/*` pathspecs — symlinks in pathspecs are
  // rejected by git for security).
  hooks: {
    async 'prerender:routes'(ctx) {
      // 1) Try live Strapi first — always up-to-date on a healthy build.
      let items: any[] = []
      try {
        const base = 'https://news.smartholdem.io/api/sthnews'
        const res: any = await fetch(`${base}?pagination[pageSize]=200&sort=date:desc`).then(r => r.json())
        items = res?.data || []
      } catch (e) {
        console.warn('[prerender] live news fetch failed, falling back to baked snapshot:', (e as any)?.message || e)
      }
      // 2) Fallback to the baked snapshot so every article route is generated
      //    even if the CMS is unreachable at build time.
      if (!items.length) {
        try {
          const { readFile } = await import('node:fs/promises')
          const { resolve } = await import('node:path')
          const raw = await readFile(resolve(process.cwd(), 'assets/news-snapshot.json'), 'utf-8')
          const snap = JSON.parse(raw)
          items = Array.isArray(snap) ? snap : []
        } catch (e) {
          console.warn('[prerender] snapshot read failed:', (e as any)?.message || e)
        }
      }
      const localeCodes = ['ru', 'zh', 'id', 'ko', 'th', 'es', 'vi', 'fr', 'de', 'kk', 'pt', 'uz', 'mn', 'ja', 'sw', 'ar', 'hi']
      // Canonical slug routes + legacy id routes (kept for backward compat;
      // they render with a canonical pointing to the slug URL).
      const { idToSlug } = buildNewsSlugs(items)
      for (const a of items) {
        if (a?.id == null) continue
        const slug = idToSlug.get(String(a.id))
        ctx.routes.add(`/news/${a.id}`)
        if (slug) ctx.routes.add(`/news/${slug}`)
        for (const lc of localeCodes) {
          ctx.routes.add(`/${lc}/news/${a.id}`)
          if (slug) ctx.routes.add(`/${lc}/news/${slug}`)
        }
      }
      // Ensure RSS feed is generated as a static file on build.
      ctx.routes.add('/news/rss.xml')
      console.log(`[prerender] added ${items.length} news articles (x${localeCodes.length + 1} locales) + /news/rss.xml`)
    },
    async 'nitro:build:public-assets'() {
      // Remove the auto-created `dist` symlink at the repo root if any legacy
      // Nitro version created it during static prerender.
      try {
        const { unlink, lstat } = await import('node:fs/promises')
        const { resolve } = await import('node:path')
        const link = resolve(process.cwd(), 'dist')
        const st = await lstat(link).catch(() => null)
        if (st?.isSymbolicLink()) {
          await unlink(link)
          console.log('[cleanup] removed auto-created `dist` symlink')
        }
      } catch { /* noop */ }
    },
    async close() {
      // Belt & suspenders: try again after the whole build closes, since
      // Nitro creates the symlink very late in some presets.
      try {
        const { unlink, lstat } = await import('node:fs/promises')
        const { resolve } = await import('node:path')
        const link = resolve(process.cwd(), 'dist')
        const st = await lstat(link).catch(() => null)
        if (st?.isSymbolicLink()) {
          await unlink(link)
          console.log('[cleanup] removed auto-created `dist` symlink (close hook)')
        }
      } catch { /* noop */ }
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/nuxt'
  ],

  i18n: {
    baseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://smartholdem.io',
    locales: [
      { code: 'en', name: 'English', language: 'en-US', file: 'en.json' },
      { code: 'ru', name: 'Русский', language: 'ru-RU', file: 'ru.json' },
      { code: 'zh', name: '简体中文', language: 'zh-Hans', file: 'zh.json' },
      { code: 'id', name: 'Bahasa Indonesia', language: 'id-ID', file: 'id.json' },
      { code: 'ko', name: '한국어', language: 'ko-KR', file: 'ko.json' },
      { code: 'th', name: 'ไทย', language: 'th-TH', file: 'th.json' },
      { code: 'es', name: 'Español', language: 'es-ES', file: 'es.json' },
      { code: 'vi', name: 'Tiếng Việt', language: 'vi-VN', file: 'vi.json' },
      { code: 'fr', name: 'Français', language: 'fr-FR', file: 'fr.json' },
      { code: 'de', name: 'Deutsch', language: 'de-DE', file: 'de.json' },
      { code: 'kk', name: 'Қазақ тілі', language: 'kk-KZ', file: 'kk.json' },
      { code: 'pt', name: 'Português', language: 'pt-BR', file: 'pt.json' },
      { code: 'uz', name: 'Oʻzbek tili', language: 'uz-UZ', file: 'uz.json' },
      { code: 'mn', name: 'Монгол хэл', language: 'mn-MN', file: 'mn.json' },
      { code: 'ja', name: '日本語', language: 'ja-JP', file: 'ja.json' },
      { code: 'sw', name: 'Kiswahili', language: 'sw-KE', file: 'sw.json' },
      { code: 'ar', name: 'العربية', language: 'ar-SA', file: 'ar.json', dir: 'rtl' },
      { code: 'hi', name: 'हिन्दी', language: 'hi-IN', file: 'hi.json' }
    ],
    lazy: false,
    langDir: 'locales',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    detectBrowserLanguage: false,
    // Allow inline HTML tags (e.g. <strong>) inside translation messages so
    // marketing copy can contain bold/highlight spans. Values are still our
    // own trusted content — never user-generated.
    compilation: { strictMessage: false, escapeHtml: false },
    bundle: { optimizeTranslationDirective: false }
  },

  css: ['~/assets/css/main.css', 'katex/dist/katex.min.css', 'highlight.js/styles/atom-one-dark.css'],

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/icons/favicon.ico' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-touch-icon.png' },
        { rel: 'manifest', href: '/icons/site.webmanifest' },
        { rel: 'alternate', type: 'application/rss+xml', title: 'SmartHoldem News', href: '/news/rss.xml' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'preconnect', href: 'https://news.smartholdem.io' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&display=swap' }
      ]
    }
  },

  vite: {
    server: { allowedHosts: true },
    optimizeDeps: {
      include: ['katex', 'katex/contrib/auto-render', 'mermaid', 'fuse.js', 'highlight.js', 'marked']
    }
  },

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: false
  }
})
