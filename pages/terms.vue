<template>
  <div class="container-x py-16 sm:py-20">
    <!-- ========================= 1. HEADER ========================= -->
    <header class="mx-auto max-w-3xl text-center">
      <p class="eyebrow mb-4">{{ t('terms.eyebrow') }}</p>
      <h1 class="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
        Terms of Use &amp; Legal Disclaimer
      </h1>
      <p class="mono mt-3 text-sm text-secondary">Effective Date: January 1, 2026</p>
      <div class="mx-auto mt-8 h-px w-32" style="background:linear-gradient(90deg, transparent, rgba(0,212,255,0.4), transparent)"></div>
    </header>

    <!-- ========================= CONTENT ========================= -->
    <article class="terms-prose mx-auto mt-12 max-w-3xl text-base leading-relaxed text-secondary">
      <!-- 2. CORE DISCLAIMERS (highlighted) -->
      <section
        class="relative rounded-xl border-l-4 border-l-neon-cyan/70 border-y border-r border-y-white/5 border-r-white/5 p-6 sm:p-7"
        style="background: rgba(21, 27, 59, 0.5)"
      >
        <h2 class="mt-0 text-xl font-bold text-white sm:text-2xl">1. No Financial or Investment Advice</h2>
        <p class="mt-4">
          STH is a native Layer-1 Web3 &amp; Web4 Coin. As the foundational asset of the SmartHoldem
          DPoS blockchain, it powers real-world Web3 utilities (non-custodial wallets, DeFi, gaming)
          and serves as the deflationary fuel for Web 4.0 decentralized physical infrastructure
          <span class="mono text-sm text-white/80">(DePIN)</span>. It is
          <strong class="text-white">not</strong> a security, a surrogate currency, or a legally
          binding investment vehicle. Nothing on this website, in our documentation, or in our
          communications constitutes financial, legal, or investment advice. Any acquisition,
          holding, or use of STH is done entirely at your own risk.
        </p>
      </section>

      <!-- 3. EXPERIMENTAL TECHNOLOGY -->
      <section class="mt-12">
        <h2 class="text-xl font-bold text-white sm:text-2xl">2. Experimental Technology &amp; &ldquo;As Is&rdquo; Provision</h2>
        <p class="mt-4">
          Web 4.0, decentralized P2P networks <span class="mono text-sm text-white/80">(SmartNet)</span>,
          and blockchain technologies are cutting-edge and inherently experimental. The Licensed
          Technology, Netfory client, dApps, and all other materials provided by SmartHoldem are
          provided on an <strong class="text-white">&ldquo;as is&rdquo;</strong> and
          <strong class="text-white">&ldquo;as available&rdquo;</strong> basis, &ldquo;with all
          faults&rdquo; and without warranty of any kind.
        </p>
        <p class="mt-4">
          SmartHoldem and its affiliates expressly disclaim all warranties, whether express, implied,
          or statutory, including but not limited to warranties of merchantability, fitness for a
          particular purpose, non-infringement, or uninterrupted, bug-free, or error-free operation.
          We do not guarantee that the protocol will meet your requirements or that any defects can
          or will be corrected.
        </p>
      </section>

      <!-- 4. USER RESPONSIBILITY -->
      <section class="mt-12">
        <h2 class="text-xl font-bold text-white sm:text-2xl">3. User Responsibility &amp; Non-Custodial Architecture</h2>
        <p class="mt-4">
          SmartHoldem is a non-custodial protocol.
          <strong class="text-white">You are solely responsible for the security of your private
          keys, seed phrases, and local device.</strong>
        </p>
        <ul class="mt-4 space-y-3 pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan"></span>
            <span>SmartHoldem Core Team cannot recover lost credentials, reverse transactions, or restore access to your wallet.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan"></span>
            <span>You agree that your use or inability to use SmartHoldem coins (STH), Netfory, or any associated dApps is carried out solely at your own risk.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan"></span>
            <span>You explicitly agree not to hold the SmartHoldem Team, contributors, or node operators responsible for any losses arising from user error, phishing, or local security breaches.</span>
          </li>
        </ul>
      </section>

      <!-- 5. LIMITATION OF LIABILITY -->
      <section class="mt-12">
        <h2 class="text-xl font-bold text-white sm:text-2xl">4. Limitation of Liability</h2>
        <p class="mt-4">
          To the maximum extent permitted by applicable law, neither SmartHoldem, its licensors,
          affiliates, nor any of its service providers or node operators, shall be liable in any way
          for loss or damage of any kind resulting from the use or inability to use the SmartHoldem
          ecosystem.
        </p>
        <p class="mt-4">
          This includes, but is not limited to: loss of goodwill, work stoppage, computer failure or
          malfunction, loss of data, or any and all other commercial damages or losses. In no event
          will SmartHoldem be liable for any indirect, incidental, consequential, special, punitive,
          or exemplary damages, even if advised of the possibility of such damages.
        </p>
      </section>

      <!-- 6. REGULATORY COMPLIANCE -->
      <section class="mt-12">
        <h2 class="text-xl font-bold text-white sm:text-2xl">5. Regulatory Compliance</h2>
        <p class="mt-4">
          Blockchain and cryptographic technologies are subject to evolving regulatory frameworks
          worldwide. Users are solely responsible for ensuring that their acquisition, holding,
          staking, and use of STH coins comply with the local laws, regulations, and tax obligations
          of their respective jurisdictions. SmartHoldem does not guarantee that STH will remain
          unrestricted in all regions.
        </p>
      </section>

      <!-- 7. INTELLECTUAL PROPERTY -->
      <section class="mt-12">
        <h2 class="text-xl font-bold text-white sm:text-2xl">6. Intellectual Property</h2>
        <p class="mt-4">
          The core infrastructure of SmartHoldem and Netfory is proudly open-source. However, the
          SmartHoldem brand, logos, specific UI/UX designs, and marketing materials are protected
          intellectual property. Unauthorized commercial use of the brand is strictly prohibited.
        </p>
      </section>

      <!-- 8. CONTACT -->
      <section class="mt-12 border-t border-white/10 pt-10 text-center">
        <h2 class="text-xl font-bold text-white sm:text-2xl">7. Contact Us</h2>
        <p class="mx-auto mt-4 max-w-xl">
          For legal inquiries, official communications, or questions regarding these terms, please
          contact us at:
        </p>
        <p class="mt-5">
          <a
            href="mailto:contact@smartholdem.io"
            class="mono inline-flex items-center gap-2 text-base font-semibold text-neon-cyan hover:underline"
          >
            <Mail class="h-4 w-4" />
            contact@smartholdem.io
          </a>
        </p>
      </section>
    </article>
  </div>
</template>

<script setup>
import { Mail } from 'lucide-vue-next'
const { t } = useI18n()
const config = useRuntimeConfig()

// SEO — indexable legal document, localized (18 locales)
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/terms')
useBreadcrumbLd([{ key: 'nav.terms', path: '/terms' }])
useSeoMeta({
  title: () => t('terms.seo.title'),
  description: () => t('terms.seo.description'),
  ogTitle: () => t('terms.seo.title'),
  ogDescription: () => t('terms.seo.description'),
  ogType: 'article',
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  robots: 'index, follow'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style scoped>
/* Slightly larger base for legal comfort; no interactive animations. */
.terms-prose { font-size: 16px; line-height: 1.75; }
.terms-prose strong { color: var(--text); font-weight: 600; }
.terms-prose a { color: #00D4FF; }
.terms-prose a:hover { text-decoration: underline; }
@media (min-width: 640px) {
  .terms-prose { font-size: 17px; }
}
/* Theme-aware headings: use --text so they invert correctly in light mode. */
h1, h2 { color: var(--text); }
</style>
