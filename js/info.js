import { startPage, el, message } from './shop-page.js';

const page = document.body.dataset.page;
startPage(page);
if (page === 'landing') {
  const { loadOffer } = await import('./offer.js');
  await loadOffer();
}

if (page === 'contact') {
  const form = el('contactForm');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    const btn = form.querySelector('button');
    if (btn.disabled) return;
    const values = Object.fromEntries([...new FormData(form)].map(([k,v]) => [k,v.trim()]));
    if (!values.name || !values.message) return message(el('contactStatus'),'checkout.required');
    btn.disabled = true;
    try {
      const { db,isConfigured } = await import('./firebase-config.js');
      if (isConfigured) {
        const { addDoc, collection, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
        await addDoc(collection(db,'messages'),{...values, createdAt:serverTimestamp()});
      } else localStorage.setItem('sz_demo_message',JSON.stringify(values));
      form.reset();
      message(el('contactStatus'),isConfigured ? 'contact.success' : 'contact.local');
    } catch { message(el('contactStatus'),'general.error'); }
    finally { btn.disabled = false; }
  });
}
