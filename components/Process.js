// ============================================================
//  components/QuyTrinh.js
//  Data: QUYTRINH_STEPS  ← js/config.js
// ============================================================
const QuyTrinh = (() => {

  function _step({ num, img, alt, title, desc,desc2,desc3 }) {
    return `
      <div class="qt-step reveal">
        <div class="qt-img-wrap">
          <img
            src="${img}"
            alt="${alt}"
            class="qt-img"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="qt-img-placeholder">
            <span class="qt-placeholder-icon">🖼️</span>
            <span class="qt-placeholder-text">${alt}</span>
          </div>
          <div class="qt-num">${num}</div>
        </div>
        <div class="qt-step-body">
          <p class="qt-step-title">${title}</p>
          <p class="qt-step-desc">${desc}</p>
          <p class="qt-step-desc">${desc2}</p>
          <p class="qt-step-desc">${desc3}</p>
        </div>
      </div>`;
  }

  function render() {
  return `
    <section id="quytrinh">

      <div class="qt-header reveal">

        <!-- LEFT -->
        <div class="qt-header-left">
          <p class="qt-label">
            Quy Trình Thiết Kế &amp; In Ấn Bao Bì
          </p>

          <h2 class="qt-title">
            Từ Ý Tưởng Đến Thành Phẩm
          </h2>
        </div>

        <!-- RIGHT -->
        <p class="qt-sub">
          ${CONFIG.companyName} FOR BUSINESS xây dựng quy trình làm việc rõ ràng nhằm đảm bảo tính thẩm mỹ, chất lượng in ấn và tiến độ triển khai cho từng dự án bao bì.
        </p>

      </div>

      <div class="qt-grid">
        ${QUYTRINH_STEPS.map(_step).join('')}
      </div>

    </section>
  `;
}

  function init() {}

  return { render, init };
})();