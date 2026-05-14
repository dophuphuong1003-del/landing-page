// ============================================================
//  components/WhyUs.js
// ============================================================

const WhyUs = (() => {

  function _card({ num, title, desc }) {
    return `
      <div class="why-card reveal">
        <div class="why-num">${num}</div>
        <div class="why-title">${title}</div>
        <p class="why-desc">${desc}</p>
      </div>`;
  }

  function render() {
    return `
      <section id="why">
        <div class="reveal">
          <div class="section-label" style="color:#E02020">Lý Do Lựa Chọn</div>
          <h2 class="section-title">Tại Sao Khách Hàng<br>Tin <span class="red">Tưởng</span> Chúng Tôi?</h2>
        </div>
        <div class="why-grid">
          ${REASONS.map(_card).join('')}
        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();