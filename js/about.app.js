// ============================================================
//  js/app.js – Orchestrator PRINTPACK
// ============================================================

const App = (() => {

  // Component registry – render order = DOM order
  const ABOUT = [
    Navbar,
    Hero2,
    SuMenh,
    LoiIch,
    KhamPha,
    Banner,
    Footer,
  ];


  /* ── CUSTOM CURSOR ── */
  function _initCursor() {
    const cursor = document.getElementById('cursor');
    document.addEventListener('mousemove', e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top  = e.clientY + 'px';
    });
    document.querySelectorAll('a, button, .box-type-card, .proj-card, .fin-item, .mat-swatch, .pain-item').forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
  }

  /* ── SCROLL REVEAL (3 directions) ── */
  function _initReveal() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 70);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el));
  }

  /* ── SMOOTH SCROLL ── */
  function _initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
      a.addEventListener('click', e => {
        const id = a.getAttribute('href');
        const target = document.querySelector(id);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
  }

  /* ── ACTIVE NAV HIGHLIGHT ── */
  function _initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.style.color = '';
            a.style.background = '';
          });
          const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
          if (active) {
            active.style.color = 'var(--gold)';
            active.classList.add('active')
          }
        }
      });
    }, { threshold: 0.4 });

    sections.forEach(s => observer.observe(s));
  }

  /* ── SECURITY HEADERS (meta) – added to <head> ── */
  function _applySecurityMeta() {
    const metas = [
      { 'http-equiv': 'X-Frame-Options',        content: 'DENY' },
      { 'http-equiv': 'X-Content-Type-Options',  content: 'nosniff' },
      { name: 'referrer',                         content: 'strict-origin-when-cross-origin' },
    ];
    metas.forEach(attrs => {
      const m = document.createElement('meta');
      Object.entries(attrs).forEach(([k, v]) => m.setAttribute(k, v));
      document.head.appendChild(m);
    });
  }

  /* ── MOUNT ── */
  function mount() {
    const root = document.getElementById('app');

    // Render all components
    root.innerHTML = ABOUT.map(c => c.render()).join('\n');

    // Custom cursor element
    const cursorEl = document.createElement('div');
    cursorEl.id = 'cursor';
    document.body.appendChild(cursorEl);

    // Init each component
    ABOUT.forEach(c => c.init());

    // Global behaviours
    _applySecurityMeta();
    _initCursor();
    _initReveal();
    _initSmoothScroll();
    _initActiveNav();
  }

  return { mount };
})();

document.addEventListener('DOMContentLoaded', () => App.mount());