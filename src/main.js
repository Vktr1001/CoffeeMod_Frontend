import { crearNavbar, inicializarNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js';
import { initTheme } from './js/theme.js';

const header = document.querySelector('#header');
if (header) {
    header.innerHTML = crearNavbar(document.body.dataset.pagina);
}

const mainContent = document.querySelector('#main-content');

if (mainContent) {
    fetch('./views/home.html')
        .then(response => {
            if (!response.ok) throw new Error('No se pudo cargar home.html');
            return response.text();
        })
        .then(html => {
            mainContent.innerHTML = html;
        })
        .catch(error => console.error('Error:', error));
}

const footer = document.querySelector('#footer');
if (footer) {
    footer.innerHTML = crearFooter();
}

initTheme();
inicializarNavbar();
