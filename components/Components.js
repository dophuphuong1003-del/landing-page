// ============================================================
//  components/PainPoints.js
// ============================================================
const PainPoints = (() => {
  function render() {
    const items = PAIN_POINTS.map(p => `
      <div class="pain-item reveal">
        <div class="pain-icon-wrap">${p.icon}</div>
        <p class="pain-text">${p.text}</p>
      </div>`).join('');
    return `
    <section id="pain">
      <div class="container">
        <p class="pain-title">Bạn đang gặp những <strong>vấn đề này?</strong></p>
        <div class="pain-grid">${items}</div>
      </div>
    </section>`;
  }
  function init() {}
  return { render, init };
})();

// ============================================================
//  components/Solutions.js
// ============================================================
const Solutions = (() => {
  function render() {
    const list = SOLUTIONS.map(s => `
      <li>
        <div class="sol-check">✓</div>
        <span>${s}</span>
      </li>`).join('');
    return `
    <section id="solutions">
      <div class="solutions-inner container">

        <div class="solutions-img-grid reveal-left">
          <div class="sol-img-box" style="background:linear-gradient(135deg,#1a2b4a,#243660);color:white;font-size:3.5rem">🏭</div>
          <div class="sol-img-box" style="background:linear-gradient(135deg,#fce4f0,#f9d6e8);font-size:2.5rem">💄</div>
          <div class="sol-img-box" style="background:linear-gradient(135deg,#e8f5e9,#c8e6c9);font-size:2.5rem">📦</div>
        </div>

        <div class="reveal-right">
          <div class="sec-label">Giải Pháp Từ</div>
          <h2 class="sec-title">${CONFIG.companyName}</h2>
          <div class="gold-line"></div>
          <ul class="solutions-list">${list}</ul>
        </div>

      </div>
    </section>`;
  }
  function init() {}
  return { render, init };
})();

// ============================================================
//  components/BoxTypes.js
// ============================================================
const BoxTypes = (() => {
  function render() {
    const cards = BOX_TYPES.map(b => `
      <div class="box-type-card reveal">
        <div class="box-type-img" style="background:${b.color}">${b.icon}</div>
        <div class="box-type-name">${b.label}</div>
      </div>`).join('');
    return `
    <section id="boxtypes">
      <div class="sec-center reveal">
        <h2 class="sec-title">Các Loại Hộp Giấy Mềm <span class="gold">Chúng Tôi Nhận In</span></h2>
        <div class="gold-line center"></div>
      </div>
      <div class="boxtypes-grid container">${cards}</div>
      <div class="boxtypes-more">
        
      </div>
    </section>`;
  }
  function init() {
    const slider = document.querySelector('.boxtypes-slider');

  let scrollAmount = 0;

  setInterval(() => {
    scrollAmount += 270;

    if (scrollAmount >= slider.scrollWidth - slider.clientWidth) {
      scrollAmount = 0;
    }

    slider.scrollTo({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, 3000);
  }
  return { render, init };
})();

// ============================================================
//  components/Materials.js
// ============================================================
const Materials = (() => {
  function render() {
    const swatches = MATERIALS.map(m => `
      <div class="mat-swatch">
        <div class="mat-circle" style="background:${m.bg}"></div>
        <span class="mat-name">${m.name}</span>
      </div>`).join('');

    const finishing = FINISHING.map(f => `
      <div class="fin-item reveal">
        <span class="fin-icon">${f.icon}</span>
        <span class="fin-name">${f.name}</span>
      </div>`).join('');

    return `
    <section id="materials">
      <div class="mat-finish-grid container">
        <div class="reveal">
          <p class="mat-title">CHẤT LIỆU</p>
          <div class="materials-row">${swatches}</div>
        </div>
        <div class="reveal">
          <p class="fin-title">GIA CÔNG</p>
          <div class="finishing-grid">${finishing}</div>
        </div>
      </div>
    </section>`;
  }
  function init() {}
  return { render, init };
})();

// ============================================================
//  components/Process.js
// ============================================================
const Process = (() => {
  function render() {
    const steps = PROCESS_STEPS.map((s, i) => {
      const connector = i < PROCESS_STEPS.length - 1
        ? '<div class="process-connector"></div>' : '';
      return `
        <div class="proc-step reveal">
          <div class="proc-circle">
            ${s.icon}
            <div class="proc-num">${s.num}</div>
          </div>
          <div class="proc-title">${s.title}</div>
        </div>
        ${connector}`;
    }).join('');
    return `
    <section id="process">
      <div class="sec-center reveal">
        <h2 class="sec-title">QUY <span class="gold">TRÌNH</span> LÀM VIỆC</h2>
        <div class="gold-line center"></div>
      </div>
      <div class="process-track container">${steps}</div>
    </section>`;
  }
  function init() {}
  return { render, init };
})();

// ============================================================
//  components/Projects.js  (+ Testimonials embedded)
// ============================================================
const Projects = (() => {
  function render() {
    const projCards = PROJECTS.map(p => `
      <div class="proj-card reveal" style="background:${p.color}">
        ${p.icon}
        <div class="proj-card-label">${p.label}</div>
      </div>`).join('');

    const stars = '★'.repeat(TESTIMONIALS[0].rating);

    const brands = BRANDS.map(b =>
      `<span class="brand-tag">${b}</span>`
    ).join('');

    return `
    <section id="projects">
      <div class="proj-testi-grid container">

        <!-- Projects -->
        <div>
          <div class="sec-label reveal">Dự Án Tiêu Biểu</div>
          <div class="projects-grid">${projCards}</div>
          <div class="proj-more reveal">
            <a href="" class="btn-border-gold">Xem Thêm Dự Án →</a>
          </div>
        </div>

        <!-- Testimonials -->
        <div class="reveal-right">
          <div class="sec-label">Khách Hàng Nói Về Chúng Tôi</div>
          <div class="testi-box">
            <div class="testi-quote-icon">"</div>
            <div class="testi-stars">${stars}</div>
            <p class="testi-text">${TESTIMONIALS[0].text}</p>
            <div class="testi-author">${TESTIMONIALS[0].name}</div>
            <div class="testi-role">${TESTIMONIALS[0].role}</div>
          </div>
          <div class="brands-row">${brands}</div>
        </div>

      </div>
    </section>`;
  }
  function init() {}
  return { render, init };
})();
/*
// ============================================================
//  components/Contact.js
// ============================================================
const Contact = (() => {
  function _serviceOptions() {
    return BOX_TYPES.map(b =>
      `<option value="${b.label}">${b.label}</option>`
    ).join('');
  }
  function render() {
    return `
    <section id="contact">
      <div class="contact-inner-grid">

        <!-- Left -->
        <div class="contact-left reveal-left">
          <div class="sec-label" style="color:var(--gold)">Cần Báo Giá Hộp Giấy?</div>
          <h2 class="sec-title">Gửi thông tin để được <span class="gold">tư vấn & báo giá nhanh nhất!</span></h2>
          <div class="gold-line"></div>
          <p class="contact-sub-text">Đội ngũ chuyên gia của chúng tôi sẽ phản hồi trong vòng 30 phút trong giờ hành chính.</p>
          <div class="contact-img-box">📦</div>
        </div>

        <!-- Form -->
        <div class="reveal-right">
          <form class="contact-form" id="contactForm" novalidate>
            <div class="form-row-2">
              <div class="form-group">
                <input type="text"  name="name"  placeholder="Họ tên *" required />
              </div>
              <div class="form-group">
                <input type="tel"   name="phone" placeholder="Số điện thoại *" required />
              </div>
            </div>
            <div class="form-group">
              <input type="text" name="requirement" placeholder="Nhu cầu / Loại hộp cần in" />
            </div>
            <div class="form-row-3">
              <div class="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div class="form-group">
                <input type="text"  name="quantity" placeholder="Số lượng dự kiến" />
              </div>
            </div>
            <button type="submit" class="form-submit-btn">📋 NHẬN BÁO GIÁ NGAY</button>
            <div id="form-success">✅ Cảm ơn! Chúng tôi sẽ liên hệ với bạn sớm nhất.</div>
          </form>
        </div>

      </div>
    </section>`;
  }

  function init() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    let lastSubmit = 0;
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const now   = Date.now();
      const name  = this.querySelector('[name=name]').value.trim();
      const phone = this.querySelector('[name=phone]').value.trim();
      const phoneOk = /^(0|\+84)[0-9]{8,10}$/.test(phone.replace(/\s/g,''));

      if (!name || name.length < 2) { _shake(this.querySelector('[name=name]')); return; }
      if (!phone || !phoneOk)       { _shake(this.querySelector('[name=phone]')); return; }
      if (now - lastSubmit < 30000) { alert('Vui lòng chờ 30 giây trước khi gửi lại.'); return; }

      lastSubmit = now;
      const btn = this.querySelector('.form-submit-btn');
      btn.textContent = '⏳ Đang gửi...';
      btn.disabled = true;

      setTimeout(() => {
        btn.style.display = 'none';
        document.getElementById('form-success').style.display = 'block';
        form.reset();
      }, 1200);
    });
  }

  function _shake(el) {
    el.style.borderColor = '#ff6b6b';
    el.focus();
    el.animate([
      {transform:'translateX(0)'},{transform:'translateX(-6px)'},
      {transform:'translateX(6px)'},{transform:'translateX(0)'}
    ], { duration: 300 });
    setTimeout(() => el.style.borderColor = '', 2000);
  }

  return { render, init };
})();
*/
// ============================================================
//  components/Footer.js
// ============================================================
const Footer = (() => {
  function render() {
    const menuLinks = FOOTER_MENU.map(m =>
      `<li><a href="#">${m}</a></li>`
    ).join('');
    return `
    <footer>
      <div class="footer-top">

        <!-- Brand -->
        <div class="footer-brand">
          <div class="footer-logo-row">
            <div class="footer-logo-icon">📦</div>
            <div>
              <div class="footer-logo-name">${CONFIG.companyName}</div>
              <div class="footer-logo-sub">${CONFIG.slogan}</div>
            </div>
          </div>
          <p class="footer-desc">Chuyên in hộp giấy mềm cao cấp theo yêu cầu.<br>Đồng hành cùng thương hiệu nâng tầm sản phẩm.</p>
        </div>

        <!-- Contact info -->
        <div>
          <p class="footer-col-title">Liên Hệ</p>
          <ul class="footer-info-list">
            <li>📞 <span>${CONFIG.phone}</span></li>
            <li>✉️ <span>${CONFIG.email}</span></li>
            <li>📍 <span>${CONFIG.address}</span></li>
          </ul>
        </div>

        <!-- Menu -->
        <div>
          <p class="footer-col-title">Danh Mục</p>
          <ul class="footer-menu-list">${menuLinks}</ul>
          <p class="footer-ketnoi-title" style="margin-top:1.5rem">Kết Nối</p>
          <div class="social-row">
            <a href="${CONFIG.facebook}" class="social-btn" target="_blank">📘</a>
            <a href="https://zalo.me/${CONFIG.zalo}" class="social-btn" target="_blank">💬</a>
            <a href="${CONFIG.youtube || '#'}" class="social-btn" target="_blank">▶️</a>
          </div>
        </div>

      </div>
      <div class="footer-bottom">
        <p class="footer-copy">© ${CONFIG.year} ${CONFIG.companyName}. All rights reserved.</p>
      </div>
    </footer>

    <!-- Floating action buttons -->
    <div class="float-actions">
      <a href="https://zalo.me/84352574849" target="_blank" class="float-btn float-zalo-btn" title="Zalo">💬</a>
      <a href="tel:0352574849" class="float-btn float-phone-btn" title="Gọi ngay">📞</a>
    </div>`;
  }
  function init() {}
  return { render, init };
})();