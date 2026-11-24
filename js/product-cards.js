import { t } from './i18n.js';
import { addToCart, formatPrice, showToast } from './utils.js';

export const sportIcons = { football: '⚽', running: '🏃', badminton: '🏸', gym: '💪' };

export function renderCards(grid, products) {
  grid.replaceChildren();
  for (const product of products) {
    const card = document.createElement('article');
    card.className = 'product-card';
    card.innerHTML = `
      <a class="product-card-img"><span></span><div class="product-card-badges"></div></a>
      <div class="product-card-body">
        <div class="product-card-cat"></div>
        <div class="product-card-name"><a></a></div>
        <div class="product-card-sizes"></div>
        <div class="product-card-footer">
          <div><div class="product-price-old"></div><div class="product-price"></div></div>
          <button type="button" class="product-card-add">+</button>
        </div>
      </div>`;
    const find = selector => card.querySelector(selector);
    const url = 'product-detail.html?id=' + encodeURIComponent(product.id);
    const picture = find('.product-card-img');
    picture.href = url;
    picture.setAttribute('aria-label', product.name);
    const icon = find('.product-card-img > span');
    icon.textContent = sportIcons[product.category] || '👟';
    if (product.image) {
      const img = new Image();
      img.loading = 'lazy';
      img.alt = product.name;
      img.addEventListener('error', () => img.replaceWith(icon), { once: true });
      img.src = product.image;
      icon.replaceWith(img);
    }
    const badges = find('.product-card-badges');
    if (product.featured) badges.append(chip(t('featured.badge'), 'badge badge--lime'));
    if (product.discount > 0) badges.append(chip('-' + product.discount + '%', 'badge badge--navy'));
    find('.product-card-cat').textContent = t('cat.' + product.category);
    const name = find('.product-card-name a');
    name.href = url;
    name.textContent = product.name;
    const sizes = product.sizes || [];
    for (const size of sizes.slice(0, 4)) find('.product-card-sizes').append(chip(size, 'size-chip'));
    if (product.originalPrice > product.price) find('.product-price-old').textContent = formatPrice(product.originalPrice);
    find('.product-price').textContent = formatPrice(product.price);
    const add = find('button');
    add.disabled = product.inStock === false || sizes.length === 0;
    add.title = t(add.disabled ? 'detail.unavailable' : 'featured.add_cart');
    add.setAttribute('aria-label', add.title + ' · ' + product.name);
    add.addEventListener('click', () => {
      addToCart(product, String(sizes[0]));
      showToast(t('detail.added_cart') + ' (' + sizes[0] + ')');
    });
    grid.append(card);
  }
}

function chip(text, className) {
  const span = document.createElement('span');
  span.className = className;
  span.textContent = text;
  return span;
}
