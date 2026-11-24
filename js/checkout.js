import { startPage, el, element, message } from './shop-page.js';
import { getCart, saveCart, cartTotals, formatPrice } from './utils.js';
import { t } from './i18n.js';

startPage('cart');
let shown = [], complete = false, busy = false;
const same = (a,b) => JSON.stringify(a) === JSON.stringify(b);
function render() {
  if (complete) return;
  shown = getCart();
  el('emptyCheckout').hidden = !!shown.length;
  el('checkoutBody').hidden = !shown.length;
  el('orderItems').replaceChildren();
  for (const item of shown) {
    const li = element('li');
    li.append(element('span',item.name+' · '+item.size+' × '+item.qty),element('b',formatPrice(item.price*item.qty)));
    el('orderItems').append(li);
  }
  const totals = cartTotals(shown);
  for (const field of ['subtotal','shipping','total']) el(field).textContent = formatPrice(totals[field]);
}
function changed() {
  render();
  message(el('orderStatus'),'checkout.changed');
}
async function place(items, details) {
  if (!items.length || !same(items,getCart())) return changed();
  if (items.length > 100) return message(el('orderStatus'),'checkout.tooMany');
  const { getProducts } = await import('./catalog.js');
  const catalog = new Map((await getProducts()).map(p=>[p.id,p]));
  const lines = [];
  for (const item of items) {
    const p = catalog.get(item.id);
    if (!p || p.inStock === false || !p.sizes?.map(String).includes(item.size)) {
      return message(el('orderStatus'),'checkout.unavailable');
    }
    lines.push({id:p.id, name:p.name, size:item.size, qty:item.qty, price:p.price});
  }
  if (!same(items,getCart())) return changed();
  if (lines.some((line,i)=>line.price !== items[i].price)) {
    saveCart(items.map((item,i)=>({...item,price:lines[i].price})));
    return changed();
  }
  const { db, isConfigured } = await import('./firebase-config.js');
  const totals = cartTotals(lines);
  let id;
  if (isConfigured) {
    const { collection, doc, setDoc, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    const ref = doc(collection(db,'orders'));
    await setDoc(ref,{...details, items:lines,...totals,status:'pending',createdAt:serverTimestamp()});
    id = ref.id;
  } else {
    id = 'SZ-' + crypto.randomUUID().slice(0,8).toUpperCase();
    localStorage.setItem('sz_demo_receipt',JSON.stringify({id,items:lines,...totals}));
  }

  // Giữ lại số lượng mới thêm ở tab khác trong lúc đang lưu đơn.
  complete = true;
  const remaining = getCart().map(item => {
    const line = lines.find(l=>l.id===item.id && l.size===item.size);
    return {...item,qty:item.qty-(line?.qty || 0)};
  }).filter(item=>item.qty>0);
  saveCart(remaining);
  el('orderCode').textContent = id;
  message(el('receiptNote'),isConfigured ? 'checkout.cloud' : 'checkout.local');
  el('checkoutBody').hidden = true;
  el('receipt').hidden = false;
  el('receipt').focus();
}
el('orderForm').addEventListener('submit', async e => {
  e.preventDefault();
  if (complete || busy) return;
  const details = Object.fromEntries([...new FormData(e.currentTarget)].map(([k,v])=>[k,v.trim()]));
  if (!details.name || !details.address || !details.city || !/^[+\d][\d ()-]{7,19}$/.test(details.phone)) {
    return message(el('orderStatus'),'checkout.required');
  }
  busy = true;
  el('placeOrder').disabled = true;
  message(el('orderStatus'),'checkout.processing');
  const items = shown;
  try {
    if (navigator.locks) await navigator.locks.request('sport-zone-checkout',()=>place(items,details));
    else await place(items,details);
  } catch { message(el('orderStatus'),'checkout.failed'); }
  finally { busy = false; el('placeOrder').disabled = false; }
});
window.addEventListener('storage',e=>{ if (e.key === 'sz_cart' && !busy && !complete) changed(); });
window.addEventListener('langChange',render);
window.addEventListener('pageshow',render);
render();
