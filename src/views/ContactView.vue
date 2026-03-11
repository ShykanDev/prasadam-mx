<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref, onMounted, watch } from 'vue';
import { userProductStore } from '@/stores/product';

const productStore = userProductStore();

import ContactWall from '@/components/ContactWall.vue';
import { URL } from 'url';




const form = ref({
  nombre: '',
  correo: '',
  telefono: '',
  producto: '',
  motivo: '',
  mensaje: ''
});

onMounted(() => {
  if (productStore.currentProduct) {
    form.value.producto = productStore.currentProduct;
    // Si viene de una slide de mayoreo, ponemos el motivo por defecto
    if (productStore.currentAmount > 0) {
      form.value.motivo = 'Mayoreo';
    }
  }
});

const submitForm = () => {
  const payload = {
    ...form.value,
    selectedAmount: productStore.currentAmount
  };
  console.log('Formulario enviado:', payload);
  alert('¡Gracias por contactarnos! Te responderemos pronto.');
};

// Sincronizar cambios bidireccionalmente entre el formulario y Pinia
watch(() => productStore.currentProduct, (newVal: string) => {
  if (newVal && form.value.producto !== newVal) {
    form.value.producto = newVal;
  }
}, { immediate: true });

watch(() => form.value.producto, (newVal: string) => {
  if (newVal && productStore.currentProduct !== newVal) {
    productStore.setCurrentProduct(newVal);
  }
});


const handleChange = (e: Event) => {
  if (!e.target) return;
  const target = e.target as HTMLInputElement;
  if (Number(target.value) < 5) {
    alert('La cantidad minima es 5, si desea comprar solo uno visite nuestra tienda en linea en el siguiente enlace: https://pastaneem.com/index.html');
    target.value = '5';
  }
  productStore.setCurrentAmount(parseInt(target.value) || 5)
}
</script>

<template>
  <MainLayout>
    <template #main>
      <section
        class="min-h-screen bg-[#FDFBF7] overflow-hidden relative font-nunito flex justify-center items-center py-12 lg:py-10">
        <ContactWall class="absolute inset-0 z-10 opacity-30"></ContactWall>
        <div class="absolute inset-0 z-10 bg-orange-900/5"></div>

        <div class="absolute top-10 left-10 opacity-10 pointer-events-none animate-pulse">
          <span class="material-symbols-outlined text-[150px] text-orange-800">unfold_less_double</span>
        </div>
        <div class="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none rotate-12">
          <span class="material-symbols-outlined text-[400px] text-amber-900">temple_hindu</span>
        </div>
        <div class="absolute bottom-0 left-0 w-96 h-96 opacity-10 pointer-events-none -translate-x-1/2 translate-y-1/2">
          <span class="material-symbols-outlined text-[500px] text-orange-700">deceased</span>
        </div>

        <div class="max-w-7xl mx-auto px-6 relative z-20 pt-4">
          <img
            class="rounded-tr-3xl h-48 lg:h-72 absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  rounded-bl-3xl border-l-4 border-b-4 border-[#FDFBF7] object-cover"
            v-if="productStore.getImagen()" :src="productStore.getImagen()" alt="" />

          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            <div
              class="space-y-8 animate-fade-right bg-white/80  p-8 rounded-[2rem] border-4 border-orange-800 shadow-xl relative">
              <video
                class="rounded-tr-[2rem] h-48 lg:h-72 absolute top-0 right-0 rounded-bl-3xl border-l-4 border-b-4 border-[#FDFBF7] object-cover"
                src="../assets/PrasadamAnimV2.mp4" autoplay loop muted></video>



              <div
                class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 border border-orange-200 text-orange-900">
                <span class="material-symbols-outlined text-sm">self_improvement</span>
                <span class="text-xs font-bold uppercase tracking-[0.2em]">Contacto</span>
              </div>

              <div class="relative">
                <h1 class="text-5xl lg:text-7xl font-viga text-[#3D2B1F] leading-tight">
                  Hable con <br>
                  <span class="text-orange-800 italic font-viga font-bold">Nosotros</span>
                </h1>
              </div>

              <p class="text-lg text-slate-700 leading-relaxed font-kalam max-w-xl">

                En Prasadam, cada consulta representa una oportunidad para guiarle hacia el equilibrio. Ya sea que usted

                busque información detallada o desee integrar nuestros productos en su negocio, estamos aquí para

                escucharle.


              </p>

              <section
                class="bg-[#fcf9f2] py-4 px-5 border-2 border-[#7c5133] rounded-2xl relative overflow-hidden shadow-md max-w-2xl mx-auto">

                <div class="absolute inset-0 opacity-[0.03] rotate-45 scale-150"
                  style="background-image: url('data:image/svg+xml,%3Csvg width=&apos;20&apos; height=&apos;20&apos; viewBox=&apos;0 0 20 20&apos; xmlns=&apos;http://www.w3.org/2000/svg&apos;%3E%3Cpath d=&apos;M0 0h20L10 10zm10 10L20 20H0zM20 0v20L10 10zm-10 10L0 0v20z&apos; fill=&apos;%237c5133&apos; fill-opacity=&apos;1&apos; fill-rule=&apos;evenodd&apos;%3E%3C/path%3E%3C/svg%3E');">
                </div>

                <div class="relative z-10 text-center">

                  <h2
                    class="text-sm font-semibold text-[#5d2e0a] mb-4 tracking-[.15em] flex justify-center items-center gap-3 uppercase">
                    <span class="material-symbols-outlined text-base text-[#b8860b]">spa</span>
                    Programa de Mayoreo
                    <span class="material-symbols-outlined text-base text-[#b8860b]">spa</span>
                  </h2>

                  <div class="grid grid-cols-3 gap-3 border-t border-b border-[#7c5133]/20 py-4">

                    <div class="bg-white/70 py-3 px-1 rounded-xl border border-[#d2b48c]/40">
                      <p class="text-[10px] uppercase tracking-tight text-[#8b4513]/80 font-medium">+5 Productos</p>
                      <p class="text-2xl font-serif text-[#a0522d] font-bold">10%</p>
                      <p class="text-[9px] text-[#8b4513]/60 italic">de descuento</p>
                    </div>

                    <div
                      class="bg-white py-3 px-1 rounded-xl border-2 border-[#b8860b] shadow-lg shadow-[#b8860b]/10 scale-105">
                      <p class="text-[10px] uppercase tracking-tight text-[#b8860b] font-bold">+10 Productos</p>
                      <p class="text-3xl font-serif text-[#8b4513] font-bold">20%</p>
                      <p class="text-[9px] text-[#8b4513]/60 italic">de descuento</p>
                    </div>

                    <div class="bg-white/70 py-3 px-1 rounded-xl border border-[#d2b48c]/40">
                      <p class="text-[10px] uppercase tracking-tight text-[#8b4513]/80 font-medium">+50 Productos</p>
                      <p class="text-2xl font-serif text-[#a0522d] font-bold">30%</p>
                      <p class="text-[9px] text-[#8b4513]/60 italic">de descuento</p>
                    </div>

                  </div>

                  <div class="mt-4 flex items-center justify-center gap-2 text-[#5d2e0a]">
                    <span class="material-symbols-outlined text-lg text-[#b8860b]">local_shipping</span>
                    <p class="text-[10px] tracking-wide font-medium">
                      ENVÍO SIN COSTO en órdenes mayores a $2,000 MXN
                    </p>
                  </div>
                </div>
              </section>
            </div>

            <div
              class="bg-white/80 border-4 border-double hover:bg-white/90 transition-all duration-300 border-orange-900  p-8 lg:p-12 rounded-[3.5rem] shadow-2xl   animate-fade-left relative">
              <span
                class="material-symbols-outlined absolute top-4 right-6 text-orange-200 text-4xl">local_florist</span>

              <img alt="">
              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="space-y-4">
                  <div class="relative group">
                    <div
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-orange-800/40 group-focus-within:text-orange-800 transition-colors">
                      <span class="material-symbols-outlined">person</span>
                    </div>
                    <input v-model="form.nombre" type="text" placeholder="Su Nombre" required
                      class="w-full pl-12 pr-4 py-4 bg-orange-50/30 border-2 border-orange-100 rounded-2xl focus:border-orange-800 focus:bg-white outline-none transition-all font-medium">
                  </div>

                  <div class="relative group">
                    <div
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-orange-800/40 group-focus-within:text-orange-800 transition-colors">
                      <span class="material-symbols-outlined">mail_lock</span>
                    </div>
                    <input v-model="form.correo" type="email" placeholder="Correo Electrónico" required
                      class="w-full pl-12 pr-4 py-4 bg-orange-50/30 border-2 border-orange-100 rounded-2xl focus:border-orange-800 focus:bg-white outline-none transition-all font-medium">
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="relative group">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-orange-800/40 z-10">
                        <span class="material-symbols-outlined">medication</span>
                      </div>
                      <select v-model="form.producto" required
                        class="w-full pl-12 pr-4 py-4 bg-orange-50/30 border-2 border-orange-100 rounded-2xl focus:border-orange-800 focus:bg-white outline-none appearance-none font-medium">
                        <option value="" disabled selected>Remedio de Interés</option>
                        <option v-for="prod in productStore.productsList" :key="prod.name" :value="prod.name">
                          {{ prod.name.includes("Para") ? "Ayurveda: " + prod.name : prod.name }}

                        </option>
                      </select>
                    </div>

                    <div class="relative group">
                      <div class="absolute left-4 top-1/2 -translate-y-1/2 text-orange-800/40 z-10">
                        <span class="material-symbols-outlined">psychology_alt</span>
                      </div>
                      <select v-model="form.motivo" required
                        class="w-full pl-12 pr-4 py-4 bg-orange-50/30 border-2 border-orange-100 rounded-2xl focus:border-orange-800 focus:bg-white outline-none appearance-none font-medium">
                        <option value="" disabled selected>Tipo de Consulta</option>
                        <option value="Información">Consulta General</option>
                        <option value="Mayoreo">Negocio / Mayoreo</option>
                      </select>
                    </div>
                  </div>

                  <!-- Quantity Selector (Ayurvedic/Indú Theme) -->
                  <div
                    class="quantity-selector-container flex flex-col items-center gap-4 p-8 bg-orange-50/20 rounded-[2.5rem] border-2 border-dashed border-orange-200 mt-6 shadow-inner relative overflow-hidden group">
                    <div
                      class="absolute -right-4 -top-4 opacity-[0.03] rotate-12 group-hover:rotate-45 transition-transform duration-1000">
                      <span class="material-symbols-outlined text-8xl">cycle</span>
                    </div>

                    <span class="text-[10px] font-black uppercase tracking-[0.4em] text-orange-900/40">Cantidad de
                      Pedido</span>

                    <div class="flex items-center gap-8 relative z-10">
                      <!-- Minus Button -->
                      <button type="button" @click="productStore.decreaseAmount"
                        class="w-16 h-16 flex items-center justify-center bg-[#5C4033] text-white rounded-2xl hover:bg-[#3D2B1F] transition-all shadow-[0_8px_20px_rgba(0,0,0,0.2)] active:scale-95 border-b-4 border-black/20">
                        <span class="material-symbols-outlined text-3xl font-bold">remove</span>
                      </button>

                      <!-- Amount Input -->
                      <div class="relative w-32 group/input">
                        <input :value="productStore.currentAmount" type="number" min="0" @change="handleChange"
                          class="w-full text-center text-5xl font-viga font-black bg-transparent border-b-4 border-orange-800 focus:border-orange-500 outline-none p-2 text-[#3D2B1F] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        <div class="absolute -bottom-6 left-0 w-full text-center">
                          <span class="text-[9px] uppercase font-black text-orange-800/30 tracking-[0.2em]">Piezas
                            Totales</span>
                        </div>
                      </div>

                      <!-- Plus Button -->
                      <button type="button" @click="productStore.increaseAmount"
                        class="w-16 h-16 flex items-center justify-center bg-[#5C4033] text-white rounded-2xl hover:bg-[#3D2B1F] transition-all shadow-[0_8px_20px_rgba(0,0,0,0.2)] active:scale-95 border-b-4 border-black/20">
                        <span class="material-symbols-outlined text-3xl font-bold">add</span>
                      </button>
                    </div>
                  </div>
                </div>

                <button type="submit"
                  class="w-full py-5 bg-gradient-to-r from-orange-900 to-[#3D2B1F] text-white rounded-2xl font-bold text-lg hover:shadow-orange-900/40 hover:scale-[1.02] active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3">
                  <span class="material-symbols-outlined animate-bounce-side">ecg_heart</span>
                  Enviar Consulta
                </button>

                <p class="text-center text-[10px] text-amber-900/60 mt-4 leading-tight">
                  Al enviar, te unes a nuestra comunidad de bienestar. <br> Tus datos están seguros bajo principios
                  éticos.
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
