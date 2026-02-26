<template>
  <header id="header" class="fixed w-full top-0 z-50">
    <!-- <div
      class="max-w-7xl mx-auto mb-3 hidden md:flex justify-between items-center px-6 py-1 bg-amber-600 text-white rounded-full text-xs font-medium shadow-lg">
      <div class="flex gap-6">
        <a href="#" class="flex items-center gap-2 hover:text-amber-200 transition-colors">
          Gutenberg #128, CDMX
        </a>
        <div class="flex gap-4 border-l border-amber-500/50 pl-6">
          <a href="tel:+525563950178" class="hover:text-amber-200 transition">+52 55-63-95-01-78</a>
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <a href="#" class="hover:scale-110 transition-transform">FB</a>
        <a href="#" class="hover:scale-110 transition-transform">IG</a>
      </div>
    </div> -->

    <nav class=" transition-all duration-500 bg-linear-to-r shadow-2xl  px-6 py-2.5" :class="{
      'max-w-7xl relative overflow-hidden border-2 rounded-3xl! mt-3 backdrop-blur-sm mx-auto border-white/10 ': isScrolled,
      ' from-[#D7B347]/80 rounded-none via-[#D7B347]/80 to-[#9F6C2B]/80 ': useMainWallpaper().getIndex === 0,
      ' from-[#54816C]/80 rounded-none via-[#182A26]/80 to-[#182A26]/80 ': useMainWallpaper().getIndex === 1,
      ' from-[#103251]/80 rounded-none via-[#103251]/80 to-[#103251]/80 ': useMainWallpaper().getIndex === 2,
      ' from-[#496033]/80 rounded-none via-[#3E533C]/80 to-[#182A26]/80 ': useMainWallpaper().getIndex === 3,
    }">




      <div class="w-64 h-24 bg-orange-400/30 absolute -left-10 -top-10 blur-3xl rounded-full pointer-events-none"></div>

      <div class="flex justify-between items-center relative z-10">
        <a href="#" class="flex items-center gap-3 group">
          <div
            class="bg-white/10 backdrop-blur-md p-1.5 rounded-xl group-hover:bg-white/20 transition-all duration-300 border border-white/10">
            <img src="../assets/PrasadamLogo.svg" class="h-8 md:h-10 " alt="Logo">
          </div>
          <span class="font-bold text-xl md:text-2xl text-white font-kalam tracking-tight">prasadam.mx</span>
        </a>

        <div class="hidden md:flex items-center gap-1">
          <router-link :to="{ name: 'home' }"
            class="px-5 py-2 text-sm font-medium text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition-all">Inicio</router-link>
          <router-link :to="{ name: 'about' }"
            class="px-5 py-2 text-sm font-medium text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition-all">Nosotros</router-link>
          <a href="#"
            class="px-5 py-2 text-sm font-medium text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition-all">Productos</a>

          <a href="#"
            class="ml-4 px-6 py-2.5 bg-white text-amber-900 text-sm font-bold rounded-full shadow-lg hover:bg-amber-50 hover:scale-105 active:scale-95 transition-all">
            Contacto
          </a>
        </div>

        <button @click="isOpen = !isOpen"
          class="md:hidden p-2 rounded-xl bg-white/10 text-white flex items-center justify-center">
          <span v-if="!isOpen" class="material-symbols-outlined">menu</span>
          <span v-else class="material-symbols-outlined">close</span>
        </button>
      </div>

      <div v-show="isOpen" class="md:hidden relative z-20 mt-4 pb-4 space-y-2 border-t border-white/10 pt-4">
        <a href="#" class="block px-4 py-3 text-white/90 hover:bg-white/10 rounded-xl">Inicio</a>
        <a href="#" class="block px-4 py-3 text-white/90 hover:bg-white/10 rounded-xl">Nosotros</a>
        <a href="#" class="block px-4 py-3 text-white/90 hover:bg-white/10 rounded-xl">Productos</a>
        <a href="#"
          class="block px-4 py-3 bg-white text-amber-900 text-center font-bold rounded-xl shadow-lg">Contacto</a>
      </div>
    </nav>
  </header>

  <main class="">
    <slot name="main"></slot>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-4 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Prasadam</h3>
          <p>Productos ayurvédicos 100% naturales, traídos desde la India para su bienestar.</p>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Enlaces Rápidos</h3>
          <ul class="space-y-2">
            <li><a href="#inicio" class="hover:text-prasadam-300 transition">Inicio</a></li>
            <li><a href="#productos" class="hover:text-prasadam-300 transition">Productos</a></li>
            <li><a href="#nosotros" class="hover:text-prasadam-300 transition">Nosotros</a></li>
            <li><a href="#contacto" class="hover:text-prasadam-300 transition">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Productos</h3>
          <ul class="space-y-2">
            <li><a href="https://asafoetida.com.mx" target="_blank"
                class="hover:text-prasadam-300 transition">Asafoetida</a></li>
            <li><a href="https://pastaneem.com" target="_blank" class="hover:text-prasadam-300 transition">Pasta
                Neem</a></li>
            <li><a href="http://chyawanprash.com.mx" target="_blank"
                class="hover:text-prasadam-300 transition">Chyawanprash</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-bold mb-4">Contacto</h3>
          <p>Anzures, CDMX Mexico</p>
          <p>+52 55 6395 0178</p>
        </div>
      </div>
      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; 2026 Prasadam. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useMainWallpaper } from '@/stores/mainWallpaper';
import { onMounted, onUnmounted, ref } from 'vue';
import { RouterLink } from 'vue-router';

const isOpen = ref(true)
const isScrolled = ref(false);

const header = ref<HTMLElement | null>(null);
const headerHeight = ref(0);

const windowScroll = () => {
  window.addEventListener('scroll', () => {
    if (window.scrollY > headerHeight.value) {
      isScrolled.value = true;
    }
    else {
      isScrolled.value = false;
    }
  })
}

onMounted(() => {
  header.value = document.getElementById('header');
  headerHeight.value = header.value?.offsetHeight || 0;
  windowScroll();
})

onUnmounted(() => {
  window.removeEventListener('scroll', windowScroll);
})





</script>

<style scoped></style>
