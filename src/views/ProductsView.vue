<script lang="ts" setup>
import ShapesWall from '@/animations/ShapesWall.vue';
import ProductCard from '@/components/ProductCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { computed, ref } from 'vue';
import asafoetida from '@/assets/asafoetidaNomalFront.webp'
import chyawanprash from '@/assets/chyaBase.webp'
import pastaNeem from '@/assets/toothpastetp.webp'
import jabonNeem from '@/assets/NeemSoap.webp'

import diabetes from '@/assets/diabetes.webp'
import arthritis from '@/assets/arthritis.webp'
import asthma from '@/assets/asthma.webp'
import constipation from '@/assets/constipation.webp'
import menstruation from '@/assets/menstruation.webp'
import nerves from '@/assets/nerves.webp'
import alopecia from '@/assets/alopecia.webp'
import kidneys from '@/assets/kidneys.webp'
import charcoal from '@/assets/charcoal.webp'
import hemorrhoids from '@/assets/hemorrhoids.webp'
import obesity from '@/assets/obesity.webp'
import cholesterol from '@/assets/cholesterol.webp'

const products = ref([
  {
    name: "Asafétida",
    category: "Alimentos y Multivitamínicos",
    description: ["Hing", "Suplemento de ajo y cebolla"],
    benefits: "Conoce sus propiedades y beneficios",
    link: "https://asafoetida.com.mx",
    image: 'https://asafoetida.com.mx/assets/asafoetidaNomalFront%20copy-BytyFGk1.webp',
    status: "Disponible"
  },
  {
    name: "Chyawanprash",
    category: "Alimentos y Multivitamínicos",
    description: ["Multivitamínico. El elixir de la vida"],
    benefits: "Rejuvenecedor y antioxidante",
    link: "http://chyawanprash.com.mx/index.html",
    image: 'https://chyawanprash.com.mx/images/chyawanprash-solo.png',
    status: "Disponible"
  },
  {
    name: "Jabón Neemo",
    category: "Salud y Belleza",
    description: ["Jabón sin químicos, con múltiples beneficios y antibacterial"],
    benefits: "Piel fresca y radiante",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Pasta Dental de Neem",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    status: "Disponible"
  },
  {
    name: "Pasta Dental Diamante Kiante",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    status: "Disponible"
  },
  {
    name: "Pasta Dental de Neem y Clavo",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    status: "Disponible"
  },
  {
    name: "Pasta Dental de Charcoal",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    status: "Disponible"
  },
  {
    name: "Para la Diabetes",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a regular la glucosa y el colesterol",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Medicina para Hígado",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas del hígado",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Medicina para Próstata",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas de la próstata",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para la Artritis",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar el dolor y reducir el daño articular",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para el Asma",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a controlar síntomas crónicos y prevenir ataques de asma",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para el Estreñimiento",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda en el proceso de digestión y evacuación",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Pasta Dental Diente Kiante",
    category: "Alimentos y Multivitamínicos",
    description: ["Pasta dental"],
    benefits: "Limpieza total y múltiples beneficios de propiedades naturales de plantas",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para la Menstruación",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a reducir inflamación y dolor",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para los Nervios",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a disminuir la actividad cerebral para tratar ansiedad y trastornos del sueño",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para la Alopecia",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a que los folículos capilares reciban más nutrientes, favoreciendo el crecimiento",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para los Riñones",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda en el tratamiento de problemas renales",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Pasta Dental de Carbón Activado",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Sonrisa más saludable y brillante gracias a semillas negras",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para las Hemorroides",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por hemorroides",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para la Obesidad",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a bloquear algunas grasas evitando su absorción",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para el Colesterol",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a prevenir que el hígado produzca colesterol",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Medicina para Hemorroides",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por hemorroides",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Medicina para Gastritis",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por gastritis",
    link: null,
    status: "Próximamente"
  },
  {
    name: "",
    category: "",
    description: [""],
    benefits: "",
    link: null,
    status: "Próximamente"
  },
  {
    name: "",
    category: "",
    description: [""],
    benefits: "",
    link: null,
    status: "Próximamente"
  },
  {
    name: "",
    category: "",
    description: [""],
    benefits: "",
    link: null,
    status: "Próximamente"
  },
  {
    name: "",
    category: "",
    description: [""],
    benefits: "",
    link: null,
    status: "Próximamente"
  },
])

type buttonCategory = 'Todos' | 'Salud y Belleza' | 'Medicamentos Auxiliares' | 'Alimentos y Multivitamínicos'

const buttonsCategories = ref([
  {
    name: "Todos",
    category: "Todos",
    icon: "grid_view"
  },
  {
    name: "Salud y Belleza",
    category: "Salud y Belleza",
    icon: "content_cut"
  },
  {
    name: "Medicamentos Auxiliares",
    category: "Medicamentos Auxiliares",
    icon: "medical_services"
  },
  {
    name: "Alimentos y Multivitamínicos",
    category: "Alimentos y Multivitamínicos",
    icon: "nutrition"
  }
])

const productsCopy = ref([...products.value]);
const currentSelection = ref<buttonCategory>('Todos');
const setCurrentSelection = (category: buttonCategory) => {
  currentSelection.value = category
}
const productsUi = computed(() => {
  let ui = []
  switch (currentSelection.value) {
    case 'Todos':
      ui = productsCopy.value
      break;
    case 'Salud y Belleza':
      ui = productsCopy.value.filter(e => e.category == currentSelection.value)
      break;
    case 'Medicamentos Auxiliares':
      ui = productsCopy.value.filter(e => e.category == currentSelection.value)
      break;
    case 'Alimentos y Multivitamínicos':
      ui = productsCopy.value.filter(e => e.category == currentSelection.value)
      break;

    default:
      ui = productsCopy.value.filter(e => e.category == currentSelection.value)
      break;
  }
  return ui
})

</script>

<template>
  <MainLayout>
    <template #main>
      <section class="relative">

        <div class="absolute inset-0 bg-black/30 z-10 animate-fade animate-delay-500 animate-duration-1000"></div>

        <img class="w-full h-full object-cover  " src="../assets/PrasadamWall2.webp" alt="">
      </section>


      <div class="relative overflow-hidden">
        <ShapesWall class="absolute inset-0 z-10">



        </ShapesWall>


        <section class="relative w-full h-full inset-0 z-20 ">

          <div class="w-full p-4  flex justify-center">
            <div
              class="flex flex-nowrap w-full justify-center md:flex-wrap  items-center gap-3 overflow-x-auto pb-4 md:pb-0 overflow-hidden m-1 p-2">

              <button v-for="(button, index) in buttonsCategories" :key="index"
                @click="setCurrentSelection(button.category as buttonCategory)" :class="[
                  currentSelection == button.category
                    ? 'bg-[#5D2E0A] text-amber-200 border-amber-500/50 shadow-md scale-105'
                    : 'bg-linear-to-tr from-[#CFA144] to-[#B8860B] text-amber-950 border-transparent hover:bg-amber-500'
                ]"
                class="flex items-center justify-center cursor-pointer gap-1.5 px-3 m-1 py-2 sm:px-4 sm:py-2 border rounded-full transition-all duration-300 whitespace-nowrap group active:scale-95">
                <span
                  class="material-symbols-outlined text-[16px] sm:text-[18px] transition-transform group-hover:rotate-12"
                  :class="currentSelection == button.category ? 'text-amber-400' : 'text-amber-900/60'">
                  {{ button.icon }}
                </span>

                <span class="font-serif font-bold text-[10px] sm:text-[11px] uppercase tracking-wider">
                  {{ button.name }}
                </span>
              </button>



            </div>
          </div>
          <TransitionGroup name="list" tag="div"
            class="flex flex-wrap justify-center gap-4 overflow-y-scroll h-[700px]">
            <ProductCard v-for="(product, index) in productsUi" :key="product.name" :product="product" />
          </TransitionGroup>
        </section>

      </div>


    </template>
  </MainLayout>
</template>

<style scoped>
.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.7s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
</style>
