<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import SlideComponent from '@/components/SlideComponent.vue';
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

      <video ref="introVideo" src="../assets/IntroLogoShort.mp4" class="w-dvw h-screen object-cover bg-black" autoplay
        muted playsinline v-if="!finalizedVideo"></video>
      <div v-if="finalizedVideo"
        class="absolute inset-0 pointer-events-none bg-black/90 animate-fade animate-reverse w-full h-full z-10">

      </div>

      <swiper v-if="finalizedVideo" class="h-[85vh] md:h-dvh " :modules="modules" :navigation="true"
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

          <div class="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">
            <!-- Pill badge -->
            <span
              class="inline-block py-1 px-4 rounded-full bg-white/15 text-[#fefce8] text-xs md:text-sm mb-5 font-semibold tracking-[0.2em] uppercase border border-white/20">
              🌿 Medicina Ayurvédica Milenaria
            </span>

            <h1
              class="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight drop-shadow-lg text-[#fefce8] leading-tight">
              Suplementos Ayurvédicos <br class="hidden md:block">
              <span class="font-poppins"
                :class="{ 'text-[#fff1c4] text-shadow-md': useMainWallpaper().getIndex === 0, 'text-[#18393e] text-shadow-md text-shadow-blue-200': useMainWallpaper().getIndex === 1, 'text-[#182b41] text-shadow-md text-shadow-blue-200': useMainWallpaper().getIndex === 2 }">PRASADAM</span>
            </h1>

            <p
              class="text-lg md:text-2xl mb-8 font-light text-green-50 max-w-3xl mx-auto drop-shadow-md border-l-4 border-[#d4af37] pl-4 md:border-none md:pl-0">
              La auténtica esencia milenaria traída directamente desde la India para su bienestar, equilibrio y salud
              natural.
            </p>

            <!-- Descuento directo banner -->
            <div
              class="inline-flex items-center gap-3 bg-black/30 border border-[#d4af37]/50 rounded-2xl px-5 py-3 mb-8 shadow-lg">
              <span class="text-2xl">🏷️</span>
              <div class="text-left">
                <p class="text-[#d4af37] font-extrabold text-xs uppercase tracking-wider">Descuento exclusivo</p>
                <p class="text-white text-sm font-medium">Comprando directamente con nosotros obtienes <span
                    class="text-[#d4af37] font-bold">precio mayorista sin mínimo</span></p>
              </div>
              <router-link to="/contacto"
                class="ml-2 bg-[#d4af37] hover:bg-yellow-400 text-gray-900 text-xs font-bold px-4 py-2 rounded-full transition-all whitespace-nowrap shadow">
                Contáctenos
              </router-link>
            </div>

            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <router-link to="/products"
                class="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-gray-900 rounded-2xl font-bold shadow-xl hover:bg-yellow-400 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">spa</span>
                Ver Suplementos
              </router-link>
              <router-link to="/about"
                class="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-[#86efac] text-[#86efac] rounded-2xl font-bold hover:bg-[#86efac]/10 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <span class="material-symbols-outlined text-lg">auto_stories</span>
                ¿Qué es el Ayurveda?
              </router-link>
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

        <!-- 2) SECCIÓN: Quiénes Somos + Qué significa PRASADAM -->
        <section class="py-20 px-6 bg-[#fefce8] relative overflow-hidden">
          <div class="bg-black/50 absolute inset-0 w-full z-20"></div>
          <img src="../assets/WallIndu.webp" alt="" class="absolute inset-0 z-10  w-full h-full ">
          <!-- Mandala decorativo fondo -->
          <div class="absolute top-0 left-1/2 -translate-x-1/2 opacity-5 pointer-events-none">
            <span class="material-symbols-outlined text-[400px] text-[#d4af37]">brightness_5</span>
          </div>

          <div class="max-w-6xl mx-auto relative z-30">

            <!-- ¿Qué significa PRASADAM? -->
            <div class="text-center mb-16">
              <span class="inline-block text-xs font-bold uppercase tracking-[0.25em] text-white mb-3">🕉 La palabra
                sagrada</span>
              <h2 class="text-3xl md:text-5xl font-extrabold mb-5 text-white font-poppins">
                ¿Qué significa PRASADAM?
              </h2>
              <p
                class="text-lg md:text-xl text-white max-w-3xl mx-auto leading-relaxed italic bg-slate-500/20 p-5 rounded-2xl border border-orange-500/50">
                En sánscrito, <strong class="text-orange-200 not-italic">prasādam</strong> (प्रसाद) significa
                <em class="text-orange-200">«gracia divina»</em> o <em class="text-orange-200">«ofrenda bendita»</em>.
                En
                la tradición hindú es
                la comida o remedio
                que, tras ser ofrendado a la divinidad, regresa al devoto cargado de su bendición.
                Cada producto que llevamos a México es eso: una ofrenda de la India a su bienestar.
              </p>
            </div>

            <!-- Foto + cita -->
            <div class="flex flex-col lg:flex-row gap-12 items-center mb-16">
              <div class="lg:w-1/2">
                <div class="relative">
                  <img src="../assets/pic1.webp" alt="Prasadam Ambiente"
                    class="w-full h-auto rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                  <!-- Badge dorado -->
                  <div class="absolute -bottom-4 -right-4 bg-[#b55800] text-white rounded-2xl px-5 py-3 shadow-xl">
                    <p class="font-black text-2xl leading-none">5,000</p>
                    <p class="text-xs font-semibold uppercase tracking-wide">Años de sabiduría</p>
                  </div>
                </div>
              </div>
              <div class="lg:w-1/2 space-y-6">
                <h3 class="text-2xl md:text-3xl font-extrabold text-[#ffefb0]">Somos Prasadam</h3>
                <p class="text-lg text-white leading-relaxed italic border-l-4 border-[#d4af37] pl-6">
                  "Nuestra misión es llevar la verdadera medicina Ayurvédica a México: sin atajos, sin sustitutos,
                  con la misma reverencia con que se ha practicado durante milenios en la India."
                </p>
                <p class="text-white leading-relaxed">
                  Somos una marca mexicana que desarrolla, maquila, importa y representa suplementos alimenticios
                  ayurvédicos 100% naturales, manteniendo la esencia, procesos y calidad originarios de la India.
                  Cada fórmula nace de los textos del <em>Charaka Samhita</em> y el <em>Ashtanga Hridayam</em>,
                  los pilares milenarios del Ayurveda.
                </p>
                <!-- Doshas decorativos -->
                <div class="flex gap-4 flex-wrap">
                  <span
                    class="flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-800 rounded-full px-4 py-1.5 text-sm font-semibold">
                    🔥 Pitta
                  </span>
                  <span
                    class="flex items-center gap-2 bg-green-50 border border-green-200 text-green-800 rounded-full px-4 py-1.5 text-sm font-semibold">
                    🌿 Kapha
                  </span>
                  <span
                    class="flex items-center gap-2 bg-sky-50 border border-sky-200 text-sky-800 rounded-full px-4 py-1.5 text-sm font-semibold">
                    💨 Vata
                  </span>
                </div>
              </div>
            </div>

            <!-- 4 pilares -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div
                class="bg-white p-7 rounded-2xl shadow-lg border border-amber-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#d4af37]/50 group text-center">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-[#14532d] to-[#3d8b55] rounded-2xl flex items-center justify-center text-white mb-5 mx-auto group-hover:from-[#d4af37] group-hover:to-[#f5c518] transition-all duration-300">
                  <span class="material-symbols-outlined text-3xl">language</span>
                </div>
                <h3 class="text-lg font-bold text-[#14532d] mb-2">Importación Directa</h3>
                <p class="text-gray-500 text-sm">Origen certificado en India. Sin intermediarios ni adulteraciones.</p>
              </div>

              <div
                class="bg-white p-7 rounded-2xl shadow-lg border border-amber-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#d4af37]/50 group text-center">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-[#14532d] to-[#3d8b55] rounded-2xl flex items-center justify-center text-white mb-5 mx-auto group-hover:from-[#d4af37] group-hover:to-[#f5c518] transition-all duration-300">
                  <span class="material-symbols-outlined text-3xl">verified</span>
                </div>
                <h3 class="text-lg font-bold text-[#14532d] mb-2">Certificados</h3>
                <p class="text-gray-500 text-sm">Sellos Ayush, FSSAI y certificaciones veganas de la India.</p>
              </div>

              <div
                class="bg-white p-7 rounded-2xl shadow-lg border border-amber-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#d4af37]/50 group text-center">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-[#14532d] to-[#3d8b55] rounded-2xl flex items-center justify-center text-white mb-5 mx-auto group-hover:from-[#d4af37] group-hover:to-[#f5c518] transition-all duration-300">
                  <span class="material-symbols-outlined text-3xl">history_edu</span>
                </div>
                <h3 class="text-lg font-bold text-[#14532d] mb-2">Procesos Rasayana</h3>
                <p class="text-gray-500 text-sm">Fórmulas milenarias del Charaka Samhita conservadas al pie de la letra.
                </p>
              </div>

              <div
                class="bg-white p-7 rounded-2xl shadow-lg border border-amber-100 transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#d4af37]/50 group text-center">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-[#14532d] to-[#3d8b55] rounded-2xl flex items-center justify-center text-white mb-5 mx-auto group-hover:from-[#d4af37] group-hover:to-[#f5c518] transition-all duration-300">
                  <span class="material-symbols-outlined text-3xl">spa</span>
                </div>
                <h3 class="text-lg font-bold text-[#14532d] mb-2">Tridóshico</h3>
                <p class="text-gray-500 text-sm">Formulaciones que equilibran Vata, Pitta y Kapha para bienestar
                  integral.</p>
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
                    <span class="font-semibold text-lg">Suplemento alimenticio natural</span>
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
                    <img src="../assets/Ayurv2.webp" alt="Ingredientes naturales Ayurveda"
                      class="w-full h-full object-cover opacity-90 transition-transform duration-700 hover:scale-110">
                  </div>
                  <!-- Badge flotante -->
                  <div class="absolute bottom-10 right-10 bg-white p-4 rounded-2xl flex items-center gap-3  shadow-lg">
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
                  <div class="bg-blue-900/40  p-6 rounded-2xl border border-blue-400/20">
                    <h4 class="text-xl font-bold mb-2 text-[#d4af37]">Enfoque Integral</h4>
                    <p class="text-sm text-blue-100">Cuerpo, mente y espíritu como un todo indivisible.</p>
                  </div>
                  <div class="bg-blue-900/40  p-6 rounded-2xl border border-blue-400/20">
                    <h4 class="text-xl font-bold mb-2 text-[#d4af37]">Prevención</h4>
                    <p class="text-sm text-blue-100">Actúa antes de la enfermedad, promoviendo el bienestar.</p>
                  </div>
                  <div class="bg-blue-900/40  p-6 rounded-2xl border border-blue-400/20">
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
                  <h3 class="text-2xl font-bold text-[#14532d] mb-3 mt-4">Suplementos</h3>
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
