<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SlideComponent from '@/components/SlideComponent.vue';
import FactsComponent from '@/components/FactsComponent.vue';
import type { SlideData, ImageSize } from '@/types/slide';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade, EffectCube, EffectCards, EffectFlip } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { onMounted, onUnmounted, ref, useTemplateRef } from 'vue';
import { useMainWallpaper } from '@/stores/mainWallpaper';

const modules = [Navigation, Pagination, Autoplay, EffectCoverflow, EffectFade, EffectCube, EffectCards, EffectFlip];

const currentIndex = ref(0);
const onSlideChange = (swiper: SwiperType) => {
  currentIndex.value = swiper.activeIndex;
  useMainWallpaper().setIndex(swiper.activeIndex);
};

// ══ Slides data ══
const slides: SlideData[] = [
  // ── 1. Intro: Sabiduría Ayurvédica ──
  {
    productName: 'Intro',
    wallpaper: new URL('../assets/PrasadamWallProducts.webp', import.meta.url).href,
    overlay: 'rgba(0,0,0,0.1)',
    title: 'Empresa Mexicana con <br> <span class="text-amber-200">+30 Años de Experiencia</span>',
    titleClass: 'text-4xl sm:text-5xl lg:text-6xl font-bold font-plus-jakarta-sans leading-tight drop-shadow-2xl animate-fade animate-delay-500',
    subtitle: '',
    accentColor: '#D7B347',
    infoTitle: 'Ofreciendo productos ayurvédicos de primera calidad, trayendo la esencia milenaria de la India a su hogar.',
    infoText: undefined,
    showPromo: false,
    features: [],
    images: [],
    buttons: [
      { href: '/about', label: 'Conocer nuestra historia' },
    ],
    isIntro: true,
  },
  // ── 2. Asafoetida ──
  {
    productName: 'Asafoétida',
    wallpaper: new URL('../assets/asafWall.jpg', import.meta.url).href,
    overlay: 'rgba(0,0,0,0.20)',
    title: 'Asafoetida',
    titleClass: 'text-5xl sm:text-6xl lg:text-8xl font-bold uppercase font-rozha-one leading-tight drop-shadow-xl',
    subtitle: 'Condimento ayurvédico para sazonar sus platillos al estilo original de la India.',
    accentColor: '#D7B347',
    infoTitle: undefined,
    infoText: undefined,
    showPromo: true,
    promoGradientFrom: '#D7B347',
    promoGradientVia: '#F5C518',
    features: [
      { icon: 'nature', title: 'Producto Natural y sin Conservadores', desc: 'Completamente natural, sin químicos ni conservadores. Extraído de la resina de hinojo perenne silvestre.' },
      { icon: 'verified', title: 'Condimento Certificado 100% Vegetariano', desc: 'Certificado vegano con sellos de la India. Sustituto ideal del ajo y la cebolla sin grasas animales.' },
      { icon: 'schedule', title: 'Fabricado y Envasado en la India', desc: 'Lleva la esencia y cultura de la India desde su materia prima. Condimento auténtico directamente importado.' },
    ],
    images: [
      {
        src: new URL('../assets/asaPremiumFrontS.webp', import.meta.url).href,
        alt: 'Asafoetida Premium',
        imageSize: 'small' as ImageSize,
        button: {
          href: 'https://www.mercadolibre.com.mx/asafoetida-hing-extra-fuerte-premium-especi-condimento-india/up/MLMU881832977?pdp_filters=item_id%3AMLM1426037672&matt_tool=17030900#origin=share&sid=share&wid=MLM1426037672',
          label: 'Comprar Premium',
          style: 'background: linear-gradient(to right,#8B6914,#A67C2E,#8B6914); color:#fff; border-color:#D4AF3799; box-shadow:0 4px 20px rgba(139,105,20,0.5);',
        },
      },
      {
        src: new URL('../assets/asafoetidaNomalFront.webp', import.meta.url).href,
        alt: 'Asafoetida Normal',
        imageSize: 'small' as ImageSize,
        button: {
          href: 'https://www.mercadolibre.com.mx/asafoetida-hing-prasadam-especia-condimento-cocina-india/up/MLMU548274877?pdp_filters=item_id%3AMLM781697867&matt_tool=17030900#origin=share&sid=share&wid=MLM781697867',
          label: 'Comprar Ahora',
          style: 'background: linear-gradient(to right,#F5C518,#FFD700,#F5C518); color:#1a1a1a; border-color:#FDE68A; box-shadow:0 4px 20px rgba(245,197,24,0.5);',
        },
      },
    ],
    buttons: [
      { href: 'https://www.mercadolibre.com.mx/asafoetida-hing-prasadam-especia-condimento-cocina-india/up/MLMU548274877?pdp_filters=item_id%3AMLM781697867&matt_tool=17030900#origin=share&sid=share&wid=MLM781697867', label: 'Descubra más' },
    ],
  },

  // ── 3. Pasta Dental Neem ──
  {
    productName: 'Pasta Dental de Neem',
    wallpaper: new URL('../assets/WallNeem.jpg', import.meta.url).href,
    overlay: 'rgba(0,0,0,0.35)',
    title: 'Pasta Dental <span style="color:#ebfffa;font-style:italic;">Neem</span>',
    titleClass: 'text-5xl sm:text-6xl lg:text-8xl font-bold font-plus-jakarta-sans leading-tight drop-shadow-xl',
    subtitle: 'Protección dental con frescura natural',
    accentColor: '#54816C',
    infoTitle: 'Beneficios de Pasta Neem',
    infoText: undefined,
    showPromo: false,
    features: [
      { title: 'Remueve la Placa Dental', desc: 'Propiedades antibacteriales que evitan que las bacterias se adhieran y se conviertan en sarro.' },
      { title: 'Ayuda contra el Mal Aliento', desc: 'Frescura a menta con propiedades bactericidas que eliminan bacterias.' },
      { title: 'Evita las Caries', desc: 'El extracto de Neem elimina ácidos y crea capas protectoras para el esmalte.' },
      { title: 'Ayuda contra la Gingivitis', desc: 'Remueve el sarro manteniendo encías saludables con uso constante.' },
      { title: 'Ayuda a prevenir la Piorrea', desc: 'Previene periodontitis por sus efectos antibacterial, antiséptico y antiinflamatorio.' },
      { title: 'Dientes más Blancos', desc: 'Remueve manchas amarillas, dejando los dientes limpios con profunda higiene.' },
    ],
    images: [
      {
        src: new URL('../assets/toothpastetp.webp', import.meta.url).href,
        alt: 'Pasta Dental Neem',
        imageSize: 'extra' as ImageSize,
        extraClass: 'rotate-90',
      },
    ],
    buttons: [
      { href: '#', label: 'Próximamente' },
    ],
  },

  // ── 4. Chyawanprash ──
  {
    productName: 'Chyawanprash',
    wallpaper: new URL('../assets/chyawanprashWall.jpg', import.meta.url).href,
    overlay: 'rgba(0,0,0,0.35)',
    title: 'Chyawanprash',
    titleClass: 'text-4xl sm:text-6xl lg:text-8xl font-bold font-plus-jakarta-sans leading-tight drop-shadow-xl',
    subtitle: 'Multivitamínico rejuvenecedor natural',
    accentColor: '#4c9dff',
    infoTitle: '¿Qué es Chyawanprash?',
    infoText: 'Mermelada negra de la medicina Ayurveda. Sus más de 50 ingredientes mejoran su calidad de vida por sus propiedades rejuvenecedoras.',
    showPromo: true,
    promoGradientFrom: '#2563eb',
    promoGradientVia: '#4c9dff',
    features: [
      { title: '100% Natural', desc: 'Sin conservadores ni químicos, procesos directos de la India.' },
      { title: 'Cultura Hindú', desc: 'Procesos milenarios Rasayana en su elaboración.' },
      { title: 'Potente Multivitamínico', desc: 'Láminas de oro y plata reales en la formulación de más de 51 ingredientes.' },
      { title: 'Eficacia y Sabor Únicos', desc: 'Sabor exótico, fuerte y agridulce lleno de beneficios y excentricidad.' },
    ],
    images: [
      {
        src: new URL('../assets/chyaFruit.webp', import.meta.url).href,
        alt: 'Chyawanprash',
        imageSize: 'extra' as ImageSize,
      },
    ],
    buttons: [
      { href: 'https://www.mercadolibre.com.mx/chyawanprash--sona-chandi-prasadam-ayurveda-india/up/MLMU547660321?pdp_filters=item_id%3AMLM780643651&matt_tool=17030900#origin=share&sid=share&wid=MLM780643651', label: 'Comprar Chyawanprash' },
    ],
  },

  // ── 5. Jabón de Neem ──
  {
    productName: 'Jabón Neemo',
    wallpaper: new URL('../assets/NeemWall1.webp', import.meta.url).href,
    overlay: 'rgba(0,0,0,0.20)',
    title: 'Jabón de Neem',
    titleClass: 'text-5xl sm:text-6xl lg:text-8xl font-bold uppercase font-rozha-one leading-tight drop-shadow-xl',
    subtitle: 'Jabón natural para el cuidado de la piel.',
    accentColor: '#47d7a0',
    infoTitle: undefined,
    infoText: undefined,
    showPromo: true,
    promoGradientFrom: '#54816C',
    promoGradientVia: '#659A81',
    features: [
      { icon: 'nature', title: 'Propiedades Antibacteriales y Purificantes', desc: 'Limpia profundamente la piel, eliminando impurezas y protegiendo contra bacterias causantes del acné.' },
      { icon: 'verified', title: 'Piel Suave e Hidratada', desc: 'Mantiene la piel fresca y saludable. Ideal para todo tipo de cutis, ayudando en su balance natural.' },
      { icon: 'schedule', title: '100% Natural y de la India', desc: 'Elaborado con aceites y extractos puros. Libre de grasas animales y químicos abrasivos.' },
    ],
    images: [
      {
        src: new URL('../assets/NeemSoap.webp', import.meta.url).href,
        alt: 'Neem Soap',
        imageSize: 'extra' as ImageSize,
      },
      {
        src: new URL('../assets/FrontNeem.webp', import.meta.url).href,
        alt: 'Neem Soap Front',
        imageSize: 'extra' as ImageSize,
        button: {
          href: 'https://www.mercadolibre.com.mx/jabon-neem-prasadam-india-ayurveda-natural/up/MLMU549975120?pdp_filters=item_id%3AMLM781290580&matt_tool=17030900#origin=share&sid=share&wid=MLM781290580',
          label: 'Comprar Ahora',
          style: 'background: linear-gradient(to right,#47d7a0,#6EE7B7,#47d7a0); color:#1a1a1a; border-color:#34D39980; box-shadow:0 4px 20px rgba(71,215,160,0.5);',
        },
      },
    ],
    buttons: [
      { href: '#', label: 'Descubra más' },
    ],
  },
];

// infoSide per slide: 'left' = info on left, images on right; 'right' = vice versa
const infoSides: ('left' | 'right')[] = ['left', 'left', 'left', 'right', 'left'];


const finalizedVideo = ref(false);
const videoRef = useTemplateRef<HTMLVideoElement>('introVideo');

const onVideoEnded = () => {
  finalizedVideo.value = true;
};

const onVideoError = () => {
  console.error("Video failed to play, skipping to main content.");
  finalizedVideo.value = true;
};

onMounted(() => {
  if (finalizedVideo.value) return;
  const video = videoRef.value;
  if (video) {
    video.addEventListener('ended', onVideoEnded);
    video.addEventListener('error', onVideoError);

    // Attempt to play explicitly in case autoplay is restricted
    video.play().catch(err => {
      console.warn("Autoplay blocked or failed:", err);
      // If blocked, we might want to show a play button or just skip
      // For now, adding muted should solve most autoplay issues

    });
  }
});

onUnmounted(() => {
  const video = videoRef.value;
  if (video) {
    video.removeEventListener('ended', onVideoEnded);
    video.removeEventListener('error', onVideoError);
  }
});
</script>

<template>
  <MainLayout>
    <template #main>

      <video ref="introVideo" src="../assets/PrasadamWallIntroLogo.mp4"
        class="min-w-d  animate-fade animate-delay-[2.7s] animate-reverse" autoplay muted playsinline
        v-if="!finalizedVideo"></video>

      <div v-if="finalizedVideo"
        class="absolute inset-0 pointer-events-none bg-yellow-50 animate-fade animate-reverse animate-duration-[.5s] w-full h-full z-30">

      </div>

      <swiper v-if="finalizedVideo" class="h-[85vh] md:h-dvh  animate-fade-up" :modules="modules" :navigation="true"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 7000, disableOnInteraction: false, pauseOnMouseEnter: false }" @slideChange="onSlideChange"
        :coverflow-effect="{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }" effect="coverflow">
        <swiper-slide v-for="(slide, i) in slides" :key="i">
          <SlideComponent :slide="slide" :infoSide="infoSides[i]" />
        </swiper-slide>

      </swiper>








      <div class="min-h-screen bg-[#FDFBF7] text-[#3D2B1F] selection:bg-[#E8C07D] selection:text-[#3D2B1F]">
        <!-- 1) HERO SECTION (Educational & Direct) -->
        <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-20 px-6">
          <!-- Background with Ayurvedic Atmosphere -->
          <div class="absolute inset-0 z-0">
            <img src="../assets/PrasadamWall.webp" alt="Ayurvedic Background" class="w-full h-full object-cover">
            <div class="absolute inset-0 bg-gradient-to-b from-[#3D2B1F]/60 via-[#3D2B1F]/40 to-[#FDFBF7]"></div>
          </div>

          <!-- Subtle Ornament Overlay -->
          <div class="absolute inset-0 z-1 pointer-events-none opacity-10">
            <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
              <pattern id="ornament" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M10 0 L20 10 L10 20 L0 10 Z" fill="none" stroke="#D4AF37" stroke-width="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#ornament)" />
            </svg>
          </div>

          <div class="relative z-10 max-w-5xl mx-auto text-center text-white">
            <div
              class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/40  mb-8 animate-fade-down">
              <span class="material-symbols-outlined text-[#D4AF37] text-sm">auto_awesome</span>
              <span class="text-xs font-bold uppercase tracking-widest text-[#F5E6BE]">Sabiduría Ancestral de la
                India</span>
            </div>

            <h1 class="text-5xl md:text-7xl font-extrabold mb-6 leading-tight font-serif drop-shadow-xl">
              Equilibrio Natural <br>
              <span class="text-[#D4AF37]">Inspirado en Ayurveda</span>
            </h1>

            <p class="text-lg md:text-2xl mb-10 max-w-3xl mx-auto font-light text-[#FDFBF7]/90 leading-relaxed italic">
              Prasadam ofrece suplementos herbales y productos de bienestar natural inspirados en la medicina
              tradicional de la India, un sistema de salud milenario con miles de años de historia.
            </p>

            <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <router-link to="/products"
                class="group relative px-10 py-5 bg-[#D4AF37] text-[#3D2B1F] rounded-full font-bold shadow-2xl hover:bg-[#F5C518] transition-all duration-300 overflow-hidden">
                <span class="relative z-10 flex items-center gap-2">
                  Ver Productos <span class="material-symbols-outlined">shopping_bag</span>
                </span>
                <div
                  class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform">
                </div>
              </router-link>
              <router-link to="/about"
                class="px-10 py-5 bg-transparent border-2 border-[#FDFBF7] text-[#FDFBF7] rounded-full font-bold hover:bg-[#FDFBF7] hover:text-[#3D2B1F] transition-all duration-300 shadow-xl">
                Sobre Nosotros
              </router-link>
            </div>
          </div>
        </section>

        <!-- 2) ABOUT PRASADAM (Focus on Sourcing & India) -->
        <section class="py-24 px-6 bg-[#FDFBF7] relative overflow-hidden">
          <div class="absolute -right-20 top-0 opacity-5 pointer-events-none">
            <span class="material-symbols-outlined text-[400px] text-[#3D2B1F]">spa</span>
          </div>

          <div class="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="relative">
              <div class="aspect-square rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                <img src="../assets/pic1.webp" alt="Prasadam Wellness" class="w-full h-full object-cover">
              </div>
              <div class="absolute -bottom-8 -right-8 bg-[#D4AF37] text-[#ffffff] p-8 rounded-2xl shadow-xl max-w-xs">
                <span class="material-symbols-outlined text-4xl mb-4">public</span>
                <p class="font-bold text-lg mb-2">Sourcing Directo</p>
                <p class="text-sm opacity-90">Ingredientes tradicionales recolectados y procesados en la India bajo
                  estándares rigurosos.</p>
              </div>
            </div>

            <div class="space-y-8">
              <div
                class="inline-block px-4 py-1 rounded bg-[#E8D9C0] text-[#7A5C33] text-xs font-black uppercase tracking-widest">
                Sobre Nosotros</div>
              <h2 class="text-4xl md:text-5xl font-serif font-bold text-[#3D2B1F]">Comprometidos con la Tradición Herbal
              </h2>
              <p class="text-lg text-[#5C4D3E] leading-relaxed">
                Prasadam se enfoca en traer productos herbales Ayurvédicos a México, utilizando ingredientes naturales
                utilizados tradicionalmente en el bienestar de la India. Nuestra propuesta es una alternativa de
                bienestar natural basada en la pureza y la historia de la medicina herbal.
              </p>

              <ul class="space-y-4">
                <li class="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-[#E8D9C0]">
                  <span class="material-symbols-outlined text-[#D4AF37]">eco</span>
                  <div>
                    <h4 class="font-bold text-[#3D2B1F]">Ingredientes Naturales</h4>
                    <p class="text-sm text-[#5C4D3E]">Libre de químicos y conservadores artificiales.</p>
                  </div>
                </li>
                <li class="flex items-start gap-4 p-4 rounded-xl bg-white shadow-sm border border-[#E8D9C0]">
                  <span class="material-symbols-outlined text-[#D4AF37]">verified</span>
                  <div>
                    <h4 class="font-bold text-[#3D2B1F]">Certificación FSSAI</h4>
                    <p class="text-sm text-[#5C4D3E]">Validación de seguridad alimentaria desde la India.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <!-- 3) EDUCATIONAL SECTION (What is Ayurveda?) -->
        <section class="py-24 px-6 bg-[#3D2B1F] text-[#FDFBF7] relative overflow-hidden">
          <div class="absolute inset-0 opacity-10">
            <img src="../assets/WallIndu.webp" alt="" class="w-full h-full object-cover grayscale">
          </div>

          <div class="relative z-10 max-w-4xl mx-auto text-center">
            <span class="material-symbols-outlined text-6xl text-[#D4AF37] mb-6">local_florist</span>
            <h2 class="text-3xl md:text-5xl font-serif font-bold mb-8">¿Qué es Ayurveda?</h2>
            <div class="h-1 w-24 bg-[#D4AF37] mx-auto mb-10"></div>
            <p class="text-xl md:text-2xl font-light leading-relaxed mb-12">
              Ayurveda es un sistema tradicional de bienestar natural que se originó en la India hace miles de años. Se
              centra en el uso de ingredientes herbales y el equilibrio natural para apoyar la salud diaria de manera
              integral y no invasiva.
            </p>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10 ">
                <h4 class="text-[#D4AF37] font-bold mb-2">Milenario</h4>
                <p class="text-sm opacity-80">Miles de años de observación de la naturaleza.</p>
              </div>
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10 ">
                <h4 class="text-[#D4AF37] font-bold mb-2">Herbal</h4>
                <p class="text-sm opacity-80">Basado enteramente en plantas y extractos naturales.</p>
              </div>
              <div class="p-6 rounded-2xl bg-white/5 border border-white/10 ">
                <h4 class="text-[#D4AF37] font-bold mb-2">Preventivo</h4>
                <p class="text-sm opacity-80">Busca el equilibrio antes de que el cuerpo lo pierda.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 4) PRODUCT CATEGORIES -->
        <section class="py-24 px-6 bg-[#FDFBF7]">
          <div class="max-w-6xl mx-auto">
            <div class="text-center mb-16">
              <h2 class="text-3xl md:text-5xl font-serif font-bold text-[#3D2B1F] mb-4">Nuestras Categorías</h2>
              <p class="text-[#5C4D3E]">Productos inspirados en la herbolaria tradicional de la India.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <!-- Category 1 -->
              <div
                class="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8D9C0] text-center transform hover:-translate-y-2">
                <div
                  class="w-20 h-20 bg-[#F5E6BE] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <span class="material-symbols-outlined text-4xl text-[#3D2B1F]">medication</span>
                </div>
                <h3 class="text-xl font-bold text-[#3D2B1F] mb-4">Suplementos Herbales</h3>
                <p class="text-sm text-[#5C4D3E] leading-relaxed">Extractos puros y formulaciones tradicionales para el
                  bienestar interno.</p>
              </div>

              <!-- Category 2 -->
              <div
                class="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8D9C0] text-center transform hover:-translate-y-2">
                <div
                  class="w-20 h-20 bg-[#F5E6BE] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <span class="material-symbols-outlined text-4xl text-[#3D2B1F]">health_and_safety</span>
                </div>
                <h3 class="text-xl font-bold text-[#3D2B1F] mb-4">Higiene Natural</h3>
                <p class="text-sm text-[#5C4D3E] leading-relaxed">Cuidado bucal y personal con el poder antibacterial
                  del Neem y plantas sagradas.</p>
              </div>

              <!-- Category 3 -->
              <div
                class="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8D9C0] text-center transform hover:-translate-y-2">
                <div
                  class="w-20 h-20 bg-[#F5E6BE] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <span class="material-symbols-outlined text-4xl text-[#3D2B1F]">nature</span>
                </div>
                <h3 class="text-xl font-bold text-[#3D2B1F] mb-4">Ingredientes Puros</h3>
                <p class="text-sm text-[#5C4D3E] leading-relaxed">Hierbas y especias base para integrar Ayurveda en su
                  cocina diaria.</p>
              </div>

              <!-- Category 4 -->
              <div
                class="group bg-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8D9C0] text-center transform hover:-translate-y-2">
                <div
                  class="w-20 h-20 bg-[#F5E6BE] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-[#D4AF37] transition-colors">
                  <span class="material-symbols-outlined text-4xl text-[#3D2B1F]">spa</span>
                </div>
                <h3 class="text-xl font-bold text-[#3D2B1F] mb-4">Bienestar Diario</h3>
                <p class="text-sm text-[#5C4D3E] leading-relaxed">Productos diseñados para mantener el equilibrio
                  natural en su vida moderna.</p>
              </div>
            </div>
          </div>
        </section>

        <!-- 5) QUALITY & SOURCING (Trust Signals) -->
        <section class="py-24 px-6 bg-[#F5E6BE]/30 relative">
          <div class="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16">
            <div class="lg:w-1/2 space-y-8">
              <h2 class="text-3xl md:text-5xl font-serif font-bold text-[#3D2B1F]">Calidad y Pureza</h2>
              <div class="space-y-6">
                <div class="flex gap-6">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white">
                    <span class="material-symbols-outlined">check</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-[#3D2B1F]">Importado de la India</h4>
                    <p class="text-[#5C4D3E]">Respetamos los procesos originales y las fuentes geográficas auténticas de
                      cada hierba.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white">
                    <span class="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-[#3D2B1F]">Certificación FSSAI</h4>
                    <p class="text-[#5C4D3E]">Garantía de calidad internacional en suplementos alimenticios provenientes
                      de la India.</p>
                  </div>
                </div>
                <div class="flex gap-6">
                  <div
                    class="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white">
                    <span class="material-symbols-outlined">eco</span>
                  </div>
                  <div>
                    <h4 class="text-xl font-bold text-[#3D2B1F]">Formulaciones Naturales</h4>
                    <p class="text-[#5C4D3E]">Sin rellenos innecesarios, solo el poder puro de las plantas
                      tradicionales.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lg:w-1/2 grid grid-cols-2 gap-4">
              <img src="../assets/pic2.webp" alt="Herbs" class="rounded-2xl shadow-lg">
              <img src="../assets/pic3.webp" alt="Herbs Process" class="rounded-2xl shadow-lg mt-12">
            </div>
          </div>
        </section>

        <!-- 6) FEATURED PRODUCTS (Visual Grid) -->
        <section class="py-24 px-6 bg-white">
          <div class="max-w-6xl mx-auto">
            <div class="flex justify-between items-end mb-16">
              <div>
                <h2 class="text-3xl md:text-5xl font-serif font-bold text-[#3D2B1F]">Productos Destacados</h2>
                <p class="text-[#5C4D3E]">Lo más esencial para tu rutina de bienestar.</p>
              </div>
              <router-link to="/products"
                class="hidden md:flex items-center gap-2 text-[#D4AF37] font-bold hover:gap-4 transition-all">
                Ver todos <span class="material-symbols-outlined">arrow_forward</span>
              </router-link>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
              <!-- Product Card 1 -->
              <div class="group">
                <div
                  class="relative aspect-square rounded-[2rem] overflow-hidden bg-[#FDFBF7] border border-[#E8D9C0] mb-6 transform group-hover:scale-95 transition-transform duration-500 shadow-sm group-hover:shadow-2xl">
                  <img src="../assets/asafoetidaNomalFront.webp" alt="Asafoetida" class="w-full h-full object-cover">
                  <div
                    class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <router-link to="/products"
                      class="bg-white text-[#3D2B1F] px-6 py-3 rounded-full font-bold shadow-xl">Ver
                      Detalles</router-link>
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-[#3D2B1F] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Asafoetida (Hing)</h3>
                <p class="text-sm text-[#5C4D3E] mb-4">Ingrediente tradicional digestivo utilizado en la cocina de la
                  India.</p>
                <span
                  class="inline-block px-3 py-1 rounded-full bg-[#F5E6BE] text-[#7A5C33] text-xs font-bold">Ayurvedic
                  Ingredient</span>
              </div>

              <!-- Product Card 2 -->
              <div class="group">
                <div
                  class="relative aspect-square rounded-[2rem] overflow-hidden bg-[#FDFBF7] border border-[#E8D9C0] mb-6 transform group-hover:scale-95 transition-transform duration-500 shadow-sm group-hover:shadow-2xl">
                  <img src="../assets/toothpastetp.webp" alt="Neem Toothpaste" class="w-full h-full object-cover">
                  <div
                    class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <router-link to="/products"
                      class="bg-white text-[#3D2B1F] px-6 py-3 rounded-full font-bold shadow-xl">Ver
                      Detalles</router-link>
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-[#3D2B1F] mb-2 group-hover:text-[#D4AF37] transition-colors">Pasta
                  Dental Neem</h3>
                <p class="text-sm text-[#5C4D3E] mb-4">Protección bucal natural con extractos de hierbas tradicionales.
                </p>
                <span class="inline-block px-3 py-1 rounded-full bg-[#F5E6BE] text-[#7A5C33] text-xs font-bold">Natural
                  Oral Care</span>
              </div>

              <!-- Product Card 3 -->
              <div class="group">
                <div
                  class="relative aspect-square rounded-[2rem] overflow-hidden bg-[#FDFBF7] border border-[#E8D9C0] mb-6 transform group-hover:scale-95 transition-transform duration-500 shadow-sm group-hover:shadow-2xl">
                  <img src="../assets/chyaFruit.webp" alt="Chyawanprash" class="w-full h-full object-cover">
                  <div
                    class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <router-link to="/products"
                      class="bg-white text-[#3D2B1F] px-6 py-3 rounded-full font-bold shadow-xl">Ver
                      Detalles</router-link>
                  </div>
                </div>
                <h3 class="text-2xl font-bold text-[#3D2B1F] mb-2 group-hover:text-[#D4AF37] transition-colors">
                  Chyawanprash</h3>
                <p class="text-sm text-[#5C4D3E] mb-4">Mermelada herbal rejuvenecedora con más de 40 ingredientes
                  naturales.</p>
                <span class="inline-block px-3 py-1 rounded-full bg-[#F5E6BE] text-[#7A5C33] text-xs font-bold">Herbal
                  Supplement</span>
              </div>
            </div>
          </div>
        </section>

        <!-- 7) TESTIMONIALS -->
        <section class="py-24 px-6 bg-[#FDFBF7]">
          <div class="max-w-6xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-[#3D2B1F] text-center mb-16">Lo que dicen nuestros
              clientes</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="bg-white p-10 rounded-3xl shadow-xl border border-[#E8D9C0] relative">
                <span
                  class="material-symbols-outlined text-6xl text-[#D4AF37]/20 absolute top-8 right-8">format_quote</span>
                <p class="text-lg text-[#5C4D3E] italic italic mb-8 relative z-10">
                  "Increíble la calidad del producto. He probado otras marcas pero la pureza de la Asafoetida de
                  Prasadam es incomparable. Se siente la diferencia en la digestión casi de inmediato."
                </p>
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold">MR
                  </div>
                  <div>
                    <h5 class="font-bold text-[#3D2B1F]">Melissa Rodriguez</h5>
                    <p class="text-xs text-[#BC9B6A]">Cliente Verificada</p>
                  </div>
                </div>
              </div>
              <div class="bg-white p-10 rounded-3xl shadow-xl border border-[#E8D9C0] relative">
                <span
                  class="material-symbols-outlined text-6xl text-[#D4AF37]/20 absolute top-8 right-8">format_quote</span>
                <p class="text-lg text-[#5C4D3E] italic italic mb-8 relative z-10">
                  "La pasta de Neem es mi favorita. Tenía problemas de encías y desde que la uso mi dentista ha notado
                  una gran mejoría. 100% natural y efectiva."
                </p>
                <div class="flex items-center gap-4">
                  <div
                    class="w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center text-white font-bold">AG
                  </div>
                  <div>
                    <h5 class="font-bold text-[#3D2B1F]">Andrés Gutiérrez</h5>
                    <p class="text-xs text-[#BC9B6A]">Cliente Verificado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- 8) FINAL CTA -->
        <section class="py-20 px-6 bg-[#D4AF37] text-[#3D2B1F] text-center">
          <div class="max-w-3xl mx-auto">
            <span class="material-symbols-outlined text-5xl mb-6">local_florist</span>
            <h2 class="text-3xl md:text-5xl font-serif font-bold mb-8">Comience su camino hacia el bienestar natural
            </h2>
            <p class="text-xl mb-12 opacity-90">Descubra el poder de la herbolaria tradicional de la India con nuestros
              productos certificados y traídos directamente para usted.</p>
            <router-link to="/products"
              class="inline-block px-12 py-5 bg-[#3D2B1F] text-white rounded-full font-bold text-lg hover:bg-black transition-all shadow-2xl">
              Explorar Catálogo Completó
            </router-link>
          </div>
        </section>

        <!-- 9) FACTS SECTION -->
        <section class="py-24 px-6 bg-[#FDFBF7]">
          <div class="max-w-6xl mx-auto text-center mb-12">
            <h2 class="text-3xl md:text-5xl font-serif font-bold text-[#3D2B1F] mb-4">Calidad de primer nivel</h2>
            <img src="../assets/wallColor.webp" alt=""
              class="w-full h-full object-cover rounded-3xl drop-shadow-2xl shadow-amber-400">
          </div>

        </section>
      </div>
    </template>
  </MainLayout>
</template>

<style scoped></style>
