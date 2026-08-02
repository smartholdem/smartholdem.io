<script setup lang="ts">
// Placeholder for a future fully-custom sidebar. Not mounted — the DefaultTheme
// sidebar (styled through ./styles/custom.css) is used to preserve routing,
// active-link tracking, and mobile drawer accessibility.
</script>

<template>
  <aside class="sth-sidebar">
    <nav>
      <a href="/devhub/" class="sth-sidebar__link">Overview</a>
      <a href="/devhub/api/" class="sth-sidebar__link">API Overview</a>
      <a href="/devhub/api/endpoints" class="sth-sidebar__link">Endpoints Reference</a>
    </nav>
  </aside>
</template>

<style scoped>
.sth-sidebar {
  position: sticky;
  top: 4.5rem;
  padding: 1rem 0.5rem;
  border-right: 1px solid rgba(0, 212, 255, 0.12);
}
.sth-sidebar__link {
  display: block;
  padding: 0.4rem 0.75rem;
  border-radius: 0.4rem;
  color: #94A3B8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.18s;
}
.sth-sidebar__link:hover,
.sth-sidebar__link.is-active {
  background: rgba(255, 90, 10, 0.12);
  color: #FF5A0A;
  border-left: 2px solid #FF5A0A;
}
</style>
