<template>
  <div
    class="w-full max-w-sm mx-auto bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
    @mouseenter="isHovered = true" @mouseleave="isHovered = false">
    <div class="relative h-52 overflow-hidden">
      <img :src="product.image || 'https://via.placeholder.com/400x300?text=Product'" :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500" :class="{ 'scale-105': isHovered }" />
      <span class="absolute top-2 right-2 px-2 py-1 text-xs font-bold text-white rounded" :class="{
        'bg-orange-500': product.status === 'Coming soon',
        'bg-green-500': product.status === 'Available'
      }">
        {{ product.status }}
      </span>
    </div>
    <div class="p-4">
      <ul class="flex flex-wrap gap-1 mb-2">
        <li v-for="(tag, index) in product.description" :key="index" class="px-2 py-1 text-xs bg-gray-100 rounded">
          {{ tag }}
        </li>
      </ul>
      <h3 class="text-lg font-semibold text-gray-800 mb-1">
        {{ product.name }}
      </h3>
      <p class="text-sm text-gray-600 mb-3 line-clamp-2">
        {{ product.benefits }}
      </p>
      <div class="flex justify-end">
        <a v-if="product.link" :href="product.link" target="_blank"
          class="text-orange-500 font-medium hover:text-orange-600 hover:underline transition-colors">
          Know more
        </a>
        <span v-else class="text-gray-400 cursor-not-allowed">
          Coming soon
        </span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps({
  product: {
    type: Object,
    required: true,
    default: () => ({
      name: '',
      category: '',
      description: [],
      benefits: '',
      link: null,
      status: 'Coming soon',
      image: 'https://via.placeholder.com/400x300?text=Product'
    })
  }
});

const isHovered = ref(false);
</script>
