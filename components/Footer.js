// ============================================================
//  components/Footer.js
// ============================================================

const Footer = (() => {

  function render() {
    const logoWord = CONFIG.companyName.split(' ')[0]; // 'PRINTPRO'
    const prefix   = logoWord.slice(0, -3);            // 'PRINT'
    const suffix   = logoWord.slice(-3);               // 'PRO'

    return `
      <footer>
        <div class="footer-logo">${prefix}<span>${suffix}</span> VIỆT NAM</div>
        <div class="footer-copy">© ${CONFIG.year} ${CONFIG.companyName}. All rights reserved.</div>
      </footer>

      <!-- Floating call button -->
      <a href="tel:${CONFIG.phone}" class="float-phone" title="Gọi Ngay">📞 </a>`;
  }

  function init() {}

  return { render, init };
})();