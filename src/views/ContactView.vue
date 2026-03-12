<template>
  <MainLayout>
    <template #main>
      <section class="min-h-screen relative flex items-center justify-center py-20 px-4 overflow-hidden font-jost">
        <!-- Background Layer -->
        <div class="absolute inset-0 z-0">
          <img src="../assets/ContactWall.webp" class="w-dvw h-full object-cover " alt="Ayurvedic Background" />
          <div class="absolute hidden inset-0 bg-linear-to-br from-orange-900/70 via-orange-800/80 to-black/20"></div>
        </div>

        <!-- Content Container -->
        <div class="relative z-10 max-w-6xl w-full ">
          <div
            class="grid grid-cols-1 lg:grid-cols-5 gap-0 rounded-[3rem] overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.15)] bg-white/10  border border-white/30">

            <!-- Information & Promos Section -->
            <div
              class="lg:col-span-2 p-8 lg:p-12 flex flex-col justify-between bg-linear-to-b  from-[#3D2B1F]/55 to-[#5C4033]/70 text-white relative backdrop-blur-2xl">
              <div class="space-y-6">
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-400/20 border border-orange-400/30 text-orange-200 text-[10px] uppercase tracking-widest font-bold">
                  <span class="material-symbols-outlined text-xs">spa</span>
                  Bienestar Ancestral
                </div>


                <!-- Bulk Promotions -->
                <div class="pt-8 space-y-4">
                  <h3 class="text-xs uppercase tracking-[0.3em] font-bold text-orange-300/80">Descuento en Mayoreo
                  </h3>
                  <div v-for="promo in promos" :key="promo.qty"
                    class="flex items-center justify-between p-4  border-[6px] border-transparent rounded-r-lg hover:translate-x-1 transition-transform rounded-4xl"
                    :class="{
                      'bg-amber-700': promo.qty === '+10',
                      'bg-orange-950': promo.qty === '+5',
                      'bg-orange-800': promo.qty === '+50',

                      'border border-white animate-shake': productStore.getCurrentAmount >= 5 && productStore.getCurrentAmount <= 10 && promo.qty === '+5',
                      'border-2 border-white animate-shake': productStore.getCurrentAmount > 10 && productStore.getCurrentAmount <= 50 && promo.qty === '+10',
                      'border-3 border-white animate-shake': productStore.getCurrentAmount > 50 && promo.qty === '+50'

                    }">
                    <div>
                      <span class="text-xs font-medium opacity-70">{{ promo.qty }} productos</span>
                      <h4 class="text-xl font-bold">{{ promo.discount }}</h4>
                    </div>
                    <div class="text-right">
                      <span class="text-xs italic">{{ promo.text }}</span>
                      <span class="material-symbols-outlined text-sm ml-1">check_circle</span>
                    </div>
                  </div>




                </div>
              </div>

              <!-- Shipping Note -->
              <div class="mt-12 flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                <div class="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center shadow-lg">
                  <span class="material-symbols-outlined text-white text-xl">local_shipping</span>
                </div>
                <div>
                  <p class="text-[10px] uppercase font-bold tracking-wider text-orange-200">Envío gratis</p>
                  <p class="text-xs text-white/60">En órdenes mayores a $2,000 MXN</p>
                </div>
              </div>
            </div>

            <!-- Form Section -->
            <div class="lg:col-span-3 p-8 lg:p-14 bg-white/50 relative font-poppins backdrop-blur-md">
              <div class="absolute top-8 right-8 text-orange-800/10">
                <span class="material-symbols-outlined text-9xl">lotus</span>
              </div>

              <div class="relative z-10">
                <h2 class="text-2xl  font-bold text-[#3D2B1F] mb-8 flex items-center gap-3">
                  <span class="w-8 h-[2px] bg-orange-800/30"></span>
                  Contáctenos
                </h2>

                <form @submit.prevent="sendForm" class="space-y-6">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-1">
                      <label
                        class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Nombre</label>
                      <input v-model="form.name" type="text" placeholder="Ej. Jorge" required
                        class="w-full px-5 py-3 bg-[#FDFBF7] rounded-2xl border-b-2 border-orange-800/10 focus:border-orange-800 outline-none transition-all text-[#3D2B1F] placeholder:text-slate-300">
                    </div>
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Teléfono
                        (Opcional)</label>
                      <input v-model="form.phone" type="number" placeholder="55 1234 5678" required
                        class="w-full px-5 py-3 bg-[#FDFBF7] border-b-2 rounded-2xl border-orange-800/10 focus:border-orange-800 outline-none transition-all text-[#3D2B1F] placeholder:text-slate-300">
                    </div>
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Correo
                        Electrónico</label>
                      <input v-model="form.email" type="email" placeholder="email@ejemplo.com" required
                        class="w-full px-5 py-3 bg-[#FDFBF7] border-b-2 rounded-2xl border-orange-800/10 focus:border-orange-800 outline-none transition-all text-[#3D2B1F] placeholder:text-slate-300">
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Producto de
                        Interés</label>
                      <select v-model="form.product" required
                        class="w-full px-5 py-3 rounded-2xl bg-[#FDFBF7] border-b-2 border-orange-800/10 focus:border-orange-800 outline-none transition-all text-[#3D2B1F] appearance-none cursor-pointer">
                        <option value="" disabled>Seleccione un producto</option>
                        <option v-for="prod in productStore.productsList" :key="prod.name" :value="prod.name">
                          {{ prod.name }}
                        </option>
                      </select>
                    </div>
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Tipo de
                        Consulta</label>
                      <select v-model="form.reason" required
                        class="w-full px-5 py-3 rounded-2xl bg-[#FDFBF7] border-b-2 border-orange-800/10 focus:border-orange-800 outline-none transition-all text-[#3D2B1F] appearance-none cursor-pointer">
                        <option value="" disabled>Motivo de contacto</option>
                        <option value="Información">Consulta General</option>
                        <option value="Mayoreo">Negocio / Mayoreo</option>
                      </select>
                    </div>
                  </div>

                  <!-- Quantity Selector Redesign -->
                  <div class="pt-4">
                    <div
                      class="bg-orange-50/40 p-6 rounded-3xl border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-6">
                      <div class="text-center md:text-left">
                        <h4 class="text-xs uppercase font-bold text-[#3D2B1F] tracking-widest">Cantidad del Pedido</h4>
                        <p class="text-[10px] text-orange-800/60 uppercase font-medium">Mínimo 5 piezas para mayoreo</p>
                      </div>

                      <div class="flex items-center gap-4">
                        <button type="button" @click="productStore.decreaseAmount"
                          :disabled="productStore.getCurrentAmount == 5"
                          :class="{ 'opacity-0': productStore.getCurrentAmount == 5 }"
                          class="w-10 h-10 rounded-full cursor-pointer bg-white border border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-900 hover:text-white transition-all shadow-sm active:scale-90">

                          <span class="material-symbols-outlined text-lg select-none">horizontal_rule</span>
                        </button>

                        <div class="relative">
                          <input :value="productStore.currentAmount" type="number" min="5" @change="handleChange"
                            class="w-20 text-center text-3xl font-kalam font-bold bg-transparent outline-none text-orange-900 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none border-b border-orange-200" />
                          <span
                            class="absolute -bottom-4 left-0 w-full text-[8px] uppercase text-center font-bold text-orange-400">Piezas</span>
                        </div>

                        <button type="button" @click="productStore.increaseAmount"
                          class="w-10 h-10 cursor-pointer rounded-full bg-white border border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-900 hover:text-white transition-all shadow-sm active:scale-90">
                          <span class="material-symbols-outlined text-lg select-none">add</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button type="submit"
                    class="w-full py-5 bg-[#3D2B1F] text-white rounded-2xl font-bold uppercase tracking-[0.2em] text-xs hover:bg-orange-900 transition-all shadow-xl shadow-orange-900/10 flex items-center justify-center gap-3 group">
                    <span
                      class="material-symbols-outlined text-sm group-hover:rotate-12 transition-transform">send</span>
                    Enviar Consulta
                  </button>

                  <p class="text-center text-[10px] text-slate-400 font-medium">
                    Su privacidad es sagrada para nosotros. <br> Al enviar, acepta nuestros términos de consulta.
                  </p>
                </form>
              </div>
            </div>
          </div>

          <!-- Extra Decoration -->
          <div class="mt-12 flex justify-center gap-12 opacity-40">
            <span v-for="i in 3" :key="i"
              class="material-symbols-outlined text-orange-800 text-4xl">energy_savings_leaf</span>
          </div>
        </div>
      </section>
    </template>
  </MainLayout>
</template>

<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';
import { ref, onMounted, watch } from 'vue';
import { userProductStore } from '@/stores/product';
import emailjs from '@emailjs/browser';
const productStore = userProductStore();

const form = ref({
  name: '',
  email: '',
  phone: '',
  product: '',
  page: '',
  reason: '',
  message: '',
  date: new Date().toLocaleString('es-MX', {
    dateStyle: 'full',
    timeStyle: 'full'
  })
});

const sendForm = () => {
  form.value.date = new Date().toLocaleString('es-MX', {
    dateStyle: 'full',
    timeStyle: 'full'
  }),
    form.value.page = 'www.prasadam.mx',

    // emailjs.send('service_lacdbgs', 'template_xlhkh3l',
    // form.value
    // )
    console.log(form.value)
  form.value = {
    name: '',
    email: '',
    phone: '',
    product: '',
    page: '',
    reason: '',
    message: '',
    date: new Date().toLocaleString('es-MX', {
      dateStyle: 'full',
      timeStyle: 'full'
    })
  }
}

onMounted(() => {
  if (productStore.currentProduct) {
    form.value.product = productStore.currentProduct;
    if (productStore.currentAmount > 0) {
      form.value.reason = 'Mayoreo';
    }
  }

  onMounted(() => {
    emailjs.init({
      publicKey: 'TnHHk3YLtU4n5stCq',
      blockHeadless: true,
    })
  })
});

const submitForm = () => {
  const payload = {
    ...form.value,
    selectedAmount: productStore.currentAmount
  };
  console.log('Formulario enviado:', payload);
  alert('¡Gracias por contactarnos! Te responderemos pronto.');
};

watch(() => productStore.currentProduct, (newVal: string) => {
  if (newVal && form.value.product !== newVal) {
    form.value.product = newVal;
  }
}, { immediate: true });

watch(() => form.value.product, (newVal: string) => {
  if (newVal && productStore.currentProduct !== newVal) {
    productStore.setCurrentProduct(newVal);
  }
});

const handleChange = (e: Event) => {
  if (!e.target) return;
  const target = e.target as HTMLInputElement;
  if (Number(target.value) < 5) {
    alert('La cantidad mínima es 5. Para compras individuales, visite nuestra tienda.');
    target.value = '5';
  }
  productStore.setCurrentAmount(parseInt(target.value) || 5)
}

const promos = [
  { qty: '+5', discount: '10%', text: 'de descuento', color: 'bg-orange-950', textCol: 'text-orange-800' },
  { qty: '+10', discount: '20%', text: 'de descuento', color: 'bg-orange-900', textCol: 'text-amber-900', featured: true },
  { qty: '+50', discount: '30%', text: 'de descuento', color: 'bg-orange-800', textCol: 'text- orange - 950' }
];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=Jost:wght@300;400;600;700&display=swap');

.font-cormorant {
  font-family: 'Cormorant Garamond', serif;
}

.font-jost {
  font-family: 'Jost', sans-serif;
}

/* Animations */
@keyframes float {
  0% {
    transform: translateY(0px);
  }

  50% {
    transform: translateY(-10px);
  }

  100% {
    transform: translateY(0px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Custom Scrollbar for the form container if needed */
.glass-container::-webkit-scrollbar {
  width: 4px;
}

.glass-container::-webkit-scrollbar-thumb {
  background: rgba(139, 69, 19, 0.2);
  border-radius: 10px;
}

/* Remove Arrows from Number Input */
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
