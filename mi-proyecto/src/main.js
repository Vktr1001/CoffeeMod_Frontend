import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { crearNavbar } from './components/navbar.js';
import { crearFooter } from './components/footer.js'; 
import { crearPaginaNosotros } from './components/acercaNosotros.js';

// pone el navbar arriba de la pagina
document.querySelector('#header').innerHTML = crearNavbar('nosotros');


//inyectar el contenido en class main-content
const contenedorPrincipal = document.querySelector('.main-content');

if (contenedorPrincipal){
    contenedorPrincipal.innerHTML = crearPaginaNosotros();
}


// Pone el footer abajo de la página
document.querySelector('#footer').innerHTML = crearFooter();

