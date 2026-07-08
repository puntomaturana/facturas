<template>
  <div class="min-h-screen overflow-x-hidden text-[var(--ink)]">
    <header class="sticky top-0 z-30 border-b border-[var(--line)] bg-[var(--paper)]">
      <div class="mx-auto flex min-h-[76px] w-full max-w-[1180px] items-center justify-between gap-6 px-4">
        <a href="https://latitudmedia.cl/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center">
          <img src="/assets/logos/latitud-logo-coral.svg" alt="Latitud Media" width="109" height="30" decoding="async" class="h-[30px] w-auto" />
        </a>
        <p class="hidden text-sm font-semibold text-[var(--stone)] md:block">
          Herramienta gratuita
        </p>
      </div>
    </header>

    <main class="mx-auto w-full max-w-[1180px] px-4 pt-10 md:pt-14">
      <section class="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
        <div class="animate-fade-in lg:sticky lg:top-28">
          <p class="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[var(--coral)]">
            Herramienta SII
          </p>
          <h1 class="max-w-3xl text-[clamp(2.25rem,4.7vw,3.75rem)] font-[760] leading-[1.03] tracking-normal text-[var(--ink)]">
            Prepara tu logo para el facturador electrónico del SII
          </h1>
          <p class="mt-6 max-w-[36rem] text-[1.08rem] leading-[1.65] text-[#3f4856]">
            Recorta, encuadra y comprime una imagen para dejarla en JPG, 120×120 píxeles y bajo 10KB.
          </p>

          <dl class="mt-8 grid border-y border-[rgba(19,40,75,0.16)] text-sm text-[var(--stone)] sm:grid-cols-3 sm:divide-x sm:divide-[rgba(19,40,75,0.16)]">
            <div class="py-4 sm:pr-4">
              <dt class="mb-1 text-xs uppercase tracking-[0.14em] text-[var(--stone)]">Formato</dt>
              <dd class="font-bold text-[var(--ink)]">JPG</dd>
            </div>
            <div class="border-t border-[rgba(19,40,75,0.16)] py-4 sm:border-t-0 sm:px-4">
              <dt class="mb-1 text-xs uppercase tracking-[0.14em] text-[var(--stone)]">Dimensión</dt>
              <dd class="font-bold text-[var(--ink)]">120×120 px</dd>
            </div>
            <div class="border-t border-[rgba(19,40,75,0.16)] py-4 sm:border-t-0 sm:pl-4">
              <dt class="mb-1 text-xs uppercase tracking-[0.14em] text-[var(--stone)]">Peso</dt>
              <dd class="font-bold text-[var(--ink)]">menos de 10KB</dd>
            </div>
          </dl>

          <a
            href="https://www.sii.cl/portales/mipyme/administracion_datos/Guia_Cambiar_Logo.html"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[var(--blue-deep)] hover:text-[var(--coral-strong)] hover:underline"
          >
            Ver guía oficial del SII
            <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8m9 0v9" />
            </svg>
          </a>
        </div>

      <section aria-label="Optimizador de logo" class="animate-slide-up">
      <div v-if="!imageLoaded" class="mb-8 animate-slide-up">
        <div
          @drop.prevent="handleDrop"
          @dragover.prevent
          @dragenter.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          :class="[
            'relative overflow-hidden rounded-[8px] border p-8 text-center transition-all duration-300 cursor-pointer md:min-h-[430px] md:p-14',
            isDragging 
              ? 'border-[var(--coral)] bg-white shadow-[0_18px_55px_rgba(19,40,75,0.12)]' 
              : 'border-[rgba(19,40,75,0.16)] bg-white hover:border-[var(--coral)]'
          ]"
          @click="triggerFileInput"
        >
          <div class="relative space-y-6">
            <div class="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-[8px] border border-[rgba(19,40,75,0.14)] bg-[var(--blue-soft)] text-[var(--blue-deep)] transition-transform duration-300">
              <svg
                class="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
            </div>
            
            <div>
              <p class="mb-2 text-2xl font-bold text-[var(--ink)]">
                Carga el logo que quieres usar en la factura
              </p>
              <p class="text-base text-[var(--stone)]">
                Arrástralo aquí o haz clic para seleccionar una imagen desde tu equipo.
              </p>
            </div>
            
            <div class="flex flex-wrap items-center justify-center gap-3 text-sm text-[var(--stone)]">
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                  <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
                JPG
              </div>
              <span class="text-gray-400">•</span>
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                  <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
                PNG
              </div>
              <span class="text-gray-400">•</span>
              <div class="flex items-center gap-1.5">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                  <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
                GIF
              </div>
            </div>
          </div>
          
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="handleFileSelect"
            class="hidden"
          />
        </div>
      </div>

      <div v-if="imageLoaded && !optimizedImage" class="animate-slide-up">
        <div class="overflow-hidden rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white shadow-[0_18px_55px_rgba(19,40,75,0.10)]">
          <div class="bg-[var(--blue-deep)] px-6 py-5 md:px-8">
            <h2 class="flex items-center gap-3 text-xl font-bold text-white md:text-2xl">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
              </svg>
              Recorta tu logo
            </h2>
            <p class="mt-1 text-white/65">
              Ajusta el área de recorte para mantener la parte más importante
            </p>
          </div>
          
          <div class="p-6 md:p-8">
            <div class="mx-auto mb-8 max-w-lg overflow-hidden bg-[var(--ivory)]">
              <img ref="cropperImage" :src="originalImageUrl" alt="Imagen para recortar" />
            </div>

            <div class="grid gap-3 md:grid-cols-2">
              <button
                @click="resetImage"
                class="rounded-[4px] border border-[rgba(19,40,75,0.28)] px-8 py-4 font-bold text-[var(--blue-deep)] transition-colors duration-200 hover:border-[var(--blue-deep)] hover:bg-[var(--blue-soft)]"
              >
                Cancelar
              </button>
              <button
                @click="optimizeImage"
                :disabled="isProcessing"
                class="flex items-center justify-center gap-3 rounded-[4px] bg-[var(--blue-deep)] px-8 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--coral-strong)] disabled:cursor-not-allowed disabled:bg-black/35"
              >
                <span v-if="isProcessing" class="inline-block animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent"></span>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {{ isProcessing ? 'Optimizando...' : 'Optimizar logo' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="optimizedImage" class="animate-slide-up">
        <div class="overflow-hidden rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white shadow-[0_18px_55px_rgba(19,40,75,0.10)]">
          <div class="bg-[var(--blue-deep)] px-6 py-5 md:px-8">
            <div class="flex items-center gap-3">
              <div class="flex h-11 w-11 items-center justify-center border border-white/25 bg-white/10">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">
                  Logo listo para descargar
                </h2>
                <p class="text-white/70">
                  Archivo generado en JPG, 120×120 px y bajo el límite de 10KB.
                </p>
              </div>
            </div>
          </div>

          <div class="grid gap-8 p-6 md:p-8 lg:grid-cols-2">
            <div>
              <h3 class="mb-4 flex items-center gap-2 text-lg font-bold text-[var(--ink)]">
                <svg class="w-5 h-5 text-[var(--blue-deep)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Vista previa
              </h3>
              <div class="rounded-[8px] border border-[rgba(19,40,75,0.12)] bg-[var(--ivory)] p-8">
                <div class="inline-block bg-white p-6 shadow-sm">
                  <img
                    :src="optimizedImage"
                    alt="Logo optimizado"
                    class="max-w-full h-auto"
                    style="width: 120px; height: 120px;"
                  />
                </div>
                <p class="text-xs text-gray-500 text-center mt-4">Tamaño real: 120×120 píxeles</p>
              </div>
            </div>

            <div>
              <h3 class="mb-4 flex items-center gap-2 text-lg font-bold text-[var(--ink)]">
                <svg class="w-5 h-5 text-[var(--blue-deep)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Especificaciones técnicas
              </h3>
              <div class="space-y-3">
                <div class="rounded-[8px] border border-[rgba(19,40,75,0.12)] bg-[var(--ivory)] p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--blue-deep)]">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Dimensiones</span>
                    </div>
                    <span class="rounded-[4px] bg-white px-4 py-1 text-base font-bold text-[var(--ink)]">120×120 px</span>
                  </div>
                </div>

                <div class="rounded-[8px] border border-[rgba(19,40,75,0.12)] bg-[var(--ivory)] p-4">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--coral)]">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Formato</span>
                    </div>
                    <span class="rounded-[4px] bg-white px-4 py-1 text-base font-bold text-[var(--ink)]">JPG</span>
                  </div>
                </div>

                <div class="rounded-[8px] border border-[rgba(19,40,75,0.12)] bg-[var(--ivory)] p-4">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-3">
                      <div class="flex h-10 w-10 items-center justify-center rounded-[8px] bg-[var(--ink)]">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Peso del archivo</span>
                    </div>
                    <span class="rounded-[4px] bg-white px-4 py-1 text-base font-bold text-[var(--ink)]">{{ fileSizeKB }} KB</span>
                  </div>
                  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      class="h-2 rounded-full bg-[var(--coral)] transition-all duration-500"
                      :style="{ width: (parseFloat(fileSizeKB) / 10 * 100) + '%' }"
                    ></div>
                  </div>
                  <p class="text-xs text-gray-500 text-center mt-1">{{ (parseFloat(fileSizeKB) / 10 * 100).toFixed(1) }}% del límite (10 KB)</p>
                </div>

                <div v-if="compressionAttempts > 0" class="bg-black/[0.04] p-3 text-center">
                  <p class="text-xs text-gray-600 flex items-center justify-center gap-2">
                    <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Optimizado en {{ compressionAttempts }} {{ compressionAttempts === 1 ? 'intento' : 'intentos' }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="px-6 pb-8 pt-4 md:px-8">
            <div class="grid gap-3 md:grid-cols-2">
              <button
                @click="resetImage"
                class="flex items-center justify-center gap-2 rounded-[4px] border border-[rgba(19,40,75,0.28)] px-8 py-4 font-bold text-[var(--blue-deep)] transition-colors duration-200 hover:border-[var(--blue-deep)] hover:bg-[var(--blue-soft)]"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Cargar otro logo
              </button>
              <button
                @click="downloadImage"
                class="flex items-center justify-center gap-3 rounded-[4px] bg-[var(--blue-deep)] px-8 py-4 font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:bg-[var(--coral-strong)]"
              >
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Descargar logo.jpg
              </button>
            </div>
          </div>
        </div>
      </div>

      <div v-if="errorMessage" class="mt-6 animate-shake">
        <div class="bg-red-50 rounded-lg p-5 border border-red-200">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-red-800 font-medium">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
      </section>
    </section>

    <section class="mt-20" aria-labelledby="guia-logo-sii">
      <div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
        <div>
          <div class="mb-8 rounded-[8px] border-l-2 border-[var(--coral)] bg-white p-5 shadow-[0_24px_80px_rgba(19,40,75,0.06)]">
            <p class="text-sm font-bold uppercase tracking-wider text-[var(--coral)] mb-2">
              Respuesta rápida
            </p>
            <p class="text-[var(--ink)] leading-relaxed">
              Para poner un logo en una factura del SII, prepara un JPG de 120×120 píxeles y menos de 10KB. Luego entra a Facturación Electrónica MIPYME, abre Administración, selecciona la actualización del logotipo de la empresa, sube la imagen y confirma el cambio.
            </p>
          </div>

          <p class="text-sm font-bold uppercase tracking-wider text-[var(--coral)] mb-3">
            Guía rápida
          </p>
          <h2 id="guia-logo-sii" class="mb-4 text-[clamp(2rem,4.2vw,3.1rem)] font-[760] leading-[1.06] text-[var(--ink)]">
            Cómo preparar el logo para una factura del SII
          </h2>
          <div class="space-y-4 text-[var(--stone)] leading-relaxed">
            <p>
              El facturador electrónico del Servicio de Impuestos Internos pide un archivo muy específico. Si el logo pesa demasiado, tiene otro formato o no es cuadrado, puede verse mal o no cargarse correctamente.
            </p>
            <p>
              Esta herramienta toma tu imagen original, te permite elegir el encuadre y genera un JPG listo para subir al SII. No necesitas instalar programas ni ajustar medidas a mano.
            </p>
            <p>
              Después de descargar el archivo, el cambio se realiza en el portal del SII: entra a Facturación Electrónica MIPYME, abre Administración y usa la opción de actualización del logotipo de la empresa.
            </p>
          </div>
          <a
            href="https://www.sii.cl/portales/mipyme/administracion_datos/Guia_Cambiar_Logo.html"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-2 mt-6 text-sm font-bold text-[var(--blue-deep)] hover:text-[var(--coral-strong)] hover:underline"
          >
            Ver guía oficial del SII para cambiar el logo
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 17L17 7M17 7H8m9 0v9" />
            </svg>
          </a>
        </div>

        <div class="rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white p-6 shadow-[0_24px_80px_rgba(19,40,75,0.06)]">
          <h3 class="text-lg font-bold text-[var(--ink)] mb-4">
            Requisitos del logo para el SII
          </h3>
          <dl class="space-y-4">
            <div class="flex items-center justify-between gap-4 border-b border-stone-100 pb-3">
              <dt class="text-sm text-[var(--stone)]">Dimensiones</dt>
              <dd class="text-sm font-bold text-[var(--ink)]">120×120 px</dd>
            </div>
            <div class="flex items-center justify-between gap-4 border-b border-stone-100 pb-3">
              <dt class="text-sm text-[var(--stone)]">Formato final</dt>
              <dd class="text-sm font-bold text-[var(--ink)]">JPG</dd>
            </div>
            <div class="flex items-center justify-between gap-4 border-b border-stone-100 pb-3">
              <dt class="text-sm text-[var(--stone)]">Peso máximo</dt>
              <dd class="text-sm font-bold text-[var(--ink)]">10KB</dd>
            </div>
            <div class="flex items-center justify-between gap-4">
              <dt class="text-sm text-[var(--stone)]">Uso habitual</dt>
              <dd class="text-sm font-bold text-[var(--ink)] text-right">Factura electrónica SII</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="mt-14" aria-labelledby="preguntas-logo-sii">
      <h2 id="preguntas-logo-sii" class="text-2xl md:text-3xl font-bold text-[var(--ink)] mb-6">
        Preguntas frecuentes sobre el logo para facturas del SII
      </h2>
      <div class="grid md:grid-cols-2 gap-4">
        <article class="rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white p-6">
          <h3 class="font-bold text-[var(--ink)] mb-2">
            ¿Qué tamaño debe tener el logo para el SII?
          </h3>
          <p class="text-[var(--stone)] leading-relaxed">
            El archivo final debe quedar en 120×120 píxeles. Un formato cuadrado evita que el logo se deforme al aparecer en la factura.
          </p>
        </article>

        <article class="rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white p-6">
          <h3 class="font-bold text-[var(--ink)] mb-2">
            ¿Cómo poner o cambiar el logo en la factura del SII?
          </h3>
          <p class="text-[var(--stone)] leading-relaxed">
            Primero descarga el JPG optimizado. Luego entra a Facturación Electrónica MIPYME en el SII, abre Administración, selecciona la actualización del logotipo, indica el RUT de la empresa, sube la imagen y confirma el cambio.
          </p>
        </article>

        <article class="rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white p-6">
          <h3 class="font-bold text-[var(--ink)] mb-2">
            ¿Sirve si mi logo está en PNG?
          </h3>
          <p class="text-[var(--stone)] leading-relaxed">
            Sí. Puedes cargar un PNG, JPG o GIF. La herramienta entrega un JPG con fondo blanco, listo para cumplir el formato requerido.
          </p>
        </article>

        <article class="rounded-[8px] border border-[rgba(19,40,75,0.16)] bg-white p-6">
          <h3 class="font-bold text-[var(--ink)] mb-2">
            ¿La imagen se sube a un servidor?
          </h3>
          <p class="text-[var(--stone)] leading-relaxed">
            No. El recorte y la compresión se procesan en tu navegador. Tu imagen no se envía a Latitud Media para generar el archivo.
          </p>
        </article>
      </div>
    </section>

    </main>

    <footer class="mt-16 bg-[#202329] text-white">
      <div class="mx-auto grid w-full max-w-[1180px] gap-5 px-4 py-10 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <a href="https://latitudmedia.cl/" target="_blank" rel="noopener noreferrer" class="inline-flex">
            <img src="/assets/logos/latitud-logo-white.svg" alt="Latitud Media" width="109" height="30" loading="lazy" decoding="async" class="h-[30px] w-auto" />
          </a>
          <p class="mt-4 text-sm text-white/50">
            Utilidad gratuita para preparar logos para el facturador electrónico del SII.
          </p>
        </div>
        <button
          @click="showTerms = true"
          class="justify-self-start p-0 text-sm text-white/60 transition-colors hover:text-white hover:underline md:justify-self-end"
        >
          Términos y condiciones
        </button>
      </div>
    </footer>

    <TermsModal v-if="showTerms" :isOpen="showTerms" @close="showTerms = false" />
  </div>
</template>

<script setup>
import { defineAsyncComponent, ref, onBeforeUnmount } from 'vue'

const TermsModal = defineAsyncComponent(() => import('./TermsModal.vue'))

// Referencias
const fileInput = ref(null)
const cropperImage = ref(null)
const isDragging = ref(false)
const imageLoaded = ref(false)
const originalImageUrl = ref('')
const optimizedImage = ref(null)
const fileSizeKB = ref(0)
const isProcessing = ref(false)
const errorMessage = ref('')
const compressionAttempts = ref(0)
const showTerms = ref(false)

let cropper = null
let CropperConstructor = null

const loadCropper = async () => {
  if (!CropperConstructor) {
    const [cropperModule] = await Promise.all([
      import('cropperjs'),
      import('cropperjs/dist/cropper.css'),
    ])
    CropperConstructor = cropperModule.default
  }

  return CropperConstructor
}

// Función para activar el input de archivo
const triggerFileInput = () => {
  fileInput.value?.click()
}

// Manejo de archivo seleccionado
const handleFileSelect = (event) => {
  const file = event.target.files?.[0]
  if (file) {
    loadImage(file)
  }
}

// Manejo de archivo arrastrado
const handleDrop = (event) => {
  isDragging.value = false
  const file = event.dataTransfer.files?.[0]
  if (file && file.type.startsWith('image/')) {
    loadImage(file)
  } else {
    showError('Por favor, arrastra un archivo de imagen válido')
  }
}

// Cargar imagen
const loadImage = (file) => {
  if (!file.type.startsWith('image/')) {
    showError('El archivo debe ser una imagen')
    return
  }

  const reader = new FileReader()
  reader.onload = (e) => {
    originalImageUrl.value = e.target.result
    imageLoaded.value = true
    errorMessage.value = ''
    
    // Inicializar Cropper en el próximo tick
    setTimeout(() => {
      void initCropper()
    }, 100)
  }
  reader.readAsDataURL(file)
}

// Inicializar Cropper
const initCropper = async () => {
  if (cropper) {
    cropper.destroy()
  }
  
  if (cropperImage.value) {
    const Cropper = await loadCropper()

    if (!cropperImage.value || !imageLoaded.value) return

    cropper = new Cropper(cropperImage.value, {
      aspectRatio: 1,
      viewMode: 1,
      dragMode: 'move',
      autoCropArea: 1,
      restore: false,
      guides: true,
      center: true,
      highlight: false,
      cropBoxMovable: true,
      cropBoxResizable: true,
      toggleDragModeOnDblclick: false,
    })
  }
}

// Optimizar imagen
const optimizeImage = async () => {
  if (!cropper) return

  isProcessing.value = true
  errorMessage.value = ''
  compressionAttempts.value = 0

  try {
    // Obtener el canvas recortado
    const canvas = cropper.getCroppedCanvas({
      width: 120,
      height: 120,
      fillColor: '#ffffff',
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
    })

    // Convertir a blob y optimizar
    await compressToTarget(flattenCanvasForJpeg(canvas))
  } catch (error) {
    showError('Error al procesar la imagen: ' + error.message)
  } finally {
    isProcessing.value = false
  }
}

// JPG no soporta transparencia: aplanar PNG/GIF transparentes sobre blanco.
const flattenCanvasForJpeg = (sourceCanvas) => {
  const canvas = document.createElement('canvas')
  canvas.width = sourceCanvas.width
  canvas.height = sourceCanvas.height

  const context = canvas.getContext('2d')
  context.fillStyle = '#ffffff'
  context.fillRect(0, 0, canvas.width, canvas.height)
  context.drawImage(sourceCanvas, 0, 0)

  return canvas
}

// Comprimir imagen hasta que sea menor a 10KB
const compressToTarget = async (canvas) => {
  const maxSizeKB = 10
  let quality = 0.95
  let attempt = 0
  const maxAttempts = 20

  while (attempt < maxAttempts) {
    attempt++
    compressionAttempts.value = attempt

    // Convertir canvas a blob
    const blob = await new Promise((resolve) => {
      canvas.toBlob((blob) => resolve(blob), 'image/jpeg', quality)
    })

    const sizeKB = blob.size / 1024

    if (sizeKB < maxSizeKB) {
      // Éxito: la imagen es menor a 10KB
      optimizedImage.value = URL.createObjectURL(blob)
      fileSizeKB.value = sizeKB.toFixed(2)
      return
    }

    // Reducir calidad para el siguiente intento
    quality -= 0.05

    if (quality < 0.1) {
      throw new Error('No se pudo reducir la imagen a menos de 10KB manteniendo calidad aceptable')
    }
  }

  throw new Error('Se alcanzó el máximo de intentos de compresión')
}

// Descargar imagen optimizada
const downloadImage = () => {
  if (!optimizedImage.value) return

  const link = document.createElement('a')
  link.href = optimizedImage.value
  link.download = 'logo_sii_120x120.jpg'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

// Resetear y empezar de nuevo
const resetImage = () => {
  if (cropper) {
    cropper.destroy()
    cropper = null
  }
  
  if (originalImageUrl.value) {
    URL.revokeObjectURL(originalImageUrl.value)
  }
  
  if (optimizedImage.value) {
    URL.revokeObjectURL(optimizedImage.value)
  }

  imageLoaded.value = false
  originalImageUrl.value = ''
  optimizedImage.value = null
  fileSizeKB.value = 0
  errorMessage.value = ''
  compressionAttempts.value = 0
  
  if (fileInput.value) {
    fileInput.value.value = ''
  }
}

// Mostrar error
const showError = (message) => {
  errorMessage.value = message
  setTimeout(() => {
    errorMessage.value = ''
  }, 5000)
}

// Limpiar al desmontar
onBeforeUnmount(() => {
  if (cropper) {
    cropper.destroy()
  }
  
  if (originalImageUrl.value) {
    URL.revokeObjectURL(originalImageUrl.value)
  }
  
  if (optimizedImage.value) {
    URL.revokeObjectURL(optimizedImage.value)
  }
})
</script>

<style scoped>
/* Animaciones personalizadas */
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes shake {
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-5px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(5px);
  }
}

.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}

.animate-slide-up {
  animation: slide-up 0.6s ease-out;
}

.animate-shake {
  animation: shake 0.5s ease-in-out;
}

/* Mejorar la apariencia del cropper */
:deep(.cropper-view-box) {
  outline: 2px solid var(--blue-deep);
  outline-offset: -1px;
}

:deep(.cropper-face) {
  background-color: rgba(15, 47, 74, 0.1) !important;
}

:deep(.cropper-line) {
  background-color: var(--blue-deep);
  opacity: 0.8;
}

:deep(.cropper-point) {
  background-color: var(--coral);
  opacity: 1;
  width: 8px;
  height: 8px;
}

:deep(.cropper-point.point-se) {
  width: 12px;
  height: 12px;
}
</style>
