import "./usuarios-prueba.js";

const CLAVE_USUARIOS = "coffeemod-usuarios";

function obtenerUsuarios() {
    try {
        const datos = JSON.parse(localStorage.getItem(CLAVE_USUARIOS));
        return Array.isArray(datos) ? datos : [];
    } catch {
        return [];
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const formRegistro = document.querySelector("#form-registro");
    const divAlertas = document.querySelector("#alertas");

    // Botones de nivel de café: solo uno activo a la vez (se puede deseleccionar)
    const botonesNivel = document.querySelectorAll("button.cafePro");
    botonesNivel.forEach((boton) => {
        boton.addEventListener("click", () => {
            const yaActivo = boton.getAttribute("aria-pressed") === "true";
            botonesNivel.forEach((b) => b.setAttribute("aria-pressed", "false"));
            boton.setAttribute("aria-pressed", String(!yaActivo));
        });
    });

    if (formRegistro) {
        formRegistro.addEventListener("submit", (e) => {
            e.preventDefault(); // Evita que se recargue la página

            // Capturar valores usando los ID de registro.html
            const nombre = document.querySelector("#nombre").value.trim();
            const correo = document.querySelector("#correo").value.trim();
            const telefono = document.querySelector("#telefono").value.trim();
            const contrasena = document.querySelector("#contrasena").value;
            const confirmarContrasena = document.querySelector("#confirmarContrasena").value;
            const terminos = document.querySelector("#terminos").checked;

            // Limpiar alertas anteriores
            divAlertas.innerHTML = "";
            let errores = [];

            // 1. Validar campos vacios
            if (!nombre || !correo || !telefono || !contrasena || !confirmarContrasena) {
                errores.push("Todos los campos marcados con * son obligatorios.");
            }

            // 2. Validar formato de correo
            const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (correo && !regexCorreo.test(correo)) {
                errores.push("El formato del correo electrónico no es válido.");
            }

            // 3. Validar teléfono (ej. 10 dígitos)
            const regexTelefono = /^\d{10}$/;
            if (telefono && !regexTelefono.test(telefono)) {
                errores.push("El número de teléfono debe contener exactamente 10 dígitos.");
            }

            // Contraseña mínima (el placeholder promete 6 caracteres)
            if (contrasena && contrasena.length < 6) {
                errores.push("La contraseña debe tener al menos 6 caracteres.");
            }

            // 4. Validar que las contraseñas coincidan
            if (contrasena && confirmarContrasena && contrasena !== confirmarContrasena) {
                errores.push("Las contraseñas no coinciden.");
            }

            // 5. Validar términos y condiciones
            if (!terminos) {
                errores.push("Debes aceptar los términos y el aviso de privacidad.");
            }

            // Si hay errores, mostrarlos en alerta de Bootstrap
            if (errores.length > 0) {
                divAlertas.innerHTML = `
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <ul class="mb-0">
                            ${errores.map(err => `<li>${err}</li>`).join('')}
                        </ul>
                    </div>
                `;
                return;
            }

            // 6. Verificar si el correo ya existe en coffeemod-usuarios
            const usuarios = obtenerUsuarios();
            const correoNormalizado = correo.toLowerCase();
            const correoDuplicado = usuarios.some(
                (u) => (u.correo || "").toLowerCase() === correoNormalizado
            );

            if (correoDuplicado) {
                divAlertas.innerHTML = `
                    <div class="alert alert-warning alert-dismissible fade show" role="alert">
                        Ya existe una cuenta registrada con el correo <strong>${correo}</strong>.
                    </div>
                `;
                return;
            }

            // 7. Armar objeto usuario y guardarlo en localStorage
            const usuario = {
                nombre: nombre,
                correo: correo,
                telefono: telefono,
                contrasena: contrasena,
                rol: "cliente",
                nivelCafe: document.querySelector('button.cafePro[aria-pressed="true"]')?.textContent.trim() || null
            };

            usuarios.push(usuario);
            localStorage.setItem(CLAVE_USUARIOS, JSON.stringify(usuarios));

            console.log("Usuario guardado en coffeemod-usuarios:", JSON.stringify(usuario, null, 2));

            // Alerta de exito
            divAlertas.innerHTML = `
                <div class="alert alert-success alert-dismissible fade show" role="alert">
                    ¡Cuenta creada con éxito!
                </div>
            `;

            // limpiar el formulario
            formRegistro.reset();
            botonesNivel.forEach((b) => b.setAttribute("aria-pressed", "false"));
        });
    }
});