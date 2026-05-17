// ============================================================
//  components/PainPoints.js
// ============================================================
const PainPoints = (() => {

  function render() {

    const items = PAIN_POINTS.map(p => `

      <div class="pain-item reveal">

        <div class="pain-icon-wrap">

          <img
            src="${p.image}"
            alt="${p.text}"
            class="pain-icon-img"
          />

        </div>

        <p class="pain-text">
          ${p.text}
        </p>

      </div>

    `).join('');

    return `
    <section id="pain">

      <div class="container">

        <p class="pain-title">
          Bạn đang gặp những
          <strong> vấn đề này?</strong>
        </p>

        <div class="pain-grid">
          ${items}
        </div>

      </div>

    </section>
    `;
  }

  function init(){}

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
      <img
          src="public/static/DMTGiaiPhap.jpg"
          alt="giai phap"
          class="hero-banner"
        />
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

    /* LEFT CONTENT */
    const cards = BOX_TYPES.map(b => `
      <div class="box-type-card reveal">

        <div class="box-type-icon">
          ${b.icon}
        </div>

        <div class="box-type-name">
          ${b.label}
        </div>

      </div>
    `).join('');

    /* RIGHT FEATURED */
    const featured = FEATURED_PRODUCTS.map(b => `
      <div
        class="featured-product-card open-image-popup"
        data-image="${b.image}"
        data-name="${b.name}"
      >

        <img
          src="${b.image}"
          alt="${b.name}"
          class="featured-product-image"
        />

        <div class="featured-product-overlay">
          <div class="featured-product-title">
            ${b.name}
          </div>
        </div>

      </div>
    `).join('');

    /* POPUP PRODUCTS */
    const popupProducts = FEATURED_PRODUCTS.map(p => `
      <div
        class="popup-product-card open-image-popup"
        data-image="${p.image}"
        data-name="${p.name}"
      >

        <img
          src="${p.image}"
          alt="${p.name}"
          class="popup-product-image"
        />

        <div class="popup-product-name">
          ${p.name}
        </div>

      </div>
    `).join('');

    return `
    <section id="boxtypes">

      <div class="boxtype-layout container">

        <!-- LEFT -->
        <div class="boxtype-left">

          <div class="sec-center reveal">

            <h2 class="sec-title">
              Các Loại Hộp Giấy Mềm
              <span class="gold-text">
                Chúng Tôi Nhận In
              </span>
            </h2>

          </div>

          <div class="boxtypes-grid">
            ${cards}
          </div>

        </div>

        <!-- RIGHT -->
        <div class="boxtype-right">

          <div class="featured-header">

            <div class="featured-title">
              Sản phẩm nổi bật
            </div>

            <button
              class="view-all-btn"
              id="openProductsPopup"
            >
              Xem tất cả
            </button>

          </div>

          <div class="featured-products">

            <div class="featured-track">
              ${featured}
            </div>

          </div>

        </div>

      </div>

      <!-- PRODUCTS POPUP -->
      <div class="products-popup" id="productsPopup">

        <div class="products-popup-overlay"></div>

        <div class="products-popup-content">

          <div class="products-popup-top">

            <h3>
              Sản Phẩm Nổi Bật Của Chúng Tôi
            </h3>

            <button
              class="popup-close"
              id="closeProductsPopup"
            >
              ✕
            </button>

          </div>

          <div class="products-popup-grid">
            ${popupProducts}
          </div>

        </div>

      </div>

      <!-- IMAGE VIEWER -->
      <div class="image-viewer-popup" id="imageViewerPopup">

        <div class="image-viewer-overlay"></div>

        <div class="image-viewer-content">

          <button
            class="image-viewer-close"
            id="closeImageViewer"
          >
            ✕
          </button>

          <img
            src=""
            alt=""
            id="viewerImage"
            class="viewer-image"
          />

          <div
            class="viewer-title"
            id="viewerTitle"
          ></div>

        </div>

      </div>

    </section>
    `;
  }
  function init() {
    /* PRODUCTS POPUP */
    const popup = document.getElementById('productsPopup');
    const openBtn = document.getElementById('openProductsPopup');
    const closeBtn = document.getElementById('closeProductsPopup');
    const overlay = document.querySelector('.products-popup-overlay');
    if(openBtn){
      openBtn.addEventListener('click', () => {
        popup.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    }
    function closePopup(){
      popup.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
    if(closeBtn){
      closeBtn.addEventListener('click', closePopup);
    }
    if(overlay){
      overlay.addEventListener('click', closePopup);
    }
    /* IMAGE VIEWER */
    const imagePopup = document.getElementById('imageViewerPopup');
    const viewerImage = document.getElementById('viewerImage');
    const viewerTitle = document.getElementById('viewerTitle');
    const closeImageBtn = document.getElementById('closeImageViewer');
    const imageCards = document.querySelectorAll('.open-image-popup');
    imageCards.forEach(card => {
      card.addEventListener('click', () => {
        const image = card.dataset.image;
        const name = card.dataset.name;
        viewerImage.src = image;
        viewerTitle.innerText = name;
        imagePopup.classList.add('active');
      });
    });
    function closeImagePopup(){
      imagePopup.classList.remove('active');
    }
    if(closeImageBtn){
      closeImageBtn.addEventListener('click', closeImagePopup);
    }
    const imageOverlay = document.querySelector('.image-viewer-overlay');
    if(imageOverlay){
      imageOverlay.addEventListener('click', closeImagePopup);
    }
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        closePopup();
        closeImagePopup();
      }
    });
  }

  return { render, init };

})();
// ============================================================
//  components/Materials.js
// ============================================================
const Materials = (() => {

  function render() {

    /* =========================================================
       CHẤT LIỆU
    ========================================================= */
    const swatches = MATERIALS.map(m => `

      <div
        class="mat-swatch open-material-popup"
        data-images='${JSON.stringify([m.image])}'
        data-name="${m.name}"
      >

        <img
          src="${m.image}"
          alt="${m.name}"
          class="mat-circle"
        />

        <span class="mat-name">
          ${m.name}
        </span>

      </div>

    `).join('');

    /* =========================================================
       GIA CÔNG
    ========================================================= */
    const finishing = FINISHING.map(f => `

      <div
        class="fin-item reveal open-finishing-popup"
        data-images='${JSON.stringify(f.images)}'
        data-name="${f.name}"
      >

        <span class="fin-icon">
          ${f.icon}
        </span>

        <span class="fin-name">
          ${f.name}
        </span>

      </div>

    `).join('');

    return `
    <section id="materials">

      <div class="mat-finish-grid container">

        <!-- MATERIALS -->
        <div class="reveal">

          <p class="mat-title">
            CHẤT LIỆU
          </p>

          <div class="materials-row">
            ${swatches}
          </div>

        </div>

        <!-- FINISHING -->
        <div class="reveal">

          <p class="fin-title">
            GIA CÔNG
          </p>

          <div class="finishing-grid">
            ${finishing}
          </div>

        </div>

      </div>

      <!-- =====================================================
           POPUP
      ====================================================== -->
      <div
        class="material-popup"
        id="materialPopup"
      >

        <!-- overlay -->
        <div class="material-popup-overlay"></div>

        <!-- content -->
        <div class="material-popup-content">

          <!-- close -->
          <button
            class="material-popup-close"
            id="closeMaterialPopup"
          >
            ✕
          </button>

          <!-- slider -->
          <div class="material-slider-wrap">

            <!-- PREV -->
            <button
              class="material-slider-btn prev"
              id="materialPrevBtn"
            >
              ←
            </button>

            <!-- IMAGE -->
            <img
              src=""
              id="materialPopupImage"
              class="material-popup-image"
              alt=""
            />

            <!-- NEXT -->
            <button
              class="material-slider-btn next"
              id="materialNextBtn"
            >
              →
            </button>

          </div>

          <!-- title -->
          <div
            class="material-popup-title"
            id="materialPopupTitle"
          ></div>

        </div>

      </div>

    </section>
    `;
  }

  function init() {
    /* =========================================================
       ELEMENTS
    ========================================================= */
    const popup =
      document.getElementById('materialPopup');
    const popupImage =
      document.getElementById('materialPopupImage');
    const popupTitle =
      document.getElementById('materialPopupTitle');
    const closeBtn =
      document.getElementById('closeMaterialPopup');
    const overlay =
      document.querySelector('.material-popup-overlay');
    const prevBtn =
      document.getElementById('materialPrevBtn');
    const nextBtn =
      document.getElementById('materialNextBtn');
    /* =========================================================
       DATA
    ========================================================= */
    let currentImages = [];

    let currentIndex = 0;

    /* =========================================================
       UPDATE IMAGE
    ========================================================= */
    function updateImage(){

      popupImage.src =
        currentImages[currentIndex];

      /* Ẩn mũi tên nếu chỉ có 1 ảnh */
      if(currentImages.length <= 1){

        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';

      }else{

        prevBtn.style.display = 'flex';
        nextBtn.style.display = 'flex';

      }

    }

    /* =========================================================
       OPEN POPUP
    ========================================================= */
    const popupItems = document.querySelectorAll(
      '.open-material-popup, .open-finishing-popup'
    );

    popupItems.forEach(item => {

      item.addEventListener('click', () => {

        currentImages =
          JSON.parse(item.dataset.images);

        currentIndex = 0;

        popupTitle.innerText =
          item.dataset.name;

        updateImage();

        popup.classList.add('active');

        document.body.style.overflow = 'hidden';

      });

    });

    /* =========================================================
       NEXT IMAGE
    ========================================================= */
    nextBtn.addEventListener('click', () => {

      currentIndex++;

      if(currentIndex >= currentImages.length){
        currentIndex = 0;
      }

      updateImage();
    });
    /* =========================================================
       PREV IMAGE
    ========================================================= */
    prevBtn.addEventListener('click', () => {
      currentIndex--;
      if(currentIndex < 0){
        currentIndex = currentImages.length - 1;
      }
      updateImage();
    });
    /* =========================================================
       CLOSE POPUP
    ========================================================= */
    function closePopup(){
      popup.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
    if(closeBtn){
      closeBtn.addEventListener('click', closePopup);
    }
    if(overlay){
      overlay.addEventListener('click', closePopup);
    }
    /* =========================================================
       KEYBOARD
    ========================================================= */
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        closePopup();
      }
      if(e.key === 'ArrowRight'){
        nextBtn.click();
      }
      if(e.key === 'ArrowLeft'){
        prevBtn.click();
      }
    });

  }
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
      <div class="proj-card reveal">
        <img
          src="${p.image}"
          alt="${p.label}"
          class="proj-card-image"
        />
        <div class="proj-card-label">
          ${p.name}
        </div>

      </div>
    `).join('');
    const brands = BRANDS.map(b =>
      `<span class="brand-tag">${b}</span>`
    ).join('');

    return `
    <section id="projects">
      <div class="proj-testi-grid container">

        <!-- Projects -->
        <div>
          <div class="sec-label reveal">
            Dự Án Tiêu Biểu
          </div>

          <div class="projects-grid">
            ${projCards}
          </div>
          </div>
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
             <a href="#hero" class="nav-logo">
          <img src="../static/logo_DMT.png" alt="DEMETER" class="logo-nav" />
        </a>
            
          </div>
          <p class="footer-desc">Chuyên in hộp giấy mềm cao cấp theo yêu cầu.<br>Đồng hành cùng thương hiệu nâng tầm sản phẩm.</p>
        </div>

        <!-- Contact info -->
        <div>
          <p class="footer-col-title">Liên Hệ</p>
          <ul class="footer-info-list">
            <li>📞 <span></span></li>
            <li>✉️ <span></span></li>
            <li>📍 <span></span></li>
          </ul>
        </div>

        <!-- Menu -->
        <div>
          <p class="footer-col-title">Danh Mục</p>
          <ul class="footer-menu-list">${menuLinks}</ul>
          <p class="footer-ketnoi-title" style="margin-top:1.5rem">Kết Nối</p>
          <div class="social-row">
            <a href="https://www.facebook.com/DemeterForBusiness" class="social-btn" target="_blank">📘</a>
            <a href="https://zalo.me/84352574849" class="social-btn" target="_blank">💬</a>
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