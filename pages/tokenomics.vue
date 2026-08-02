<template>
  <div class="tok-page">
    <!-- ========================= 1. HERO ========================= -->
    <section class="relative overflow-hidden border-b hair-border">
      <img src="/images/tokenomics/hero-tokenomics.jpg" alt="" aria-hidden="true"
           class="absolute inset-0 h-full w-full object-cover opacity-35 blur-sm" />
      <div class="absolute inset-0" style="background:radial-gradient(70% 50% at 50% 45%, transparent, rgba(10,14,39,0.85) 75%, var(--bg) 100%)"></div>

      <div class="container-x relative z-10 py-24 text-center sm:py-32">
        <p class="eyebrow mb-4">{{ t('tokenomics.hero.eyebrow') }}</p>
        <h1 class="mx-auto max-w-4xl text-4xl font-extrabold leading-tight sm:text-6xl text-white">{{ t('tokenomics.hero.title') }}</h1>
        <p class="mx-auto mt-5 max-w-2xl text-lg text-secondary">{{ t('tokenomics.hero.subtitle') }}</p>
        <p class="mt-6 text-lg font-semibold" style="color:#00D4FF">{{ t('tokenomics.hero.tagline') }}</p>

        <div class="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          <div v-for="m in heroMetrics" :key="m.label" v-reveal class="rounded-2xl border hair-border glass p-6">
            <p class="mono text-3xl font-bold" :style="`color:${m.color}`">
              <span v-if="m.animate">{{ formatNumber(counters[m.key]) }}</span>
              <span v-else>{{ m.staticValue }}</span>
              <span v-if="m.suffix" class="text-lg opacity-80"> {{ m.suffix }}</span>
            </p>
            <p class="mt-2 text-xs uppercase tracking-wider text-secondary">{{ m.label }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 1.5 WEB 4.0 EVOLUTION ========================= -->
    <section class="container-x py-24 text-center">
      <div v-reveal class="mx-auto max-w-3xl">
        <p class="eyebrow mb-3">{{ t('tokenomics.evolution.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.evolution.title') }}</h2>
      </div>

      <div v-reveal="60" class="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border hair-border glass p-4">
        <img src="/images/tokenomics/sth_web3_web4_coin.jpg" alt="Web 3.0 to Web 4.0 evolution" class="w-full rounded-xl" />
      </div>

      <p v-reveal class="mx-auto mt-8 max-w-3xl text-secondary leading-relaxed">
        <i18n-t keypath="tokenomics.evolution.text" tag="span" scope="global">
          <template #web4><strong class="text-white">{{ t('tokenomics.evolution.web4Label') }}</strong></template>
        </i18n-t>
      </p>

      <div v-reveal class="mx-auto mt-8 inline-flex items-center gap-2 rounded-xl border px-5 py-3 glass"
           style="border-color:rgba(124,58,237,0.5); box-shadow: 0 0 30px rgba(124,58,237,0.28)">
        <TrendingUp class="h-5 w-5 text-neon-purple" />
        <span class="text-sm font-semibold">{{ t('tokenomics.evolution.callout') }}</span>
      </div>
    </section>

    <!-- ========================= 2. TOKEN DISTRIBUTION ========================= -->
    <section class="container-x py-16">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/tokenomics/token-distribution.jpg" alt="Token distribution 2017" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="80" class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('tokenomics.dist.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.dist.title') }}</h2>
          <p class="mt-4 text-secondary leading-relaxed">
            <i18n-t keypath="tokenomics.dist.text" tag="span" scope="global">
              <template #supply><strong class="text-white mono">{{ t('tokenomics.dist.supplyLabel') }}</strong></template>
            </i18n-t>
          </p>

          <ul class="mt-6 space-y-2.5">
            <li v-for="d in distribution" :key="d.label" class="flex items-center gap-4 rounded-xl border hair-border surface p-4">
              <div class="mono w-16 shrink-0 text-2xl font-bold" :style="`color:${d.color}`">{{ d.pct }}%</div>
              <div class="flex-1">
                <p class="font-semibold">{{ d.label }}</p>
                <div class="mt-1.5 h-1.5 overflow-hidden rounded-full" style="background:rgba(255,255,255,0.05)">
                  <div class="h-full rounded-full transition-all duration-1000"
                       :style="`width:${d.pct}%; background:${d.color}; box-shadow:0 0 8px ${d.color}`"></div>
                </div>
              </div>
            </li>
          </ul>

          <div class="mt-6 inline-flex items-center gap-2 rounded-lg border px-4 py-2 glass" style="border-color:rgba(16,185,129,0.45)">
            <ShieldCheck class="h-4 w-4 text-neon-green" />
            <span class="text-xs font-semibold uppercase tracking-wider text-neon-green">{{ t('tokenomics.dist.badge') }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 3. EMISSION MODEL EVOLUTION ========================= -->
    <section class="container-x py-20">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal="80" class="lg:col-span-3 order-2 lg:order-1">
          <p class="eyebrow mb-3">{{ t('tokenomics.emission.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.emission.title') }}</h2>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border p-6" style="background:rgba(148,163,184,0.06); border-color:rgba(148,163,184,0.30)">
              <p class="mono text-xs uppercase tracking-wider text-secondary">{{ t('tokenomics.emission.beforeTag') }}</p>
              <h3 class="mt-2 text-lg font-semibold">{{ t('tokenomics.emission.beforeTitle') }}</h3>
              <p class="mt-3 text-sm text-secondary leading-relaxed">
                <i18n-t keypath="tokenomics.emission.beforeText" tag="span" scope="global">
                  <template #cap><strong class="mono text-white">{{ t('tokenomics.emission.beforeCap') }}</strong></template>
                </i18n-t>
              </p>
            </div>

            <div class="rounded-2xl border p-6" style="background:rgba(16,185,129,0.06); border-color:rgba(16,185,129,0.45); box-shadow: 0 0 40px -10px rgba(16,185,129,0.28)">
              <p class="mono text-xs uppercase tracking-wider text-neon-green">{{ t('tokenomics.emission.afterTag') }}</p>
              <h3 class="mt-2 text-lg font-semibold">{{ t('tokenomics.emission.afterTitle') }}</h3>
              <p class="mt-3 text-sm text-secondary leading-relaxed">
                <i18n-t keypath="tokenomics.emission.afterText" tag="span" scope="global">
                  <template #halted><strong class="text-neon-green">{{ t('tokenomics.emission.afterHalted') }}</strong></template>
                </i18n-t>
              </p>
            </div>
          </div>

          <div class="mt-6 rounded-xl border p-4 glass" style="border-color:rgba(245,158,11,0.5); box-shadow: 0 0 28px -10px rgba(245,158,11,0.35)">
            <p class="text-sm"><strong class="text-neon-gold">{{ t('tokenomics.emission.callout') }}</strong></p>
          </div>
        </div>

        <div v-reveal class="lg:col-span-2 order-1 lg:order-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/tokenomics/emission-evolution.jpg" alt="Emission evolution" class="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 5. DEFLATIONARY MECHANICS ========================= -->
    <section class="container-x py-20">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal="80" class="lg:col-span-3 order-2 lg:order-1">
          <p class="eyebrow mb-3">{{ t('tokenomics.deflation.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.deflation.title') }}</h2>

          <div class="mt-8 grid gap-4 sm:grid-cols-3">
            <div v-for="d in deflationCards" :key="d.title" class="rounded-2xl border hair-border surface p-5">
              <div class="mb-3 inline-flex h-11 w-11 items-center justify-center rounded-xl" :style="`background:${d.tint}`">
                <component :is="d.icon" class="h-5 w-5" :style="`color:${d.color}`" />
              </div>
              <h3 class="text-base font-semibold">{{ d.title }}</h3>
              <p class="mt-2 text-xs text-secondary leading-relaxed">{{ d.text }}</p>
            </div>
          </div>
        </div>

        <div v-reveal class="lg:col-span-2 order-1 lg:order-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/tokenomics/deflationary-mechanics.jpg" alt="Deflationary mechanics" class="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 6. PHYSICAL INFRASTRUCTURE BACKING ========================= -->
    <section class="container-x py-20">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/tokenomics/sth_coin_backed_by_web4.jpg" alt="Backed by real infrastructure" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="80" class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('tokenomics.backing.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.backing.title') }}</h2>

          <ul class="mt-6 space-y-3">
            <li v-for="p in physicalPoints" :key="p" class="flex gap-3 rounded-xl border hair-border surface p-4">
              <CheckCircle2 class="h-5 w-5 shrink-0 text-neon-cyan" />
              <span class="text-sm">{{ p }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- ========================= 7. STH UTILITY IN WEB 4.0 ========================= -->
    <section class="relative border-y hair-border py-20" style="background:linear-gradient(180deg, transparent, rgba(0,212,255,0.03), transparent)">
      <div class="container-x">
        <div class="grid items-start gap-10 lg:grid-cols-5">
          <div v-reveal class="lg:col-span-2">
            <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
              <img src="/images/tokenomics/sth-utility-web4.jpg" alt="STH utility in Web 4.0" class="w-full rounded-xl" />
            </div>
          </div>
          <div v-reveal="80" class="lg:col-span-3">
            <p class="eyebrow mb-3">{{ t('tokenomics.utility.eyebrow') }}</p>
            <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.utility.title') }}</h2>
            <p class="mt-2 text-secondary">{{ t('tokenomics.utility.subtitle') }}</p>
            <p class="mt-4 text-secondary leading-relaxed">
              <i18n-t keypath="tokenomics.utility.text" tag="span" scope="global">
                <template #every><strong class="text-white">{{ t('tokenomics.utility.everyLabel') }}</strong></template>
              </i18n-t>
            </p>
          </div>
        </div>

        <div class="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div v-for="u in utilityCards" :key="u.title" v-reveal
               class="group rounded-2xl border hair-border surface p-5 transition-all duration-300 hover:-translate-y-1"
               style="transition: transform .3s, box-shadow .3s, border-color .3s"
               @mouseenter="onUtilityHover($event, u.color)" @mouseleave="onUtilityLeave($event)">
            <div class="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg" :style="`background:${u.tint}`">
              <component :is="u.icon" class="h-5 w-5" :style="`color:${u.color}`" />
            </div>
            <h3 class="text-base font-semibold">{{ u.title }}</h3>
            <p class="mono mt-1 text-xs" :style="`color:${u.color}`">{{ u.cost }}</p>
            <p class="mt-2 text-xs text-secondary leading-relaxed">{{ u.text }}</p>
          </div>
        </div>

        <div v-reveal class="mt-10 rounded-2xl border hair-border glass">
          <div class="px-6 py-4"><span class="font-semibold">{{ t('tokenomics.utility.spectrumTitle') }}</span></div>
          <div class="border-t hair-border px-6 py-5">
            <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              <div v-for="item in fullUtilitySpectrum" :key="item.title"
                   class="group flex items-start gap-3 rounded-xl border hair-border surface p-3.5 transition-all duration-300 hover:-translate-y-0.5"
                   @mouseenter="(e) => onUtilityHover(e, item.color)" @mouseleave="onUtilityLeave">
                <div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" :style="`background:${item.tint}`">
                  <component :is="item.icon" class="h-4 w-4" :style="`color:${item.color}`" />
                </div>
                <span class="text-xs leading-snug pt-1">{{ item.title }}</span>
              </div>
            </div>
          </div>
        </div>

        <p v-reveal class="mx-auto mt-8 max-w-3xl text-center text-sm text-secondary">{{ t('tokenomics.utility.footer') }}</p>
      </div>
    </section>

    <!-- ========================= 8. PERPETUAL ECONOMIC LOOP ========================= -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('tokenomics.loop.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.loop.title') }}</h2>
        <p class="mt-2 text-secondary">{{ t('tokenomics.loop.subtitle') }}</p>
      </div>

      <div v-reveal="60" class="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border hair-border glass p-4">
        <img src="/images/tokenomics/economic-loop.jpg" alt="Perpetual economic loop" class="w-full rounded-xl" />
      </div>

      <div class="mt-10 grid gap-3 md:grid-cols-5">
        <div v-for="(step, i) in loopSteps" :key="step" v-reveal :style="`transition-delay:${i * 80}ms`"
             class="relative rounded-2xl border hair-border surface p-5">
          <div class="mono mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-neon-cyan/15 text-xs font-bold text-neon-cyan">{{ i + 1 }}</div>
          <p class="text-sm font-medium leading-snug">{{ step }}</p>
          <ArrowRight v-if="i < loopSteps.length - 1" class="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-neon-cyan md:block" />
        </div>
      </div>

      <p v-reveal class="mx-auto mt-8 max-w-2xl text-center text-secondary">
        <i18n-t keypath="tokenomics.loop.footer" tag="span" scope="global">
          <template #noTax><strong class="text-white">{{ t('tokenomics.loop.noTaxLabel') }}</strong></template>
        </i18n-t>
      </p>
    </section>

    <!-- ========================= 9. SEEDER ECONOMICS ========================= -->
    <section class="container-x py-16">
      <div class="grid items-start gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/tokenomics/seeder-economics.jpg" alt="Seeder economics formula" class="w-full rounded-xl" />
          </div>
        </div>

        <div v-reveal="80" class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('tokenomics.seeder.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.seeder.title') }}</h2>

          <div class="mt-5 rounded-xl border p-5 glass" style="border-color:rgba(0,212,255,0.4)">
            <p class="mono text-[11px] uppercase tracking-wider text-neon-cyan">{{ t('tokenomics.seeder.formulaLabel') }}</p>
            <p class="mono mt-2 text-sm leading-relaxed text-white break-all">
              Estimated = (Base + seededGb × density + activeApps × PerApp) × K<sub>up</sub>
            </p>
          </div>

          <h3 class="mt-6 mono text-xs uppercase tracking-wider text-secondary">{{ t('tokenomics.seeder.paramsTitle') }}</h3>
          <div class="mt-3 overflow-hidden rounded-xl border hair-border">
            <table class="w-full text-sm">
              <thead>
                <tr class="text-left" style="background:rgba(0,212,255,0.08)">
                  <th class="px-4 py-2.5 font-semibold">{{ t('tokenomics.seeder.colParam') }}</th>
                  <th class="px-4 py-2.5 font-semibold">{{ t('tokenomics.seeder.colValue') }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="p in seederParams" :key="p.k" class="border-t hair-border">
                  <td class="px-4 py-2.5 mono text-neon-cyan">{{ p.k }}</td>
                  <td class="px-4 py-2.5 text-secondary">{{ p.v }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 class="mt-6 mono text-xs uppercase tracking-wider text-secondary">{{ t('tokenomics.seeder.kupTitle') }} — K<sub>up</sub></h3>
          <div class="mt-3 grid gap-3 sm:grid-cols-3">
            <div v-for="k in kupTiers" :key="k.tier" class="rounded-xl border hair-border surface p-4">
              <p class="mono text-2xl font-bold" :style="`color:${k.color}`">{{ k.val }}</p>
              <p class="mt-1 text-xs font-semibold" :style="`color:${k.color}`">{{ k.tier }}</p>
              <p class="mt-1 text-[11px] text-secondary">{{ k.range }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 10. ANTI-SPAM ECONOMICS ========================= -->
    <section class="container-x py-20">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal="80" class="lg:col-span-3 order-2 lg:order-1">
          <p class="eyebrow mb-3">{{ t('tokenomics.spam.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.spam.title') }}</h2>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-2xl border p-6" style="background:rgba(239,68,68,0.05); border-color:rgba(239,68,68,0.35)">
              <p class="mono text-xs uppercase tracking-wider" style="color:#EF4444">{{ t('tokenomics.spam.legacyTag') }}</p>
              <p class="mono mt-3 text-2xl font-bold text-white">C<sub>spam</sub> = 0</p>
              <p class="mt-3 text-sm text-secondary">{{ t('tokenomics.spam.legacyText') }}</p>
            </div>

            <div class="rounded-2xl border p-6" style="background:rgba(16,185,129,0.05); border-color:rgba(16,185,129,0.45); box-shadow: 0 0 40px -10px rgba(16,185,129,0.30)">
              <p class="mono text-xs uppercase tracking-wider text-neon-green">{{ t('tokenomics.spam.netforyTag') }}</p>
              <p class="mono mt-3 text-2xl font-bold text-white">C<sub>spam</sub> = N × msg_cost_sth</p>
              <p class="mt-3 text-sm text-secondary">
                <i18n-t keypath="tokenomics.spam.netforyText" tag="span" scope="global">
                  <template #burn><strong class="mono text-neon-gold">{{ t('tokenomics.spam.burnLabel') }}</strong></template>
                </i18n-t>
              </p>
            </div>
          </div>

          <div class="mt-6 rounded-xl border p-4 glass" style="border-color:rgba(245,158,11,0.5); box-shadow: 0 0 28px -10px rgba(245,158,11,0.35)">
            <p class="text-sm">
              <i18n-t keypath="tokenomics.spam.callout" tag="span" scope="global">
                <template #devastating><strong class="text-neon-gold">{{ t('tokenomics.spam.devastatingLabel') }}</strong></template>
              </i18n-t>
            </p>
          </div>
        </div>

        <div v-reveal class="lg:col-span-2 order-1 lg:order-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/tokenomics/anti-spam-proof.jpg" alt="Anti-spam economic proof" class="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- ========================= 11. CROSS-CHAIN AVAILABILITY ========================= -->
    <section class="border-y hair-border py-20" style="background:linear-gradient(180deg, transparent, rgba(124,58,237,0.04), transparent)">
      <div class="container-x">
        <div v-reveal class="mx-auto max-w-3xl text-center">
          <p class="eyebrow mb-3">{{ t('tokenomics.cross.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('tokenomics.cross.title') }}</h2>
          <p class="mt-2 text-secondary">{{ t('tokenomics.cross.subtitle') }}</p>
          <p class="mx-auto mt-5 max-w-3xl text-secondary leading-relaxed">
            <i18n-t keypath="tokenomics.cross.text" tag="span" scope="global">
              <template #xbts>
                <a href="https://xbts.io/" target="_blank" rel="noopener" class="text-neon-cyan hover:underline"><strong>XBTS DEX</strong></a>
              </template>
            </i18n-t>
          </p>
        </div>

        <div class="mx-auto mt-10 grid max-w-4xl gap-4 md:grid-cols-3">
          <div v-for="w in whyMatters" :key="w" v-reveal class="flex gap-3 rounded-xl border hair-border surface p-4">
            <CheckCircle2 class="h-5 w-5 shrink-0 text-neon-cyan" />
            <span class="text-sm text-secondary">{{ w }}</span>
          </div>
        </div>

        <div v-reveal class="mx-auto mt-10 max-w-4xl space-y-3">
          <h3 class="mono text-center text-xs uppercase tracking-wider text-secondary">{{ t('tokenomics.cross.contractsTitle') }}</h3>

          <div v-for="c in contracts" :key="c.chain" class="flex items-center gap-3 rounded-xl border hair-border surface p-4">
            <div class="mono flex h-10 w-16 shrink-0 items-center justify-center rounded-lg text-xs font-bold" :style="`background:${c.tint}; color:${c.color}`">{{ c.chain }}</div>
            <code class="mono flex-1 truncate text-xs text-white sm:text-sm">{{ c.address }}</code>
            <button class="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border hair-border transition hover:border-neon-cyan hover:bg-neon-cyan/10"
                    :aria-label="t('tokenomics.cross.copyAria', { chain: c.chain })"
                    @click="copyAddress(c.chain, c.address)">
              <Check v-if="copied === c.chain" class="h-4 w-4 text-neon-green" />
              <Copy v-else class="h-4 w-4 text-neon-cyan" />
            </button>
          </div>
        </div>

        <div v-reveal class="mx-auto mt-8 flex max-w-3xl items-center justify-center gap-2 rounded-xl border px-5 py-3 glass" style="border-color:rgba(16,185,129,0.45)">
          <ShieldCheck class="h-4 w-4 text-neon-green" />
          <span class="text-xs font-semibold uppercase tracking-wider text-neon-green">{{ t('tokenomics.cross.badge') }}</span>
        </div>
      </div>
    </section>

    <!-- ========================= 12. CTA & MANIFESTO ========================= -->
    <section class="border-t hair-border">
      <div class="container-x py-20">
        <div class="grid items-center gap-10 lg:grid-cols-5">
          <div v-reveal class="lg:col-span-2">
            <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
              <img src="/images/tokenomics/ownership-future.jpg" alt="Your stake in the decentralized future" class="w-full rounded-xl" />
            </div>
          </div>

          <div v-reveal="80" class="lg:col-span-3">
            <p class="eyebrow mb-3">{{ t('tokenomics.cta.eyebrow') }}</p>
            <h2 class="text-3xl font-extrabold sm:text-4xl">{{ t('tokenomics.cta.title') }}</h2>
            <p class="mt-4 text-secondary leading-relaxed">{{ t('tokenomics.cta.text') }}</p>

            <div class="group mt-8 rounded-2xl border p-7 glass transition-all duration-300 hover:-translate-y-1" style="border-color:rgba(0,212,255,0.35); box-shadow: 0 0 40px -10px rgba(0,212,255,0.25)">
              <h3 class="text-xl font-bold">{{ t('tokenomics.cta.manifestoTitle') }}</h3>
              <p class="mt-3 text-white/90 leading-relaxed text-sm">
                <i18n-t keypath="tokenomics.cta.manifesto1" tag="span" scope="global">
                  <template #share><strong class="text-neon-cyan">{{ t('tokenomics.cta.shareLabel') }}</strong></template>
                </i18n-t>
              </p>
              <p class="mt-3 text-white/80 text-sm">
                <i18n-t keypath="tokenomics.cta.manifesto2" tag="span" scope="global">
                  <template #realUtility><strong class="text-neon-gold">{{ t('tokenomics.cta.realUtilityLabel') }}</strong></template>
                </i18n-t>
              </p>
              <p class="mono mt-4 text-xs italic text-neon-purple">{{ t('tokenomics.cta.manifestoTag') }}</p>

              <div class="mt-5 flex flex-wrap items-center gap-3">
                <div v-for="ic in manifestoIcons" :key="ic.label" class="flex items-center gap-2 rounded-lg border hair-border px-3 py-1.5 transition group-hover:border-neon-cyan" style="background:rgba(255,255,255,0.02)">
                  <component :is="ic.icon" class="h-4 w-4 text-neon-cyan" />
                  <span class="mono text-[10px] uppercase tracking-wider text-white/70">{{ ic.label }}</span>
                </div>
              </div>
            </div>

            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <NuxtLink :to="localePath('/white-paper')" class="btn-primary text-base">
                {{ t('tokenomics.cta.btnWp') }} <ArrowRight class="h-4 w-4" />
              </NuxtLink>
              <a href="https://explorer.smartholdem.io" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
                {{ t('tokenomics.cta.btnExplorer') }}
              </a>
            </div>

            <p class="mt-6 text-sm text-secondary">{{ t('tokenomics.cta.join') }}</p>
            <p class="mono mt-4 max-w-2xl text-sm leading-relaxed text-neon-gold">{{ t('tokenomics.cta.tagline') }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, computed } from 'vue'
import {
  TrendingUp, ShieldCheck, CheckCircle2,
  ArrowRight, Copy, Check,
  Coins, Flame, Zap, Ban, Rocket,
  UserCheck, Package, MessageSquare, Bell, Users2, Gauge,
  Server, HardDrive, Network, Wallet,
  Vote, ArrowRightLeft, Layers, FileLock2, Gamepad2
} from 'lucide-vue-next'

const { t } = useI18n()
const localePath = useLocalePath()

// -------------------- Hero metrics with counter animation --------------------
const heroMetrics = computed(() => [
  { key: 'supply',   animate: true,  label: t('tokenomics.hero.m1'), color: '#00D4FF', suffix: 'STH' },
  { key: 'burned',   animate: true,  label: t('tokenomics.hero.m2'), color: '#F59E0B', suffix: 'STH' },
  { key: 'emission', animate: false, staticValue: t('tokenomics.hero.m3v'), label: t('tokenomics.hero.m3'), color: '#10B981' }
])
const counters = reactive({ supply: 0, burned: 0 })
const targets  = { supply: 249_677_907, burned: 92_093 }
const formatNumber = (n) => Math.round(n).toLocaleString('en-US')

onMounted(() => {
  const duration = 1600
  const start = performance.now()
  const tick = (now) => {
    const p = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - p, 3)
    counters.supply = targets.supply * eased
    counters.burned = targets.burned * eased
    if (p < 1) requestAnimationFrame(tick)
  }
  requestAnimationFrame(tick)
})

// -------------------- Distribution (2017) --------------------
const distribution = computed(() => [
  { pct: 83, label: t('tokenomics.dist.d1'), color: '#00D4FF' },
  { pct: 8,  label: t('tokenomics.dist.d2'), color: '#7C3AED' },
  { pct: 6,  label: t('tokenomics.dist.d3'), color: '#F59E0B' },
  { pct: 3,  label: t('tokenomics.dist.d4'), color: '#10B981' }
])

// -------------------- Deflationary mechanics --------------------
const deflationCards = computed(() => [
  { icon: Ban,   title: t('tokenomics.deflation.c1t'), text: t('tokenomics.deflation.c1x'), color: '#EF4444', tint: 'rgba(239,68,68,0.14)' },
  { icon: Flame, title: t('tokenomics.deflation.c2t'), text: t('tokenomics.deflation.c2x'), color: '#F59E0B', tint: 'rgba(245,158,11,0.14)' },
  { icon: Zap,   title: t('tokenomics.deflation.c3t'), text: t('tokenomics.deflation.c3x'), color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' }
])

// -------------------- Physical backing --------------------
const physicalPoints = computed(() => [
  t('tokenomics.backing.p1'),
  t('tokenomics.backing.p2'),
  t('tokenomics.backing.p3')
])

// -------------------- Utility cards (6 primary) --------------------
const utilityCards = computed(() => [
  { icon: UserCheck,     title: t('tokenomics.utility.u1t'), cost: '1 STH',              text: t('tokenomics.utility.u1x'), color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' },
  { icon: Package,       title: t('tokenomics.utility.u2t'), cost: '~100 STH',           text: t('tokenomics.utility.u2x'), color: '#7C3AED', tint: 'rgba(124,58,237,0.14)' },
  { icon: MessageSquare, title: t('tokenomics.utility.u3t'), cost: 'msg_cost_sth',       text: t('tokenomics.utility.u3x'), color: '#F59E0B', tint: 'rgba(245,158,11,0.14)' },
  { icon: Bell,          title: t('tokenomics.utility.u4t'), cost: 'sub:<user>',         text: t('tokenomics.utility.u4x'), color: '#10B981', tint: 'rgba(16,185,129,0.14)' },
  { icon: Users2,        title: t('tokenomics.utility.u5t'), cost: 'entry_fee',          text: t('tokenomics.utility.u5x'), color: '#EF4444', tint: 'rgba(239,68,68,0.14)' },
  { icon: Gauge,         title: t('tokenomics.utility.u6t'), cost: 'sth_boost:<app_id>', text: t('tokenomics.utility.u6x'), color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' }
])

const fullUtilitySpectrum = computed(() => [
  { icon: Coins,          title: t('tokenomics.utility.s1'), color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' },
  { icon: Vote,           title: t('tokenomics.utility.s2'), color: '#10B981', tint: 'rgba(16,185,129,0.14)' },
  { icon: Rocket,         title: t('tokenomics.utility.s3'), color: '#7C3AED', tint: 'rgba(124,58,237,0.14)' },
  { icon: Flame,          title: t('tokenomics.utility.s4'), color: '#F59E0B', tint: 'rgba(245,158,11,0.14)' },
  { icon: ArrowRightLeft, title: t('tokenomics.utility.s5'), color: '#00D4FF', tint: 'rgba(0,212,255,0.14)' },
  { icon: Network,        title: t('tokenomics.utility.s6'), color: '#7C3AED', tint: 'rgba(124,58,237,0.14)' },
  { icon: Layers,         title: t('tokenomics.utility.s7'), color: '#10B981', tint: 'rgba(16,185,129,0.14)' },
  { icon: FileLock2,      title: t('tokenomics.utility.s8'), color: '#F59E0B', tint: 'rgba(245,158,11,0.14)' },
  { icon: Gamepad2,       title: t('tokenomics.utility.s9'), color: '#EF4444', tint: 'rgba(239,68,68,0.14)' }
])

// -------------------- Utility card hover glow --------------------
const onUtilityHover = (e, color) => {
  e.currentTarget.style.borderColor = color
  e.currentTarget.style.boxShadow = `0 12px 40px -15px ${color}`
}
const onUtilityLeave = (e) => {
  e.currentTarget.style.borderColor = ''
  e.currentTarget.style.boxShadow = ''
}

// -------------------- Economic loop --------------------
const loopSteps = computed(() => [
  t('tokenomics.loop.s1'), t('tokenomics.loop.s2'), t('tokenomics.loop.s3'),
  t('tokenomics.loop.s4'), t('tokenomics.loop.s5')
])

// -------------------- Seeder economics --------------------
const seederParams = computed(() => [
  { k: 'Base',    v: t('tokenomics.seeder.p1v') },
  { k: 'density', v: t('tokenomics.seeder.p2v') },
  { k: 'PerApp',  v: t('tokenomics.seeder.p3v') },
  { k: 'K_up',    v: t('tokenomics.seeder.p4v') }
])

const kupTiers = computed(() => [
  { val: '1.0', tier: t('tokenomics.seeder.kupElite'),  range: t('tokenomics.seeder.kupEliteRange'), color: '#10B981' },
  { val: '0.5', tier: t('tokenomics.seeder.kupFlaky'),  range: t('tokenomics.seeder.kupFlakyRange'), color: '#F59E0B' },
  { val: '0.0', tier: t('tokenomics.seeder.kupDead'),   range: t('tokenomics.seeder.kupDeadRange'),  color: '#EF4444' }
])

// -------------------- Cross-chain --------------------
const whyMatters = computed(() => [
  t('tokenomics.cross.w1'),
  t('tokenomics.cross.w2'),
  t('tokenomics.cross.w3')
])

const contracts = [
  { chain: 'BSC', address: '0x625d64c3384aa6d6841a1608ae0ce48776981d38', color: '#F0B90B', tint: 'rgba(240,185,11,0.14)' },
  { chain: 'ETH', address: '0x625d64C3384AA6d6841a1608aE0Ce48776981D38', color: '#627EEA', tint: 'rgba(98,126,234,0.14)' },
  { chain: 'TON', address: 'EQAtsA8GtJTCQNGTg3VwJtjcLfxteTx4-aDvBBuB1wPNDuhP', color: '#0098EA', tint: 'rgba(0,152,234,0.14)' },
  { chain: 'SOL', address: '85cwf2cKGCYt8tTtcwhmrUBLe5RNbUKptfo3VtNQJSTH', color: '#00FFA3', tint: 'rgba(0,255,163,0.14)' }
]

const copied = ref(null)
const copyAddress = async (chain, address) => {
  try {
    await navigator.clipboard.writeText(address)
    copied.value = chain
    setTimeout(() => { copied.value = null }, 1600)
  } catch (e) { console.warn('[tokenomics] clipboard write failed:', e) }
}

// -------------------- Manifesto icons --------------------
const manifestoIcons = computed(() => [
  { icon: Server,    label: t('tokenomics.cta.icServers')  },
  { icon: HardDrive, label: t('tokenomics.cta.icStorage')  },
  { icon: Network,   label: t('tokenomics.cta.icNetwork')  },
  { icon: Wallet,    label: t('tokenomics.cta.icEarnings') }
])

// -------------------- SEO --------------------
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://smartholdem.io'
const ogImage = `${siteUrl}/images/tokenomics/sth-tokenomics-og.jpg`
const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/tokenomics')
useSeoMeta({
  title: () => t('tokenomics.seo.title'),
  description: () => t('tokenomics.seo.description'),
  keywords: 'SmartHoldem, STH token, tokenomics, Web 4.0, decentralized infrastructure, wrapped tokens, XBTS DEX, cross-chain, DPoS, deflationary',
  ogType: 'website',
  ogTitle: () => t('tokenomics.seo.ogTitle'),
  ogDescription: () => t('tokenomics.seo.ogDescription'),
  ogImage,
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('tokenomics.seo.ogTitle'),
  twitterDescription: () => t('tokenomics.seo.ogDescription'),
  twitterImage: ogImage,
  twitterSite: '@smartholdem'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>
