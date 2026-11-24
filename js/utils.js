import { t } from './i18n.js';

// =============================================
// js/utils.js – Các hàm tiện ích dùng chung
// =============================================

/** Định dạng giá tiền VND */
export function formatPrice(price) {
  return price.toLocaleString('vi-VN') + 'đ';
}

/** Hiển thị toast thông báo */
export function showToast(message, type = 'success', duration = 3000) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.setAttribute('role', type === 'error' ? 'alert' : 'status');
  toast.textContent = message;
  container.appendChild(toast);
  setTimeout(() => { toast.style.opacity = '0'; toast.style.transform = 'translateX(100%)'; toast.style.transition = '0.3s'; setTimeout(() => toast.remove(), 300); }, duration);
}

/** Lấy tham số URL */
export function getParam(key) {
  return new URLSearchParams(window.location.search).get(key);
}

/** Giỏ hàng: lấy từ localStorage */
export function getCart() {
  try {
    const items = JSON.parse(localStorage.getItem('sz_cart') || '[]');
    if (!Array.isArray(items)) return [];
    return items.filter(i => i && typeof i.id === 'string' && i.size != null &&
      Number.isFinite(Number(i.price)) && Number(i.price) > 0 &&
      Number.isInteger(Number(i.qty)) && Number(i.qty) > 0)
      .map(i => ({ ...i, size:String(i.size), price:Number(i.price), qty:Number(i.qty) }));
  } catch { return []; }
}

/** Giỏ hàng: lưu vào localStorage */
export function saveCart(cart) {
  localStorage.setItem('sz_cart', JSON.stringify(cart));
  updateCartCount();
}

/** Cập nhật số badge trên icon giỏ hàng */
export function updateCartCount() {
  const cart = getCart();
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = total;
    el.style.display = total > 0 ? 'grid' : 'none';
  });
}

/** Thêm sản phẩm vào giỏ */
export function addToCart(product, size, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === product.id && i.size === size);
  if (idx >= 0) cart[idx].qty = Math.min(99, cart[idx].qty + qty);
  else cart.push({ id: product.id, name: product.name, price: product.price, image: product.image || '', size, qty, category: product.category });
  saveCart(cart);
}

/** Xóa item khỏi giỏ */
export function removeFromCart(id, size) {
  const cart = getCart().filter(i => !(i.id === id && i.size === size));
  saveCart(cart);
}

/** Tính tổng giỏ hàng */
export function getCartTotal() {
  return getCart().reduce((s, i) => s + i.price * i.qty, 0);
}

// Phí giao hàng dùng chung cho giỏ và đơn mô phỏng.
export function cartTotals(items) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.qty, 0);
  const shipping = subtotal > 0 && subtotal < 500000 ? 30000 : 0;
  return { subtotal, shipping, total: subtotal + shipping };
}

/** Render header chung (inject vào #header-placeholder) */
export function renderHeader(activePage = '') {
  const root = document.getElementById('header-placeholder');
  if (!root) return;
  const isAdmin = window.location.pathname.includes('/admin/');
  root.innerHTML = `
  <header class="header">
    <div class="container">
      <nav class="navbar">
        <a href="${isAdmin ? '../' : ''}index.html" class="nav-logo">
          <img src="${isAdmin ? '../' : ''}images/brand/sport-zone-on-dark.svg" alt="Sport Zone" width="158" height="23"/>
        </a>
        <ul class="nav-links">
          <li><a href="${isAdmin ? '../' : ''}index.html" ${activePage==='home'?'class="active"':''} data-i18n="nav.home"></a></li>
          <li><a href="${isAdmin ? '../' : ''}products.html" ${activePage==='products'?'class="active"':''} data-i18n="nav.products"></a></li>
          <li><a href="${isAdmin ? '../' : ''}blog.html" ${activePage==='blog'?'class="active"':''} data-i18n="nav.blog"></a></li>
          <li><a href="${isAdmin ? '../' : ''}quiz.html" ${activePage==='quiz'?'class="active"':''} data-i18n="nav.quiz"></a></li>
          <li><a href="${isAdmin ? '../' : ''}about.html" ${activePage==='about'?'class="active"':''} data-i18n="nav.about"></a></li>
          <li><a href="${isAdmin ? '../' : ''}contact.html" ${activePage==='contact'?'class="active"':''} data-i18n="nav.contact"></a></li>
        </ul>
        <div class="nav-actions">
          <button class="lang-btn" id="langBtn" data-i18n-label="nav.language">EN</button>
          <a href="${isAdmin ? '../' : ''}cart.html" class="nav-icon-btn" data-i18n-label="nav.cart">
            🛒 <span class="cart-count" style="display:none">0</span>
          </a>
          <button class="hamburger" id="hamburgerBtn" aria-controls="mobileMenu" aria-expanded="false" aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
    </div>
    <div class="mobile-menu" id="mobileMenu">
      <a href="${isAdmin ? '../' : ''}index.html" data-i18n="nav.home"></a>
      <a href="${isAdmin ? '../' : ''}products.html" data-i18n="nav.products"></a>
      <a href="${isAdmin ? '../' : ''}blog.html" data-i18n="nav.blog"></a>
      <a href="${isAdmin ? '../' : ''}quiz.html" data-i18n="nav.quiz"></a>
      <a href="${isAdmin ? '../' : ''}about.html" data-i18n="nav.about"></a>
      <a href="${isAdmin ? '../' : ''}contact.html" data-i18n="nav.contact"></a>
      <a href="${isAdmin ? '../' : ''}cart.html" data-i18n="nav.cart"></a>
    </div>
  </header>`;
  // Hamburger toggle
  document.getElementById('hamburgerBtn')?.addEventListener('click', () => {
    const open = document.getElementById('mobileMenu').classList.toggle('open');
    document.getElementById('hamburgerBtn').setAttribute('aria-expanded', String(open));
  });
}

/** Render footer chung */
export function renderFooter() {
  const root = document.getElementById('footer-placeholder');
  if (!root) return;
  root.innerHTML = `
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="nav-logo">
            <img src="images/brand/sport-zone-on-dark.svg" alt="Sport Zone" width="158" height="23"/>
          </div>
          <p data-i18n="footer.desc"></p>
        </div>
        <div>
          <h4 data-i18n="footer.quick_links"></h4>
          <ul class="footer-links">
            <li><a href="index.html" data-i18n="nav.home"></a></li>
            <li><a href="products.html" data-i18n="nav.products"></a></li>
            <li><a href="blog.html" data-i18n="nav.blog"></a></li>
            <li><a href="about.html" data-i18n="nav.about"></a></li>
          </ul>
        </div>
        <div>
          <h4 data-i18n="footer.support"></h4>
          <ul class="footer-links">
            <li><a href="size-guide.html" data-i18n="footer.size_guide"></a></li>
            <li><a href="quiz.html" data-i18n="nav.quiz"></a></li>
            <li><a href="contact.html" data-i18n="nav.contact"></a></li>
            <li><a href="policy.html" data-i18n="footer.return"></a></li>
          </ul>
        </div>
        <div class="footer-newsletter">
          <h4 data-i18n="news.title"></h4>
          <p data-i18n="news.desc"></p>
          <form class="newsletter-form" id="newsletterForm">
            <input type="email" id="newsEmail" autocomplete="email" maxlength="254" data-i18n-label="news.placeholder" data-i18n-placeholder="news.placeholder" required />
            <button type="submit" data-i18n="news.btn"></button>
          </form>
        </div>
      </div>
      <div class="footer-bottom">
        <span data-i18n="footer.copyright"></span>
        <div style="display:flex;gap:16px">
          <a href="policy.html" data-i18n="footer.terms"></a>
          <a href="policy.html" data-i18n="footer.privacy"></a>
        </div>
      </div>
    </div>
  </footer>`;
  document.getElementById('newsletterForm').addEventListener('submit', async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const button = form.querySelector('button');
    if (button.disabled) return;
    const email = form.querySelector('input').value.trim().toLowerCase();
    button.disabled = true;
    try {
      const { db, isConfigured } = await import('./firebase-config.js');
      if (isConfigured) {
        const { addDoc, collection, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
        await addDoc(collection(db, 'subscribers'), { email, createdAt: serverTimestamp() });
      } else {
        const emails = JSON.parse(localStorage.getItem('sz_demo_subscribers') || '[]');
        if (!emails.includes(email)) localStorage.setItem('sz_demo_subscribers', JSON.stringify([...emails, email]));
      }
      form.reset();
      showToast(t(isConfigured ? 'news.success' : 'news.demo'));
    } catch {
      showToast(t('news.failed'), 'error');
    } finally {
      button.disabled = false;
    }
  });
}
