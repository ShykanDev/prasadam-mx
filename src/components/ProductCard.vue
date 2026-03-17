<template>
  <div
    class="relative w-full  max-w-sm mx-auto h-[500px] rounded-xl overflow-hidden shadow-2xl bg-[#1a0f0a] border-2 border-amber-500/20 group cursor-pointer"
    @click="isExpanded = !isExpanded"
  >
    <!-- Background Image: Removed hover scale as per request -->
    <img :src="product.image || 'https://via.placeholder.com/400x500?text=Product'" :alt="product.name"
      class="absolute inset-0 w-full  object-cover transition-transform duration-1000 sepia-[0.2] bg-slate-200" />

    <!-- Status Badge -->
    <div class="absolute top-6 right-6 z-20 flex flex-col items-end gap-2">
      <span
        class="px-4 py-1 text-[11px] uppercase tracking-[0.2em] font-black text-white rounded-full border border-amber-400/30 shadow-inner transition-all duration-300"
        :class="product.status === 'Available' ? 'bg-orange-600/80' : 'bg-stone-700/80'">
        {{ product.status }}
      </span>


    </div>

    <!-- Active Discount Highlight Overlay -->
    <div v-if="appliedDiscount"
      class="absolute inset-0 z-0 border-4 border-white/30 rounded-xl pointer-events-none shadow-[inset_0_0_100px_rgba(255,255,255,0.1)]">
    </div>

    <!-- Main Content (Default state, stays static) -->
    <div
      class="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-linear-to-t from-[#1a0f0abe]/70 via-[#1a0f0a]/40 to-transparent overflow-hidden">
      <!-- Animated Accent Line -->
      <div class="w-12 h-1 bg-amber-500 mb-4 rounded-full transition-all duration-500 group-hover:w-24"></div>

      <h3 class="text-3xl font-serif font-bold text-amber-50 mb-3 tracking-tight leading-none">
        {{ product.name }}
      </h3>

      <div class="space-y-4">
        <p class="text-amber-100/80 text-sm leading-relaxed italic font-light line-clamp-3">
          "{{ product.benefits }}"
        </p>

        <ul class="flex flex-wrap gap-2">
          <li v-for="(tag, index) in product.description" :key="index"
            class="px-3 py-1 text-[10px] bg-amber-900/40 border border-amber-500/20 text-amber-200 rounded-lg italic">
            #{{ tag }}
          </li>
        </ul>
      </div>

      <!-- Spacer for fixed button area to maintain layout -->
      <div class="mt-8 h-[52px]"></div>
    </div>

    <!-- Hover Revelation Panel: Luxury sliding information panel -->
    <div
      class="absolute inset-x-0 bottom-0 z-30 scrollbar-hide overflow-hidden bg-[#0a0503]/98  p-8 pb-32 h-[90%] rounded-t-3xl transform transition-all duration-700 ease-out overflow-y-auto border-t border-amber-500/10"
      :class="isExpanded ? 'translate-y-0' : 'translate-y-full md:group-hover:translate-y-0'">

      <!-- Panel Header -->
      <div class="flex flex-col items-center gap-3 mb-8 justify-center">
        <div class="w-10 h-px bg-linear-to-r from-transparent to-amber-500/50"></div>
        <span class="text-amber-500 uppercase tracking-[0.3em] text-[9px] font-bold">Detalles de Esencia</span>
        <div class="w-10 h-px bg-linear-to-l from-transparent to-amber-500/50"></div>
        <img v-if="!product.isBigImg" :src="product.miniImage" alt=""
          class="w-full h-full object-contain hover:scale-125  hover:rotate-3 transition-transform duration-700 filter brightness-110 contrast-110">
      </div>

      <div class="space-y-8">
        <!-- Main Details Section with Floating Product Image -->
        <div class="relative min-h-[140px]">
          <!-- Luxury Product Spotlight (Floating Image) -->
          <div
            class=" absolute -right-4 top-14  w-36 h-36 z-10 drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3">
            <div class="absolute inset-0 bg-amber-500/5 blur-3xl rounded-full"></div>
            <img v-if="product.isBigImg" :src="product.miniImage" alt=""
              class="w-full h-full object-contain hover:scale-200 scale-150 hover:rotate-3 transition-transform duration-700 filter brightness-110 contrast-110">
          </div>

          <!-- Description Text -->
          <div :class="product.miniImage ? 'pr-28' : ''" class="transition-all duration-500">
            <h4 class="text-amber-200/90 text-[11px] uppercase tracking-wider font-bold mb-4 flex items-center gap-2">
              <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
              Propiedades & Beneficios
            </h4>

            <div v-if="product.details && product.details.length" class="space-y-3">
              <p v-for="(detail, index) in product.details" :key="index"
                class="text-amber-50/70 text-xs leading-relaxed flex gap-2">
                <span class="text-amber-500/50 shrink-0 mt-1">✦</span>
                {{ detail }}
              </p>
            </div>
            <p v-else class="text-amber-100/60 text-xs leading-relaxed italic font-light">
              "{{ product.benefits }}"
            </p>
          </div>
        </div>

        <!-- Tags Section -->
        <div class="space-y-4">
          <h4 class="text-amber-200/90 text-[11px] uppercase tracking-wider font-bold flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Etiquetas Ayurvédicas
          </h4>
          <ul class="flex flex-wrap gap-2">
            <li v-for="(tag, index) in product.description" :key="index"
              class="px-3 py-1.5 text-[9px] bg-amber-950/40 border border-amber-500/10 text-amber-200/80 rounded-lg italic  hover:border-amber-500/30 transition-colors">
              #{{ tag }}
            </li>
          </ul>
        </div>

        <!-- Ritual Section -->
        <div class="hidden space-y-3 border-t border-amber-500/5 pt-6">
          <h4 class="text-amber-200/90 text-[11px] uppercase tracking-wider font-bold flex items-center gap-2">
            <span class="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
            Ritual Sugerido
          </h4>
          <p class="text-amber-100/50 text-[11px] italic leading-relaxed font-light">
            Para una experiencia transformadora, integre este producto en su rutina diaria de bienestar, permitiendo que
            las esencias equilibren sus doshas de manera natural.
          </p>
        </div>
      </div>
    </div>

    <!-- Fixed Action Button: Stays pinned at the bottom and accessible -->
    <div class="absolute bottom-8 left-8 right-8 z-40">
      <a v-if="product.link" :href="product.link" target="_blank" @click.stop
        class="relative inline-block w-full text-center py-4 bg-linear-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_20px_rgba(217,119,6,0.3)] overflow-hidden group/btn">
        <span class="relative z-10 tracking-widest uppercase text-xs">Descubrir más</span>
        <div
          class="absolute inset-0 w-full h-full rounded-2xl bg-white/20 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700">
        </div>
      </a>

      <div v-else
        class="text-center py-4 border border-amber-900/50 text-amber-700 rounded-2xl italic text-sm bg-[#1a0f0a]/80 ">
        Próximamente...
      </div>
    </div>

    <!-- Decorative Border Overlay -->
    <div class="absolute inset-4 border border-amber-500/10 pointer-events-none rounded-3xl z-0"></div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { userProductStore } from '@/stores/product';

const productStore = userProductStore();
const isExpanded = ref(false);

defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      name: 'Modern Product',
      category: 'Innovation',
      description: ['Premium', 'New Gen', 'Fast'],
      benefits: 'This is a description that only appears when you hover over the card to save space.',
      details: ['Pure Essence', 'Natural Ingredients', 'Ayurvedic Formula'],
      link: '#',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070'
    })
  }
});

const appliedDiscount = computed(() => {
  const qty = productStore.getCurrentAmount;
  if (qty > 50) return '30%';
  if (qty > 10) return '20%';
  if (qty >= 5) return '10%';
  return null;
});
</script>
