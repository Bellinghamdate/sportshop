// =============================================
// js/i18n.js – Từ điển song ngữ Việt/Anh
// Thêm key mới vào cả 2 ngôn ngữ cho đồng bộ
// =============================================

export const translations = {
  vi: {
    "checkout.demo": "Đơn hàng mô phỏng cho môn học. Hãy dùng thông tin giả để thử đặt hàng.",
    "checkout.receipt": "Mã đơn mô phỏng",
    "checkout.local": "Đã lưu biên nhận trên trình duyệt này.",
    "checkout.cloud": "Đã ghi nhận đơn trong Firestore.",
    "checkout.failed": "Chưa lưu được đơn. Giỏ hàng vẫn còn để bạn thử lại.",
    "checkout.changed": "Giỏ hàng hoặc giá vừa thay đổi. Hãy xem lại tổng tiền và xác nhận lần nữa.",
    "checkout.unavailable": "Có sản phẩm hoặc size đã hết hàng. Quay lại giỏ để xóa sản phẩm đó.",
    "checkout.tooMany": "Mỗi đơn mô phỏng nhận tối đa 100 dòng sản phẩm.",
    "cart.clear": "Xóa tất cả",
    "cart.confirmClear": "Xóa tất cả sản phẩm trong giỏ?",
    "cart.minus": "Giảm số lượng",
    "cart.plus": "Tăng số lượng",
    "quiz.surfaceTurf": "Cỏ nhân tạo ngắn",
    "quiz.surfaceGrass": "Cỏ tự nhiên",
    "quiz.surfaceIndoor": "Sàn trong nhà",
    "quiz.surfaceRoad": "Đường nhựa",
    "quiz.surfaceTrail": "Đường mòn",
    "quiz.surfaceTrack": "Đường chạy sân vận động",
    "quiz.surfaceCourt": "Sân cứng ngoài trời",
    "quiz.surfaceRubber": "Sàn cao su phòng gym",
    "quiz.surfacePlatform": "Sàn nâng tạ",
    "quiz.regular": "Bàn chân tiêu chuẩn",
    "quiz.wide": "Bàn chân rộng",
    "quiz.narrow": "Bàn chân thon",
    "quiz.low": "Tối đa 1.000.000đ",
    "quiz.mid": "Tối đa 1.500.000đ",
    "quiz.high": "Không giới hạn",
    "quiz.submit": "Xem gợi ý",
    "quiz.more": "Một số mẫu cùng môn vượt ngân sách đã chọn.",
    "quiz.none": "Hiện chưa có mẫu còn hàng cho môn này.",
    "size.instructions": "Đứng trên giấy, đánh dấu gót và đầu ngón dài nhất. Đo cả hai chân và nhập chiều dài lớn hơn.",
    "size.reference": "Bảng tham khảo riêng của Sport Zone cho giày người lớn, dùng size US nam. Phom từng mẫu có thể khác nhau.",
    "size.range": "Bảng này áp dụng từ 22,0 đến 29,0 cm. Số đo giữa hai mốc được làm tròn lên mốc kế tiếp.",
    "size.result": "Size tham khảo",
    "size.cm": "Chiều dài tối đa (cm)",
    "size.chart": "Bảng size đầy đủ",
    "landing.cta": "Chọn size Pro Match",
    "landing.benefits": "Thiết kế cho buổi đá phong trào",
    "landing.grip": "Bám sân khi đổi hướng",
    "landing.gripText": "Đinh FG/AG phân bổ quanh đế, hỗ trợ những pha tăng tốc và xoay người.",
    "landing.upper": "Thân giày linh hoạt",
    "landing.upperText": "Vật liệu tổng hợp ôm chân để bạn dễ cảm nhận bóng trong những đường chuyền ngắn.",
    "landing.lining": "Lớp lót thoáng khí",
    "landing.liningText": "Lớp lót thoáng giúp bàn chân dễ chịu suốt buổi đá.",
    "about.intro": "Sport Zone là webshop mô phỏng dành cho người Việt chơi thể thao phong trào.",
    "about.body": "Một buổi đá bóng sau giờ làm, vài vòng chạy cuối tuần hay một trận cầu cùng bạn bè đều cần đôi giày vừa chân và hợp sân. Bạn có thể lọc theo môn, so sánh giá và dùng bài tư vấn để tìm mẫu phù hợp.",
    "about.project": "Dự án môn học",
    "about.projectBody": "Website minh họa hành trình chọn giày và đặt đơn bằng HTML, CSS, JavaScript và Firebase. Các sản phẩm, ưu đãi và chính sách là dữ liệu học tập.",
    "contact.intro": "Gửi câu hỏi mẫu về size, mặt sân hoặc cách sử dụng website.",
    "contact.message": "Nội dung liên hệ",
    "contact.demo": "Biểu mẫu dùng cho dự án môn học. Vui lòng nhập dữ liệu giả khi thử nghiệm.",
    "contact.local": "Đã lưu lời nhắn mẫu trên trình duyệt.",
    "policy.title": "Chính sách mô phỏng",
    "policy.shipping": "Giao hàng",
    "policy.shippingText": "Giỏ dưới 500.000đ có phí vận chuyển mô phỏng 30.000đ. Từ 500.000đ, phí là 0đ. Website không thu tiền hoặc giao hàng.",
    "policy.returnText": "Tình huống đổi size trong bài tập áp dụng trong 7 ngày, với giày chưa sử dụng và còn hộp. Bạn có thể thử gửi yêu cầu qua trang liên hệ.",
    "policy.dataText": "Giỏ hàng và ngôn ngữ được lưu trên trình duyệt. Khi kết nối Firebase, đơn mô phỏng và lời nhắn được lưu trong Firestore và chỉ quản trị viên có quyền đọc.",
    "blog.feature": "Bài nổi bật",
    "blog.missing": "Không tìm thấy bài viết.",
    "blog.copy": "Sao chép liên kết",
    "blog.copied": "Đã sao chép liên kết.",
    "admin.dashboard": "Bảng điều khiển",
    "admin.products": "Sản phẩm",
    "admin.blogs": "Bài viết Blog",
    "admin.orders": "Đơn hàng",
    "admin.overview": "Tổng quan",
    "admin.manage": "Quản lý",
    "admin.other": "Khác",
    "admin.site": "Xem website",
    "admin.logout": "🚪 Đăng xuất",
    "admin.views": "Lượt xem",
    "admin.likes": "Lượt thích",
    "admin.recent": "📦 Đơn hàng gần nhất",
    "admin.all": "Xem tất cả",
    "admin.orderId": "Mã đơn",
    "admin.customer": "Khách hàng",
    "admin.total": "Tổng tiền",
    "admin.status": "Trạng thái",
    "admin.date": "Thời gian",
    "admin.top": "🔥 Sản phẩm được xem nhiều nhất",
    "admin.manageProducts": "👟 Quản lý sản phẩm",
    "admin.addProduct": "Thêm sản phẩm",
    "admin.editProduct": "Sửa sản phẩm",
    "admin.productName": "Tên sản phẩm",
    "admin.sizes": "Sizes",
    "admin.manageBlogs": "📝 Quản lý bài viết",
    "admin.addBlog": "Thêm bài viết",
    "admin.editBlog": "Sửa bài viết",
    "admin.title": "Tiêu đề",
    "admin.author": "Tác giả",
    "admin.minutes": "Thời gian đọc (phút)",
    "admin.published": "Ngày đăng",
    "admin.allOrders": "📦 Tất cả đơn hàng",
    "admin.ordered": "Ngày đặt",
    "admin.choose": "-- Chọn --",
    "admin.price": "Giá bán (VND) *",
    "admin.originalPrice": "Giá gốc (VND)",
    "admin.shortDesc": "Mô tả ngắn",
    "admin.description": "Mô tả đầy đủ",
    "admin.sizeList": "Sizes (cách nhau bằng dấu phẩy)",
    "admin.image": "URL ảnh chính",
    "admin.features": "Tính năng nổi bật (mỗi dòng 1 tính năng)",
    "admin.saveProduct": "💾 Lưu sản phẩm",
    "admin.general": "Tổng hợp",
    "admin.excerpt": "Tóm tắt",
    "admin.content": "Nội dung (HTML)",
    "admin.htmlHint": "Hỗ trợ HTML cơ bản: <h2>, <p>, <ul>, <li>, <strong>",
    "admin.cover": "URL ảnh bìa",
    "admin.saveBlog": "💾 Lưu bài viết",
    "admin.orderDetail": "📦 Chi tiết đơn hàng",
    "admin.pending": "Chờ xử lý",
    "admin.confirmed": "Đã xác nhận",
    "admin.delivered": "Đã giao",
    "admin.cancelled": "Đã hủy",
    "admin.updateStatus": "Cập nhật trạng thái",
    "admin.emptyOrders": "Chưa có đơn hàng.",
    "admin.emptyBlogs": "Chưa có bài viết.",
    "admin.view": "Xem",
    "admin.saved": "Đã lưu thay đổi.",
    "admin.invalidProduct": "Nhập tên và ít nhất một size cho sản phẩm còn hàng.",
    "admin.invalidTitle": "Vui lòng nhập tiêu đề bài viết.",
    "admin.config": "Điền cấu hình Firebase trong js/firebase-config.js để dùng trang quản trị.",
    "admin.guest": "Đăng nhập bằng tài khoản quản trị.",
    "admin.denied": "Tài khoản này chưa được cấp quyền quản trị.",
    "admin.signedInUid": "UID của tài khoản đang đăng nhập",
    "admin.roleHelp": "Sao chép UID này cho người quản lý dự án. Trong Firestore Database, tạo tài liệu trong collection admins, dùng UID làm Document ID rồi lưu. Trang sẽ tự chuyển khi quyền được cấp.",
    "admin.error": "Chưa thể kết nối hoặc xác minh quyền. Hãy tải lại trang.",
    "admin.checking": "Đang xác minh quyền quản trị…",
    "admin.course": "Dự án môn học · Khu vực quản trị",
    "admin.password": "Mật khẩu",
    "admin.loginTitle": "Trang quản trị nội bộ",
    "admin.login": "Đăng nhập",
    "admin.loginFailed": "Đăng nhập thất bại. Kiểm tra tài khoản và kết nối.",
    "admin.tooMany": "Vui lòng đợi rồi đăng nhập lại.",
    "admin.seedTitle": "Nạp dữ liệu mẫu",
    "admin.seedDesc": "Bộ mẫu gồm 12 sản phẩm và 5 bài viết. Khi nạp lại, chỉ bản ghi còn thiếu được thêm.",
    "admin.seedAll": "Nạp toàn bộ dữ liệu mẫu",
    "admin.seedProducts": "Nạp sản phẩm",
    "admin.seedBlogs": "Nạp bài viết",
    "admin.clearProducts": "Xóa toàn bộ sản phẩm",
    "admin.confirmClear": "Xóa tất cả sản phẩm và số lượt xem, lượt thích? Bao gồm cả sản phẩm tự tạo.",
    "admin.seedReady": "Đã xác minh quyền quản trị.",
    "admin.working": "Đang xử lý…",
    "admin.seeded": "Số bản ghi vừa thêm",
    "admin.cleared": "Số sản phẩm đã xóa",

    "promo.badge": "SẢN PHẨM CHỦ LỰC",
    "promo.tagline": "Vua sân cỏ phong trào",
    "promo.desc": "Đế đinh FG/AG linh hoạt và thân giày tổng hợp bền bỉ cho những buổi đá bóng phong trào.",
    "promo.cta": "Xem ưu đãi",
    "products.filters": "Bộ lọc",
    "products.load_error": "Chưa tải được sản phẩm. Hãy thử tải lại trang.",
    "products.none": "Chưa có sản phẩm.",
    "home.title": "Sport Zone – Giày thể thao",
    "detail.not_found": "Không tìm thấy sản phẩm",
    "detail.back": "Quay lại danh sách",
    "detail.like": "Thích sản phẩm",
    "detail.unavailable": "Tạm hết hàng hoặc chưa có size",
    "detail.warranty": "Bảo hành 6 tháng",
    "detail.shipping": "Miễn phí vận chuyển cho đơn từ 500.000đ",
    "detail.returns": "Đổi trả trong 7 ngày",
    "nav.language": "Switch to English",
    "news.demo": "Đã lưu đăng ký trên trình duyệt cho bản mô phỏng.",
    "news.failed": "Chưa lưu được đăng ký. Vui lòng thử lại.",

    // Navbar
    "nav.home": "Trang chủ",
    "nav.products": "Sản phẩm",
    "nav.blog": "Blog",
    "nav.quiz": "Tư vấn giày",
    "nav.cart": "Giỏ hàng",
    "nav.about": "Về chúng tôi",
    "nav.contact": "Liên hệ",
    "nav.admin": "Quản trị",

    // Hero
    "hero.badge": "Webshop mô phỏng · Dự án môn học",
    "hero.h1a": "Giày thể thao",
    "hero.h1b": "đỉnh cao",
    "hero.h1c": "phong trào",
    "hero.desc": "Sport Zone – Nơi hội tụ dòng giày chất lượng cho bóng đá, chạy bộ, pickleball và gym. Chơi thật, giày thật, đẳng cấp thật.",
    "hero.cta1": "Mua ngay",
    "hero.cta2": "Khám phá danh mục",
    "hero.stat1": "Sản phẩm",
    "hero.stat2": "Khách hàng",
    "hero.stat3": "Danh mục",

    // Categories
    "cat.section_badge": "DANH MỤC",
    "cat.section_title": "Chọn theo môn thể thao",
    "cat.section_desc": "Từ sân cỏ đến đường chạy, từ sân cầu đến phòng gym – Sport Zone có đủ cho bạn.",
    "cat.football": "Bóng đá",
    "cat.running": "Chạy bộ",
    "cat.badminton": "Pickleball / Cầu lông",
    "cat.gym": "Gym / Tập luyện",
    "cat.explore": "Xem tất cả",

    // Featured products
    "featured.badge": "NỔI BẬT",
    "featured.title": "Sản phẩm nổi bật",
    "featured.desc": "Những đôi giày được yêu thích nhất tháng này tại Sport Zone.",
    "featured.view_all": "Xem tất cả sản phẩm",
    "featured.add_cart": "Thêm vào giỏ",

    // Why us
    "why.badge": "TẠI SAO CHỌN CHÚNG TÔI",
    "why.title": "Sport Zone khác biệt như thế nào?",
    "why.1_title": "Hàng chính hãng 100%",
    "why.1_desc": "Tất cả sản phẩm đều có nguồn gốc rõ ràng, cam kết không hàng giả.",
    "why.2_title": "Giao hàng toàn quốc",
    "why.2_desc": "Miễn phí vận chuyển cho đơn từ 500.000đ. Giao nhanh 2-3 ngày.",
    "why.3_title": "Đổi trả 7 ngày",
    "why.3_desc": "Không vừa size, đổi ngay. Quy trình đơn giản, không phiền hà.",
    "why.4_title": "Tư vấn chuyên sâu",
    "why.4_desc": "Đội ngũ am hiểu thể thao, sẵn sàng tư vấn chọn giày phù hợp.",

    // Newsletter
    "news.title": "Nhận ưu đãi độc quyền",
    "news.desc": "Đăng ký nhận thông tin sản phẩm mới và khuyến mãi đặc biệt dành riêng cho thành viên.",
    "news.placeholder": "Email của bạn",
    "news.btn": "Đăng ký",
    "news.success": "✅ Đăng ký thành công! Cảm ơn bạn.",

    // Products page
    "products.title": "Tất cả sản phẩm",
    "products.desc": "Tìm đôi giày hoàn hảo cho môn thể thao của bạn",
    "products.search_placeholder": "Tìm kiếm sản phẩm...",
    "products.filter_category": "Danh mục",
    "products.filter_price": "Giá",
    "products.filter_size": "Size",
    "products.all": "Tất cả",
    "products.sort": "Sắp xếp",
    "products.sort_default": "Mặc định",
    "products.sort_price_asc": "Giá: Thấp → Cao",
    "products.sort_price_desc": "Giá: Cao → Thấp",
    "products.sort_name": "Tên A-Z",
    "products.results": "sản phẩm",
    "products.empty": "Không tìm thấy sản phẩm",
    "products.empty_desc": "Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm.",
    "products.load_more": "Xem thêm",
    "products.apply_filter": "Áp dụng",
    "products.reset_filter": "Đặt lại",
    "products.price_all": "Tất cả mức giá",
    "products.price_1": "Dưới 500k",
    "products.price_2": "500k – 1 triệu",
    "products.price_3": "1 triệu – 2 triệu",
    "products.price_4": "Trên 2 triệu",

    // Product detail
    "detail.views": "lượt xem",
    "detail.likes": "lượt thích",
    "detail.size_guide": "Bảng size",
    "detail.choose_size": "Chọn size:",
    "detail.add_cart": "Thêm vào giỏ",
    "detail.buy_now": "Mua ngay",
    "detail.description": "Mô tả sản phẩm",
    "detail.features": "Tính năng nổi bật",
    "detail.related": "Sản phẩm liên quan",
    "detail.in_stock": "Còn hàng",
    "detail.out_stock": "Hết hàng",
    "detail.select_size_first": "⚠️ Vui lòng chọn size trước",
    "detail.added_cart": "✅ Đã thêm vào giỏ hàng!",
    "detail.liked": "❤️ Đã thích!",
    "detail.unliked": "💔 Đã bỏ thích",

    // Cart
    "cart.title": "Giỏ hàng",
    "cart.empty": "Giỏ hàng trống",
    "cart.empty_desc": "Hãy thêm sản phẩm vào giỏ hàng.",
    "cart.continue": "Tiếp tục mua",
    "cart.product": "Sản phẩm",
    "cart.price": "Đơn giá",
    "cart.qty": "Số lượng",
    "cart.total": "Thành tiền",
    "cart.action": "Thao tác",
    "cart.subtotal": "Tạm tính",
    "cart.shipping": "Vận chuyển",
    "cart.shipping_free": "Miễn phí",
    "cart.shipping_note": "Miễn phí cho đơn ≥ 500.000đ",
    "cart.order_total": "Tổng cộng",
    "cart.checkout": "Tiến hành thanh toán",
    "cart.remove": "Xóa",

    // Checkout
    "checkout.title": "Thanh toán",
    "checkout.info": "Thông tin giao hàng",
    "checkout.name": "Họ và tên",
    "checkout.phone": "Số điện thoại",
    "checkout.email": "Email",
    "checkout.address": "Địa chỉ",
    "checkout.city": "Tỉnh/Thành phố",
    "checkout.note": "Ghi chú (tùy chọn)",
    "checkout.payment": "Phương thức thanh toán",
    "checkout.cod": "Thanh toán khi nhận hàng (COD)",
    "checkout.bank": "Chuyển khoản ngân hàng",
    "checkout.order_summary": "Đơn hàng của bạn",
    "checkout.place_order": "Đặt hàng",
    "checkout.success": "🎉 Đặt hàng thành công! Cảm ơn bạn.",
    "checkout.processing": "Đang xử lý...",
    "checkout.required": "Vui lòng điền đầy đủ thông tin",

    // Blog
    "blog.title": "Blog thể thao",
    "blog.desc": "Kiến thức, kinh nghiệm và mẹo chọn giày từ cộng đồng Sport Zone.",
    "blog.read_more": "Đọc tiếp",
    "blog.min_read": "phút đọc",
    "blog.related": "Bài viết liên quan",
    "blog.back": "← Quay lại Blog",

    // Quiz
    "quiz.title": "Tư vấn chọn giày",
    "quiz.desc": "Trả lời 4 câu hỏi ngắn, chúng tôi gợi ý đôi giày phù hợp nhất với bạn.",
    "quiz.start": "Bắt đầu",
    "quiz.next": "Tiếp theo →",
    "quiz.back": "← Quay lại",
    "quiz.result_title": "Giày phù hợp với bạn",
    "quiz.retry": "Làm lại",
    "quiz.q1": "Bạn chơi môn thể thao nào?",
    "quiz.q2": "Bạn thường tập trên mặt sân nào?",
    "quiz.q3": "Dáng chân của bạn?",
    "quiz.q4": "Ngân sách của bạn?",

    // Size Guide
    "size.title": "Bảng quy đổi size giày",
    "size.desc": "Nhập chiều dài bàn chân để xem size phù hợp.",
    "size.input_label": "Chiều dài bàn chân (cm):",
    "size.measure": "Cách đo chính xác",
    "size.btn": "Tra size",
    "size.result_vn": "Size Việt Nam",
    "size.result_us": "Size US",
    "size.result_eu": "Size EU",
    "size.tip": "Nên mua size lớn hơn 0.5 nếu bạn thường mang tất dày.",

    // About
    "about.title": "Về Sport Zone",
    "about.mission": "Sứ mệnh của chúng tôi",

    // Contact
    "contact.title": "Liên hệ",
    "contact.send": "Gửi tin nhắn",
    "contact.success": "✅ Tin nhắn của bạn đã được gửi!",

    // Footer
    "footer.desc": "Sport Zone – Thương hiệu giày thể thao dành cho người Việt yêu thể thao phong trào.",
    "footer.quick_links": "Liên kết nhanh",
    "footer.support": "Hỗ trợ",
    "footer.policy": "Chính sách",
    "footer.copyright": "© 2025 Sport Zone. Dự án môn học – Không phục vụ mục đích thương mại.",
    "footer.size_guide": "Bảng size",
    "footer.terms": "Điều khoản",
    "footer.privacy": "Bảo mật",
    "footer.return": "Đổi trả",

    // General
    "general.loading": "Đang tải...",
    "general.error": "Có lỗi xảy ra, vui lòng thử lại.",
    "general.vnd": "đ",
    "general.search": "Tìm kiếm",
    "general.close": "Đóng",
    "general.save": "Lưu",
    "general.cancel": "Hủy",
    "general.delete": "Xóa",
    "general.edit": "Sửa",
    "general.add": "Thêm",
    "general.confirm": "Xác nhận",
  },

  en: {
    "checkout.demo": "Course demo order. Use fictional details to try checkout.",
    "checkout.receipt": "Demo order number",
    "checkout.local": "Your receipt was saved in this browser.",
    "checkout.cloud": "Your order was saved to Firestore.",
    "checkout.failed": "Could not save the order. Your cart is available for another attempt.",
    "checkout.changed": "Your cart or prices changed. Review the total and confirm again.",
    "checkout.unavailable": "An item or size is unavailable. Return to the cart to remove it.",
    "checkout.tooMany": "A demo order supports up to 100 item lines.",
    "cart.clear": "Clear cart",
    "cart.confirmClear": "Remove all items from your cart?",
    "cart.minus": "Decrease quantity",
    "cart.plus": "Increase quantity",
    "quiz.surfaceTurf": "Short artificial turf",
    "quiz.surfaceGrass": "Natural grass",
    "quiz.surfaceIndoor": "Indoor court",
    "quiz.surfaceRoad": "Road",
    "quiz.surfaceTrail": "Trail",
    "quiz.surfaceTrack": "Running track",
    "quiz.surfaceCourt": "Outdoor hard court",
    "quiz.surfaceRubber": "Rubber gym flooring",
    "quiz.surfacePlatform": "Lifting platform",
    "quiz.regular": "Regular width",
    "quiz.wide": "Wide foot",
    "quiz.narrow": "Narrow foot",
    "quiz.low": "Up to 1,000,000 VND",
    "quiz.mid": "Up to 1,500,000 VND",
    "quiz.high": "Any budget",
    "quiz.submit": "Show matches",
    "quiz.more": "Some options for your sport exceed the selected budget.",
    "quiz.none": "No available shoes for this sport yet.",
    "size.instructions": "Stand on paper and mark your heel and longest toe. Measure both feet and enter the longer length.",
    "size.reference": "Sport Zone’s reference chart for adult shoes uses US men’s sizing. Fit can vary between models.",
    "size.range": "This chart covers 22.0 to 29.0 cm. Measurements between two entries use the next entry up.",
    "size.result": "Suggested size",
    "size.cm": "Foot length up to (cm)",
    "size.chart": "Full size chart",
    "landing.cta": "Choose your Pro Match size",
    "landing.benefits": "Designed for match day",
    "landing.grip": "Grip through turns",
    "landing.gripText": "FG/AG studs around the sole provide traction for acceleration and turns.",
    "landing.upper": "Flexible upper",
    "landing.upperText": "The synthetic upper wraps the foot for close control on short passes.",
    "landing.lining": "Breathable lining",
    "landing.liningText": "A ventilated lining keeps the foot comfortable throughout the match.",
    "about.intro": "Sport Zone is a demo shoe shop for recreational athletes in Vietnam.",
    "about.body": "An after-work match, a weekend run or a game with friends calls for shoes that fit both your feet and the surface. Browse by sport, compare prices and use the shoe advisor to find a pair.",
    "about.project": "Course project",
    "about.projectBody": "This project uses HTML, CSS, JavaScript and Firebase to demonstrate browsing and ordering shoes. The products, offers and policies are classroom examples.",
    "contact.intro": "Send a sample question about sizing, surfaces or using the shop.",
    "contact.message": "Your message",
    "contact.demo": "This form is part of a course project. Please use fictional contact details.",
    "contact.local": "Demo message saved in this browser.",
    "policy.title": "Demo shop policies",
    "policy.shipping": "Shipping",
    "policy.shippingText": "Demo shipping is 30,000 VND below 500,000 VND and free from 500,000 VND. Orders do not trigger a payment or shipment.",
    "policy.returnText": "The demo exchange policy covers unused shoes in their original box within seven days. Try the contact form to request a size exchange.",
    "policy.dataText": "Your cart and language preference are stored in your browser. When connected to Firebase, demo orders and messages are saved in Firestore and can be read only by admins.",
    "blog.feature": "Featured story",
    "blog.missing": "Article not found.",
    "blog.copy": "Copy link",
    "blog.copied": "Link copied.",
    "admin.dashboard": "Dashboard",
    "admin.products": "Products",
    "admin.blogs": "Blog posts",
    "admin.orders": "Orders",
    "admin.overview": "Overview",
    "admin.manage": "Manage",
    "admin.other": "More",
    "admin.site": "View shop",
    "admin.logout": "🚪 Sign out",
    "admin.views": "Views",
    "admin.likes": "Likes",
    "admin.recent": "📦 Recent orders",
    "admin.all": "View all",
    "admin.orderId": "Order ID",
    "admin.customer": "Customer",
    "admin.total": "Total",
    "admin.status": "Status",
    "admin.date": "Date",
    "admin.top": "🔥 Most viewed products",
    "admin.manageProducts": "👟 Manage products",
    "admin.addProduct": "Add product",
    "admin.editProduct": "Edit product",
    "admin.productName": "Product name",
    "admin.sizes": "Sizes",
    "admin.manageBlogs": "📝 Manage posts",
    "admin.addBlog": "Add post",
    "admin.editBlog": "Edit post",
    "admin.title": "Title",
    "admin.author": "Author",
    "admin.minutes": "Reading time (minutes)",
    "admin.published": "Published",
    "admin.allOrders": "📦 All orders",
    "admin.ordered": "Ordered",
    "admin.choose": "Select…",
    "admin.price": "Price (VND) *",
    "admin.originalPrice": "Original price (VND)",
    "admin.shortDesc": "Short description",
    "admin.description": "Full description",
    "admin.sizeList": "Sizes (comma-separated)",
    "admin.image": "Main image URL",
    "admin.features": "Features (one per line)",
    "admin.saveProduct": "💾 Save product",
    "admin.general": "General",
    "admin.excerpt": "Summary",
    "admin.content": "Content (HTML)",
    "admin.htmlHint": "Supported HTML: <h2>, <p>, <ul>, <li>, <strong>",
    "admin.cover": "Cover image URL",
    "admin.saveBlog": "💾 Save post",
    "admin.orderDetail": "📦 Order details",
    "admin.pending": "Pending",
    "admin.confirmed": "Confirmed",
    "admin.delivered": "Delivered",
    "admin.cancelled": "Cancelled",
    "admin.updateStatus": "Update status",
    "admin.emptyOrders": "No orders yet.",
    "admin.emptyBlogs": "No posts yet.",
    "admin.view": "View",
    "admin.saved": "Changes saved.",
    "admin.invalidProduct": "Enter a name and at least one size for an available product.",
    "admin.invalidTitle": "Enter a post title.",
    "admin.config": "Set up Firebase in js/firebase-config.js to use the admin pages.",
    "admin.guest": "Sign in with your admin account.",
    "admin.denied": "This account does not have admin access.",
    "admin.signedInUid": "UID of the signed-in account",
    "admin.roleHelp": "Copy this UID for the project administrator. In Firestore Database, create a document in the admins collection using this UID as the document ID, then save. This page will redirect once access is granted.",
    "admin.error": "Could not connect or verify access. Please reload the page.",
    "admin.checking": "Checking admin access…",
    "admin.course": "Student project · Admin area",
    "admin.password": "Password",
    "admin.loginTitle": "Staff sign-in",
    "admin.login": "Sign in",
    "admin.loginFailed": "Sign-in failed. Check your credentials and connection.",
    "admin.tooMany": "Please wait before trying again.",
    "admin.seedTitle": "Load sample data",
    "admin.seedDesc": "The sample set contains 12 products and 5 posts. Loading again adds only missing records.",
    "admin.seedAll": "Load all samples",
    "admin.seedProducts": "Load products",
    "admin.seedBlogs": "Load posts",
    "admin.clearProducts": "Delete all products",
    "admin.confirmClear": "Delete every product and its counters, including custom products?",
    "admin.seedReady": "Admin access verified.",
    "admin.working": "Working…",
    "admin.seeded": "Records added",
    "admin.cleared": "Products deleted",

    "promo.badge": "FLAGSHIP SHOE",
    "promo.tagline": "Built for match day",
    "promo.desc": "Versatile FG/AG studs and a durable synthetic upper for your weekly football match.",
    "promo.cta": "View offer",
    "products.filters": "Filters",
    "products.load_error": "Could not load products. Please reload the page.",
    "products.none": "No products yet.",
    "home.title": "Sport Zone – Sports shoes",
    "detail.not_found": "Product not found",
    "detail.back": "Back to products",
    "detail.like": "Like product",
    "detail.unavailable": "Currently unavailable in any size",
    "detail.warranty": "Six-month warranty",
    "detail.shipping": "Free shipping on orders from 500,000 VND",
    "detail.returns": "Returns within seven days",
    "nav.language": "Chuyển sang tiếng Việt",
    "news.demo": "Demo subscription saved in this browser.",
    "news.failed": "Could not save your subscription. Please try again.",

    // Navbar
    "nav.home": "Home",
    "nav.products": "Products",
    "nav.blog": "Blog",
    "nav.quiz": "Shoe Advisor",
    "nav.cart": "Cart",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.admin": "Admin",

    // Hero
    "hero.badge": "Demo shop · Student project",
    "hero.h1a": "Sports shoes",
    "hero.h1b": "top-tier",
    "hero.h1c": "for everyone",
    "hero.desc": "Sport Zone – Your go-to for quality footwear for football, running, pickleball, and gym. Play real, wear real, perform real.",
    "hero.cta1": "Shop Now",
    "hero.cta2": "Browse Categories",
    "hero.stat1": "Products",
    "hero.stat2": "Customers",
    "hero.stat3": "Categories",

    // Categories
    "cat.section_badge": "CATEGORIES",
    "cat.section_title": "Shop by Sport",
    "cat.section_desc": "From the pitch to the track, from the court to the gym – Sport Zone has you covered.",
    "cat.football": "Football",
    "cat.running": "Running",
    "cat.badminton": "Pickleball / Badminton",
    "cat.gym": "Gym / Training",
    "cat.explore": "View All",

    // Featured products
    "featured.badge": "FEATURED",
    "featured.title": "Featured Products",
    "featured.desc": "The most loved shoes this month at Sport Zone.",
    "featured.view_all": "View All Products",
    "featured.add_cart": "Add to Cart",

    // Why us
    "why.badge": "WHY CHOOSE US",
    "why.title": "What Makes Sport Zone Different?",
    "why.1_title": "100% Authentic",
    "why.1_desc": "All products are sourced from authorized distributors. No fakes, guaranteed.",
    "why.2_title": "Nationwide Delivery",
    "why.2_desc": "Free shipping on orders over 500,000 VND. Fast delivery in 2-3 days.",
    "why.3_title": "7-Day Returns",
    "why.3_desc": "Wrong size? Exchange it immediately. Simple and hassle-free.",
    "why.4_title": "Expert Advice",
    "why.4_desc": "Our sports-savvy team is always ready to help you find the perfect shoe.",

    // Newsletter
    "news.title": "Get Exclusive Deals",
    "news.desc": "Subscribe to receive new product updates and special offers for members.",
    "news.placeholder": "Your email address",
    "news.btn": "Subscribe",
    "news.success": "✅ Subscribed successfully! Thank you.",

    // Products page
    "products.title": "All Products",
    "products.desc": "Find the perfect shoe for your sport",
    "products.search_placeholder": "Search products...",
    "products.filter_category": "Category",
    "products.filter_price": "Price",
    "products.filter_size": "Size",
    "products.all": "All",
    "products.sort": "Sort",
    "products.sort_default": "Default",
    "products.sort_price_asc": "Price: Low → High",
    "products.sort_price_desc": "Price: High → Low",
    "products.sort_name": "Name A-Z",
    "products.results": "products",
    "products.empty": "No products found",
    "products.empty_desc": "Try adjusting your filters or search term.",
    "products.load_more": "Load More",
    "products.apply_filter": "Apply",
    "products.reset_filter": "Reset",
    "products.price_all": "All prices",
    "products.price_1": "Under 500k",
    "products.price_2": "500k – 1M",
    "products.price_3": "1M – 2M",
    "products.price_4": "Over 2M",

    // Product detail
    "detail.views": "views",
    "detail.likes": "likes",
    "detail.size_guide": "Size Guide",
    "detail.choose_size": "Choose size:",
    "detail.add_cart": "Add to Cart",
    "detail.buy_now": "Buy Now",
    "detail.description": "Product Description",
    "detail.features": "Key Features",
    "detail.related": "Related Products",
    "detail.in_stock": "In Stock",
    "detail.out_stock": "Out of Stock",
    "detail.select_size_first": "⚠️ Please select a size first",
    "detail.added_cart": "✅ Added to cart!",
    "detail.liked": "❤️ Liked!",
    "detail.unliked": "💔 Unliked",

    // Cart
    "cart.title": "Shopping Cart",
    "cart.empty": "Your cart is empty",
    "cart.empty_desc": "Add some products to your cart.",
    "cart.continue": "Continue Shopping",
    "cart.product": "Product",
    "cart.price": "Price",
    "cart.qty": "Qty",
    "cart.total": "Total",
    "cart.action": "Action",
    "cart.subtotal": "Subtotal",
    "cart.shipping": "Shipping",
    "cart.shipping_free": "Free",
    "cart.shipping_note": "Free for orders ≥ 500,000 VND",
    "cart.order_total": "Order Total",
    "cart.checkout": "Proceed to Checkout",
    "cart.remove": "Remove",

    // Checkout
    "checkout.title": "Checkout",
    "checkout.info": "Shipping Information",
    "checkout.name": "Full Name",
    "checkout.phone": "Phone Number",
    "checkout.email": "Email",
    "checkout.address": "Address",
    "checkout.city": "City / Province",
    "checkout.note": "Note (optional)",
    "checkout.payment": "Payment Method",
    "checkout.cod": "Cash on Delivery (COD)",
    "checkout.bank": "Bank Transfer",
    "checkout.order_summary": "Your Order",
    "checkout.place_order": "Place Order",
    "checkout.success": "🎉 Order placed! Thank you.",
    "checkout.processing": "Processing...",
    "checkout.required": "Please fill in all required fields",

    // Blog
    "blog.title": "Sports Blog",
    "blog.desc": "Knowledge, experience and shoe-picking tips from the Sport Zone community.",
    "blog.read_more": "Read More",
    "blog.min_read": "min read",
    "blog.related": "Related Articles",
    "blog.back": "← Back to Blog",

    // Quiz
    "quiz.title": "Shoe Advisor Quiz",
    "quiz.desc": "Answer 4 short questions and we'll suggest the best shoes for you.",
    "quiz.start": "Start",
    "quiz.next": "Next →",
    "quiz.back": "← Back",
    "quiz.result_title": "Recommended Shoes For You",
    "quiz.retry": "Retake Quiz",
    "quiz.q1": "What sport do you play?",
    "quiz.q2": "What surface do you usually play on?",
    "quiz.q3": "What is your foot type?",
    "quiz.q4": "What is your budget?",

    // Size Guide
    "size.title": "Shoe Size Conversion",
    "size.desc": "Enter your foot length to find your size.",
    "size.input_label": "Foot length (cm):",
    "size.measure": "How to measure correctly",
    "size.btn": "Find Size",
    "size.result_vn": "Vietnam Size",
    "size.result_us": "US Size",
    "size.result_eu": "EU Size",
    "size.tip": "Consider going up half a size if you usually wear thick socks.",

    // About
    "about.title": "About Sport Zone",
    "about.mission": "Our Mission",

    // Contact
    "contact.title": "Contact Us",
    "contact.send": "Send Message",
    "contact.success": "✅ Your message has been sent!",

    // Footer
    "footer.desc": "Sport Zone – Sports shoe brand for Vietnamese sports enthusiasts.",
    "footer.quick_links": "Quick Links",
    "footer.support": "Support",
    "footer.policy": "Policy",
    "footer.copyright": "© 2025 Sport Zone. Academic project – Not for commercial use.",
    "footer.size_guide": "Size Guide",
    "footer.terms": "Terms",
    "footer.privacy": "Privacy",
    "footer.return": "Returns",

    // General
    "general.loading": "Loading...",
    "general.error": "Something went wrong. Please try again.",
    "general.vnd": "₫",
    "general.search": "Search",
    "general.close": "Close",
    "general.save": "Save",
    "general.cancel": "Cancel",
    "general.delete": "Delete",
    "general.edit": "Edit",
    "general.add": "Add",
    "general.confirm": "Confirm",
  }
};

// Ngôn ngữ hiện tại (mặc định Việt)
let currentLang = localStorage.getItem('sz_lang') || 'vi';

/** Lấy chuỗi dịch theo key */
export function t(key) {
  return translations[currentLang]?.[key] || translations['vi'][key] || key;
}

/** Áp dụng toàn bộ bản dịch lên DOM (data-i18n) */
export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.getAttribute('data-i18n-placeholder'));
  });
  document.querySelectorAll('[data-i18n-label]').forEach(el => {
    el.setAttribute('aria-label', t(el.dataset.i18nLabel));
  });
  // Cập nhật nút ngôn ngữ
  const btn = document.getElementById('langBtn');
  if (btn) btn.textContent = currentLang === 'vi' ? 'EN' : 'VI';
  document.documentElement.lang = currentLang;
}

/** Lấy ngôn ngữ hiện tại */
export function getLang() { return currentLang; }

/** Chuyển đổi ngôn ngữ */
export function toggleLang() {
  currentLang = currentLang === 'vi' ? 'en' : 'vi';
  localStorage.setItem('sz_lang', currentLang);
  applyTranslations();
  // Phát sự kiện để các module khác biết
  window.dispatchEvent(new CustomEvent('langChange', { detail: currentLang }));
}

/** Khởi tạo i18n, gắn sự kiện nút chuyển ngôn ngữ */
export function initI18n() {
  applyTranslations();
  const btn = document.getElementById('langBtn');
  if (btn) btn.addEventListener('click', toggleLang);
}

// Nội dung tiếng Anh của các mẫu giày trong bộ dữ liệu môn học.
export const sampleProductEnglish = {
  "football-01": {
    shortDescriptionEn: "Multi-ground football boots for recreational matches.",
    descriptionEn: "Conical FG/AG studs grip the pitch during changes of direction. A flexible synthetic upper wraps the foot, while the ventilated lining keeps it comfortable through a full match.",
    featuresEn: ["FG/AG studs", "Light synthetic upper", "Breathable antibacterial lining", "280 g per shoe", "Six-month manufacturing warranty"]
  },
  "football-02": {
    shortDescriptionEn: "Cushioned turf shoes for short artificial grass.",
    descriptionEn: "Small rubber lugs distribute pressure on short artificial pitches. Navy stitching accents the black and white upper.",
    featuresEn: ["TF turf sole", "Abrasion-resistant rubber", "High tongue", "Suitable for school sports"]
  },
  "football-03": {
    shortDescriptionEn: "Lightweight indoor futsal shoes for close ball control.",
    descriptionEn: "The thin synthetic leather upper gives a close touch. The flat indoor sole grips wood and synthetic floors without leaving marks.",
    featuresEn: ["Non-marking IC sole", "Thin synthetic leather upper", "220 g per shoe", "Orange and black colourway"]
  },
  "running-01": {
    shortDescriptionEn: "Lightweight foam cushioning for daily road runs.",
    descriptionEn: "A two-layer EVA midsole cushions each stride on 5–15 km runs. The mesh upper lets heat escape as the pace picks up.",
    featuresEn: ["Dual-layer EVA foam", "Breathable 3D mesh", "Removable non-slip insole", "Reflective details", "Designed for asphalt"]
  },
  "running-02": {
    shortDescriptionEn: "Grippy trail shoes for uneven ground.",
    descriptionEn: "A Vibram rubber outsole grips dirt tracks and forest trails. The reinforced toe helps protect the foot on rocky ground.",
    featuresEn: ["Vibram outsole", "Reinforced TPU toe", "Water-resistant lining", "Quick-lock laces"]
  },
  "running-03": {
    shortDescriptionEn: "An affordable trainer for first-time runners.",
    descriptionEn: "Light mesh and a single layer of EVA provide a comfortable ride for easy to moderate training sessions.",
    featuresEn: ["Single-layer EVA", "Light mesh upper", "White and blue colourway", "Everyday styling"]
  },
  "badminton-01": {
    shortDescriptionEn: "Non-marking court shoes for pickleball and badminton.",
    descriptionEn: "Lateral cushioning supports quick cuts across the court. The non-marking sole helps protect indoor playing surfaces.",
    featuresEn: ["Non-marking outsole", "Lateral cushioning", "Gel midsole", "For pickleball and badminton"]
  },
  "badminton-02": {
    shortDescriptionEn: "Close-fitting badminton shoes for singles or doubles.",
    descriptionEn: "Updated rubber tread improves grip. Side vents help keep the foot cool, and this model weighs 15% less than its predecessor.",
    featuresEn: ["15% lighter than the previous model", "Side vents", "Grippy rubber outsole", "Stretch-resistant laces"]
  },
  "badminton-03": {
    shortDescriptionEn: "Pickleball shoes with heel cushioning and lateral support.",
    descriptionEn: "Herringbone tread grips the court during sideways movement. A reinforced toe cap adds protection during quick stops.",
    featuresEn: ["Herringbone tread", "Reinforced toe cap", "3 cm heel cushion", "Multiple colour options"]
  },
  "gym-01": {
    shortDescriptionEn: "Firm, flat shoes for squats and deadlifts.",
    descriptionEn: "A rigid zero-drop sole keeps the whole foot in contact with the floor. Laces and two straps secure the foot during lifts.",
    featuresEn: ["4 mm zero-drop sole", "Firmness rated 9/10", "Laces and two straps", "Wide toe box", "For powerlifting and CrossFit"]
  },
  "gym-02": {
    shortDescriptionEn: "An everyday trainer for cardio and light weights.",
    descriptionEn: "The sole balances flexibility for cardio with firmness for light lifting. The synthetic suede upper is easy to clean after a session.",
    featuresEn: ["For cardio, light weights, yoga and Zumba", "Everyday wear", "Easy-clean synthetic suede", "Antibacterial lining"]
  },
  "gym-03": {
    shortDescriptionEn: "CrossFit shoes for lifting, jumping and rope climbs.",
    descriptionEn: "The heel platform stays firm during squats. A flexible forefoot supports box jumps and burpees, while the inner guard protects the upper on rope climbs.",
    featuresEn: ["10 mm heel platform", "Flexible forefoot", "Inner rope guard", "Durable rubber outsole", "Designed for CrossFit competition"]
  },
};

// Bản tiếng Anh cho các bài viết mẫu.
export const blogEnglish = {
  "blog-01": {
    "title": "Choosing football boots for grass, turf and indoor courts",
    "excerpt": "Match your outsole to the surface you play on each week.",
    "content": "<h2>Natural grass</h2><p>FG boots use longer studs that can dig into firm natural grass. Check the pitch conditions and the surfaces listed for your pair.</p><h2>Artificial turf</h2><p>AG boots spread pressure across more studs on longer artificial grass. For short, dense turf on small-sided pitches, look for the many shallow rubber lugs of a TF sole.</p><h2>Indoor courts</h2><p>IC shoes have flat rubber outsoles. Check whether the venue requires a non-marking sole before you play.</p>",
    "tags": [
      "football",
      "outsoles",
      "pitches"
    ]
  },
  "blog-02": {
    "title": "Five common mistakes when buying running shoes",
    "excerpt": "A quick fit check can make the first run in a new pair more comfortable.",
    "content": "<h2>1. Relying only on the size label</h2><p>Try both shoes with your usual running socks. Leave room for your toes and check that the heel stays in place.</p><h2>2. Choosing by colour alone</h2><p>Check the width across your forefoot and walk or jog a few steps before deciding.</p><h2>3. Overlooking wear</h2><p>Inspect the tread and cushioning regularly. Uneven wear can change how a familiar shoe feels.</p><h2>4. Starting with a long run</h2><p>Try a short, familiar route first so you can adjust the laces or stop if a seam rubs.</p><h2>5. Forgetting your socks</h2><p>The thickness and seams of a sock affect fit. Test the combination you will actually wear.</p>",
    "tags": [
      "running",
      "fit",
      "tips"
    ]
  },
  "blog-03": {
    "title": "Pickleball 101: choosing court shoes",
    "excerpt": "Side steps, pivots and quick stops place different demands on a shoe.",
    "content": "<h2>Moving across the court</h2><p>Pickleball involves lateral movement as well as forward steps. A stable base and a secure upper can help the foot stay in place during a change of direction.</p><h2>What to look for</h2><ul><li>A tread designed for the court surface.</li><li>Side support for cuts and recovery steps.</li><li>A reinforced toe for repeated stops.</li><li>A non-marking sole where the venue requires it.</li></ul><p>Try a few side steps in both shoes to check the fit.</p>",
    "tags": [
      "pickleball",
      "badminton",
      "court shoes"
    ]
  },
  "blog-04": {
    "title": "Why flat soles matter in the gym",
    "excerpt": "A stable base and a cushioned running shoe serve different training sessions.",
    "content": "<h2>For lifting</h2><p>A soft running midsole compresses under load. A firm, flat sole gives the foot a more stable base for lifts such as a deadlift.</p><h2>For mixed sessions</h2><p>If your workout moves from light weights to cardio, look for a trainer that balances firmness with flexibility at the forefoot.</p><h2>Check the fit</h2><p>Make sure your toes have room and your heel stays secure through the movements in your routine.</p>",
    "tags": [
      "gym",
      "lifting",
      "training"
    ]
  },
  "blog-05": {
    "title": "Caring for your sports shoes",
    "excerpt": "Simple cleaning and storage habits help a well-used pair last longer.",
    "content": "<h2>After training</h2><p>Loosen the laces and air the shoes in a shaded, ventilated spot. Remove damp socks and insoles where possible.</p><h2>Cleaning</h2><p>Brush away dry dirt first. Use a soft brush and a damp cloth, following the care instructions for the upper. Let the shoes dry at room temperature.</p><h2>Storage</h2><p>Give each pair enough space to keep its shape. A breathable bag works well for transport. Check the tread, seams and cushioning before your next session.</p>",
    "tags": [
      "care",
      "cleaning",
      "storage"
    ]
  }
};
