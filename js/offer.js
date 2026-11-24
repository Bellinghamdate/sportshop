import { el, message, picture } from './shop-page.js';
import { formatPrice } from './utils.js';

export async function loadOffer() {
  const link = el('offerLink');
  link.classList.add('hidden');
  try {
    const { getProduct } = await import('./catalog.js');
    const product = await getProduct('football-01');
    if (!product) throw new Error('missing');
    el('offerPrice').textContent = formatPrice(product.price);
    if (product.originalPrice > product.price) {
      el('originalPrice').textContent = formatPrice(product.originalPrice);
      el('discount').classList.remove('hidden');
      el('discount').textContent = '−' + Math.round(100*(1-product.price/product.originalPrice)) + '%';
    }
    if (el('offerPhoto')) picture(el('offerPhoto'),product.image,product.name,'⚽');
    link.classList.remove('hidden');
    if (product.inStock === false || !product.sizes?.length) message(el('offerStatus'),'detail.unavailable');
  } catch (error) {
    message(el('offerStatus'), error.message === 'missing' ? 'detail.not_found' : 'products.load_error');
  }
}
