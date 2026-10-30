
//hice esta estructura masomenos basandome en el wifream, si quieren editarla, agregar productos, casos, imagenes reales, etc pueden hacerlo.
export const productos = [
  { id: 'orbit', nombre: 'ORBIT', imagen: '', categoria: 'molinos', tipo: 'MOLINO', nivel: 'avanzado', precio: 12900, marca: 'Acaia', metodos: ['filtrado', 'espresso'], stock: 8, ventas: 120 },
  { id: 'key', nombre: 'KEY', imagen: '', categoria: 'molinos', tipo: 'MOLINO', nivel: 'intermedio', precio: 7450, marca: 'Weber', metodos: ['filtrado', 'espresso'], stock: 4, ventas: 110 },
  { id: 'comandante-c40', nombre: 'COMANDANTE C40', imagen: '', categoria: 'molinos', tipo: 'MOLINO', nivel: 'intermedio', precio: 5900, marca: 'Comandante', metodos: ['filtrado', 'prensa', 'moka'], stock: 12, ventas: 100 },
  { id: 'pyxis', nombre: 'PYXIS', imagen: '', categoria: 'basculas', tipo: 'BÁSCULA', nivel: 'principiante', precio: 3450, marca: 'Acaia', metodos: ['filtrado', 'espresso'], stock: 6, ventas: 90 },
  { id: 'pearl', nombre: 'PEARL', imagen: '', categoria: 'basculas', tipo: 'BÁSCULA', nivel: 'intermedio', precio: 4200, marca: 'Acaia', metodos: ['filtrado'], stock: 0, ventas: 80 },
  { id: 'lunar', nombre: 'LUNAR', imagen: '', categoria: 'basculas', tipo: 'BÁSCULA', nivel: 'avanzado', precio: 6300, marca: 'Acaia', metodos: ['espresso'], stock: 2, ventas: 70 },
  { id: 'stagg-ekg', nombre: 'STAGG EKG', imagen: '', categoria: 'hervidores', tipo: 'HERVIDOR', nivel: 'intermedio', precio: 3800, marca: 'Fellow', metodos: ['filtrado', 'prensa'], stock: 5, ventas: 60 },
  { id: 'buono', nombre: 'BUONO', imagen: '', categoria: 'hervidores', tipo: 'HERVIDOR', nivel: 'principiante', precio: 1450, marca: 'Hario', metodos: ['filtrado', 'prensa', 'moka'], stock: 10, ventas: 50 },
  { id: 'v60', nombre: 'V60', imagen: '', categoria: 'metodos', tipo: 'MÉTODO', nivel: 'principiante', precio: 450, marca: 'Hario', metodos: ['filtrado'], stock: 18, ventas: 40 },
  { id: 'prensa-clara', nombre: 'CLARA', imagen: '', categoria: 'metodos', tipo: 'MÉTODO', nivel: 'intermedio', precio: 2450, marca: 'Fellow', metodos: ['prensa'], stock: 3, ventas: 30 },
  { id: 'filtros-v60', nombre: 'FILTROS V60', imagen: '', categoria: 'accesorios', tipo: 'ACCESORIO', nivel: 'principiante', precio: 180, marca: 'Hario', metodos: ['filtrado'], stock: 30, ventas: 20 },
  { id: 'huila', nombre: 'HUILA, COLOMBIA', imagen: '', categoria: 'cafe', tipo: 'CAFÉ', nivel: 'principiante', precio: 320, marca: 'CoffeeMod', metodos: ['filtrado', 'espresso', 'prensa', 'moka'], stock: 15, ventas: 10 }
];

export function filtrarProductos(catalogo, filtros, orden = 'vendidos') {
  const seleccionados = catalogo.filter((producto) => {
    const rango = producto.precio < 2000 ? 'bajo' : producto.precio <= 6000 ? 'medio' : 'alto';
    return (filtros.categoria === 'todo' || producto.categoria === filtros.categoria)
      && (!filtros.metodo.length || filtros.metodo.some((metodo) => producto.metodos.includes(metodo)))
      && (!filtros.nivel.length || filtros.nivel.includes(producto.nivel))
      && (!filtros.precio.length || filtros.precio.includes(rango))
      && (!filtros.marca.length || filtros.marca.includes(producto.marca));
  });
  const comparadores = {
    vendidos: (a, b) => b.ventas - a.ventas,
    'precio-asc': (a, b) => a.precio - b.precio,
    'precio-desc': (a, b) => b.precio - a.precio,
    nombre: (a, b) => a.nombre.localeCompare(b.nombre, 'es')
  };
  return seleccionados.sort(comparadores[orden] || comparadores.vendidos);
}

