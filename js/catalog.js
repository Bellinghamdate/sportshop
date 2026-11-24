import { db, isConfigured } from './firebase-config.js';

const firestore = () => import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
const samples = async () => (await import('./sample-products.js')).products;

// Bổ sung bản dịch cho dữ liệu đã seed trước khi có các trường tiếng Anh.
async function readDocuments(docs) {
  const products = docs.map(doc => ({ ...doc.data(), id: doc.id }));
  const missing = products.filter(p => !p.descriptionEn || !p.shortDescriptionEn || !p.featuresEn);
  if (!missing.length) return products;
  const originals = new Map((await samples()).map(p => [p.id, p]));
  for (const p of missing) {
    const original = originals.get(p.id);
    if (!original) continue;
    for (const key of ['description', 'shortDescription', 'features']) {
      if (!p[key + 'En'] && JSON.stringify(p[key]) === JSON.stringify(original[key])) {
        p[key + 'En'] = original[key + 'En'];
      }
    }
  }
  return products;
}

// Khi đã cấu hình, Firestore là nguồn dữ liệu duy nhất.
export async function getProducts({ featured = false, category, count } = {}) {
  if (!isConfigured) {
    const products = await samples();
    const matches = products.filter(p => (!featured || p.featured) && (!category || p.category === category));
    return matches.slice(0, count ?? matches.length);
  }
  const { collection, getDocs, query, where, limit } = await firestore();
  const filters = [];
  if (featured) filters.push(where('featured', '==', true));
  if (category) filters.push(where('category', '==', category));
  if (count) filters.push(limit(count));
  const result = await getDocs(query(collection(db, 'products'), ...filters));
  return readDocuments(result.docs);
}

export async function getProduct(id) {
  if (!isConfigured) {
    const product = (await samples()).find(p => p.id === id);
    if (!product) return null;
    return { ...product, views: Number(localStorage.getItem('sz_demo_views_' + id) || 0),
      likes: Number(localStorage.getItem('sz_demo_liked_' + id) === '1') };
  }
  const { doc, getDoc } = await firestore();
  const result = await getDoc(doc(db, 'products', id));
  if (!result.exists()) return null;
  const [product] = await readDocuments([result]);
  try {
    const stats = await getDoc(doc(db, 'productStats', id));
    if (stats.exists()) return { ...product, ...stats.data() };
  } catch (error) {
    console.warn('Chưa tải được bộ đếm:', error);
  }
  return product;
}

// Giao dịch giữ số đếm đúng khi nhiều người tương tác đồng thời.
async function changeCount(id, field, delta) {
  const { doc, runTransaction } = await firestore();
  const statsRef = doc(db, 'productStats', id);
  return runTransaction(db, async transaction => {
    let source = await transaction.get(statsRef);
    if (!source.exists()) source = await transaction.get(doc(db, 'products', id));
    if (!source.exists()) throw new Error('Product unavailable');
    const { views = 0, likes = 0 } = source.data();
    const next = { views, likes };
    next[field] = Math.max(0, next[field] + delta);
    if (delta > 0 || likes > 0) transaction.set(statsRef, next);
    return next[field];
  });
}

export async function countView(id) {
  if (!isConfigured) {
    const key = 'sz_demo_views_' + id;
    const views = Number(localStorage.getItem(key) || 0) + 1;
    localStorage.setItem(key, String(views));
    return views;
  }
  return changeCount(id, 'views', 1);
}

function likeKey(id) {
  return (isConfigured ? 'sz_liked_' : 'sz_demo_liked_') + id;
}

export function isLiked(id) {
  return localStorage.getItem(likeKey(id)) === '1';
}

export async function setLiked(id, liked) {
  const count = isConfigured ? await changeCount(id, 'likes', liked ? 1 : -1) : Number(liked);
  localStorage.setItem(likeKey(id), liked ? '1' : '0');
  return count;
}
