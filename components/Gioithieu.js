// ============================================================
//  components/GioiThieu.js
//  Data: GIOITHIEU_DATA  ← js/config.js
// ============================================================
const Gioithieu = (() => {

  function render() {
    return `
      <section id="gioithieu">
        <div class="gt-inner">

          <!-- ẢNH TRÁI -->
          <div class="gt-img-wrap reveal-left">
            <img
              src="${GIOITHIEU_DATA.img}"
              alt="${GIOITHIEU_DATA.imgAlt}"
              class="gt-img"
              onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
            />
            <div class="gt-img-placeholder">
              <span>🖼️</span>
              <span class="gt-placeholder-text">${GIOITHIEU_DATA.imgAlt}</span>
            </div>
          </div>

          <!-- NỘI DUNG PHẢI -->
          <div class="gt-content reveal-right">
            <p class="gt-label">${GIOITHIEU_DATA.label}</p>
            <h2 class="gt-title">${GIOITHIEU_DATA.title}</h2>
            <p class="gt-desc">${GIOITHIEU_DATA.desc}</p>
          </div>

        </div>

        <!-- LOGO TRÒN GIỮA DƯỚI -->
        <div class="gt-banner-image reveal">
        <img 
        src="public/static/footer/group_14523.png" 
        alt="Banner"
        class="gt-banner-img"
                        />
        </div>

      </section>`;
  }

  function init() {}

  return { render, init };
})();