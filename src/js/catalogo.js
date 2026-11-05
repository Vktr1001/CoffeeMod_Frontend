
//hice esta estructura masomenos basandome en el wifream, si quieren editarla, agregar productos, casos, imagenes reales, etc pueden hacerlo.
export const productos = [
  { 
    id: 'orbit', 
    nombre: 'ORBIT', 
    imagen: '', 
    categoria: 'molinos', 
    tipo: 'MOLINO', 
    nivel: 'avanzado', 
    precio: 12900, 
    marca: 'Acaia', 
    metodos: ['filtrado', 'espresso'], 
    stock: 7, 
    ventas: 120,
    descripcion: 'Molino eléctrico de alta precisión con fresas de 64mm, ideal para espresso y filtrados con consistencia profesional.'
  },
  { 
    id: 'key', 
    nombre: 'KEY', 
    imagen: '', 
    categoria: 'molinos', 
    tipo: 'MOLINO', 
    nivel: 'intermedio', 
    precio: 7450, 
    marca: 'Weber', 
    metodos: ['filtrado', 'espresso'], 
    stock: 4, 
    ventas: 110,
    descripcion: 'Molino de fresas cónicas de grado comercial, famoso por su molienda ultra-uniforme y casi cero retención de café.'
  },
  { 
    id: 'comandante-c40', 
    nombre: 'COMANDANTE C40', 
    imagen: '', 
    categoria: 'molinos', 
    tipo: 'MOLINO', 
    nivel: 'intermedio', 
    precio: 5900, 
    marca: 'Comandante', 
    metodos: ['filtrado', 'prensa', 'moka'], 
    stock: 12, 
    ventas: 100,
    descripcion: 'Molino manual alemán de referencia mundial, con fresas de acero que ofrecen una molienda excepcional para cualquier método.'
  },
  { 
    id: 'pyxis', 
    nombre: 'PYXIS', 
    imagen: '', 
    categoria: 'basculas', 
    tipo: 'BÁSCULA', 
    nivel: 'principiante', 
    precio: 3450, 
    marca: 'Acaia', 
    metodos: ['filtrado', 'espresso'], 
    stock: 6, 
    ventas: 90,
    descripcion: 'Báscula profesional de ultra-alta resolución (0.001g) para espresso, con temporizador y análisis de flujo en tiempo real.'
  },
  { 
    id: 'pearl', 
    nombre: 'PEARL', 
    imagen: '', 
    categoria: 'basculas', 
    tipo: 'BÁSCULA', 
    nivel: 'intermedio', 
    precio: 4200, 
    marca: 'Acaia', 
    metodos: ['filtrado'], 
    stock: 0, 
    ventas: 80,
    descripcion: 'Báscula inteligente y versátil con indicador de flujo en tiempo real, perfecta para controlar preparaciones de café filtrado.'
  },
  { 
    id: 'lunar', 
    nombre: 'LUNAR', 
    imagen: '', 
    categoria: 'basculas', 
    tipo: 'BÁSCULA', 
    nivel: 'avanzado', 
    precio: 6300, 
    marca: 'Acaia', 
    metodos: ['espresso'], 
    stock: 2, 
    ventas: 70,
    descripcion: 'Báscula compacta y resistente al agua, diseñada específicamente para encajar bajo máquinas de espresso con precisión de 0.1g.'
  },
  { 
    id: 'stagg-ekg', 
    nombre: 'STAGG EKG', 
    imagen: '', 
    categoria: 'hervidores', 
    tipo: 'HERVIDOR', 
    nivel: 'intermedio', 
    precio: 3800, 
    marca: 'Fellow', 
    metodos: ['filtrado', 'prensa'], 
    stock: 5, 
    ventas: 60,
    descripcion: 'Hervidor eléctrico de cuello de cisne con control de temperatura preciso y vertido controlado para una extracción uniforme.'
  },
  { 
    id: 'buono', 
    nombre: 'BUONO', 
    imagen: '', 
    categoria: 'hervidores', 
    tipo: 'HERVIDOR', 
    nivel: 'principiante', 
    precio: 1450, 
    marca: 'Hario', 
    metodos: ['filtrado', 'prensa', 'moka'], 
    stock: 10, 
    ventas: 50,
    descripcion: 'Hervidor manual de acero inoxidable con pico de cuello de cisne para estufa, una opción clásica, duradera y económica.'
  },
  { 
    id: 'v60', 
    nombre: 'V60', 
    imagen: '', 
    categoria: 'metodos', 
    tipo: 'MÉTODO', 
    nivel: 'principiante', 
    precio: 450, 
    marca: 'Hario', 
    metodos: ['filtrado'], 
    stock: 18, 
    ventas: 40,
    descripcion: 'El dispositivo de filtrado por goteo más icónico del mundo. Su diseño cónico resalta la claridad y notas frutales del café.'
  },
  { 
    id: 'prensa-clara', 
    nombre: 'CLARA', 
    imagen: '', 
    categoria: 'metodos', 
    tipo: 'MÉTODO', 
    nivel: 'intermedio', 
    precio: 2450, 
    marca: 'Fellow', 
    metodos: ['prensa'], 
    stock: 3, 
    ventas: 30,
    descripcion: 'Prensa francesa de doble pared con aislamiento térmico y un filtro mejorado que reduce los posos y permite un vertido limpio.'
  },
  { 
    id: 'filtros-v60', 
    nombre: 'FILTROS V60', 
    imagen: '', 
    categoria: 'accesorios', 
    tipo: 'ACCESORIO', 
    nivel: 'principiante', 
    precio: 180, 
    marca: 'Hario', 
    metodos: ['filtrado'], 
    stock: 30, 
    ventas: 20,
    descripcion: 'Filtros de papel cónicos desechables que garantizan una taza limpia, brillante y libre de sedimentos o aceites pesados.'
  },
  { 
    id: 'huila', 
    nombre: 'HUILA, COLOMBIA', 
    imagen: '', 
    categoria: 'cafe', 
    tipo: 'CAFÉ', 
    nivel: 'principiante', 
    precio: 320, 
    marca: 'CoffeeMod', 
    metodos: ['filtrado', 'espresso', 'prensa', 'moka'], 
    stock: 15, 
    ventas: 10,
    descripcion: 'Café de origen único cultivado en las montañas de Colombia, reconocido por su perfil equilibrado, dulzura y notas a chocolate.'
  }
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

// Manejar clic en botón de descripción
document.addEventListener('click', (e) => {
  const btn = e.target.closest('.tienda-btn-descripcion');
  if (!btn) return;

  // Subimos hasta el <article> del producto
  const articulo = btn.closest('.tienda-producto');
  if (!articulo) return;

  // Obtenemos el nombre del producto (ya está en el h2)
  const nombre = articulo.querySelector('[data-campo="nombre"]').textContent.trim();
  
  // Buscamos el producto en el array por nombre
  const producto = productos.find(p => p.nombre === nombre);
  
  if (producto) {
    // Llenamos el modal con los datos
    document.getElementById('modalDescripcionLabel').textContent = producto.nombre;
    document.getElementById('modalDescripcionTexto').textContent = producto.descripcion;
  }
});
