<script lang="ts" setup>
import ShapesWall from '@/animations/ShapesWall.vue';
import ProductCard from '@/components/ProductCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
import { computed, ref } from 'vue';

import asafoetida from '@/assets/asafoetidaNomalFront.webp'
import chyawanprash from '@/assets/chyaBase.webp'
import pastaNeem from '@/assets/toothpastetp.webp'
import pastaKiante from '@/assets/DienteKiante.webp'
import pastaClavo from '@/assets/NeemClove.webp'
import jabonNeem from '@/assets/FrontNeem.webp'
import pastaNeemBox from '@/assets/boxToothPaste.webp'
import artritis from '@/assets/artritis.jpg'
import hemorroides from '@/assets/hemorroides.jpg'
import glufac from '@/assets/glufac.jpg'
import hangover from '@/assets/hangover.jpg'
import livad from '@/assets/Higado.jpg'
import pastaCharcoal from '@/assets/CharcoalNeem.webp'
//Medicine imports
import alopecia from '@/assets/Alopecia.webp'
import asma from '@/assets/Asma.webp'
import colesterol from '@/assets/Colesterol.webp'
import constipacion from '@/assets/constipacion.webp'
import estrenimiento from '@/assets/Estrinimiento.webp'
import menstruacion from '@/assets/mesntruacion.webp'
import nervios from '@/assets/Nervios.webp'
import prostata from '@/assets/Prostata.webp'
import riñones from '@/assets/Rinones.webp'
import obesidad from '@/assets/Obesidad.webp'
import gastritis from '@/assets/glufac.jpg'
import instago from '@/assets/instago.webp'




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
    image: jabonNeem,
    status: "Próximamente"
  },
  {
    name: "Pasta Dental de Neem",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    image: pastaNeemBox,
    status: "Disponible"
  },
  {
    name: "Pasta Dental Diamante Kiante",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    image: pastaKiante,
    status: "Disponible"
  },
  {
    name: "Pasta Dental de Neem y Clavo",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    image: pastaClavo,
    status: "Disponible"
  },
  {
    name: "Pasta Dental de Charcoal",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Pasta natural única con múltiples beneficios",
    link: "https://pastaneem.com/index.html",
    image: pastaCharcoal,
    status: "Disponible"
  },
  {
    name: "Medicina para la Diabetes",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a regular la glucosa y el colesterol",
    link: null,
    image: glufac,
    status: "Próximamente"
  },
  {
    name: "Medicina para Hígado",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas del hígado",
    link: null,
    image: livad,
    status: "Próximamente"
  },
  {
    name: "Medicina para Próstata",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas de la próstata",
    link: null,
    image: prostata,
    status: "Próximamente"
  },
  {
    name: "Para la Artritis",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar el dolor y reducir el daño articular",
    link: null,
    image: artritis,
    status: "Próximamente"
  },
  {
    name: "Para el Asma",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a controlar síntomas crónicos y prevenir ataques de asma",
    link: null,
    image: asma,
    status: "Próximamente"
  },
  {
    name: "Para el Estreñimiento",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda en el proceso de digestión y evacuación",
    link: null,
    image: estrenimiento,
    status: "Próximamente"
  },
  {
    name: "Para la Menstruación",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a reducir inflamación y dolor",
    link: null,
    image: menstruacion,
    status: "Próximamente"
  },
  {
    name: "Para los Nervios",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a disminuir la actividad cerebral para tratar ansiedad y trastornos del sueño",
    link: null,
    image: nervios,
    status: "Próximamente"
  },
  {
    name: "Para la Alopecia",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a que los folículos capilares reciban más nutrientes, favoreciendo el crecimiento",
    link: null,
    image: alopecia,
    status: "Próximamente"
  },
  {
    name: "Para los Riñones",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda en el tratamiento de problemas renales",
    link: null,
    image: riñones,
    status: "Próximamente"
  },
  {
    name: "Para la Obesidad",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a bloquear algunas grasas evitando su absorción",
    link: null,
    image: obesidad,
    status: "Próximamente"
  },
  {
    name: "Para el Colesterol",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a prevenir que el hígado produzca colesterol",
    link: null,
    image: colesterol,
    status: "Próximamente"
  },
  {
    name: "Medicina para Hemorroides",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por hemorroides",
    link: null,
    image: hemorroides,
    status: "Próximamente"
  },
  {
    name: "Medicina para Gastritis",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por gastritis",
    link: null,
    image: gastritis,
    status: "Próximamente"
  },
  {
    name: "Medicina para Cruda",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por cruda",
    link: null,
    image: hangover,
    status: "Próximamente"
  },
  {
    name: "Medicina para Colesterol",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por colesterol",
    link: null,
    image: colesterol,
    status: "Próximamente"
  },
  {
    name: "Medicina para Bajar Peso",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por bajar de peso",
    link: null,
    image: obesidad,
    status: "Próximamente"
  },
  {
    name: "Medicina para la Artritis",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por la artritis",
    link: null,
    image: artritis,
    status: "Próximamente"
  },
  {
    name: "Medicina para la Ansiedad",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas causados por la ansiedad",
    link: null,
    image: nervios,
    status: "Próximamente"
  },
  {
    name: "Medicina para más placer íntimo",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a mejorar el placer íntimo",
    link: null,
    image: instago,
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

        <div class="absolute inset-0 bg-black/10 z-10 animate-fade animate-delay-500 animate-duration-1000"></div>

        <img class="w-full h-full object-cover  " src="../assets/PrasadamWallProducts.webp" alt="">
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
