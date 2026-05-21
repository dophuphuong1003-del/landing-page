// ============================================================
//  components/Footer.js (UPDATED UI ICON MODERN)
// ============================================================
const Footer = (() => {

  function _logo() {
    if (CONFIG.logoSrc) {
      return `<img src="${CONFIG.logoSrc}" alt="${CONFIG.companyName}" class="ft-logo-img" />`;
    }
    return `
      <div class="ft-logo-fallback">
        <img
          src="public/static/logo_dmt_footer.png"
          alt="Company Logo"
          class="ft-logo-img"
        />
      </div>`;
  }

  function _contacts() {
    return FOOTER_DATA.contacts.map(c => `
      <li class="ft-contact-item">
        <span class="ft-contact-icon">${c.icon}</span>
        <a  class="ft-contact-text">${c.label}</a>
      </li>
    `).join('');
  }

  // ===== MODERN ICONS (Lucide-style SVG) =====
  function _socialIcon(key) {
    const map = {
      fb: `<img src="public/static/footer/facebook_logo.png" class="icon-img" />`,

      zalo: `<img src="public/static/icon_of_zalo.png" class="icon-img" />`,

      phone:`<img src="public/static/footer/dienthoai_ai.png" class="icon-img" />`,
    };

    return map[key] || '';
  }

  function _socials() {
    return FOOTER_DATA.socials.map(s => `
      <a href="${s.href}"
         class="ft-social-btn"
         title="${s.label}"
         target="_blank"
         rel="noopener">
        ${_socialIcon(s.icon)}
      </a>
    `).join('');
  }

  function render() {
    return `
      <footer id="footer">

        <div class="ft-body">
          <div class="ft-inner">

            <!-- BRAND -->
            <div class="ft-col ft-col-brand">
              <div class="ft-logo">${_logo()}</div>
              <p class="ft-desc">${FOOTER_DATA.desc}</p>
              <p class="ft-desc2">${FOOTER_DATA.desc2}</p>
            </div>

            <!-- CONTACT -->
            <div class="ft-col ft-col-contact">
              <p class="ft-col-title">THÔNG TIN LIÊN HỆ</p>
              <ul class="ft-contact-list">${_contacts()}</ul>
            </div>

            <!-- SOCIAL -->
            <div class="ft-col ft-col-social">
              <p class="ft-col-title">KẾT NỐI VỚI ${CONFIG.companyName}</p>
              <div class="ft-social-row">${_socials()}</div>
            </div>

          </div>
        </div>

        <div class="ft-bottom">
          <p class="ft-copy">© ${CONFIG.year} ${CONFIG.companyName}. All rights reserved.</p>
        </div>

      </footer>

      <!-- FLOAT ACTIONS MODERN -->
      <div class="float-actions">

        <a href="${FOOTER_DATA.socials[0].href}"
        class="float-btn zalo"
        target="_blank"
        title="Zalo">
        <img src="public/static/footer/facebook_logo.png" class="zalo-icon-actions" /></a>

        <a href="${FOOTER_DATA.socials[1].href}"
        class="float-btn facebook"  
        target="_blank"
        title="Facebook">
        <img src="public/static/icon_of_zalo.png" class="zalo-icon-actions" /></a>

        <a href="${FOOTER_DATA.socials[2].href}"
           class="float-btn phone"
           title="Điện thoại">
          <img src="public/static/footer/dienthoai_ai.png" class="phone-icon-actions" /></a>

        </a>

      </div>
    `;
  }

  function init() {}

  return { render, init };
})();