<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Fondo oscuro semi-transparente -->
    <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="close"></div>
    
    <!-- Modal -->
    <div class="relative bg-white shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
      <!-- Header -->
      <div class="sticky top-0 bg-gray-900 px-8 py-6 flex items-center justify-between">
        <h2 class="text-2xl font-bold text-white">Términos y Condiciones</h2>
        <button
          @click="close"
          class="text-white/80 hover:text-white text-2xl leading-none"
        >
          ✕
        </button>
      </div>
      
      <!-- Contenido -->
      <div class="px-8 py-6 space-y-6 text-gray-700 text-sm leading-relaxed">
        <section>
          <h3 class="text-lg font-bold text-gray-900 mb-3">1. Privacidad y Seguridad de Datos</h3>
          <p>
            En el Optimizador de Logos para SII Chile, tu privacidad es nuestra prioridad. <strong>Ninguna imagen o archivo que cargues será almacenado en nuestros servidores.</strong> Todo el procesamiento se realiza exclusivamente en tu navegador (browser).
          </p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-gray-900 mb-3">2. Procesamiento Local de Imágenes</h3>
          <p>
            El redimensionado, recorte y optimización de tu logo se ejecutan completamente en tu dispositivo. Los datos nunca se transmiten a servidores externos para procesamiento. Cuando cierres esta herramienta o recargues la página, toda la información se descarta automáticamente.
          </p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-gray-900 mb-3">3. Google Analytics</h3>
          <p>
            Utilizamos Google Analytics para recopilar información anónima sobre el uso de esta herramienta (páginas visitadas, tiempo en sitio, dispositivo usado, etc.). <strong>Esta información NO incluye detalles de las imágenes que procesas.</strong> Google Analytics nos ayuda a mejorar la experiencia del usuario.
          </p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-gray-900 mb-3">4. Cookies</h3>
          <p>
            Esta herramienta puede utilizar cookies estándar para mejorar tu experiencia. No se guardan datos de las imágenes procesadas en las cookies.
          </p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-gray-900 mb-3">5. Responsabilidad</h3>
          <p>
            Esta herramienta se proporciona "tal como está" sin garantías expresas. El usuario es responsable de cumplir con los requisitos técnicos del SII Chile. Nos eximimos de responsabilidad por cualquier inconveniente derivado del uso de esta herramienta.
          </p>
        </section>

        <section>
          <h3 class="text-lg font-bold text-gray-900 mb-3">6. Contacto</h3>
          <p>
            Para consultas sobre privacidad o términos, contáctanos en <a href="https://latitudmedia.cl" target="_blank" class="text-orange-600 hover:underline">latitudmedia.cl</a>
          </p>
        </section>

        <section class="pt-4 border-t border-gray-200">
          <p class="text-xs text-gray-500">
            Última actualización: {{ new Date().toLocaleDateString('es-CL') }}
          </p>
        </section>
      </div>

      <!-- Footer del modal -->
      <div class="border-t border-gray-200 px-8 py-4 bg-gray-50 sticky bottom-0">
        <button
          @click="close"
          class="w-full px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors font-semibold"
        >
          Entendido
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

defineProps({
  isOpen: Boolean
})

const emit = defineEmits(['close'])

const close = () => {
  emit('close')
}
</script>

<style scoped>
/* Estilos para el scroll del modal */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
