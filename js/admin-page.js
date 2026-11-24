import { initI18n, t } from './i18n.js';

const el = id => document.getElementById(id);
const page = document.body.dataset.page;
const message = key => {
  const node = el('accessMessage');
  node.dataset.i18n = key;
  node.textContent = t(key);
};
initI18n();
let session, currentUid, signingIn = false;

function lock() {
  if (page === 'login') el('loginBtn').disabled = true;
  if (page === 'seed') el('seedActions').disabled = true;
  if (page === 'dashboard') {
    el('adminLayout').classList.add('hidden');
    document.querySelectorAll('.modal-overlay').forEach(m => m.classList.add('hidden'));
    el('authCheck').classList.remove('hidden');
  }
}

async function stateChanged(state, user) {
  const previous = currentUid;
  currentUid = state === 'admin' ? user.uid : null;
  if (page === 'login') {
    el('roleHelp').hidden = state !== 'denied';
    el('signedInUid').value = state === 'denied' ? user.uid : '';
  }
  if (state !== 'admin') lock();
  if (state === 'admin') {
    if (page === 'login') {
      location.replace(new URLSearchParams(location.search).get('next') === 'seed' ? '../seed.html' : 'dashboard.html');
    } else if (page === 'seed') {
      el('seedActions').disabled = false;
      message('admin.seedReady');
    } else if (previous !== currentUid) {
      const dashboard = await import('./admin-dashboard.js');
      await dashboard.refresh();
      if (currentUid !== user.uid) return;
      el('adminEmail').textContent = user.email;
      el('adminAvatar').textContent = (user.email || 'A')[0].toUpperCase();
      el('adminLayout').classList.remove('hidden');
      el('authCheck').classList.add('hidden');
    }
    return;
  }
  if (page !== 'login' && ['guest','denied'].includes(state)) {
    location.replace(page === 'seed' ? 'admin/login.html?next=seed' : 'login.html');
    return;
  }
  if (page === 'login') el('loginBtn').disabled = (signingIn && state === 'guest') || !['guest','denied','error'].includes(state);
  message('admin.' + state);
}

if (page === 'login') {
  el('signedInUid').addEventListener('focus', event => event.target.select());
  el('loginForm').addEventListener('submit', async event => {
    event.preventDefault();
    if (!session || el('loginBtn').disabled) return;
    el('roleHelp').hidden = true;
    el('loginBtn').disabled = true;
    message('admin.checking');
    signingIn = true;
    try {
      await session.login(el('email').value.trim(), el('password').value);
    } catch (error) {
      el('loginBtn').disabled = false;
      message(error.code === 'auth/too-many-requests' ? 'admin.tooMany' : 'admin.loginFailed');
    } finally { signingIn = false; }
  });
}

if (page === 'dashboard') {
  el('logoutBtn').onclick = async () => {
    try { await session.logout(); }
    catch { lock(); message('admin.error'); }
  };
}

if (page === 'seed') {
  el('seedActions').addEventListener('click', async event => {
    const method = event.target.closest('button')?.dataset.method;
    if (!method || !currentUid || el('seedActions').disabled) return;
    if (method === 'clearProducts' && !confirm(t('admin.confirmClear'))) return;
    el('seedActions').disabled = true;
    message('admin.working');
    try {
      const seed = await import('./seed.js');
      const count = await seed[method]();
      message(method === 'clearProducts' ? 'admin.cleared' : 'admin.seeded');
      el('seedCount').textContent = String(count);
    } catch { message('admin.error'); el('seedCount').textContent = ''; }
    finally { el('seedActions').disabled = !currentUid; }
  });
}

try {
  session = await import('./admin-session.js');
  await session.watchAdmin((state, user) => {
    stateChanged(state, user).catch(() => { lock(); message('admin.error'); });
  });
} catch {
  lock();
  message('admin.error');
}
