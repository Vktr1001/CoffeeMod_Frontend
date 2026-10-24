// formulario de contacto: muestra la alerta al enviar
const form = document.getElementById('formContacto');
const alerta = document.getElementById('alertaEnviado');

const textoAlerta = document.getElementById('textoAlerta');
const boton = form.querySelector('button[type="submit"]');

// envía los datos a Formspree sin salir de la página
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  boton.disabled = true;

  try {
    const respuesta = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (!respuesta.ok) throw new Error();
    textoAlerta.textContent = 'Mensaje enviado. Te respondemos pronto.';
    form.reset();
  } catch {
    textoAlerta.textContent = 'No se pudo enviar. Intenta de nuevo.';
  }

  alerta.classList.replace('d-none', 'd-flex');
  boton.disabled = false;
});

alerta.querySelector('.btn-close').addEventListener('click', () => {
  alerta.classList.replace('d-flex', 'd-none');
});

// teléfono: solo números, máximo 10, separados de dos en dos (55 12 34 56 78)
const telefono = document.getElementById('telefono');

telefono.addEventListener('input', () => {
  const digitos = telefono.value.replace(/\D/g, '').slice(0, 10);
  telefono.value = digitos.match(/.{1,2}/g)?.join(' ') || '';
});
