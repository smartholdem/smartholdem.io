<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
const { Layout } = DefaultTheme
</script>

<template>
  <!--
    We reuse the default VitePress Layout to preserve TOC, search, sidebar behaviours,
    responsive hamburger menu, dark mode toggle, and page transitions. All SmartHoldem
    branding is applied via CSS variable overrides in ./styles/theme.css & custom.css,
    which act as our "CustomHeader" / "CustomSidebar" styling layers.
  -->
  <Layout />
</template>
