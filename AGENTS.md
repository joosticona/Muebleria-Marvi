# Guía para agentes — Mueblería MARVI

Estas instrucciones se aplican a todo el repositorio y siguen el estándar [AGENTS.md](https://agents.md/).

## Contexto del proyecto

- Sitio de mueblería construido con **Astro 7.4.1**, con salida estática y herramientas ejecutadas mediante **Bun**.
- La página principal está en [src/pages/index.astro](./src/pages/index.astro). [preview.html](./preview.html) es una vista previa HTML independiente; mantener coherentes sus funcionalidades cuando se modifique el comportamiento compartido.
- Consultar [README.md](./README.md) para conocer las funcionalidades, limitaciones del prototipo y opciones de personalización.

## Reglas de desarrollo y reutilización de componentes

1. Cada elemento de la interfaz —botones, imágenes, textos, títulos, subtítulos y cualquier otro tipo de elemento visual o funcional— debe implementarse como un componente independiente, único y reutilizable **cuando corresponda**. Cada componente debe tener una responsabilidad clara. Evitar duplicados y fragmentación innecesaria: no es obligatorio crear un componente por cada etiqueta HTML. Preferir componentes Astro y utilizar props o slots cuando faciliten su reutilización.
2. Cada página debe reutilizar los componentes existentes. Antes de crear uno, buscar si ya existe un componente adecuado. Si se necesita uno que aún no existe, crearlo de forma reutilizable para otras páginas o secciones, preferentemente en `src/components/`.
3. Para cualquier animación, transición, transformación o efecto visual, priorizar **CSS nativo** (`transition`, `animation`, `transform` y `@keyframes`) antes que JavaScript o librerías externas. Utilizar JavaScript o una librería de animación solo cuando CSS no permita implementar adecuadamente el comportamiento requerido. Respetar la preferencia de movimiento reducido mediante `prefers-reduced-motion`, reduciendo o desactivando el movimiento no esencial. Esta preferencia por CSS no impide utilizar JavaScript para interacciones funcionales que lo requieran.

Estas reglas orientan el desarrollo y las modificaciones futuras; no implican refactorizar código ajeno al alcance de la tarea.

## Comandos con Bun

Ejecutar desde la raíz del repositorio:

```bash
bun install --frozen-lockfile
bun run --bun dev
bun run --bun format
bun run --bun format:check
bun run --bun lint
bun run --bun build
```

- Usar `bun install --frozen-lockfile` para instalar las dependencias ya registradas. Al añadir o actualizar dependencias, utilizar Bun y actualizar `bun.lock`.
- `dev` inicia el servidor de desarrollo; ejecutarlo solo cuando sea necesario para la tarea.
- `format` aplica Prettier a todo el proyecto; preferir el Prettier local sobre archivos concretos si la tarea tiene un alcance limitado.
- Para cambios de código o configuración, ejecutar las comprobaciones pertinentes de formato, lint y compilación. Para cambios exclusivamente documentales, basta con revisar el contenido y el formato de los archivos afectados.
- No hay un comando de pruebas automatizadas definido en [package.json](./package.json); no asumir que `lint` o `build` sustituyen la comprobación funcional de las interacciones modificadas.
