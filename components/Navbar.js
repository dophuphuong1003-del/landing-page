// ============================================================
//  components/Navbar.js – PRINTPACK
// ============================================================
const Navbar = (() => {

  function render() {
    const links = NAV_LINKS.map(l =>
      `<li><a href="${l.href}">${l.label}</a></li>`
    ).join('');

    return `
    <nav id="navbar">
      <div class="nav-inner">

        <a href="#hero" class="nav-logo">
          <img src="public/static/logo_dmt.png" alt="DEMETER" class="logo-nav" />
        </a>

        <ul class="nav-links" id="navLinks">${links}</ul>

        <a href="tel:${CONFIG.phone.replace(/\s/g,'')}" class="nav-phone">
          📞 ${CONFIG.phone}
        </a>

        <div class="nav-hamburger" id="navHamburger">
          <span></span><span></span><span></span>
        </div>

      </div>
    </nav>`;
  }

  function init() {
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('navHamburger');
    const navLinks  = document.getElementById('navLinks');

    window.addEventListener('scroll', () =>
      navbar.classList.toggle('scrolled', window.scrollY > 40)
    );

    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  return { render, init };
})();