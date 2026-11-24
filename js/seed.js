// =============================================
// js/seed.js – Nạp dữ liệu mẫu vào Firestore
// Chạy 1 lần trong browser console hoặc tạo
// trang seed.html rồi mở để chạy.
// =============================================

import { products } from './sample-products.js';
import { db } from './firebase-config.js';
// ===================== DỮ LIỆU MẪU =====================

import { blogs } from './sample-blogs.js';

// ===================== HÀM NẠP DỮ LIỆU =====================

// Chỉ tạo bản ghi còn thiếu, kể cả khi hai quản trị viên cùng nạp.
async function seed(groups) {
  const { doc, runTransaction } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
  const entries = groups.flatMap(([collection, rows]) =>
    rows.map(row => ({ ref: doc(db, collection, row.id), row })));
  return runTransaction(db, async tx => {
    const snapshots = await Promise.all(entries.map(({ ref }) => tx.get(ref)));
    let added = 0;
    entries.forEach(({ ref, row }, index) => {
      if (!snapshots[index].exists()) {
        tx.set(ref, row);
        added++;
      }
    });
    return added;
  });
}

export const seedProducts = () => seed([['products', products]]);
export const seedBlogs = () => seed([['blogs', blogs]]);
export const seedAll = () => seed([['products', products], ['blogs', blogs]]);

// Dọn cả bộ đếm khi quản trị viên chủ động xóa danh mục.
export async function clearProducts() {
  const { collection, doc, getDocs, writeBatch } = await import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js');
  const products = await getDocs(collection(db, 'products'));
  for (let i = 0; i < products.docs.length; i += 250) {
    const batch = writeBatch(db);
    for (const product of products.docs.slice(i, i + 250)) {
      batch.delete(product.ref);
      batch.delete(doc(db, 'productStats', product.id));
    }
    await batch.commit();
  }
  return products.size;
}
