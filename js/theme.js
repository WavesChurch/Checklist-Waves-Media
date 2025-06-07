const body = document.body;
const toggleBtn = document.getElementById('toggleTheme');
const themeIcon = document.getElementById('themeIcon');

// Apply the given theme
function setTheme(theme) {
  const isDark = theme === 'dark';
  body.classList.toggle('dark-mode', isDark);
  themeIcon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
}

// Detect initial theme
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
setTheme(initialTheme);

// Toggle and save theme
toggleBtn.addEventListener('click', () => {
  const isDark = body.classList.toggle('dark-mode');
  const newTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('theme', newTheme);
  themeIcon.className = isDark ? 'bi bi-sun-fill' : 'bi bi-moon-fill';
});