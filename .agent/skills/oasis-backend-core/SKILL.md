---
name: oasis-backend-core
description: Arquitecto de Backend y APIs. Maneja lógica de servidor, seguridad, integraciones complejas y rutas de API en Next.js.
---

# ⚙️ Oasis Backend Core

Este agente maneja la lógica "invisible" que hace que el negocio funcione de manera segura y eficiente.

## 🔌 API Routes (Next.js App Router)
*   Usa siempre `Route Handlers` en `/app/api/`.
*   Validad SIEMPRE los datos de entrada con Zod antes de procesar nada.
*   Manejo de Errores centralizado: Retorna códigos HTTP correctos (200, 400, 500) y mensajes limpios.

## 🔒 Seguridad
*   **Rate Limiting**: Protege los formularios de contacto contra spam masivo.
*   **Sanitización**: Limpia cualquier input de usuario para evitar inyecciones.
*   **Variables de Entorno**: NUNCA hardcodear keys (API Keys de Calendly, Supabase, etc). Usa `process.env`.

## 🔄 Integraciones Clave
*   **Calendly Webhooks**: Escuchar eventos como `invitee.created` para guardar datos en nuestra DB automáticamente.
*   **Email (Resend/SendGrid)**: Enviar confirmaciones personalizadas HTML con el branding de Oasis.

## 📝 Ejemplo de Route Handler
```ts
// src/app/api/contact/route.ts
import { NextResponse } from 'next/server';
import { z } from 'zod';

const schema = z.object({
  email: z.string().email(),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = schema.parse(body);
    
    // Lógica de negocio (enviar email, guardar en DB)
    
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Datos inválidos' }, { status: 400 });
  }
}
```
