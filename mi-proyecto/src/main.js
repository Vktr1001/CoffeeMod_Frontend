import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js'; 

// pone el navbar arriba de la pagina
document.querySelector('#header').innerHTML = crearNavbar('');

// Pone el footer abajo de la página
document.querySelector('#footer').innerHTML = crearFooter();