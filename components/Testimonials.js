// ============================================================
//  components/Testimonials.js
// ============================================================

const Testimonials = (() => {

  function _card({ name, role, text }) {
    return `
      <div class="testi-card reveal">
        <div class="stars">★★★★★</div>
        <p class="testi-quote">${text}</p>
        <div class="testi-name">${name}</div>
        <div class="testi-role">${role}</div>
      </div>`;
  }

  function render() {
    return `
      <section id="testimonials">
        <div class="reveal">
          <div class="section-label">Khách Hàng Nói Gì</div>
          <h2 class="section-title">Hơn 500 Doanh Nghiệp<br><span class="red">Tin Dùng</span></h2>
        </div>
        <div class="testi-grid">
          ${TESTIMONIALS.map(_card).join('')}
        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();
