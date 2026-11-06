# CoffeeMod ☕️

E-commerce de café de especialidad desarrollado por **1001 Labs**.

## Descripción

CoffeeMod es la parte frontend de una tienda en línea de café de especialidad. Incluye página de inicio, sección "Sobre nosotros" con el equipo, formulario de contacto, navbar y footer reutilizables como componentes JavaScript, y un selector de tema.

## Tecnologías

- **Frontend:** HTML5, CSS3 (Bootstrap), JavaScript ES6+
- **Backend:** Java, Spring Boot 3

> Este repositorio contiene únicamente el frontend. Es una página estática.

## Requisitos

Antes de empezar, asegúrate de tener lo siguiente:

| | Herramienta | Para qué sirve |
|---|---|---|
| 🌿 | [Git](https://git-scm.com/) | Clonar el repositorio y trabajar en equipo |
| 💻 | [Visual Studio Code](https://code.visualstudio.com/) | Editor de código |
| ⚡ | Extensión **Live Server** | Levantar el proyecto en un servidor local |

> 💡 **No necesitas** Node.js, npm ni instalar dependencias. Bootstrap y Bootstrap Icons ya vienen incluidos en `src/assets/vendor/`.

## Instalación

```bash
git clone https://github.com/Vktr1001/CoffeeMod_Frontend.git
cd CoffeeMod_Frontend
code .
```

## Cómo ejecutarlo

1. Abre la carpeta del proyecto en VS Code.
2. Instala la extensión **Live Server** desde la pestaña de extensiones, si aún no la tienes.
3. Abre el archivo `index.html`.
4. Haz clic en **Go Live** (esquina inferior derecha de VS Code) o clic derecho sobre `index.html` → **Open with Live Server**.
5. El navegador se abrirá automáticamente en `http://127.0.0.1:5500`.

## Estructura del proyecto

```
<<<<<<< HEAD


=======
CoffeeMod_Frontend/
├── index.html                  # Entrada principal
├── views/                      # Páginas HTML
│   ├── home.html               # Fragmento insertado en index.html
│   ├── about-us.html
│   ├── contacto.html
│   ├── productos.html
│   └── producto-form.html
├── src/
│   ├── assets/
│   │   ├── img/
│   │   │   ├── anitaportafolio.jpg
│   │   │   ├── cesarportafolio.jpg
│   │   │   ├── daniportafolio.jpg
│   │   │   ├── Grano.svg
│   │   │   ├── isaacportafolio.jpeg
│   │   │   ├── israportafolio.jpeg
│   │   │   ├── jocelinportafolio.jpg
│   │   │   ├── luisportafolio.jpg
│   │   │   ├── serchportafolio.jpeg
│   │   │   └── victorportafolio.jpg
│   │   └── vendor/
│   │       ├── bootstrap/
│   │       │   ├── bootstrap.bundle.min.js
│   │       │   └── bootstrap.min.css
│   │       └── bootstrap-icons/
│   │           ├── fonts/
│   │           │   ├── bootstrap-icons.woff
│   │           │   └── bootstrap-icons.woff2
│   │           └── bootstrap-icons.min.css
│   ├── components/
│   │   ├── footer.js
│   │   ├── logo.js
│   │   └── navbar.js
│   ├── css/
│   │   ├── about-us.css
│   │   ├── contacto.css
│   │   ├── footer.css
│   │   ├── home.css
│   │   ├── logo.css
│   │   ├── navbar.css
│   │   └── variables.css
│   ├── js/
│   │   ├── about-us.js
│   │   ├── contacto.js
│   │   └── theme.js
│   ├── main.js
│   └── styles.css
├── views/
│   ├── about-us.html
│   └── contacto.html
├── .gitignore
├── index.html
└── README.md
```
>>>>>>> daf14b64e925999f5d2df317566dee8219da41c9
