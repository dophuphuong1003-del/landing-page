// ============================================================
//  components/Hero2.js
//  Data: HERO2_DATA  ← js/config.js
// ============================================================
const Hero2 = (() => {

  function render() {
    const paras = HERO2_DATA.desc.split('\n\n').map(p =>
      `<p class="h2-para">${p}</p>`
    ).join('');

    return `
      <section id="hero2">

        <!-- HÀNG TRÊN: tiêu đề lớn + [logo + badges] cùng khối -->
        <div class="h2-top-row">
          <h1 class="h2-title">
            ${HERO2_DATA.titleLine1}<br>
            <span class="h2-title-line2">
              ${HERO2_DATA.titleLine2}
              <!-- logo + badges nằm inline sau dòng 2 -->
              <span class="h2-logo-badge-group">
                ${HERO2_DATA.logoSrc
                  ? `<img src="${HERO2_DATA.logoSrc}" alt="logo" class="h2-logo" />`
                  : `<div class="h2-logo-empty"></div>`}
                <div class="h2-badges">
                  ${HERO2_DATA.badges.map(b => `<span class="h2-badge">${b}</span>`).join('')}
                </div>
              </span>
            </span>
          </h1>
        </div>

        <!-- HÀNG DƯỚI: ảnh trái + text phải -->
        <div class="h2-bottom-row">

          <div class="h2-img-col reveal-left">
            <div class="h2-green-block"></div>
            <img
              src="${HERO2_DATA.img}"
              alt="${HERO2_DATA.imgAlt}"
              class="h2-img"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            />
            <div class="h2-img-ph">
              <span>🖼️</span>
              <small>${HERO2_DATA.imgAlt}</small>
            </div>
          </div>

          <div class="h2-text-col reveal-right">
            ${paras}
          </div>

        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();