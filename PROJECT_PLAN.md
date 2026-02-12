# 🌿 Plan Maestro: Oasis - Beauty & Wellness Boutique

Este documento detalla la hoja de ruta estratégica y técnica para construir la presencia digital de **Oasis**, un santuario de belleza y bienestar. El objetivo es crear una experiencia web que refleje elegancia, calma y exclusividad, optimizada para convertir visitantes en clientes a través de una integración fluida con Calendly.

## 1. Identidad de Marca y Estrategia

### 1.1 El Corazón de Oasis
*   **Misión**: Crear un santuario de calma donde la belleza y el descanso se encuentran.
*   **Visión**: Ser el referente de elegancia y servicio personalizado, no un spa más, sino una experiencia indispensable.
*   **Arquetipo**: "El Cuidador Elegante" (Amable, suave, atento, anfitrión de lujo).
*   **Eslogan**: "Tu refugio de belleza."

### 1.2 Perfil del Cliente (Avatar)
Mujeres (25-60 años) profesionales o amas de casa ocupadas que no solo buscan "uñas bonitas", sino **tiempo de calidad** y desconexión.
*   *Dolores*: Salones ruidosos tipo "fábrica", falta de higiene, olores fuertes, estrés.
*   *Deseos*: Silencio, higiene impecable, trato personalizado, confort absoluto.

### 1.3 Estética Visual (Moodboard Digital)
*   **Paleta de Colores**:
    *   🟢 **Primario**: Verde Esmeralda Profundo (Lujo, naturaleza, calma).
    *   🟡 **Acento**: Dorado / Gold (Elegancia, calidad premium).
    *   ⚪ **Base**: Blanco Crema / Off-White (Limpieza, amplitud).
    *   🟤 **Secundario**: Tonos Nude/Arena (Conexión con la piel).
*   **Tipografía**:
    *   *Títulos*: Serif (con remates finos, estilo editorial/moda) -> Ej: *Playfair Display* o *Cinzel*.
    *   *Cuerpo*: Sans Serif (limpia, minimalista) -> Ej: *Lato* o *Montserrat*.

---

## 2. Arquitectura de la Información (Estructura de la Landing)

Diseñada para transicionar al usuario del "caos" a la "clama" y luego a la "acción".

1.  **Hero Section (La Bienvenida)**
    *   **Fondo**: Video o imagen de alta calidad (Toallas blancas, plantas, luz cálida) con superposición suave.
    *   **H1**: "Tu refugio de belleza en medio del caos."
    *   **Subtítulo**: "Descubre una experiencia de manicura y bienestar diseñada para tu descanso."
    *   **CTA Principal**: "Reservar mi Momento" (Botón Dorado/Esmeralda).

2.  **El Diferenciador (No somos una fábrica)**
    *   Comparativa sutil: "Olvídate del ruido y las prisas".
    *   Enfoque en valores: Higiene clínica, confort absoluto, silencio.

3.  **Menú de Servicios (El Ritual)**
    *   Diseño visual limpio, no una lista de precios aburrida.
    *   **Manicura y Pedicura Spa**: "Más que color, un tratamiento".
    *   **Masajes Relajantes**: "Desconecta cuerpo y mente".
    *   **Diseño de Mirada**: Cejas y pestañas.
    *   *CTA Secundario*: "Ver Menú Completo".

4.  **Galería "Look & Feel"**
    *   Fotos de detalles: Texturas de mármol, herramientas esterilizadas, manos perfectas, té de cortesía.
    *   Objetivo: Que el cliente se *visualice* ahí.

5.  **Testimonios (La Voz de la Experiencia)**
    *   Citas de clientes reales enfatizando la "calma" y el "trato".

6.  **Ubicación y Contacto (Tu Escape)**
    *   Mapa estilizado.
    *   Link directo a WhatsApp y dirección.

7.  **Footer Minimalista**
    *   Redes sociales, enlaces legales, derechos reservados.

---

## 3. Estrategia Técnica y SEO

### Stack Tecnológico
*   **Framework**: Next.js 14 (App Router) para velocidad instantánea.
*   **Estilos**: Tailwind CSS con configuración personalizada de colores (Oasis Emerald, Oasis Gold).
*   **Animaciones**: Framer Motion para transiciones suaves (fade-ins lentos, parallax sutil) que transmitan calma.

### Integración Calendly (Flujo Eficiente)
*   **Embed Estilizado**: Personalizar el widget de Calendly para ocultar el branding de Calendly lo más posible y usar los colores de la marca.
*   **Pre-llenado**: Si vienen de un email, pre-llenar sus datos.
*   **Redirección**: Al terminar la cita, redirigir a una "Thank You Page" en el sitio web (clave para medir conversiones en Facebook/Google Ads).

### SEO Local (Clave para Negocios Físicos)
*   **Google My Business**: Integrar mapa y link a reviews.
*   **Keywords**: "Spa de uñas [Ciudad]", "Manicura relajante [Zona]", "Mejor diseño de cejas [Ciudad]".
*   **Schema Markup**: `LocalBusiness` y `BeautySalon` para aparecer en mapas enriquecidos.

---

## 4. Plan de Acción Inmediato

1.  **Configuración del Proyecto**:
    *   Iniciar repositorio Next.js.
    *   Configurar `tailwind.config.ts` con la paleta de colores Oasis.
    *   Instalar fuentes (Serif para títulos, Sans para textos).

2.  **Desarrollo del "Design System"**:
    *   Crear componentes base: Botones (Gold), Tarjetas de servicio (Minimal), Inputs.

3.  **Construcción de Secciones**:
    *   Hero -> Servicios -> Nosotros -> Contacto.

4.  **Integración de Agendamiento**:
    *   Conectar Calendly y probar flujo de reserva móvil.

5.  **Optimización Final**:
    *   Ajuste de imágenes (WebP), SEO tags, sitemap.
