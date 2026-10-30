import { productos as productosDemo } from '../js/catalogo.js';

// Esto lo puse provisionalmente para poder usar productos que queramos sin un back no le hagan mucho caso
//al final usa los productos hardcodeados de catalogo.js de mientras
const URL_PRODUCTOS = '';

export async function obtenerProductos() {
  if (!URL_PRODUCTOS) {
    return productosDemo;
  }

  const respuesta = await fetch(URL_PRODUCTOS, {
    headers: { Accept: 'application/json' }
  });

  if (!respuesta.ok) {
    throw new Error('No se pudieron cargar los productos.');
  }

  const datos = await respuesta.json();
  if (!Array.isArray(datos)) {
    throw new Error('La respuesta de productos debe ser un arreglo.');
  }

  return datos;
}
