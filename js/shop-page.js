import { initI18n, t } from './i18n.js';
import { renderHeader, renderFooter, updateCartCount } from './utils.js';

export const el = id => document.getElementById(id);
export function startPage(activePage = '') {
  renderHeader(activePage);
  renderFooter();
  initI18n();
  const titleKey = document.querySelector('main h1[data-i18n]')?.dataset.i18n;
  if (titleKey) {
    const title = () => { document.title = t(titleKey) + ' · Sport Zone'; };
    title();
    window.addEventListener('langChange', title);
  }
  updateCartCount();
  window.addEventListener('storage', event => {
    if (event.key === 'sz_cart' || event.key === null) updateCartCount();
  });
}

export function message(node, key) {
  node.dataset.i18n = key;
  node.textContent = t(key);
}

export function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text != null) node.textContent = text;
  if (className) node.className = className;
  return node;
}

export function picture(container, url, alt, fallback = '👟') {
  container.textContent = fallback;
  if (!url) return;
  const img = new Image();
  img.alt = alt;
  img.onerror = () => { container.textContent = fallback; };
  img.src = url;
  container.replaceChildren(img);
}
