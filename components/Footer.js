// ============================================================
//  components/Footer.js
//  Data: CONFIG + FOOTER_DATA  ← js/config.js
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
      alt="MyFarm Banner"
      class="banner-image"
    />
        <div>
        </div>
      </div>`;
  }

  function _contacts() {
    return FOOTER_DATA.contacts.map(c => `
      <li class="ft-contact-item">
        <span class="ft-contact-icon">${c.icon}</span>
        <a href="${c.href}" class="ft-contact-text">${c.label}</a>
      </li>`
    ).join('');
  }

  function _socialIcon(key) {
    const map = {
      fb  : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>`,
      zalo: `<svg width="18" height="18" viewBox="0 0 40 40" fill="currentColor"><text y="30" font-size="26" font-weight="bold" font-family="Arial">Z</text></svg>`,
      yt  : `<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z"/></svg>`,
    };
    return map[key] || key;
  }

  function _socials() {
    return FOOTER_DATA.socials.map(s => `
      <a href="${s.href}" class="ft-social-btn" title="${s.label}" target="_blank" rel="noopener">
        ${_socialIcon(s.icon)}
      </a>`
    ).join('');
  }

  function render() {
    return `
      <footer id="footer">
      
        <div class="ft-body">
          <div class="ft-inner">

            <!-- CỘT 1: Logo + mô tả -->
            <div class="ft-col ft-col-brand">
              <div class="ft-logo">${_logo()}</div>
              <p class="ft-desc">${FOOTER_DATA.desc}</p>
            </div>

            <!-- CỘT 2: Thông tin liên hệ -->
            <div class="ft-col ft-col-contact">
              <p class="ft-col-title">THÔNG TIN LIÊN HỆ</p>
              <ul class="ft-contact-list">${_contacts()}</ul>
            </div>

            <!-- CỘT 3: Mạng xã hội -->
            <div class="ft-col ft-col-social">
              <p class="ft-col-title">KẾT NỐI VỚI ${CONFIG.companyName}</p>
              <div class="ft-social-row">${_socials()}</div>
            </div>

          </div>
        </div>

        <!-- Copyright -->
        <div class="ft-bottom">
          <p class="ft-copy">© ${CONFIG.year} ${CONFIG.companyName}. All rights reserved.</p>
        </div>

      </footer>

       <!-- Floating buttons -->
        <!-- Floating buttons -->
<div class="float-actions">

  <!-- FACEBOOK -->
  <a
    href="${FOOTER_DATA.socials[0].href}"
    target="_blank"
    rel="noopener noreferrer"
    class="float-btn float-facebook-btn"
    title="Facebook"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="white"
    >
      <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.03H7.9v-2.9h2.54V9.84c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.19 2.23.19v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.9h-2.34V22c4.78-.75 8.45-4.91 8.45-9.93z"/>
    </svg>
  </a>

  <!-- ZALO -->
  <a
    href="${FOOTER_DATA.socials[1].href}"
    target="_blank"
    rel="noopener noreferrer"
    class="float-btn float-zalo-btn"
    title="Zalo"
  >
    <span class="zalo-text">Zalo</span>
  </a>

  <!-- PHONE -->
  <a
    href="${FOOTER_DATA.contacts[0].href}"
    class="float-btn float-phone-btn"
    title="Gọi ngay"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      stroke-width="2.2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2
      19.79 19.79 0 0 1-8.63-3.07
      19.5 19.5 0 0 1-6.12-6.12
      A19.79 19.79 0 0 1 .99 4.18
      2 2 0 0 1 2.97 2h3a2 2 0 0 1 2 1.72
      c.12.9.35 1.77.67 2.6
      a2 2 0 0 1-.45 2.11L7.1 9.91
      a16 16 0 0 0 6 6l1.48-1.09
      a2 2 0 0 1 2.11-.45
      c.83.32 1.7.55 2.6.67
      A2 2 0 0 1 22 16.92z"/>
    </svg>
  </a>

</div>`;
  }

  function init() {}

  return { render, init };
})();