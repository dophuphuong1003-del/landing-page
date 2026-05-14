// ============================================================
//  components/Hero.js – PRINTPACK
// ============================================================
const Hero = (() => {

  const FEATURES = [
    { icon: '🆓', text: 'Tư vấn miễn phí – Báo giá tận tâm' },
    { icon: '✅', text: 'Chất lượng ổn định – Màu sắc chuẩn' },
    { icon: '⚡', text: 'Tiến độ nhanh – Giao hàng đúng hẹn' },
    { icon: '💰', text: 'Giá cạnh tranh – Tối ưu chi phí' },
  ];

  function render() {
    const featuresHTML = FEATURES.map(f => `
      <li>
        <div class="feat-icon">${f.icon}</div>
        <span>${f.text}</span>
      </li>`).join('');

    const boxCards = BOX_TYPES.slice(0, 4).map((b, i) => `
      <div class="box-card box-card-${i + 1}" style="background:linear-gradient(135deg,${b.color},${b.color}cc)">
        ${b.icon}
        <div class="box-card-label">${b.label}</div>
      </div>`).join('');

    return `
    <section id="hero">
      <div class="hero-inner">

        <!-- LEFT -->
        <div class="hero-left reveal-left">
          <div class="hero-badge-row">
            
            <span class="hero-badge"><span class="dot"></span> 200+ khách hàng</span>
          </div>
          <div class="hero-title-main">IN HỘP GIẤY MỀM</div>
          <div class="hero-title-gold">THEO YÊU CẦU</div>
          <p class="hero-sub">${CONFIG.sub}</p>
          <ul class="hero-features">${featuresHTML}</ul>
          <div class="hero-actions">
            
            <a href="https://zalo.me/84896549310" target="_blank" class="btn-outline-navy">
              💬 Tư vấn qua Zalo
            </a>
          </div>
          <p class="hero-hotline">Hoặc gọi trực tiếp: <strong>089 6549 310</strong></p>
        </div>

        <!-- RIGHT – animated box mockup -->
        <div class="hero-right reveal-right">
          <div class="hero-box-stage">
            <div class="box-card box-main" style="background:linear-gradient(135deg,${BOX_TYPES[0].color},${BOX_TYPES[0].color}99)">
              ${BOX_TYPES[0].icon}
              <div class="box-card-label">${BOX_TYPES[0].label}</div>
            </div>
            ${BOX_TYPES.slice(1, 5).map((b, i) => `
            <div class="box-card box-card-${i + 1}" style="background:linear-gradient(135deg,${b.color},${b.color}cc)">
              ${b.icon}
              <div class="box-card-label">${b.label}</div>
            </div>`).join('')}
          </div>
        </div>

      </div>
    </section>`;
  }

  function init() {}

  return { render, init };
})();