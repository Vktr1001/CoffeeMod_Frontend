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
CoffeeMod_Frontend/
├── src/
│   ├── assets/
│   │   ├── img/            # Imágenes (hero, productos, equipo y logo)
│   │   └── vendor/         # Bootstrap y Bootstrap Icons
│   ├── components/         # navbar.js, footer.js, logo.js
│   ├── css/                # Estilos por página y componente
│   ├── js/                 # Scripts por página (catálogo, productos, contacto...)
│   ├── services/           # Comunicación con el backend
│   ├── main.js             # Punto de entrada
│   └── styles.css          # Hoja de estilos principal
├── views/                  # Páginas internas (home, productos, contacto, about-us...)
├── index.html              # Página de inicio
└── README.md
```

## Páginas

| Página | Ruta |
|---|---|
| Inicio | `index.html` / `views/home.html` |
| Sobre nosotros | `views/about-us.html` |
| Contacto | `views/contacto.html` |

## Equipo

Equipo 2 · 1001 Labs · Generation México
