<script lang="ts" setup>
import ProductCard from '@/components/ProductCard.vue';
import MainLayout from '@/layouts/MainLayout.vue';
const products = [
  {
    name: "Asafétida",
    category: "Alimentos y Multivitamínicos",
    description: ["Hing", "Suplemento de ajo y cebolla"],
    benefits: "Conoce sus propiedades y beneficios",
    link: "https://asafoetida.com.mx",
    status: "Disponible"
  },
  {
    name: "Chyawanprash",
    category: "Alimentos y Multivitamínicos",
    description: ["Multivitamínico. El elixir de la vida"],
    benefits: "Rejuvenecedor y antioxidante",
    link: "http://chyawanprash.com.mx/index.html",
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
    name: "Para la Diabetes",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a regular la glucosa y el colesterol",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Pasta Dental de Neem y Clavo",
    category: "Salud y Belleza",
    description: ["Pasta dental"],
    benefits: "Todas las propiedades del neem y el clavo",
    link: null,
    status: "Próximamente"
  },
  {
    name: "Para la Próstata",
    category: "Medicamentos Auxiliares",
    description: ["Medicamento auxiliar"],
    benefits: "Ayuda a aliviar los síntomas urinarios",
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
  }
]


</script>

<template>
  <MainLayout>
    <template #main>
      <div class="">
        <ProductCard v-for="(product, index) in products" :key="index" :product="product" />
      </div>
    </template>
  </MainLayout>
</template>

<style scoped></style>
