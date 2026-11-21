const CLAVE_USUARIOS = "coffeemod-usuarios";

const usuariosPrueba = [
  {
    nombre: "Admin CoffeeMod",
    correo: "admin@coffeemod.shop",
    contrasena: "Admin123",
    rol: "admin",
  },
  {
    nombre: "Juan Pérez",
    correo: "juan@correo.com",
    contrasena: "Prueba123",
    rol: "cliente",
  },
];

export function inicializarUsuariosPrueba() {
  try {
    const existentes = localStorage.getItem(CLAVE_USUARIOS);

    if (existentes === null) {
      localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuariosPrueba));
    }
  } catch (error) {
    console.error("Error al inicializar usuarios de prueba en localStorage:", error);
  }
}

// Se ejecuta automáticamente al cargar este archivo como módulo
inicializarUsuariosPrueba();