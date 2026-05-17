// ============================================================
//  components/Partners.js
// ============================================================
const Partners = (() => {

  function render() {

    /* CHIA LOGO THÀNH 2 HÀNG */
    const half = Math.ceil(PARTNER_LOGOS.length / 2);

    const row1Data = PARTNER_LOGOS.slice(0, half);

    const row2Data = PARTNER_LOGOS.slice(half);

    /* ROW 1 */
    const row1 = row1Data.map(logo => `
      <div class="partner-logo-card">

        <img
          src="${logo.image}"
          alt="${logo.name}"
          class="partner-logo-img"
        />

      </div>
    `).join('');

    /* ROW 2 */
    const row2 = row2Data.map(logo => `
      <div class="partner-logo-card">

        <img
          src="${logo.image}"
          alt="${logo.name}"
          class="partner-logo-img"
        />

      </div>
    `).join('');

    return `
    <section id="partners">

      <div class="container">

        <div class="sec-center reveal">

          <h2 class="sec-title">
            Đơn vị
            <span class="gold-text">
              Đồng Hành
            </span>
          </h2>

        </div>

        <!-- ROW 1 -->
        <div class="partners-slider">

          <div class="partners-track partners-track-left">
            ${row1}
          </div>

        </div>

        <!-- ROW 2 -->
        <div class="partners-slider">

          <div class="partners-track partners-track-right">
            ${row2}
          </div>

        </div>

      </div>

    </section>
    `;
  }

  function init(){}

  return { render, init };

})();