//datos de ejemplo muestra
let productos = [
    { sku: 'SKU-CMD-0042', nombre: 'Orbit', categoria: 'Molino', nivel: 'Avanzado', stock: 12, precio: 12900 },
    { sku: 'SKU-CMD-0031', nombre: 'Key', categoria: 'Molino', nivel: 'Intermedio', stock: 8, precio: 7450 },
    { sku: 'SKU-CMD-0017', nombre: 'Pyxis', categoria: 'Báscula', nivel: 'Principiante', stock: 25, precio: 3450 },
    { sku: 'SKU-CMD-0018', nombre: 'Pearl', categoria: 'Báscula', nivel: 'Intermedio', stock: 0, precio: 4200 },
];

function renderizarTabla() {
    //selecciona el id de la tabla del html
    const tbody = document.getElementById('tablaProductos');
    //limpia tabla
    tbody.innerHTML = '';
    
    //recorrer cada producto: toma el array de productos y recorre uno por uno
    //por cada producto, ejecuta todo lo que esta dentro de las llaves
    productos.forEach(producto => {
        //si el stock del producto es 0, la variable stockClass vale 'stock-cero' y si no, es bacio
        const stockClass = producto.stock === 0 ? 'stock-cero' : '';
        //crear fila de producto html
        const row = `
            <tr>
                <td>${producto.sku}</td>
                <td>${producto.nombre}</td>
                <td>${producto.categoria}</td>
                <td>${producto.nivel}</td>
                <td class="${stockClass}">${producto.stock}</td>
                <td>$${producto.precio.toLocaleString()}</td>
                <td>
                    <button class="btn-editar" onclick="editarProducto('${producto.sku}')">EDITAR</button>
                    <button class="btn-eliminar" onclick="eliminarProducto('${producto.sku}')">BORRAR</button>
                </td>
            </tr>
        `;
        //insertar la fila en la tabla "anade esto a lo que ya hay"
        tbody.innerHTML += row;
    });
}

function editarProducto(sku) {
    //busca que su sku sea igual al sku para guardar todo ese objeto en la variable producto
    const producto = productos.find(p => p.sku === sku);
    //comprovar que la variable producto exista
    if (producto) {
        //asignar las variables del html con su objeto de js
        document.getElementById('nombre').value = producto.nombre;
        document.getElementById('categoria').value = producto.categoria;
        document.getElementById('precio').value = producto.precio;
        document.getElementById('stock').value = producto.stock;
        document.getElementById('nivel').value = producto.nivel;
        //abrir el modal de bootstrap pasandole el id del html
        const modal = new bootstrap.Modal(document.getElementById('productoModal'));
        //hacer que aparezca el modal
        modal.show();
    }
}

function eliminarProducto(sku) {
    if (confirm('¿Estás seguro de eliminar este producto?')) {

        //crea un nuevo array con la condicion de guardar todos los productos a excepcion de 
        //sku eliminado
        productos = productos.filter(p => p.sku !== sku);
        //actualiza la tabla
        renderizarTabla();
    }
}

document.getElementById('btnGuardar').addEventListener('click', () => {
    // Aquí iría la lógica para guardar
    alert('Producto guardado');
});

// Inicializar
renderizarTabla();