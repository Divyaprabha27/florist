/* Floraé - Main Script */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Initialization
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('florae_theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Apply saved theme or system preference
  if (storedTheme === 'dark' || (!storedTheme && systemDark)) {
    setTheme('dark');
  } else {
    setTheme('light');
  }

  // 2. Event Listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }
});

function setTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('florae_theme', theme);

  // Update Icon
  const btn = document.getElementById('theme-toggle');
  if (btn) {
    if (theme === 'dark') {
      btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    } else {
      btn.innerHTML = '<i class="bi bi-moon-fill"></i>';
    }
  }

  // Bootstrap overrides via class if needed (optional safety)
  if (theme === 'dark') {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}
