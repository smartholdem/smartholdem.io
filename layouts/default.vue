<template>
  <div class="flex min-h-screen flex-col">
    <AppHeader />
    <main class="flex-1 pt-16">
      <slot />
    </main>
    <AppFooter />
    <ScrollToTop />
  </div>
</template>
