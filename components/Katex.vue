<template>
  <div :class="display ? 'katex-block' : 'katex-inline'" v-html="html" />
</template>

<script setup>
import katex from 'katex'
const props = defineProps({
  expression: { type: String, required: true },
  display: { type: Boolean, default: false }
})
const html = computed(() =>
  katex.renderToString(props.expression, {
    displayMode: props.display,
    throwOnError: false,
    output: 'html'
  })
)
</script>

<style scoped>
.katex-block{
  overflow-x: auto;
  overflow-y: hidden;
  max-width: 100%;
  padding: .25rem 0;
  /* Allow this box to shrink below its intrinsic content width inside
     grid/flex parents — critical for mobile viewports. */
  min-width: 0;
}
.katex-inline{ max-width:100%; overflow-x:auto; }
</style>
