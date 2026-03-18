# Sistema de Diseño de Nufin

Este documento describe la paleta de colores y el estilo general de la aplicación Nufin para mantener la consistencia en todos los diseños.

## Paleta de Colores

Nuestra paleta de colores está diseñada para ser moderna, limpia y transmitir confianza. Se basa en variables CSS definidas en `src/app/globals.css`.

### Colores Principales

- **Fondo (`--background`)**:
  - **HSL:** `252 100% 99%`
  - **HEX:** `#F8F7FF`
  - **Nombre:** `Surface`
  - **Descripción:** Un blanco roto con un ligero matiz púrpura. Se utiliza como color de fondo principal para toda la aplicación, proporcionando una base limpia y aireada.

- **Texto (`--foreground`)**:
  - **HSL:** `220 33% 6%`
  - **HEX:** (aproximadamente `#0E111A`)
  - **Nombre:** `Midnight`
  - **Descripción:** Un azul muy oscuro, casi negro. Se usa para todo el texto principal para garantizar un alto contraste y una excelente legibilidad.

### Colores de Acción

- **Primario (`--primary`)**:
  - **HSL:** `236 78% 75%`
  - **HEX:** `#8E94F2`
  - **Nombre:** `Electric Purple`
  - **Descripción:** Un morado vibrante y amigable. Es el color principal para acciones clave como botones (`<Button>`), enlaces importantes y elementos que requieren la atención del usuario.

- **Acento (`--accent`)**:
  - **HSL:** `199 98% 59%`
  - **HEX:** `#38BDF8`
  - **Nombre:** `Cyan`
  - **Descripción:** Un cian brillante y enérgico. Se utiliza para elementos de acento secundarios, notificaciones sutiles o para destacar información sin la misma jerarquía que el color primario.

### Colores de UI

- **Tarjetas (`--card`)**: `0 0% 100%` (Blanco puro, `#FFFFFF`)
- **Bordes (`--border`)**: `240 5.9% 90%` (Un gris muy claro)
- **Entradas de formulario (`--input`)**: `240 5.9% 90%` (Un gris muy claro)
- **Destructivo (`--destructive`)**: `0 84.2% 60.2%` (Un rojo para acciones de eliminación o error)

## Tipografía

- **Títulos y Encabezados (`font-display`)**: "Plus Jakarta Sans", `font-black`. Es una fuente moderna y con peso, ideal para llamar la atención.
- **Cuerpo de texto (`font-sans`)**: "Inter", `font-medium`. Es una fuente muy legible y versátil, perfecta para párrafos y texto informativo.

## Estilo General

- **Moderno y Limpio:** Se favorece el uso de espacios amplios, esquinas redondeadas (`border-radius: 1rem`) y sombras sutiles para dar profundidad.
- **Profesional y Confiable:** La combinación de un fondo claro con un texto oscuro y colores de acento bien definidos crea una sensación de profesionalismo y confianza.
- **Enfocado en la Experiencia de Usuario:** El diseño está pensado para ser intuitivo. Los colores y la tipografía guían al usuario de forma natural a través del flujo de la aplicación.
