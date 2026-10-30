import { filtrarProductos } from '../catalogo.js';
import { obtenerProductos } from '../../services/productos.js';

let productos = [];
let catalogoCargado = false;

const formulario = document.querySelector('#tienda-formulario');
const categorias = document.querySelector('.tienda-categorias');
const orden = document.querySelector('#tienda-orden');
const grid = document.querySelector('#tienda-productos');
const plantillaProducto = document.querySelector('#plantilla-producto');
const vacio = document.querySelector('#tienda-vacio');
const contador = document.querySelector('#tienda-resultados');
const limpiar = document.querySelector('.tienda-limpiar');
const estadoCarga = document.querySelector('#tienda-carga');
const mensajeCarga = document.querySelector('#tienda-mensaje-carga');
const reintentar = document.querySelector('#tienda-reintentar');
const categoriasValidas = new Set([...categorias.querySelectorAll('button')].map((boton) => boton.dataset.categoria));
const categoriaSolicitada = new URLSearchParams(location.search).get('categoria');
let categoria = categoriasValidas.has(categoriaSolicitada) ? categoriaSolicitada : 'todo';

const moneda = new Intl.NumberFormat('es-MX', { maximumFractionDigits: 0 });
const cantidades = new Map();

function stockDisponible(producto) {
  return Number.isSafeInteger(producto.stock) && producto.stock > 0 ? producto.stock : 0;
}

function limitarCantidad(valor, stock) {
  if (!stock) return 0;
  const numero = Number(valor);
  return Math.min(stock, Math.max(1, Number.isFinite(numero) ? Math.floor(numero) : 1));
}

function completarImagen(producto, tarjeta) {
  const contenedor = tarjeta.querySelector('.tienda-imagen');
  const imagen = contenedor.querySelector('img');
  const marcador = contenedor.querySelector('[data-campo="marcador"]');
  marcador.textContent = `[ ${producto.tipo} ]`;
  if (producto.imagen) {
    contenedor.classList.add('tienda-con-imagen');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;
    imagen.hidden = false;
    marcador.hidden = true;
  } else {
    imagen.remove();
  }
}

function crearControles(producto, tarjeta) {
  const stock = stockDisponible(producto);
  const cantidad = limitarCantidad(cantidades.get(producto.id) ?? 1, stock);
  const idCantidad = `cantidad-${producto.id}`;
  const idStock = `stock-${producto.id}`;
  const campo = tarjeta.querySelector('input[data-producto-id], .tienda-cantidad input');
  const estado = tarjeta.querySelector('[data-campo="stock"]');
  estado.id = idStock;
  estado.classList.toggle('tienda-stock-agotado', !stock);
  estado.textContent = stock ? `${stock} ${stock === 1 ? 'disponible' : 'disponibles'}` : 'Sin existencias';
  tarjeta.querySelector('[data-campo="etiqueta-cantidad"]').htmlFor = idCantidad;
  const control = tarjeta.querySelector('.tienda-cantidad');
  control.setAttribute('aria-label', `Cantidad de ${producto.nombre}`);
  campo.id = idCantidad;
  campo.name = idCantidad;
  campo.dataset.productoId = producto.id;
  campo.min = stock ? 1 : 0;
  campo.max = stock;
  campo.value = cantidad;
  campo.disabled = !stock;
  campo.setAttribute('aria-label', `Cantidad de ${producto.nombre}`);
  campo.setAttribute('aria-describedby', idStock);
  const reducir = control.querySelector('[data-cantidad-paso="-1"]');
  reducir.disabled = cantidad <= 1;
  reducir.setAttribute('aria-label', `Reducir cantidad de ${producto.nombre}`);
  const aumentar = control.querySelector('[data-cantidad-paso="1"]');
  aumentar.disabled = cantidad >= stock;
  aumentar.setAttribute('aria-label', `Aumentar cantidad de ${producto.nombre}`);
  const agregar = tarjeta.querySelector('.tienda-agregar');
  agregar.disabled = !stock;
  agregar.setAttribute('aria-label', stock ? `Agregar ${producto.nombre} al carrito` : `${producto.nombre} agotado`);
  agregar.querySelector('[data-campo="texto-agregar"]').textContent = stock ? 'Agregar' : 'Agotado';
}

function crearTarjeta(producto) {
  const tarjeta = plantillaProducto.content.firstElementChild.cloneNode(true);
  const nombre = tarjeta.querySelector('[data-campo="nombre"]');
  nombre.id = `producto-${producto.id}`;
  nombre.textContent = producto.nombre;
  tarjeta.setAttribute('aria-labelledby', nombre.id);
  tarjeta.querySelector('[data-campo="tipo"]').textContent = producto.tipo;
  tarjeta.querySelector('[data-campo="nivel"]').textContent = producto.nivel;
  tarjeta.querySelector('[data-campo="precio"]').textContent = `$${moneda.format(producto.precio)}`;
  completarImagen(producto, tarjeta);
  crearControles(producto, tarjeta);
  return tarjeta;
}

function actualizarCantidad(campo) {
  const producto = productos.find((producto) => String(producto.id) === campo.dataset.productoId);
  if (!producto) return;
  const stock = stockDisponible(producto);
  const cantidad = limitarCantidad(campo.value, stock);
  campo.value = cantidad;
  cantidades.set(producto.id, cantidad);
  const control = campo.closest('.tienda-cantidad');
  control.querySelector('[data-cantidad-paso="-1"]').disabled = cantidad <= 1;
  control.querySelector('[data-cantidad-paso="1"]').disabled = cantidad >= stock;
}

function actualizarCatalogo() {
  if (!catalogoCargado) return;
  const datos = new FormData(formulario);
  const filtros = {
    categoria,
    metodo: datos.getAll('metodo'),
    nivel: datos.getAll('nivel'),
    precio: datos.getAll('precio'),
    marca: datos.getAll('marca')
  };
  const visibles = filtrarProductos(productos, filtros, orden.value);

  const tarjetas = document.createDocumentFragment();
  for (const producto of visibles) tarjetas.append(crearTarjeta(producto));
  grid.replaceChildren(tarjetas);

  vacio.hidden = visibles.length > 0;
  contador.textContent = `${visibles.length} ${visibles.length === 1 ? 'producto encontrado' : 'productos encontrados'}`;
  limpiar.hidden = categoria === 'todo' && [...datos.values()].length === 0;
  categorias.querySelectorAll('button').forEach((boton) => {
    boton.setAttribute('aria-pressed', String(boton.dataset.categoria === categoria));
  });
  const url = new URL(location.href);
  if (categoria === 'todo') url.searchParams.delete('categoria');
  else url.searchParams.set('categoria', categoria);
  if (url.href !== location.href) history.replaceState(null, '', url);
}

categorias.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-categoria]');
  if (!boton) return;
  categoria = boton.dataset.categoria;
  actualizarCatalogo();
});
grid.addEventListener('error', (evento) => {
  const imagen = evento.target;
  if (!imagen.matches('.tienda-imagen img')) return;
  const contenedor = imagen.closest('.tienda-imagen');
  imagen.remove();
  contenedor.classList.remove('tienda-con-imagen');
  contenedor.querySelector('span').hidden = false;
}, true);
grid.addEventListener('click', (evento) => {
  const boton = evento.target.closest('button[data-cantidad-paso]');
  if (!boton || boton.disabled) return;
  const campo = boton.closest('.tienda-cantidad').querySelector('input');
  campo.value = Number(campo.value) + Number(boton.dataset.cantidadPaso);
  actualizarCantidad(campo);
});
grid.addEventListener('input', (evento) => {
  if (evento.target.matches('input[data-producto-id]') && evento.target.value !== '') {
    actualizarCantidad(evento.target);
  }
});
grid.addEventListener('focusout', (evento) => {
  if (evento.target.matches('input[data-producto-id]')) actualizarCantidad(evento.target);
});
formulario.addEventListener('change', actualizarCatalogo);
formulario.addEventListener('submit', (evento) => evento.preventDefault());
formulario.addEventListener('reset', (evento) => {
  evento.preventDefault();
  formulario.querySelectorAll('input[type="checkbox"]').forEach((campo) => {
    campo.checked = false;
  });
  categoria = 'todo';
  actualizarCatalogo();
});
orden.addEventListener('change', actualizarCatalogo);
document.querySelector('#tienda-restablecer').addEventListener('click', () => formulario.reset());
document.querySelector('.tienda-abrir-filtros').addEventListener('click', (evento) => {
  const abierto = evento.currentTarget.getAttribute('aria-expanded') !== 'true';
  evento.currentTarget.setAttribute('aria-expanded', String(abierto));
  document.querySelector('#tienda-filtros').classList.toggle('is-open', abierto);
});

async function cargarCatalogo() {
  catalogoCargado = false;
  estadoCarga.hidden = false;
  mensajeCarga.textContent = 'Cargando productos…';
  reintentar.hidden = true;
  vacio.hidden = true;
  grid.replaceChildren();
  grid.setAttribute('aria-busy', 'true');
  try {
    productos = await obtenerProductos();
    catalogoCargado = true;
    estadoCarga.hidden = true;
    actualizarCatalogo();
  } catch {
    mensajeCarga.textContent = 'No pudimos cargar los productos. Intenta de nuevo.';
    reintentar.hidden = false;
  } finally {
    grid.setAttribute('aria-busy', 'false');
  }
}

reintentar.addEventListener('click', cargarCatalogo);
cargarCatalogo();
