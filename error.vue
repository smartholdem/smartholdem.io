<template>
  <div class="min-h-screen">
    <div class="container-x py-24 text-center">
      <p class="eyebrow mb-4">Error {{ error?.statusCode }}</p>
      <h1 class="text-4xl font-bold mb-4">Something went off-network</h1>
      <p class="text-secondary mb-8">{{ error?.message || 'The requested resource could not be found.' }}</p>
      <button class="btn-primary" @click="handleError">Back to Home</button>
    </div>
  </div>
</template>

<script setup>
defineProps({ error: Object })
const handleError = () => clearError({ redirect: '/' })
</script>
