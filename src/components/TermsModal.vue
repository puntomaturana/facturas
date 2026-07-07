<template>
  <div v-if="isOpen" class="fixed inset-0 z-50 flex items-center justify-center p-4">
    <!-- Fondo oscuro semi-transparente -->
    <div class="absolute inset-0 bg-black/55 backdrop-blur-sm" @click="close"></div>
    
    <!-- Modal -->
    <div class="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto bg-[var(--ivory)] shadow-2xl">
      <!-- Header -->
      <div class="sticky top-0 flex items-center justify-between bg-[var(--ink)] px-8 py-6">
        <h2 class="text-2xl font-bold text-white">Términos y condiciones</h2>
        <button
          @click="close"
          class="text-2xl leading-none text-white/80 hover:text-white"
        >
          ✕
        </button>
      </div>
      
      <!-- Contenido -->
      <div class="space-y-6 px-8 py-6 text-sm leading-relaxed text-black/70">
        <section>
          <h3 class="mb-3 text-lg font-bold text-[var(--ink)]">1. Privacidad y Seguridad de Datos</h3>
          <p>
            En el optimizador de logos para el SII de Chile, tu privacidad es nuestra prioridad. <strong>Ninguna imagen ni archivo que cargues se almacenará en nuestros servidores.</strong> Todo el procesamiento se realiza exclusivamente en tu navegador.
          </p>
        </section>

        <section>
          <h3 class="mb-3 text-lg font-bold text-[var(--ink)]">2. Procesamiento Local de Imágenes</h3>
          <p>
            El redimensionado, recorte y optimización de tu logo se ejecutan completamente en tu dispositivo. Los datos nunca se transmiten a servidores externos para procesamiento. Cuando cierres esta herramienta o recargues la página, toda la información se descarta automáticamente.
          </p>
        </section>

        <section>
          <h3 class="mb-3 text-lg font-bold text-[var(--ink)]">3. Google Analytics</h3>
          <p>
            Utilizamos Google Analytics para recopilar información anónima sobre el uso de esta herramienta (páginas visitadas, tiempo en sitio, dispositivo usado, etc.). <strong>Esta información NO incluye detalles de las imágenes que procesas.</strong> Google Analytics nos ayuda a mejorar la experiencia del usuario.
          </p>
        </section>

        <section>
          <h3 class="mb-3 text-lg font-bold text-[var(--ink)]">4. Cookies</h3>
          <p>
            Esta herramienta puede utilizar cookies estándar para mejorar tu experiencia. No se guardan datos de las imágenes procesadas en las cookies.
          </p>
        </section>

        <section>
          <h3 class="mb-3 text-lg font-bold text-[var(--ink)]">5. Responsabilidad</h3>
          <p>
            Esta herramienta se entrega "tal como está" sin garantías expresas. El usuario es responsable de cumplir con los requisitos técnicos del SII de Chile. Nos eximimos de responsabilidad por cualquier inconveniente derivado del uso de esta herramienta.
          </p>
        </section>

        <section>
          <h3 class="mb-3 text-lg font-bold text-[var(--ink)]">6. Contacto</h3>
          <p>
            Para consultas sobre privacidad o términos, contáctanos en <a href="https://latitudmedia.cl" target="_blank" class="font-semibold text-[var(--coral)] hover:underline">latitudmedia.cl</a>
          </p>
        </section>

        <section class="border-t border-black/10 pt-4">
          <p class="text-xs text-black/45">
            Última actualización: {{ new Date().toLocaleDateString('es-CL') }}
          </p>
        </section>
      </div>

      <!-- Footer del modal -->
      <div class="sticky bottom-0 border-t border-black/10 bg-[var(--ivory)] px-8 py-4">
        <button
          @click="close"
          class="w-full rounded-[4px] bg-[var(--blue-deep)] px-6 py-3 font-semibold text-white transition-colors hover:bg-[var(--coral-strong)]"
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
