<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref, onMounted, watch } from 'vue';
import { userProductStore } from '@/stores/product';

const productStore = userProductStore();

import ContactWall from '@/components/ContactWall.vue';




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
                class="bg-amber-50/50 py-4 px-6 border-2 border-dashed rounded-3xl border-amber-800 relative overflow-hidden">
                <span
                  class="material-symbols-outlined absolute -right-4 -bottom-4 text-8xl text-amber-900/10 rotate-45">filter_vintage</span>

                <div class="max-w-4xl mx-auto text-center relative z-10">
                  <h2
                    class="text-xl font-bold text-amber-900 mb-4 tracking-widest flex justify-center items-center gap-2">
                    <span class="material-symbols-outlined">rebase_edit</span>
                    OFERTAS DE MAYOREO
                    <span class="material-symbols-outlined">rebase_edit</span>
                  </h2>

                  <div class="grid grid-cols-3 gap-3">
                    <div class="bg-white rounded-xl p-3 shadow-sm border-b-4 border-orange-700">
                      <p class="text-[10px] uppercase font-bold text-slate-500">5+ Productos</p>
                      <p class="text-lg text-orange-800 font-black">10%</p>
                    </div>
                    <div
                      class="bg-white rounded-xl p-3 shadow-sm border-b-4 border-orange-700 scale-110 shadow-orange-900/20">
                      <p class="text-[10px] uppercase font-bold text-slate-500">10+ Productos</p>
                      <p class="text-lg text-orange-800 font-black">20%</p>
                    </div>
                    <div class="bg-white rounded-xl p-3 shadow-sm border-b-4 border-orange-700">
                      <p class="text-[10px] uppercase font-bold text-slate-500">50+ Productos</p>
                      <p class="text-lg text-orange-800 font-black">30%</p>
                    </div>
                  </div>

                  <p class="text-[11px] text-amber-900 mt-4 flex items-center justify-center gap-1 font-bold">
                    <span class="material-symbols-outlined text-sm">local_shipping</span>
                    ENVÍO GRATIS > $2,000 MXN
                  </p>
                </div>
              </section>
            </div>

            <div class="bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl  border-orange-800 animate-fade-left relative">
              <span
                class="material-symbols-outlined absolute top-4 right-6 text-orange-200 text-4xl">local_florist</span>

              <form @submit.prevent="submitForm" class="space-y-5">
                <div class="space-y-4">
                  <div class="relative group">
                    <div
                      class="absolute left-4 top-1/2 -translate-y-1/2 text-orange-800/40 group-focus-within:text-orange-800 transition-colors">
                      <span class="material-symbols-outlined">potted_plant</span>
                    </div>
                    <input v-model="form.nombre" type="text" placeholder="Tu Nombre Completo" required
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
                      <button type="button"
                        @click="productStore.setCurrentAmount(Math.max(0, productStore.currentAmount - 1))"
                        class="w-16 h-16 flex items-center justify-center bg-[#5C4033] text-white rounded-2xl hover:bg-[#3D2B1F] transition-all shadow-[0_8px_20px_rgba(0,0,0,0.2)] active:scale-95 border-b-4 border-black/20">
                        <span class="material-symbols-outlined text-3xl font-bold">remove</span>
                      </button>

                      <!-- Amount Input -->
                      <div class="relative w-32 group/input">
                        <input type="number" :value="productStore.currentAmount"
                          @input="(e) => productStore.setCurrentAmount(parseInt((e.target as HTMLInputElement).value) || 0)"
                          class="w-full text-center text-5xl font-viga font-black bg-transparent border-b-4 border-orange-800 focus:border-orange-500 outline-none p-2 text-[#3D2B1F] transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                        <div class="absolute -bottom-6 left-0 w-full text-center">
                          <span class="text-[9px] uppercase font-black text-orange-800/30 tracking-[0.2em]">Piezas
                            Totales</span>
                        </div>
                      </div>

                      <!-- Plus Button -->
                      <button type="button" @click="productStore.setCurrentAmount(productStore.currentAmount + 1)"
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
