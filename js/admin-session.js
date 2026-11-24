import { auth, db, isConfigured } from './firebase-config.js';

export const authSDK = () => import('https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js');

// Theo dõi cả việc thu hồi quyền trong lúc đang mở trang.
export async function watchAdmin(notify) {
  if (!isConfigured) {
    notify('config');
    return;
  }
  const [{ onAuthStateChanged }, { doc, onSnapshot }] = await Promise.all([
    authSDK(), import('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js')
  ]);
  let stopRole = () => {};
  onAuthStateChanged(auth, user => {
    stopRole();
    if (!user) return notify('guest');
    notify('checking');
    stopRole = onSnapshot(doc(db, 'admins', user.uid), { includeMetadataChanges: true }, snap => {
      if (auth.currentUser?.uid !== user.uid) return;
      if (snap.metadata.fromCache) return notify('checking');
      notify(snap.exists() ? 'admin' : 'denied', user);
    }, () => notify('error'));
  }, () => notify('error'));
}

export async function logout() {
  const { signOut } = await authSDK();
  await signOut(auth);
}

export async function login(email, password) {
  const { signInWithEmailAndPassword, signOut } = await authSDK();
  if (auth.currentUser) await signOut(auth);
  await signInWithEmailAndPassword(auth, email, password);
}
