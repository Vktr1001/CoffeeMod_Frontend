document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#form-login");
    const divAlertas = document.querySelector("#alertas");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const correo = document.querySelector("#correo").value.trim();
        const contrasena = document.querySelector("#contrasena").value;
        const errores = [];

        if (!correo || !contrasena) {
            errores.push("Correo y contraseña son obligatorios.");
        }
        if (correo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo)) {
            errores.push("El formato del correo electrónico no es válido.");
        }
        if (contrasena && contrasena.length < 6) {
            errores.push("La contraseña debe tener al menos 6 caracteres.");
        }

        if (errores.length > 0) {
            divAlertas.innerHTML = `
                <div class="alert alert-danger" role="alert">
                    <ul class="mb-0">${errores.map(err => `<li>${err}</li>`).join("")}</ul>
                </div>`;
            return;
        }

        divAlertas.innerHTML = `<div class="alert alert-success" role="alert">Inicio de sesión correcto.</div>`;
        console.log("Login:", JSON.stringify({ correo }, null, 2)); // nunca imprimas la contraseña
    });
});