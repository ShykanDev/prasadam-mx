<template>
  <MainLayout>
    <template #main>
      <section class="min-h-screen relative flex items-center justify-center py-16 px-4 overflow-hidden font-jost">
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
              class="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between bg-linear-to-b  from-[#3D2B1F]/55 to-[#5C4033]/70 text-white relative backdrop-blur-2xl">
              <div class="space-y-4">
                <div
                  class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-400/20 border border-orange-400/30 text-orange-200 text-[10px] uppercase tracking-widest font-bold">
                  <span class="material-symbols-outlined text-xs">spa</span>
                  Bienestar Ancestral
                </div>


                <div class="pt-4 space-y-3">
                  <h3 class="text-xs uppercase tracking-[0.3em] font-bold text-orange-300/80">Descuento en Mayoreo</h3>
                  <div v-for="promo in promos" :key="promo.qty" @click="productStore.setCurrentAmount(promo.qtyNumber)"
                    class="relative flex items-center justify-between p-4 overflow-hidden transition-all duration-500 rounded-3xl cursor-pointer drop-shadow-white/5 hover:drop-shadow-white drop-shadow-xl"
                    :class="[
                      promo.qty === '+10' ? 'bg-[#7B5E43]' : (promo.qty === '+5' ? 'bg-[#4A3728]' : 'bg-[#5C4033]'),
                      (promo.qty === '+5' && productStore.getCurrentAmount >= 5 && productStore.getCurrentAmount <= 10) ||
                        (promo.qty === '+10' && productStore.getCurrentAmount > 10 && productStore.getCurrentAmount <= 50) ||
                        (promo.qty === '+50' && productStore.getCurrentAmount > 50)
                        ? 'ring-4 ring-white/50 scale-[1.03] shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                        : 'opacity-80'
                    ]">

                    <div
                      class="absolute -right-4 -top-4 w-20 h-20 flex items-center justify-center opacity-20 rotate-12">
                      <span class="material-symbols-outlined text-7xl text-white">hexagon</span>
                    </div>

                    <div class="relative z-10">
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-[10px] font-bold uppercase tracking-widest text-orange-200/60">{{ promo.qty }}
                          productos</span>
                        <div v-if="(promo.qty === '+5' && productStore.getCurrentAmount >= 5 && productStore.getCurrentAmount <= 10) ||
                          (promo.qty === '+10' && productStore.getCurrentAmount > 10 && productStore.getCurrentAmount <= 50) ||
                          (promo.qty === '+50' && productStore.getCurrentAmount > 50)"
                          class="bg-white text-orange-950 text-[8px] font-black px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
                          <span class="material-symbols-outlined text-[10px] animate-fade">verified</span>
                          APLICADO
                        </div>
                      </div>
                      <h4 class="text-3xl font-black text-white leading-none">{{ promo.discount }}</h4>
                    </div>

                    <div class="relative z-10 text-right flex flex-col items-end">
                      <div
                        class="w-10 h-10 mb-1 bg-white flex items-center justify-center [clip-path:polygon(25%_0%,75%_0%,100%_50%,75%_100%,25%_100%,0%_50%)] shadow-lg">
                        <span class="text-orange-950 font-black text-sm">{{ promo.discount }}</span>
                      </div>
                      <span class="text-[10px] italic font-medium text-white/80">{{ promo.text }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="mt-6 group">
                <div
                  class="relative flex items-center gap-5 p-4 rounded-2xl bg-amber-950 border-white/30 border-2 text-white overflow-hidden shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <div
                    class="absolute -right-10 -bottom-10 opacity-20 rotate-12 transition-transform group-hover:rotate-45 duration-700">
                    <span class="material-symbols-outlined text-[100px]">local_shipping</span>
                  </div>

                  <div class="w-12 h-12 rounded-2xl bg-white shadow-xl flex items-center justify-center shrink-0">
                    <span class="material-symbols-outlined text-orange-400 text-2xl animate-shake">local_shipping</span>
                  </div>
                  <div class="relative z-10">
                    <p class="text-xs uppercase font-black tracking-[0.2em] mb-1">Envío gratis</p>
                    <p class="text-sm font-medium text-white/90">En órdenes mayores a <span
                        class="text-white font-black">$2,000 MXN</span></p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Form Section -->
            <div class="lg:col-span-3 p-6 lg:p-10 bg-white/60 relative font-poppins backdrop-blur-md">
              <div class="absolute top-8 right-8 text-orange-800/5">
                <span class="material-symbols-outlined text-9xl">lotus</span>
              </div>

              <div class="relative z-10 max-w-2xl mx-auto">
                <div class="mb-6 text-center lg:text-left">
                  <h2
                    class="text-2xl font-black text-[#3D2B1F] flex items-center gap-4 justify-center lg:justify-start">
                    <span class="w-10 h-1 bg-orange-800/20 rounded-full"></span>
                    <a href="https://www.canva.com/design/DAHDjj_kI4Q/Oq8hiedKs_SOiaLDOTI2Nw/edit?utm_content=DAHDjj_kI4Q&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                      target="_blank">
                      Contáctenos
                    </a>
                  </h2>
                  <p class="text-xs text-[#3D2B1F]/60 mt-1 font-medium uppercase tracking-widest pl-14">Escríbanos su
                    mensaje</p>
                </div>


                <form @submit.prevent="sendForm" class="space-y-2">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-[2px]">
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Nombre
                        Completo</label>
                      <input v-model="form.name" type="text" placeholder="Ej. Jorge Ramírez" required
                        class="w-full px-4 py-3 bg-amber-50 font-manrope  rounded-2xl border-2 border-orange-800/10 focus:border-orange-800/50 focus:bg-white outline-none transition-all text-amber-800 placeholder:text-slate-300 shadow-sm">
                    </div>
                    <div class="space-y-1">
                      <label
                        class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Whatsapp</label>
                      <input v-model="form.phone" type="tel" placeholder="55 1234 5678"
                        class="w-full px-4 py-3 bg-amber-50 border-2 rounded-2xl border-orange-800/10 focus:border-orange-800/50 focus:bg-white outline-none transition-all text-amber-800 placeholder:text-slate-300 shadow-sm">
                    </div>
                    <div class="md:col-span-2 space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Correo
                        Electrónico</label>
                      <input v-model="form.email" type="email" placeholder="email@ejemplo.com" required
                        class="w-full px-4 py-3 bg-amber-50 border-2 rounded-2xl border-orange-800/10 focus:border-orange-800/50 focus:bg-white outline-none transition-all text-amber-800 placeholder:text-slate-300 shadow-sm">
                    </div>
                  </div>

                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Producto de
                        Interés</label>
                      <div class="relative">
                        <select v-model="form.product" required
                          class="w-full px-4 py-3 rounded-2xl bg-amber-50 border-2 border-orange-800/10 focus:border-orange-800/50 focus:bg-white outline-none transition-all text-[#3D2B1F] appearance-none cursor-pointer shadow-sm">
                          <option value="" disabled>Seleccione un producto</option>
                          <option v-for="prod in productStore.productsList" :key="prod.name" :value="prod.name">
                            {{ prod.name }}
                          </option>
                        </select>
                        <span
                          class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-orange-800/30 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                    <div class="space-y-1">
                      <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Tipo de
                        Consulta</label>
                      <div class="relative">
                        <select v-model="form.reason" required
                          class="w-full px-4 py-3 rounded-2xl bg-amber-50 border-2 border-orange-800/10 focus:border-orange-800/50 focus:bg-white outline-none transition-all text-[#3D2B1F] appearance-none cursor-pointer shadow-sm">
                          <option value="" disabled>Motivo de contacto</option>
                          <option value="Información">Consulta General</option>
                          <option value="Mayoreo">Negocio / Mayoreo</option>
                        </select>
                        <span
                          class="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-orange-800/30 pointer-events-none">expand_more</span>
                      </div>
                    </div>
                  </div>

                  <div class="space-y-1">
                    <label class="text-[10px] uppercase font-bold text-[#3D2B1F]/60 tracking-widest ml-1">Mensaje para
                      Nosotros</label>
                    <textarea v-model="form.message" placeholder="¿En qué podemos ayudarte?" rows="3"
                      class="w-full px-4 py-3 bg-amber-50 border-2 rounded-2xl border-orange-800/10 focus:border-orange-800/50 focus:bg-white outline-none transition-all text-amber-800 placeholder:text-slate-300 shadow-sm resize-none"></textarea>
                  </div>

                  <div class="pt-1">
                    <div
                      class="bg-orange-50/50 p-4 rounded-[2rem] border border-orange-100 flex flex-col md:flex-row items-center justify-between gap-4 shadow-inner">
                      <div class="text-center md:text-left">
                        <h4 class="text-[10px] uppercase font-black text-[#3D2B1F] tracking-widest mb-1">Cantidad del
                          Pedido</h4>
                        <p
                          class="text-[9px] text-orange-800/60 uppercase font-bold flex items-center gap-1 justify-center md:justify-start">
                          <span class="material-symbols-outlined text-[12px]">info</span>
                          Mínimo 5 piezas para mayoreo
                        </p>
                      </div>

                      <div class="flex items-center gap-4">
                        <button type="button" @click="productStore.decreaseAmount"
                          :disabled="productStore.getCurrentAmount <= 5"
                          class="w-10 h-10 rounded-2xl cursor-pointer bg-white border-2 border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-900 hover:text-white hover:border-orange-900 transition-all shadow-md active:scale-90 disabled:opacity-30 disabled:pointer-events-none">
                          <span class="material-symbols-outlined text-xl select-none">remove</span>
                        </button>

                        <div class="relative group">
                          <input :value="productStore.currentAmount" type="number" min="5" @change="handleChange"
                            class="w-20 text-center text-3xl font-kalam font-bold bg-transparent outline-none text-orange-950 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" />
                          <div
                            class="absolute -bottom-5 left-0 w-full text-[9px] uppercase text-center font-black text-orange-400 group-focus-within:text-orange-950 transition-colors">
                            Piezas</div>
                          <div class="absolute bottom-0 left-0 w-full h-0.5 bg-orange-200"></div>
                        </div>

                        <button type="button" @click="productStore.increaseAmount"
                          class="w-10 h-10 cursor-pointer rounded-2xl bg-white border-2 border-orange-100 flex items-center justify-center text-orange-900 hover:bg-orange-900 hover:text-white hover:border-orange-900 transition-all shadow-md active:scale-90">
                          <span class="material-symbols-outlined text-xl select-none">add</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <button type="submit"
                    class="w-full py-4 cursor-pointer bg-orange-950 text-white rounded-2xl font-black uppercase tracking-[0.3em] text-xs hover:bg-orange-900 transition-all shadow-2xl shadow-orange-950/20 flex items-center justify-center gap-4 group relative overflow-hidden">
                    <div
                      class="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-500">
                    </div>
                    <span
                      class="material-symbols-outlined text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">send</span>
                    <span class="relative z-10">Solicitar Información</span>
                  </button>

                  <p class="text-center text-[10px] text-slate-400 font-medium">
                    Su privacidad es importante para nosotros. <br> Al enviar, acepta que nos pongamos en contacto con
                    usted mediante alguno de los medios que nos proporcione.
                  </p>
                </form>


              </div>
            </div>
          </div>

          <!-- Extra Decoration -->
          <div class="mt-6 flex justify-center gap-12 opacity-40">
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
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
const productStore = userProductStore();
const notyf = new Notyf();

const form = ref({
  name: '',
  email: '',
  phone: '',
  product: '',
  page: '',
  reason: '',
  message: '',
  customHTML: '',
  date: new Date().toLocaleString('es-MX', {
    dateStyle: 'full',
    timeStyle: 'full'
  })
});


const sendAutoReply = async () => {
  const templateParams = {
    name: form.value.name,
    email: form.value.email,
    page: form.value.page,
    message: form.value.message,
    customHTML: form.value.customHTML,
    date: form.value.date
  };
  try {
    await emailjs.send('service_lacdbgs', 'template_zc6f8ek', templateParams);
  } catch (error) {

    notyf.error('Error al enviar el mensaje automático, intente de nuevo más tarde.');

    console.log(error);
  }
}
const sendForm = async () => {
  const customHTML = `
<div style="margin:25px 0;background:#fff8f1;border:2px solid #d2691e;border-radius:12px;padding:20px;">
<strong style="color:#8b4513;display:block;margin-bottom:12px;font-size:18px;">
Detalles del pedido
</strong>

<table style="width:100%;font-size:15px;color:#5d4037;">
<tr>
<td style="padding:8px 0;font-weight:bold;width:160px;color:#8b4513;">
Producto
</td>
<td style="background:#fff;border-radius:6px;padding:6px 10px;">
${form.value.product}
</td>
</tr>

<tr>
<td style="padding:8px 0;font-weight:bold;color:#8b4513;">
Cantidad solicitada
</td>
<td style="background:#fff;border-radius:6px;padding:6px 10px;">
${productStore.currentAmount} piezas
</td>
</tr>
</table>
</div>
`
  form.value.customHTML = customHTML;
  form.value.date = new Date().toLocaleString('es-MX', {
    dateStyle: 'full',
    timeStyle: 'full'
  }),
    form.value.page = 'www.prasadam.mx',
    console.log(form.value)
  try {
    await emailjs.send('service_lacdbgs', 'template_xlhkh3l',
      form.value
    )
    await sendAutoReply();
    notyf.success('¡Mensaje enviado correctamente, lo contactaremos pronto!');
  } catch (error) {
    notyf.error('Error al enviar el mensaje, intente de nuevo más tarde.');
    console.log(error)
  }
  form.value = {
    name: '',
    email: '',
    phone: '',
    product: '',
    page: '',
    reason: '',
    message: '',
    customHTML: '',
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

});
onMounted(() => {
  emailjs.init({
    publicKey: 'TnHHk3YLtU4n5stCq',
    blockHeadless: true,
  })
})

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
  { qty: '+5', qtyNumber: 6, discount: '10%', text: 'de descuento', color: 'bg-orange-950', textCol: 'text-orange-800' },
  { qty: '+10', qtyNumber: 11, discount: '20%', text: 'de descuento', color: 'bg-orange-900', textCol: 'text-amber-900', featured: true },
  { qty: '+50', qtyNumber: 51, discount: '30%', text: 'de descuento', color: 'bg-orange-800', textCol: 'text- orange - 950' }
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
