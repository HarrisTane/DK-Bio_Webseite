const menuButton = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-links');
const narrowScreen = window.matchMedia('(max-width: 991px)');

function showNavigation(open) {
  nav.hidden = !open;
  menuButton.setAttribute('aria-expanded', String(open));
}

function adjustNavigation() {
  menuButton.hidden = !narrowScreen.matches;
  showNavigation(!narrowScreen.matches);
}

adjustNavigation();
narrowScreen.addEventListener('change', adjustNavigation);
menuButton.addEventListener('click', () => showNavigation(nav.hidden));
nav.parentElement.addEventListener('keydown', event => {
  if (event.key === 'Escape' && narrowScreen.matches && !nav.hidden) {
    showNavigation(false);
    menuButton.focus();
  }
});
nav.addEventListener('click', event => {
  if (narrowScreen.matches && event.target.closest('a')) {
    const section = document.getElementById(event.target.closest('a').hash.slice(1));
    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
    }
    showNavigation(false);
  }
});

const languageLinks = Array.from(document.querySelectorAll('[data-language-link]'), link => ({
  link,
  path: link.getAttribute('href'),
}));

function updateLanguageLinks() {
  const hash = window.location.hash;
  const section = document.getElementById(hash.slice(1));
  for (const { link, path } of languageLinks) {
    link.setAttribute('href', path + (section ? hash : ''));
  }
}

updateLanguageLinks();
window.addEventListener('hashchange', updateLanguageLinks);

const search = document.getElementById('price-search');
const query = document.getElementById('price-query');
const status = document.getElementById('price-status');
const rows = Array.from(document.querySelectorAll('#price-results tr'));
const normalize = text => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();
const entries = rows.map(row => [row, normalize(row.textContent.replace(/\s+/g, ' '))]);

function filterPrices() {
  const terms = normalize(query.value).trim().split(/\s+/);
  let matches = 0;
  for (const [row, text] of entries) {
    const visible = terms.every(term => text.includes(term));
    row.hidden = !visible;
    matches += Number(visible);
  }
  status.textContent = matches ? `${search.dataset.count} · ${matches}` : search.dataset.empty;
}

search.hidden = false;
query.addEventListener('input', filterPrices);
filterPrices();

document.getElementById('year').textContent = new Date().getFullYear();
