function obtenerTemaGuardado() {
  try {
    return localStorage.getItem('coffeemod-theme') === 'light' ? 'light' : 'dark';
  } catch {
    return 'dark';
  }
}

function guardarTema(theme) {
  try {
    localStorage.setItem('coffeemod-theme', theme);
  } catch {
  }
}

export function initTheme() {
  const savedTheme = obtenerTemaGuardado();
  document.documentElement.setAttribute('data-theme', savedTheme);
  actualizarIconoBoton(savedTheme);
}

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  guardarTema(newTheme);
  
  actualizarIconoBoton(newTheme);
}

function actualizarIconoBoton(theme) {
  const btnToggle = document.getElementById('btn-theme-toggle');
  if (btnToggle) {
    if (theme === 'light') {
      btnToggle.innerHTML = `<i class="bi bi-sun-fill"></i> MODO`;
    } else {
      btnToggle.innerHTML = `<i class="bi bi-moon-fill"></i> MODO`;
    }
  }
}
