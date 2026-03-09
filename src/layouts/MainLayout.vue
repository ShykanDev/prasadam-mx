<template>
  <header id="header" class="fixed w-full top-0 z-50  transition-all duration-500">
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

    <nav class=" transition-all duration-500 bg-linear-to-r shadow-2xl  px-6 py-1" :class="{
      'max-w-7xl relative overflow-hidden border-2 rounded-3xl! mt-3 backdrop-blur-sm mx-auto  border-white/10 ': isScrolled,
      ' from-[#5c3200] rounded-none via-[#7e610985] to-[#603701] ': useMainWallpaper().getIndex === 0,
      ' from-[#D7B347]/80 rounded-none via-[#D7B347]/80 to-[#9F6C2B]/80 ': useMainWallpaper().getIndex === 1,
      ' from-[#54816C]/80 rounded-none via-[#182A26]/80 to-[#182A26]/80 ': useMainWallpaper().getIndex === 2,
      ' from-[#103251]/80 rounded-none via-[#103251]/80 to-[#103251]/80 ': useMainWallpaper().getIndex === 3,
      ' from-[#496033]/80 rounded-none via-[#3E533C]/80 to-[#182A26]/80 ': useMainWallpaper().getIndex === 4,
    }">




      <div class="w-64 h-24 bg-orange-400/30 absolute -left-10 -top-10 blur-3xl rounded-full pointer-events-none"></div>

      <div class="flex justify-between items-center relative z-10">
        <a href="#" class="flex items-center gap-3 group">
          <div
            class="bg-white/10 backdrop-blur-md p-0.5 rounded-xl group-hover:bg-white/20 transition-all duration-300 border border-white/10">
            <img src="../assets/PrasadamLogo.svg" class="h-8 md:h-10 " alt="Logo">
          </div>
          <span class="font-bold text-xl md:text-2xl text-white font-kalam tracking-tight">prasadam.mx</span>
        </a>

        <div class="hidden md:flex items-center gap-1">
          <router-link :to="{ name: 'home' }"
            class="px-5 py-2 text-sm font-medium text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition-all">Inicio</router-link>
          <router-link :to="{ name: 'products' }"
            class="px-5 py-2 text-sm font-medium text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition-all">Productos</router-link>
          <router-link :to="{ name: 'about' }"
            class="px-5 py-2 text-sm font-medium text-amber-50/90 hover:text-white hover:bg-white/10 rounded-full transition-all">Nosotros</router-link>

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
  <footer class="relative bg-[#1b2e28] text-[#fdf7e4] py-16 overflow-hidden border-t-4 border-[#d7b347]">
    <!-- Decorative SVG Plants & Mandalas -->
    <div class="absolute top-0 right-0 py-8 opacity-10 pointer-events-none translate-x-1/4 -translate-y-1/4">
      <svg width="400" height="400" viewBox="0 0 200 200" fill="currentColor">
        <path d="M100,10 C110,40 140,50 170,50 C140,50 130,80 130,110 C130,140 160,150 190,150 C160,150 150,180 150,210" stroke="currentColor" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="80" stroke="currentColor" stroke-width="0.5" fill="none" />
        <circle cx="100" cy="100" r="60" stroke="currentColor" stroke-width="0.5" fill="none" stroke-dasharray="2,2" />
        <g transform="translate(100,100)">
          <path v-for="i in 12" :key="i" :d="'M0,-90 Q15,-60 0,-30 Q-15,-60 0,-90'" :transform="'rotate(' + (i * 30) + ')'" fill="currentColor" opacity="0.6"/>
        </g>
      </svg>
    </div>

    <div class="absolute bottom-0 left-0 py-8 opacity-10 pointer-events-none -translate-x-1/4 translate-y-1/4">
      <svg width="500" height="500" viewBox="0 0 200 200" fill="currentColor">
        <g transform="translate(100,100)">
          <path v-for="i in 8" :key="i" d="M0,0 C20,-40 50,-40 70,0 C50,40 20,40 0,0" :transform="'rotate(' + (i * 45) + ')'" fill="currentColor"/>
          <path v-for="i in 8" :key="i" d="M0,0 C15,-30 40,-30 55,0 C40,30 15,30 0,0" :transform="'rotate(' + (i * 45 + 22.5) + ')'" fill="currentColor" opacity="0.5"/>
        </g>
      </svg>
    </div>

    <!-- Additional Plant Ornaments -->
    <div class="absolute top-1/2 left-0 opacity-5 pointer-events-none -translate-x-1/2">
      <svg width="300" height="300" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50,100 Q60,50 100,50 Q60,50 50,0 Q40,50 0,50 Q40,50 50,100" />
      </svg>
    </div>
    <div class="absolute top-1/4 right-1/4 opacity-5 pointer-events-none">
      <svg width="200" height="200" viewBox="0 0 100 100" fill="currentColor">
        <path d="M0,50 Q25,0 50,50 T100,50" stroke="currentColor" fill="none" stroke-width="2" />
        <circle cx="50" cy="50" r="2" />
      </svg>
    </div>

    <!-- Main Footer Content -->
    <div class="container mx-auto px-6 relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Brand Section -->
        <div class="space-y-6">
          <div class="flex items-center gap-3 group">
            <div class="bg-white/10 backdrop-blur-md p-1.5 rounded-xl border border-white/20">
              <img src="../assets/PrasadamLogo.svg" class="h-12" alt="Prasadam Logo">
            </div>
            <span class="font-bold text-3xl text-[#d7b347] font-kalam tracking-tight">Prasadam</span>
          </div>
          <p class="text-[#fdf7e4]/80 leading-relaxed italic border-l-2 border-[#d7b347] pl-4">
            "Purificando cuerpo y mente a través del poder ancestral del Ayurveda."
          </p>
          <p class="text-sm font-light">
            Productos 100% naturales, traídos directamente de la India para restaurar tu equilibrio vital.
          </p>
          <div class="flex gap-4 pt-2">
            <a href="#" class="w-10 h-10 rounded-full border border-[#d7b347]/30 flex items-center justify-center hover:bg-[#d7b347] hover:text-[#1b2e28] transition-all duration-300">FB</a>
            <a href="#" class="w-10 h-10 rounded-full border border-[#d7b347]/30 flex items-center justify-center hover:bg-[#d7b347] hover:text-[#1b2e28] transition-all duration-300">IG</a>
            <a href="#" class="w-10 h-10 rounded-full border border-[#d7b347]/30 flex items-center justify-center hover:bg-[#d7b347] hover:text-[#1b2e28] transition-all duration-300">WA</a>
          </div>
        </div>

        <!-- Links Section -->
        <div>
          <h3 class="text-[#d7b347] font-kalam text-2xl font-bold mb-6 flex items-center gap-2">
             <span class="w-2 h-2 rounded-full bg-[#d7b347]"></span>
             Explora
          </h3>
          <ul class="space-y-3">
            <li>
              <router-link :to="{ name: 'home' }" class="hover:text-[#d7b347] transition-colors flex items-center gap-2 group">
                <span class="opacity-0 group-hover:opacity-100 transition-all">❯</span> Inicio
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'products' }" class="hover:text-[#d7b347] transition-colors flex items-center gap-2 group">
                <span class="opacity-0 group-hover:opacity-100 transition-all">❯</span> Productos
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'about' }" class="hover:text-[#d7b347] transition-colors flex items-center gap-2 group">
                <span class="opacity-0 group-hover:opacity-100 transition-all">❯</span> Nosotros
              </router-link>
            </li>
            <li>
              <a href="#" class="hover:text-[#d7b347] transition-colors flex items-center gap-2 group">
                <span class="opacity-0 group-hover:opacity-100 transition-all">❯</span> Contacto
              </a>
            </li>
          </ul>
        </div>

        <!-- Products/Expertise Section -->
        <div>
          <h3 class="text-[#d7b347] font-kalam text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#d7b347]"></span>
            Legado Natural
          </h3>
          <ul class="space-y-4">
            <li class="group">
              <a href="https://asafoetida.com.mx" target="_blank" class="block">
                <span class="text-sm uppercase tracking-widest text-[#d7b347]/60 group-hover:text-[#d7b347] transition-colors">Resina Ancestral</span>
                <p class="font-medium group-hover:translate-x-1 transition-transform">Asafoetida</p>
              </a>
            </li>
            <li class="group">
              <a href="https://pastaneem.com" target="_blank" class="block">
                <span class="text-sm uppercase tracking-widest text-[#d7b347]/60 group-hover:text-[#d7b347] transition-colors">Cuidado Dental</span>
                <p class="font-medium group-hover:translate-x-1 transition-transform">Pasta Neem</p>
              </a>
            </li>
            <li class="group">
              <a href="http://chyawanprash.com.mx" target="_blank" class="block">
                <span class="text-sm uppercase tracking-widest text-[#d7b347]/60 group-hover:text-[#d7b347] transition-colors">Elixir de Vida</span>
                <p class="font-medium group-hover:translate-x-1 transition-transform">Chyawanprash</p>
              </a>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div>
          <h3 class="text-[#d7b347] font-kalam text-2xl font-bold mb-6 flex items-center gap-2">
            <span class="w-2 h-2 rounded-full bg-[#d7b347]"></span>
            Contacto
          </h3>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="material-symbols-outlined text-[#d7b347]">location_on</span>
              <p class="text-sm">Miguel Hidalgo, CDMX<br>México, CP 11800</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[#d7b347]">phone_iphone</span>
              <p class="text-sm">+52 55 6395 0178</p>
            </div>
            <div class="flex items-center gap-3">
              <span class="material-symbols-outlined text-[#d7b347]">mail</span>
              <p class="text-sm">contacto@prasadam.mx</p>
            </div>
            <div class="mt-6 pt-6 border-t border-[#d7b347]/20">
              <p class="text-xs text-[#d7b347]/60">Horario de Atención:</p>
              <p class="text-sm">Lun - Vie: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-16 pt-8 border-t border-[#d7b347]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-[#fdf7e4]/40 uppercase">
        <p>&copy; 2026 Prasadam Ayurveda. Honrando la tradición.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-[#d7b347] transition-colors">Aviso de Privacidad</a>
          <a href="#" class="hover:text-[#d7b347] transition-colors">Términos y Condiciones</a>
        </div>
      </div>
    </div>

    <!-- Decorative bottom line with gold pattern -->
    <div class="absolute bottom-0 left-0 w-full h-1 bg-[url('https://www.transparenttextures.com/patterns/gold-scale.png')] opacity-20"></div>
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
