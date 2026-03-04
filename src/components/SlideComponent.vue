<template>
    <div class="slide-root relative w-full h-full">
        <!-- ── Background ── -->
        <img :src="slide.wallpaper" :alt="slide.title" class="absolute inset-0 w-full h-full object-cover" />
        <div class="absolute inset-0 w-full h-full" :style="`background: ${slide.overlay ?? 'rgba(0,0,0,0.30)'}`"></div>

        <!-- ══ LAYOUT WRAPPER: fills entire slide ══ -->
        <div class="relative w-full h-full flex flex-col items-center z-20 overflow-hidden">

            <!-- ── ROW 1: Title block (top, always centered) ── -->
            <div
                class="slide-title-block w-full flex flex-col items-center text-center pointer-events-none pt-10 sm:pt-12 lg:pt-14 px-4 drop-shadow-2xl shrink-0">
                <h1 class="font-bold text-white leading-tight"
                    :class="slide.titleClass ?? 'text-5xl sm:text-6xl lg:text-8xl font-rozha-one uppercase'"
                    v-html="slide.title"></h1>
                <p class="text-sm sm:text-base lg:text-xl mt-1 font-medium text-gray-100 drop-shadow-md max-w-xl">
                    {{ slide.subtitle }}
                </p>
            </div>

            <!-- ── ROW 2: Content split (info + images) — fills remaining space ── -->
            <div class="slide-content-row w-full flex-1 flex items-stretch gap-0 min-h-0 mt-3 sm:mt-4"
                :class="infoSide === 'left' ? 'flex-col md:flex-row' : 'flex-col md:flex-row-reverse'">

                <!-- ▌ INFO SIDE ▌ -->
                <div class="slide-info-col flex flex-col justify-start items-start overflow-y-auto px-4 pb-4 md:pb-6 pointer-events-auto shrink-0 w-full md:w-1/2"
                    :class="infoSide === 'left' ? 'md:pl-6 lg:pl-10 md:pr-3' : 'md:pr-6 lg:pr-10 md:pl-3 md:items-end'">
                    <!-- Info card -->
                    <div class="info-card bg-black/50 backdrop-blur-md p-4 lg:p-5 rounded-2xl border border-white/20 text-white shadow-2xl text-left w-full max-w-md mt-2"
                        :class="infoSide === 'right' ? 'md:ml-auto' : ''">
                        <h3 v-if="slide.infoTitle" class="text-base lg:text-lg font-bold mb-3"
                            :style="`color: ${slide.accentColor}`">
                            {{ slide.infoTitle }}
                        </h3>
                        <p v-if="slide.infoText" class="text-xs lg:text-sm leading-relaxed text-gray-200 mb-3">{{
                            slide.infoText }}</p>

                        <!-- Feature items (icon + title + desc) -->
                        <div v-if="slide.features?.length" class="space-y-3">
                            <div v-for="(feat, i) in slide.features" :key="i">
                                <h4 class="font-bold text-[11px] lg:text-sm flex items-center"
                                    :style="`color: ${slide.accentColor}`">
                                    <span v-if="feat.icon" class="material-symbols-outlined text-sm mr-2">{{ feat.icon
                                    }}</span>
                                    <span v-else class="w-1.5 h-1.5 rounded-full mr-2 shrink-0"
                                        :style="`background: ${slide.accentColor}`"></span>
                                    {{ feat.title }}
                                </h4>
                                <p class="text-[10px] lg:text-xs text-gray-300 ml-6 leading-tight">{{ feat.desc }}</p>
                            </div>
                        </div>
                    </div>

                    <!-- Promo wholesale banner (optional) -->
                    <div v-if="slide.showPromo" class="promo-banner pointer-events-auto w-full max-w-md mt-3">
                        <div class="bg-black/60 backdrop-blur-xl rounded-2xl border shadow-2xl overflow-hidden"
                            :style="`border-color: ${slide.accentColor}66`">
                            <!-- Header -->
                            <div class="px-4 py-2 flex items-center justify-between gap-2"
                                :style="`background: linear-gradient(to right, ${slide.promoGradientFrom ?? slide.accentColor}, ${slide.promoGradientVia ?? slide.accentColor}, ${slide.promoGradientFrom ?? slide.accentColor})`">
                                <div class="flex items-center gap-2">
                                    <span class="material-symbols-outlined text-white text-lg">bolt</span>
                                    <span
                                        class="text-white font-extrabold text-xs lg:text-sm uppercase tracking-wider">Descuento
                                        especial a mayoristas</span>
                                </div>
                                <router-link to="/contacto"
                                    class="bg-black/20 hover:bg-black/40 text-white border border-white/50 px-3 py-1 rounded-full text-[10px] font-bold transition-colors whitespace-nowrap">
                                    Contáctenos Aquí
                                </router-link>
                            </div>
                            <!-- Tiers -->
                            <div class="px-4 py-3 space-y-1.5">
                                <div v-for="tier in promoTiers" :key="tier.label"
                                    class="flex items-center justify-between text-white">
                                    <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                                        <span
                                            class="w-5 h-5 rounded-full flex items-center justify-center font-bold text-[9px]"
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

                    <!-- Mobile CTA button -->
                    <div class="mt-3 flex md:hidden w-full max-w-md">
                        <a v-if="slide.buttons?.[0]" :href="slide.buttons[0].href"
                            :target="slide.buttons[0].href !== '#' ? '_blank' : '_self'"
                            class="inline-flex items-center gap-2 border-2 border-white/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all pointer-events-auto backdrop-blur-sm shadow-xl"
                            :style="`background: ${slide.accentColor}CC`">
                            <span class="material-symbols-outlined text-sm">garden_cart</span>
                            {{ slide.buttons[0].label }}
                        </a>
                    </div>
                </div>

                <!-- ▌ IMAGES SIDE ▌ -->
                <div class="slide-images-col hidden md:flex flex-1 items-center justify-around px-4 pb-6 gap-4 lg:gap-6 shrink-0 w-full md:w-1/2 min-w-0"
                    :class="infoSide === 'left' ? 'md:pr-6 lg:pr-10' : 'md:pl-6 lg:pl-10'">
                    <div v-for="(img, i) in slide.images" :key="i" class="flex flex-col items-center gap-3 min-w-0">
                        <img :src="img.src" :alt="img.alt" :class="img.extraClass ?? ''"
                            class="w-full object-contain drop-shadow-[0_16px_24px_rgba(255,255,255,0.35)] hover:scale-105 transition-transform duration-300"
                            :style="`max-width: ${resolveSize(img)}`" />
                        <!-- Per-image buy button -->
                        <a v-if="img.button" :href="img.button.href"
                            :target="img.button.href !== '#' ? '_blank' : '_self'"
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
