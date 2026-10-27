import { toggleTheme } from '../js/theme.js';
import { crearLogo } from './logo.js';

// links del menu
const links = [
  { id: 'inicio', texto: 'INICIO', href: '/' },
  { id: 'tienda', texto: 'TIENDA', href: '#' },
  { id: 'descubre', texto: 'DESCUBRE', href: '#' },
  { id: 'nosotros', texto: 'NOSOTROS', href: '/views/about-us.html' },
  { id: 'contacto', texto: 'CONTACTO', href: '/views/contacto.html' }
];

// suma los productos del carrito guardado en localStorage
function contarCarrito() {
  const carrito = JSON.parse(localStorage.getItem('coffeemod-carrito')) || [];
  let total = 0;
  for (const producto of carrito) {
    total += producto.cantidad || 1;
  }
  return total;
}

export function crearNavbar(paginaActiva) {
  let menu = '';

  for (const link of links) {
    const activo = link.id === paginaActiva ? 'active' : '';
    menu += `<li class="nav-item"><a class="nav-link ${activo}" href="${link.href}">${link.texto}</a></li>`;
  }

  const totalCarrito = contarCarrito();
  const contador = totalCarrito > 0 ? `<span class="nav-contador">${totalCarrito}</span>` : '';

  // HTML del Navbar con el botón de tema integrado
  const navbarHTML = `
    <div class="nav-aviso">ENVÍO GRATIS EN EQUIPO DESDE $1,500 · GARANTÍA DE 2 AÑOS</div>

    <nav class="navbar navbar-expand-lg navbar-cm px-3 px-lg-5 py-3">
      <div class="container-fluid p-0">
        <a class="navbar-brand nav-logo order-lg-2 m-0" href="/" aria-label="CoffeeMod inicio">${crearLogo()}</a>

        <ul class="navbar-nav flex-row align-items-center gap-3 gap-lg-4 ms-auto order-lg-3 flex-lg-fill justify-content-lg-end">
          <li class="nav-item d-none d-lg-block"><a class="nav-link" href="#">BUSCAR</a></li>
          <li class="nav-item d-none d-lg-block"><a class="nav-link" href="#">CUENTA</a></li>
          <li class="nav-item"><a class="nav-link" href="#">CARRITO ${contador}</a></li>
          
          <!-- Botón de Modo Dark / Light -->
          <li class="nav-item">
            <button id="btn-theme-toggle" class="btn btn-sm btn-outline-secondary rounded-0 px-2 py-1 font-monospace small" aria-label="Cambiar modo oscuro/claro">
              <i class="bi bi-circle-half"></i> MODO
            </button>
          </li>
        </ul>

        <button class="navbar-toggler ms-3 rounded-0 fs-4 lh-1" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-label="Abrir menu">
          <i class="bi bi-list"></i>
        </button>

        <div class="collapse navbar-collapse order-lg-1 flex-lg-fill" id="menu">
          <ul class="navbar-nav gap-lg-4 pt-3 pt-lg-0">
            ${menu}
            <li class="nav-item d-lg-none"><a class="nav-link" href="#">BUSCAR</a></li>
            <li class="nav-item d-lg-none"><a class="nav-link" href="#">CUENTA</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  return navbarHTML;
}

export function inicializarNavbar() {
  document.querySelector('#btn-theme-toggle')?.addEventListener('click', toggleTheme);
}
