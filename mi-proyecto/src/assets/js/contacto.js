// script de la pagina de contacto (validacion y envio con formspree)

const formulario = document.querySelector('#form-contacto');

// pinta el campo en rojo (con mensaje) o en verde
function marcarCampo(input, error) {
  const feedback = input.nextElementSibling;

  if (error) {
    input.classList.add('is-invalid');
    input.classList.remove('is-valid');
    feedback.textContent = error;
  } else {
    input.classList.add('is-valid');
    input.classList.remove('is-invalid');
    feedback.textContent = '';
  }
}

// nombre: obligatorio, minimo 3 letras, solo letras y espacios
function validarNombre(valor) {
  if (valor === '') {
    return 'Escribe tu nombre';
  }
  if (valor.length < 3) {
    return 'El nombre debe tener al menos 3 letras';
  }
  if (!/^[a-zA-ZÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(valor)) {
    return 'El nombre solo puede contener letras y espacios';
  }
  return '';
}

// email: obligatorio, formato valido
function validarEmail(valor) {
  if (valor === '') {
    return 'Escribe tu correo electrónico';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor)) {
    return 'El correo electrónico no es válido';
  }
  return '';
}

// telefono: obligatorio, solo numeros, 10 dígitos
function validarTelefono(valor) {
  if (valor === '') {
    return 'Escribe tu número de teléfono';
  }
  if (!/^\d+$/.test(valor)) {
    return 'El número de teléfono solo puede contener números';
  }
  if (valor.length !== 10) {
    return 'El número de teléfono debe tener 10 dígitos';
  }
  return '';
}

// mensaje: obligatorio, minimo 10 letras
function validarMensaje(valor) {
  if (valor === '') {
    return 'Escribe tu mensaje';
  }
  if (valor.length < 10) {
    return 'El mensaje debe tener al menos 10 letras';
  }
  return '';
}

formulario.addEventListener('submit', async (evento) => {
  evento.preventDefault();

  const nombre = formulario.nombre.value.trim();
  const email = formulario.email.value.trim();
  const telefono = formulario.telefono.value.trim();
  const mensaje = formulario.mensaje.value.trim();

  // valida cada campo y lo pinta de rojo o verde
  const errorNombre = validarNombre(nombre);
  const errorEmail = validarEmail(email);
  const errorTelefono = validarTelefono(telefono);
  const errorMensaje = validarMensaje(mensaje);

  marcarCampo(formulario.nombre, errorNombre);
  marcarCampo(formulario.email, errorEmail);
  marcarCampo(formulario.telefono, errorTelefono);
  marcarCampo(formulario.mensaje, errorMensaje);

  // si algun campo tiene error, no se envia
  if (errorNombre || errorEmail || errorTelefono || errorMensaje) {
    return;
  }

  // envia los datos a formspree sin recargar la pagina
  try {
    const respuesta = await fetch('https://formspree.io/f/mgaavwop', {
      method: 'POST',
      body: new FormData(formulario),
      headers: { Accept: 'application/json' }
    });

    if (respuesta.ok) {
      console.log('Enviado');
    } else {
      console.log('Formspree respondio con error');
    }
  } catch (error) {
    console.log('Sin conexion', error);
  }
});