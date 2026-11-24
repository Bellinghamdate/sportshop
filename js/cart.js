import { startPage, el, element, picture } from './shop-page.js';
import { getCart, saveCart, updateCartCount, formatPrice, cartTotals } from './utils.js';
import { sportIcons } from './product-cards.js';
import { t } from './i18n.js';

startPage('cart');
function edit(item,delta) {
  const cart = getCart();
  const i = cart.findIndex(row => row.id === item.id && row.size === item.size);
  if (i >= 0) {
    if (delta === 0) cart.splice(i,1);
    else cart[i].qty = Math.min(99,Math.max(1,cart[i].qty+delta));
    saveCart(cart);
  }
  render();
}
function button(text,key,cls,handler) {
  const btn = element('button',text,cls);
  btn.setAttribute('aria-label',t(key));
  btn.onclick = handler;
  return btn;
}
function render() {
  document.title = t('cart.title') + ' · Sport Zone';
  const cart = getCart();
  updateCartCount();
  el('cartEmpty').classList.toggle('hidden',!!cart.length);
  el('cartContent').classList.toggle('hidden',!cart.length);
  const table = el('cartTableBody');
  table.replaceChildren();
  for (const item of cart) {
    const row = table.insertRow();
    const info = element('div',null,'cart-product-info');
    const photo = element('div',null,'cart-product-img');
    picture(photo,item.image,item.name,sportIcons[item.category]);
    const desc = element('div');
    const name = element('a',item.name,'cart-product-name');
    name.href = 'product-detail.html?id='+encodeURIComponent(item.id);
    desc.append(name,element('div',t('products.filter_size')+' '+item.size,'cart-product-size'));
    info.append(photo,desc);
    row.insertCell().append(info);
    row.insertCell().textContent = formatPrice(item.price);
    const qty = element('div',null,'qty-control');
    const minus = button('−','cart.minus','qty-btn',()=>edit(item,-1));
    const plus = button('+','cart.plus','qty-btn',()=>edit(item,1));
    minus.disabled = item.qty<=1;
    plus.disabled = item.qty>=99;
    qty.append(minus,element('span',item.qty,'qty-num'),plus);
    row.insertCell().append(qty);
    row.insertCell().textContent = formatPrice(item.price*item.qty);
    row.insertCell().append(button('×','cart.remove','cart-remove',()=>edit(item,0)));
  }
  const {subtotal, shipping, total} = cartTotals(cart);
  el('summarySubtotal').textContent = formatPrice(subtotal);
  el('summaryShipping').textContent = shipping ? formatPrice(shipping) : t('cart.shipping_free');
  el('summaryTotal').textContent = formatPrice(total);
}
el('clearCartBtn').onclick = () => { if(confirm(t('cart.confirmClear'))) { saveCart([]); render(); } };
window.addEventListener('langChange',render);
window.addEventListener('storage',render);
window.addEventListener('pageshow',render);
render();
