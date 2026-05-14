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
  { icon: '🎨', text: 'Màu in không đúng như file thiết kế' },
  { icon: '📦', text: 'Không biết chọn chất liệu phù hợp' },
  { icon: '💔', text: 'Hộp giấy dễ hư, không chắc chắn' },
  { icon: '📊', text: 'Số lượng tối thiểu quá cao' },
  { icon: '🚚', text: 'Giao hàng chậm, ảnh hưởng kế hoạch' },
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

const MATERIALS = [
  { name: 'Ivory',     bg: '#f5f0e8' },
  { name: 'Duplex',    bg: '#e8e8e8' },
  { name: 'Kraft',     bg: '#c4a882' },
  { name: 'Couche',    bg: '#dde8f0' },
  { name: 'Brillanta', bg: '#f0ede8' },
];

const FINISHING = [
  { icon: '✨', name: 'Ép Kim' },
  { icon: '🔷', name: 'Dập Nổi' },
  { icon: '🔆', name: 'UV Định Hình' },
  { icon: '🌟', name: 'Cán Mờ / Bóng' },
  { icon: '✂️', name: 'Bế Hình' },
];

const PROCESS_STEPS = [
  { num: '1', icon: '💬', title: 'Nhận yêu cầu' },
  { num: '2', icon: '📋', title: 'Tư vấn & báo giá' },
  { num: '3', icon: '✏️', title: 'Duyệt file thiết kế' },
  { num: '4', icon: '⚙️', title: 'Sản xuất' },
  { num: '5', icon: '🚚', title: 'Kiểm tra & giao hàng' },
];

const PROJECTS = [
  { icon: '💄', color: '#f9d6e8', label: 'Rosé Cosmetics' },
  { icon: '🍃', color: '#c8e6c9', label: 'Mộc Trà' },
  { icon: '🎋', color: '#b2dfdb', label: 'Green Luxury' },
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
  { label: 'Quy Trình',           href: '#process' },
  { label: 'Dự Án',               href: '#projects' },
  { label: 'Liên Hệ',             href: '#contact' },
];

const FOOTER_MENU = [
  'Giới thiệu','Sản phẩm','Chất liệu - gia công','Quy trình','Dự án','Liên hệ',
];