<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade, EffectCube, EffectCards, EffectFlip } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { ref } from 'vue';
import { useMainWallpaper } from '@/stores/mainWallpaper';

const modules = [Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade, EffectCube, EffectCards, EffectFlip];

const currentIndex = ref(0);
const onSlideChange = (swiper: SwiperType) => {
  currentIndex.value = swiper.activeIndex;
  useMainWallpaper().setIndex(swiper.activeIndex);
};

</script>

<template>
  <MainLayout>
    <template #main>
      <swiper class="h-[85vh] md:h-dvh" :modules="modules" :navigation="true" :pagination="{ clickable: true }"
        :autoplay="{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }" @slideChange="onSlideChange"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }" effect="coverflow">
        <swiper-slide>
          <div class="relative w-full h-full">
            <img src="../assets/asafWall.jpg" alt="" class="w-full h-full object-cover">
            <div class="absolute inset-0 w-full h-full bg-black/20 flex items-center justify-center">
              <div
                class="text-white p-4 rounded-xl text-center z-40 absolute top-12 md:top-12 lg:top-16 w-full flex flex-col items-center pointer-events-none drop-shadow-2xl">
                <h1
                  class="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase font-rozha-one leading-tight drop-shadow-xl text-shadow-[#9F6C2B] text-shadow-lg">
                  Asafoetida</h1>
                <p class="text-sm sm:text-base lg:text-xl mt-1 mb-2 md:mb-4 lg:mb-6 font-medium text-gray-100">
                  Condimento ayurvédico para sazonar sus platillos al estilo original de la India.</p>

              </div>

              <!-- Resumen Izquierda Asafoetida -->
              <div
                class="text-white text-center w-full md:w-1/2 flex flex-col items-center justify-center p-4 mt-32 sm:mt-44 md:mt-24 lg:mt-32 relative z-30">
                <div
                  class="bg-black/50 backdrop-blur-md p-5 lg:p-6 rounded-2xl border border-white/20 text-white shadow-2xl text-left max-w-xl mb-4 md:mb-6 mt-4">
                  <div class="space-y-4 md:space-y-3">
                    <div>
                      <h4 class="font-bold text-[#D7B347] text-[11px] lg:text-sm flex items-center">
                        <span class="material-symbols-outlined text-sm mr-2">nature</span>
                        Producto Natural y sin Conservadores
                      </h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-6">Completamente natural, sin químicos ni
                        conservadores. Extraído de la resina de hinojo perenne silvestre.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#D7B347] text-[11px] lg:text-sm flex items-center">
                        <span class="material-symbols-outlined text-sm mr-2">verified</span>
                        Condimento Certificado 100% Vegetariano
                      </h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-6">Certificado vegano con sellos de la India.
                        Sustituto ideal del ajo y la cebolla sin grasas animales.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#D7B347] text-[11px] lg:text-sm flex items-center">
                        <span class="material-symbols-outlined text-sm mr-2">schedule</span>
                        Fabricado y Envasado en la India
                      </h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-6">Lleva la esencia y cultura de la India desde
                        su materia prima. Condimento auténtico directamente importado.</p>
                    </div>
                  </div>
                </div>

                <!-- Promo Mayorista Slide 1 -->
                <div class="pointer-events-auto w-full max-w-xl mt-3 md:mt-4">
                  <div
                    class="bg-black/60 backdrop-blur-xl rounded-2xl border border-[#D7B347]/40 shadow-2xl overflow-hidden">
                    <!-- Header -->
                    <div
                      class="bg-linear-to-r from-[#D7B347] via-[#F5C518] to-[#D7B347] px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-white text-lg">bolt</span>
                        <span class="text-white font-extrabold text-xs lg:text-sm uppercase tracking-wider">
                          Descuento especial a mayoristas</span>
                      </div>
                      <router-link to="/contacto"
                        class="bg-black/20 hover:bg-black/30 text-white border border-white/50 px-3 py-1 rounded-full text-[10px] shadow-sm font-bold transition-colors whitespace-nowrap">
                        Contáctenos Aquí
                      </router-link>
                    </div>
                    <!-- Body -->
                    <div class="px-4 py-3 space-y-1.5">
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#D7B347]/20 rounded-full flex items-center justify-center text-[#F5C518] font-bold text-[9px]">5+</span>
                          Más de 5 productos
                        </span>
                        <span
                          class="bg-[#D7B347]/20 text-[#F5C518] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">10%
                          OFF</span>
                      </div>
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#D7B347]/30 rounded-full flex items-center justify-center text-[#F5C518] font-bold text-[9px]">10+</span>
                          Más de 10 productos
                        </span>
                        <span
                          class="bg-[#D7B347]/30 text-[#F5C518] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">20%
                          OFF</span>
                      </div>
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#D7B347]/40 rounded-full flex items-center justify-center text-[#F5C518] font-bold text-[9px]">50+</span>
                          Más de 50 productos
                        </span>
                        <span
                          class="bg-[#D7B347]/40 text-[#F5C518] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">30%
                          OFF</span>
                      </div>
                      <div class="border-t border-white/10 pt-1.5 mt-1 space-y-1.5">
                        <div class="flex items-center gap-1.5 text-[#86efac]">
                          <span class="material-symbols-outlined text-sm">package</span>
                          <span class="text-[10px] lg:text-[11px] font-bold">Envío GRATIS en compras mayores a $2,000
                            MXN</span>
                        </div>
                        <p class="text-[9px] lg:text-[10px] text-white/80 italic leading-tight">* Para obtener el precio
                          de promoción mayorista, presione el botón "Contáctenos Aquí" de arriba.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Button for Mobile -->
                <a href="https://www.mercadolibre.com.mx/asafoetida-hing-prasadam-especia-condimento-cocina-india/up/MLMU548274877?pdp_filters=item_id%3AMLM781697867&matt_tool=17030900#origin=share&sid=share&wid=MLM781697867"
                  target="_blank"
                  class="bg-linear-to-r from-[#D7B347]/90 via-[#D7B347]/90 to-[#9F6C2B]/90 border-2 border-white/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all inline-block pointer-events-auto backdrop-blur-sm shadow-xl md:hidden mt-2">Descubra
                  más</a>
              </div>
              <span class="material-symbols-outlined text-2xl">bolt</span>
              <!-- Imágenes Derecha -->
              <div class="hidden md:flex w-1/2 justify-around items-center h-full relative z-30 pt-16">
                <!-- Producto Premium -->
                <div class="flex flex-col items-center gap-4">
                  <img src="../assets/asaPremiumFrontS.webp" alt="Asafoetida Premium"
                    class="w-full max-w-[160px] lg:max-w-[200px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] mt-4">
                  <a href="https://www.mercadolibre.com.mx/asafoetida-hing-extra-fuerte-premium-especi-condimento-india/up/MLMU881832977?pdp_filters=item_id%3AMLM1426037672&matt_tool=17030900#origin=share&sid=share&wid=MLM1426037672"
                    target="_blank"
                    class="relative inline-flex items-center gap-2 bg-linear-to-r from-[#8B6914] via-[#A67C2E] to-[#8B6914] text-white px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide border-2 border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(139,105,20,0.5)] hover:shadow-[0_6px_30px_rgba(139,105,20,0.7)] hover:scale-110 hover:from-[#A67C2E] hover:via-[#C49B3A] hover:to-[#A67C2E] transition-all duration-300 pointer-events-auto backdrop-blur-sm group">
                    <span class="material-symbols-outlined">
                      garden_cart
                    </span>
                    Comprar Premium
                  </a>
                </div>
                <!-- Producto Normal -->
                <div class="flex flex-col items-center gap-4">
                  <img src="../assets/asafoetidaNomalFront.webp" alt="Asafoetida Normal"
                    class="w-full max-w-[160px] lg:max-w-[200px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                  <a href="https://www.mercadolibre.com.mx/asafoetida-hing-prasadam-especia-condimento-cocina-india/up/MLMU548274877?pdp_filters=item_id%3AMLM781697867&matt_tool=17030900#origin=share&sid=share&wid=MLM781697867"
                    target="_blank"
                    class="relative inline-flex items-center gap-2 bg-linear-to-r from-[#F5C518] via-[#FFD700] to-[#F5C518] text-gray-900 px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide border-2 border-yellow-300/80 shadow-[0_4px_20px_rgba(245,197,24,0.5)] hover:shadow-[0_6px_30px_rgba(245,197,24,0.7)] hover:scale-110 hover:from-[#FFD700] hover:via-[#FFE44D] hover:to-[#FFD700] transition-all duration-300 pointer-events-auto backdrop-blur-sm group">
                    <span class="material-symbols-outlined">
                      garden_cart
                    </span>
                    Comprar Ahora
                  </a>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="relative h-full w-full">
            <img src="../assets/WallNeem.jpg" alt="" class="w-full h-full object-cover bg-black/15">
            <div
              class="absolute top-0 left-0 w-full h-full bg-black/35 flex items-center justify-center overflow-hidden">
              <!-- Resumen Izquierda Pasta Neem -->
              <div
                class="absolute top-36 sm:top-48 md:top-0 left-0 md:left-4 lg:left-8 lg:mt-8 flex flex-col justify-center h-auto md:h-full pointer-events-auto z-30 w-full px-4 md:px-0 md:w-[300px] lg:w-[400px] xl:w-[450px]">
                <div
                  class="bg-black/50 backdrop-blur-md p-5 lg:p-6 rounded-2xl border border-white/20 text-white shadow-2xl mb-2 md:mb-0">
                  <h3 class="text-xl lg:text-2xl font-bold mb-4 md:mb-3 text-[#54816C]">Beneficios de Pasta Neem</h3>

                  <div
                    class="grid grid-cols-1 gap-3 lg:gap-3 max-h-[40vh] md:max-h-[60vh] overflow-y-auto pr-2 custom-scrollbar">
                    <div>
                      <h4 class="font-bold text-[#ebfffa] text-[11px] lg:text-[13px] flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#54816C] mr-2"></span> Remueve la Placa Dental</h4>
                      <p class="text-[10px] lg:text-[11px] text-gray-300 ml-3.5 leading-tight">Propiedades
                        antibacteriales que evitan que las bacterias se adhieran y se conviertan en sarro.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#ebfffa] text-[11px] lg:text-[13px] flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#54816C] mr-2"></span> Ayuda contra el Mal Aliento</h4>
                      <p class="text-[10px] lg:text-[11px] text-gray-300 ml-3.5 leading-tight">Frescura a menta con
                        propiedades bactericidas que eliminan bacterias.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#ebfffa] text-[11px] lg:text-[13px] flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#54816C] mr-2"></span> Evita las Caries</h4>
                      <p class="text-[10px] lg:text-[11px] text-gray-300 ml-3.5 leading-tight">El extracto de Neem
                        elimina ácidos y crea capas protectoras para el esmalte.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#ebfffa] text-[11px] lg:text-[13px] flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#54816C] mr-2"></span> Ayuda contra la Gingivitis</h4>
                      <p class="text-[10px] lg:text-[11px] text-gray-300 ml-3.5 leading-tight">Remueve el sarro
                        manteniendo encías saludables con uso constante.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#ebfffa] text-[11px] lg:text-[13px] flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#54816C] mr-2"></span> Ayuda a prevenir la Piorrea</h4>
                      <p class="text-[10px] lg:text-[11px] text-gray-300 ml-3.5 leading-tight">Previene periodontitis
                        por sus efectos antibacterial, antiséptico y antiinflamatorio.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#ebfffa] text-[11px] lg:text-[13px] flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#54816C] mr-2"></span> Dientes más Blancos</h4>
                      <p class="text-[10px] lg:text-[11px] text-gray-300 ml-3.5 leading-tight">Remueve manches
                        amarillas, dejando los dientes limpios con profunda higiene.</p>
                    </div>
                  </div>
                </div>
                <!-- Button for mobile -->
                <div class="mt-2 md:mt-4 flex justify-center md:hidden">
                  <a href="https://pastaneem.com" target="_blank"
                    class="bg-linear-to-r from-[#54816C]/90 via-[#182A26]/90 to-[#182A26]/90 border-2 border-white/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all inline-block pointer-events-auto backdrop-blur-sm shadow-xl">Descubra
                    más</a>
                </div>
              </div>

              <div
                class="text-white p-4 rounded-xl text-center z-40 absolute top-8 sm:top-12 md:top-12 lg:top-16 w-full flex flex-col items-center pointer-events-none drop-shadow-2xl">
                <h1
                  class="text-5xl sm:text-6xl lg:text-8xl font-bold text-white text-shadow-[#246350] text-shadow-lg font-plus-jakarta-sans leading-tight">
                  Pasta
                  Dental <span
                    class="text-[#ebfffa] uppercase text-shadow-[#33816a] italic font-bold text-shadow-lg font-poppins block sm:inline">Neem</span>
                </h1>
                <p class="text-sm sm:text-base lg:text-xl mt-1 mb-2 md:mb-4 lg:mb-6 font-medium text-gray-100">
                  Protección dental con frescura natural</p>
                <a href="#"
                  class="relative inline-flex items-center gap-2 bg-linear-to-r from-[#148b81]/90 via-[#182A26]/90 to-[#182A26]/90 text-white px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide border-2 border-emerald-500 shadow-[0_4px_20px_rgba(139,105,20,0.5)] hover:shadow-[0_6px_30px_rgba(139,105,20,0.7)] hover:scale-110 hover:from-[#2ea68e]   hover:via-[#3bc4a2] hover:to-[#2ea68e] transition-all duration-300 pointer-events-auto backdrop-blur-sm group">
                  <span class="material-symbols-outlined">
                    garden_cart
                  </span>
                  Próximamente
                </a>
              </div>

              <!-- Pasta Derecha -->
              <div
                class="absolute right-8 sm:right-4 md:right-12 lg:right-1 flex items-center justify-center h-full pointer-events-none z-10">
                <img src="../assets/toothpastetp.webp" alt=""
                  class="w-40 sm:w-48 md:w-56 lg:w-[530px] rotate-90 drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
              </div>
            </div>

          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="relative h-full w-full">
            <img src="../assets/chyawanprashWall.jpg" alt="" class="w-full h-full object-cover bg-black/15">
            <div
              class="absolute top-0 left-0 w-full h-full bg-black/35 flex items-center justify-center overflow-hidden">
              <!-- Pasta Izquierda -->
              <div
                class="absolute left-8 sm:left-4 md:left-10 lg:left-5 flex items-center justify-center h-full pointer-events-none z-10">
                <img src="../assets/chyaFruit.webp" alt=""
                  class="w-20 sm:w-28 md:w-36 lg:w-[600px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
              </div>

              <div
                class="text-white p-4 rounded-xl text-center z-40 absolute top-10 sm:top-12 md:top-12 lg:top-16 w-full flex flex-col items-center pointer-events-none drop-shadow-2xl">
                <h1
                  class="text-4xl sm:text-6xl lg:text-8xl font-bold text-white text-shadow-[#2b5ea5] text-shadow-lg font-plus-jakarta-sans leading-tight">
                  Chyawanprash
                </h1>
                <p class="text-sm sm:text-base lg:text-xl mt-1 mb-2 md:mb-4 lg:mb-6 font-medium text-gray-100">
                  Multivitamínico rejuvenecedor natural </p>

                <a href="https://www.mercadolibre.com.mx/chyawanprash--sona-chandi-prasadam-ayurveda-india/up/MLMU547660321?pdp_filters=item_id%3AMLM780643651&matt_tool=17030900#origin=share&sid=share&wid=MLM780643651"
                  target="_blank"
                  class="relative inline-flex items-center gap-2 bg-linear-to-r from-[#8b5114]/90 via-[#8b4214]/90 to-[#8b5114]/90 text-white px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide border-2 border-[#D4AF37]/60 shadow-[0_4px_20px_rgba(139,105,20,0.5)] hover:shadow-[0_6px_30px_rgba(139,105,20,0.7)] hover:scale-110 hover:from-[#A67C2E] hover:via-[#C49B3A] hover:to-[#A67C2E] transition-all duration-300 pointer-events-auto backdrop-blur-sm group">
                  <span class="material-symbols-outlined">
                    garden_cart
                  </span>
                  Comprar Chyawanprash
                </a>
              </div>

              <!-- Resumen Derecha -->
              <div
                class="absolute top-36 sm:top-48 md:top-0 right-0 md:right-8 lg:right-12 flex flex-col justify-center h-auto md:h-full pointer-events-auto z-30 w-full px-4 md:px-0 md:w-[280px] lg:w-[350px] xl:w-[400px] lg:mt-8">
                <div
                  class="bg-black/50 backdrop-blur-md p-5 lg:p-6 rounded-2xl border border-white/20 text-white shadow-2xl mb-2 md:mb-0">
                  <h3 class="text-xl lg:text-2xl font-bold mb-3 md:mb-2 text-[#4c9dff]">
                    ¿Qué es
                    Chyawanprash?</h3>
                  <p class="text-xs lg:text-sm mb-4 leading-relaxed text-gray-200">
                    Mermelada negra de la medicina Ayurveda. Sus más de 50 ingredientes mejoran su calidad de vida por
                    sus propiedades rejuvenecedoras.
                  </p>

                  <div class="space-y-4 md:space-y-3">
                    <div>
                      <h4 class="font-bold text-[#4c9dff] text-[11px] lg:text-sm flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#4c9dff] mr-2"></span> 100% Natural</h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-3.5">Sin conservadores ni químicos, procesos
                        directos de la India.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#4c9dff] text-[11px] lg:text-sm flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#4c9dff] mr-2"></span> Cultura Hindú</h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-3.5">Procesos milenarios Rasayana en su
                        elaboración.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#4c9dff] text-[11px] lg:text-sm flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#4c9dff] mr-2"></span> Potente Multivitamínico</h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-3.5">Láminas de oro y plata reales en la
                        formulación de más de 51 ingredientes.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#4c9dff] text-[11px] lg:text-sm flex items-center"><span
                          class="w-1.5 h-1.5 rounded-full bg-[#4c9dff] mr-2"></span> Eficacia y Sabor Únicos</h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-3.5">Sabor exótico, fuerte y agridulce lleno de
                        beneficios y excentricidad.</p>
                    </div>
                  </div>
                </div>

                <!-- Promo Mayorista Slide 3 -->
                <div class="pointer-events-auto w-full max-w-md mt-3 md:mt-4 px-4 md:px-0">
                  <div
                    class="bg-black/60 backdrop-blur-xl rounded-2xl border border-[#4c9dff]/40 shadow-2xl overflow-hidden">
                    <!-- Header -->
                    <div
                      class="bg-gradient-to-r from-[#2563eb] via-[#4c9dff] to-[#2563eb] px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-white text-lg">bolt</span>
                        <span class="text-white font-extrabold text-xs lg:text-sm uppercase tracking-wider">Descuento
                          especial a
                          mayoristas</span>
                      </div>
                      <router-link to="/contacto"
                        class="bg-white hover:bg-black/30 text-black border border-white/50 px-3 py-1 rounded-full text-[10px] shadow-sm font-bold transition-colors whitespace-nowrap">
                        Contacto
                      </router-link>
                    </div>
                    <!-- Body -->
                    <div class="px-4 py-3 space-y-1.5">
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#4c9dff]/20 rounded-full flex items-center justify-center text-[#4c9dff] font-bold text-[9px]">5+</span>
                          Más de 5 productos
                        </span>
                        <span
                          class="bg-[#4c9dff]/20 text-[#4c9dff] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">10%
                          OFF</span>
                      </div>
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#4c9dff]/30 rounded-full flex items-center justify-center text-[#4c9dff] font-bold text-[9px]">10+</span>
                          Más de 10 productos
                        </span>
                        <span
                          class="bg-[#4c9dff]/30 text-[#4c9dff] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">20%
                          OFF</span>
                      </div>
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#4c9dff]/40 rounded-full flex items-center justify-center text-[#4c9dff] font-bold text-[9px]">50+</span>
                          Más de 50 productos
                        </span>
                        <span
                          class="bg-[#4c9dff]/40 text-[#4c9dff] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">30%
                          OFF</span>
                      </div>
                      <div class="border-t border-white/10 pt-1.5 mt-1 space-y-1.5">
                        <div class="flex items-center gap-1.5 text-[#86efac]">
                          <span class="material-symbols-outlined text-sm">package</span>
                          <span class="text-[10px] lg:text-[11px] font-bold">📦 Envío GRATIS en compras mayores a $2,000
                            MXN</span>
                        </div>
                        <p class="text-[9px] lg:text-[10px] text-white/80 italic leading-tight">* Para obtener el precio
                          de promoción mayorista, presiona el botón "Contáctanos Aquí" de arriba.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Button for mobile -->
                <div class="mt-2 flex justify-center md:hidden">
                  <a href="http://chyawanprash.com.mx" target="_blank"
                    class="bg-linear-to-r from-[#54816C]/90 via-[#182A26]/90 to-[#182A26]/90 border-2 border-white/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all inline-block pointer-events-auto backdrop-blur-sm shadow-xl">Descubra
                    más</a>
                </div>
              </div>
            </div>

          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="relative w-full h-full">
            <img src="../assets/NeemWall1.webp" alt="" class="w-full h-full object-cover">
            <div class="absolute inset-0 w-full h-full bg-black/20 flex items-center justify-center">
              <div
                class="text-white p-4 rounded-xl text-center z-40 absolute top-12 md:top-12 lg:top-16 w-full flex flex-col items-center pointer-events-none drop-shadow-2xl">
                <h1
                  class="text-5xl sm:text-6xl lg:text-8xl font-bold uppercase font-rozha-one leading-tight drop-shadow-xl text-shadow-[#124d47] text-shadow-lg">
                  Jabón de Neem</h1>
                <p class="text-sm sm:text-base lg:text-xl mt-1 mb-2 md:mb-4 lg:mb-6 font-medium text-gray-100">
                  Jabón natural para el cuidado de la piel.</p>

              </div>

              <!-- Resumen Izquierda Jabón de Neem -->
              <div
                class="text-white text-center w-full md:w-1/2 flex flex-col items-center justify-center p-4 mt-32 sm:mt-44 md:mt-24 lg:mt-32 relative z-30">
                <div
                  class="bg-black/50 backdrop-blur-md p-5 lg:p-6 rounded-2xl border border-white/20 text-white shadow-2xl text-left max-w-xl mb-4 md:mb-6 mt-4">
                  <div class="space-y-4 md:space-y-3">
                    <div>
                      <h4 class="font-bold text-[#47d7a0] text-[11px] lg:text-sm flex items-center">
                        <span class="material-symbols-outlined text-sm mr-2">nature</span>
                        Propiedades Antibacteriales y Purificantes
                      </h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-6">Limpia profundamente la piel, eliminando
                        impurezas y protegiendo contra bacterias causantes del acné.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#47d7a0] text-[11px] lg:text-sm flex items-center">
                        <span class="material-symbols-outlined text-sm mr-2">verified</span>
                        Piel Suave e Hidratada
                      </h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-6">Mantiene la piel fresca y saludable. Ideal
                        para todo tipo de cutis, ayudando en su balance natural.</p>
                    </div>
                    <div>
                      <h4 class="font-bold text-[#47d7a0] text-[11px] lg:text-sm flex items-center">
                        <span class="material-symbols-outlined text-sm mr-2">schedule</span>
                        100% Natural y de la India
                      </h4>
                      <p class="text-[10px] lg:text-xs text-gray-300 ml-6">Elaborado con aceites y extractos puros.
                        Libre de grasas animales y químicos abrasivos.</p>
                    </div>
                  </div>
                </div>

                <!-- Promo Mayorista Slide 4 -->
                <div class="pointer-events-auto w-full max-w-xl mt-3 md:mt-4">
                  <div
                    class="bg-black/60 backdrop-blur-xl rounded-2xl border border-[#54816C]/40 shadow-2xl overflow-hidden">
                    <!-- Header -->
                    <div
                      class="bg-linear-to-r from-[#54816C] via-[#659A81] to-[#54816C] px-4 py-2 flex flex-col sm:flex-row items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-white text-lg">bolt</span>
                        <span class="text-white font-extrabold text-xs lg:text-sm uppercase tracking-wider">
                          Descuento especial a mayoristas</span>
                      </div>
                      <router-link to="/contacto"
                        class="bg-black/20 hover:bg-black/30 text-white border border-white/50 px-3 py-1 rounded-full text-[10px] shadow-sm font-bold transition-colors whitespace-nowrap">
                        Contáctanos Aquí
                      </router-link>
                    </div>
                    <!-- Body -->
                    <div class="px-4 py-3 space-y-1.5">
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#54816C]/40 rounded-full flex items-center justify-center text-[#47d7a0] font-bold text-[9px]">5+</span>
                          Más de 5 productos
                        </span>
                        <span
                          class="bg-[#54816C]/40 text-[#47d7a0] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">10%
                          OFF</span>
                      </div>
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#54816C]/60 rounded-full flex items-center justify-center text-[#47d7a0] font-bold text-[9px]">10+</span>
                          Más de 10 productos
                        </span>
                        <span
                          class="bg-[#54816C]/60 text-[#47d7a0] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">20%
                          OFF</span>
                      </div>
                      <div class="flex items-center justify-between text-white">
                        <span class="text-[10px] lg:text-xs flex items-center gap-1.5">
                          <span
                            class="w-5 h-5 bg-[#54816C]/80 rounded-full flex items-center justify-center text-[#47d7a0] font-bold text-[9px]">50+</span>
                          Más de 50 productos
                        </span>
                        <span
                          class="bg-[#54816C]/80 text-[#47d7a0] font-extrabold text-[10px] lg:text-xs px-2.5 py-0.5 rounded-full">30%
                          OFF</span>
                      </div>
                      <div class="border-t border-white/10 pt-1.5 mt-1 space-y-1.5">
                        <div class="flex items-center gap-1.5 text-[#86efac]">
                          <span class="material-symbols-outlined text-sm">package</span>
                          <span class="text-[10px] lg:text-[11px] font-bold">Envío GRATIS en compras mayores a $2,000
                            MXN</span>
                        </div>
                        <p class="text-[9px] lg:text-[10px] text-white/80 italic leading-tight">* Para obtener el precio
                          de promoción mayorista, presiona el botón "Contáctanos Aquí" de arriba.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Button for Mobile -->
                <a href="#" target="_blank"
                  class="bg-linear-to-r from-[#54816C]/90 via-[#659A81]/90 to-[#182A26]/90 border-2 border-white/80 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:scale-105 transition-all inline-block pointer-events-auto backdrop-blur-sm shadow-xl md:hidden mt-2">Descubra
                  más</a>
              </div>

              <!-- Imágenes Derecha -->
              <div class="hidden md:flex w-1/2 justify-around items-center h-full relative z-30 pt-16">
                <!-- Producto Premium -->
                <div class="flex flex-col items-center gap-4">
                  <img src="../assets/NeemSoap.webp" alt="Neem Soap"
                    class="w-full max-w-[260px] lg:max-w-[450px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] mt-4 hover:scale-110 transition-all duration-300 pointer-events-auto  group">

                </div>
                <!-- Producto Normal -->
                <div class="flex flex-col items-center gap-4">
                  <img src="../assets/FrontNeem.webp" alt="Neem Soap"
                    class="w-full max-w-[260px] lg:max-w-[450px] drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)] hover:scale-110 transition-all duration-300 pointer-events-auto  group">
                  <a href="https://www.mercadolibre.com.mx/jabon-neem-prasadam-india-ayurveda-natural/up/MLMU549975120?pdp_filters=item_id%3AMLM781290580&matt_tool=17030900#origin=share&sid=share&wid=MLM781290580"
                    target="_blank"
                    class="relative inline-flex items-center gap-2 bg-linear-to-r from-[#47d7a0] via-[#6EE7B7] to-[#47d7a0] text-gray-900 px-5 py-2.5 lg:px-7 lg:py-3 rounded-full text-xs lg:text-sm font-bold uppercase tracking-wide border-2 border-[#34D399]/80 shadow-[0_4px_20px_rgba(71,215,160,0.5)] hover:shadow-[0_6px_30px_rgba(71,215,160,0.7)] hover:scale-110 hover:from-[#6EE7B7] hover:via-[#A7F3D0] hover:to-[#6EE7B7] transition-all duration-300 pointer-events-auto backdrop-blur-sm group">
                    Comprar Ahora <span
                      class="material-symbols-outlined text-sm group-hover:animate-bounce">garden_cart</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>

      </swiper>




      <div class="min-h-screen font-sans bg-[#fefce8] text-gray-800 selection:bg-[#86efac] selection:text-[#14532d]">

        <!-- 1) HERO SECTION -->
        <section
          class="relative bg-linear-to-br text-white overflow-hidden flex items-center justify-center min-h-[90vh]"
          :class="{
            'bg-linear-to-br from-[#D7B347]/80 rounded-none via-[#D7B347]/80 to-[#9F6C2B]/95 ': useMainWallpaper().getIndex === 0,
            'bg-linear-to-br from-[#54816C]/80 rounded-none via-[#182A26]/80 to-[#182A26]/95 ': useMainWallpaper().getIndex === 1,
            'bg-linear-to-br from-[#103251]/80 rounded-none via-[#103251]/80 to-[#103251]/95 ': useMainWallpaper().getIndex === 2,
            'bg-linear-to-br from-[#103151]/80 rounded-none via-[#103251]/80 to-[#103251]/95 ': useMainWallpaper().getIndex === 3,
          }">
          <!-- Decoración de fondo -->
          <div class="absolute inset-0 opacity-20   bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))]
 from-white via-transparent to-transparent">
          </div>

          <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center ">
            <span
              class="inline-block py-1 px-3 rounded-full bg-white/20 backdrop-blur-sm text-[#fefce8] text-sm md:text-base mb-6 font-medium tracking-widest uppercase">
              Bienestar y Equilibrio
            </span>
            <h1
              class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-[#fefce8] leading-tight">
              Productos Ayurvédicos <br class="hidden md:block">
              <span class="font-poppins"
                :class="{ 'text-[#fff1c4] text-shadow-md ': useMainWallpaper().getIndex === 0, 'text-[#18393e] text-shadow-md text-shadow-blue-200': useMainWallpaper().getIndex === 1, 'text-[#182b41] text-shadow-md text-shadow-blue-200': useMainWallpaper().getIndex === 2 }">PRASADAM</span>
            </h1>
            <p
              class="text-lg md:text-2xl mb-12 font-light text-green-50 max-w-3xl mx-auto drop-shadow-md border-l-4 border-[#d4af37] pl-4 md:border-none md:pl-0">
              La auténtica esencia milenaria traída directamente desde la India para su bienestar, equilibrio y salud
              natural.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                class="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-[#3d5685] rounded-2xl font-bold shadow-xl hover:bg-yellow-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl">
                Ver Productos
              </button>
              <button
                class="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#86efac] text-[#86efac] rounded-2xl font-bold hover:bg-[#86efac]/10 transition-all duration-300 transform hover:-translate-y-1">
                Conocer Ayurveda
              </button>
            </div>
          </div>

          <!-- Forma inferior decorativa -->
          <div class="absolute bottom-0 left-0 right-0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
              class="text-[#fefce8] fill-current h-16 md:h-32 w-full preserve-3d">
              <path
                d="M0,128L48,144C96,160,192,192,288,197.3C384,203,480,181,576,160C672,139,768,117,864,133.3C960,149,1056,203,1152,213.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
              </path>
            </svg>
          </div>
        </section>

        <!-- 2) SECCIÓN: ¿Quiénes Somos? -->
        <section class="py-20 px-6 bg-[#fefce8]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-5xl font-extrabold text-[#14532d] mb-6">¿Quiénes Somos?</h2>
              <p class="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                Somos una marca Mexicana que desarrolla, maquila, importa, exporta y representa productos ayurvédicos
                100%
                naturales, manteniendo la esencia, procesos y calidad originarios de la India.
              </p>
            </div>

            <div class="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div class="lg:w-1/2">
                <img src="../assets/pic1.webp" alt="Prasadam Ambiente"
                  class="w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500">
              </div>
              <div class="lg:w-1/2">
                <p class="text-lg text-gray-700 leading-relaxed italic border-l-4 border-[#d4af37] pl-6">
                  "Nuestra pasión nace de la conexión con las raíces de la medicina tradicional, trayendo lo mejor de
                  cada región para su bienestar diario."
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <!-- Tarjeta 1 -->
              <div
                class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#86efac]/50 group">
                <div
                  class="w-14 h-14 bg-[#14532d] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <span class="material-symbols-outlined text-3xl">language</span>
                </div>
                <h3 class="text-xl font-bold text-[#14532d] mb-3">Importación Directa</h3>
                <p class="text-gray-600">Conectamos la pureza de la India con México, sin intermediarios.</p>
              </div>

              <!-- Tarjeta 2 -->
              <div
                class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#86efac]/50 group">
                <div
                  class="w-14 h-14 bg-[#14532d] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <span class="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 class="text-xl font-bold text-[#14532d] mb-3">Certificados</h3>
                <p class="text-gray-600">Avalados con certificaciones oficiales de calidad internacional.</p>
              </div>

              <!-- Tarjeta 3 -->
              <div
                class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#86efac]/50 group">
                <div
                  class="w-14 h-14 bg-[#14532d] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <span class="material-symbols-outlined text-3xl">history_edu</span>
                </div>
                <h3 class="text-xl font-bold text-[#14532d] mb-3">Procesos Milenarios</h3>
                <p class="text-gray-600">Respetamos fielmente las recetas y metodologías ancestrales.</p>
              </div>

              <!-- Tarjeta 4 -->
              <div
                class="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#86efac]/50 group">
                <div
                  class="w-14 h-14 bg-[#14532d] rounded-2xl flex items-center justify-center text-white mb-6 group-hover:bg-[#d4af37] transition-colors duration-300">
                  <span class="material-symbols-outlined text-3xl">favorite</span>
                </div>
                <h3 class="text-xl font-bold text-[#14532d] mb-3">100% Natural</h3>
                <p class="text-gray-600">Insumos de origen vegetal, libres de crueldad y químicos.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 3) SECCIÓN: Consumo Natural -->
        <section class="py-24 px-6 bg-[#f0fdf4] relative overflow-hidden">
          <div class="absolute top-0 right-0 p-12 opacity-10 pointer-events-none">
            <span class="material-symbols-outlined text-[200px] text-[#14532d]">eco</span>
          </div>

          <div class="max-w-6xl mx-auto relative z-10">
            <div class="flex flex-col lg:flex-row items-center gap-12">
              <div class="lg:w-1/2">
                <h2 class="text-3xl md:text-5xl font-extrabold text-[#14532d] mb-6">Consumo Puramente Natural</h2>
                <p class="text-lg text-gray-700 mb-8 leading-relaxed">
                  Nuestro compromiso es con su cuerpo y con la tierra. En PRASADAM garantizamos que cada producto está
                  formulado pensando en el balance perfecto y la salud óptima.
                </p>

                <div class="grid grid-cols-2 gap-4 mb-8">
                  <img src="../assets/pic2.webp" alt="Natural 1"
                    class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-full object-cover">
                  <img src="../assets/pic3.webp" alt="Natural 2"
                    class="rounded-2xl shadow-lg hover:shadow-xl transition-shadow w-full h-full object-cover">
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div class="flex items-center space-x-3 text-[#14532d] mb-2">
                    <span class="material-symbols-outlined">
                      check
                    </span>
                    <span class="font-semibold text-lg">Sin químicos</span>
                  </div>
                  <div class="flex items-center space-x-3 text-[#14532d] mb-2">
                    <span class="material-symbols-outlined">
                      check
                    </span>
                    <span class="font-semibold text-lg">Sin conservadores</span>
                  </div>
                  <div class="flex items-center space-x-3 text-[#14532d] mb-2">
                    <span class="material-symbols-outlined">
                      check
                    </span>
                    <span class="font-semibold text-lg">Sin saborizantes artificiales</span>
                  </div>
                  <div class="flex items-center space-x-3 text-[#14532d] mb-2">
                    <span class="material-symbols-outlined">
                      check
                    </span>
                    <span class="font-semibold text-lg">Sin derivados animales</span>
                  </div>
                  <div
                    class="flex items-center space-x-3 text-[#14532d] sm:col-span-2 mt-4 p-4 bg-white/50 rounded-xl border border-[#86efac]/50  shadow-sm">
                    <span class="material-symbols-outlined">
                      spa
                    </span>
                    <span class="font-bold text-xl ml-2">Productos Ayurvédicos</span>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 w-full mt-10 lg:mt-0">
                <div
                  class="aspect-square bg-linear-to-tr from-[#14532d] to-[#86efac] rounded-full p-2 shadow-2xl relative">
                  <div
                    class="w-full h-full bg-[#fefce8] rounded-full flex items-center justify-center overflow-hidden border-8 border-white border-opacity-20 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1743997167654-293e75a74364?q=80&w=1774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Ingredientes naturales Ayurveda"
                      class="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110">
                  </div>
                  <!-- Badge flotante -->
                  <div
                    class="absolute bottom-10 right-10 bg-white p-4 rounded-2xl flex items-center gap-3 animate-bounce shadow-lg">
                    <span class="text-3xl">🌿</span>
                    <div>
                      <p class="text-xs text-gray-500 uppercase font-bold tracking-wider">Calidad</p>
                      <p class="text-sm font-bold text-[#14532d]">100% Pura</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- RELATED NEWS SECTION -->
        <section class="relative overflow-hidden bg-linear-to-br from-amber-50 via-orange-100 to-amber-200 py-20">

          <!-- Decorative Wave Top -->


          <div class="relative max-w-6xl mx-auto px-6">

            <!-- Title -->
            <div class="text-center mb-14">
              <h2 class="text-4xl font-bold text-amber-900">
                Noticias Relacionadas
              </h2>
              <p class="mt-4 text-amber-800 max-w-2xl mx-auto">
                Artículos y publicaciones externas sobre Ayurveda, Neem y bienestar natural.
              </p>
            </div>

            <!-- Cards -->
            <div class="grid md:grid-cols-3 gap-8">

              <!-- Card 1 -->
              <article class="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition">
                <h3 class="text-lg font-semibold text-orange-800 mb-3">
                  Neem: beneficios y propiedades
                </h3>
                <p class="text-amber-700 text-sm mb-4">
                  Árbol milenario con propiedades antivirales, antiinflamatorias y antimicrobianas.
                </p>

                <p class="text-xs text-amber-600 mb-3">
                  Fuente: Aura Reyna, “Neem, de la India a México: el árbol que purifica el aire, da sombra y posee
                  propiedades medicinales”,
                  <span class="italic">Infobae</span>, 8 de abril de 2025.
                </p>

                <a href="https://www.infobae.com/mexico/2025/04/08/neem-de-la-india-a-mexico-el-arbol-que-purifica-el-aire-da-sombra-y-posee-propiedades-medicinales/"
                  target="_blank" rel="noopener noreferrer"
                  class="inline-block text-sm font-semibold text-orange-700 hover:text-orange-900 transition">
                  Leer artículo →
                </a>
              </article>

              <!-- Card 2 -->
              <article class="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition">
                <h3 class="text-lg font-semibold text-orange-800 mb-3">
                  ¿Qué es el Ayurveda?
                </h3>
                <p class="text-amber-700 text-sm mb-4">
                  Introducción al sistema tradicional de medicina originario de la India.
                </p>

                <p class="text-xs text-amber-600 mb-3">
                  Fuente: “Qué es el Ayurveda”, <span class="italic">Indiaveda</span> (s.f.).
                </p>

                <a href="https://indiaveda.com/p/que-es-el-ayurveda" target="_blank" rel="noopener noreferrer"
                  class="inline-block text-sm font-semibold text-orange-700 hover:text-orange-900 transition">
                  Leer artículo →
                </a>
              </article>

              <!-- Card 3 -->
              <article class="bg-white rounded-2xl shadow-lg border border-amber-200 p-6 hover:shadow-xl transition">
                <h3 class="text-lg font-semibold text-orange-800 mb-3">
                  Amla en cosmética natural
                </h3>
                <p class="text-amber-700 text-sm mb-4">
                  Información sobre el uso tradicional del amla en cosmética ayurvédica.
                </p>

                <p class="text-xs text-amber-600 mb-3">
                  Fuente: “Amla – Incipedia”, <span class="italic">La Saponaria</span> (s.f.).
                </p>

                <a href="https://www.lasaponaria.es/incipedia/amla" target="_blank" rel="noopener noreferrer"
                  class="inline-block text-sm font-semibold text-orange-700 hover:text-orange-900 transition">
                  Leer artículo →
                </a>
              </article>

            </div>

            <!-- Disclaimer -->
            <div class="mt-16 bg-amber-100 border border-amber-300 rounded-xl p-6">
              <p class="text-xs text-amber-900 leading-relaxed text-center">
                Aviso: La información compartida en esta sección proviene de fuentes externas de terceros.
                Prasadam.mx y Prasadam.com.mx no están afiliados, asociados ni respaldados por los
                autores o medios citados. El contenido se comparte únicamente con fines informativos.
              </p>
            </div>

          </div>



        </section>

        <!-- 4) SECCIÓN: ¿Qué es Ayurveda? -->
        <section class="py-24 px-6 bg-[#1e3a8a] text-white overflow-hidden relative">
          <!-- Decoración radial -->
          <div
            class="absolute -top-40 -left-40 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50">
          </div>
          <div
            class="absolute -bottom-40 -right-40 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-50">
          </div>

          <div class="max-w-6xl mx-auto relative z-10 text-center">
            <span class="text-blue-300 font-semibold tracking-widest uppercase mb-4 block">Sabiduría Ancestral</span>
            <h2 class="text-3xl md:text-5xl font-extrabold mb-8 text-white">¿Qué es Ayurveda?</h2>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div class="lg:col-span-4 hidden lg:block">
                <img src="../assets/pic4V.webp" alt="Ayurveda Life"
                  class="w-full h-auto rounded-3xl shadow-2xl border-4 border-white/20">
              </div>
              <div class="lg:col-span-8">
                <p
                  class="text-lg md:text-2xl font-light text-blue-100 max-w-4xl mx-auto mb-12 leading-relaxed text-left lg:text-center">
                  Más que una medicina, es un estilo de vida milenario. Un enfoque integral que busca mantener o
                  recuperar
                  la salud mediante el equilibrio perfecto entre su cuerpo, su mente y su espíritu.
                </p>

                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="bg-blue-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20">
                    <h4 class="text-xl font-bold mb-2 text-[#d4af37]">Enfoque Integral</h4>
                    <p class="text-sm text-blue-100">Cuerpo, mente y espíritu como un todo indivisible.</p>
                  </div>
                  <div class="bg-blue-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20">
                    <h4 class="text-xl font-bold mb-2 text-[#d4af37]">Prevención</h4>
                    <p class="text-sm text-blue-100">Actúa antes de la enfermedad, promoviendo el bienestar.</p>
                  </div>
                  <div class="bg-blue-900/40 backdrop-blur-sm p-6 rounded-2xl border border-blue-400/20">
                    <h4 class="text-xl font-bold mb-2 text-[#d4af37]">Estilo de Vida</h4>
                    <p class="text-sm text-blue-100">Hábitos diarios en armonía con la naturaleza.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                class="px-8 py-4 bg-[#d4af37] text-blue-900 rounded-2xl font-bold hover:bg-yellow-500 transition duration-300 shadow-lg transform hover:-translate-y-1">
                ¿Es recomendable y eficaz?
              </button>
              <button
                class="px-8 py-4 bg-transparent border-2 border-white text-white rounded-2xl font-bold hover:bg-white hover:text-blue-900 transition duration-300 shadow-lg transform hover:-translate-y-1">
                Descubra Ayurveda en México
              </button>
            </div>
          </div>
        </section>

        <!-- 5) SECCIÓN: Categorías de Productos -->
        <section class="py-24 px-6 bg-[#fefce8]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-5xl font-extrabold text-[#14532d] mb-4">Mundo de Bienestar</h2>
              <p class="text-lg text-gray-600">Explora nuestras principales líneas de productos.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Categoria 1 -->
              <div
                class="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 relative">
                <div class="h-48 bg-[#14532d] flex items-center justify-center p-6 relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-40 group-hover:scale-110 transition duration-700">
                  </div>
                  <span
                    class="material-symbols-outlined text-white text-6xl relative z-10">face_retouching_natural</span>
                </div>
                <div class="p-8 text-center bg-white relative">
                  <div
                    class="w-12 h-12 bg-[#86efac] rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-md">
                    <span class="text-[#14532d] font-bold text-xl">1</span>
                  </div>
                  <h3 class="text-2xl font-bold text-[#14532d] mb-3 mt-4">Salud y Belleza</h3>
                  <p class="text-gray-600 mb-6 line-clamp-2">Cosmética natural y cuidado personal con formulaciones
                    ancestrales puras.</p>
                  <button
                    class="text-[#14532d] font-bold border-b-2 border-[#d4af37] pb-1 hover:text-[#d4af37] transition inline-flex items-center gap-2 group-hover:gap-3">
                    Ver Categoría <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>

              <!-- Categoria 2 -->
              <div
                class="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 relative">
                <div class="h-48 bg-gray-200 flex items-center justify-center p-6 relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5e4787a2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-50 group-hover:scale-110 transition duration-700">
                  </div>
                  <div class="absolute inset-0 bg-black/40"></div>
                  <span
                    class="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full z-20">Próximamente</span>
                  <span class="material-symbols-outlined text-white text-6xl relative z-10">medication</span>
                </div>
                <div class="p-8 text-center bg-white relative opacity-70">
                  <div
                    class="w-12 h-12 bg-gray-300 rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-md">
                    <span class="text-gray-600 font-bold text-xl">2</span>
                  </div>
                  <h3 class="text-2xl font-bold text-gray-700 mb-3 mt-4">Medicinas Auxiliares</h3>
                  <p class="text-gray-500 mb-6 line-clamp-2">Remedios herbales tradicionales para dolencias específicas.
                  </p>
                  <button
                    class="text-gray-400 font-bold border-b-2 border-gray-300 pb-1 cursor-not-allowed inline-flex items-center gap-2">
                    En desarrollo
                  </button>
                </div>
              </div>

              <!-- Categoria 3 -->
              <div
                class="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 group hover:shadow-2xl transition duration-500 transform hover:-translate-y-2 relative">
                <div class="h-48 bg-[#d4af37] flex items-center justify-center p-6 relative overflow-hidden">
                  <div
                    class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1628102491629-77858ab57fa5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80')] bg-cover bg-center mix-blend-overlay opacity-30 group-hover:scale-110 transition duration-700">
                  </div>
                  <span class="material-symbols-outlined text-white text-6xl relative z-10">restaurant</span>
                </div>
                <div class="p-8 text-center bg-white relative">
                  <div
                    class="w-12 h-12 bg-[#86efac] rounded-full absolute -top-6 left-1/2 transform -translate-x-1/2 flex items-center justify-center shadow-md">
                    <span class="text-[#14532d] font-bold text-xl">3</span>
                  </div>
                  <h3 class="text-2xl font-bold text-[#14532d] mb-3 mt-4">Alimentos</h3>
                  <p class="text-gray-600 mb-6 line-clamp-2">Superfoods, multivitamínicos y nutrición ayurvédica de uso
                    diario.</p>
                  <button
                    class="text-[#14532d] font-bold border-b-2 border-[#d4af37] pb-1 hover:text-[#d4af37] transition inline-flex items-center gap-2 group-hover:gap-3">
                    Ver Categoría <span class="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 6) SECCIÓN: Productos Destacados -->
        <section class="py-24 px-6 bg-white">
          <div class="max-w-6xl mx-auto">
            <div class="flex flex-col md:flex-row justify-between items-end mb-12">
              <div>
                <h2 class="text-3xl md:text-5xl font-extrabold text-[#14532d] mb-4">Productos Destacados</h2>
                <p class="text-lg text-gray-600">Lo mejor de la India directamente para usted.</p>
              </div>
              <button
                class="hidden md:block mt-4 md:mt-0 text-[#14532d] font-bold border-b-2 border-[#14532d] pb-1 hover:text-[#d4af37] hover:border-[#d4af37] transition">
                Ver tienda completa
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              <!-- Producto 1 -->
              <div class="group">
                <div
                  class="relative bg-linear-to-br from-yellow-100 to-yellow-300 rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <!-- Placeholder elegante para producto -->
                  <div class="text-8xl  group-hover:scale-110 transition duration-500 text-green-800 drop-shadow-2xl">
                    <img src="https://asafoetida.com.mx/assets/asafoetidaNomalFront%20copy-BytyFGk1.webp"
                      alt="Asafoetida" class="w-40 object-cover">
                  </div>

                  <div
                    class="absolute inset-0 bg-black/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <img src="../assets/curry.webp" alt="" class="w-full h-full object-cover absolute inset-0 ">

                    <a href="https://asafoetida.com.mx/producto/asafoetida-hing-100g/"
                      class="bg-[#534914] text-white px-6 py-3 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      Comprar ahora
                    </a>
                  </div>
                </div>
                <div class="flex justify-between items-start">
                  <div>
                    <span
                      class="text-xs text-green-700 font-bold uppercase tracking-wider mb-1 block">Alimentación</span>
                    <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#14532d] transition">Asafoetida
                    </h3>
                    <p class="text-gray-500 text-sm">Resina aromática digestiva.</p>
                  </div>
                </div>
              </div>

              <!-- Producto 2 -->
              <div class="group">
                <div
                  class="relative bg-linear-to-br from-emerald-300 to-emerald-600 rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <div class="text-8xl group-hover:scale-110 transition duration-500 text-green-600 drop-shadow-2xl">
                    <img src="../assets/toothpastetp.webp" alt="Asafoetida" class="w-72 object-cover">
                  </div>
                  <!-- Badge best seller -->
                  <div
                    class="absolute top-4 left-4 bg-[#d4af37] text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    Más Vendido
                  </div>
                  <div
                    class="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href="https://asafoetida.com.mx/producto/chyawanprash-800g-amrut-bhog/"
                      class="bg-[#14532d] text-white px-6 py-3 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      Comprar ahora
                    </a>
                  </div>
                </div>
                <div class="flex justify-between items-start">
                  <div>
                    <span class="text-xs text-green-700 font-bold uppercase tracking-wider mb-1 block">Cuidado
                      Bucal</span>
                    <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#14532d] transition">Pasta Dental
                      Neem
                    </h3>
                    <p class="text-gray-500 text-sm">Fórmula ayurvédica sin flúor.</p>
                  </div>
                </div>
              </div>

              <!-- Producto 3 -->
              <div class="group lg:block hidden sm:block">
                <div
                  class="relative bg-linear-to-br from-amber-300 to-amber-600 rounded-3xl overflow-hidden aspect-square flex items-center justify-center mb-6 shadow-sm border border-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                  <div class="text-8xl group-hover:scale-110 transition duration-500 text-amber-900 drop-shadow-2xl">
                    <img src="../assets/chyaBase.webp" alt="Asafoetida" class="w-56 object-cover">
                  </div>
                  <div
                    class="absolute inset-0 bg-black/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                    <a href="https://asafoetida.com.mx/producto/chyawanprash-800g-amrut-bhog/"
                      class="bg-[#532b14] text-white px-6 py-3 rounded-xl font-bold transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                      Comprar ahora
                    </a>
                  </div>
                </div>
                <div class="flex justify-between items-start">
                  <div>
                    <span
                      class="text-xs text-green-700 font-bold uppercase tracking-wider mb-1 block">Multivitamínico</span>
                    <h3 class="text-xl font-bold text-gray-900 mb-1 group-hover:text-[#14532d] transition">Chyawanprash
                    </h3>
                    <p class="text-gray-500 text-sm">Mermelada herbal rejuvenecedora.</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-16 block">
              <img src="../assets/wallColor.webp" alt="Variedad Prasadam"
                class="w-full h-auto rounded-3xl shadow-xl hover:shadow-2xl transition-shadow duration-500">
            </div>

            <div class="mt-8 text-center md:hidden">
              <button
                class="w-full text-center text-[#14532d] font-bold border-2 border-[#14532d] rounded-2xl py-3 hover:bg-[#14532d] hover:text-white transition">
                Ver tienda completa
              </button>
            </div>
          </div>
        </section>

        <!-- 7) SECCIÓN: Testimonios -->
        <section class="py-24 px-6 bg-[#f0fdf4]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-5xl font-extrabold text-[#14532d]">Comentarios</h2>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Testimonio 1 -->
              <div class="bg-white p-10 rounded-3xl shadow-xl relative border border-green-50">
                <span
                  class="absolute top-6 right-6 material-symbols-outlined text-6xl text-[#86efac] opacity-30">format_quote</span>
                <div class="flex text-yellow-400 mb-6">
                  <span v-for="i in 5" :key="i" class="material-symbols-outlined text-yellow-400">star</span>
                </div>
                <p class="text-lg text-gray-700 mb-8 italic relative z-10 leading-relaxed">
                  "La Pasta Neem de Prasadam ha cambiado por completo mi salud bucal. Sufría de encías sensibles y
                  después
                  de usarla por un par de semanas, el problema desapareció. Además el aliento fresco perdura muchísimo."
                </p>
                <div class="flex items-center gap-4">
                  <div
                    class="w-14 h-14 bg-green-200 rounded-full flex items-center justify-center text-green-800 font-bold text-xl uppercase shadow-inner">
                    FC
                  </div>
                  <div>
                    <h4 class="font-bold text-[#14532d] text-lg">Fabiola Contreras</h4>
                    <p class="text-sm text-gray-500">Compradora Verificada - Pasta Neem</p>
                  </div>
                </div>
              </div>

              <!-- Testimonio 2 -->
              <div class="bg-white p-10 rounded-3xl shadow-xl relative border border-green-50">
                <span
                  class="absolute top-6 right-6 material-symbols-outlined text-6xl text-[#86efac] opacity-30">format_quote</span>
                <div class="flex text-yellow-400 mb-6">
                  <span v-for="i in 5" :key="i" class="material-symbols-outlined text-yellow-400">star</span>
                </div>
                <p class="text-lg text-gray-700 mb-8 italic relative z-10 leading-relaxed">
                  "Añadir Asafoetida a mis platillos no solo mejoró el sabor de la comida estilo hindú que preparo en
                  casa,
                  sino que mi digestión está increíble. La calidad de Prasadam se nota inmediata."
                </p>
                <div class="flex items-center gap-4">
                  <div
                    class="w-14 h-14 bg-amber-200 rounded-full flex items-center justify-center text-amber-900 font-bold text-xl uppercase shadow-inner">
                    JA
                  </div>
                  <div>
                    <h4 class="font-bold text-[#14532d] text-lg">Jorge Ahumada</h4>
                    <p class="text-sm text-gray-500">Comprador Verificado - Asafoetida</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>



        <!-- 9) SECCIÓN: Newsletter -->
        <section class="py-20 px-6 hidden">
          <div
            class="max-w-5xl mx-auto bg-[#14532d] rounded-3xl p-10 md:p-16 shadow-2xl relative overflow-hidden flex flex-col items-center text-center">
            <!-- Patrón sutil -->
            <div
              class="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGZpbGw9IiNmZmZiZmYiLz48L3N2Zz4=')]">
            </div>

            <h2 class="text-3xl md:text-5xl font-extrabold text-white mb-6 relative z-10">Únase a nuestra Tribu Natural
            </h2>
            <p class="text-green-100 text-lg mb-10 max-w-2xl relative z-10">
              Reciba en su correo consejos de estilo de vida Ayurveda, recetas, descuentos exclusivos y noticias sobre
              nuevos productos.
            </p>

            <form @submit.prevent class="relative z-10 w-full max-w-md flex flex-col sm:flex-row gap-3">
              <input type="email" placeholder="Su correo electrónico"
                class="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-4 focus:ring-[#86efac] shadow-inner"
                required>
              <button type="submit"
                class="px-8 py-4 bg-[#47d7a0] text-[#14532d] font-bold rounded-xl shadow-lg hover:bg-emerald-500 transition duration-300 whitespace-nowrap">
                Suscribirme
              </button>
            </form>
            <p class="text-xs text-green-200/50 mt-4 relative z-10">Respetamos su privacidad. No enviamos spam.</p>
          </div>
        </section>

        <!-- 10) FRASE FINAL DESTACADA -->
        <section class="py-24 px-6 bg-white flex justify-center items-center">
          <div class="max-w-4xl text-center">
            <span class="material-symbols-outlined text-6xl text-[#d4af37] mx-auto mb-6 opacity-50">format_quote</span>
            <blockquote class="text-2xl md:text-4xl font-light text-[#14532d] leading-tight mb-8">
              "El yoga es la práctica de calmar las fluctuaciones de la mente. El Ayurveda es la ciencia de la vida."
            </blockquote>
            <cite class="text-[#47d7a0] font-bold tracking-widest uppercase text-sm md:text-base">— Patañjali &
              Tradición
              Védica</cite>
          </div>
        </section>

      </div>



    </template>
  </MainLayout>
</template>

<style scoped></style>
