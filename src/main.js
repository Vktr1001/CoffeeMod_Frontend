import { crearNavbar, inicializarNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js';
import { initTheme } from './js/theme.js';

// Componentes compartidos
document.querySelector('#header').innerHTML = crearNavbar(document.body.dataset.pagina);
document.querySelector('#footer').innerHTML = crearFooter();

initTheme();
inicializarNavbar();
