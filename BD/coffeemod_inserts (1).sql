-- CoffeeMod (1001 Labs): datos de prueba v2
-- Ejecutar después de coffeemod.sql, en este orden (por las llaves foráneas)

USE coffeemod;

-- ===== Catálogos =====

INSERT INTO roles (nombre) VALUES
('administrador'),
('comprador');

INSERT INTO estados_pedido (nombre) VALUES
('pendiente'),
('pagado'),
('en proceso'),
('enviado'),
('entregado'),
('cancelado');

INSERT INTO acciones (nombre) VALUES
('crear'),
('actualizar'),
('eliminar'),
('desactivar'),
('activar');

INSERT INTO categorias (nombre) VALUES
('Molinos'),
('Básculas'),
('Hervidores'),
('Cafeteras'),
('Café de especialidad'),
('Métodos de filtrado'),
('Accesorios'),
('Filtros'),
('Tazas'),
('Mixología');

INSERT INTO marcas (nombre) VALUES
('Acaia'),
('Weber'),
('Comandante'),
('Fellow'),
('Hario'),
('Breville'),
('Bialetti'),
('Café de Origen'),
('Chemex'),
('Barista Kit'),
('1001 Labs');

-- ===== Productos (17) =====
INSERT INTO productos (sku, nombre, descripcion, precio, stock, nivel, imagen_url, activo, id_categoria, id_marca) VALUES
('SKU-CMD-0042', 'Orbit', 'Molino eléctrico de alta precisión con fresas de 64 mm, ideal para espresso y filtrados.', 12900.00, 7, 'avanzado', 'img/productos/orbit.jpg', TRUE, 1, 1),
('SKU-CMD-0031', 'Key', 'Molino de fresas cónicas con molienda uniforme y casi cero retención.', 7450.00, 4, 'intermedio', 'img/productos/molino-rectangular-blanco.jpg', TRUE, 1, 2),
('SKU-CMD-0060', 'Comandante C40', 'Molino manual premium, perfecto para filtrados y prensa francesa.', 5900.00, 12, 'intermedio', 'img/productos/molinos-categoria-home.jpg', TRUE, 1, 3),
('SKU-CMD-0017', 'Pyxis', 'Báscula compacta con temporizador, precisión de 0.1 g.', 2490.00, 15, 'intermedio', 'img/productos/pyxis.jpg', TRUE, 2, 1),
('SKU-CMD-0018', 'Pearl', 'Báscula profesional con modos para espresso y pour over.', 4290.00, 9, 'avanzado', 'img/productos/pearl.jpg', TRUE, 2, 1),
('SKU-CMD-0050', 'Stagg EKG', 'Hervidor eléctrico de cuello de ganso con control de temperatura.', 3990.00, 6, 'intermedio', 'img/productos/hervidor-negro-fp.jpg', TRUE, 3, 4),
('SKU-CMD-0051', 'Hervidor Buono', 'Hervidor de estufa con cuello de ganso para vertido preciso.', 1290.00, 20, 'principiante', 'img/productos/hervidor-negro-categoria-home.jpg', TRUE, 3, 5),
('SKU-CMD-0070', 'Espresso Pro', 'Cafetera de espresso con molino integrado y vaporizador de leche.', 18500.00, 3, 'avanzado', 'img/productos/cafetera-expresso-fp.jpg', TRUE, 4, 6),
('SKU-CMD-0071', 'Moka Express', 'Cafetera italiana clásica de 6 tazas.', 790.00, 25, 'principiante', 'img/productos/cafetera-negra-categoria-home.jpg', TRUE, 4, 7),
('SKU-CMD-0103', 'Huila, Colombia', 'Café de altura con notas a caramelo y frutos rojos, 340 g.', 380.00, 40, 'principiante', 'img/productos/cafe-categoria-home.jpg', TRUE, 5, 8),
('SKU-CMD-0104', 'Chiapas, México', 'Café lavado con notas a chocolate y nuez, 340 g.', 320.00, 35, 'principiante', 'img/productos/cafe-categoria-home.jpg', TRUE, 5, 8),
('SKU-CMD-0080', 'V60 Dripper', 'Método de filtrado cónico de cerámica, tamaño 02.', 450.00, 30, 'principiante', 'img/productos/metodos-categoria-home.jpg', TRUE, 6, 5),
('SKU-CMD-0081', 'Chemex 6 tazas', 'Cafetera de vidrio para filtrados limpios y brillantes.', 1150.00, 10, 'intermedio', 'img/productos/metodos-categoria-home.jpg', TRUE, 6, 9),
('SKU-CMD-0090', 'Tamper 54 mm', 'Tamper de acero inoxidable para espresso.', 690.00, 18, 'intermedio', 'img/productos/accesorios-1.webp', TRUE, 7, 10),
('SKU-CMD-0091', 'Filtros V60 x100', 'Paquete de 100 filtros de papel tamaño 02.', 150.00, 60, 'principiante', 'img/productos/accesorios-2.webp', TRUE, 8, 5),
('SKU-CMD-0095', 'Taza de cerámica', 'Taza artesanal de 250 ml.', 280.00, 50, 'principiante', 'img/productos/accesorios-1.webp', TRUE, 9, 11),
('SKU-CMD-0110', 'Set de Mixología', 'Set para cócteles con café: shaker, jigger y colador.', 1890.00, 8, 'intermedio', 'img/productos/set-mixologia.webp', TRUE, 10, 10);

-- ===== Usuarios (12: 2 administradores y 10 compradores, 1 inactivo) =====
-- Las contraseñas son de prueba; en el backend real se guardan encriptadas
INSERT INTO usuarios (nombre, correo, contrasena, telefono, nivel, activo, id_rol) VALUES
('Admin CoffeeMod', 'admin@coffeemod.shop', 'hash_prueba_01', '5511111111', 'avanzado', TRUE, 1),
('Soporte CoffeeMod', 'soporte@coffeemod.shop', 'hash_prueba_02', '5522222222', 'avanzado', TRUE, 1),
('Juan Pérez', 'juan.perez@correo.com', 'hash_prueba_03', '5512345678', 'principiante', TRUE, 2),
('María López', 'maria.lopez@correo.com', 'hash_prueba_04', '5523456789', 'intermedio', TRUE, 2),
('Carlos Hernández', 'carlos.hdz@correo.com', 'hash_prueba_05', '5534567890', 'avanzado', TRUE, 2),
('Ana Martínez', 'ana.mtz@correo.com', 'hash_prueba_06', '5545678901', 'principiante', TRUE, 2),
('Luis García', 'luis.garcia@correo.com', 'hash_prueba_07', '5556789012', 'intermedio', TRUE, 2),
('Sofía Ramírez', 'sofia.ramirez@correo.com', 'hash_prueba_08', '5567890123', 'principiante', TRUE, 2),
('Diego Torres', 'diego.torres@correo.com', 'hash_prueba_09', '5578901234', 'avanzado', TRUE, 2),
('Valeria Flores', 'valeria.flores@correo.com', 'hash_prueba_10', '5589012345', 'intermedio', TRUE, 2),
('Jorge Sánchez', 'jorge.sanchez@correo.com', 'hash_prueba_11', '5590123456', 'principiante', FALSE, 2),
('Fernanda Cruz', 'fer.cruz@correo.com', 'hash_prueba_12', '5501234567', 'intermedio', TRUE, 2);

-- ===== Direcciones (12) =====
INSERT INTO direcciones (id_usuario, pais, estado, ciudad, colonia, calle, numero_exterior, numero_interior, codigo_postal) VALUES
(3,  'México', 'Ciudad de México', 'Cuauhtémoc', 'Juárez', 'Av. Reforma', '100', NULL, '06600'),
(4,  'México', 'Ciudad de México', 'Benito Juárez', 'Narvarte', 'Av. Universidad', '450', '3B', '03020'),
(5,  'México', 'Ciudad de México', 'Coyoacán', 'Del Carmen', 'Calle Hidalgo', '25', NULL, '04100'),
(6,  'México', 'Jalisco', 'Guadalajara', 'Centro', 'Av. Juárez', '300', NULL, '44100'),
(7,  'México', 'Puebla', 'Puebla', 'Centro', 'Calle Morelos', '12', NULL, '72000'),
(8,  'México', 'Nuevo León', 'Monterrey', 'Centro', 'Av. Revolución', '77', NULL, '64000'),
(9,  'México', 'Querétaro', 'Querétaro', 'Centro', 'Calle Allende', '8', NULL, '76000'),
(10, 'México', 'Ciudad de México', 'Álvaro Obregón', 'San Ángel', 'Av. Insurgentes Sur', '900', NULL, '01000'),
(11, 'México', 'Estado de México', 'Toluca', 'Centro', 'Calle Zaragoza', '15', NULL, '50000'),
(12, 'México', 'Ciudad de México', 'Miguel Hidalgo', 'Polanco', 'Av. Chapultepec', '200', NULL, '11560'),
(5,  'México', 'Ciudad de México', 'Coyoacán', 'Chimalistac', 'Av. Miguel Ángel de Quevedo', '500', NULL, '04310'),
(3,  'México', 'Ciudad de México', 'Cuauhtémoc', 'Roma Norte', 'Calle Orizaba', '45', '2', '06700');

-- ===== Pedidos (12) - el total coincide con la suma de su detalle =====
-- Estados: 1 pendiente, 2 pagado, 3 en proceso, 4 enviado, 5 entregado, 6 cancelado
INSERT INTO pedidos (id_usuario, id_direccion, id_estado, fecha, total) VALUES
(3,  1,  5, '2026-11-01 10:15:00', 600.00),
(5,  3,  5, '2026-11-02 18:40:00', 12900.00),
(4,  2,  5, '2026-11-03 09:05:00', 910.00),
(7,  5,  4, '2026-11-04 13:20:00', 3990.00),
(6,  4,  5, '2026-11-05 20:10:00', 790.00),
(9,  7,  4, '2026-11-06 11:45:00', 3180.00),
(10, 8,  1, '2026-11-07 16:30:00', 1150.00),
(5,  11, 3, '2026-11-08 12:00:00', 18500.00),
(8,  6,  6, '2026-11-09 08:50:00', 960.00),
(11, 9,  4, '2026-11-10 19:25:00', 5900.00),
(12, 10, 2, '2026-11-11 14:35:00', 1890.00),
(3,  12, 1, '2026-11-12 17:15:00', 560.00);

-- ===== Detalle de pedido (15) =====
INSERT INTO detalle_pedido (id_pedido, id_producto, cantidad, precio_unitario) VALUES
(1,  12, 1, 450.00),
(1,  15, 1, 150.00),
(2,  1,  1, 12900.00),
(3,  10, 2, 380.00),
(3,  15, 1, 150.00),
(4,  6,  1, 3990.00),
(5,  9,  1, 790.00),
(6,  4,  1, 2490.00),
(6,  14, 1, 690.00),
(7,  13, 1, 1150.00),
(8,  8,  1, 18500.00),
(9,  11, 3, 320.00),
(10, 3,  1, 5900.00),
(11, 17, 1, 1890.00),
(12, 16, 2, 280.00);

-- ===== Bitácora de cambios (10) - solo administradores (id 1 y 2) =====
-- Acciones: 1 crear, 2 actualizar, 3 eliminar, 4 desactivar, 5 activar
INSERT INTO bitacora_cambios (id_usuario, id_producto, id_accion, detalle, fecha_hora) VALUES
(1, 1,  1, 'Alta del producto Orbit', '2026-10-20 09:00:00'),
(1, 2,  1, 'Alta del producto Key', '2026-10-20 09:05:00'),
(1, 8,  1, 'Alta del producto Espresso Pro', '2026-10-20 09:10:00'),
(2, 10, 1, 'Alta del café Huila, Colombia', '2026-10-21 10:00:00'),
(2, 10, 2, 'Precio cambiado de 350 a 380', '2026-10-28 12:30:00'),
(1, 5,  2, 'Stock actualizado de 5 a 9', '2026-11-01 08:45:00'),
(2, 9,  2, 'Descripción corregida', '2026-11-03 15:20:00'),
(1, 17, 1, 'Alta del Set de Mixología', '2026-11-05 11:10:00'),
(2, 6,  4, 'Producto desactivado temporalmente por falta de stock', '2026-11-08 17:00:00'),
(2, 6,  5, 'Producto activado de nuevo al llegar inventario', '2026-11-09 10:00:00');

-- ===== Mensajes de contacto (10) =====
INSERT INTO mensajes_contacto (nombre, correo, mensaje, fecha) VALUES
('Roberto Díaz', 'roberto.diaz@correo.com', '¿Hacen envíos a Mérida?', '2026-11-01 09:30:00'),
('Laura Mendoza', 'laura.mendoza@correo.com', '¿El molino Key sirve para espresso?', '2026-11-02 11:15:00'),
('Pedro Castillo', 'pedro.castillo@correo.com', 'Mi pedido llegó incompleto, me falta un filtro.', '2026-11-03 14:00:00'),
('Gabriela Ortiz', 'gaby.ortiz@correo.com', '¿Tienen tienda física?', '2026-11-04 16:45:00'),
('Ricardo Vega', 'ricardo.vega@correo.com', '¿Cuánto tarda el envío a Monterrey?', '2026-11-05 10:20:00'),
('Paola Ruiz', 'paola.ruiz@correo.com', 'Me gustaría una recomendación de café para V60.', '2026-11-06 12:10:00'),
('Andrés Navarro', 'andres.navarro@correo.com', '¿Qué garantía tiene la Espresso Pro?', '2026-11-07 18:00:00'),
('Mónica Reyes', 'monica.reyes@correo.com', '¿Puedo pagar a meses sin intereses?', '2026-11-08 13:35:00'),
('Héctor Morales', 'hector.morales@correo.com', '¿Venden refacciones para el Comandante?', '2026-11-09 09:50:00'),
('Daniela Silva', 'daniela.silva@correo.com', '¿Dan cursos de barismo?', '2026-11-10 17:25:00');

-- ===== Consultas de ejemplo (para la expo) =====

-- Todos los pedidos que van a Ciudad de México (el ejemplo de Rocío)
SELECT p.id_pedido, u.nombre AS cliente, d.ciudad, e.nombre AS estado, p.total
FROM pedidos p
JOIN usuarios u ON p.id_usuario = u.id_usuario
JOIN direcciones d ON p.id_direccion = d.id_direccion
JOIN estados_pedido e ON p.id_estado = e.id_estado
WHERE d.estado = 'Ciudad de México';

-- Productos con su marca y categoría
SELECT pr.nombre, m.nombre AS marca, c.nombre AS categoria, pr.precio
FROM productos pr
JOIN marcas m ON pr.id_marca = m.id_marca
JOIN categorias c ON pr.id_categoria = c.id_categoria;
