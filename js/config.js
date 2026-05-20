// ============================================================
//  CONFIG.JS – Dữ liệu trang PRINTPACK
// ============================================================

const CONFIG = {
  companyName : 'DEMETER',
  slogan      : 'IN ẤN - VẬT TƯ',
  tagline     : 'IN HỘP GIẤY MỀM THEO YÊU CẦU',
  sub         : 'Nâng tầm sản phẩm – Chinh phục khách hàng',
  phone       : '0988 123 456',
  email       : 'info@printpack.vn',
  address     : '284/4 Phường Phú Thạnh, Quận Tân Phú, TP.HCM',
  zalo        : '0988123456',
  year        : new Date().getFullYear(),
};

const PAIN_POINTS = [

  {
    image: "public/static/vấn đề/màu sắc.png",
    h2:"Thiết kế thiếu nỗi bật",
    text: "Bao bì chưa tạo được dấu ấn thương hiệu"
  },

  {
    image: "public/static/vấn đề/chất liệu.png",
    h2:"Màu in sai lệnh",
    text: "Thành phẩm khác với file thiết kế"
  },

  {
    image: "public/static/vấn đề/hộp giấy.png",
    h2:"Khó chọn chất liệu",
    text: "Không biết loại giấy nào phù hợp sản phẩm"
  },

  {
    image: "public/static/vấn đề/số lượng.png",
    h2:"Hộp giấy chất lượng kém",
    text: "Dễ móp méo khi vận chuyển"
  },

  {
    image: "public/static/vấn đề/chậm trễ.png",
    h2:"Chi phí và tiến độ cao",
    text: "Số lượng tối thiểu lớn, giao hàng chậm trễ"
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
    name: "Hộp Cafe muối hòa tan UFO",
    color: "#e8f5e9"
  },

  { 
    image: "public/static/Sản phẩm tiêu biểu/2.png",
    name: "HộpCafe muối hòa tan UFO",
    color: "#e3f2fd"
  },

  { 
    image: "public/static/Sản phẩm tiêu biểu/3.png",
    name: "Hộp hồng treo gió",
    color: "#fff8e1"
  },

  { 
    image: "public/static/Sản phẩm tiêu biểu/4.png",
    name: "Hộp cá kèo kho rau răm",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/5.png",
    name: "Hộp vua sầu riêng",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/6.png",
    name: "Hộp mực xào cần tây",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/7.png",
    name: "Hộp trà gu việc",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/8.png",
    name: "Hộp bánh canh chả cá bọc trứng cúc",
    color: "#fce4ec"
  },
  { 
    image: "public/static/Sản phẩm tiêu biểu/10.jpg",
    name: "Hộp trà trái cây nhiệt đới",
    color: "#fce4ec"
  },
];

const THIETKE_CARDS = [
  {
    icon  : 'public/static/design/group_14520.png',
    title: 'Thiết kế nhận diện thương hiệu',
    desc : 'Tạo dấu ấn riêng với logo, màu sắc, font chữ và hệ thống hình ảnh đồng bộ.',
    img  : 'public/static/design/image_6.png',  
    alt  : 'Nhận diện thương hiệu',
  },
  {
    icon : 'public/static/design/group_14521.png',
    title: 'Thiết kế bao bì sản phẩm',
    desc : 'Biến sản phẩm thành trải nghiệm đẹp mắt, tinh chu và thu hút từ ánh nhìn đầu tiên.',
    img  : 'public/static/design/image_7.png',  
    alt  : 'Bao bì sản phẩm',
  },
  {
    icon : 'public/static/design/group_14522.png',
    title: 'Thiết kế website doanh nghiệp',
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
    desc : 'Tiếp nhận nhu cầu, tư vấn giải pháp phù hợp với sản phẩm và định vị thương hiệu.',
  },
  {
    num  : '2',
    img  : 'public/static/design/rectangle_4466.png',   // ← thay đường dẫn ảnh thật
    alt  : 'Thiết kế & hoàn thiện',
    title: 'THIẾT KẾ & HOÀN THIỆN',
    desc : 'Xây dựng concept, chỉnh sửa và tối ưu thiết kế trước khi sản xuất.',
  },
  {
    num  : '3',
    img  : 'public/static/design/rectangle_4508.png',   // ← thay đường dẫn ảnh thật
    alt  : 'In ấn & kiểm tra',
    title: 'IN ẤN & KIỂM TRA',
    desc : 'Kiểm soát chất liệu, màu sắc và chất lượng thành phẩm trong quá trình in.',
  },
  {
    num  : '4',
    img  : 'public/static/design/rectangle_4464.png',   // ← thay đường dẫn ảnh thật
    alt  : 'Bàn giao thành phẩm',
    title: 'BÀN GIAO THÀNH PHẨM',
    desc : 'Hoàn thiện gia công và bàn giao đúng tiến độ theo yêu cầu dự án.',
  },
];

const PROJECTS = [
  { label: 'Trái cây sấy giòn – FOODOVI',      image: 'public/static/project_2/foodovi_dmt.png' },
  { label: 'Cà phê hòa tan – UFO',             image: 'public/static/project_2/ufo_cafe_hoa_tan.jpg' },
  { label: 'Hộp thức món Tết – HUE LEGEND',    image: 'public/static/project_2/set_qua_tet.jpg' },
  { label: 'Ngũ cốc dinh dưỡng – HADALIFA',    image: 'public/static/project_2/rectangle_4485.png' },
  { label: 'Mỳ Quảng – CATHIFOOD',             image: 'public/static/project_2/rectangle_4487.png' },
  { label: 'Đặc sản Cố Đô – HUE ONE FOOD',     image: 'public/static/project_2/rectangle_4509.png' },
];



const BRANDS = ['Rosé', 'MỘC', 'NAM DƯỢC', 'hebe', 'The Organic'];

const NAV_LINKS = [
  { label: 'GIẢI PHÁP',           href: '#solutions' },
  { label: 'SẢN PHẨM',            href: '#boxtypes' },
  { label: 'THIẾT KẾ',            href: '#thietke' },
  { label: 'QUY TRÌNH',             href: '#quytrinh' },
  { label: 'ĐỐI TÁC',           href: '#partners' },
  { label: 'DỰ ÁN',               href: '#projects' },
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
  desc    : 'Giải pháp thiết kế và in ấn bao bì đồng bộ cho thương hiệu và doanh nghiệp.',
  contacts: [
    { icon: '📞', label: 'Hotline: 0896 549 310 – 0962 510 180 (In ấn)',  href: 'tel:0896549310' },
    { icon: '📞', label: 'Hotline: 033 387 7745 (Thiết kế)',               href: 'tel:0333877745' },
    { icon: '✉️', label: 'Email: support@demeter.vn',                      href: 'mailto:support@demeter.vn' },
    { icon: '📍', label: 'Tầng 1, Tòa nhà International Plaza, Số 343 Phạm Ngũ Lão, Phường Bến Thành, TP. Hồ Chí Minh', href: '#' },
  ],
  socials: [
    { label: 'Facebook', icon: 'fb',   href: 'https://www.facebook.com/DemeterForBusiness' },   // ← thay href thật
    { label: 'Zalo',     icon: 'zalo', href: 'https://zalo.me/0896549310' },
    { label: 'Điện thoại',  icon: '📞',   href: '0896 549 310' },   // ← thay href thật
  ],
};

