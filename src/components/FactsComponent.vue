<script setup lang="ts">
/**
 * FactsComponent.vue
 * A horizontal, non-invasive decorative component for Ayurvedic facts.
 * Built with Tailwind CSS for consistency with the project.
 */
import { ref, computed, onMounted } from 'vue';

const isVisible = ref(true);
const toggleFact = () => {
  isVisible.value = !isVisible.value;
};

const factIndex = ref(0);

const ayurvedaFacts = [
  "la medicina ayurvédica es uno de los sistemas médicos tradicionales más antiguos del mundo, con más de 3,000 años de historia documentada en la India.",
  "los textos clásicos que describen la medicina ayurvédica incluyen el Charaka Samhita y el Ashtanga Hridayam, considerados fundamentos de esta tradición.",
  "muchas plantas utilizadas en la medicina ayurvédica también han sido estudiadas en investigaciones modernas por sus posibles propiedades terapéuticas.",
  "la medicina ayurvédica tradicional utiliza más de 1,000 especies de plantas medicinales.",
  "en la tradición ayurvédica, muchas preparaciones herbales se elaboran combinando varias plantas para potenciar sus propiedades naturales.",
  "algunas especias comunes en la cocina india, como la cúrcuma y el jengibre, también se utilizan tradicionalmente en prácticas ayurvédicas.",
  "la cúrcuma contiene curcumina, un compuesto natural estudiado por sus posibles propiedades antioxidantes.",
  "el neem ha sido utilizado tradicionalmente en la India por sus propiedades relacionadas con el cuidado de la piel y la higiene.",
  "muchas plantas ayurvédicas crecen en climas tropicales y subtropicales del sur de Asia.",
  "la medicina ayurvédica tradicional suele incluir el uso de infusiones, polvos, aceites y pastas herbales.",
  "los aceites herbales se utilizan desde hace siglos en prácticas tradicionales de masaje en la India.",
  "la tradición ayurvédica considera a la naturaleza como una fuente central de bienestar.",
  "muchos jardines botánicos en la India cultivan plantas utilizadas en la medicina ayurvédica.",
  "la planta ashwagandha es una de las hierbas más conocidas dentro de la tradición ayurvédica.",
  "la amla, también conocida como grosella india, es una fruta utilizada tradicionalmente en diversas preparaciones herbales.",
  "la medicina ayurvédica tradicional pone gran énfasis en el uso de ingredientes naturales.",
  "algunas fórmulas ayurvédicas tradicionales se han transmitido durante siglos a través de textos y linajes de practicantes.",
  "el uso de especias en la alimentación diaria en la India tiene una fuerte relación histórica con tradiciones medicinales.",
  "muchas preparaciones herbales ayurvédicas se elaboran mediante procesos de cocción lenta para extraer compuestos naturales de las plantas.",
  "el sándalo ha sido utilizado tradicionalmente en la India tanto en prácticas espirituales como en preparaciones herbales.",
  "las hojas de tulsi, también conocidas como albahaca sagrada, son ampliamente utilizadas en la tradición ayurvédica.",
  "en la India existen universidades dedicadas al estudio formal de la medicina ayurvédica.",
  "el gobierno de la India reconoce oficialmente la medicina ayurvédica como un sistema tradicional de salud.",
  "muchos tratamientos ayurvédicos tradicionales utilizan aceites infusionados con plantas medicinales.",
  "la preparación de aceites herbales puede tardar horas o incluso días en métodos tradicionales.",
  "las farmacopeas ayurvédicas tradicionales contienen cientos de fórmulas herbales.",
  "algunas preparaciones ayurvédicas utilizan minerales purificados junto con ingredientes vegetales.",
  "la tradición ayurvédica considera importante la frescura de los ingredientes utilizados en las preparaciones.",
  "los textos ayurvédicos describen detalladamente muchas plantas medicinales y sus usos tradicionales.",
  "el jengibre seco y el jengibre fresco se consideran ingredientes diferentes en preparaciones tradicionales.",
  "la medicina ayurvédica ha influido históricamente en otros sistemas médicos tradicionales de Asia.",
  "muchos templos antiguos en la India tenían jardines de plantas medicinales.",
  "algunas recetas herbales tradicionales combinan hasta 20 ingredientes naturales diferentes.",
  "la medicina ayurvédica tradicional utiliza diferentes métodos de extracción de plantas, como decocciones e infusiones.",
  "las semillas de cardamomo son utilizadas tradicionalmente tanto en alimentos como en preparaciones herbales.",
  "el ghee, una mantequilla clarificada tradicional, se utiliza como base en algunas preparaciones herbales.",
  "las prácticas ayurvédicas históricamente se transmitían de maestro a discípulo.",
  "la medicina ayurvédica describe numerosas plantas que crecen en los Himalayas.",
  "la raíz de regaliz ha sido utilizada tradicionalmente en diversas fórmulas herbales.",
  "muchos preparados ayurvédicos tradicionales se consumen en forma de polvo mezclado con agua o miel.",
  "la miel ha sido utilizada durante siglos como vehículo natural para combinar ingredientes herbales.",
  "la tradición ayurvédica describe diferentes métodos de secado de plantas medicinales.",
  "algunas preparaciones tradicionales requieren moler las plantas en morteros de piedra.",
  "la medicina ayurvédica ha sido practicada continuamente durante milenios en el subcontinente indio.",
  "las hojas, raíces, semillas, cortezas y flores de las plantas pueden utilizarse en distintas preparaciones.",
  "el aceite de sésamo es uno de los aceites más utilizados en prácticas tradicionales ayurvédicas.",
  "el uso de vapor con plantas aromáticas aparece descrito en textos ayurvédicos antiguos.",
  "las fórmulas tradicionales pueden variar según la región de la India.",
  "algunas preparaciones herbales se envejecen durante meses antes de su uso.",
  "las plantas medicinales se recolectaban tradicionalmente en momentos específicos del año.",
  "los textos ayurvédicos describen cientos de combinaciones de hierbas.",
  "algunas preparaciones ayurvédicas utilizan fermentación natural.",
  "la tradición ayurvédica incluye métodos específicos para conservar plantas medicinales.",
  "el uso de morteros de granito para triturar plantas sigue siendo común en algunos lugares de la India.",
  "muchos ingredientes ayurvédicos también forman parte de la gastronomía tradicional india.",
  "la medicina ayurvédica forma parte del patrimonio cultural de la India.",
  "varias plantas ayurvédicas han sido estudiadas por universidades e institutos de investigación.",
  "las fórmulas tradicionales suelen buscar equilibrio entre diferentes ingredientes naturales.",
  "muchos remedios herbales tradicionales se preparaban diariamente para garantizar frescura.",
  "la tradición ayurvédica ha influido en prácticas de bienestar alrededor del mundo."
];

const fact = computed(() => {
  return ayurvedaFacts[factIndex.value];
});

const randomizeFact = () => {
  factIndex.value = Math.floor(Math.random() * ayurvedaFacts.length);
};

onMounted(() => {
  randomizeFact();
  setInterval(() => {
    randomizeFact();
  }, 9000);
});

</script>

<template>
  <div class="fixed bottom-6 right-6 z-999 flex flex-col items-end gap-3 pointer-events-none">
    <!-- Toggle Button -->
    <button @click="toggleFact"
      class="pointer-events-auto cursor-pointer w-11 h-11 border border-[#D4AF37] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg active:scale-95"
      :class="isVisible ? 'bg-[#3D2B1F] text-[#D4AF37]' : 'bg-[#D4AF37] text-[#3D2B1F] hover:bg-[#F5C518]'"
      aria-label="Toggle Ayurvedic Fact">
      <span class="material-symbols-outlined text-2xl">{{ isVisible ? 'close' : 'lightbulb' }}</span>
    </button>

    <!-- The Card (Horizontal/Toast Style) -->
    <Transition enter-active-class="transition duration-500 ease-out" enter-from-class="translate-x-12 opacity-0"
      enter-to-class="translate-x-0 opacity-100" leave-active-class="transition duration-300 ease-in"
      leave-from-class="translate-x-0 opacity-100" leave-to-class="translate-x-12 opacity-0">
      <div v-if="isVisible" class="pointer-events-auto w-[90vw] max-w-[550px] perspective-1000">
        <div
          class="relative bg-[#fdfbf7]/85 border border-[#e8d9c0] rounded-xl px-5 py-3 overflow-hidden shadow-2xl flex items-center group hover:border-[#D4AF37] transition-colors duration-300">

          <!-- Background Texture & Ornament (Native CSS for patterns) -->
          <div
            class="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]">
          </div>

          <div
            class="absolute -top-5 -right-5 w-24 h-24 opacity-[0.05] pointer-events-none transform rotate-12 transition-opacity group-hover:opacity-10">
            <svg viewBox="0 0 100 100" fill="#D4AF37">
              <path
                d="M50 0 C60 0 70 10 70 30 C70 50 50 60 50 90 C50 60 30 50 30 30 C30 10 40 0 50 0 Z M50 20 C45 20 40 25 40 30 C40 35 45 40 50 40 C55 40 60 35 60 30 C60 25 55 20 50 20 Z" />
            </svg>
          </div>

          <!-- Decorative Left Border -->
          <div class="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37]"></div>

          <!-- Content Wrapper -->
          <div class="relative z-10 flex items-center gap-4 w-full">
            <!-- Icon Orb -->
            <div
              class="flex-shrink-0 w-10 h-10 rounded-full bg-[#f5e6be] border border-[#d4af3744] flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors duration-300">
              <span
                class="material-symbols-outlined text-[#D4AF37] group-hover:text-white transition-colors duration-300">eco</span>
            </div>

            <!-- Text Content -->
            <div class="flex-grow min-w-0">
              <div class="flex items-center gap-3 mb-0.5">
                <h3 class="font-rozha-one text-lg text-[#3D2B1F] leading-tight truncate font-bold">
                  ¿Sabía que...?
                </h3>
                <div class="h-[1px] flex-grow bg-gradient-to-r from-[#D4AF37] to-transparent opacity-40"></div>
              </div>
              <p v-if="fact"
                class="font-plus-jakarta-sans text-sm md:text-base text-[#5C4D3E] font-medium leading-tight italic animate-fade"
                :key="factIndex">
                "{{ fact?.charAt(0).toUpperCase() + fact?.slice(1) }}"
              </p>
              <p v-else
                class="font-plus-jakarta-sans text-sm md:text-base text-[#5C4D3E] font-medium leading-tight italic ">
                "No hay datos disponibles"
              </p>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}
</style>
