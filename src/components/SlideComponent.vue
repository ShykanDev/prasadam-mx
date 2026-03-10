<script lang="ts" setup>
import { useRouter } from 'vue-router';
import type { SlideData } from '@/types/slide';
import { userProductStore } from '@/stores/product';

const { slide, infoSide } = defineProps<{
  slide: SlideData;
  infoSide?: 'left' | 'right';
}>();

const productStore = userProductStore();
const router = useRouter();

const handleWholesaleClick = (amount?: number) => {
  const name = slide.productName || slide.title.replace(/<br\s*\/?>/gi, ' ');
  productStore.setCurrentProduct(name.trim());
  if (amount) productStore.setCurrentAmount(amount);
  router.push('/contact');
};
</script>


<template>
  <div class="slide-root relative w-full h-full overflow-hidden font-philosopher selection:bg-orange-500/30">
    <!-- Background Layers -->
    <div class="absolute inset-0 z-0">
      <img :src="slide.wallpaper" :alt="slide.title" class="w-full h-full object-cover scale-105 animate-slow-zoom" />
      <!-- Subtle Black Overlay (20% as requested) -->
      <div class="absolute inset-0 bg-black/20 z-1"></div>
      <!-- Original Gradient -->
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/40 z-2"></div>
      <!-- Mandala pattern overlay -->
      <div class="absolute inset-0 opacity-[0.15] mix-blend-overlay z-3"
        style="background-image: url('https://www.transparenttextures.com/patterns/mandala.png');"></div>
    </div>

    <!-- Main Content Container -->
    <div class="relative z-10 w-full h-full flex flex-col"
      :class="slide.isIntro ? 'justify-between py-24' : 'pt-[100px] md:pt-[120px]'">

      <!-- ITEM 1: TITLE (For Intro Slide it goes to Top) -->
      <header v-if="slide.isIntro" class="w-full text-center px-6 animate-fade-down">
        <div class="flex items-center justify-center gap-2 mb-4">
          <span class="text-[#D4AF37] material-symbols-outlined animate-pulse text-3xl">hotel_class</span>
          <span class="text-white tracking-[0.6em] text-xs uppercase font-black">Prasadam · México</span>
        </div>
        <h1
          class="font-rozha text-white leading-[1.1] mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)] text-5xl md:text-7xl lg:text-8xl max-w-6xl mx-auto"
          v-html="slide.title"></h1>
      </header>

      <!-- REGULAR SLIDE LAYOUT (Split Info/Image) -->
      <main v-if="!slide.isIntro"
        class="flex-1 w-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 pb-10">

        <!-- Info Section -->
        <div class="w-full md:w-1/2 flex flex-col"
          :class="[infoSide === 'right' ? 'md:order-2 md:items-end text-right' : 'md:items-start text-left']">

          <div class="flex items-center gap-2 mb-2">
            <span class="text-[#D4AF37] material-symbols-outlined animate-pulse">hotel_class</span>
            <span class="text-white tracking-[0.4em] text-[10px] uppercase font-bold">Importación de la India</span>
          </div>

          <h1 class="font-rozha text-white leading-[0.9] mb-6 drop-shadow-2xl text-6xl md:text-8xl"
            v-html="slide.title">
          </h1>

          <p class="text-white text-sm md:text-lg max-w-md leading-relaxed mb-8 font-light drop-shadow-md">
            {{ slide.subtitle || slide.infoText }}
          </p>

          <!-- Buttons Container -->
          <div class="flex flex-wrap gap-4 relative" :class="infoSide === 'right' ? 'justify-end' : ''">

            <!-- Bulk Purchases (Now prominent Golden Theme) -->
            <div class="relative group">
              <button
                class="px-10 py-4 cursor-pointer bg-linear-to-r from-[#D4AF37] to-[#B8860B] text-white rounded-full font-bold shadow-[0_10px_30px_rgba(184,134,11,0.4)] hover:brightness-110 hover:scale-105 active:scale-95 transition-all flex flex-col items-center leading-none border border-[#D4AF37]/50">

                <span class="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em]">
                  Comprar Mayoreo
                  <span class="material-symbols-outlined text-sm">expand_less</span>
                </span>

                <span class="flex items-center gap-1 text-[10px] text-white/90 mt-1 font-normal italic">
                  <span class="material-symbols-outlined text-[13px] leading-none">
                    percent_discount
                  </span>
                  Ahorra hasta un 30%
                </span>
              </button>

              <!-- Hover Menu (Gold/Indú Themed) -->
              <div
                class="absolute bottom-[calc(100%+15px)] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-50 w-[420px]"
                :class="infoSide === 'right' ? 'right-0 origin-bottom-right' : 'left-1/2 -translate-x-1/2 origin-bottom'">

                <div class="relative">
                  <div
                    class="bg-linear-to-b from-[#1A140F] via-[#2A1F18] to-[#1A140F] border border-[#D4AF37]/30 px-6 py-6 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-md">

                    <!-- Header -->
                    <div class="flex items-center gap-4 mb-5 border-b border-[#D4AF37]/10 pb-4">
                      <div class="bg-[#D4AF37]/20 p-2.5 rounded-xl border border-[#D4AF37]/30">
                        <span class="material-symbols-outlined text-[#D4AF37] text-xl">spa</span>
                      </div>

                      <div>
                        <span class="text-[9px] uppercase tracking-[0.3em] text-[#D4AF37]/80 font-black">
                          Descuento Especial
                        </span>
                        <h3 class="text-base font-bold text-white leading-none mt-1">
                          Descuentos por mayoreo
                        </h3>
                      </div>
                    </div>

                    <!-- Horizontal tiers -->
                    <div class="grid grid-cols-3 gap-3 mb-5">
                      <div @click="handleWholesaleClick(5)"
                        class="flex flex-col items-center justify-center border border-[#D4AF37]/10 rounded-xl py-4 bg-black/40 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:scale-105 active:scale-95 transition-all group/tier cursor-pointer">
                        <span
                          class="text-[10px] text-stone-400 group-hover/tier:text-white uppercase font-bold tracking-tighter transition-colors">5+
                          piezas</span>
                        <span class="text-[#D4AF37] font-black text-sm mt-1">10% OFF</span>
                      </div>

                      <div @click="handleWholesaleClick(10)"
                        class="flex flex-col items-center justify-center border border-[#D4AF37]/10 rounded-xl py-4 bg-black/40 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:scale-105 active:scale-95 transition-all group/tier cursor-pointer">
                        <span
                          class="text-[10px] text-stone-400 group-hover/tier:text-white uppercase font-bold tracking-tighter transition-colors">10+
                          piezas</span>
                        <span class="text-[#D4AF37] font-black text-sm mt-1">20% OFF</span>
                      </div>

                      <div @click="handleWholesaleClick(50)"
                        class="flex flex-col items-center justify-center border border-[#D4AF37]/10 rounded-xl py-4 bg-black/40 hover:bg-[#D4AF37]/20 hover:border-[#D4AF37]/40 hover:scale-105 active:scale-95 transition-all group/tier cursor-pointer">
                        <span
                          class="text-[10px] text-stone-400 group-hover/tier:text-white uppercase font-bold tracking-tighter transition-colors">50+
                          piezas</span>
                        <span class="text-[#D4AF37] font-black text-sm mt-1">30% OFF</span>
                      </div>
                    </div>

                    <!-- Bottom row -->
                    <div class="flex items-center justify-between gap-4">
                      <div class="flex items-center gap-2 text-[10px] text-stone-200/90 font-medium">
                        <span class="material-symbols-outlined text-[#D4AF37] text-[18px]">
                          local_shipping
                        </span>
                        Envío GRATIS <span class="text-[#D4AF37] font-bold">en compras de $2,000+</span>
                      </div>

                      <div @click="handleWholesaleClick()"
                        class="cursor-pointer flex items-center gap-1.5 bg-linear-to-r from-[#D4AF37] to-[#B8860B] text-white px-5 py-2.5 rounded-lg font-bold uppercase tracking-[0.15em] text-[10px] shadow-lg hover:brightness-110 transition shrink-0">
                        Consultar
                        <span class="material-symbols-outlined text-[14px]">arrow_forward</span>
                      </div>
                    </div>

                    <!-- Disclaimer -->
                    <p class="text-[9px] text-stone-500 mt-4 text-center italic border-t border-[#D4AF37]/5 pt-3">
                      *Precios especiales exclusivos para venta directa.
                    </p>

                    <!-- Tooltip arrow -->
                    <div
                      class="absolute top-[99%] w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[8px] border-t-[#1A140F]"
                      :class="infoSide === 'right' ? 'right-20' : 'left-1/2 -translate-x-1/2'">
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Single Purchase (Now neutral/dark secondary button) -->
            <button
              class="px-8 py-4 cursor-pointer bg-[#1A140F]/60 backdrop-blur-md text-[#D4AF37] rounded-full font-bold border-2 border-[#D4AF37]/30 hover:bg-[#1A140F] hover:border-[#D4AF37] transition-all flex items-center gap-2 uppercase text-[10px] tracking-[0.2em] active:scale-95">
              <span class="material-symbols-outlined text-sm">shopping_bag</span>
              Comprar uno
            </button>

          </div>
        </div>

        <!-- Product Image Section -->
        <div class="w-full md:w-1/2 h-full flex items-center justify-center relative mt-12 md:mt-0">
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="w-[70%] h-[90%] border-[2px] border-[#D4AF37]/20 rounded-t-full rounded-b-3xl"></div>
          </div>

          <div v-if="slide.images?.length" class="relative z-10 w-full flex justify-center">
            <div v-for="(img, i) in slide.images" :key="i" class="relative ">
              <img :src="img.src" :alt="img.alt"
                class="relative z-10 object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)] max-h-[400px] md:max-h-[550px]" />
            </div>
          </div>
        </div>

      </main>

      <!-- ITEM 2: INFO (For Intro Slide it goes to Bottom) -->
      <footer v-if="slide.isIntro" class="w-full px-6 flex flex-col items-center animate-fade-up">
        <div class="max-w-3xl text-center">
          <p class="text-white text-lg md:text-2xl leading-relaxed mb-10 font-light drop-shadow-lg italic opacity-90">
            {{ slide.subtitle || slide.infoTitle || slide.infoText }}
          </p>
          <div class="h-1 w-24 bg-[#D4AF37] mx-auto opacity-50"></div>
        </div>

        <div class="mt-16 flex items-center gap-6">
          <div class="w-16 h-px bg-[#D4AF37]/50"></div>
          <span class="text-[#D4AF37] text-[10px] uppercase tracking-[0.8em] font-black whitespace-nowrap">Tradición
            Milenaria</span>
          <div class="w-16 h-px bg-[#D4AF37]/50"></div>
        </div>
      </footer>

      <!-- Footer for regular slides -->
      <footer v-if="!slide.isIntro" class="w-full p-8 flex justify-between items-center mt-auto">
        <div class="flex gap-4 items-center">
          <div class="w-12 h-px bg-[#D4AF37]"></div>
          <span class="text-white text-[9px] uppercase tracking-[0.5em] font-bold">Edición Especial 2024</span>
        </div>
      </footer>
    </div>
  </div>
</template>

<style scoped>
.animate-slow-zoom {
  animation: slowZoom 25s infinite alternate ease-in-out;
}

@keyframes slowZoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.1);
  }
}

.animate-float {
  animation: float 8s infinite ease-in-out;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-25px);
  }
}

/* Evitar scroll si no es necesario */
.slide-root {
  min-height: 100vh;
}
</style>
