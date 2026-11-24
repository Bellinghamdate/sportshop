// =============================================
// js/firebase-config.js – Cấu hình Firebase
// ⚠️ Thay toàn bộ giá trị placeholder bằng
//    thông tin dự án Firebase của bạn.
// Xem README.md để biết cách lấy config.
// =============================================

const firebaseConfig = {
  apiKey: "AIzaSyDB1sY6LjXoU2_iyMVIwoaGLsv_Sah_DaA",
  authDomain: "sportshop-bdf37.firebaseapp.com",
  projectId: "sportshop-bdf37",
  storageBucket: "sportshop-bdf37.firebasestorage.app",
  messagingSenderId: "667111829607",
  appId: "1:667111829607:web:2c63330eda9c6ea13f24c2",
}; // Cho phép mở bản xem thử khi chưa cấu hình Firebase.
export const isConfigured =
  firebaseConfig.projectId !== "YOUR_PROJECT_ID" &&
  firebaseConfig.apiKey !== "YOUR_API_KEY";

let db = null;
let auth = null;
if (isConfigured) {
  const [{ initializeApp }, { getFirestore }, { getAuth }] = await Promise.all([
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js"),
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js"),
    import("https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js"),
  ]);
  const app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
}
export { db, auth };
