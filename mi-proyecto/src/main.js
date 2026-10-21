import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js'; 

import { crearTarjetasEquipo } from './components/team-cards.js';


// pone el navbar arriba de la pagina
document.querySelector('#header').innerHTML = crearNavbar('');

// Pone el footer abajo de la página
document.querySelector('#footer').innerHTML = crearFooter();

//Inserta las tarjetas dentro de la etiqueta <main>
const mainContent = document.querySelector('.main-content');
if (mainContent) {
  mainContent.innerHTML = crearTarjetasEquipo();
}