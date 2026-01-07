# Optimizador de Logos SII Chile

Herramienta web para optimizar logos según los requisitos del Servicio de Impuestos Internos de Chile.

## 🎯 Características

- **Carga flexible**: Arrastra y suelta o selecciona archivos
- **Recorte preciso**: Interfaz de recorte con relación de aspecto 1:1 forzada
- **Optimización automática**: 
  - Redimensiona a exactamente 120x120 píxeles
  - Convierte a formato JPG
  - Ajusta la calidad hasta lograr menos de 10 KB
- **Vista previa**: Muestra el resultado con especificaciones técnicas
- **Descarga directa**: Obtén tu logo optimizado listo para usar

## 🚀 Instalación

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build
```

## 📋 Requisitos del SII

El facturador electrónico del SII Chile requiere logos con estas especificaciones:

- **Dimensiones**: 120 x 120 píxeles (exacto)
- **Formato**: JPG/JPEG
- **Peso máximo**: 10 KB

Esta herramienta garantiza que tu logo cumpla con todos estos requisitos automáticamente.

## 🛠️ Tecnologías

- **Vue 3** (Composition API con Script Setup)
- **Vite** (Build tool)
- **Tailwind CSS** (Estilos)
- **Cropper.js** (Recorte de imágenes)
- **Canvas API** (Redimensionado y optimización)

## 📖 Uso

1. **Carga tu logo**: Arrastra la imagen o haz clic para seleccionarla
2. **Recorta**: Ajusta el área de recorte para mantener la parte importante
3. **Optimiza**: Haz clic en "Optimizar Logo" y espera el procesamiento
4. **Descarga**: Obtén tu logo optimizado listo para el SII

## 📝 Licencia

MIT
