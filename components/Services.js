// ============================================================
//  components/Services.js
// ============================================================

const Services = (() => {

  function _card({ icon, title, desc }) {
    return `
      <div class="service-card reveal">
        <span class="svc-icon">${icon}</span>
        <div class="svc-title">${title}</div>
        <p class="svc-desc">${desc}</p>
      </div>`;
  }

  function render() {
    return `
      <section id="services">
        <div class="services-header reveal">
          <div class="section-label">Dịch Vụ Của Chúng Tôi</div>
          <h2 class="section-title">In Ấn <span class="red">Mọi Loại</span><br>Vật Tư</h2>
        </div>
        <div class="services-grid">
          ${SERVICES.map(_card).join('')}
        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();