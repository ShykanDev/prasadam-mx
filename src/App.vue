<script setup lang="ts">
import { RouterView } from 'vue-router';
import FactsComponent from './components/FactsComponent.vue';
</script>

<template>
  <FactsComponent title="¿Sabía que el Neem?"
    info="El árbol de Neem es conocido en la India como 'la farmacia del pueblo' por sus múltiples propiedades curativas y antisépticas." />
  <RouterView />
</template>

<style scoped></style>
