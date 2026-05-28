// ============================================================
//  components/KhongChiThietKe.js
//  Data: KHONGCHITHIETKE_DATA  ← js/config.js
// ============================================================
const KhongChiThietKe = (() => {

  function _feature({ icon, label }) {
    return `
      <div class="kctk-feat">
        <div class="kctk-feat-icon-wrap">
          <img
            src="${icon}"
            alt="${label}"
            class="kctk-feat-icon"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
          />
          <div class="kctk-feat-placeholder">📌</div>
        </div>
        <span class="kctk-feat-label">${label}</span>
        
      </div>`;
  }

  function render() {
    return `
      <section id="khongchithietke">
        <div class="kctk-inner container">

          <!-- NỘI DUNG TRÁI -->
          <div class="kctk-content reveal-left">
            <p class="kctk-label">${KHONGCHITHIETKE_DATA.label}</p>
            <h2 class="kctk-title">${KHONGCHITHIETKE_DATA.title}</h2>
            <p class="kctk-desc">${KHONGCHITHIETKE_DATA.desc}</p>
            <div class="kctk-features">
              ${KHONGCHITHIETKE_DATA.features.map(_feature).join('')}
            </div>
          </div>

          <!-- ẢNH PHẢI -->
          <div class="kctk-img-wrap reveal-right">
            
            <img
              src="${KHONGCHITHIETKE_DATA.img}"
              alt="${KHONGCHITHIETKE_DATA.imgAlt}"
              class="kctk-img"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            />
            <div class="kctk-img-placeholder">
              <span>🖼️</span>
              <span class="kctk-placeholder-text">${KHONGCHITHIETKE_DATA.imgAlt}</span>
            </div>
          </div>

        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();