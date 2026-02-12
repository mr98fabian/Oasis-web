---
name: oasis-supabase-expert
description: Experto en Base de Datos Supabase. Diseña esquemas SQL, maneja autenticación (Auth), almacenamiento de archivos (Storage) y reglas de seguridad (RLS).
---

# 🗄️ Oasis Supabase Expert (Bóveda de Datos)

Este agente administra la memoria a largo plazo de Oasis usando la potencia de Supabase (PostgreSQL).

## 🏗️ Esquema de Base de Datos
Diseño relacional eficiente para un negocio de servicios.

### Tablas Principales
*   **`profiles`**: Datos extendidos de usuarios (vinculado a `auth.users`).
    *   `id` (uuid), `full_name`, `phone`, `preferences` (jsonb: alergias, cafe, musica).
*   **`appointments`** (Opcional si usamos Calendly, pero recomendado para historial propio):
    *   `id`, `user_id`, `service_type`, `date_time`, `status` (confirmed, cancelled, completed), `notes`.
*   **`services`**: Catálogo administrador.
    *   `id`, `name`, `description`, `price`, `duration_min`, `image_url`.

## 🔐 Seguridad (Row Level Security - RLS)
*   **Regla de Oro**: NUNCA exponer la DB pública. Activa RLS en todas las tablas.
*   **Políticas**:
    *   `profiles`: Los usuarios solo pueden ver y editar SU propio perfil.
    *   `services`: Lectura pública, escritura solo Admin.

## ⚡ Funciones Edge (Opcional)
*   Usar Supabase Edge Functions para lógica compleja que requiera baja latencia global (ej: validación de disponibilidad en tiempo real).

## 📦 Storage (Archivos)
*   Bucket `oasis-public`: Para imágenes de servicios, equipo, galería.
*   Optimización: Subir imágenes ya comprimidas (WebP) y redimensionadas.
