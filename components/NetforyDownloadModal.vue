<template>
  <ClientOnly>
    <Teleport to="body">
      <transition
        enter-active-class="transition-opacity duration-200 ease-out"
        leave-active-class="transition-opacity duration-200 ease-in"
        enter-from-class="opacity-0"
        leave-to-class="opacity-0"
        appear
      >
        <div v-if="open"
             class="fixed inset-0 z-[100] flex items-center justify-center p-4"
             role="dialog" aria-modal="true" aria-labelledby="netfory-modal-title"
             @click.self="close">
          <div class="absolute inset-0 bg-black/70 backdrop-blur-sm" @click="close"></div>

          <transition
            enter-active-class="transition-all duration-300 ease-out"
            leave-active-class="transition-all duration-200 ease-in"
            enter-from-class="opacity-0 scale-95"
            leave-to-class="opacity-0 scale-95"
            appear
          >
            <div v-if="open"
                 class="relative w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 p-7 text-left shadow-2xl"
                 style="background: rgba(10, 14, 39, 0.85); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);">
              <button
                type="button"
                class="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-white/5 hover:text-white"
                :aria-label="t('netforyModal.close')"
                @click="close"
              >
                <X class="h-5 w-5" />
              </button>

              <!-- Header: logo + title + version badge -->
              <div class="flex items-center gap-4">
                <div class="pulse-token relative flex h-14 w-14 shrink-0 items-center justify-center">
                  <span class="absolute inset-0 rounded-full ring-2 ring-neon-cyan/40"></span>
                  <img src="/images/home/sth-logo.png" alt="STH" class="relative h-10 w-10 drop-shadow-[0_0_18px_rgba(0,212,255,0.55)]" />
                </div>
                <div class="min-w-0">
                  <h2 id="netfory-modal-title" class="text-xl font-bold text-white sm:text-2xl">
                    {{ t('netforyModal.title') }}
                  </h2>
                  <p v-if="latestRelease" class="mono mt-1 text-xs text-secondary">
                    {{ t('netforyModal.version') }}:
                    <span class="text-neon-cyan">v{{ latestRelease.tag_name }}</span>
                    <span v-if="latestRelease.published_at"> · {{ formatDate(latestRelease.published_at) }}</span>
                  </p>
                </div>
              </div>

              <!-- Loading state -->
              <div v-if="releaseLoading" class="mt-6 flex items-center gap-3 rounded-lg border hair-border bg-white/5 px-4 py-4 text-sm text-secondary">
                <span class="inline-block h-4 w-4 animate-spin rounded-full border-2 border-neon-cyan border-t-transparent"></span>
                {{ t('netforyModal.loading') }}
              </div>

              <!-- Error state -->
              <div v-else-if="releaseError" class="mt-6 rounded-lg border border-red-500/30 bg-red-500/5 px-4 py-4 text-sm">
                <p class="text-red-300">{{ t('netforyModal.error') }}</p>
                <a href="https://github.com/NETFORY/netfory-releases/releases" target="_blank" rel="noopener"
                   class="mt-2 inline-flex items-center gap-1.5 text-neon-cyan hover:underline">
                  <ExternalLink class="h-3.5 w-3.5" /> {{ t('netforyModal.viewOnGithub') }}
                </a>
              </div>

              <!-- No assets -->
              <div v-else-if="!groupedAssets.length" class="mt-6 rounded-lg border hair-border bg-white/5 px-4 py-4 text-sm text-secondary">
                {{ t('netforyModal.noAssets') }}
              </div>

              <!-- Assets by platform -->
              <div v-else class="mt-6 max-h-[50vh] space-y-4 overflow-y-auto pr-1">
                <div v-for="group in groupedAssets" :key="group.key">
                  <div class="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-secondary">
                    <component :is="group.icon" class="h-4 w-4 text-neon-cyan" />
                    <span>{{ t('netforyModal.' + group.i18nKey) }}</span>
                  </div>
                  <a v-for="asset in group.assets" :key="asset.id"
                     :href="asset.browser_download_url"
                     target="_blank"
                     rel="noopener"
                     class="mb-2 flex items-center gap-3 rounded-lg border hair-border bg-white/5 px-4 py-3 transition-all hover:border-neon-cyan/40 hover:bg-neon-cyan/5 hover:-translate-y-0.5"
                     @click="onAssetClick">
                    <Download class="h-5 w-5 shrink-0 text-neon-cyan" />
                    <div class="min-w-0 flex-1">
                      <p class="mono truncate text-sm text-white">{{ asset.name }}</p>
                      <p class="mt-0.5 text-xs text-secondary">{{ formatSize(asset.size) }}</p>
                    </div>
                    <span class="mono rounded border border-neon-cyan/30 px-2 py-1 text-[10px] uppercase text-neon-cyan">
                      {{ t('netforyModal.download') }}
                    </span>
                  </a>
                </div>

                <a href="https://github.com/NETFORY/netfory-releases/releases" target="_blank" rel="noopener"
                   class="mt-1 inline-flex items-center gap-1.5 text-xs text-secondary transition-colors hover:text-neon-cyan">
                  <ExternalLink class="h-3 w-3" /> {{ t('netforyModal.viewOnGithub') }}
                </a>
              </div>

              <!-- Telegram section (always at bottom) -->
              <div class="mt-6 border-t hair-border pt-5">
                <p class="text-sm leading-relaxed text-slate-300">{{ t('netforyModal.text2') }}</p>
                <a href="https://t.me/smartholdem" target="_blank" rel="noopener"
                   class="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold shadow-neon-cyan transition-all hover:-translate-y-0.5"
                   style="background:#00D4FF; color:#0A0E27;"
                   @click="close">
                  <Send class="h-4 w-4" /> {{ t('netforyModal.telegram') }}
                </a>
              </div>
            </div>
          </transition>
        </div>
      </transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
import { Download, ExternalLink, Send, X, MonitorSmartphone, Apple, TerminalSquare, Smartphone, Package } from 'lucide-vue-next'

const props = defineProps({
  open: { type: Boolean, default: false }
})
const emit = defineEmits(['update:open'])

const { t, locale } = useI18n()

const close = () => emit('update:open', false)

// GitHub latest release + grouped assets
const latestRelease = ref(null)
const releaseLoading = ref(false)
const releaseError = ref(false)
let releaseFetched = false

const GH_LATEST_URL = 'https://api.github.com/repos/NETFORY/netfory-releases/releases/latest'

async function fetchLatestRelease () {
  if (releaseFetched && latestRelease.value) return
  releaseLoading.value = true
  releaseError.value = false
  try {
    const res = await fetch(GH_LATEST_URL, {
      headers: { Accept: 'application/vnd.github+json' }
    })
    if (!res.ok) throw new Error('HTTP ' + res.status)
    const data = await res.json()
    latestRelease.value = data
    releaseFetched = true
  } catch (e) {
    releaseError.value = true
  } finally {
    releaseLoading.value = false
  }
}

// Body scroll lock + fetch on open
watch(() => props.open, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
  if (open) fetchLatestRelease()
})

// Escape closes
if (process.client) {
  onMounted(() => {
    const onKey = (e) => { if (e.key === 'Escape' && props.open) close() }
    window.addEventListener('keydown', onKey)
    onBeforeUnmount(() => window.removeEventListener('keydown', onKey))
  })
}

// Platform classification
const PLATFORM_ORDER = ['windows', 'macos', 'linux', 'android', 'other']
const PLATFORM_META = {
  windows: { i18nKey: 'platformWindows', icon: MonitorSmartphone, exts: ['.msi', '.exe'] },
  macos:   { i18nKey: 'platformMacos',   icon: Apple,             exts: ['.dmg', '.pkg'] },
  linux:   { i18nKey: 'platformLinux',   icon: TerminalSquare,    exts: ['.deb', '.appimage', '.rpm', '.tar.gz', '.tar.xz'] },
  android: { i18nKey: 'platformAndroid', icon: Smartphone,        exts: ['.apk', '.aab'] },
  other:   { i18nKey: 'platformOther',   icon: Package,           exts: [] }
}

function classify (filename) {
  const lower = filename.toLowerCase()
  for (const key of PLATFORM_ORDER) {
    for (const ext of PLATFORM_META[key].exts) {
      if (lower.endsWith(ext)) return key
    }
  }
  return 'other'
}

const groupedAssets = computed(() => {
  const assets = latestRelease.value?.assets || []
  const buckets = {}
  for (const a of assets) {
    const key = classify(a.name)
    if (!buckets[key]) buckets[key] = []
    buckets[key].push(a)
  }
  return PLATFORM_ORDER
    .filter(k => buckets[k]?.length)
    .map(k => ({
      key: k,
      i18nKey: PLATFORM_META[k].i18nKey,
      icon: PLATFORM_META[k].icon,
      assets: buckets[k]
    }))
})

function formatSize (bytes) {
  if (!bytes && bytes !== 0) return ''
  const mb = bytes / 1048576
  if (mb < 1) return (bytes / 1024).toFixed(1) + ' KB'
  return mb.toFixed(1) + ' MB'
}

function formatDate (iso) {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString(locale.value, { year: 'numeric', month: 'short', day: 'numeric' })
  } catch { return '' }
}

function onAssetClick () {
  setTimeout(() => close(), 200)
}
</script>

<style scoped>
.pulse-token::after{
  content:'';
  position:absolute; inset:-8px;
  border-radius:9999px;
  border:2px solid rgba(0,212,255,0.35);
  animation: pulse-ring 2s ease-out infinite;
  pointer-events:none;
}
@keyframes pulse-ring {
  0%   { transform: scale(0.85); opacity: 0.9; }
  100% { transform: scale(1.5);  opacity: 0;   }
}
</style>
