<template>
  <section v-if="items.length" class="mx-auto mt-16 max-w-5xl border-t hair-border pt-12">
    <header class="mb-8 flex items-baseline justify-between gap-4">
      <div>
        <p class="eyebrow mb-2">{{ t('news.related.eyebrow') }}</p>
        <h2 class="text-2xl font-bold sm:text-3xl">{{ t('news.related.title') }}</h2>
      </div>
      <NuxtLink :to="localePath('/news')" class="hidden shrink-0 text-sm font-medium text-neon-cyan hover:underline sm:inline-flex sm:items-center sm:gap-1">
        {{ t('news.related.allNews') }} <ArrowRight class="h-3.5 w-3.5" />
      </NuxtLink>
    </header>

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="a in items"
        :key="a.id"
        class="group flex flex-col overflow-hidden rounded-2xl border hair-border surface transition-all hover:border-neon-cyan/40 hover:-translate-y-1"
      >
        <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="block overflow-hidden">
          <img
            :src="a.image"
            :alt="a.title"
            loading="lazy"
            class="block h-auto w-full transition-transform duration-500 group-hover:scale-105"
            @error="onImgError($event, a)"
          />
        </NuxtLink>
        <div class="flex flex-1 flex-col p-5">
          <div class="mb-2 flex items-center gap-2 text-xs text-secondary">
            <span class="mono rounded bg-neon-cyan/10 px-2 py-0.5 text-neon-cyan">{{ a.tag }}</span>
            <time :datetime="a.date">{{ formatDate(a.date) }}</time>
          </div>
          <h3 class="font-bold leading-snug">
            <NuxtLink :to="localePath(`/news/${a.slug || a.id}`)" class="transition-colors group-hover:text-neon-cyan">
              {{ a.title }}
            </NuxtLink>
          </h3>
          <p class="mt-2 line-clamp-3 text-sm text-secondary">{{ a.text }}</p>
          <NuxtLink
            :to="localePath(`/news/${a.slug || a.id}`)"
            class="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neon-cyan"
          >
            {{ t('news.readMore') }} <ArrowRight class="h-3.5 w-3.5" />
          </NuxtLink>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
import { ArrowRight } from 'lucide-vue-next'

const props = defineProps({
  currentId: { type: [String, Number], required: true },
  limit: { type: Number, default: 3 }
})

const { t, locale } = useI18n()
const localePath = useLocalePath()

const items = computed(() => getRelatedNews(props.currentId, props.limit))

const localeMap = { en:'en-US', ru:'ru-RU', zh:'zh-CN', id:'id-ID', ko:'ko-KR', th:'th-TH', es:'es-ES', vi:'vi-VN', fr:'fr-FR', de:'de-DE', kk:'kk-KZ', pt:'pt-BR', uz:'uz-UZ', mn:'mn-MN', ja:'ja-JP', sw:'sw-KE', ar:'ar-SA', hi:'hi-IN' }
const formatDate = (d) => {
  if (!d) return ''
  try { return new Date(d).toLocaleDateString(localeMap[locale.value] || 'en-US', { year:'numeric', month:'short', day:'numeric' }) } catch { return d }
}

const onImgError = (e, a) => {
  if (a?.imageRemote && e.target.src !== a.imageRemote) e.target.src = a.imageRemote
}
</script>
