import { crearNavbar, inicializarNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js';
import { initTheme } from './js/theme.js';
import { renderHome } from './components/home.js';

const header = document.querySelector('#header');

if (header) {
  header.innerHTML = crearNavbar(document.body.dataset.pagina);
}

const mainContent = document.querySelector('#main-content');

if (mainContent) {
  mainContent.innerHTML = renderHome();
}

const footer = document.querySelector('#footer');

if (footer) {
  footer.innerHTML = crearFooter();
}

initTheme();
inicializarNavbar();

