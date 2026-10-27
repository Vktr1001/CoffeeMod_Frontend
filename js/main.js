import { crearNavbar } from '../src/components/navbar.js';
import { crearFooter } from '../src/components/footer.js';
import { initTheme } from './theme.js';

// navbar arriba
document.querySelector('#header').innerHTML = crearNavbar(document.body.dataset.pagina);

// footer abajo
document.querySelector('#footer').innerHTML = crearFooter();

// modo dark/light; el navbar ya existe después de insertarlo arriba
initTheme();
