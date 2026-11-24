import { sampleProductEnglish } from './i18n.js';

// Danh mục mẫu dùng chung cho bản xem thử và trang nạp dữ liệu.
export const products = [
  // -------- BÓNG ĐÁ --------
  {
    id: 'football-01',
    name: 'Pro Match Football',
    category: 'football',
    price: 1290000,
    originalPrice: 1890000,
    discount: 32,
    featured: true,
    inStock: true,
    sizes: ['39','40','41','42','43','44'],
    shortDescription: 'Giày bóng đá chính hãng, đế đinh FG/AG linh hoạt cho sân phong trào. Phù hợp sân cỏ nhân tạo lẫn sân đất.',
    description: 'Pro Match Football là dòng giày được thiết kế dành riêng cho người chơi bóng đá phong trào. Upper tổng hợp bền bỉ, lớp lót kháng khuẩn thoáng khí, đế đinh conical linh hoạt giúp tăng lực bám trên mọi mặt sân.\n\nThiết kế ôm chân tự nhiên, không cứng, không gây khó chịu dù đá cả buổi. Màu sắc năng động phù hợp với trang phục thể thao đa dạng.',
    features: [
      'Đế đinh FG/AG dùng được đa sân',
      'Upper tổng hợp nhẹ, bền bỉ',
      'Lót giày kháng khuẩn, thoáng khí',
      'Trọng lượng chỉ 280g/chiếc',
      'Bảo hành 6 tháng lỗi nhà sản xuất'
    ],
    image: 'https://placehold.co/600x600/0B1F4B/C6F432?text=Pro+Match',
    images: [
      'https://placehold.co/600x600/0B1F4B/C6F432?text=Pro+Match',
      'https://placehold.co/600x600/1E5EFF/FFFFFF?text=Side+View',
      'https://placehold.co/600x600/162E6A/C6F432?text=Sole+View'
    ],
    views: 0,
    likes: 0,
    createdAt: new Date()
  },
  {
    id: 'football-02',
    name: 'Street Kick Turf',
    category: 'football',
    price: 790000,
    originalPrice: 990000,
    discount: 20,
    featured: false,
    inStock: true,
    sizes: ['38','39','40','41','42','43'],
    shortDescription: 'Giày đá bóng đế đinh TF (turf) chuyên sân cỏ nhân tạo ngắn. Êm chân, bám tốt, giá tốt cho học sinh – sinh viên.',
    description: 'Street Kick Turf phù hợp với sân cỏ nhân tạo ngắn (sân mini) – loại sân phổ biến nhất tại các khu đô thị. Đế cao su nhiều hạt nhỏ phân bổ lực đều, giảm chấn thương đầu gối.\n\nMàu trắng-đen cổ điển kết hợp đường chỉ navy tạo cảm giác chuyên nghiệp trong tầm giá bình dân.',
    features: [
      'Đế TF (Turf) chuyên sân nhân tạo ngắn',
      'Cao su ngoài bền, kháng mài mòn',
      'Lưỡi gà cao ôm cổ chân',
      'Phù hợp đá bộ và học thể dục'
    ],
    image: 'https://placehold.co/600x600/FFFFFF/0B1F4B?text=Street+Kick',
    images: ['https://placehold.co/600x600/FFFFFF/0B1F4B?text=Street+Kick'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'football-03',
    name: 'Sala Indoor Flash',
    category: 'football',
    price: 650000,
    originalPrice: null,
    discount: 0,
    featured: false,
    inStock: true,
    sizes: ['38','39','40','41','42'],
    shortDescription: 'Giày futsal đế phẳng IC, chuyên sân trong nhà. Độ bám cao, nhẹ, kiểm soát bóng tốt.',
    description: 'Sala Indoor Flash được thiết kế cho sân futsal (trong nhà). Đế IC (Indoor Court) không để lại vệt trên sàn gỗ hoặc sàn nhựa. Upper da tổng hợp mỏng tạo cảm giác chạm bóng sắc nét.\n\nLý tưởng cho các giải đấu futsal nội bộ, phong trào văn phòng.',
    features: [
      'Đế IC phẳng, không để lại vệt sàn',
      'Upper da tổng hợp mỏng, cảm bóng tốt',
      'Trọng lượng cực nhẹ 220g/chiếc',
      'Màu cam-đen nổi bật'
    ],
    image: 'https://placehold.co/600x600/FF6B2B/FFFFFF?text=Sala+Flash',
    images: ['https://placehold.co/600x600/FF6B2B/FFFFFF?text=Sala+Flash'],
    views: 0, likes: 0, createdAt: new Date()
  },

  // -------- CHẠY BỘ --------
  {
    id: 'running-01',
    name: 'AeroRun Lite 2.0',
    category: 'running',
    price: 1490000,
    originalPrice: 1990000,
    discount: 25,
    featured: true,
    inStock: true,
    sizes: ['38','39','40','41','42','43','44'],
    shortDescription: 'Giày chạy bộ nhẹ, đế foam giảm chấn tốt. Lý tưởng cho chạy bộ buổi sáng 5-10km mỗi ngày.',
    description: 'AeroRun Lite 2.0 là lựa chọn hoàn hảo cho runner phong trào chạy từ 5-15km/buổi. Đế foam EVA hai lớp giảm chấn hiệu quả, bảo vệ khớp gối và mắt cá. Upper lưới thoáng khí giữ bàn chân khô ráo cả buổi chạy.',
    features: [
      'Đế foam EVA 2 lớp giảm chấn',
      'Upper lưới 3D thoáng khí',
      'Lót giày chống trượt, dễ tháo lắp',
      'Phản quang an toàn khi chạy tối',
      'Chứng nhận phù hợp cho bề mặt đường nhựa'
    ],
    image: 'https://placehold.co/600x600/1E5EFF/FFFFFF?text=AeroRun+2.0',
    images: ['https://placehold.co/600x600/1E5EFF/FFFFFF?text=AeroRun+2.0'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'running-02',
    name: 'TrailMax Pro',
    category: 'running',
    price: 1850000,
    originalPrice: 2200000,
    discount: 16,
    featured: false,
    inStock: true,
    sizes: ['39','40','41','42','43','44','45'],
    shortDescription: 'Giày chạy trail địa hình, đế bám cứng, bảo vệ bàn chân trên đường đất gồ ghề.',
    description: 'TrailMax Pro dành cho runner thích chạy địa hình: đường đất, đường rừng, leo núi nhẹ. Đế ngoài cao su Vibram bám địa hình xuất sắc. Mũi giày được gia cố chống va đập.',
    features: [
      'Đế Vibram bám địa hình',
      'Mũi giày TPU gia cố chống đá',
      'Lớp lót chống thấm (Water Resistant)',
      'Dây buộc khóa nhanh Lace Lock'
    ],
    image: 'https://placehold.co/600x600/2d6a4f/FFFFFF?text=TrailMax+Pro',
    images: ['https://placehold.co/600x600/2d6a4f/FFFFFF?text=TrailMax+Pro'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'running-03',
    name: 'SpeedUp 5K',
    category: 'running',
    price: 890000,
    originalPrice: null,
    discount: 0,
    featured: false,
    inStock: true,
    sizes: ['38','39','40','41','42'],
    shortDescription: 'Giày chạy bộ entry-level, giá tốt cho người mới bắt đầu. Đệm vừa, nhẹ nhàng.',
    description: 'SpeedUp 5K là điểm khởi đầu lý tưởng cho người mới bắt đầu hành trình chạy bộ. Giá thân thiện, thiết kế đơn giản nhưng đủ chức năng cho các buổi tập nhẹ đến vừa.',
    features: [
      'Đế EVA đơn lớp êm ái',
      'Upper lưới thoáng nhẹ',
      'Màu trắng-xanh năng động',
      'Dễ phối đồ thường ngày'
    ],
    image: 'https://placehold.co/600x600/C6F432/0B1F4B?text=SpeedUp+5K',
    images: ['https://placehold.co/600x600/C6F432/0B1F4B?text=SpeedUp+5K'],
    views: 0, likes: 0, createdAt: new Date()
  },

  // -------- PICKLEBALL / CẦU LÔNG --------
  {
    id: 'badminton-01',
    name: 'CourtFly Pickle X1',
    category: 'badminton',
    price: 1150000,
    originalPrice: 1450000,
    discount: 21,
    featured: true,
    inStock: true,
    sizes: ['38','39','40','41','42','43'],
    shortDescription: 'Giày pickleball/cầu lông chuyên dụng, đế non-marking, bám sân tốt, bẻ ngang linh hoạt.',
    description: 'CourtFly Pickle X1 được phát triển cho cả pickleball và cầu lông – hai môn đang bùng nổ tại Việt Nam. Đế non-marking (không để lại vệt sàn), lớp cushion bên hông chống lật cổ chân trong các tình huống bẻ gấp.',
    features: [
      'Đế non-marking bảo vệ sàn thi đấu',
      'Side cushion hỗ trợ bẻ ngang',
      'Midsole Gel giảm chấn hiệu quả',
      'Phù hợp cả pickleball lẫn cầu lông'
    ],
    image: 'https://placehold.co/600x600/533483/FFFFFF?text=CourtFly+X1',
    images: ['https://placehold.co/600x600/533483/FFFFFF?text=CourtFly+X1'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'badminton-02',
    name: 'Shuttle Dash V2',
    category: 'badminton',
    price: 850000,
    originalPrice: 1100000,
    discount: 23,
    featured: false,
    inStock: true,
    sizes: ['38','39','40','41','42'],
    shortDescription: 'Giày cầu lông nhẹ, đế chống trơn trượt, thiết kế ôm chân. Tốt cho đơn lẫn đôi.',
    description: 'Shuttle Dash V2 kế thừa thiết kế của thế hệ trước với nhiều cải tiến: đế bám tốt hơn, trọng lượng nhẹ hơn 15%, và hệ thống thông khí side vent mới giúp bàn chân thoáng mát hơn.',
    features: [
      'Nhẹ hơn thế hệ trước 15%',
      'Hệ thống side vent thoáng khí',
      'Đế cao su bám sân tốt',
      'Dây buộc bền, không giãn'
    ],
    image: 'https://placehold.co/600x600/0f3460/FFFFFF?text=Shuttle+Dash',
    images: ['https://placehold.co/600x600/0f3460/FFFFFF?text=Shuttle+Dash'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'badminton-03',
    name: 'PicklePro Court',
    category: 'badminton',
    price: 1390000,
    originalPrice: null,
    discount: 0,
    featured: false,
    inStock: true,
    sizes: ['39','40','41','42','43','44'],
    shortDescription: 'Giày pickleball chuyên biệt, hỗ trợ bước lateral (bẻ ngang), cushion dày, thiết kế hiện đại.',
    description: 'PicklePro Court là mẫu giày được tối ưu hóa riêng cho pickleball – môn thể thao đòi hỏi rất nhiều di chuyển ngang. Đế ngoài hình xương cá bám sàn tối đa trong mọi hướng di chuyển.',
    features: [
      'Đế xương cá tối ưu cho di chuyển ngang',
      'Reinforced toe cap bảo vệ ngón',
      'Foam cushion 3cm tại gót',
      'Thiết kế hiện đại, nhiều màu tùy chọn'
    ],
    image: 'https://placehold.co/600x600/1b4332/FFFFFF?text=PicklePro',
    images: ['https://placehold.co/600x600/1b4332/FFFFFF?text=PicklePro'],
    views: 0, likes: 0, createdAt: new Date()
  },

  // -------- GYM / TẬP LUYỆN --------
  {
    id: 'gym-01',
    name: 'Iron Lift Flat',
    category: 'gym',
    price: 980000,
    originalPrice: 1250000,
    discount: 22,
    featured: true,
    inStock: true,
    sizes: ['38','39','40','41','42','43','44','45'],
    shortDescription: 'Giày gym đế phẳng cứng, lý tưởng cho squat, deadlift. Giúp truyền lực tối đa xuống sàn.',
    description: 'Iron Lift Flat được thiết kế riêng cho các bài tập nặng như squat và deadlift. Đế phẳng cứng (zero drop) giúp toàn bộ bàn chân tiếp xúc sàn, truyền lực tối đa, giảm nguy cơ chấn thương.',
    features: [
      'Đế phẳng zero-drop 4mm',
      'Độ cứng đế 9/10 – không lún',
      'Dây buộc + khóa velcro kép cố định',
      'Mũi giày rộng thoải mái cho ngón',
      'Phù hợp Powerlifting và CrossFit'
    ],
    image: 'https://placehold.co/600x600/3d0000/FFFFFF?text=Iron+Lift',
    images: ['https://placehold.co/600x600/3d0000/FFFFFF?text=Iron+Lift'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'gym-02',
    name: 'FlexTrain All-Day',
    category: 'gym',
    price: 750000,
    originalPrice: 950000,
    discount: 21,
    featured: false,
    inStock: true,
    sizes: ['38','39','40','41','42','43'],
    shortDescription: 'Giày tập gym đa năng: cardio, tạ nhẹ, yoga, Zumba. Dùng được cả ngày ngoài phòng gym.',
    description: 'FlexTrain All-Day là đôi giày "làm được tất cả" trong phòng gym và ngoài đường. Đế vừa đủ cứng cho tạ nhẹ, vừa đủ mềm cho cardio. Thiết kế sporty phù hợp mặc đi làm, đi chơi.',
    features: [
      'Đa năng: cardio, tạ nhẹ, yoga, Zumba',
      'Có thể đi làm, đi chơi hàng ngày',
      'Upper da lộn tổng hợp dễ vệ sinh',
      'Chống mồ hôi, kháng khuẩn'
    ],
    image: 'https://placehold.co/600x600/6b1a1a/FFFFFF?text=FlexTrain',
    images: ['https://placehold.co/600x600/6b1a1a/FFFFFF?text=FlexTrain'],
    views: 0, likes: 0, createdAt: new Date()
  },
  {
    id: 'gym-03',
    name: 'CrossFit Beast X3',
    category: 'gym',
    price: 2190000,
    originalPrice: 2690000,
    discount: 19,
    featured: false,
    inStock: true,
    sizes: ['39','40','41','42','43','44','45'],
    shortDescription: 'Giày CrossFit cao cấp: đế ổn định cho squat, linh hoạt cho WOD, bền bỉ cho rope climb.',
    description: 'CrossFit Beast X3 là sản phẩm cao cấp nhất trong dòng Gym của Sport Zone. Thiết kế độc quyền Stability Heel Platform giúp ổn định tối đa trong squat nặng, trong khi forefoot linh hoạt cho các động tác box jump, burpee và rope climb.',
    features: [
      'Stability Heel Platform 10mm',
      'Forefoot linh hoạt, hỗ trợ jump',
      'Rope Guard bảo vệ mặt trong',
      'Outsole cao su phức hợp siêu bền',
      'Phù hợp thi đấu CrossFit chính thức'
    ],
    image: 'https://placehold.co/600x600/0B1F4B/C6F432?text=Beast+X3',
    images: ['https://placehold.co/600x600/0B1F4B/C6F432?text=Beast+X3'],
    views: 0, likes: 0, createdAt: new Date()
  }
].map(product => ({ ...product, ...sampleProductEnglish[product.id] }));
