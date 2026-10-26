// formulario de contacto: muestra la alerta al enviar
const form = document.getElementById('formContacto');
const alerta = document.getElementById('alertaEnviado');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  alerta.classList.replace('d-none', 'd-flex');
  form.reset();
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
