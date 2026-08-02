<template>
  <div class="bc-page">
    <!-- SECTION 1: HERO -->
    <section class="relative min-h-[100svh] overflow-hidden flex items-center border-b hair-border">
      <div class="absolute inset-0 pointer-events-none">
        <div class="absolute -top-20 -left-24 h-[560px] w-[560px] rounded-full opacity-30 blur-3xl" style="background:radial-gradient(closest-side,#00D4FF,transparent 70%)"></div>
        <div class="absolute -bottom-24 -right-20 h-[600px] w-[600px] rounded-full opacity-25 blur-3xl" style="background:radial-gradient(closest-side,#7C3AED,transparent 70%)"></div>
      </div>
      <div class="container-x relative z-10 py-24 lg:py-0">
        <div class="grid items-center gap-14 lg:grid-cols-5">
          <div class="lg:col-span-3">
            <p class="eyebrow mb-4">{{ t('blockchain.hero.eyebrow') }}</p>
            <h1 class="text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
              {{ t('blockchain.hero.titleA') }}
              <span class="text-brand">{{ t('blockchain.hero.titleB') }}</span> {{ t('blockchain.hero.titleC') }}
            </h1>
            <p class="mt-5 text-lg text-secondary">{{ t('blockchain.hero.subtitle') }}</p>
            <p class="mt-4 max-w-2xl text-secondary leading-relaxed">{{ t('blockchain.hero.text') }}</p>
            <div class="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://github.com/smartholdem/sth-core" target="_blank" rel="noopener" class="btn-primary text-base">
                {{ t('blockchain.hero.cta1') }} <ArrowRight class="h-4 w-4" />
              </a>
              <a href="https://explorer.smartholdem.io" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
                {{ t('blockchain.hero.cta2') }}
              </a>
            </div>
          </div>
          <div class="lg:col-span-2">
            <figure class="hero-image-container mx-auto max-w-md lg:max-w-none">
              <img src="/images/blockchain/blockchain-hero.jpg" alt="SmartHoldem dual-layer architecture" />
            </figure>
            <p class="mt-3 text-center text-xs text-secondary">{{ t('blockchain.hero.imageCaption') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 2: SPEED -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.speed.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.speed.title') }}</h2>
        <p class="mt-4 text-secondary">{{ t('blockchain.speed.text') }}</p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="c in speedCards" :key="c.title" v-reveal="60" class="rounded-2xl border hair-border surface p-7">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl" :style="`background:${c.tint}`">
            <component :is="c.icon" class="h-6 w-6" :style="`color:${c.color}`" />
          </div>
          <h3 class="text-lg font-semibold">{{ c.title }}</h3>
          <p class="mt-2 text-sm text-secondary leading-relaxed">{{ c.text }}</p>
        </div>
      </div>
    </section>

    <!-- SECTION 2.1: BENCHMARKS -->
    <section class="container-x py-16">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal class="order-first lg:order-last lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/blockchain/blockchain-performance.jpg" alt="Performance benchmarks" class="w-full rounded-xl" />
          </div>
        </div>
        <div v-reveal="80" class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('blockchain.bench.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.bench.title') }}</h2>
          <p class="mt-2 text-secondary">{{ t('blockchain.bench.subtitle') }}</p>
          <p class="mt-4 text-secondary leading-relaxed">{{ t('blockchain.bench.text') }}</p>

          <div class="mt-6 grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl border hair-border surface p-5">
              <p class="mono text-3xl font-bold text-neon-cyan">256</p>
              <p class="mt-1 text-xs uppercase tracking-wider text-secondary">{{ t('blockchain.bench.m1') }}</p>
            </div>
            <div class="rounded-xl border hair-border surface p-5">
              <p class="mono text-3xl font-bold text-brand">5.53B</p>
              <p class="mt-1 text-xs uppercase tracking-wider text-secondary">{{ t('blockchain.bench.m2') }}</p>
            </div>
          </div>

          <div class="mt-6 overflow-hidden rounded-xl border hair-border">
            <div class="overflow-x-auto">
              <table class="w-full text-sm">
                <thead>
                  <tr class="text-left" style="background:rgba(0,212,255,0.08)">
                    <th class="px-4 py-3 font-semibold">{{ t('blockchain.bench.colConfig') }}</th>
                    <th class="px-4 py-3 font-semibold mono">{{ t('blockchain.bench.colSec') }}</th>
                    <th class="px-4 py-3 font-semibold mono">{{ t('blockchain.bench.colHour') }}</th>
                    <th class="px-4 py-3 font-semibold mono">{{ t('blockchain.bench.colDay') }}</th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="border-t hair-border" style="background:rgba(255,90,10,0.10)">
                    <td class="px-4 py-3 font-semibold text-brand">2000 TX/block (MultiPayments)</td>
                    <td class="px-4 py-3 mono font-bold text-brand">64,000</td>
                    <td class="px-4 py-3 mono font-bold text-brand">230.4M</td>
                    <td class="px-4 py-3 mono font-bold text-brand">5.53B</td>
                  </tr>
                  <tr class="border-t hair-border">
                    <td class="px-4 py-3">1000 TX/block (MultiPayments)</td>
                    <td class="px-4 py-3 mono">32,000</td>
                    <td class="px-4 py-3 mono">115.2M</td>
                    <td class="px-4 py-3 mono">2.76B</td>
                  </tr>
                  <tr class="border-t hair-border">
                    <td class="px-4 py-3">500 TX/block (MultiPayments)</td>
                    <td class="px-4 py-3 mono">16,000</td>
                    <td class="px-4 py-3 mono">57.6M</td>
                    <td class="px-4 py-3 mono">1.38B</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 3: STACK -->
    <section class="container-x py-20">
      <div v-reveal class="text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.stack.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.stack.title') }}</h2>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="c in stackCards" :key="c.title" v-reveal="60" class="rounded-2xl border hair-border surface p-7">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neon-cyan/10">
            <component :is="c.icon" class="h-6 w-6 text-neon-cyan" />
          </div>
          <h3 class="text-lg font-semibold">{{ c.title }}</h3>
          <ul class="mt-3 space-y-2 text-sm text-secondary">
            <li v-for="line in c.lines" :key="line" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-neon-cyan"></span>
              <span v-html="line"></span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 3.1: DECENTRALIZATION -->
    <section class="container-x py-16">
      <div class="grid items-center gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('blockchain.decentral.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.decentral.title') }}</h2>
          <p class="mt-4 text-secondary leading-relaxed">{{ t('blockchain.decentral.text') }}</p>
          <ul class="mt-6 space-y-3">
            <li v-for="p in decentralPoints" :key="p.t" class="flex gap-3 rounded-xl border hair-border surface p-4">
              <CheckCircle2 class="h-5 w-5 shrink-0 text-neon-green" />
              <div><p class="font-semibold">{{ p.t }}</p><p class="mt-1 text-sm text-secondary">{{ p.x }}</p></div>
            </li>
          </ul>
        </div>
        <div v-reveal="80" class="lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/blockchain/blockchain-voting.jpg" alt="Community governance" class="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 4: TOP 21 -->
    <section class="relative border-y hair-border">
      <div class="absolute inset-0 -z-10" style="background:linear-gradient(180deg, transparent, rgba(0,212,255,0.04), transparent)"></div>
      <div class="container-x py-20">
        <div class="grid items-center gap-10 lg:grid-cols-5">
          <div v-reveal class="lg:col-span-2">
            <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
              <img src="/images/blockchain/delegate-network.jpg" alt="21 delegates ring topology" class="w-full rounded-xl" />
            </div>
          </div>
          <div v-reveal="80" class="lg:col-span-3">
            <p class="eyebrow mb-3">{{ t('blockchain.top21.eyebrow') }}</p>
            <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.top21.title') }}</h2>
            <p class="mt-4 text-secondary leading-relaxed">{{ t('blockchain.top21.text') }}</p>
            <div class="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div v-for="s in delegateStats" :key="s.l" class="rounded-xl border hair-border surface p-4 text-center">
                <p class="mono text-2xl font-bold" :style="`color:${s.color}`">{{ s.v }}</p>
                <p class="mt-1 text-[11px] uppercase tracking-wider text-secondary">{{ s.l }}</p>
              </div>
            </div>
            <div class="mt-6 rounded-xl border p-5 glass" style="border-color:rgba(0,212,255,0.35)">
              <p class="text-sm text-secondary">{{ t('blockchain.top21.note') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 5: REWARDS -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.rewards.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.rewards.title') }}</h2>
        <p class="mt-4 text-secondary leading-relaxed">
          <i18n-t keypath="blockchain.rewards.text" tag="span" scope="global">
            <template #noEm><strong class="text-brand">{{ t('blockchain.rewards.noEmLabel') }}</strong></template>
          </i18n-t>
        </p>
        <p class="mt-3 text-secondary">
          <i18n-t keypath="blockchain.rewards.text2" tag="span" scope="global">
            <template #allFees><strong>{{ t('blockchain.rewards.allFeesLabel') }}</strong></template>
          </i18n-t>
        </p>
      </div>
      <div class="mt-12 grid gap-8 lg:grid-cols-2">
        <div v-reveal="60">
          <h3 class="mono text-sm font-semibold uppercase tracking-wider text-secondary">{{ t('blockchain.rewards.howTitle') }}</h3>
          <div class="mt-4 grid gap-4 sm:grid-cols-3">
            <div v-for="r in rewardCards" :key="r.title" class="rounded-xl border hair-border surface p-5">
              <p class="mono text-2xl font-bold" :style="`color:${r.color}`">{{ r.big }}</p>
              <p class="mt-1 text-xs text-secondary">{{ r.small }}</p>
              <p class="mt-3 text-xs text-secondary leading-relaxed">{{ r.text }}</p>
            </div>
          </div>
        </div>
        <div v-reveal="80">
          <h3 class="mono text-sm font-semibold uppercase tracking-wider text-secondary">{{ t('blockchain.rewards.advTitle') }}</h3>
          <div class="mt-4 rounded-xl border hair-border surface p-6">
            <p class="text-sm text-secondary">{{ t('blockchain.rewards.advText') }}</p>
            <div class="mt-4 flex flex-wrap gap-2">
              <span v-for="tx in txTypes" :key="tx" class="mono rounded-md border hair-border px-2.5 py-1 text-xs" style="color:var(--text);background:rgba(0,212,255,0.06)">{{ tx }}</span>
            </div>
            <a href="https://wallet.smartholdem.io/blockchain" target="_blank" rel="noopener" class="btn-tertiary mt-5 inline-flex text-sm">
              {{ t('blockchain.rewards.feesLink') }} <ExternalLink class="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 6: BECOME -->
    <section class="container-x py-16">
      <div class="grid items-start gap-10 lg:grid-cols-5">
        <div v-reveal class="lg:col-span-3">
          <p class="eyebrow mb-3">{{ t('blockchain.become.eyebrow') }}</p>
          <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.become.title') }}</h2>
          <p class="mt-3 text-secondary">{{ t('blockchain.become.text') }}</p>
          <div class="mt-6 rounded-xl border p-5 glass" style="border-color:rgba(255,90,10,0.35)">
            <p class="mono text-xs uppercase tracking-wider text-brand">{{ t('blockchain.become.specsLabel') }}</p>
            <p class="mt-2 text-sm text-secondary">{{ t('blockchain.become.specsText') }}</p>
          </div>
          <ol class="mt-8 space-y-4">
            <li v-for="(step, i) in steps" :key="step.t" class="flex gap-4 rounded-xl border hair-border surface p-5">
              <div class="mono flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand/15 text-brand font-bold">{{ i + 1 }}</div>
              <div><p class="font-semibold">{{ step.t }}</p><p class="mt-1 text-sm text-secondary">{{ step.x }}</p></div>
            </li>
          </ol>
        </div>
        <div v-reveal="80" class="lg:col-span-2">
          <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
            <img src="/images/blockchain/blockchain-delegate.jpg" alt="Delegate registration process" class="w-full rounded-xl" />
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 7: COMMUNITY -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.community.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.community.title') }}</h2>
        <p class="mt-4 text-secondary leading-relaxed">{{ t('blockchain.community.text') }}</p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="c in communityCards" :key="c.title" v-reveal="60" class="rounded-2xl border hair-border surface p-6">
          <div class="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-neon-purple/15">
            <component :is="c.icon" class="h-5 w-5 text-neon-purple" />
          </div>
          <p class="text-sm font-medium leading-relaxed">{{ c.title }}</p>
        </div>
      </div>
      <div v-reveal class="mx-auto mt-10 max-w-3xl rounded-xl border p-5 glass" style="border-color:rgba(124,58,237,0.35)">
        <p class="text-center text-sm text-secondary">{{ t('blockchain.community.footer') }}</p>
      </div>
    </section>

    <!-- SECTION 8: QUANTUM -->
    <section class="relative border-y hair-border">
      <div class="absolute inset-0 -z-10" style="background:linear-gradient(180deg, transparent, rgba(124,58,237,0.06), transparent)"></div>
      <div class="container-x py-20">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div v-reveal class="order-2 lg:order-1">
            <p class="eyebrow mb-3">{{ t('blockchain.quantum.eyebrow') }}</p>
            <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.quantum.title') }}</h2>
            <p class="mt-2 text-secondary">{{ t('blockchain.quantum.subtitle') }}</p>
            <p class="mt-5 text-secondary leading-relaxed">{{ t('blockchain.quantum.text') }}</p>
            <div class="mt-6 rounded-xl border p-5 glass" style="border-color:rgba(255,90,10,0.45)">
              <p class="text-sm">
                <i18n-t keypath="blockchain.quantum.callout" tag="span" scope="global">
                  <template #waiting><strong class="text-brand">{{ t('blockchain.quantum.waitingLabel') }}</strong></template>
                </i18n-t>
              </p>
            </div>
          </div>
          <div v-reveal="80" class="order-1 lg:order-2">
            <div class="overflow-hidden rounded-2xl border hair-border glass p-3">
              <img src="/images/blockchain/quantum-shield.jpg" alt="Quantum Shield" class="w-full rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 9: PHASES -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.phases.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.phases.title') }}</h2>
        <p class="mt-4 text-secondary">{{ t('blockchain.phases.text') }}</p>
      </div>
      <div class="relative mt-14">
        <div class="pointer-events-none absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand/50 to-transparent lg:block"></div>
        <div class="grid gap-6 lg:grid-cols-3">
          <div v-for="(p, i) in phases" :key="p.title" v-reveal="i * 80" class="relative">
            <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand bg-navy-900 shadow-brand">
              <span class="mono text-sm font-bold text-brand">P{{ i + 1 }}</span>
            </div>
            <div class="mt-5 rounded-2xl border hair-border surface p-6">
              <p class="mono text-xs uppercase tracking-wider text-brand">{{ t('blockchain.phases.phaseWord') }} {{ i + 1 }}</p>
              <h3 class="mt-1 text-lg font-semibold">{{ p.title }}</h3>
              <ul class="mt-3 space-y-2 text-sm text-secondary">
                <li v-for="b in p.bullets" :key="b" class="flex gap-2">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
                  <span>{{ b }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- SECTION 10: SIG -->
    <section class="container-x py-16">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.sig.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.sig.title') }}</h2>
        <p class="mt-4 text-secondary leading-relaxed">{{ t('blockchain.sig.text') }}</p>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="(s, i) in sigSteps" :key="s.t" v-reveal="i * 60" class="rounded-2xl border hair-border surface p-6">
          <div class="mb-4 flex items-center gap-3">
            <div class="mono flex h-10 w-10 items-center justify-center rounded-lg bg-neon-cyan/15 text-neon-cyan font-bold">{{ i + 1 }}</div>
            <component :is="s.icon" class="h-5 w-5 text-neon-cyan" />
          </div>
          <p class="font-semibold">{{ s.t }}</p>
          <p class="mt-2 text-sm text-secondary leading-relaxed">{{ s.x }}</p>
        </div>
      </div>
      <div v-reveal class="mt-10 rounded-2xl border p-6 glass" style="border-color:rgba(16,185,129,0.45)">
        <p class="mono text-xs uppercase tracking-wider text-neon-green">{{ t('blockchain.sig.resultLabel') }}</p>
        <ul class="mt-4 grid gap-2 sm:grid-cols-2">
          <li v-for="r in resultBullets" :key="r" class="flex gap-2 text-sm">
            <Check class="h-4 w-4 shrink-0 text-neon-green" />
            <span>{{ r }}</span>
          </li>
        </ul>
      </div>
      <p v-reveal class="mx-auto mt-8 max-w-3xl text-center text-sm text-secondary">
        <i18n-t keypath="blockchain.sig.footer" tag="span" scope="global">
          <template #forUsers><strong>{{ t('blockchain.sig.forUsersLabel') }}</strong></template>
        </i18n-t>
      </p>
    </section>

    <!-- SECTION 11: NUANCE -->
    <section class="container-x py-20">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.nuance.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.nuance.title') }}</h2>
      </div>
      <div class="mt-12 grid gap-6 md:grid-cols-3">
        <div v-for="c in nuanceCards" :key="c.title" v-reveal="60" class="rounded-2xl border hair-border surface p-6">
          <div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand/15">
            <component :is="c.icon" class="h-6 w-6 text-brand" />
          </div>
          <h3 class="text-lg font-semibold">{{ c.title }}</h3>
          <ul class="mt-3 space-y-2 text-sm text-secondary">
            <li v-for="b in c.bullets" :key="b" class="flex gap-2">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"></span>
              <span>{{ b }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- SECTION 12: CODE -->
    <section class="container-x py-16">
      <div v-reveal class="mx-auto max-w-3xl text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.code.eyebrow') }}</p>
        <h2 class="text-3xl font-bold sm:text-4xl">{{ t('blockchain.code.title') }}</h2>
        <p class="mt-4 text-secondary leading-relaxed">{{ t('blockchain.code.text') }}</p>
      </div>
      <div v-reveal="60" class="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border hair-border" style="background:#0b1020">
        <div class="flex items-center justify-between border-b hair-border px-4 py-2" style="background:rgba(0,212,255,0.06)">
          <span class="mono text-[11px] uppercase tracking-wider text-neon-cyan">TypeScript · STH-Core</span>
          <span class="mono text-[10px] text-secondary">verification layer</span>
        </div>
        <pre class="overflow-x-auto p-5 text-sm leading-relaxed"><code class="mono" style="color:#e2e8f0">// STH-Core: Verification layer
<span style="color:#c792ea">if</span> (transaction.secondSignature) {
  <span style="color:#546e7a">// Classic verification</span>
  <span style="color:#82aaff">verifyClassicSignature</span>(transaction.signature, transaction.senderPublicKey);

  <span style="color:#546e7a">// TODO: Integrate Post-Quantum verification layer</span>
  <span style="color:#546e7a">// validateHybridQuantumSignature(transaction.pqSignature, algorithm: 'Dilithium' | 'SPHINCS+');</span>
}</code></pre>
      </div>
      <p v-reveal class="mx-auto mt-10 max-w-3xl text-center text-secondary leading-relaxed">
        <i18n-t keypath="blockchain.code.footer" tag="span" scope="global">
          <template #futureHere><strong class="text-brand">{{ t('blockchain.code.futureHereLabel') }}</strong></template>
        </i18n-t>
      </p>
    </section>

    <!-- SECTION 13: CTA -->
    <section class="relative overflow-hidden border-y hair-border">
      <img src="/images/blockchain/blockchain-og.jpg" alt="" aria-hidden="true" class="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div class="absolute inset-0" style="background:radial-gradient(70% 60% at 50% 50%, rgba(10,14,39,0.55), rgba(10,14,39,0.95))"></div>
      <div class="container-x relative z-10 py-24 text-center">
        <p class="eyebrow mb-3">{{ t('blockchain.cta.eyebrow') }}</p>
        <h2 class="mx-auto max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">{{ t('blockchain.cta.title') }}</h2>
        <p class="mx-auto mt-5 max-w-2xl text-white/80">{{ t('blockchain.cta.text') }}</p>
        <div class="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="https://github.com/smartholdem/sth-core" target="_blank" rel="noopener" class="btn-primary text-base">
            {{ t('blockchain.cta.btn1') }} <ArrowRight class="h-4 w-4" />
          </a>
          <a href="https://explorer.smartholdem.io" target="_blank" rel="noopener" class="btn-outline-cyan text-base">
            {{ t('blockchain.cta.btn2') }}
          </a>
          <a href="https://t.me/smartholdem" target="_blank" rel="noopener" class="btn-tertiary text-base">
            {{ t('blockchain.cta.btn3') }} <ExternalLink class="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import {
  ArrowRight, ExternalLink, Zap, Scale, Leaf, Cpu, Code2, Globe,
  CheckCircle2, Check, Shield, HardDrive, Key, Hash, FileSignature, Lock,
  Hammer, Megaphone, TrendingUp, ShieldCheck
} from 'lucide-vue-next'

const { t } = useI18n()

// ---- Section 2 ----
const speedCards = computed(() => [
  { icon: Zap,   color: '#00D4FF', tint: 'rgba(0,212,255,0.12)', title: t('blockchain.speed.c1t'), text: t('blockchain.speed.c1x') },
  { icon: Scale, color: '#FF5A0A', tint: 'rgba(255,90,10,0.12)', title: t('blockchain.speed.c2t'), text: t('blockchain.speed.c2x') },
  { icon: Leaf,  color: '#10B981', tint: 'rgba(16,185,129,0.12)', title: t('blockchain.speed.c3t'), text: t('blockchain.speed.c3x') }
])

// ---- Section 3 ---- (tech specifics stay in English)
const stackCards = computed(() => [
  { icon: Cpu,   title: t('blockchain.stack.c1t'), lines: [
      '<strong>Language:</strong> TypeScript / JavaScript (87.4% TS)',
      '<strong>Consensus:</strong> DPoS (Delegated Proof of Stake)',
      '<strong>Active Delegates:</strong> 21 forging nodes',
      '<strong>Cryptography:</strong> secp256k1 (BIP-schnorr signatures)',
      '<strong>Architecture:</strong> Modular packages (core, crypto, P2P)'
  ]},
  { icon: Code2, title: t('blockchain.stack.c2t'), lines: [
      'RESTful API with comprehensive endpoints',
      'Official SDK client for seamless integration',
      'Resources: Blocks, Transactions, Delegates, Wallets, Locks, Businesses, Bridgechains',
      'Real-time node status, peer discovery, round management'
  ]},
  { icon: Globe, title: t('blockchain.stack.c3t'), lines: [
      'Native support for autonomous agent transactions',
      'Content-addressed state via BLAKE3 verification',
      'P2P-first architecture with Iroh QUIC transport',
      'Zero-infrastructure deployment model'
  ]}
])

// ---- Section 3.1 ----
const decentralPoints = computed(() => [
  { t: t('blockchain.decentral.p1t'), x: t('blockchain.decentral.p1x') },
  { t: t('blockchain.decentral.p2t'), x: t('blockchain.decentral.p2x') },
  { t: t('blockchain.decentral.p3t'), x: t('blockchain.decentral.p3x') },
  { t: t('blockchain.decentral.p4t'), x: t('blockchain.decentral.p4x') }
])

// ---- Section 4 ----
const delegateStats = computed(() => [
  { v: '21',   l: t('blockchain.top21.s1'), color: '#00D4FF' },
  { v: '8s',   l: t('blockchain.top21.s2'), color: '#FF5A0A' },
  { v: '100%', l: t('blockchain.top21.s3'), color: '#10B981' },
  { v: '0%',   l: t('blockchain.top21.s4'), color: '#7C3AED' }
])

// ---- Section 5 ----
const rewardCards = computed(() => [
  { big: t('blockchain.rewards.r1big'), small: t('blockchain.rewards.r1small'), color: '#00D4FF', text: t('blockchain.rewards.r1text') },
  { big: t('blockchain.rewards.r2big'), small: t('blockchain.rewards.r2small'), color: '#FF5A0A', text: t('blockchain.rewards.r2text') },
  { big: t('blockchain.rewards.r3big'), small: t('blockchain.rewards.r3small'), color: '#94A3B8', text: t('blockchain.rewards.r3text') }
])

// TX types — technical labels, kept as-is
const txTypes = [
  'Multi-payments', 'Gaming', 'Multi-signatures', 'Crypto-signatures',
  'Second passphrase', 'Burn', 'IPFS hash', 'HTLC', 'Copyright registration'
]

// ---- Section 6 ----
const steps = computed(() => [
  { t: t('blockchain.become.s1t'), x: t('blockchain.become.s1x') },
  { t: t('blockchain.become.s2t'), x: t('blockchain.become.s2x') },
  { t: t('blockchain.become.s3t'), x: t('blockchain.become.s3x') },
  { t: t('blockchain.become.s4t'), x: t('blockchain.become.s4x') },
  { t: t('blockchain.become.s5t'), x: t('blockchain.become.s5x') }
])

// ---- Section 7 ----
const communityCards = computed(() => [
  { icon: Hammer,      title: t('blockchain.community.c1') },
  { icon: ShieldCheck, title: t('blockchain.community.c2') },
  { icon: Megaphone,   title: t('blockchain.community.c3') },
  { icon: TrendingUp,  title: t('blockchain.community.c4') }
])

// ---- Section 9 ----
const phases = computed(() => [
  { title: t('blockchain.phases.p1t'), bullets: [t('blockchain.phases.p1b1'), t('blockchain.phases.p1b2')] },
  { title: t('blockchain.phases.p2t'), bullets: [t('blockchain.phases.p2b1'), t('blockchain.phases.p2b2'), t('blockchain.phases.p2b3')] },
  { title: t('blockchain.phases.p3t'), bullets: [t('blockchain.phases.p3b1'), t('blockchain.phases.p3b2')] }
])

// ---- Section 10 ----
const sigSteps = computed(() => [
  { icon: Hash,          t: t('blockchain.sig.s1t'), x: t('blockchain.sig.s1x') },
  { icon: FileSignature, t: t('blockchain.sig.s2t'), x: t('blockchain.sig.s2x') },
  { icon: Lock,          t: t('blockchain.sig.s3t'), x: t('blockchain.sig.s3x') }
])

const resultBullets = computed(() => [
  t('blockchain.sig.r1'), t('blockchain.sig.r2'), t('blockchain.sig.r3'),
  t('blockchain.sig.r4'), t('blockchain.sig.r5')
])

// ---- Section 11 ----
const nuanceCards = computed(() => [
  { icon: Shield,    title: t('blockchain.nuance.n1t'), bullets: [t('blockchain.nuance.n1b1'), t('blockchain.nuance.n1b2'), t('blockchain.nuance.n1b3')] },
  { icon: HardDrive, title: t('blockchain.nuance.n2t'), bullets: [t('blockchain.nuance.n2b1'), t('blockchain.nuance.n2b2')] },
  { icon: Key,       title: t('blockchain.nuance.n3t'), bullets: [t('blockchain.nuance.n3b1'), t('blockchain.nuance.n3b2'), t('blockchain.nuance.n3b3')] }
])

// ---- SEO ----
const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl || 'https://smartholdem.io'
const ogImage = `${siteUrl}/images/blockchain/blockchain-og.jpg`

const { ogLocale, ogLocaleAlternate, pageUrl } = useLocalizedOg('/blockchain')
useSeoMeta({
  title: () => t('blockchain.seo.title'),
  description: () => t('blockchain.seo.description'),
  ogType: 'website',
  ogTitle: () => t('blockchain.seo.ogTitle'),
  ogDescription: () => t('blockchain.seo.ogDescription'),
  ogImage,
  ogUrl: () => pageUrl.value,
  ogLocale: () => ogLocale.value,
  ogLocaleAlternate: () => ogLocaleAlternate.value,
  twitterCard: 'summary_large_image',
  twitterTitle: () => t('blockchain.seo.ogTitle'),
  twitterDescription: () => t('blockchain.seo.ogDescription'),
  twitterImage: ogImage,
  twitterSite: '@smartholdem'
})
useHead({
  link: [{ rel: 'canonical', href: () => pageUrl.value }]
})
</script>

<style scoped>
.hero-image-container {
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  border: 1px solid rgba(0, 212, 255, 0.3);
  box-shadow: 0 0 40px rgba(0, 212, 255, 0.15);
  cursor: zoom-in;
  isolation: isolate;
}
.hero-image-container img {
  width: 100%; height: auto;
  transition: transform 0.6s ease-in-out;
  display: block; border-radius: inherit;
}
.hero-image-container:hover img { transform: scale(1.08); }
.hero-image-container::before {
  content: ''; position: absolute; inset: -50%;
  background: radial-gradient(circle, rgba(0, 212, 255, 0.10) 0%, transparent 70%);
  animation: bc-pulse 4s ease-in-out infinite;
  pointer-events: none; z-index: -1;
}
@keyframes bc-pulse {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50%      { opacity: 1;   transform: scale(1.1); }
}
@media (max-width: 768px) {
  .hero-image-container:hover img { transform: scale(1.05); }
}
</style>
