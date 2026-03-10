<template>
  <div class="slide-root relative w-full h-full overflow-hidden font-philosopher selection:bg-orange-500/30">
    <div class="absolute inset-0 z-0">
      <img :src="slide.wallpaper" :alt="slide.title" class="w-full h-full object-cover scale-105 animate-slow-zoom" />
      <div class="absolute inset-0 bg-gradient-to-br from-black/80 via-black/40 to-orange-950/30"></div>
      <div class="absolute inset-0 opacity-[0.07] mix-blend-overlay"
        style="background-image: url('https://www.transparenttextures.com/patterns/mandala.png');"></div>
    </div>

    <div class="relative z-10 w-full h-full flex flex-col">

      <header class="w-full p-6 flex justify-between items-center shrink-0">
        <div class="flex items-center gap-2">
          <span class="w-8 h-8 rounded-full border border-orange-400 flex items-center justify-center">
            <span class="material-symbols-outlined text-orange-400 text-sm">local_florist</span>
          </span>
          <span class="text-white tracking-[0.3em] text-[10px] uppercase font-bold">Calidad Premium</span>
        </div>
        <div class="h-[1px] flex-1 mx-8 bg-gradient-to-r from-orange-500/50 to-transparent hidden md:block"></div>
      </header>

      <main class="flex-1 w-full flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 pb-10 gap-8 md:gap-0">

        <div class="w-full md:w-1/2 flex flex-col"
          :class="[infoSide === 'right' ? 'md:order-2 md:items-end text-right' : 'md:items-start text-left']">

          <span
            class="inline-block px-4 py-1 rounded-full bg-orange-600/20 border border-orange-500/40 text-orange-300 text-[10px] uppercase tracking-widest mb-4 animate-fade-down">
            {{ slide.infoTitle || 'Exclusive Import' }}
          </span>

          <h1 class="font-rozha text-white leading-[0.9] mb-6 drop-shadow-2xl"
            :class="slide.isIntro ? 'text-6xl md:text-9xl' : 'text-5xl md:text-7xl'" v-html="slide.title"></h1>

          <p class="text-gray-300 text-sm md:text-lg max-w-md leading-relaxed mb-8 font-light italic"
            :class="infoSide === 'right' ? 'md:ml-auto' : ''">
            {{ slide.subtitle || slide.infoText }}
          </p>

          <div v-if="slide.features?.length" class="grid grid-cols-1 gap-4 w-full max-w-sm mb-8">
            <div v-for="(feat, i) in slide.features" :key="i"
              class="flex items-center gap-4 p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-orange-500/10 transition-colors group"
              :class="infoSide === 'right' ? 'flex-row-reverse' : ''">
              <div
                class="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <span class="material-symbols-outlined text-orange-400 text-xl">{{ feat.icon || 'star' }}</span>
              </div>
              <div class="flex flex-col">
                <span class="text-white text-xs font-bold uppercase tracking-tighter">{{ feat.title }}</span>
                <span class="text-gray-400 text-[10px]">{{ feat.desc }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap gap-4" :class="infoSide === 'right' ? 'justify-end' : ''">
            <button v-for="(btn, i) in slide.buttons" :key="i"
              class="group relative overflow-hidden px-10 py-4 rounded-full transition-all duration-500 active:scale-95 shadow-2xl">
              <div class="absolute inset-0 bg-orange-600 transition-transform group-hover:translate-y-[-100%]"></div>
              <div class="absolute inset-0 bg-white translate-y-[100%] transition-transform group-hover:translate-y-0">
              </div>
              <span
                class="relative text-xs font-black uppercase tracking-[0.2em] group-hover:text-orange-950 transition-colors">
                {{ btn.label }}
              </span>
            </button>
          </div>
        </div>

        <div class="w-full md:w-1/2 h-full flex items-center justify-center relative">

          <div class="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div class="w-[80%] h-[80%] border-[1px] border-orange-500 rounded-t-[200px] rounded-b-3xl"></div>
            <div
              class="absolute w-[90%] h-[90%] border-[1px] border-orange-500/30 rounded-t-[250px] rounded-b-3xl scale-95">
            </div>
          </div>

          <div v-if="slide.images?.length" class="relative z-10 w-full h-full flex items-center justify-center">
            <div v-for="(img, i) in slide.images" :key="i" class="relative animate-float">
              <div class="absolute inset-0 bg-orange-500/40 blur-[100px] rounded-full"></div>

              <img :src="img.src" :alt="img.alt"
                class="relative z-10 object-contain drop-shadow-[0_35px_60px_-15px_rgba(0,0,0,0.6)]"
                :style="`max-width: ${resolveSize(img)}`" />

              <div v-if="img.button" class="absolute -bottom-6 -right-6 md:-right-12 z-20">
                <a :href="img.button.href"
                  class="flex flex-col items-center justify-center w-24 h-24 md:w-32 md:h-32 bg-white text-orange-950 rounded-full shadow-2xl hover:scale-110 transition-transform border-[6px] border-orange-100">
                  <span class="text-[9px] font-black uppercase tracking-tighter">Shop Now</span>
                  <span class="material-symbols-outlined">arrow_outward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </main>

      <footer v-if="slide.showPromo"
        class="w-full p-6 flex flex-col md:flex-row justify-between items-end gap-4 overflow-hidden">
        <div class="flex gap-4">
          <div v-for="tier in promoTiers" :key="tier.label"
            class="px-4 py-2 bg-black/40 border-l-2 border-orange-500 rounded-r-lg">
            <div class="text-[9px] text-orange-400 font-bold uppercase">{{ tier.label }} Units</div>
            <div class="text-white font-bold">{{ tier.off }} <span class="text-[10px] font-light">OFF</span></div>
          </div>
        </div>

        <div class="text-right">
          <p class="text-[10px] text-white/40 uppercase tracking-[0.2em]">Authentic Quality Guarantee</p>
          <div class="flex gap-2 justify-end mt-1">
            <div class="w-2 h-2 rounded-full bg-orange-500"></div>
            <div class="w-2 h-2 rounded-full bg-orange-500/30"></div>
            <div class="w-2 h-2 rounded-full bg-orange-500/30"></div>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { SlideData, SlideImage } from '@/types/slide';
import { IMAGE_SIZE_MAP } from '@/types/slide';

const props = defineProps<{
  slide: SlideData;
  infoSide?: 'left' | 'right';
}>();

function resolveSize(img: SlideImage): string {
  if (img.imageSize) return IMAGE_SIZE_MAP[img.imageSize];
  return img.maxWidth ?? '400px';
}

const promoTiers = [
  { label: '5+', desc: 'Small Wholesale', off: '10%' },
  { label: '50+', desc: 'Bulk Order', off: '30%' },
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Philosopher:ital,wght@0,400;0,700;1,400&family=Rozha+One&display=swap');

.font-philosopher {
  font-family: 'Philosopher', sans-serif;
}

.font-rozha {
  font-family: 'Rozha One', serif;
}

.animate-slow-zoom {
  animation: slowZoom 20s infinite alternate ease-in-out;
}

.animate-float {
  animation: float 16s infinite ease-in-out;
}

@keyframes slowZoom {
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.15);
  }
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-20px);
  }
}

/* Scrollbar invisible pero funcional */
.slide-info-col {
  scrollbar-width: none;
}

.slide-info-col::-webkit-scrollbar {
  display: none;
}
</style>
