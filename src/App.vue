<script setup>
import { defineAsyncComponent } from 'vue'

const HomeView = defineAsyncComponent(() => import('./views/HomeView.vue'))
</script>

<template>
  <Suspense>
    <template #default>
      <HomeView />
    </template>
    <template #fallback>
      <div class="text-center mt-8">Carregando...</div>
    </template>
  </Suspense>
</template>
