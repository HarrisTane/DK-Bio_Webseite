'use strict';

const byId = id => document.getElementById(id);
const labels = JSON.parse(document.body.dataset.labels);
const language = document.documentElement.lang;
const storage = {
  get(key) { try { return localStorage.getItem('dkbio-' + key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem('dkbio-' + key, value); } catch {} },
};
const cards = [...document.querySelectorAll('.card')];
const catalog = new Map(cards.map(card => [card.dataset.id, card]));
const normalize = text => text.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLocaleLowerCase(language);
let saved = new Set();
try {
  const ids = JSON.parse(storage.get('saved') || '[]');
  if (Array.isArray(ids)) saved = new Set(ids.filter(id => catalog.has(id)));
} catch {}
let filter = '0';

function updateCatalog() {
  const term = normalize(byId('search').value.trim());
  let visible = 0;
  cards.forEach(card => {
    const name = card.querySelector('h3').textContent;
    const active = saved.has(card.dataset.id);
    card.hidden = !(filter === '0' || card.dataset.category === filter) ||
      !normalize(name + ' ' + card.querySelector('p').textContent).includes(term);
    if (!card.hidden) visible++;
    setSaveButton(card.querySelector('.save'), active, name);
  });
  byId('no-results').hidden = visible > 0;
  byId('results').textContent = new Intl.NumberFormat(language).format(visible);
  byId('saved-count').textContent = saved.size;
}

function setSaveButton(button, active, name) {
  button.textContent = active ? labels.saved : labels.save;
  button.setAttribute('aria-label', button.textContent + ' · ' + name);
  button.setAttribute('aria-pressed', active);
}

function toggleSaved(id) {
  if (saved.has(id)) saved.delete(id);
  else saved.add(id);
  storage.set('saved', JSON.stringify([...saved]));
  updateCatalog();
}

function showDialog(title, content) {
  byId('dialog-title').textContent = title;
  byId('dialog-content').replaceChildren(...content);
  if (!byId('dialog').open) byId('dialog').showModal();
}

function openProduct(card) {
  const name = card.querySelector('h3').textContent;
  const button = document.createElement('button');
  button.className = 'btn save';
  setSaveButton(button, saved.has(card.dataset.id), name);
  button.addEventListener('click', () => {
    toggleSaved(card.dataset.id);
    setSaveButton(button, saved.has(card.dataset.id), name);
  });
  showDialog(name, [card.querySelector('img').cloneNode(), card.querySelector('p').cloneNode(true), button]);
}

function openSaved(focusIndex) {
  const title = byId('wishlist').childNodes[0].textContent.replace('♡', '').trim();
  if (saved.size === 0) {
    const empty = document.createElement('p');
    empty.textContent = labels.empty;
    showDialog(title, [empty]);
    byId('dialog').querySelector('.icon').focus();
    return;
  }

  const names = [];
  const list = document.createElement('ul');
  list.className = 'saved-list';
  for (const id of saved) {
    const name = catalog.get(id).querySelector('h3').textContent;
    const row = document.createElement('li');
    const label = document.createElement('span');
    const button = document.createElement('button');
    label.textContent = name;
    button.textContent = labels.remove;
    button.className = 'plain';
    button.setAttribute('aria-label', labels.remove + ' · ' + name);
    const index = names.length;
    button.addEventListener('click', () => { toggleSaved(id); openSaved(index); });
    names.push(name);
    row.append(label, button);
    list.append(row);
  }
  const mail = document.createElement('a');
  mail.className = 'btn primary';
  mail.textContent = document.body.dataset.draft;
  mail.href = 'mailto:Contact.dkbio@gmail.com?subject=' + encodeURIComponent(labels.subject) +
    '&body=' + encodeURIComponent(labels.message + '\n\n' + names.map(name => '• ' + name).join('\n') + '\n');
  showDialog(title, [list, mail]);
  if (focusIndex !== undefined) list.querySelectorAll('button')[Math.min(focusIndex, names.length - 1)].focus();
}

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    filter = button.dataset.filter;
    document.querySelectorAll('[data-filter]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    updateCatalog();
  });
});
byId('search').addEventListener('input', updateCatalog);
byId('wishlist').addEventListener('click', () => openSaved());
cards.forEach(card => {
  card.querySelector('.save').addEventListener('click', () => toggleSaved(card.dataset.id));
  card.querySelector('.detail').addEventListener('click', () => openProduct(card));
});

const darkMode = matchMedia('(prefers-color-scheme: dark)');
function paintTheme() {
  const theme = storage.get('theme') || (darkMode.matches ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  byId('theme').setAttribute('aria-pressed', String(theme === 'dark'));
}
byId('theme').addEventListener('click', () => {
  storage.set('theme', document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
  paintTheme();
});
darkMode.addEventListener('change', paintTheme);
paintTheme();

const compact = matchMedia('(max-width: 670px)');
function updateMenu(open = false) {
  byId('menu').hidden = !compact.matches;
  byId('menu').setAttribute('aria-expanded', String(open));
  byId('nav').hidden = compact.matches && !open;
}
compact.addEventListener('change', () => updateMenu());
byId('menu').addEventListener('click', () => updateMenu(byId('menu').getAttribute('aria-expanded') === 'false'));
byId('nav').addEventListener('click', event => { if (event.target.closest('a')) updateMenu(); });
updateMenu();
updateCatalog();

const pages = { de: 'index.html', fr: 'fr.html', en: 'en.html' };
const preferred = storage.get('lang');
if (language === 'de' && location.pathname.endsWith('/') && (preferred === 'fr' || preferred === 'en')) {
  location.replace(pages[preferred] + location.hash);
}
document.querySelectorAll('.languages a').forEach(link => {
  link.addEventListener('click', () => {
    storage.set('lang', link.lang);
    link.hash = location.hash;
  });
});
