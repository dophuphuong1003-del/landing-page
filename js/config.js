// ============================================================
//  CONFIG.JS – Dữ liệu trang PRINTPACK
// ============================================================

const CONFIG = {
  companyName : 'DEMETER',
  slogan      : 'IN ẤN - VẬT TƯ',
  tagline     : 'IN ẤN - THIẾT KẾ',
  sub         : 'Nâng tầm sản phẩm – Chinh phục khách hàng',
  phone       : '0962510180',
  email       : 'support@demeter.vn',
  address     : 'Tầng 1, Tòa nhà International Plaza, Số 343 Phạm Ngũ Lão, Phường Bến Thành, TP. Hồ Chí Minh',
  zalo        : '0896549310',
  year        : new Date().getFullYear(),
};

const PAIN_POINTS = [

  {
    image: "public/static/vấn đề/màu sắc.png",
    h2:"Thiết kế thiếu nổi bật",
    text: "Bao bì chưa tạo được",
    text2: "dấu ấn thương hiệu"
  },

  {
    image: "public/static/vấn đề/chất liệu.png",
    h2:"Màu in sai lệnh",
    text: "Thành phẩm khác với màu",
    text2:"đã thống nhất trước đó"
  },

  {
    image: "public/static/vấn đề/hộp giấy.png",
    h2:"Khó chọn chất liệu",
    text: "Không biết loại giấy ",
    text2:"nào phù hợp sản phẩm"
  },

  {
    image: "public/static/vấn đề/số lượng.png",
    h2:"Hộp giấy chất lượng kém",
    text: "Dễ móp méo khi ",
    text2:"vận chuyển"
  },

  {
    image: "public/static/vấn đề/chậm trễ.png",
    h2:"Chi phí và tiến độ cao",
    text: "Số lượng tối thiểu lớn,",
    text2:" giao hàng chậm trễ"
  }

];
const SOLUTIONS = [
  {
    title: "THIẾT KẾ",
    items: [
      "Tư vấn định hướng bao bì theo ngành hàng",
      "Thiết kế nhận diện & mockup 3D",
      "Tối ưu layout giúp tăng nhận diện thương hiệu"
    ]
  },
  {
    title: "IN ẤN & GIA CÔNG",
    items: [
      "In màu chuẩn – kiểm tra mẫu trước sản xuất",
      "Đa dạng chất liệu & kỹ thuật gia công",
      "Theo sát tiến độ đến khi hoàn thiện thành phẩm"
    ]
  }
];


const FEATURED_PRODUCTS = [
  { 
    image: "public/static/Sản phẩm tiêu biểu/1.png",
    name: "HỘP CÀ PHÊ MUỐI",
    color: "#e8f5e9"
  },

  { 
    image: "public/static/Sản phẩm tiêu biểu/2.png",
    name: "HỘP NẤM MỐI ĐEN",
    color: "#e3f2fd"
  },

  { 
    image: "public/static/Sản phẩm tiêu biểu/3.png",
    name: "HỘP XOÀI SẤY GIÒN",
    color: "#fff8e1"
  },

  { 
    image: "public/static/Sản phẩm tiêu biểu/4.png",
    name: "HỘP RƯỢU MƠ",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/5.png",
    name: "HỘP HỒNG TREO GIÓ",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/6.png",
    name: "HỘP CÁ KHO",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/7.jpg",
    name: "HỘP TRÀ TRÁI CÂY NHIỆT ĐỚI",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/8.png",
    name: "HỘP MỰC XÀO CẦN TÂY",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/9.png",
    name: "HỘP THỨC MÓN TẾT",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/10.png",
    name: "HỘP SẦU RIÊNG TÁCH MÚI",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/11.png",
    name: "HỘP LY CÀ PHÊ",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/12.png",
    name: "HỘP TRÀ GU VIỆT",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/13.png",
    name: "HỘP KẸO MÈ XỬNG",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/14.png",
    name: "HỘP BÁNH CANH CHẢ CÁ",
    color: "#fce4ec"
  },
];

const THIETKE_CARDS = [
  {
    icon  : 'public/static/design/group_14520.png',
    title: 'Thiết kế nhận diện',
    title2: 'thương hiệu',
    desc : 'Tạo dấu ấn riêng với logo, màu sắc, font chữ và hệ thống hình ảnh đồng bộ.',
    img  : 'public/static/design/image_6.png',  
    alt  : 'Nhận diện thương hiệu',
  },
  {
    icon : 'public/static/design/group_14521.png',
    title: 'Thiết kế bao bì',
    title2: 'sản phẩm',
    desc : 'Biến sản phẩm thành trải nghiệm đẹp mắt, tinh chu và thu hút từ ánh nhìn đầu tiên.',
    img  : 'public/static/design/image_7.png',  
    alt  : 'Bao bì sản phẩm',
  },
  {
    icon : 'public/static/design/group_14522.png',
    title: 'Thiết kế website',
    title2: 'doanh nghiệp',
    desc : 'Giao diện hiện đại, dễ sử dụng, tối ưu trải nghiệm và hỗ trợ tăng chuyển đổi.',
    img  : 'public/static/design/image_8.png',   
    alt  : 'Website doanh nghiệp',
  },
];


const QUYTRINH_STEPS = [
  {
    num  : '1',
    img  : 'public/static/design/rectangle_4463.png',   // ← thay đường dẫn ảnh thật
    alt  : 'Tư vấn & định hướng',
    title: 'TƯ VẤN & ĐỊNH HƯỚNG',
    desc : 'Tiếp nhận nhu cầu, tư vấn giải pháp  ',
    desc2 : 'phù hợp với sản phẩm và',
    desc3 : 'định vị thương hiệu.',
  },
  {
    num  : '2',
    img  : 'public/static/design/rectangle_4466.png',   // ← thay đường dẫn ảnh thật
    alt  : 'Thiết kế & hoàn thiện',
    title: 'THIẾT KẾ & HOÀN THIỆN',
    desc : 'Xây dựng concept, chỉnh sửa ',
    desc2 : 'và tối ưu thiết kế trước khi ',
    desc3 : 'sản xuất.',
  },
  {
    num  : '3',
    img  : 'public/static/design/rectangle_4508.png',   // ← thay đường dẫn ảnh thật
    alt  : 'In ấn & kiểm tra',
    title: 'IN ẤN & KIỂM TRA',
    desc : 'Kiểm soát chất liệu, màu sắc ',
    desc2: 'và chất lượng thành phẩm ',
    desc3: 'trong quá trình in.',
  },
  {
    num  : '4',
    img  : 'public/static/design/rectangle_4464.png',   // ← thay đường dẫn ảnh thật
    alt  : 'Bàn giao thành phẩm',
    title: 'BÀN GIAO THÀNH PHẨM',
    desc : 'Hoàn thiện gia công ',
    desc2 : 'bàn giao đúng tiến độ ',
    desc3 : 'theo yêu cầu dự án.',
  },
];

const PROJECTS = [
  { label: 'Trái cây sấy giòn – FOODOVI',      image: 'public/static/project_2/foodovi_dmt.png' },
  { label: 'Cà phê hòa tan – UFO',             image: 'public/static/project_2/ufo_cafe_hoa_tan.jpg' },
  { label: 'Hộp thức món Tết – HUE LEGEND',    image: 'public/static/project_2/set_qua_tet.jpg' },
  { label: 'Ngũ cốc dinh dưỡng – HADALIFA',    image: 'public/static/project_2/rectangle_4487.png' },
  { label: 'Mỳ Quảng – CATHIFOOD',             image: 'public/static/project_2/rectangle_4509.png' },
  { label: 'Đặc sản Cố Đô – HUE ONE FOOD',     image: 'public/static/project_2/rectangle_4485.png' },
];



const BRANDS = ['Rosé', 'MỘC', 'NAM DƯỢC', 'hebe', 'The Organic'];

const NAV_LINKS = [

  { label: 'GIỚI THIỆU', href: './gioithieu2.html' },
  { label: 'GIẢI PHÁP', href: './index.html#tieuthuan' },
  { label: 'SẢN PHẨM', href: './index.html#boxtypes' },
  { label: 'THIẾT KẾ', href: './index.html#thietke' },
  { label: 'QUY TRÌNH', href: './index.html#quytrinh' },
  { label: 'ĐỐI TÁC', href: './index.html#partners' },
  { label: 'DỰ ÁN', href: './index.html#projects' },
  { label: 'LIÊN HỆ', href: './contact.html' },
];


const PARTNER_LOGOS = [

  {
    name: "Partner 1",
    image: "public/static/Logo đối tác/2.jpg"
  },

  {
    name: "Partner 2",
    image: "public/static/Logo đối tác/3.jpg"
  },

  {
    name: "Partner 3",
    image: "public/static/Logo đối tác/4.jpg"
  },

  {
    name: "Partner 4",
    image: "public/static/Logo đối tác/5.jpg"
  },

  {
    name: "Partner 5",
    image: "public/static/Logo đối tác/6.jpg"
  },

  {
    name: "Partner 6",
    image: "public/static/Logo đối tác/7.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/8.jpg"
  },
  {
    name: "Partner 8",
    image: "public/static/Logo đối tác/9.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/10.jpg"
  },{
    name: "Partner 7",
    image: "public/static/Logo đối tác/11.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/12.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/13.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/14.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/15.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/16.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/17.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/18.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/19.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/20.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/21.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/22.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/23.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/24.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/25.jpg"
  },{
    name: "Partner 7",
    image: "public/static/Logo đối tác/26.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/27.jpg"
  },
  {
    name: "Partner 7",
    image: "public/static/Logo đối tác/28.jpg"
  },
];
const FOOTER_DATA = {
  desc    : 'Giải pháp thiết kế và in ấn bao bì đồng bộ',
  desc2    : 'cho thương hiệu và doanh nghiệp.',

  contacts: [
    { icon: '📞', label: 'Hotline: 0962510180',   },
    { icon: '✉️', label: 'Email: support@demeter.vn',                      },
    { icon: '📍', label: 'Tầng 1, Tòa nhà International Plaza, Số 343 Phạm Ngũ Lão, Phường Bến Thành, TP. Hồ Chí Minh', },
  ],
  socials: [
    { label: 'Facebook', icon: 'fb',   href: 'https://www.facebook.com/DemeterForBusiness' },   
    { label: 'Zalo',     icon: 'zalo', href: 'https://zalo.me/4364551930274813557' },
    { label: 'Điện thoại',  icon: 'phone',   href: 'tel:0962510180' },  
  ],
};
const TICKER_DATA = [
  { text: 'Giải Pháp Bao Bì Tối Ưu', sub: 'Cho Thương Hiệu Của Bạn' },
  { text: 'Giải Pháp Bao Bì Tối Ưu', sub: 'Cho Thương Hiệu Của Bạn' },
  { text: 'Giải Pháp Bao Bì Tối Ưu', sub: 'Cho Thương Hiệu Của Bạn' },
  { text: 'Giải Pháp Bao Bì Tối Ưu', sub: 'Cho Thương Hiệu Của Bạn' },
  { text: 'Giải Pháp Bao Bì Tối Ưu', sub: 'Cho Thương Hiệu Của Bạn' },
];

const GIOITHIEU_DATA = {
  label  : 'Bao Bì Chất Lượng',
  title  : 'Thể Hiện Sự Chuyên Nghiệp Và Chỉn Chu Của Doanh Nghiệp',
  desc   : 'Bao bì được xem là "bộ mặt" của thương hiệu, là điểm chạm thị giác đầu tiên với khách hàng. Không chỉ đơn thuần là vật dụng bảo vệ sản phẩm, bao bì còn đóng vai trò quan trọng trong việc định vị và xây dựng hình ảnh doanh nghiệp.',
  img    : 'public/static/giaiphap_dmt.jpg',   // ← thay đường dẫn ảnh thật (ảnh 2 người + hộp sản phẩm)
  imgAlt : 'Đội ngũ Demeter for Business',
};
// ============================================================
//  KHÔNG CHỈ THIẾT KẾ – data
// ============================================================
const KHONGCHITHIETKE_DATA = {
  label  : 'Không Chỉ Thiết Kế',
  title  : 'Chúng Tôi Tạo Ra Thành Phẩm',
  desc   : 'DEMETER FOR BUSINESS cung cấp giải pháp bao bì toàn diện từ khâu thiết kế sáng tạo đến sản xuất thành phẩm. Cùng với đội ngũ thiết kế chuyên nghiệp, chúng tôi sử dụng hệ thống vật tư, máy in chính hãng và liên tục cập nhật các dòng máy in thế hệ mới, cam kết mang đến những thành phẩm bao bì sắc nét và hoàn hảo nhất.',
  img    : '/public/static/group_14588.png',   // ← ảnh 2 người (PNG nền trong suốt)
  imgAlt : 'Đội ngũ Demeter for Business',
  features: [
    { icon: '/public/static/design/group_14584.png', label: 'Thiết kế sáng tạo' },
    { icon: '/public/static/design/group_14585.png', label: 'Vật tư in ấn chính hãng' },
    { icon: '/public/static/design/group_14586.png', label: 'Máy in thế hệ mới' },
    { icon: '/public/static/design/group_14587.png', label: 'Thành phẩm sắc nét' },
  ],
};
// ============================================================
//  3 TIÊU CHUẨN CỐT LÕI – data
// ============================================================
const TIEUCHUAN_DATA = {
  label : '3 Tiêu Chuẩn Cốt Lõi',
  title : 'Của Bao Bì Chuyên Nghiệp',
  intro : 'Để sở hữu một mẫu bao bì chỉn chu, bắt mắt và mang lại hiệu quả thực tế, sản phẩm cần đáp ứng được 3 tiêu chuẩn cốt lõi sau:',
  items : [
    {
      num  : '01',
      title: 'THIẾT KẾ CÓ CHIẾN LƯỢC',
      icon : '/public/static/tieuchuan/group_14552.png',        // ← icon thiết kế
      desc : 'Một bản thiết kế thành công phải kết hợp hài hòa giữa tính thẩm mỹ và thông điệp thương hiệu. Bố cục, màu sắc và cấu trúc bao bì cần được tính toán kỹ lưỡng để thu hút đúng tệp khách hàng mục tiêu và tạo sự khác biệt, nổi bật trên quầy kệ.',
    },
    {
      num  : '02',
      title: 'CHẤT LIỆU CÓ CHỌN LỌC',
      icon : '/public/static/tieuchuan/group_14539.png',        // ← icon chất liệu
      desc : 'Bản thiết kế chỉ thực sự tỏa sáng khi được hiện thực hóa trên chất liệu tương xứng. Việc sử dụng chất liệu kém sẽ làm sai lệch màu sắc và làm giảm trải nghiệm cảm nhận của người tiêu dùng. Lựa chọn chất liệu phù hợp, chất lượng cao là nền tảng bắt buộc.',
    },
    {
      num  : '03',
      title: 'IN ẤN CÓ CÔNG NGHỆ',
      icon : '/public/static/tieuchuan/group_14551.png',        // ← icon in ấn
      desc : 'Hệ thống máy in quyết định trực tiếp đến độ sắc nét của thành phẩm. Máy in thế hệ mới không chỉ tái tạo màu sắc chuẩn xác, chân thực so với bản và thiết kế mà còn tối ưu hóa tốc độ sản xuất, giúp doanh nghiệp tiết kiệm thời gian.',
    },
  ],
};
const HERO2_DATA = {
  titleLine1: 'Giải Pháp Bao Bì Tối Ưu',
  titleLine2: 'Cho Thương Hiệu',
  logoSrc   : '/public/static/footer/group_14523.png',                           // ← 'static/logo_DMT.png'
  badges    : ['THIẾT KẾ SÁNG TẠO', 'IN ẤN CHUYÊN NGHIỆP'],
  img       : '/public/static/group_14588.png',       // ← PNG nền trong suốt (ảnh 2 người)
  imgAlt    : 'Đội ngũ Demeter for Business',
  desc      : 'DEMETER FOR BUSINESS là đơn vị chuyên cung cấp giải pháp tổng thể trong lĩnh vực thiết kế, in ấn và hoàn thiện bao bì. Với hệ sinh thái dịch vụ khép kín, chúng tôi giúp doanh nghiệp tối ưu thời gian, chi phí và nâng cao trải nghiệm sản phẩm trên thị trường.\n\nTừ ý tưởng thiết kế, lựa chọn chất liệu, in ấn đến hoàn thiện thành phẩm, DEMETER FOR BUSINESS mang đến một quy trình liên mạch, giúp khách hàng dễ dàng sở hữu những sản phẩm bao bì phù hợp với mục tiêu kinh doanh, ngành hàng và định vị thương hiệu.\n\nVới định hướng phát triển bền vững, chúng tôi luôn theo đuổi giải pháp không chỉ đẹp về hình thức mà còn tối ưu về công năng, chi phí và trải nghiệm sử dụng.',
};
// ============================================================
//  SỨ MỆNH & TẦM NHÌN
// ============================================================
const SUMENH_DATA = [
  {
    icon : 'public/static/sumenh_tamnhin/18370444_1.png',
    title: 'Sứ Mệnh',
    desc : 'Đồng hành và hỗ trợ các nhà sản xuất, doanh nghiệp, giúp sản phẩm vươn tầm và chinh phục người tiêu dùng.',
  },
  {
    icon : 'public/static/sumenh_tamnhin/3442495_1.png',
    title: 'Tầm Nhìn',
    desc : 'Trở thành nhà cung cấp giải pháp bao bì toàn diện hàng đầu, được tin tưởng lựa chọn bởi các thương hiệu lớn trong và ngoài nước.',
  },
];
 
// ============================================================
//  LỢI ÍCH KHI ĐỒNG HÀNH
// ============================================================
const LOIICH_DATA = {
  title   : 'Lợi Ích Khi Đồng Hành Cùng Chúng Tôi',
  bigText1: '',
  bigText2: '',
  bigText3: '',
  centerIcon: 'public/static/sumenh_tamnhin/group_14577.png',   // ← icon lớn ở giữa (PNG nền trong suốt)
  items: [
    { num: '01', title: 'Giải Pháp Khép Kín',      desc: 'Từ thiết kế đến in ấn thành phẩm, chúng tôi đồng hành toàn bộ quy trình, giúp doanh nghiệp tiết kiệm thời gian và chi phí phối hợp.' },
    { num: '02', title: 'Tối Ưu Chi Phí',           desc: 'Hệ thống máy in hiện đại, nguồn nguyên liệu ổn định giúp tối ưu chi phí sản xuất mà vẫn đảm bảo chất lượng thành phẩm cao nhất.' },
    { num: '03', title: 'Nâng Tầm Thương Hiệu',     desc: 'Bao bì chỉn chu, sắc nét là công cụ marketing mạnh mẽ. DEMETER giúp thương hiệu gây ấn tượng ngay từ lần tiếp xúc đầu tiên với khách hàng.' },
    { num: '04', title: 'Hướng Đến Bền Vững',       desc: 'Chúng tôi ưu tiên các giải pháp vật liệu thân thiện môi trường, đáp ứng xu hướng tiêu dùng xanh và trách nhiệm xã hội của doanh nghiệp.' },
  ],
};
 
// ============================================================
//  KHÁM PHÁ GIẢI PHÁP – Accordion
// ============================================================
const KHAMPHA_DATA = {
  label : 'Khám Phá Các Giải Pháp Tại',
  title : 'DEMETER FOR BUSINESS',
  img    : 'YOUR_GIOITHIEU_IMAGE.jpg',
  imgAlt : 'Đội ngũ Demeter for Business',
  items : [
    { title: 'Thiết Kế Bao Bì Sáng Tạo',      content: 'Định hướng thiết kế theo ngành hàng, tối ưu nhận diện thương hiệu, giúp sản phẩm nổi bật và dễ ghi nhớ.' },
    { title: 'In Ấn Bao Bì Chất Lượng Cao',   content: 'Ứng dụng công nghệ in Offset, Kỹ thuật số, Flexo, UV, Nhũ kim... đáp ứng đa dạng nhu cầu từ đơn hàng nhỏ đến số lượng lớn.' },
    { title: 'Giá Công Bao Bì Cao Cấp',        content: 'Cán màng, ép kim, dập nổi, phủ UV, chống thấm... giúp sản phẩm tăng tính thẩm mỹ và giá trị cảm nhận.' },
    { title: 'Tư Vấn Chiến Lược Bao Bì Tối Ưu', content: 'Đề xuất giải pháp bền vững, tiết kiệm chi phí, phù hợp thị trường và định hướng phát triển của doanh nghiệp.' },
  ],
};
const LIENHE2_DATA = {
  titleLine1: 'Hiện Thực Hoá',
  titleLine2: 'Thương Hiệu Của Bạn Cùng',
  titleLine3: 'DEMETER FOR BUSINESS',
  logoSrc   : '/public/static/footer/group_14523.png',                          // ← đường dẫn logo tròn
  badges    : ['THIẾT KẾ SÁNG TẠO', 'IN ẤN CHUYÊN NGHIỆP'],
  sub       : 'Trao Đổi Thêm Về Ý Tưởng Của Bạn Và Bắt Đầu Tạo Ra Thương Hiệu Riêng Cho Doanh Nghiệp',
  btnText   : 'BRIEF FORM',
  btnHref   : 'https://forms.gle/1gFcuP7u9isDf3qEA',
  contacts  : [
    { icon: 'phone', label: 'Hotline:',  value: '(+84) 903 344 277' },
    { icon: 'email', label: 'Email:',    value: 'support@demeter.vn' },
    { icon: 'addr',  label: 'Địa chỉ:', value: 'Tầng 1, Tòa nhà International Plaza, Số 343 Phạm Ngũ Lão, Phường Phạm Ngũ Lão, Quận 1, Thành phố Hồ Chí Minh, Việt Nam' },
  ],
};