# CoffeeMod

E-commerce escolar de café de especialidad y equipo para preparación, desarrollado por 1001 Labs.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla (módulos ES)
- Bootstrap y Bootstrap Icons (archivos locales)
- Live Server para desarrollo local

No se utiliza NPM, bundler ni proceso de compilación.

## Cómo ejecutar el proyecto

1. Abre la carpeta `CoffeeMod_Frontend` en Visual Studio Code.
2. Abre `index.html`.
3. Selecciona **Open with Live Server**.
4. Navega desde el menú para probar las demás vistas.

> Importante: ejecuta Live Server desde la raíz del proyecto. `views/home.html` es un fragmento HTML que se inserta dentro de `index.html`; no está diseñado para abrirse directamente como página independiente.

## Estructura del proyecto

```text
CoffeeMod_Frontend/
├── index.html                  # Entrada principal
├── views/                      # Páginas HTML
│   ├── home.html               # Fragmento insertado en index.html
│   ├── about-us.html
│   ├── contacto.html
│   ├── productos.html
│   └── producto-form.html
├── src/
   ├── assets/
   │   ├── img/                # Imágenes del sitio
   │   └── vendor/             # Bootstrap e iconos locales
   ├── components/             # Navbar, footer y logo
   ├── css/
   │   ├── global/             # Variables y estilos base
   │   ├── components/         # Estilos de componentes compartidos
   │   └── pages/              # Estilos por página
   │       └── admin/          # Estilos del panel administrativo
   ├── js/                     # Lógica de páginas y catálogo
   ├── services/               # Acceso a datos / servicios
   └── main.js                 # Inicialización compartida
```

## Convención de rutas

Las rutas de los HTML se calculan desde la ubicación del documento:

- `./` inicia desde la carpeta del documento actual.
- `../` sube un nivel.
- Las páginas dentro de `views/` utilizan `../src/...` para acceder a los recursos.

En JavaScript, cuando una ruta debe depender de la ubicación del módulo, se utiliza `new URL(ruta, import.meta.url)`. Esto evita depender de que el proyecto esté publicado directamente en la raíz del dominio.

## Organización de estilos

Las páginas cargan sus hojas de estilo mediante etiquetas `<link>` en este orden:

1. Bootstrap y Bootstrap Icons.
2. Variables y estilos globales.
3. Estilos de componentes compartidos.
4. CSS específico de la página.

Los estilos de una página no deben agregarse al CSS global si no son compartidos por otras vistas.

## Consideraciones

- `src/main.js` construye el navbar y el footer y carga `views/home.html` dentro de `index.html`.
- `src/js/catalogo.js` define los productos de demostración y sus imágenes.
- `src/services/productos.js` centraliza la obtención de productos. Actualmente utiliza datos locales de demostración.
- Google Fonts se solicita desde Internet; Bootstrap y Bootstrap Icons se sirven desde archivos locales.
- El directorio `.git` no forma parte del paquete distribuible. Conserva el repositorio Git de tu copia de trabajo al aplicar estos cambios.
