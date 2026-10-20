import '../assets/css/navbar.css';

// links del menu
const links = [
  { id: 'tienda', texto: 'TIENDA', href: '#' },
  { id: 'descubre', texto: 'DESCUBRE', href: '#' },
  { id: 'nosotros', texto: 'NOSOTROS', href: '#' },
  { id: 'contacto', texto: 'CONTACTO', href: '#' }
];

export function crearNavbar(paginaActiva) {
  let menu = '';

  for (const link of links) {
    const activo = link.id === paginaActiva ? 'active' : '';
    menu += `<li class="nav-item"><a class="nav-link ${activo}" href="${link.href}">${link.texto}</a></li>`;
  }

  return `
    <div class="nav-aviso">ENVÍO GRATIS EN EQUIPO DESDE $1,500 · GARANTÍA DE 2 AÑOS</div>

    <nav class="navbar navbar-expand-lg navbar-cm">
      <div class="container-fluid">
        <a class="navbar-brand nav-logo" href="/">COFFEE<br>MOD<span>_</span></a>

        <ul class="navbar-nav flex-row nav-acciones">
          <li class="nav-item d-none d-lg-block"><a class="nav-link" href="#">BUSCAR</a></li>
          <li class="nav-item d-none d-lg-block"><a class="nav-link" href="#">CUENTA</a></li>
          <li class="nav-item"><a class="nav-link" href="#">CARRITO <span class="nav-contador">0</span></a></li>
        </ul>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse nav-links" id="menu">
          <ul class="navbar-nav">
            ${menu}
            <!-- en cel buscar y cuenta van en el menu -->
            <li class="nav-item d-lg-none"><a class="nav-link" href="#">BUSCAR</a></li>
            <li class="nav-item d-lg-none"><a class="nav-link" href="#">CUENTA</a></li>
          </ul>
        </div>
      </div>
    </nav>
  `;
}
