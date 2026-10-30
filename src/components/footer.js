import { crearLogo } from './logo.js';

// si la pagina esta dentro de views/ hay que subir una carpeta
const base = location.pathname.includes('/views/') ? '../' : './';
const tienda = base + 'views/productos.html';

const seccionTienda = [
  { texto: 'Molinos', href: tienda + '?categoria=molinos' },
  { texto: 'Básculas', href: tienda + '?categoria=basculas' },
  { texto: 'Hervidores', href: tienda + '?categoria=hervidores' },
  { texto: 'Métodos', href: tienda + '?categoria=metodos' },
  { texto: 'Accesorios', href: tienda + '?categoria=accesorios' },
  { texto: 'Café', href: tienda + '?categoria=cafe' }
];

const seccionAyuda = [
  { texto: 'Envíos', href: '#' },
  { texto: 'Garantía', href: '#' },
  { texto: 'Devoluciones', href: '#' },
  { texto: 'Preguntas frecuentes', href: '#' }
];

const seccionLabs = [
  { texto: 'Acerca de nosotros', href: base + 'views/about-us.html' },
  { texto: 'Contacto', href: base + 'views/contacto.html' }
];

export function crearFooter() {
  const generarLinks = (links) => {
    return links.map(link => `<li class="mb-2"><a class="footer-link" href="${link.href}">${link.texto}</a></li>`).join('');
  };

  return `
    <footer class="footer-cm pt-5 pb-4">
      <div class="container-fluid px-4 px-lg-5">
        <div class="row g-4 justify-content-between">
          
          <!-- Columna Marca / Logo -->
          <div class="col-12 col-md-3">
            <div class="d-flex align-items-center mb-3">
              <h5 class="footer-logo m-0">${crearLogo()}</h5>
            </div>
            <p class="footer-texto text-secondary mb-1">Equipo de precisión para tu barra.</p>
            <p class="footer-texto text-secondary">Café con precisión.</p>
          </div>

          <!-- Columna Tienda -->
          <div class="col-6 col-md-2">
            <h6 class="footer-titulo mb-3">TIENDA</h6>
            <ul class="list-unstyled">
              ${generarLinks(seccionTienda)}
            </ul>
          </div>

          <!-- Columna Ayuda -->
          <div class="col-6 col-md-2">
            <h6 class="footer-titulo mb-3">AYUDA</h6>
            <ul class="list-unstyled">
              ${generarLinks(seccionAyuda)}
            </ul>
          </div>

          <!-- Columna 1001 LABS -->
          <div class="col-6 col-md-2">
            <h6 class="footer-titulo mb-3">1001 LABS</h6>
            <ul class="list-unstyled">
              ${generarLinks(seccionLabs)}
            </ul>
          </div>

          <!-- Columna Novedades -->
          <div class="col-12 col-md-3">
            <h6 class="footer-titulo mb-3">NOVEDADES</h6>
            <p class="footer-texto mb-3">Lanzamientos, guías de calibración y acceso anticipado.</p>
            <form class="d-flex footer-form" onsubmit="event.preventDefault();">
              <input type="email" class="form-control footer-input" placeholder="tu@correo.com" required>
              <button class="btn footer-btn" type="submit">SUSCRIBIRME</button>
            </form>
          </div>

        </div>

        <hr class="my-4 footer-hr">

        <!-- Barra Inferior -->
        <div class="d-flex flex-column flex-md-row justify-content-between align-items-center footer-bottom">
          <p class="mb-2 mb-md-0 text-secondary small">
            &copy; 2026 COFFEEMOD &nbsp;·&nbsp; 1001 LABS &nbsp;·&nbsp; CDMX
          </p>
          <div class="footer-legales small">
            <a href="#" class="footer-link-sub">PRIVACIDAD</a>
            <span class="text-secondary">&nbsp;·&nbsp;</span>
            <a href="#" class="footer-link-sub">TÉRMINOS</a>
            <span class="text-secondary">&nbsp;·&nbsp;</span>
            <a href="#" class="footer-link-sub">COOKIES</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}
