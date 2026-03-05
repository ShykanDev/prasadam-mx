<template>
  <div class="slide-root relative w-full h-full">
    <!-- ── Background ── -->
    <img :src="slide.wallpaper" :alt="slide.title" class="absolute inset-0 w-full h-full object-cover" />
    <div class="absolute inset-0 w-full h-full" :class="slide.isIntro ? 'animate-fade animate-delay-6000' : ''"
      :style="`background: ${slide.overlay ?? 'rgba(0,0,0,0.30)'}`"></div>

    <!-- ══ LAYOUT WRAPPER ══ -->
    <div class="relative w-full h-full flex flex-col items-center z-20 overflow-hidden"
      :class="slide.isIntro ? 'justify-center p-6' : 'justify-start'">

      <!-- ── ROW 1: Title block ── -->
      <div
        class="slide-title-block w-full flex flex-col items-center text-center pointer-events-none px-4 drop-shadow-2xl shrink-0"
        :class="slide.isIntro ? 'pt-24 sm:pt-28 lg:pt-32 mb-8' : 'pt-10 sm:pt-12 lg:pt-14'">

        <h1 class="font-bold text-white leading-tight "
          :class="slide.titleClass ?? (slide.isIntro ? 'text-3xl sm:text-7xl lg:text-9xl' : 'text-5xl sm:text-6xl lg:text-8xl font-rozha-one uppercase bg-red-700')"
          v-html="slide.title"></h1>

        <p v-if="slide.subtitle" class="mt-4 font-medium text-gray-100 drop-shadow-md"
          :class="slide.isIntro ? 'text-lg sm:text-xl lg:text-3xl max-w-3xl' : 'text-sm sm:text-base lg:text-xl max-w-xl'">
          {{ slide.subtitle }}
        </p>
      </div>

      <!-- ── ROW 2: Content ── -->
      <div class="slide-content-row w-full flex items-stretch gap-0 min-h-0" :class="[
        slide.isIntro ? 'flex-col items-center max-w-4xl px-4' : 'flex-1 mt-3 sm:mt-4',
        infoSide === 'left' ? 'md:flex-row' : 'md:flex-row-reverse',
        slide.isIntro ? 'md:flex-col mt-8' : ''
      ]">

        <!-- ▌ INFO SIDE (Centered if isIntro) ▌ -->
        <div
          class="slide-info-col flex flex-col justify-start overflow-y-auto px-4 pb-4 md:pb-6 pointer-events-auto shrink-0"
          :class="[
            slide.isIntro ? 'w-full items-center text-center ' : 'w-full md:w-1/2',
            !slide.isIntro && infoSide === 'left' ? 'md:pl-6 lg:pl-10 md:pr-3 items-start' : '',
            !slide.isIntro && infoSide === 'right' ? 'md:pr-6 lg:pr-10 md:pl-3 md:items-end' : ''
          ]">

          <!-- Info card -->
          <div class="info-card mt-2" :class="[
            slide.isIntro ? 'bg-transparent w-full text-center mt-16! border-none shadow-none backdrop-blur-none p-0' : 'backdrop-blur-md p-5 lg:p-8 rounded-3xl border border-white/20 text-white shadow-2xl bg-black/50 text-left w-full max-w-md',
            !slide.isIntro && infoSide === 'right' ? 'md:ml-auto' : ''
          ]">
            <h3 v-if="slide.infoTitle" class="mb-4"
              :class="slide.isIntro ? 'text-xl sm:text-2xl lg:text-4xl font-normal text-white drop-shadow-xl font-kalam pt-7' : 'font-bold text-base lg:text-lg'"
              :style="!slide.isIntro ? `color: ${slide.accentColor}` : ''">
              {{ slide.infoTitle }}
            </h3>
            <p v-if="slide.infoText" class="leading-relaxed text-gray-200 mb-6"
              :class="slide.isIntro ? 'text-sm sm:text-base lg:text-md' : 'text-xs lg:text-sm'">
              {{ slide.infoText }}
            </p>

            <!-- Feature items -->
            <div v-if="slide.features?.length" class="grid gap-4"
              :class="slide.isIntro ? 'grid-cols-1 sm:grid-cols-3' : 'space-y-3 grid-cols-1'">
              <div v-for="(feat, i) in slide.features" :key="i"
                :class="slide.isIntro ? 'flex flex-col items-center p-4 rounded-2xl bg-white/5 border border-white/10' : ''">
                <h4 class="font-bold flex items-center"
                  :class="slide.isIntro ? 'text-sm lg:text-base mb-2 flex-col' : 'text-[11px] lg:text-sm flex-row'"
                  :style="`color: ${slide.accentColor}`">
                  <span v-if="feat.icon" class="material-symbols-outlined"
                    :class="slide.isIntro ? 'text-3xl mb-2' : 'text-sm mr-2'">{{ feat.icon }}</span>
                  <span v-else class="w-1.5 h-1.5 rounded-full mr-2 shrink-0"
                    :style="`background: ${slide.accentColor}`"></span>
                  {{ feat.title }}
                </h4>
                <p class="text-gray-300 leading-tight"
                  :class="slide.isIntro ? 'text-xs' : 'text-[10px] lg:text-xs ml-6'">
                  {{ feat.desc }}
                </p>
              </div>
            </div>
          </div>

          <!-- Promo wholesale banner (optional - only for non-intro slides) -->
          <div v-if="!slide.isIntro && slide.showPromo" class="promo-banner pointer-events-auto w-full max-w-md mt-3">
            <div class="bg-black/60 backdrop-blur-xl rounded-2xl border shadow-2xl overflow-hidden"
              :style="`border-color: ${slide.accentColor}66`">
              <!-- Header -->
              <div class="px-4 py-2 flex items-center justify-between gap-2"
                :style="`background: linear-gradient(to right, ${slide.promoGradientFrom ?? slide.accentColor}, ${slide.promoGradientVia ?? slide.accentColor}, ${slide.promoGradientFrom ?? slide.accentColor})`">
                <div class="flex items-center gap-2">
                  <span class="material-symbols-outlined text-white text-lg">bolt</span>
                  <span class="text-white font-extrabold text-xs lg:text-sm uppercase tracking-wider">Descuento
                    especial a mayoristas</span>
                </div>
                <router-link to="/contacto"
                  class="bg-black/20 hover:bg-black/40 text-white border border-white/50 px-3 py-1 rounded-full text-[10px] font-bold transition-colors whitespace-nowrap">
                  Contáctenos Aquí
                </router-link>
              </div>
              <!-- Tiers -->
              <div class="px-4 py-3 space-y-1.5 text-left">
                <div v-for="tier in promoTiers" :key="tier.label" class="flex items-center justify-between text-white">
                  <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                    <span class="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[9px]"
                      :style="`background: ${slide.accentColor}33; color: ${slide.accentColor}`">{{
                        tier.label }}</span>
                    {{ tier.desc }}
                  </span>
                  <span class="font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full"
                    :style="`background: ${slide.accentColor}33; color: ${slide.accentColor}`">{{
                      tier.off }}</span>
                </div>
                <div class="border-t border-white/10 pt-2 mt-1">
                  <div class="flex items-center gap-1.5 text-[#86efac]">
                    <span class="material-symbols-outlined text-sm">package</span>
                    <span class="text-[10px] lg:text-[11px] font-bold">Envío GRATIS en compras
                      mayores a $2,000 MXN</span>
                  </div>
                  <p class="text-[9px] lg:text-[10px] text-white/70 italic leading-tight mt-1">
                    * Para obtener precio mayorista, presione el botón "Contáctenos Aquí" de arriba.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Buttons -->
          <div v-if="slide.buttons?.length" class="mt-8 flex flex-wrap gap-4 justify-center">
            <a v-for="(btn, i) in slide.buttons" :key="i" :href="btn.href"
              :target="btn.href.startsWith('http') ? '_blank' : '_self'"
              class="px-8 py-3 rounded-full text-sm font-bold uppercase tracking-widest shadow-xl hover:scale-105 transition-all duration-300 border-2"
              :style="`background: ${slide.accentColor}; color: white; border-color: white; shadow-color: ${slide.accentColor}4D`">
              {{ btn.label }}
            </a>
          </div>
        </div>

        <!-- ▌ IMAGES SIDE (Only if not intro or if images present) ▌ -->
        <div v-if="!slide.isIntro && slide.images?.length"
          class="slide-images-col hidden md:flex flex-1 items-center justify-around px-4 pb-6 gap-4 lg:gap-6 shrink-0 w-full md:w-1/2 min-w-0"
          :class="infoSide === 'left' ? 'md:pr-6 lg:pr-10' : 'md:pl-6 lg:pl-10'">
          <div v-for="(img, i) in slide.images" :key="i" class="flex flex-col items-center gap-3 min-w-0">
            <img loading="lazy" :src="img.src" :alt="img.alt" :class="img.extraClass ?? ''"
              class="w-full object-contain drop-shadow-[0_16px_24px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform duration-300"
              :style="`max-width: ${resolveSize(img)}`" />
            <!-- Per-image buy button -->
            <a v-if="img.button" :href="img.button.href" :target="img.button.href !== '#' ? '_blank' : '_self'"
              class="relative inline-flex items-center gap-2 px-5 py-2.5 lg:px-6 lg:py-3 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide border-2 shadow-lg hover:scale-110 transition-all duration-300 pointer-events-auto backdrop-blur-sm whitespace-nowrap"
              :style="img.button.style">
              <span class="material-symbols-outlined text-sm">garden_cart</span>
              {{ img.button.label }}
            </a>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import type { SlideData, SlideImage } from '@/types/slide';
import { IMAGE_SIZE_MAP } from '@/types/slide';

defineProps<{
  slide: SlideData;
  infoSide?: 'left' | 'right';
}>();

function resolveSize(img: SlideImage): string {
  if (img.imageSize) return IMAGE_SIZE_MAP[img.imageSize];
  return img.maxWidth ?? '200px';
}

const promoTiers = [
  { label: '5+', desc: 'Más de 5 productos', off: '10% OFF' },
  { label: '10+', desc: 'Más de 10 productos', off: '20% OFF' },
  { label: '50+', desc: 'Más de 50 productos', off: '30% OFF' },
];
</script>


<style scoped>
/* ── Slide root fills swiper-slide ── */
.slide-root {
  height: 100%;
  display: flex;
  flex-direction: column;
}

/* ── Scrollbar slim for info col ── */
.slide-info-col {
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.2) transparent;
}

.slide-info-col::-webkit-scrollbar {
  width: 4px;
}

.slide-info-col::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 2px;
}

/* ── Row 2 takes remaining height ── */
.slide-content-row {
  flex: 1;
  min-height: 0;
}

/* on mobile: col, partial height */
@media (max-width: 767px) {
  .slide-content-row {
    flex-direction: column;
  }

  .slide-info-col {
    flex: 1;
    overflow-y: auto;
  }

  .slide-images-col {
    display: none;
  }
}
</style>
