import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from '/src/components/navbar.js';
import { crearFooter } from '/src/components/footer.js';
import { initTheme } from '/src/js/theme.js';

// navbar arriba
document.querySelector('#header').innerHTML = crearNavbar(document.body.dataset.pagina);

// footer abajo
document.querySelector('#footer').innerHTML = crearFooter();

// modo dark/light
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});