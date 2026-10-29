# MARVI · Mueblería — Sitio web en Astro

Plantilla moderna para una mueblería, con aspecto editorial, responsive y funcionalidades interactivas. **La página principal concentra el HTML, CSS y JavaScript en un único archivo:** `src/pages/index.astro`.

## Qué contiene

- Hero fotográfico, colecciones de sala/comedor/dormitorio, marca, beneficios, proceso de pedido, contacto y pie de página.
- Catálogo de **12 productos ilustrativos**, filtros, orden por precio/nombre, búsqueda, detalle de producto y favoritos.
- Carrito con cantidades y total **siempre calculado en bolivianos (Bs)**.
- Selector de visualización BOB/USD con conversión **ilustrativa**, no conectada a un tipo de cambio en tiempo real.
- Formulario para **preparar** un pedido; genera un resumen para copiar o compartir por WhatsApp. Incluye modalidad de entrega y notas.
- Personalización de WhatsApp, correo, dirección y horarios desde el enlace «Editar datos del negocio» del pie de página (solo en el navegador actual).
- Mapa interactivo con La Paz como **referencia**, hasta que se establezca la dirección correcta.
- Formulario de consultas que prepara un mensaje para compartir, modo claro/oscuro, navegación móvil, animaciones y botón para subir.
- Los favoritos, carrito, temas, preferencias y pedidos preparados se guardan localmente en el dispositivo mediante `localStorage` (si el navegador lo permite).

## Cómo arrancar el proyecto

Requiere [Bun](https://bun.sh/) (configuración verificada con Bun 1.4.3) y conexión para instalar las dependencias. Se incluye `bun.lock` para instalaciones reproducibles.

```bash
bun install --frozen-lockfile
bun run --bun dev
```

Abre la dirección local que muestra Astro, por lo general `http://localhost:4321`.

Para generar el sitio estático:

```bash
bun run --bun build
bun run --bun preview
```

Los archivos compilados se crean en `dist/`.

**Vista previa instantánea:** también puedes abrir `preview.html` directamente en un navegador sin instalar Astro. Es una copia HTML independiente del mismo diseño e interacciones. Las fotografías, mapa y tipografías externos necesitan internet.

## Calidad y formato

Los comandos usan `--bun` para ejecutar las herramientas con Bun:

```bash
bun run --bun lint          # Comprobar ESLint sin advertencias
bun run --bun lint:fix      # Aplicar correcciones automáticas
bun run --bun format        # Formatear todo el proyecto
bun run --bun format:check  # Verificar formato sin modificar archivos
```

ESLint usa configuración plana en `eslint.config.js`, reglas recomendadas de JavaScript y Astro, y analiza también los scripts incrustados en `src/pages/index.astro` y `preview.html`. Prettier usa `.prettierrc.json` con soporte Astro, dos espacios, comillas simples en JavaScript y punto y coma. Las reglas de formato incompatibles de ESLint se desactivan mediante `eslint-config-prettier`.

Se excluyen las dependencias y los directorios generados (`node_modules/`, `dist/` y `.astro/`); Prettier tampoco modifica el lockfile de Bun. La vista previa HTML es independiente: cualquier cambio funcional debe mantenerse en ambas versiones.

## Comprobación visual y de interacciones

Al modificar la interfaz, revisar la página Astro y la vista previa HTML independiente:

- Probar anchos móviles (320–480 px), tablet (680–1024 px) y escritorio (1280 px o superior), incluyendo orientación horizontal y alturas reducidas. No debe haber desbordamiento horizontal de la página; las categorías del catálogo tienen desplazamiento horizontal propio.
- Comprobar temas claro/oscuro, BOB/USD, filtros, búsqueda sin resultados, favoritos, ordenamiento, detalles del producto y controles del carrito.
- Recorrer el pedido con entrega y recojo, formularios de contacto/novedades y configuración del negocio. Los mensajes se preparan localmente; no enviar datos reales durante las pruebas.
- Navegar con teclado: menú móvil, cierre con Escape, foco contenido en las ventanas y retorno al control que las abrió. Revisar también `prefers-reduced-motion`.
- El catálogo y el carrito generan HTML en JavaScript: sus estilos deben seguir siendo globales para alcanzar esos elementos. Las imágenes tienen tamaños reservados y un reemplazo local si falla una fotografía externa.
- Verificar que datos locales malformados o almacenamiento bloqueado no impidan cargar el catálogo ni utilizar el tema y el carrito.

## Qué personalizar antes de publicar

1. En `src/pages/index.astro`, localiza `DEFAULT_STORE` y rellena `whatsapp`, `email`, `address`, `hours` y `city`. El WhatsApp debe tener prefijo internacional sin `+` (por ejemplo, 591 seguido del número boliviano). **No se incluye ningún contacto inventado.**
2. Sustituye `PRODUCTS` por el inventario real: precios en Bs, nombre, categoría, dimensiones, foto, material, descripción y disponibilidad.
3. Cambia fotografías de demostración por fotos propias de los productos y verifica sus licencias. Se usan enlaces externos de Unsplash como referencias visuales. Las fotografías no necesariamente corresponden al artículo nombrado.
4. Verifica dirección y la posición exacta del mapa. El mapa predeterminado muestra una zona de **La Paz**, no una ubicación de MARVI. Al configurar una dirección el sitio utiliza una vista de Google Maps con la búsqueda de esa dirección; comprueba su resultado antes de publicar.
5. Revisa textos comerciales, condiciones de venta, entrega, garantías y comunicación del negocio.
6. Para modificar la conversión ilustrativa edita `usdRate` en `DEFAULT_STORE`. El valor inicial **6.96 Bs/USD es un ejemplo**, no una cotización actual, oficial o garantizada. Las órdenes se calculan siempre en Bs.

### Sobre la funcionalidad de pedidos

Esta versión es un **prototipo front-end**: no procesa pagos, no administra stock ni tiene una base de datos o servidor para recibir pedidos. Al preparar un pedido, el navegador lo guarda localmente y ofrece enviarlo por WhatsApp; **no se debe interpretar como pedido recibido** hasta que el negocio confirme su recepción. Si no configuraste el número de MARVI, el botón de compartir abre WhatsApp con el texto y tendrás que elegir manualmente un destinatario.

Los cambios hechos desde la interfaz de configuración se guardan solo en ese navegador; para que se vean en todos los dispositivos, edita el código y vuelve a desplegar la web.

## Estructura

```text
MARVI-Astro/
├── src/
│   └── pages/
│       └── index.astro  ← todo el HTML, CSS y JavaScript
├── astro.config.mjs
├── package.json
├── preview.html    ← versión HTML directa
└── README.md
```

## Inspiración y recursos

Dirección visual inspirada en patrones de tiendas contemporáneas de muebles: fotografía protagonista, paleta neutra, navegación por estancias y tarjetas de producto claras. Referencias generales: HAY (hay.com), bibliotecas UI Discovery y el estudio de UX de Baymard sobre tiendas de muebles. Fotografías demostrativas servidas desde `images.unsplash.com`. Mapa de muestra de OpenStreetMap.
