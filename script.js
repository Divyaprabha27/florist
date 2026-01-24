// Theme Toggle Logic
const themeParams = {
    key: 'weddingFloristTheme',
    light: 'light',
    dark: 'dark'
};

function initTheme() {
    const savedTheme = localStorage.getItem(themeParams.key);
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        updateToggleIcon(savedTheme);
    } else if (prefersDark) {
        document.documentElement.setAttribute('data-theme', themeParams.dark);
        updateToggleIcon(themeParams.dark);
    }
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === themeParams.dark ? themeParams.light : themeParams.dark;

    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem(themeParams.key, target);
    updateToggleIcon(target);

    // Anime.js effect on background
    anime({
        targets: 'body',
        easing: 'easeInOutQuad',
        duration: 500
    });
}

function updateToggleIcon(theme) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;

    if (theme === themeParams.dark) {
        btn.innerHTML = '<i class="bi bi-sun-fill"></i>';
        btn.setAttribute('aria-label', 'Switch to light mode');
    } else {
        btn.innerHTML = '<i class="bi bi-moon-fill-stars"></i>';
        btn.setAttribute('aria-label', 'Switch to dark mode');
    }
}

// Global Animation Triggers
document.addEventListener('DOMContentLoaded', () => {
    initTheme();

    const toggleBtn = document.getElementById('theme-toggle');
    if (toggleBtn) {
        toggleBtn.addEventListener('click', toggleTheme);
    }

    // Page load animation
    anime({
        targets: '.fade-in-up',
        translateY: [20, 0],
        opacity: [0, 1],
        delay: anime.stagger(100), // delay increased by 100ms for each element
        easing: 'spring(1, 80, 10, 0)'
    });

    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem(themeParams.key)) {
            const newTheme = e.matches ? themeParams.dark : themeParams.light;
            document.documentElement.setAttribute('data-theme', newTheme);
            updateToggleIcon(newTheme);
        }
    });
});
