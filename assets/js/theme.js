(() => {
  const root = document.documentElement;
  let saved;
  try {
    saved = localStorage.getItem('color-theme');
  } catch (_) {
    // Storage may be unavailable; the toggle still works for this visit.
  }
  root.dataset.theme = saved === 'dark' || saved === 'light'
    ? saved
    : window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'theme-toggle';
    button.setAttribute('aria-label', 'Dark mode');
    button.title = 'Toggle dark mode';
    button.innerHTML = `<svg viewBox="0 0 36 40" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="30" height="5" rx="1.5" />
      <path class="lamp-bulb" d="M7 8a9.5 9.5 0 0 0 19 0Z" />
      <path class="lamp-rays" d="M10 22l-2 2.5M16.5 24v3M22 22l2 2.5" />
      <path d="M29 9v21" stroke-dasharray="1 3" />
      <circle cx="29" cy="34" r="3" />
    </svg>`;
    button.setAttribute('aria-pressed', String(root.dataset.theme === 'dark'));
    button.addEventListener('click', () => {
      const dark = root.dataset.theme !== 'dark';
      root.dataset.theme = dark ? 'dark' : 'light';
      button.setAttribute('aria-pressed', String(dark));
      try {
        localStorage.setItem('color-theme', root.dataset.theme);
      } catch (_) {
        // Keep the selected theme even when it cannot be saved.
      }
    });
    document.querySelector('.site-header .site-links').append(button);
  });
})();
