import { db } from './firebase-config.js';
import { t, getLang } from './i18n.js';
import { showToast } from './utils.js';
import { collection, doc, getDocs, updateDoc, setDoc, deleteDoc, writeBatch, serverTimestamp } from 'https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js';

const el = id => document.getElementById(id);
const value = id => el(id).value.trim();
const money = n => Number(n || 0).toLocaleString('vi-VN') + ' ₫';
const date = v => v?.toDate?.().toLocaleDateString(getLang() === 'vi' ? 'vi-VN' : 'en-GB') || '–';
const category = c => c === 'general' ? t('admin.general') : t('cat.' + c);
const status = s => t('admin.' + (['confirmed','delivered','cancelled'].includes(s) ? s : 'pending'));
let products = [], blogs = [], orders = [], tab = 'dashboard';
let editingProduct, editingBlog, viewingOrder;

function action(label, handler, danger = false) {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn btn--sm ' + (danger ? 'btn--danger' : 'btn--outline');
  button.textContent = t(label);
  button.addEventListener('click', handler);
  return button;
}

function controls(...buttons) {
  const wrap = document.createElement('div');
  wrap.className = 'row-actions';
  wrap.append(...buttons);
  return wrap;
}

// Dữ liệu khách nhập luôn được hiển thị dưới dạng văn bản.
function table(body, records, columns, emptyKey, cells) {
  const target = el(body);
  target.replaceChildren();
  if (!records.length) {
    const td = target.insertRow().insertCell();
    td.colSpan = columns;
    td.textContent = t(emptyKey);
    return;
  }
  for (const record of records) {
    const row = target.insertRow();
    for (const value of cells(record)) {
      const td = row.insertCell();
      if (value instanceof Node) td.append(value);
      else td.textContent = value ?? '–';
    }
  }
}

function switchTab(name) {
  tab = name;
  document.querySelectorAll('[id^="tab-"]').forEach(panel => panel.classList.toggle('hidden', panel.id !== 'tab-' + name));
  document.querySelectorAll('[data-tab]').forEach(link => link.classList.toggle('active', link.dataset.tab === name));
  el('pageTitle').textContent = t('admin.' + name);
  closeMenu();
}

function render() {
  switchTab(tab);
  el('topbarDate').textContent = new Date().toLocaleDateString(getLang() === 'vi' ? 'vi-VN' : 'en-GB');
  el('statProducts').textContent = products.length;
  el('statOrders').textContent = orders.length;
  for (const [field, id] of [['views','statViews'],['likes','statLikes']]) {
    el(id).textContent = products.reduce((total, product) => total + (product[field] || 0), 0).toLocaleString(getLang());
  }
  table('recentOrdersBody', orders.slice(0,5), 5, 'admin.emptyOrders', o =>
    [o.id, o.name, money(o.total), status(o.status), date(o.createdAt)]);
  table('topProductsBody', [...products].sort((a,b) => (b.views||0)-(a.views||0)).slice(0,5), 5, 'products.none', p =>
    [p.name, category(p.category), p.views||0, p.likes||0, money(p.price)]);
  table('productsTableBody', products, 7, 'products.none', p =>
    [p.name, category(p.category), money(p.price), (p.sizes||[]).join(', '), p.views||0, p.likes||0,
      controls(action('general.edit', () => productForm(p)), action('general.delete', () => remove('products', p), true))]);
  table('blogsTableBody', blogs, 6, 'admin.emptyBlogs', b =>
    [b.title, category(b.category), b.author, b.readTime, date(b.publishedAt),
      controls(action('general.edit', () => blogForm(b)), action('general.delete', () => remove('blogs', b), true))]);
  table('ordersTableBody', orders, 8, 'admin.emptyOrders', o =>
    [o.id, o.name, o.phone, money(o.total), payment(o), status(o.status), date(o.createdAt),
      action('admin.view', () => orderDetail(o))]);
  if (viewingOrder) orderDetail(viewingOrder);
  modalTitle('productModalTitle', editingProduct ? 'admin.editProduct' : 'admin.addProduct');
  modalTitle('blogModalTitle', editingBlog ? 'admin.editBlog' : 'admin.addBlog');
}

const payment = o => t(o.paymentMethod === 'bank' ? 'checkout.bank' : 'checkout.cod');
function modalTitle(id, key) { el(id).textContent = t(key); }

async function refresh() {
  const [ps, bs, os, stats] = await Promise.all(['products','blogs','orders','productStats'].map(name => getDocs(collection(db, name))));
  const records = snap => snap.docs.map(d => ({ ...d.data(), id: d.id }));
  const counts = new Map(stats.docs.map(d => [d.id, d.data()]));
  products = records(ps).map(p => ({ ...p, ...counts.get(p.id) }));
  blogs = records(bs);
  orders = records(os).sort((a,b) => (b.createdAt?.toMillis?.() || 0) - (a.createdAt?.toMillis?.() || 0));
  render();
}

async function remove(name, record) {
  if (!confirm(t('general.delete') + ' “' + (record.name || record.title) + '”?')) return;
  try {
    if (name === 'products') {
      const batch = writeBatch(db);
      batch.delete(doc(db, name, record.id));
      batch.delete(doc(db, 'productStats', record.id));
      await batch.commit();
    } else await deleteDoc(doc(db, name, record.id));
    await refresh();
  } catch { showToast(t('general.error'), 'error'); }
}

function productForm(p) {
  editingProduct = p;
  modalTitle('productModalTitle', p ? 'admin.editProduct' : 'admin.addProduct');
  for (const [input, field] of Object.entries({pName:'name',pCategory:'category',pPrice:'price',pOriginalPrice:'originalPrice',pShortDesc:'shortDescription',pDesc:'description',pImage:'image'})) el(input).value = p?.[field] ?? '';
  el('pSizes').value = (p?.sizes || []).join(', ');
  el('pFeatures').value = (p?.features || []).join('\n');
  el('pInStock').checked = p?.inStock !== false;
  el('pFeatured').checked = !!p?.featured;
  el('productModal').classList.remove('hidden');
}

async function saveProduct() {
  const p = editingProduct;
  const data = {
    name:value('pName'), category:value('pCategory'), price:Number(value('pPrice')),
    originalPrice:Number(value('pOriginalPrice')) || null, shortDescription:value('pShortDesc'),
    description:value('pDesc'), image:value('pImage'), featured:el('pFeatured').checked,
    inStock:el('pInStock').checked, features:value('pFeatures').split('\n').map(s=>s.trim()).filter(Boolean),
    sizes:[...new Set(value('pSizes').split(',').map(s=>s.trim()).filter(Boolean))]
  };
  if (!data.name || (data.inStock && !data.sizes.length)) throw Error(t('admin.invalidProduct'));
  data.discount = data.originalPrice > data.price ? Math.round(100*(1-data.price/data.originalPrice)) : 0;
  if (data.image !== p?.image) data.images = [data.image, ...(p?.images || []).filter(url => url !== p?.image && url !== data.image)].filter(Boolean);
  if (p) {
    // Bỏ bản dịch cũ nếu nội dung gốc đã thay đổi.
    for (const key of ['description','shortDescription','features']) {
      if (JSON.stringify(data[key]) !== JSON.stringify(p[key])) data[key+'En'] = null;
    }
    await updateDoc(doc(db,'products',p.id), data);
  } else await setDoc(doc(collection(db,'products')), { ...data, views:0, likes:0, createdAt:serverTimestamp() });
}

function blogForm(b) {
  editingBlog = b;
  modalTitle('blogModalTitle', b ? 'admin.editBlog' : 'admin.addBlog');
  for (const [input, field] of Object.entries({bTitle:'title',bExcerpt:'excerpt',bContent:'content',bImage:'image'})) el(input).value = b?.[field] || '';
  el('bCategory').value = b?.category || 'general';
  el('bReadTime').value = b?.readTime || 5;
  el('bAuthor').value = b?.author || 'Sport Zone Team';
  el('blogModal').classList.remove('hidden');
}

async function saveBlog() {
  const title = value('bTitle');
  if (!title) throw Error(t('admin.invalidTitle'));
  const data = {title, category:value('bCategory'), author:value('bAuthor'), readTime:Number(value('bReadTime')) || 5,
    excerpt:value('bExcerpt'), content:value('bContent'), image:value('bImage')};
  if (editingBlog) await updateDoc(doc(db,'blogs',editingBlog.id), data);
  else {
    const ref = doc(collection(db,'blogs'));
    const slug = title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'') || ref.id;
    await setDoc(ref, { ...data, slug, createdAt:serverTimestamp(), publishedAt:serverTimestamp() });
  }
}

function orderDetail(o) {
  viewingOrder = o;
  el('orderStatusSelect').value = o.status || 'pending';
  const wrap = el('orderModalBody');
  wrap.replaceChildren();
  for (const [key, text] of [['checkout.name',o.name],['checkout.phone',o.phone],['checkout.email',o.email],['checkout.address',[o.address,o.city].filter(Boolean).join(', ')],['checkout.note',o.note],['checkout.payment',payment(o)]]) {
    if (!text) continue;
    const line = document.createElement('p');
    line.textContent = t(key) + ' · ' + text;
    wrap.append(line);
  }
  const list = document.createElement('table');
  const head = list.createTHead().insertRow();
  for (const label of [t('cart.product'),t('products.filter_size'),t('cart.qty'),t('cart.total')]) head.insertCell().textContent = label;
  const body = list.createTBody();
  for (const item of Array.isArray(o.items) ? o.items : []) {
    if (!item || typeof item !== 'object') continue;
    const row = body.insertRow();
    for (const cell of [item.name, item.size, item.qty, money(item.price*item.qty)]) row.insertCell().textContent = cell;
  }
  wrap.append(list);
  const total = document.createElement('strong');
  total.textContent = t('cart.order_total') + ' · ' + money(o.total);
  wrap.append(total);
  el('orderModal').classList.remove('hidden');
}

function closeModal(id) {
  el(id).classList.add('hidden');
  if (id === 'orderModal') viewingOrder = null;
}

function bindForm(id, modal, save) {
  el(id).addEventListener('submit', async event => {
    event.preventDefault();
    const button = el(id).querySelector('[type="submit"]');
    if (button.disabled) return;
    button.disabled = true;
    try {
      await save();
      closeModal(modal);
      showToast(t('admin.saved'));
      await refresh();
    } catch (error) { showToast(error.code ? t('general.error') : error.message, 'error'); }
    finally { button.disabled = false; }
  });
}

document.querySelectorAll('[data-tab]').forEach(link => link.addEventListener('click', event => { event.preventDefault(); switchTab(link.dataset.tab); }));
el('menuBtn').onclick = () => el('menuBtn').setAttribute('aria-expanded', String(el('adminSidebar').classList.toggle('open')));
function closeMenu() {
  el('adminSidebar').classList.remove('open');
  el('menuBtn').setAttribute('aria-expanded', 'false');
}
document.addEventListener('click', event => {
  if (!event.target.closest('#adminSidebar, #menuBtn')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeMenu();
});
el('addProductBtn').onclick = () => productForm(null);
el('addBlogBtn').onclick = () => blogForm(null);
for (const [modal, names] of Object.entries({productModal:['closeProductModal','cancelProductBtn'],blogModal:['closeBlogModal','cancelBlogBtn'],orderModal:['closeOrderModal','closeOrderBtn']})) {
  for (const name of names) el(name).onclick = () => closeModal(modal);
}
bindForm('productForm','productModal',saveProduct);
bindForm('blogForm','blogModal',saveBlog);
el('saveOrderStatusBtn').onclick = async event => {
  const button = event.currentTarget;
  button.disabled = true;
  try {
    await updateDoc(doc(db,'orders',viewingOrder.id), {status:value('orderStatusSelect')});
    closeModal('orderModal');
    await refresh();
  } catch { showToast(t('general.error'),'error'); }
  finally { button.disabled = false; }
};
window.addEventListener('langChange', render);
export { refresh };
