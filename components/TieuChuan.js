// ============================================================
//  components/TieuChuan.js
//  Data: TIEUCHUAN_DATA  ← js/config.js
// ============================================================
const TieuChuan = (() => {

  function _item({ num, title, icon, desc }) {
    return `
      <div class="tc-item reveal">
        <div class="tc-item-top">
          <span class="tc-num">${num}</span>
          <p class="tc-item-title">${title}</p>
        </div>
        <div class="tc-icon-wrap">
          <img
            src="${icon}"
            alt="${title}"
            class="tc-icon-img"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="tc-icon-placeholder">📦</div>
        </div>
        <p class="tc-item-desc">${desc}</p>
      </div>`;
  }

  function render() {
    return `
      <section id="tieuchuan">
        <div class="tc-inner container">

          <!-- HEADER: 2 cột -->
          <div class="tc-header reveal">
            <div class="tc-header-left">
              <p class="tc-label">${TIEUCHUAN_DATA.label}</p>
              <h2 class="tc-title">${TIEUCHUAN_DATA.title}</h2>
            </div>
            <p class="tc-intro">${TIEUCHUAN_DATA.intro}</p>
          </div>

          <!-- 3 ITEMS -->
          <div class="tc-grid">
            ${TIEUCHUAN_DATA.items.map(_item).join('')}
          </div>

        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();