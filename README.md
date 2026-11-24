# Sport Zone

Webshop giày thể thao mô phỏng cho dự án môn học. Giao diện Việt/Anh dùng HTML, CSS, ES modules và Firebase JS SDK qua CDN.

## Chạy trong VS Code

Mở thư mục `sport-zone`, chọn `index.html` và chạy **Open with Live Server**. Cũng có thể chạy `python -m http.server 5500` tại thư mục này rồi mở `http://localhost:5500`.

Khi `js/firebase-config.js` còn placeholder, trang khách dùng 12 sản phẩm và 5 bài viết mẫu. Giỏ hàng, lượt tương tác, biên nhận đơn gần nhất, lời nhắn gần nhất và đăng ký nhận tin được lưu trong trình duyệt. Dùng thông tin giả để thử đặt đơn. Khu vực quản trị cần Firebase thật.

## Cấu hình Firebase

1. Tạo Firebase project, đăng ký ứng dụng Web và chép các giá trị cấu hình vào `js/firebase-config.js`.
2. Tạo Firestore Database mặc định ở **Production mode**. Trong Authentication, bật **Email/Password**, tạo tài khoản quản trị và sao chép UID. Nếu chạy Auth ở máy cá nhân, thêm hostname Live Server vào **Authentication → Settings → Authorized domains** khi cần.
3. Trong Firestore Console, tạo tài liệu `admins/<UID>` với trường `label` kiểu string, giá trị `Admin`. UID là ID của tài liệu. Xóa tài liệu này để thu hồi quyền quản trị.
4. Trong terminal tại thư mục chứa `firebase.json`, thay `YOUR_PROJECT_ID` bằng ID dự án rồi chạy:

```sh
npm install -g firebase-tools
firebase login
firebase deploy --only firestore:rules --project YOUR_PROJECT_ID
```

5. Mở `admin/login.html`, đăng nhập và chọn **Nạp dữ liệu mẫu → Nạp toàn bộ dữ liệu mẫu**. Lần đầu thêm 17 bản ghi vào hai collection trống. Nạp lại chỉ thêm bản ghi còn thiếu.

## Kiểm tra và deploy

- Từ `quiz.html`, trả lời bốn câu hỏi để xem gợi ý. Mở một sản phẩm, chọn size rồi thêm vào giỏ. `size-guide.html` dùng bảng size tham khảo riêng cho dữ liệu mẫu, với VN theo EU và US nam.
- Trong giỏ, thay đổi số lượng rồi đặt đơn mô phỏng. Khi đã cấu hình Firebase, mã xác nhận là ID tài liệu trong `orders`. Đăng nhập dashboard để xem đơn, cập nhật trạng thái và kiểm tra thống kê.
- `landing.html` lấy giá của Pro Match Football từ sản phẩm `football-01`. Hai trang blog dùng collection `blogs`. Form liên hệ ghi vào `messages`, form nhận tin ghi vào `subscribers`. Quyền truy cập được khai báo trong `firestore.rules`.

Triển khai từ cùng thư mục. Firebase CLI in URL Hosting khi thành công. [Hướng dẫn Firebase Hosting](https://firebase.google.com/docs/hosting/quickstart)

```sh
firebase deploy --only "hosting,firestore:rules" --project YOUR_PROJECT_ID
```
