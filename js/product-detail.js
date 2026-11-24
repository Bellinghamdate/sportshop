import { initI18n, t, getLang } from './i18n.js';
import { renderHeader, renderFooter, updateCartCount, addToCart, formatPrice, getParam, showToast } from './utils.js';
import { sportIcons, renderCards } from './product-cards.js';

renderHeader('products');
renderFooter();
initI18n();
updateCartCount();

const el = id => document.getElementById(id);
const id = getParam('id');
let selectedSize;
let related = [];

function showError(key) {
  el('loadingWrap').classList.add('hidden');
  el('errorWrap').classList.remove('hidden');
  el('detailError').dataset.i18n = key;
  el('detailError').textContent = t(key);
}

function gallery(product) {
  const images = product.images?.length ? product.images : product.image ? [product.image] : [];
  const main = el('galleryMain');
  const thumbs = el('galleryThumbs');
  function select(index) {
    const img = new Image();
    img.alt = product.name;
    img.onerror = () => { main.textContent = sportIcons[product.category] || '👟'; };
    img.src = images[index];
    main.replaceChildren(img);
    Array.from(thumbs.children).forEach((button, i) => {
      button.classList.toggle('active', i === index);
      button.setAttribute('aria-pressed', String(i === index));
    });
  }
  images.forEach((src, index) => {
    const button = document.createElement('button');
    button.className = 'gallery-thumb';
    const img = new Image();
    img.alt = product.name + ' · ' + (index + 1);
    img.src = src;
    button.append(img);
    button.addEventListener('click', () => select(index));
    thumbs.append(button);
  });
  if (images.length) select(0);
}

async function load() {
  if (!id || id.includes('/')) return showError('detail.not_found');
  const { getProduct, getProducts, countView, isLiked, setLiked } = await import('./catalog.js');
  const product = await getProduct(id);
  if (!product) return showError('detail.not_found');

  el('loadingWrap').classList.add('hidden');
  el('detailWrap').classList.remove('hidden');
  document.title = product.name + ' – Sport Zone';
  el('breadcrumbName').textContent = product.name;
  el('detailName').textContent = product.name;
  gallery(product);
  el('viewCount').textContent = product.views || 0;
  el('likeCount').textContent = product.likes || 0;
  el('detailPrice').textContent = formatPrice(product.price);
  if (product.originalPrice > product.price) {
    el('detailPriceOld').textContent = formatPrice(product.originalPrice);
    el('detailPriceOld').style.display = '';
    el('detailDiscount').textContent = '-' + Math.round((1 - product.price / product.originalPrice) * 100) + '%';
    el('detailDiscount').style.display = '';
  }

  const sizes = product.sizes || [];
  const available = product.inStock !== false && sizes.length > 0;
  for (const size of sizes) {
    const button = document.createElement('button');
    button.className = 'size-btn';
    button.textContent = size;
    button.disabled = !available;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      selectedSize = String(size);
      for (const item of el('sizesWrap').children) {
        item.classList.toggle('selected', item === button);
        item.setAttribute('aria-pressed', String(item === button));
      }
    });
    el('sizesWrap').append(button);
  }

  function renderText() {
    const en = getLang() === 'en';
    el('detailCategory').textContent = t('cat.' + product.category);
    el('stockBadge').textContent = t(available ? 'detail.in_stock' : 'detail.unavailable');
    el('detailDesc').textContent = (en && product.shortDescriptionEn) || product.shortDescription || product.description || '';
    el('detailFullDesc').textContent = (en && product.descriptionEn) || product.description || '';
    const features = (en && product.featuresEn) || product.features || [];
    const wrap = el('detailFeatures');
    wrap.replaceChildren();
    if (features.length) {
      const heading = document.createElement('h3');
      heading.textContent = t('detail.features');
      const list = document.createElement('ul');
      for (const feature of features) {
        const li = document.createElement('li');
        li.textContent = feature;
        list.append(li);
      }
      wrap.append(heading, list);
    }
    if (related.length) renderCards(el('relatedGrid'), related);
  }
  renderText();
  window.addEventListener('langChange', renderText);

  for (const action of ['addCartBtn', 'buyNowBtn']) {
    el(action).disabled = !available;
    el(action).addEventListener('click', () => {
      if (!selectedSize) return showToast(t('detail.select_size_first'), 'error');
      addToCart(product, selectedSize);
      if (action === 'buyNowBtn') window.location.assign('cart.html');
      else showToast(t('detail.added_cart'));
    });
  }

  const like = el('likeBtn');
  function renderLike(liked) {
    like.classList.toggle('liked', liked);
    like.setAttribute('aria-pressed', String(liked));
  }
  renderLike(isLiked(id));
  like.addEventListener('click', async () => {
    like.disabled = true;
    try {
      const next = !isLiked(id);
      product.likes = await setLiked(id, next);
      el('likeCount').textContent = product.likes;
      renderLike(next);
      showToast(t(next ? 'detail.liked' : 'detail.unliked'));
    } catch {
      showToast(t('general.error'), 'error');
    } finally {
      like.disabled = false;
    }
  });

  // Việc ghi thống kê độc lập với phần hiển thị sản phẩm.
  countView(id).then(count => { el('viewCount').textContent = count; })
    .catch(error => console.warn('Chưa lưu được lượt xem:', error));
  try {
    const matches = await getProducts({ category: product.category, count: 4 });
    related = matches.filter(p => p.id !== id).slice(0, 3);
    renderCards(el('relatedGrid'), related);
  } catch (error) {
    console.warn('Chưa tải được sản phẩm liên quan:', error);
  }
  el('relatedGrid').parentElement.hidden = related.length === 0;
}

load().catch(() => showError('products.load_error'));
