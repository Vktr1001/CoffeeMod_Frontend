//datos de ejemplo muestra
let productos = [
    { sku: 'SKU-CMD-0042', nombre: 'Orbit', categoria: 'Molino', nivel: 'Avanzado', stock: 12, precio: 12900 },
    { sku: 'SKU-CMD-0031', nombre: 'Key', categoria: 'Molino', nivel: 'Intermedio', stock: 8, precio: 7450 },
    { sku: 'SKU-CMD-0017', nombre: 'Pyxis', categoria: 'Báscula', nivel: 'Principiante', stock: 25, precio: 3450 },
    { sku: 'SKU-CMD-0018', nombre: 'Pearl', categoria: 'Báscula', nivel: 'Intermedio', stock: 0, precio: 4200 },
    { sku: 'SKU-CMD-0050', nombre: 'Stagg EKG', categoria: 'Hervidor', nivel: 'Principiante', stock: 14, precio: 3900 },
    { sku: 'SKU-CMD-0103', nombre: 'Huila, Colombia', categoria: 'Café', nivel: 'Principiante', stock: 40, precio: 320 },
];

function renderizarTabla() {
    //selecciona el id de la tabla del html
    const tbody = document.getElementById('tablaProductos');
    //limpia tabla
    tbody.innerHTML = '';
    
    //recorrer cada producto: toma el array de productos y recorre uno por uno
    //por cada producto, ejecuta todo lo que esta dentro de las llaves
    productos.forEach(producto => {
        //si el stock del producto es 0, la variable stockClass vale 'stock-cero' y si no, es vacio
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
        //insertar la fila en la tabla "añade esto a lo que ya hay"
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

// Tarea 8 validacion del formulario

function validarSku(valor) {
    if (valor === '') return 'El SKU es obligatorio.';
    return '';
}

function validarNombre(valor) {
    if (valor === '') return 'El nombre es obligatorio.';
    if (valor.length < 2) return 'El nombre debe tener al menos 2 letras.';
    return '';
}

function validarPrecio(valor) {
    if (valor === '') return 'El precio es obligatorio.';
    if (Number(valor) <= 0) return 'El precio debe ser mayor que 0.';
    return '';
}

function validarStock(valor) {
    if (valor === '') return 'El stock es obligatorio.';
    if (Number(valor) < 0 || !Number.isInteger(Number(valor))) return 'El stock debe ser un número entero de 0 o más.';
    return '';
}

function validarImagen(valor) {
    // la imagen es opcional, pero si la escriben debe ser un link
    if (valor !== '' && !valor.startsWith('http')) return 'La imagen debe ser un link que empiece con http.';
    return '';
}



// Tarea 8: muestra una alerta de Bootstrap 

function mostrarAlerta(tipo, mensaje) {
    const alerta = document.getElementById('alertaProducto');
    alerta.innerHTML = `
        <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
            ${mensaje}
            <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
        </div>
    `;
}

document.getElementById('btnGuardar').addEventListener('click', () => {
    // 1. leer lo que escribió el usuario (trim quita espacios de más)
    const sku = document.getElementById('sku').value.trim();
    const nombre = document.getElementById('nombre').value.trim();
    const categoria = document.getElementById('categoria').value;
    const precio = document.getElementById('precio').value.trim();
    const stock = document.getElementById('stock').value.trim();
    const nivel = document.getElementById('nivel').value;
    const imagen = document.getElementById('imagen').value.trim();
    const descripcion = document.getElementById('descripcion').value.trim();

    // 2. validar cada campo y quedarnos solo con los errores
    const errores = [
        validarSku(sku),
        validarNombre(nombre),
        validarPrecio(precio),
        validarStock(stock),
        validarImagen(imagen)
    ].filter(error => error !== '');

    // 3. si hay errores, mostrarlos en una alerta roja y no guardar
    if (errores.length > 0) {
        mostrarAlerta('danger', errores.join('<br>'));
        return;
    }

        // 4. todo bien: armar el objeto del producto con los datos del formulario
    const nuevoProducto = {
        sku: sku,
        nombre: nombre,
        categoria: categoria,
        precio: Number(precio),
        stock: Number(stock),
        nivel: nivel,
        imagen: imagen,
        descripcion: descripcion
    };

    // convertirlo a formato JSON y mostrarlo en la consola
    const productoJSON = JSON.stringify(nuevoProducto, null, 2);
    console.log(productoJSON);

    // agregarlo a la tabla, mostrar alerta verde y limpiar el formulario
    productos.push(nuevoProducto);
    renderizarTabla();
    mostrarAlerta('success', `Producto "${nombre}" guardado correctamente.`);
    document.getElementById('formProducto').reset();
});

// Inicializar
renderizarTabla();