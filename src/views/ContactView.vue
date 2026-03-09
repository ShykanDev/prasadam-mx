<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref } from 'vue';

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
//Mini images
import miniAlopecia from '@/assets/miniAlopecia.webp'
import miniAsma from '@/assets/miniAsma.webp'
import miniEstrinimiento from '@/assets/miniEstrenimiento.webp'
import miniHangover from '@/assets/miniHangover.webp'
import miniInstago from '@/assets/miniInstago.webp'
import miniLivad from '@/assets/miniLivad.webp'
import miniMenstruacion from '@/assets/miniMenstruacion.png'
import miniNervios from '@/assets/miniNervios.png'
import miniProstata from '@/assets/miniProstata.png'
import miniObesidad from '@/assets/miniObesidad.png'
import miniRinones from '@/assets/miniRinones.png'
import miniArtritis from '@/assets/miniArtritis.png'
import miniColesterol from '@/assets/miniColesterol.png'
import miniGastritis from '@/assets/miniGastritis.png'
import miniGlufac from '@/assets/miniGlufac.png'
import miniHemorroides from '@/assets/miniHemorroides.png'
import IntroProducts from '@/components/IntroProducts.vue';
import ContactWall from '@/components/ContactWall.vue';

const products = ref([
  {
    name: "Asafétida",
    category: "Alimentos y Multivitamínicos",
    description: ["Hing", "Digestivo", "Equilibrio Vata", "Antibacterial"],
    benefits: "Purifica tu digestión y equilibra tu energía vital con la especia más potente del Ayurveda.",
    details: ["Apoya la reducción de gases y pesadez", "Auxiliar en la digestión natural (Agni)", "Sustituto botánico para ajo y cebolla", "Contribuye al equilibrio Vata y Kapha", "Inspirado en la herbolaria antiinflamatoria"],
    link: "https://asafoetida.com.mx",
    image: 'https://asafoetida.com.mx/assets/asafoetidaNomalFront%20copy-BytyFGk1.webp',
    miniImage: 'https://asafoetida.com.mx/assets/asafoetidaNomalFront%20copy-BytyFGk1.webp',
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Chyawanprash",
    category: "Alimentos y Multivitamínicos",
    description: ["Rasayana", "Inmunidad", "Vitalidad", "Antioxidante"],
    benefits: "Tradición milenaria para la fortaleza, juventud y vitalidad integral.",
    details: ["Apoya los procesos de regeneración celular", "Contribuye a fortalecer las defensas naturales", "Rica fuente natural de Vitamina C (Amla)", "Promueve el equilibrio de los tres doshas", "Auxiliar en el mantenimiento de la energía"],
    link: "http://chyawanprash.com.mx/index.html",
    image: 'https://chyawanprash.com.mx/images/chyawanprash-solo.png',
    miniImage: 'https://chyawanprash.com.mx/images/chyawanprash-solo.png',
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Jabón Neemo",
    category: "Salud y Belleza",
    description: ["Piel Sana", "Antibacterial", "Herbal", "Protección"],
    benefits: "Limpieza purificante basada en la herencia botánica del Neem.",
    details: ["Acción cosmética purificante profunda", "Ideal para el cuidado de pieles delicadas", "Sin químicos agresivos ni parabenos", "Auxiliar en la revitalización de la piel", "Protección herbal de uso diario"],
    link: null,
    image: jabonNeem,
    miniImage: jabonNeem,
    status: "Próximamente"
  },
  {
    name: "Pasta Dental de Neem",
    category: "Salud y Belleza",
    description: ["Natural", "Sin Flúor", "Antibacteriana", "Cuidado Oral"],
    benefits: "Cuidado oral integral inspirado en la fitoterapia ayurvédica.",
    details: ["Propiedades botánicas protectoras del Neem", "Auxiliar en el mantenimiento de encías sanas", "Limpieza natural sin agentes abrasivos", "Ayuda a mantener un aliento fresco", "Fórmula libre de flúor"],
    link: "https://pastaneem.com/index.html",
    image: pastaNeemBox,
    miniImage: pastaNeemBox,
    status: "Disponible"
  },
  {
    name: "Pasta Dental Diamante Kiante",
    category: "Salud y Belleza",
    description: ["Premium", "Encías", "Blanqueamiento", "Ayurveda"],
    benefits: "Fórmula maestra ayurvédica para el cuidado integral de la sonrisa.",
    details: ["Apoya el fortalecimiento natural del esmalte", "Cuidado botánico para encías delicadas", "Contribuye a la limpieza profunda", "Promueve el equilibrio del pH oral", "Esencia botánica refrescante"],
    link: "https://pastaneem.com/index.html",
    image: pastaKiante,
    miniImage: pastaKiante,
    status: "Disponible"
  },
  {
    name: "Pasta Dental de Neem y Clavo",
    category: "Salud y Belleza",
    description: ["Alivio", "Hierbas", "Protección", "Antiséptica"],
    benefits: "Sinergia botánica de Clavo y Neem para una protección oral natural.",
    details: ["Auxiliar en el alivio de la sensibilidad", "Propiedades antisépticas del Clavo", "Contribuye a la higiene bucal preventiva", "Ayuda a desinflamar zonas delicadas", "Sabor botánico tradicional"],
    link: "https://pastaneem.com/index.html",
    image: pastaClavo,
    miniImage: pastaClavo,
    status: "Disponible"
  },
  {
    name: "Pasta Dental de Charcoal",
    category: "Salud y Belleza",
    description: ["Detox", "Carbón Activo", "Blanqueado", "Fresco"],
    benefits: "Limpieza profunda y detox bucal natural con carbón activado.",
    details: ["Ayuda a remover impurezas de forma natural", "Blanqueamiento cosmético progresivo", "Auxiliar contra el mal aliento", "Limpia profundamente entre dientes", "Contribuye al equilibrio de la flora oral"],
    link: "https://pastaneem.com/index.html",
    image: pastaCharcoal,
    miniImage: pastaCharcoal,
    status: "Disponible"
  },
  {
    name: "Para Diabetes",
    category: "Medicamentos Auxiliares",
    description: ["Equilibrio", "Metabolismo", "Tradición", "Soporte"],
    benefits: "Apoyo natural para el bienestar metabólico basado en sabiduría ayurvédica.",
    details: ["Auxiliar en el mantenimiento de niveles sanos", "Contribuye a reducir la apetencia por lo dulce", "Apoya la función metabólica natural", "Inspirado en la tradición del Gudmar y Karela", "Promueve el equilibrio interno"],
    link: "https://medicinaparadiabetes.com/",
    image: glufac,
    miniImage: miniGlufac,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Hígado",
    category: "Medicamentos Auxiliares",
    description: ["Revitalizar", "Hepático", "Pitta-Balance", "Tradición"],
    benefits: "Fórmula ayurvédica diseñada para el apoyo del bienestar hepático.",
    details: ["Contribuye a los procesos de depuración natural", "Apoya la función digestiva saludable", "Auxiliar en el metabolismo de grasas", "Inspirado en la regeneración botánica", "Ayuda a equilibrar el elemento Pitta"],
    link: "https://medicinaparahigado.com/",
    image: livad,
    miniImage: miniLivad,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Próstata",
    category: "Medicamentos Auxiliares",
    description: ["Bienestar", "Glandular", "Equilibrio", "Cuidado"],
    benefits: "Cuidado masculino integral que promueve el equilibrio glandular natural.",
    details: ["Apoyo botánico a la función masculina", "Contribuye al bienestar glandular", "Auxiliar en el mantenimiento de vías sanas", "Promueve el equilibrio hormonal natural", "Energía vital inspirada en el Ayurveda"],
    link: null,
    image: prostata,
    miniImage: miniProstata,
    status: "Próximamente",
    isBigImg: true
  },
  {
    name: "Para Articulaciones",
    category: "Medicamentos Auxiliares",
    description: ["Bienestar", "Movilidad", "Tradición", "Soporte"],
    benefits: "Apoyo natural inspirado en la tradición ayurvédica para la movilidad.",
    details: ["Auxiliar en el alivio de zonas inflamadas", "Contribuye al confort de las articulaciones", "Apoya la flexibilidad y el movimiento", "Nutre el bienestar de los tejidos (Asthi)", "Promueve la eliminación de impurezas"],
    link: "https://medicinaparaartritis.com/",
    image: artritis,
    miniImage: miniArtritis,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Asma",
    category: "Medicamentos",
    description: ["Respiración", "Aire", "Tradición", "Prana"],
    benefits: "Apoyo botánico para el bienestar de las vías respiratorias y la energía vital.",
    details: ["Auxiliar en la sensación de libertad respiratoria", "Apoya la calma de las vías aéreas", "Contribuye a fortalecer el sistema respiratorio", "Inspirado en la tradición del Prana", "Promueve la vitalidad mediante el aire"],
    link: null,
    image: asma,
    miniImage: miniAsma,
    status: "Próximamente",
    isBigImg: true
  },
  {
    name: "Para Estreñimiento",
    category: "Medicamentos",
    description: ["Regularidad", "Bienestar", "Tradición", "Fibra"],
    benefits: "Promueve la armonía y regularidad del sistema digestivo de forma natural.",
    details: ["Ayuda a mantener la regularidad saludable", "Auxiliar en el tránsito intestinal", "Contribuye a la depuración digestiva natural", "Apoya la reducción de la sensación de pesadez", "Inspirado en el equilibrio del sistema"],
    link: null,
    image: estrenimiento,
    miniImage: miniEstrinimiento,
    status: "Próximamente",
    isBigImg: true
  },
  {
    name: "Para Menstruación",
    category: "Medicamentos",
    description: ["Femenino", "Ciclos", "Bienestar", "Tradición"],
    benefits: "Soporte botánico para el equilibrio y bienestar femenino durante sus ciclos.",
    details: ["Auxiliar en la armonía de los ciclos naturales", "Contribuye al bienestar en días de cambio", "Apoya el equilibrio emocional y físico", "Nutre el sistema femenino tradicional", "Promueve la vitalidad integral"],
    link: null,
    image: menstruacion,
    miniImage: miniMenstruacion,
    status: "Próximamente",
    isBigImg: true
  },
  {
    name: "Para Ansiedad",
    category: "Medicamentos",
    description: ["Paz", "Calma", "Tradición", "Descanso"],
    benefits: "Apoyo natural para la paz mental y un descanso verdaderamente reparador.",
    details: ["Contribuye a reducir la sensación de estrés", "Auxiliar en la calma de pensamientos inquietos", "Promueve un ciclo de sueño saludable", "Apoya el bienestar del sistema nervioso", "Tradición ayurvédica para la serenidad"],
    link: "https://medicinaparaansiedad.com/",
    image: nervios,
    miniImage: miniNervios,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Alopecia",
    category: "Medicamentos Auxiliares",
    description: ["Fuerza", "Raíz", "Botánico", "Cuidado"],
    benefits: "Nutrición botánica profunda para el bienestar y fortaleza del cabello.",
    details: ["Apoya el bienestar del cuero cabelludo", "Contribuye a la fortaleza de la fibra capilar", "Auxiliar en el mantenimiento del brillo natural", "Nutre con hierbas tradicionales clave", "Promueve el equilibrio térmico capilar"],
    link: null,
    image: alopecia,
    miniImage: miniAlopecia,
    status: "Próximamente",
    isBigImg: true
  },
  {
    name: "Para Ríñones",
    category: "Medicamentos Auxiliares",
    description: ["Filtro", "Urinario", "Bienestar", "Tradición"],
    benefits: "Apoyo botánico diseñado para el bienestar del sistema urinario.",
    details: ["Auxiliar en el mantenimiento urinario sano", "Contribuye a los procesos de filtración natural", "Apoya la limpieza de las vías urinarias", "Promueve el equilibrio hídrico corporal", "Basado en la fitoterapia renal tradicional"],
    link: null,
    image: riñones,
    miniImage: miniRinones,
    status: "Próximamente",
    isBigImg: true
  },
  {
    name: "Para Hemorroides",
    category: "Medicamentos",
    description: ["Bienestar", "Alivio", "Tradición", "Soporte"],
    benefits: "Fórmula ayurvédica diseñada para la prevención y tratamiento de las hemorroides.",
    details: ["Auxiliar en el alivio de zonas sensibles", "Contribuye a la desinflamación natural", "Apoya la circulación vascular local", "Promueve un bienestar duradero", "Inspirado en la cicatrización botánica"],
    link: 'https://medicinaparahemorroides.com/',
    image: hemorroides,
    miniImage: miniHemorroides,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Gastritis",
    category: "Medicamentos Auxiliares",
    description: ["Acidez", "Calma", "Tradición", "Pitta"],
    benefits: "Calma botánica para el confort gástrico y un sistema digestivo equilibrado.",
    details: ["Auxiliar en el alivio de la sensación de ardor", "Apoya el bienestar de la mucosa gástrica", "Contribuye a equilibrar el fuego digestivo", "Calma el exceso de energía Pitta", "Inspirado en la frescura botánica"],
    link: 'https://medicinaparagastritis.com/',
    image: gastritis,
    miniImage: miniGastritis,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Cruda",
    category: "Medicamentos",
    description: ["Recuperar", "Detox", "Energía", "Fiesta"],
    benefits: "Apoyo natural para recuperar el bienestar después de periodos de exceso.",
    details: ["Contribuye a la eliminación de residuos (Ama)", "Auxiliar en el alivio del malestar general", "Apoya el equilibrio y la rehidratación", "Promueve la claridad mental tradicional", "Auxiliar en el bienestar hepático"],
    link: 'https://medicinaparacruda.com/',
    image: hangover,
    miniImage: miniHangover,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Colesterol",
    category: "Medicamentos",
    description: ["Corazón", "Cuidado", "Botánico", "Pureza"],
    benefits: "Soporte botánico para el bienestar cardiovascular y la pureza sanguínea.",
    details: ["Contribuye al mantenimiento de niveles sanos", "Auxiliar en el equilibrio lipídico natural", "Apoya la salud del sistema circulatorio", "Promueve la depuración natural en sangre", "Tradición ayurvédica para el corazón"],
    link: 'https://medicinaparacolesterol.com/',
    image: colesterol,
    miniImage: miniColesterol,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Bajar Peso",
    category: "Medicamentos",
    description: ["Metabolismo", "Equilibrio", "Tradición", "Soporte"],
    benefits: "Apoyo natural para el bienestar metabólico y el equilibrio corporal.",
    details: ["Auxiliar en la activación metabólica natural", "Contribuye al control de la apetencia", "Apoya los procesos de eliminación natural", "Inspirado en la depuración linfática", "Promueve una figura equilibrada"],
    link: 'https://medicinaparabajarpeso.com/Inicio.html',
    image: obesidad,
    miniImage: miniObesidad,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Artritis",
    category: "Medicamentos",
    description: ["Movilidad", "Confort", "Soporte", "Tradición"],
    benefits: "Alivio natural y soporte para el bienestar de tus articulaciones.",
    details: ["Auxiliar en la reducción de inflamación", "Contribuye al confort de movimiento", "Apoya la flexibilidad natural", "Nutre los tejidos de soporte corporal", "Promueve el equilibrio articular"],
    link: 'https://medicinaparaartritis.com/',
    image: artritis,
    miniImage: miniArtritis,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Ansiedad",
    category: "Medicamentos",
    description: ["Paz", "Serenidad", "Mente", "Tradición"],
    benefits: "Serenidad y equilibrio mental con el apoyo de la herbolaria sagrada.",
    details: ["Contribuye al bienestar emocional", "Auxiliar en la calma de la mente inquieta", "Promueve un ciclo de descanso reparador", "Nutre el equilibrio del sistema nervioso", "Promueve la paz interior tradicional"],
    link: 'https://medicinaparaansiedad.com/',
    image: nervios,
    miniImage: miniNervios,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Para Más Placer Intimo",
    category: "Medicamentos",
    description: ["Vitalidad", "Soporte", "Tradición", "Vigor"],
    benefits: "Energía vital y equilibrio para potenciar tu bienestar integral.",
    details: ["Apoya el mantenimiento de la energía (Ojas)", "Contribuye al vigor natural del organismo", "Auxiliar en el equilibrio reproductivo", "Promueve la reducción del cansancio", "Tradición ayurvédica para la plenitud"],
    link: 'https://www.masplacerintimo.com/',
    image: instago,
    miniImage: miniInstago,
    status: "Disponible",
    isBigImg: true
  },
  {
    name: "Otro",

  }
]);


const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  producto: '',
  motivo: '',
  mensaje: ''
});

const submitForm = () => {
  console.log('Formulario enviado:', form.value);
  // Aquí se podría integrar con un servicio de email o API
  alert('¡Gracias por contactarnos! Te responderemos pronto.');
};
</script>

<template>
  <MainLayout>
    <template #main>
      <section
        class="min-h-screen bg-[#FDFBF7]  overflow-hidden relative font-nunito flex justify-center items-center pt-2.5">
        <ContactWall class="absolute inset-0 z-10 "></ContactWall>
        <div class="absolute inset-0 z-10  bg-black/5"></div>
        <!-- 🕉️ Decorative Background Elements -->
        <div class="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
          <span class="material-symbols-outlined text-[400px] text-amber-900">temple_hindu</span>
        </div>
        <div class="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2">
          <span class="material-symbols-outlined text-[500px] text-amber-700">spa</span>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-10 ">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            <!-- 📜 Left Side: Info & Aesthetic -->
            <div class="space-y-8 animate-fade-right bg-amber-50/95 p-5 rounded-3xl border-2 border-amber-900 relative">
              <div
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-800/10 border border-orange-800/20 text-orange-800">
                <span class="material-symbols-outlined text-sm">contact_support</span>
                <span class="text-xs font-bold uppercase tracking-widest">Contáctenos</span>
              </div>

              <h1 class="text-5xl lg:text-7xl font-viga text-[#3D2B1F] leading-tight">
                Hable con <br>
                <span class="text-orange-800 italic font-viga font-bold">nosotros</span>
              </h1>

              <video class="rounded-tr-3xl  h-72 absolute top-0 right-0 rounded-bl-2xl"
                src="../assets/PrasadamAnimV2.mp4" autoplay loop muted></video>

              <p class="text-lg text-slate-700 leading-relaxed font-kalam max-w-xl">
                En Prasadam, cada consulta representa una oportunidad para guiarle hacia el equilibrio. Ya sea que usted
                busque información detallada o desee integrar nuestros productos en su negocio, estamos aquí para
                escucharle.
              </p>
              <section class="bg-[#f5efe6] py-1 px-2 border-t rounded-3xl border-amber-800">
                <div class="max-w-4xl mx-auto text-center">

                  <h2 class="text-xl md:text-2xl font-bold text-amber-900 mb-4 tracking-wide">
                    Promoción de Mayoreo
                  </h2>

                  <div class="grid grid-cols-3 gap-3 text-sm md:text-base">

                    <div class="bg-white/60 rounded-lg p-3 border border-amber-200">
                      <p class="font-semibold text-amber-900">5+ productos</p>
                      <p class="text-orange-600 font-bold">10% OFF</p>
                    </div>

                    <div class="bg-white/60 rounded-lg p-3 border border-amber-200">
                      <p class="font-semibold text-amber-900">10+ productos</p>
                      <p class="text-orange-600 font-bold">20% OFF</p>
                    </div>

                    <div class="bg-white/60 rounded-lg p-3 border border-amber-200">
                      <p class="font-semibold text-amber-900">50+ productos</p>
                      <p class="text-orange-600 font-bold">30% OFF</p>
                    </div>

                  </div>

                  <p class="text-xs text-amber-800 mt-3">
                    Envío GRATIS en compras mayores a <span class="font-semibold">$2,000 MXN</span>
                  </p>

                  <a href="#contacto"
                    class="inline-block mt-3 px-4 py-2 text-sm bg-orange-500 hover:bg-orange-600 text-white rounded-md transition">
                    Contáctenos Aquí
                  </a>

                </div>
              </section>

            </div>

            <!-- 🏺 Right Side: The Form -->
            <div
              class="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl border-b-12 border-amber-900/20 animate-fade-left">
              <form @submit.prevent="submitForm" class="space-y-6">
                <!-- Nombre -->
                <div class="relative group">
                  <div
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-700 transition-colors">
                    <span class="material-symbols-outlined">person</span>
                  </div>
                  <input v-model="form.nombre" type="text" placeholder="Nombre" required
                    class="w-full pl-12 pr-4 py-4 bg-amber-50/30 border-2 border-amber-800/50 rounded-2xl outline-hidden focus:border-yellow-900 focus:bg-white transition-all text-[#3D2B1F] font-medium">
                </div>

                <!-- Correo -->
                <div class="relative group">
                  <div
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-700 transition-colors">
                    <span class="material-symbols-outlined">alternate_email</span>
                  </div>
                  <input v-model="form.correo" type="email" placeholder="Correo Electrónico" required
                    class="w-full pl-12 pr-4 py-4 bg-amber-50/30 border-2 border-amber-800/50 rounded-2xl outline-hidden focus:border-yellow-900 focus:bg-white transition-all text-[#3D2B1F] font-medium">
                </div>

                <!-- Telefono -->
                <div class="relative group">
                  <div
                    class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-700 transition-colors">
                    <span class="material-symbols-outlined">call</span>
                  </div>
                  <input v-model="form.telefono" type="tel" placeholder="Número de Teléfono (Opcional)"
                    class="w-full pl-12 pr-4 py-4 bg-amber-50/30 border-2 border-amber-800/50 rounded-2xl outline-hidden focus:border-yellow-900 focus:bg-white transition-all text-[#3D2B1F] font-medium">
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <!-- Producto Select -->
                  <div class="relative group">
                    <div
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-700 transition-colors z-10">
                      <span class="material-symbols-outlined">inventory_2</span>
                    </div>
                    <select v-model="form.producto" required
                      class="w-full pl-12 pr-4 py-4 bg-amber-50/30 border-2 border-amber-800/50 rounded-2xl outline-hidden focus:border-yellow-900 focus:bg-white transition-all text-[#3D2B1F] font-medium appearance-none">
                      <option value="" disabled selected>Selecciona un Producto</option>
                      <option v-for="prod in products" :key="prod.name" :value="prod.name">{{
                        prod.name.includes("Para") ? "Medicina Ayurvédica " + prod.name : prod.name }}
                      </option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <span class="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>

                  <!-- Motivo Select -->
                  <div class="relative group">
                    <div
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-yellow-700 transition-colors z-10">
                      <span class="material-symbols-outlined">help_center</span>
                    </div>
                    <select v-model="form.motivo" required
                      class="w-full pl-12 pr-4 py-4 bg-amber-50/30 border-2 border-amber-800/50 rounded-2xl outline-hidden focus:border-yellow-900 focus:bg-white transition-all text-[#3D2B1F] font-medium appearance-none">
                      <option value="" disabled selected>Tipo de Consulta</option>
                      <option value="Información">Quiero información</option>
                      <option value="Mayoreo">Comprar por mayoreo</option>
                      <option value="Otro">Otro motivo</option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                      <span class="material-symbols-outlined">expand_more</span>
                    </div>
                  </div>
                </div>

                <!-- Botón Enviar -->
                <button type="submit"
                  class="w-full py-5 bg-[#3D2B1F] text-white rounded-2xl font-bold text-lg hover:bg-secondary transform active:scale-95 transition-all shadow-xl shadow-amber-900/10 flex items-center justify-center gap-3">
                  <span class="material-symbols-outlined">send</span>
                  Enviar Mensaje
                </button>

                <p class="text-center text-xs text-slate-400 mt-4 leading-relaxed font-medium">
                  Al enviar este formulario, aceptas que Prasadam Ayurveda trate tus datos con la
                  única finalidad de responder a tu consulta.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<style scoped>
.font-rozha-one {
  font-family: 'Rozha One', serif;
}

.font-kalam {
  font-family: 'Kalam', cursive;
}
</style>
