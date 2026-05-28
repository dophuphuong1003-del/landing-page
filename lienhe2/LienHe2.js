// ============================================================
//  components/LienHe2.js
//  Data: LIENHE2_DATA  ← js/config.js
// ============================================================
const LienHe2 = (() => {

  function _contactItem({ icon, label, value }) {
    const icons = {
      phone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.07 2.18 2 2 0 012.04 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`,
      email: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
      addr : `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    };
    return `
      <li class="lh2-contact-item">
        <div class="lh2-contact-icon">${icons[icon] || icons.phone}</div>
        <div>
          <p class="lh2-contact-label">${label}</p>
          <p class="lh2-contact-value">${value}</p>
        </div>
      </li>`;
  }

  function render() {
  return `
    <section id="lienhe2">

      <div class="lh2-inner container">

        <!-- TOP TITLE -->

        <div class="lh2-top reveal">

          <div class="lh2-title-row">

            <h2 class="lh2-title">
              ${LIENHE2_DATA.titleLine1}<br>
              ${LIENHE2_DATA.titleLine2}<br>
              <span class="lh2-title-brand">
                ${LIENHE2_DATA.titleLine3}
              </span>
            </h2>

            <div class="lh2-logo-wrap">

              ${LIENHE2_DATA.logoSrc
                ? `
                  <img
                    src="${LIENHE2_DATA.logoSrc}"
                    alt="Logo"
                    class="lh2-logo-img"
                  />
                `
                : `
                  <div class="lh2-logo-fallback">📦</div>
                `
              }

              <div class="lh2-badges">
                ${LIENHE2_DATA.badges.map(b =>
                  `<span class="lh2-badge">${b}</span>`
                ).join('')}
              </div>

            </div>

          </div>

        </div>

        <!-- BOTTOM 2 COLUMNS -->

        <div class="lh2-bottom">

          <!-- LEFT -->

          <div class="lh2-left reveal-left">

            <p class="lh2-sub">
              ${LIENHE2_DATA.sub}
            </p>

            <a
              href="${LIENHE2_DATA.btnHref}"
              class="lh2-btn"
            >
              ${LIENHE2_DATA.btnText}
            </a>

          </div>

          <!-- RIGHT -->

          <div class="lh2-right reveal-right">

            <div class="lh2-card">

              <p class="lh2-card-title">
                Thông Tin Liên Hệ
              </p>

              <ul class="lh2-contact-list">
                ${LIENHE2_DATA.contacts.map(_contactItem).join('')}
              </ul>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}
  function init() {}

  return { render, init };
})();