const themeKey = 'dkbio-theme';
const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
let themePreference;

try {
  const savedTheme = localStorage.getItem(themeKey);
  if (savedTheme === 'dark' || savedTheme === 'light') themePreference = savedTheme;
} catch {
  // The site can still use the system theme when storage is disabled.
}

function applyTheme() {
  const theme = themePreference ?? (systemTheme.matches ? 'dark' : 'light');
  document.documentElement.dataset.bsTheme = theme;
  document.getElementById('theme-toggle')?.setAttribute('aria-pressed', String(theme === 'dark'));
}

applyTheme();
systemTheme.addEventListener('change', applyTheme);

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('theme-toggle');
  if (!toggle) return;

  toggle.hidden = false;
  applyTheme();
  toggle.addEventListener('click', () => {
    themePreference = document.documentElement.dataset.bsTheme === 'dark' ? 'light' : 'dark';
    try {
      localStorage.setItem(themeKey, themePreference);
    } catch {
      // Keep the current choice for this page.
    }
    applyTheme();
  });
});
