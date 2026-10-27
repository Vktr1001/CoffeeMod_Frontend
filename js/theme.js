export function initTheme() {
  const savedTheme = localStorage.getItem('coffeemod-theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  actualizarIconoBoton(savedTheme);
}

export function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('coffeemod-theme', newTheme);
  
  actualizarIconoBoton(newTheme);
}

// Función auxiliar para cambiar el icono del botón según el tema activo
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