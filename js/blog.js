import { startPage, el, element, message, picture } from './shop-page.js';
import { t, getLang, blogEnglish } from './i18n.js';
import { getParam, showToast } from './utils.js';
import { blogs as samples } from './sample-blogs.js';
import { sportIcons } from './product-cards.js';

startPage('blog');
const detail = document.body.dataset.page === 'blog-detail';
const id = getParam('id');
let posts = [], active = '', failed = false;

function copy(post,field) {
  if (getLang() === 'en') {
    if (post[field+'En']) return post[field+'En'];
    const sample = samples.find(p => p.id === post.id);
    if (sample && JSON.stringify(sample[field]) === JSON.stringify(post[field])) return blogEnglish[post.id][field];
  }
  return post[field];
}
const category = post => t(post.category === 'general' ? 'admin.general' : 'cat.'+post.category);
function published(post) {
  const raw = post.publishedAt?.toDate?.() || post.publishedAt;
  return raw ? new Date(raw) : null;
}
function dateLabel(post) {
  const date = published(post);
  return date && Number.isFinite(+date) ? date.toLocaleDateString(getLang() === 'vi' ? 'vi-VN' : 'en-GB') : '';
}
function card(post, featured, related = false) {
  const root = element('a',null,featured ? 'featured-blog' : related ? 'related-card' : 'blog-card');
  root.href = 'blog-detail.html?id='+encodeURIComponent(post.id);
  const photo = element('div',null,featured ? 'featured-blog-img' : related ? 'related-card-img' : 'blog-card-img');
  picture(photo,post.image,copy(post,'title'),sportIcons[post.category] || '📝');
  const body = element('div',null,featured ? 'featured-blog-body' : related ? 'related-card-body' : 'blog-card-body');
  if (featured) body.append(element('span',t('blog.feature'),'badge badge--lime'));
  body.append(element('div',[category(post),dateLabel(post),(post.readTime || 5)+' '+t('blog.min_read')].filter(Boolean).join(' · '),'blog-card-meta'),
    element(featured?'h2':'h3',copy(post,'title'),'blog-card-title'),element('p',copy(post,'excerpt'),'blog-card-excerpt'),
    element('span',t('blog.read_more'),'read-more'));
  root.append(photo,body);
  return root;
}

// Giữ các thẻ định dạng bài viết, bỏ thuộc tính và nội dung thực thi.
function articleContent(content) {
  const template = document.createElement('template');
  template.innerHTML = content || '';
  const allowed = new Set(['H2','H3','P','B','STRONG','I','EM','BR','UL','OL','LI','BLOCKQUOTE']);
  function clean(parent) {
    const out = document.createDocumentFragment();
    for (const node of parent.childNodes) {
      if (node.nodeType === Node.TEXT_NODE) { out.append(node.textContent); continue; }
      if (node.nodeType !== Node.ELEMENT_NODE || ['SCRIPT','STYLE','IFRAME','OBJECT'].includes(node.tagName)) continue;
      const children = clean(node);
      if (allowed.has(node.tagName)) {
        const tag = document.createElement(node.localName);
        tag.append(children);
        out.append(tag);
      } else out.append(children);
    }
    return out;
  }
  return clean(template.content);
}

function render() {
  if (!detail) {
    document.title = t('blog.title')+' · Sport Zone';
    const filtered = posts.filter(p=>!active || p.category===active);
    const featured = !active && filtered.find(p=>p.featured);
    el('featuredBlog').replaceChildren(...(featured ? [card(featured,true)] : []));
    const grid = el('blogGrid');
    grid.replaceChildren(...filtered.filter(p=>p!==featured).map(p=>card(p,false)));
    if (!filtered.length) grid.append(element('p',t(failed?'general.error':'admin.emptyBlogs'),'catalog-status'));
    return;
  }
  el('loadingWrap').classList.add('hidden');
  const post = posts.find(p=>p.id===id);
  if (!post) {
    el('errorWrap').classList.remove('hidden');
    message(el('blogError'),failed?'general.error':'blog.missing');
    return;
  }
  el('articleWrap').classList.remove('hidden');
  const title = copy(post,'title');
  document.title = title+' · Sport Zone';
  for (const key of ['blogTitle','breadcrumbTitle']) el(key).textContent = title;
  el('blogCat').textContent = category(post);
  el('blogDate').textContent = dateLabel(post);
  el('blogAuthor').textContent = post.author || 'Sport Zone';
  el('blogReadTime').textContent = (post.readTime || 5)+' '+t('blog.min_read');
  el('blogExcerpt').textContent = copy(post,'excerpt') || '';
  el('blogContent').replaceChildren(articleContent(copy(post,'content')));
  picture(el('blogCover'),post.image,title,sportIcons[post.category] || '📝');
  el('blogTags').replaceChildren(...(copy(post,'tags') || []).map(tag=>element('span','#'+tag,'blog-tag')));
  const related = posts.filter(p=>p.id!==id).sort((a,b)=>Number(b.category===post.category)-Number(a.category===post.category)).slice(0,3);
  el('relatedGrid').replaceChildren(...related.map(p=>card(p,false,true)));
  document.querySelector('.related-wrap').hidden = !related.length;
}

if (detail) {
  el('copyLink').onclick = async () => {
    try { await navigator.clipboard.writeText(location.href); showToast(t('blog.copied')); }
    catch { showToast(t('general.error'),'error'); }
  };
  window.addEventListener('scroll',()=>{
    const body = el('blogContent');
    const progress = -body.getBoundingClientRect().top / Math.max(1,body.offsetHeight);
    el('readProgress').style.width = Math.max(0,Math.min(1,progress))*100+'%';
  },{passive:true});
} else {
  el('catTabs').onclick = event => {
    const button = event.target.closest('[data-cat]');
    if (!button) return;
    active = button.dataset.cat;
    for (const tab of el('catTabs').children) {
      tab.classList.toggle('active',tab===button);
      tab.setAttribute('aria-pressed',String(tab===button));
    }
    render();
  };
}
try {
  const { db,isConfigured } = await import('./firebase-config.js');
  if (isConfigured) {
    const { getDocs,collection } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
    const snap = await getDocs(collection(db,'blogs'));
    posts = snap.docs.map(d=>({...d.data(),id:d.id}));
  } else posts = [...samples];
  posts.sort((a,b)=>(+published(b)||0)-(+published(a)||0));
} catch { failed = true; }
render();
window.addEventListener('langChange',render);
