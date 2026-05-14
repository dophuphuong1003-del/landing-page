// ============================================================
//  components/Process.js
// ============================================================

const Process = (() => {

  function _step({ num, title, desc }) {
    return `
      <div class="step reveal">
        <div class="step-circle">${num}</div>
        <div class="step-title">${title}</div>
        <p class="step-desc">${desc}</p>
      </div>`;
  }

  function render() {
    return `
      <section id="process">
        <div class="reveal">
          <div class="section-label">Quy Trình Đặt Hàng</div>
          <h2 class="section-title">Đặt Hàng <span class="red">Đơn Giản</span><br>Chỉ 5 Bước</h2>
        </div>
        <div class="process-steps">
          ${PROCESS_STEPS.map(_step).join('')}
        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();