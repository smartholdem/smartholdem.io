<template>
  <!-- Rendered in SSR (v-show, not v-if) so the runnable demo source is part of
       the static HTML for search engines and AI agents. -->
  <transition
    enter-active-class="transition-opacity duration-200 ease-out"
    leave-active-class="transition-opacity duration-200 ease-in"
    enter-from-class="opacity-0"
    leave-to-class="opacity-0"
  >
    <div v-show="open"
         class="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
         role="dialog" aria-modal="true" aria-labelledby="pq-example-title"
         data-testid="pq-example-modal">
      <div class="absolute inset-0 bg-black/75 backdrop-blur-sm" @click="close"></div>

      <div class="relative flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 text-left shadow-2xl"
           style="background: rgba(10, 14, 39, 0.92); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); box-shadow: 0 0 80px -20px rgba(0,212,255,0.35);">
        <!-- Header -->
        <div class="flex items-start gap-4 border-b border-white/10 px-6 py-5">
          <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-neon-cyan/40 bg-neon-cyan/10">
            <ShieldCheck class="h-5 w-5 text-neon-cyan" />
          </div>
          <div class="min-w-0 flex-1">
            <p class="mono text-[11px] uppercase tracking-wider text-neon-cyan">Quantum Shield · ML-DSA-44 · NIST FIPS 204</p>
            <h3 id="pq-example-title" class="mt-1 text-xl font-bold text-white">{{ t('blockchain.pqExample.title') }}</h3>
          </div>
          <button type="button"
                  class="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                  :aria-label="t('blockchain.pqExample.close')" data-testid="pq-example-close" @click="close">
            <X class="h-5 w-5" />
          </button>
        </div>

        <!-- Body -->
        <div class="flex-1 space-y-6 overflow-y-auto px-6 py-6">
          <!-- Step 1: file -->
          <div class="flex gap-4">
            <span class="step-num">1</span>
            <div class="min-w-0 flex-1">
              <p class="text-sm text-slate-300">{{ t('blockchain.pqExample.fileText') }}</p>
              <a :href="FILE_URL" target="_blank" rel="noopener"
                 class="mt-2 inline-flex max-w-full items-center gap-2 break-all rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-mono text-xs text-neon-cyan transition-colors hover:border-neon-cyan/50">
                <Github class="h-4 w-4 shrink-0" />
                sth-core-pq/examples/quantum_shield.rs
                <ExternalLink class="h-3.5 w-3.5 shrink-0 opacity-70" />
              </a>
            </div>
          </div>

          <!-- Step 2: run -->
          <div class="flex gap-4">
            <span class="step-num">2</span>
            <div class="min-w-0 flex-1">
              <p class="text-sm text-slate-300">{{ t('blockchain.pqExample.runText') }}</p>
              <div class="code-box mt-2 flex items-center justify-between gap-3 px-4 py-3">
                <code class="mono overflow-x-auto whitespace-nowrap text-sm"><span class="text-neon-green">$</span> <span class="text-slate-100">{{ RUN_CMD }}</span></code>
                <button type="button" class="copy-btn" @click="copy('run', RUN_CMD)">
                  <component :is="copied === 'run' ? Check : Copy" class="h-3.5 w-3.5" />
                  <span>{{ copied === 'run' ? t('blockchain.pqExample.copied') : t('blockchain.pqExample.copy') }}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Step 3: source -->
          <div class="flex gap-4">
            <span class="step-num">3</span>
            <div class="min-w-0 flex-1">
              <p class="text-sm text-slate-300">{{ t('blockchain.pqExample.codeText') }}</p>
              <div class="code-box mt-2 overflow-hidden">
                <div class="flex items-center justify-between border-b border-white/10 px-4 py-2" style="background:rgba(0,212,255,0.06)">
                  <span class="mono text-[11px] uppercase tracking-wider text-neon-cyan">examples/quantum_shield.rs</span>
                  <button type="button" class="copy-btn" data-testid="pq-example-copy-code" @click="copy('code', DEMO_CODE)">
                    <component :is="copied === 'code' ? Check : Copy" class="h-3.5 w-3.5" />
                    <span>{{ copied === 'code' ? t('blockchain.pqExample.copied') : t('blockchain.pqExample.copy') }}</span>
                  </button>
                </div>
                <pre class="overflow-x-auto p-4 text-[13px] leading-relaxed"><code class="mono" style="color:#e2e8f0" v-html="demoHtml"></code></pre>
              </div>
            </div>
          </div>

          <!-- Step 4: output -->
          <div class="flex gap-4">
            <span class="step-num">4</span>
            <div class="min-w-0 flex-1">
              <p class="text-sm text-slate-300">{{ t('blockchain.pqExample.outputText') }}</p>
              <div class="code-box mt-2 overflow-hidden">
                <div class="flex items-center gap-2 border-b border-white/10 px-4 py-2" style="background:rgba(16,185,129,0.08)">
                  <span class="h-2 w-2 rounded-full bg-neon-green"></span>
                  <span class="mono text-[11px] uppercase tracking-wider text-neon-green">stdout</span>
                </div>
                <pre class="overflow-x-auto p-4 text-[13px] leading-relaxed"><code class="mono"><span style="color:#94a3b8">commitment : </span>
<span style="color:#c3e88d">sthpq1:01:ab3d1f18851db47bd135f5473a0a28a5182082aed3b34c4b872a28914ca026c7</span>
<span style="color:#e2e8f0">pk 1312 B · sig 2420 B · verified: </span><span style="color:#10B981">true</span>
<span style="color:#e2e8f0">tampered signature rejected: </span><span style="color:#10B981">true</span></code></pre>
              </div>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="flex flex-wrap items-center justify-end gap-3 border-t border-white/10 px-6 py-4">
          <a :href="FILE_URL" target="_blank" rel="noopener" class="btn-outline-cyan text-sm">
            <Github class="h-4 w-4" /> {{ t('blockchain.pqExample.openGithub') }}
          </a>
          <button type="button" class="btn-primary text-sm" @click="close">{{ t('blockchain.pqExample.close') }}</button>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue'
import { X, ShieldCheck, Github, ExternalLink, Copy, Check } from 'lucide-vue-next'

const props = defineProps({ open: { type: Boolean, default: false } })
const emit = defineEmits(['update:open'])
const { t } = useI18n()

const FILE_URL = 'https://github.com/smartholdem/sth-core-pq/blob/main/examples/quantum_shield.rs'
const RUN_CMD = 'cargo run --release --example quantum_shield'
const DEMO_CODE = `// STH-Core-PQ: Quantum Shield — ML-DSA-44 (NIST FIPS 204)
use sha2::Digest as _;
use sth_core::crypto::pq::{self, PqKeyPair};

fn main() -> Result<(), Box<dyn std::error::Error>> {
    // Deterministic PQ key: same passphrase → same key on every device
    let delegate = PqKeyPair::from_passphrase("delegate second passphrase");
    let public_key = delegate.public_key(); // 1 312 bytes

    // Stage A: on-chain commitment sha256(pk) in vendorField
    println!("commitment : {}", delegate.commitment());

    // Stage C: hybrid block = secp256k1 ECDSA + ML-DSA-44 over M_B = sha256(header || blockSignature)
    let m_b = sha2::Sha256::digest(b"block header || ecdsa blockSignature");
    let pq_signature = delegate.sign_with_ctx(&m_b, pq::BLOCK_CTX)?; // 2 420 bytes

    let valid = pq::verify_with_ctx(&public_key, &m_b, &pq_signature, pq::BLOCK_CTX)?;
    println!("pk {} B · sig {} B · verified: {valid}", public_key.len(), pq_signature.len());

    // Any tampering with the block is rejected
    let mut forged = pq_signature.clone();
    forged[0] ^= 0x01;
    let rejected = !pq::verify_with_ctx(&public_key, &m_b, &forged, pq::BLOCK_CTX)?;
    println!("tampered signature rejected: {rejected}");
    Ok(())
}`
const demoHtml = computed(() => highlightRust(DEMO_CODE))

const close = () => emit('update:open', false)

const copied = ref('')
let copyTimer = null
async function copy (id, text) {
  try {
    await navigator.clipboard.writeText(text)
    copied.value = id
    clearTimeout(copyTimer)
    copyTimer = setTimeout(() => { copied.value = '' }, 1800)
  } catch { /* clipboard unavailable */ }
}

watch(() => props.open, (v) => {
  if (typeof document !== 'undefined') document.body.style.overflow = v ? 'hidden' : ''
})
const onKey = (e) => { if (e.key === 'Escape' && props.open) close() }
onMounted(() => window.addEventListener('keydown', onKey))
onBeforeUnmount(() => {
  window.removeEventListener('keydown', onKey)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<style scoped>
.step-num {
  display: inline-flex; flex-shrink: 0; align-items: center; justify-content: center;
  width: 1.75rem; height: 1.75rem; border-radius: 9999px;
  border: 1px solid rgba(0, 212, 255, 0.45); background: rgba(0, 212, 255, 0.1);
  color: #00D4FF; font-family: ui-monospace, SFMono-Regular, Menlo, monospace; font-size: 0.75rem; font-weight: 700;
}
.code-box { border-radius: 0.75rem; border: 1px solid rgba(255, 255, 255, 0.1); background: #0b1020; }
.copy-btn {
  display: inline-flex; flex-shrink: 0; align-items: center; gap: 0.35rem;
  border-radius: 0.5rem; border: 1px solid rgba(255, 255, 255, 0.12); padding: 0.25rem 0.6rem;
  font-size: 0.7rem; color: #cbd5e1; transition: all .15s ease;
}
.copy-btn:hover { border-color: rgba(0, 212, 255, 0.6); color: #00D4FF; }
</style>
