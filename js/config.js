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
    image: "/static/vấn đề/màu sắc.png",
    text: "Màu in không đúng như file thiết kế"
  },

  {
    image: "/static/vấn đề/chất liệu.png",
    text: "Không biết chọn chất liệu phù hợp"
  },

  {
    image: "/static/vấn đề/hộp giấy.png",
    text: "Hộp giấy dễ hư, không chắc chắn"
  },

  {
    image: "/static/vấn đề/số lượng.png",
    text: "Số lượng tối thiểu quá cao"
  },

  {
    image: "/static/vấn đề/chậm trễ.png",
    text: "Giao hàng chậm, ảnh hưởng kế hoạch"
  }

];
const SOLUTIONS = [
  'Tư vấn giải pháp bao bì phù hợp ngân sách và định vị thương hiệu',
  'Hỗ trợ thiết kế & dựng 3D miễn phí',
  'In mẫu chuẩn – kiểm màu trước khi sản xuất',
  'Đa dạng chất liệu, gia công cao cấp',
  'Theo sát đơn hàng từ file đến thành phẩm',
  'Giao hàng đúng hẹn – hỗ trợ sau bán hàng',
];

const BOX_TYPES = [
  { icon: '💄', alt: "Hộp Mỹ Phẩm", label: 'Hộp Mỹ Phẩm',   color: '#fce4f0' },
  { icon: '🍵', label: 'Hộp Thực Phẩm', color: '#e8f5e9' },
  { icon: '🎁', label: 'Hộp Quà Tặng',  color: '#e3f2fd' },
  { icon: '💊', label: 'Hộp Dược Phẩm', color: '#fff8e1' },
  { icon: '🛍️', label: 'Hộp FMCG',      color: '#fce4ec' },
  { icon: '🏪', label: 'Hộp Retail',    color: '#f3e5f5' },
];
const FEATURED_PRODUCTS = [
  { 
    image: "/static/Sản phẩm tiêu biểu/1.png",
    name: "Hộp Cafe muối hòa tan UFO",
    color: "#e8f5e9"
  },

  { 
    image: "/static/Sản phẩm tiêu biểu/2.png",
    name: "HộpCafe muối hòa tan UFO",
    color: "#e3f2fd"
  },

  { 
    image: "/static/Sản phẩm tiêu biểu/3.png",
    name: "Hộp hồng treo gió",
    color: "#fff8e1"
  },

  { 
    image: "/static/Sản phẩm tiêu biểu/4.png",
    name: "Hộp cá kèo kho rau răm",
    color: "#fce4ec"
  },
  { 
    image: "/static/Sản phẩm tiêu biểu/5.png",
    name: "Hộp vua sầu riêng",
    color: "#fce4ec"
  },
  { 
    image: "/static/Sản phẩm tiêu biểu/6.png",
    name: "Hộp mực xào cần tây",
    color: "#fce4ec"
  },
  { 
    image: "/static/Sản phẩm tiêu biểu/7.png",
    name: "Hộp trà gu việc",
    color: "#fce4ec"
  },
  { 
    image: "/static/Sản phẩm tiêu biểu/8.png",
    name: "Hộp bánh canh chả cá bọc trứng cúc",
    color: "#fce4ec"
  },
  { 
    image: "/static/Sản phẩm tiêu biểu/10.jpg",
    name: "Hộp trà trái cây nhiệt đới",
    color: "#fce4ec"
  },
];

const MATERIALS = [
  { 
    image: "/static/giấy/Giấy duplex.jpg",
    name: "Giấy Duplex",
    color: "#fce4f0"
  },

  { 
    image: "/static/giấy/Giấy ivory.jpg",
    name: "Giấy Ivory",
    color: "#e8f5e9"
  },

  { 
    image: "/static/giấy/Giấy kraft nâu.jpg",
    name: "Giấy Kraft Nâu",
    color: "#e3f2fd"
  },

  { 
    image: "/static/giấy/Giấy kraft trắng.jpg",
    name: "Giấy Kraft Trắng",
    color: "#fff8e1"
  },

  { 
    image: "/static/giấy/Giấy mĩ thuật.jpg",
    name: "Giấy Mĩ Thuật",
    color: "#fce4ec"
  },
];


const FINISHING = [
  { icon: '✨', 
    name: 'Ép Kim',
    images: ["../../static/Gia công sau in/ÉP KIM/ép kim.jpg"] },

  { icon: '🔷', 
    name: 'Dập Nổi',
    images: ["../../static/Gia công sau in/DẬP NỔI - DẬP CHÌM/Dập nổi dập chìm.jpg"] },

  { icon: '🔆', 
    name: 'UV Định Hình',
    images: ["/static/Gia công sau in/UV ĐỊNH HÌNH/uv định hình 1.jpg",
            "/static/Gia công sau in/UV ĐỊNH HÌNH/UV định hình 2.jpg",
            "/static/Gia công sau in/UV ĐỊNH HÌNH/UV định hình 3.jpg",
            "/static/Gia công sau in/UV ĐỊNH HÌNH/UV định hình.jpg"] },

  { icon: '🌟', 
    name: 'Cán màng',
    images: ["/static/Gia công sau in/CÁN MÀNG/cán màng 1.jpg",
            "/static/Gia công sau in/CÁN MÀNG/cán màng 2.jpg",
            "/static/Gia công sau in/CÁN MÀNG/cán màng 3.jpg"] },

  { icon: '✂️', 
    name: 'Bế Hình',
    images: ["/static/Gia công sau in/BẾ THEO HÌNH DẠNG/bế thành phẩm theo hình dạng.jpg",
            "/static/Gia công sau in/BẾ THEO HÌNH DẠNG/bế.jpg"]
},
];

const PROCESS_STEPS = [

  {
    num: '1',
    icon: '🧾',
    title: 'Nhận yêu cầu'
  },

  {
    num: '2',
    icon: '🤝',
    title: 'Tư vấn & báo giá'
  },

  {
    num: '3',
    icon: '🖥️',
    title: 'Duyệt file thiết kế'
  },

  {
    num: '4',
    icon: '🏭',
    title: 'Sản xuất'
  },

  {
    num: '5',
    icon: '📦',
    title: 'Kiểm tra & giao hàng'
  },

];

const PROJECTS = [
  { 
    image: "/static/project/Cà phê hòa tan UFO.jpg",
    name: "Cà phê hòa tan UFO",
    color: "#fce4f0"
  },

  { 
    image: "/static/project/Foodovi.png",
    name: "Foodovi",
    color: "#e8f5e9"
  },

  { 
    image: "/static/project/Hộp thức món Tết.jpg",
    name: "Hộp thức món Tết",
    color: "#e3f2fd"
  },
];

const TESTIMONIALS = [
  {
    text  : 'Printpack hỗ trợ rất nhiệt tình từ khâu tư vấn đến khi nhận hàng. Màu in đẹp, hộp chắc chắn, giao đúng tiến độ. Rất hài lòng!',
    name  : 'Chị Hương',
    role  : 'Founder Rosé Cosmetics',
    rating: 5,
  },
];

const BRANDS = ['Rosé', 'MỘC', 'NAM DƯỢC', 'hebe', 'The Organic'];

const NAV_LINKS = [
  { label: 'Trang Chủ',           href: '#hero' },
  { label: 'Giới Thiệu',          href: '#solutions' },
  { label: 'Sản Phẩm',            href: '#boxtypes' },
  { label: 'Chất Liệu - Gia Công',href: '#materials' },
  { label: 'Đối tác',             href: '#partners' },
  { label: 'Quy Trình',           href: '#process' },
  { label: 'Dự Án',               href: '#projects' },
  { label: 'Liên Hệ',             href: '#contact' },
];

const FOOTER_MENU = [
  'Giới thiệu','Sản phẩm','Chất liệu - gia công','Quy trình','Dự án','Liên hệ',
];
// ============================================================
// data/partners.js
// ============================================================

const PARTNER_LOGOS = [

  {
    name: "Partner 1",
    image: "/static/Logo đối tác/2.jpg"
  },

  {
    name: "Partner 2",
    image: "/static/Logo đối tác/3.jpg"
  },

  {
    name: "Partner 3",
    image: "/static/Logo đối tác/4.jpg"
  },

  {
    name: "Partner 4",
    image: "/static/Logo đối tác/5.jpg"
  },

  {
    name: "Partner 5",
    image: "/static/Logo đối tác/6.jpg"
  },

  {
    name: "Partner 6",
    image: "/static/Logo đối tác/7.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/8.jpg"
  },
  {
    name: "Partner 8",
    image: "/static/Logo đối tác/9.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/10.jpg"
  },{
    name: "Partner 7",
    image: "/static/Logo đối tác/11.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/12.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/13.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/14.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/15.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/16.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/17.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/18.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/19.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/20.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/21.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/22.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/23.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/24.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/25.jpg"
  },{
    name: "Partner 7",
    image: "/static/Logo đối tác/26.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/27.jpg"
  },
  {
    name: "Partner 7",
    image: "/static/Logo đối tác/28.jpg"
  },

];