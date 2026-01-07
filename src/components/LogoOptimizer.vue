<template>
  <div class="min-h-screen py-12 px-4 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
    <!-- Encabezado con diseño moderno -->
    <div class="text-center mb-12 animate-fade-in">
      <!-- Logo de la aplicación -->
      <div class="mb-6 flex justify-center">
        <img src="../assets/optimiza.svg" alt="Optimizador de Logos para el Facturador Electrónico del SII Chile" class="h-24 w-auto drop-shadow-2xl hover:scale-105 transition-transform duration-300" />
      </div>
      
      <!-- Texto para SEO - Visualmente oculto pero accesible para buscadores -->
      <h1 class="sr-only">Optimizador de Logos SII Chile</h1>
      <p class="sr-only">Ajusta tu logo según los requisitos del Servicio de Impuestos Internos de Chile para el facturador electrónico</p>
      
      <p class="text-lg text-gray-600 max-w-2xl mx-auto mb-6">
        Ajusta tu logo según los requisitos del Servicio de Impuestos Internos
      </p>
      
      <!-- Badge con requisitos - Glassmorphism -->
      <div class="inline-block backdrop-blur-xl bg-white/70 border border-white/50 rounded-2xl px-8 py-4 shadow-2xl">
        <div class="flex items-center gap-3">
          <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span class="text-sm font-medium text-gray-700">
            <span class="font-bold text-blue-900">Requisitos:</span> 120×120px • JPG • Máx. 10KB
          </span>
        </div>
      </div>
    </div>

    <!-- Contenedor principal con glassmorphism -->
    <div class="max-w-6xl mx-auto">
      <!-- Área de carga con diseño moderno -->
      <div v-if="!imageLoaded" class="mb-8 animate-slide-up">
        <div
          @drop.prevent="handleDrop"
          @dragover.prevent
          @dragenter.prevent="isDragging = true"
          @dragleave.prevent="isDragging = false"
          :class="[
            'relative overflow-hidden backdrop-blur-xl rounded-3xl p-16 text-center transition-all duration-300 cursor-pointer group',
            isDragging 
              ? 'bg-gradient-to-br from-blue-500/30 to-indigo-500/30 border-2 border-blue-500 scale-105 shadow-2xl' 
              : 'bg-white/60 border-2 border-dashed border-gray-300 hover:border-blue-400 hover:bg-white/80 shadow-xl hover:shadow-2xl'
          ]"
          @click="triggerFileInput"
        >
          <!-- Patrón de fondo decorativo -->
          <div class="absolute inset-0 opacity-5">
            <div class="absolute inset-0" style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 20px 20px;"></div>
          </div>
          
          <div class="relative space-y-6">
            <!-- Icono con animación -->
            <div class="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 shadow-xl transform transition-transform group-hover:scale-110 group-hover:rotate-3">
              <svg
                class="w-12 h-12 text-white"
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
              <p class="text-2xl text-gray-800 font-bold mb-2">
                Arrastra tu logo aquí
              </p>
              <p class="text-base text-gray-600">
                o haz clic para seleccionar desde tu equipo
              </p>
            </div>
            
            <div class="flex items-center justify-center gap-3 text-sm text-gray-500">
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

      <!-- Área de edición con layout de dos columnas -->
      <div v-if="imageLoaded && !optimizedImage" class="animate-slide-up">
        <div class="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <div class="bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-6">
            <h2 class="text-2xl font-bold text-white flex items-center gap-3">
              <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z" />
              </svg>
              Recorta tu logo
            </h2>
            <p class="text-blue-100 mt-1">
              Ajusta el área de recorte para mantener la parte más importante
            </p>
          </div>
          
          <div class="p-8">
            <div class="rounded-2xl overflow-hidden shadow-inner bg-gray-100/50 mb-8">
              <img ref="cropperImage" :src="originalImageUrl" alt="Imagen para recortar" />
            </div>

            <div class="flex gap-4">
              <button
                @click="resetImage"
                class="flex-1 px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Cancelar
              </button>
              <button
                @click="optimizeImage"
                :disabled="isProcessing"
                class="flex-1 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 disabled:from-gray-400 disabled:to-gray-500 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95"
              >
                <span v-if="isProcessing" class="inline-block animate-spin rounded-full h-5 w-5 border-3 border-white border-t-transparent"></span>
                <svg v-else class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                {{ isProcessing ? 'Optimizando...' : 'Optimizar Logo' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Resultado optimizado - Layout de dos columnas -->
      <div v-if="optimizedImage" class="animate-slide-up">
        <div class="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
          <!-- Header de éxito -->
          <div class="bg-gradient-to-r from-green-500 to-emerald-600 px-8 py-6">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h2 class="text-2xl font-bold text-white">
                  ¡Logo optimizado exitosamente!
                </h2>
                <p class="text-green-100">
                  Tu logo cumple con todos los requisitos del SII Chile
                </p>
              </div>
            </div>
          </div>

          <!-- Grid de dos columnas -->
          <div class="grid lg:grid-cols-2 gap-8 p-8">
            <!-- Columna izquierda: Previsualización -->
            <div>
              <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Vista previa
              </h3>
              <div class="backdrop-blur-sm bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 border-2 border-gray-200 shadow-inner">
                <div class="bg-white rounded-xl p-6 shadow-lg inline-block">
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

            <!-- Columna derecha: Especificaciones -->
            <div>
              <h3 class="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Especificaciones técnicas
              </h3>
              <div class="space-y-3">
                <!-- Badge de dimensiones -->
                <div class="backdrop-blur-sm bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border-2 border-green-200 shadow-lg">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Dimensiones</span>
                    </div>
                    <span class="text-base font-bold text-green-700 bg-green-100 px-4 py-1 rounded-full">120×120 px</span>
                  </div>
                </div>

                <!-- Badge de formato -->
                <div class="backdrop-blur-sm bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 border-2 border-blue-200 shadow-lg">
                  <div class="flex items-center justify-between">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Formato</span>
                    </div>
                    <span class="text-base font-bold text-blue-700 bg-blue-100 px-4 py-1 rounded-full">JPG</span>
                  </div>
                </div>

                <!-- Badge de tamaño con indicador -->
                <div class="backdrop-blur-sm bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border-2 border-purple-200 shadow-lg">
                  <div class="flex items-center justify-between mb-2">
                    <div class="flex items-center gap-3">
                      <div class="w-10 h-10 rounded-full bg-purple-500 flex items-center justify-center">
                        <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <span class="text-sm font-medium text-gray-700">Peso del archivo</span>
                    </div>
                    <span class="text-base font-bold text-purple-700 bg-purple-100 px-4 py-1 rounded-full">{{ fileSizeKB }} KB</span>
                  </div>
                  <!-- Barra de progreso -->
                  <div class="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <div 
                      class="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
                      :style="{ width: (parseFloat(fileSizeKB) / 10 * 100) + '%' }"
                    ></div>
                  </div>
                  <p class="text-xs text-gray-500 text-center mt-1">{{ (parseFloat(fileSizeKB) / 10 * 100).toFixed(1) }}% del límite (10 KB)</p>
                </div>

                <!-- Info de optimización -->
                <div v-if="compressionAttempts > 0" class="text-center p-3 bg-gray-100 rounded-lg">
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

          <!-- Botones de acción -->
          <div class="px-8 pb-8 pt-4">
            <div class="grid grid-cols-2 gap-4">
              <button
                @click="resetImage"
                class="px-8 py-4 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Cargar otro logo
              </button>
              <button
                @click="downloadImage"
                class="px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold hover:from-green-600 hover:to-emerald-700 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 transform hover:scale-105 active:scale-95"
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

      <!-- Mensaje de error con diseño moderno -->
      <div v-if="errorMessage" class="mt-6 animate-shake">
        <div class="backdrop-blur-xl bg-red-500/90 rounded-2xl p-5 shadow-2xl border border-red-400">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <p class="text-white font-medium">{{ errorMessage }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

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

let cropper = null

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
      initCropper()
    }, 100)
  }
  reader.readAsDataURL(file)
}

// Inicializar Cropper
const initCropper = () => {
  if (cropper) {
    cropper.destroy()
  }
  
  if (cropperImage.value) {
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
      imageSmoothingEnabled: true,
      imageSmoothingQuality: 'high',
    })

    // Convertir a blob y optimizar
    await compressToTarget(canvas)
  } catch (error) {
    showError('Error al procesar la imagen: ' + error.message)
  } finally {
    isProcessing.value = false
  }
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
  outline: 2px solid #3b82f6;
  outline-offset: -1px;
  border-radius: 8px;
}

:deep(.cropper-face) {
  background-color: rgba(59, 130, 246, 0.1) !important;
}

:deep(.cropper-line) {
  background-color: #3b82f6;
  opacity: 0.8;
}

:deep(.cropper-point) {
  background-color: #3b82f6;
  opacity: 1;
  width: 8px;
  height: 8px;
  border-radius: 50%;
}

:deep(.cropper-point.point-se) {
  width: 12px;
  height: 12px;
}
</style>
