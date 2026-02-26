<script lang="ts" setup>
import MainLayout from '@/layouts/MainLayout.vue';


</script>

<template>

  <MainLayout>
    <template #main>

      <section class="bg-background-light text-slate-900 font-display overflow-x-hidden ">
        <!-- Navbar -->


        <!-- Hero Section -->
        <section
          class="relative w-full overflow-hidden bg-linear-to-br from-background-dark via-[#330505] to-[#4a0808] relative">
          <img src="@/assets/H1.webp" alt="" class="absolute left-2/12 bottom-0 w-[550px] object-cover">
          <div class="absolute inset-0 opacity-20 pointer-events-none"
            style="background-image: radial-gradient(#ff9f1c 1px, transparent 1px); background-size: 30px 30px;"></div>
          <div
            class="absolute right-0 top-0 h-full w-1/2 bg-[url('https://images.unsplash.com/photo-1605218427368-2c40c3167195?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay"
            data-alt="Mandala pattern texture"></div>
          <div
            class="layout-container px-6 py-12 lg:px-40 lg:py-20 flex flex-col lg:flex-row items-center gap-12 relative z-10">
            <div class="flex-1 flex flex-col gap-6 text-center lg:text-left">
              <div
                class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/30 text-secondary w-fit mx-auto lg:mx-0">
                <span class="material-symbols-outlined text-sm">temple_hindu</span>
                <span class="text-xs font-bold uppercase tracking-wider">Sobre nosotros</span>
              </div>
              <h1 class="text-white text-4xl lg:text-6xl font-black leading-tight tracking-tight">
                La historia de <br />
                <span class="text-transparent bg-clip-text bg-linear-to-r from-secondary to-primary text-8xl">Prasadam
                </span>
              </h1>
              <p class="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Somos una marca Mexicana que desarrolla, maquila, importa, exporta y representa diversos productos en
                diferentes países. Nuestros productos son ayurvedicos y son 100 % naturales, los cuales mantienen
                esencia, procesos y calidad originarios de la India.
              </p>
              <div class="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
                <button
                  class="flex items-center justify-center rounded-lg h-12 px-8 bg-accent hover:bg-emerald-700 transition-colors text-white text-base font-bold shadow-lg shadow-emerald-900/50">
                  Nuestra Historia
                </button>
                <button
                  class="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 border border-white/20 transition-colors text-white text-base font-bold backdrop-blur-sm">
                  Ver Catálogo
                </button>
              </div>
            </div>
            <div class="flex-1 w-full max-w-[500px] lg:max-w-none relative">
              <div class="relative aspect-square w-full">
                <div
                  class="absolute top-4 left-4 right-4 bottom-4 border-2 border-secondary/30 rounded-full animate-[spin_20s_linear_infinite]">
                </div>
                <div class="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl">
                </div>
                <img alt="Ayurvedic herbs and spices"
                  class="absolute top-0 right-0 w-2/3 h-2/3 object-cover rounded-tr-[4rem] rounded-bl-[4rem] shadow-2xl z-20 border-4 border-background-dark"
                  data-alt="Ayurvedic herbs and spices"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2A2zduWt5Pbc9oVh6VuNnUzWxjOaWkcGA00mFb9R7iVhXFrse4EpVbhCuvTtDKjq_dTLT-i2rrhbHHTpucI_2PXXRcXPUnBavoN1eaY2-o9gEAW3Nme-Bm8I2APnBiNSw--33_xjBUukOWZF94WGHabV4NwHt4PZcBj8sYoKiieVTMw1nsEKvFN_-LiCPSTuHUXI62b_e9TdySgj5OZXTZ_GmDCymFDFcaKLH6yvATeIN9EOMrqyHvuhIVH2zlvah6RjcJG2RvRCT" />
                <img alt="Person meditating in nature"
                  class="absolute bottom-0 left-0 w-3/5 h-3/5 object-cover rounded-tl-[3rem] rounded-br-[3rem] shadow-2xl z-30 border-4 border-background-dark"
                  data-alt="Person meditating in nature"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIBfOuat20zOpJdPNB9KDayTCbV7V9lazw1MQ4W3EUmtDP7oP38CM9HyWHh59bE-acOU_gQG1A-yG8tIIxfB9ektQprYmvUgn4YkXVTW1A78C2iyOX_wsMnqX-Gn7ibJseeDCOiAUl_VEQeWL6nzppy4UPQu1eenqmpxPgR9_UX6jJHVEq-WVMxMR8LBNuLgFZvguKO7utCpUc0wUkt5wo38su5GaP_OyTqmucYR_NrfyNfVFsblUGVozbseJLk554IofRIdqM8qAF" />
                <div
                  class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-40 bg-background-dark/80 backdrop-blur-md p-4 rounded-full border border-secondary/50 shadow-xl">
                  <span class="material-symbols-outlined text-4xl text-secondary">self_improvement</span>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute bottom-0 left-0 w-dvw overflow-hidden leading-0 right-0 hidden ">
            <svg class="relative block w-full h-[60px] fill-background-dark" data-name="Layer 1"
              preserveaspectratio="none" viewbox="0 0 1200 120" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z">
              </path>
            </svg>
          </div>
        </section>

        <!-- Mission & Vision Section -->
        <section class="bg-background-dark py-20 px-6 lg:px-40">
          <div class="max-w-7xl mx-auto">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              <div
                class="bg-linear-to-br from-[#c2410c] to-[#9a3412] p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div class="absolute right-0 top-0 p-4 opacity-10">
                  <span class="material-symbols-outlined text-9xl text-white">target</span>
                </div>
                <div class="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      <span class="material-symbols-outlined text-white text-2xl">flag</span>
                    </div>
                    <h3 class="text-white text-3xl font-black mb-4">Nuestra Misión</h3>
                    <p class="text-orange-100 text-lg leading-relaxed font-medium">
                      Cubrir las demandas y necesidades para nuestros consumidores, proporcionando calidad, confianza y
                      satisfacción en salud y bienestar.
                    </p>
                  </div>
                  <div class="mt-8 pt-6 border-t border-white/20">
                    <span class="text-white font-bold text-sm tracking-widest uppercase">Propósito Puro</span>
                  </div>
                </div>
              </div>
              <div
                class="bg-gradient-to-br from-[#15803d] to-[#14532d] p-8 rounded-2xl shadow-lg relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
                <div class="absolute right-0 top-0 p-4 opacity-10">
                  <span class="material-symbols-outlined text-9xl text-white">visibility</span>
                </div>
                <div class="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                      <span class="material-symbols-outlined text-white text-2xl">visibility</span>
                    </div>
                    <h3 class="text-white text-3xl font-black mb-4">Nuestra Visión</h3>
                    <p class="text-green-100 text-lg leading-relaxed font-medium">
                      Ayudar y beneficiar a las personas en diferentes ámbitos de bienestar y salud, contribuyendo con
                      lo mejor de diferentes regiones y culturas para que nuestros productos sean primera opción por su
                      calidad, origen y procesos milenarios naturales de la medicina tradicional (Ayurveda).
                    </p>
                  </div>
                  <div class="mt-8 pt-6 border-t border-white/20">
                    <span class="text-white font-bold text-sm tracking-widest uppercase">Futuro Verde</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Product Values - 100% Typography -->
        <section class="bg-secondary py-24 relative overflow-hidden">
          <div class="absolute inset-0 opacity-10"
            style="background-image: radial-gradient(#221010 2px, transparent 2px); background-size: 20px 20px;"></div>
          <div class="layout-container px-6 lg:px-40 relative z-10">
            <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div class="flex-1">
                <h2 class="text-background-dark text-4xl lg:text-5xl font-black leading-none mb-6">
                  PUREZA<br />QUE SE SIENTE
                </h2>
                <p class="text-background-dark/80 text-xl font-bold max-w-md">
                  Sin rellenos, sin químicos agresivos. Solo la naturaleza en su máxima expresión, formulada para su
                  equilibrio.
                </p>
              </div>
              <div class="flex-1 flex justify-center lg:justify-end">
                <div class="relative">
                  <h2 class="text-[180px] leading-[0.8] font-black text-transparent stroke-text"
                    style="-webkit-text-stroke: 4px #221010;">100%</h2>
                  <span
                    class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-primary text-6xl font-black -rotate-12 bg-white px-4 py-2 shadow-xl transform skew-x-12 border-4 border-background-dark">NATURAL</span>
                </div>
              </div>
            </div>
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              <div class="bg-background-dark/10 backdrop-blur-sm p-6 rounded-xl border border-background-dark/10">
                <span class="material-symbols-outlined text-4xl text-background-dark mb-3">cruelty_free</span>
                <h4 class="font-bold text-background-dark text-lg">Cruelty Free</h4>
              </div>
              <div class="bg-background-dark/10 backdrop-blur-sm p-6 rounded-xl border border-background-dark/10">
                <span class="material-symbols-outlined text-4xl text-background-dark mb-3">eco</span>
                <h4 class="font-bold text-background-dark text-lg">Orgánico</h4>
              </div>
              <div class="bg-background-dark/10 backdrop-blur-sm p-6 rounded-xl border border-background-dark/10">
                <span class="material-symbols-outlined text-4xl text-background-dark mb-3">science</span>
                <h4 class="font-bold text-background-dark text-lg">Probado</h4>
              </div>
              <div class="bg-background-dark/10 backdrop-blur-sm p-6 rounded-xl border border-background-dark/10">
                <span class="material-symbols-outlined text-4xl text-background-dark mb-3">recycling</span>
                <h4 class="font-bold text-background-dark text-lg">Sustentable</h4>
              </div>
            </div>
          </div>
        </section>

        <!-- History Section -->
        <section class="bg-[#eab308] relative py-20 lg:py-32 overflow-hidden">
          <div class="absolute left-0 top-0 bottom-0 w-12 lg:w-24 bg-repeat-y opacity-20"
            style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDUwIDIwIDMwbTEwIDEwLTIwIDBtMCAwIDIwIDBtLTIwIDAgMjAgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=');">
          </div>
          <div class="absolute right-0 top-0 bottom-0 w-12 lg:w-24 bg-repeat-y opacity-20"
            style="background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIwIDUwIDIwIDMwbTEwIDEwLTIwIDBtMCAwIDIwIDBtLTIwIDAgMjAgMCIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiIGZpbGw9Im5vbmUiLz48L3N2Zz4=');">
          </div>
          <div class="layout-container px-12 lg:px-48 relative z-10">
            <div class="bg-background-dark p-8 lg:p-12 rounded-3xl shadow-2xl border-4 border-primary/30">
              <div class="flex flex-col lg:flex-row gap-12 items-center">
                <div class="lg:w-1/2">
                  <span class="text-primary font-bold tracking-widest uppercase mb-2 block">Orígenes</span>
                  <h2 class="text-white text-3xl lg:text-4xl font-black mb-6 leading-tight">
                    Historia
                  </h2>
                  <p class="text-slate-300 mb-6 leading-relaxed">
                    Prasadam surge como una marca comercial Mexicana, para crear, manufacturar, distribuir y proveer
                    Productos Ayurvedicos provenientes de la India a diferentes países. Dando a conocer este arte y
                    procesos de medicina tradicional milenarios en una amplia variedad de productos de la más alta
                    calidad.
                  </p>
                  <div class="flex items-center gap-4">
                    <div class="h-px bg-slate-700 flex-1"></div>
                    <span class="material-symbols-outlined text-secondary">local_florist</span>
                    <div class="h-px bg-slate-700 flex-1"></div>
                  </div>
                </div>
                <div class="lg:w-1/2 relative">
                  <div class="grid grid-cols-2 gap-4">
                    <img alt="Spices market"
                      class="rounded-2xl object-cover h-48 w-full shadow-lg transform translate-y-4"
                      data-alt="Spices market in India"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9cMH1D2g8gbV7ujYaovlvu575Yo8iV3FwvuJoKtTB7U0TefL7-uh16M8Wv3yyEuOks_08tKzzRYa-_kq1EQMkRypvNTB2rKNGyNgDeNJaPk3bpNtdOSioj1ujAB4ZrtME_ks1FMU1SBsHSm7UNkzUV44G6UnSpD3LLZDP32joXniONajQbr94n2NfOXnQUlR3b4qCbLx0Z3yOJFEm0eTFj4PEg75bRlhKImFXxj5WAdDRCJDcAuLRunJj583vUPQAQmFgJyAmY8-a" />
                    <img alt="Mexican spices"
                      class="rounded-2xl object-cover h-48 w-full shadow-lg transform -translate-y-4"
                      data-alt="Mexican spices and ingredients"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD32qGTcqTNn5qe_LNJYKX3MVwGRJaBwDo62o6cWm91UgVtNO_MzsQSD7tRBRFFeZnmob9mLhAjJfS75hQttO4tKWV6qBaC8j7g8txDHm8IGso9PwImKfJuQdVnctcS9quMx3T4tUDhFvfdIB6wrCGzs0ImFRzw5AbfR9y3hRQvmId6ANyjnwanRzm5HnS554KNJoNMT43R32H3q2UzhoBaDBvsCk3OtbYGnYFNRjSDCE-XRuFk4wUoXUBaSQ1Ovn1QWzD_VuQpG17-" />
                    <img alt="Ayurvedic oil preparation"
                      class="rounded-2xl object-cover h-48 w-full shadow-lg transform translate-y-4"
                      data-alt="Ayurvedic oil preparation"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1gx6q27dlwhTg8EM42ufX3338Hj-6VjiJqot5S405CgAmKbDbpQ6_gVLkhunYLDT5my-vIHQhkacsKS3Tnb6AjdyRx7PNNg8cWx44BzXUrPy3MVk_7U9HMgcASL40ScMpw9aoANVtpqJFH05hZ2x1_qjbD4gUsPaOwiszEqmQSyAvghppK2ZSvADSmy8jHpoElKuA94cbif5KeHSDV17-iWoIgwDeBLLF7ZgSPUYDQrIylyc31V1ehsK5r9JA2VMlbb6veXxg7Gz" />
                    <img alt="Tea ceremony"
                      class="rounded-2xl object-cover h-48 w-full shadow-lg transform -translate-y-4"
                      data-alt="Tea ceremony setting"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6fFFrrHhuEQk03-GnYnBZdFKVFBNPzOof_ezpzLt2M6QAaW7-qf2vyN2_UxkblkIkdekZkqvbPtdseCBcFuyyAy5VgEDJVH_APaS7ET4g_pnjP--0TyPxwim2hesgtvO8HcJnXEtjsbq3QkD7DHQ_5gkVkxuP988hxAlinJVDs4Zt2LxHQMGfV0tFCMxf2iSCJYOA96hWG-ZBJDXpj5fi3WJHBMqQUWWsPWf8je7gSa8CJc1MvMT-w22UzOesNbJzhQpMx7QVo5CA" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- What We Offer - Colorful Grid -->
        <section class="bg-background-light py-20 px-6 lg:px-40">
          <div class="text-center mb-16">
            <h2 class="text-slate-900 text-3xl lg:text-4xl font-black mb-4">Lo Que Ofrecemos</h2>
            <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div
              class="bg-primary/10 border border-primary/20 rounded-2xl p-8 hover:bg-primary hover:text-white group transition-all duration-300">
              <div
                class="w-14 h-14 bg-primary text-white rounded-xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:bg-white group-hover:text-primary transition-colors">
                <span class="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 class="text-slate-900 text-xl font-bold mb-3 group-hover:text-white">Diversidad de Productos</h3>
              <p class="text-slate-600 group-hover:text-white/90">Diversidad en productos Ayurvédicos, con manufactura
                desde la India, entregando calidad y eficiencia en cada una de nuestras presentaciones.</p>
            </div>
            <div
              class="bg-accent/10 border border-accent/20 rounded-2xl p-8 hover:bg-accent hover:text-white group transition-all duration-300">
              <div
                class="w-14 h-14 bg-accent text-white rounded-xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:bg-white group-hover:text-accent transition-colors">
                <span class="material-symbols-outlined">eco</span>
              </div>
              <h3 class="text-slate-900 text-xl font-bold mb-3 group-hover:text-white">Pureza Natural</h3>
              <p class="text-slate-600 group-hover:text-white/90">Ofrecemos productos sin conservadores, naturales y de
                la más alta calidad en cada presentación.</p>
            </div>
            <div
              class="bg-blue-600/10 border border-blue-600/20 rounded-2xl p-8 hover:bg-blue-600 hover:text-white group transition-all duration-300">
              <div
                class="w-14 h-14 bg-blue-600 text-white rounded-xl flex items-center justify-center mb-6 text-3xl shadow-lg group-hover:bg-white group-hover:text-blue-600 transition-colors">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <h3 class="text-slate-900 text-xl font-bold mb-3 group-hover:text-white">Certificaciones</h3>
              <p class="text-slate-600 group-hover:text-white/90">Cada producto cuenta con certificados y sellos
                provenientes de la India que respaldan la calidad con la que trabajamos.</p>
            </div>
          </div>
        </section>

        <!-- Our Commitment / Features Grid -->
        <section class="bg-amber-950 py-24 px-6 lg:px-40">
          <div class="text-center mb-16">
            <span class="text-primary font-bold tracking-widest uppercase mb-2 block">Garantía Prasadam</span>
            <h2 class="text-slate-100 text-3xl lg:text-4xl font-black mb-4">Nuestro Compromiso</h2>
            <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">category</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Diversidad en productos</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Diversidad en productos Ayurvedicos, con manufactura
                desde
                la India, entregando calidad y eficiencia en cada una de nuestras presentaciones.</p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">eco</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Sin conservadores</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Productos sin conservadores, naturales y de la más alta
                calidad.</p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-blue-600/10 text-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">verified</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Certificaciones</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Cada producto tiene certificados y sellos provenientes
                de la
                India que respaldan la calidad con la que trabajamos.</p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-secondary/10 text-secondary rounded-xl flex items-center justify-center mb-4 group-hover:bg-secondary group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">support_agent</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Fácil contacto</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Si tiene dudas sobre un producto, le ofrecemos
                diferentes
                medios para que se contacte con nosotros, brindándole información, por medio de mensajes, redes
                sociales,
                números de contacto, entre otros. Estamos para servirle.</p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-emerald-600/10 text-emerald-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">security</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Compras seguras</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Si desea adquirir un producto, póngase en contacto con
                nosotros para más información, con gusto le brindaremos la mejor forma de compra.</p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-orange-500/10 text-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">flight_takeoff</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Productos exportados</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Todo nuestro catalogo de productos, tanto su
                elaboración,
                empaquetado y materia prima; son provenientes de la región que dio a nacer el arte de la Ayurveda. La
                India.
              </p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-purple-600/10 text-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">medication</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Medicinas auxiliares</h3>
              <p class="text-slate-600 text-sm leading-relaxed">La medicina Ayurvédica a su disposición en forma de
                tabletas, ayudando para diferentes malestares y enfermedades.</p>
            </div>

            <div
              class="bg-background-light p-6 rounded-2xl border border-slate-100 hover:shadow-lg transition-all duration-300 group hover:-translate-y-1">
              <div
                class="w-12 h-12 bg-teal-600/10 text-teal-600 rounded-xl flex items-center justify-center mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <span class="material-symbols-outlined">inventory_2</span>
              </div>
              <h3 class="text-slate-900 font-bold mb-2">Variedad de productos</h3>
              <p class="text-slate-600 text-sm leading-relaxed">Tenemos un listado amplio de productos Ayurvédicos a su
                disposición. Cada uno para diferentes usos y con múltiples beneficios.</p>
            </div>
          </div>
        </section>

        <!-- Experience Metrics -->
        <section class="bg-background-dark py-16 border-y border-surface-accent">
          <div class="layout-container px-6 lg:px-40">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center max-w-4xl mx-auto">
              <div class="flex flex-col items-center gap-2">
                <span class="text-4xl lg:text-5xl font-black text-secondary">100%</span>
                <span class="text-slate-400 text-sm font-bold uppercase tracking-wider">Producto Natural</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-4xl lg:text-5xl font-black text-secondary">100%</span>
                <span class="text-slate-400 text-sm font-bold uppercase tracking-wider">Producto Vegetariano</span>
              </div>
              <div class="flex flex-col items-center gap-2">
                <span class="text-4xl lg:text-5xl font-black text-secondary">100%</span>
                <span class="text-slate-400 text-sm font-bold uppercase tracking-wider">Libre de Químicos y
                  Conservadores</span>
              </div>
            </div>
          </div>
        </section>

      </section>
    </template>

  </MainLayout>


</template>

<style scoped></style>
