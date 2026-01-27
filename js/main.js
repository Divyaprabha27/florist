/* Floraé - Main Script */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Initialization
  const themeToggleBtn = document.getElementById('theme-toggle');
  const storedTheme = localStorage.getItem('florae_theme');


  /* 
  // Disable automatic theme restoration - Always start Light
  // Apply saved theme or default to light
  if (storedTheme === 'dark') {
    setTheme('dark');
  } else {
    setTheme('light');
  }
  */
  setTheme('light'); // Force Light Mode initialization

  // 2. Event Listener
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(newTheme);
    });
  }

  // 3. Scroll to Top Button
  const scrollTopBtn = document.getElementById('scrollToTopBtn');

  if (scrollTopBtn) {
    // Show/Hide button on scroll
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        scrollTopBtn.classList.add('show');
      } else {
        scrollTopBtn.classList.remove('show');
      }
    });

    // Scroll to top on click
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
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
