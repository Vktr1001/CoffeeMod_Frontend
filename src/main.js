import { crearNavbar, inicializarNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js';
import { initTheme } from './js/theme.js';

import { renderHome } from './components/home.js';

// Componentes compartidos
document.querySelector('#header').innerHTML = crearNavbar(document.body.dataset.pagina);

document.querySelector('#main-content').innerHTML = renderHome();

document.querySelector('#footer').innerHTML = crearFooter();

initTheme();
inicializarNavbar();
