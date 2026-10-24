import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js';
import { initTheme } from './assets/js/theme.js';

// navbar arriba
document.querySelector('#header').innerHTML = crearNavbar(document.body.dataset.pagina);

// footer abajo
document.querySelector('#footer').innerHTML = crearFooter();

// modo dark/light
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});