import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from './components/navbar.js';

// pone el navbar arriba de la pagina
document.querySelector('#header').innerHTML = crearNavbar('');
