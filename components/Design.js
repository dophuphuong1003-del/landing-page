// ============================================================
//  components/ThietKe.js
// ============================================================
const ThietKe = (() => {

  function _card({ icon, title, desc, img, alt }) {

    return `
      <div class="tk-card reveal">

        <!-- CONTENT -->
        <div class="tk-card-body">

          <!-- IMAGE ICON -->
          <div class="tk-icon-wrap">

            <img
              src="${icon}"
              alt="${title}"
              class="tk-icon-img"
            />

          </div>

          <!-- TITLE -->
          <p class="tk-card-title">
            ${title}
          </p>
          <div class="tk-line"></div>

          <!-- DESC -->
          <p class="tk-card-desc">
            ${desc}
          </p>

        </div>

        <!-- IMAGE -->
        <div class="tk-img-wrap">

          <img
            src="${img}"
            alt="${alt}"
            class="tk-img"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />

          <!-- FALLBACK -->
          <div class="tk-img-placeholder">

            <span class="tk-placeholder-icon">
              🖼️
            </span>

            <span class="tk-placeholder-text">
              ${alt}
            </span>

          </div>

        </div>

      </div>
    `;
  }

  function render() {

    return `
      <section id="thietke">

        <!-- HEADER -->
        <div class="tk-header reveal">

          <h2 class="tk-title">
            Thiết Kế Toàn Diện
          </h2>

          <p class="tk-sub">
            Đồng hành cùng doanh nghiệp từ ý tưởng đến hiện thực,
            xây dựng hình ảnh chuyên nghiệp và tạo dấu ấn riêng cho thương hiệu
          </p>

        </div>

        <!-- GRID -->
        <div class="tk-grid">
          ${THIETKE_CARDS.map(_card).join('')}
        </div>

      </section>
    `;
  }

  function init(){}

  return { render, init };

})();