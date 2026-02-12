---
name: oasis-parallax-gallery
description: >-
  Crea efectos de Parallax Scrolling premium con imágenes.
  Úsalo cuando necesites agregar imágenes que se muevan al hacer scroll,
  crear galerías inmersivas o secciones "hero" con profundidad visual.
  Especializado en el estilo "Lujo Silencioso" de Oasis.
---

# 🖼️ Oasis Parallax Gallery Skill

## Cuándo Usar Esta Habilidad
- Cuando el usuario quiera agregar imágenes con efecto de movimiento al scroll
- Para crear secciones de galería inmersivas
- Para secciones "hero" con profundidad visual
- Cuando se necesite mostrar resultados de clientas con estilo premium

## Componentes Disponibles

### `ParallaxImage`
Componente wrapper que aplica parallax a cualquier imagen.

**Props:**
| Prop | Tipo | Default | Descripción |
|------|------|---------|-------------|
| `src` | string | — | Ruta de la imagen (obligatorio) |
| `alt` | string | — | Texto alternativo para SEO/a11y (obligatorio) |
| `speed` | number | 0.3 | Velocidad del parallax (0.1=sutil, 0.5=dramático) |
| `scale` | boolean | false | Si true, aplica zoom sutil al scrollear |
| `direction` | "up" \| "down" | "up" | Dirección del movimiento |
| `height` | string | "400px" | Altura del contenedor |
| `overlay` | boolean | true | Overlay verde esmeralda sutil |
| `className` | string | "" | Clases adicionales |

**Uso básico:**
```tsx
import { ParallaxImage } from "@/components/ui/ParallaxImage";

<ParallaxImage
  src="/images/client-1.jpg"
  alt="Manicura spa en Oasis"
  speed={0.3}
  scale={true}
/>
```

### `ParallaxGallery`
Sección completa con layout alternado (imagen izq/der) + parallax.

**Uso:**
```tsx
import { ParallaxGallery } from "@/components/sections/ParallaxGallery";
// Se inserta en page.tsx entre las secciones deseadas
```

## Reglas de Diseño (Oasis Brand)

1. **Velocidad Parallax**: Mantener entre 0.2 y 0.4 (nada agresivo)
2. **Overlay**: Siempre usar overlay esmeralda sutil (opacity 10-20%)
3. **Aspect Ratio**: Preferir imágenes verticales (3:4) o cuadradas (1:1)
4. **Texto sobre imagen**: Solo si tiene overlay. Usar blanco + serif
5. **Rendimiento**: Usar `will-change: transform` y `object-fit: cover`
6. **Mobile**: En pantallas < 768px, reducir speed a la mitad

## Cómo Agregar Nuevas Imágenes

1. Colocar la imagen en `/public/images/gallery/`
2. Formato recomendado: WebP o JPG optimizado (< 500KB)
3. Resolución mínima: 1200x800px
4. Agregar entrada al array `GALLERY_ITEMS` en `ParallaxGallery.tsx`

```tsx
// En ParallaxGallery.tsx
const GALLERY_ITEMS = [
  {
    src: "/images/gallery/nueva-imagen.webp",
    alt: "Descripción SEO de la imagen",
    title: "Título visible",
    subtitle: "Subtítulo descriptivo",
  },
];
```

## Árbol de Decisión

```
¿Necesitas una imagen con movimiento al scroll?
├─ Sí, una sola imagen → Usa <ParallaxImage />
├─ Sí, varias imágenes en galería → Usa <ParallaxGallery />
└─ Sí, como fondo de sección → Usa <ParallaxImage /> como wrapper con children
```
