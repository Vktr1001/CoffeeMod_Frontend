# CoffeeMod Frontend ☕

Frontend de CoffeeMod, un proyecto escolar de e-commerce de café de especialidad y equipo para prepararlo.

## Tecnologías

- HTML5
- CSS3
- JavaScript vanilla (módulos ES)
- Bootstrap y Bootstrap Icons (archivos locales en `src/assets/vendor/`)
- Live Server para desarrollo local

No requiere NPM, `package.json`, proceso de compilación ni servidor de desarrollo adicional.

## Cómo ejecutar el proyecto

1. Abre la carpeta `CoffeeMod_Frontend` en Visual Studio Code.
2. Abre `index.html`.
3. Inicia Live Server.
4. Navega por las páginas usando el menú principal.

Es importante iniciar desde `index.html` para que la página de inicio cargue `views/home.html` mediante `fetch()`. `views/home.html` es un fragmento HTML insertado dentro de `index.html`, no una página independiente.

## Estructura del proyecto

```text
CoffeeMod_Frontend/
├── index.html
├── views/
│   ├── home.html              # Fragmento cargado desde index.html
│   ├── about-us.html
│   ├── contacto.html
│   ├── productos.html
│   └── producto-form.html
├── src/
│   ├── assets/
│   │   ├── img/
│   │   └── vendor/             # Bootstrap y Bootstrap Icons locales
│   ├── components/
│   │   ├── navbar.js
│   │   ├── footer.js
│   │   ├── logo.js
│   │   └── home.js             # Archivo heredado; no se importa desde main.js
│   ├── css/
│   │   ├── global/             # Variables y estilos base
│   │   ├── components/         # Estilos de componentes compartidos
│   │   └── pages/              # Estilos específicos por página
│   │       └── admin/
│   ├── js/
│   │   ├── pages/               # Lógica exclusiva de cada página
│   │   ├── catalogo.js
│   │   └── theme.js
│   ├── services/               # Comunicación con el backend
│   └── main.js                 # Inicialización compartida
├── backups/
│   └── home.html.bak           # Respaldo, no se carga en el sitio
└── README.md
```

## Organización de estilos

Cada documento HTML enlaza directamente las hojas de estilo que necesita, en este orden:

1. Bootstrap y Bootstrap Icons.
2. Fuentes tipográficas.
3. Variables y estilos globales.
4. Componentes compartidos.
5. Estilos específicos de la página.

Las rutas son relativas al documento HTML: desde `index.html` se utiliza `./src/...`; desde los documentos de `views/` se utiliza `../src/...`.

## Notas

- `views/home.html` se carga desde `src/main.js` con `fetch('./views/home.html')`, por lo que debe mantenerse esa ubicación o actualizarse la ruta correspondiente.
- Los módulos JavaScript se cargan con `type="module"`.
- `src/components/home.js` se conservó porque venía en el proyecto, pero no está importado por `main.js`; conviene revisar su propósito antes de eliminarlo.
- Bootstrap y Bootstrap Icons se sirven desde archivos locales; Google Fonts requiere conexión a Internet.
