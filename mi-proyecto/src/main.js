import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js';
import { initTheme } from './assets/js/theme.js';
import './assets/css/variables.css';

// navbar arriba
document.querySelector('#header').innerHTML = crearNavbar('nosotros');

// footer abajo
document.querySelector('#footer').innerHTML = crearFooter();

// modo dark/light
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
});