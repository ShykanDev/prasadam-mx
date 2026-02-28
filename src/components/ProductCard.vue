<template>
  <div
    class="relative w-full max-w-sm mx-auto h-[500px] rounded-xl overflow-hidden shadow-2xl bg-[#1a0f0a] border-2 border-amber-500/20 group">
    <img :src="product.image || 'https://via.placeholder.com/400x500?text=Product'" :alt="product.name"
      class="absolute inset-0 w-full h-full object-cover  transition-transform duration-1000 group-hover:scale-110 sepia-[0.2]" />

    <div class="absolute top-6 right-6 z-20">
      <span
        class="px-4 py-1 text-[11px] uppercase tracking-[0.2em] font-black text-white rounded-full  border border-amber-400/30 shadow-inner"
        :class="product.status === 'Available' ? 'bg-orange-600/80' : 'bg-stone-700/80'">
        {{ product.status }}
      </span>
    </div>

    <div
      class="absolute inset-0 z-10 flex flex-col justify-end p-8 bg-linear-to-t from-[#1a0f0a] via-[#1a0f0a]/60 to-transparent">

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
            class="px-3 py-1 text-[10px] bg-amber-900/40  border border-amber-500/20 text-amber-200 rounded-lg italic">
            #{{ tag }}
          </li>
        </ul>
      </div>

      <div class="mt-8">
        <a v-if="product.link" :href="product.link" target="_blank"
          class="relative inline-block w-full text-center py-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_10px_20px_rgba(217,119,6,0.3)] overflow-hidden group/btn">
          <span class="relative z-10 tracking-[0.1em] uppercase text-xs">Descubrir Esencia</span>
          <div
            class="absolute inset-0 w-full h-full bg-white/20 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700">
          </div>
        </a>

        <div v-else class="text-center py-4 border border-amber-900/50 text-amber-700 rounded-2xl italic text-sm">
          Próximamente...
        </div>
      </div>
    </div>

    <div class="absolute inset-4 border border-amber-500/10 pointer-events-none rounded-3xl z-0"></div>
  </div>
</template>
<script lang="ts" setup>
// Nota: isHovered ya no es estrictamente necesario gracias a las clases 'group-hover' de Tailwind,
// lo que hace el código más limpio y eficiente.
const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      name: 'Modern Product',
      category: 'Innovation',
      description: ['Premium', 'New Gen', 'Fast'],
      benefits: 'This is a description that only appears when you hover over the card to save space.',
      link: '#',
      status: 'Available',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070'
    })
  }
});
</script>
