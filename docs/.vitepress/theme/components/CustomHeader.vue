<script setup lang="ts">
// Standalone SmartHoldem-branded top nav (glassmorphism). Not mounted by default —
// the DefaultTheme layout provides a fully-featured nav with search + sidebar toggle.
// Kept here as an opt-in override for future customisation phases.
</script>

<template>
  <header class="sth-header">
    <div class="sth-header__inner">
      <a href="/devhub/" class="sth-header__brand">
        <img src="/logo.png" alt="SmartHoldem" class="sth-header__logo" />
        <span class="sth-header__title">SmartHoldem <span>DevHub</span></span>
      </a>
      <nav class="sth-header__nav">
        <a href="/devhub/api/">API</a>
        <a href="https://github.com/smartholdem" target="_blank" rel="noopener">GitHub</a>
        <a href="https://smartholdem.io" target="_blank" rel="noopener">↗ Main Site</a>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.sth-header {
  position: sticky;
  top: 0;
  z-index: 30;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background: rgba(10, 14, 39, 0.72);
  border-bottom: 1px solid rgba(0, 212, 255, 0.15);
}
.sth-header__inner {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}
.sth-header__brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
  text-decoration: none;
  font-weight: 700;
}
.sth-header__logo { width: 30px; height: 30px; }
.sth-header__title span { color: #FF5A0A; }
.sth-header__nav { display: flex; gap: 1.25rem; }
.sth-header__nav a {
  color: #94A3B8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}
.sth-header__nav a:hover { color: #00D4FF; }
@media (max-width: 768px) {
  .sth-header__nav { display: none; }
}
</style>
