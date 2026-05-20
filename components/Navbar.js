// ============================================================
//  components/Navbar.js – PRINTPACK (UPDATED)
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

        <ul class="nav-links" id="navLinks">
          ${links}
        </ul>

        <a 
          href="tel:${CONFIG.phone.replace(/\s/g,'')}" 
          class="nav-contact-btn"
        >
          📞 Liên hệ ngay
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
    const links     = document.querySelectorAll('.nav-links a');
    const sections  = document.querySelectorAll('section');

    // ========================================================
    // 1. Scroll navbar background
    // ========================================================
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 40);
    });

    // ========================================================
    // 2. Mobile menu toggle
    // ========================================================
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    links.forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });

    // ========================================================
    // 3. ACTIVE MENU (Scroll Spy)
    // ========================================================
    const setActiveMenu = () => {
      let current = '';

      sections.forEach(section => {
        const top = section.offsetTop - 120;
        const height = section.clientHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          current = section.getAttribute('id');
        }
      });

      links.forEach(link => {
        link.classList.remove('active');

        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', setActiveMenu);
    setActiveMenu(); // chạy lần đầu
  }

  return { render, init };
})();