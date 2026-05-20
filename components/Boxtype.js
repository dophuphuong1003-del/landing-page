// ============================================================
//  components/BoxTypes.js
// ============================================================
const BoxTypes = (() => {

  function render() {

    /* =========================
       FEATURED SLIDE
    ========================== */
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

      </div>
    `).join('');

    /* =========================
       POPUP PRODUCTS GRID
    ========================== */
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

        <!-- RIGHT -->
        <div class="boxtype-right">

          <div class="featured-header">

            <div class="featured-title">
              Sản Phẩm Nỗi Bật
            </div>

            <button
              class="view-all-btn"
              id="openProductsPopup"
            >
              Xem tất cả
            </button>

          </div>

          <!-- SLIDER -->
          <div class="featured-products">

            <div class="featured-track">
              ${featured}
              ${featured}
            </div>

          </div>

        </div>

      </div>

      <!-- =====================================
           PRODUCTS POPUP
      ====================================== -->
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

      <!-- =====================================
           IMAGE VIEWER
      ====================================== -->
      <div
        class="image-viewer-popup"
        id="imageViewerPopup"
      >

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

    /* =====================================
       PRODUCTS POPUP
    ====================================== */
    const popup =
      document.getElementById('productsPopup');

    const openBtn =
      document.getElementById('openProductsPopup');

    const closeBtn =
      document.getElementById('closeProductsPopup');

    const overlay =
      document.querySelector('.products-popup-overlay');

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

    /* =====================================
       IMAGE VIEWER
    ====================================== */
    const imagePopup =
      document.getElementById('imageViewerPopup');

    const viewerImage =
      document.getElementById('viewerImage');

    const viewerTitle =
      document.getElementById('viewerTitle');

    const closeImageBtn =
      document.getElementById('closeImageViewer');

    const imageOverlay =
      document.querySelector('.image-viewer-overlay');

    const imageCards =
      document.querySelectorAll('.open-image-popup');

    imageCards.forEach(card => {

      card.addEventListener('click', () => {

        const image = card.dataset.image;

        const name = card.dataset.name;

        viewerImage.src = image;

        viewerTitle.innerText = name;

        imagePopup.classList.add('active');

        document.body.style.overflow = 'hidden';

      });

    });
    function closeImagePopup(){
      imagePopup.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
    if(closeImageBtn){
      closeImageBtn.addEventListener(
        'click',
        closeImagePopup
      );
    }
    if(imageOverlay){
      imageOverlay.addEventListener(
        'click',
        closeImagePopup
      );
    }
    /* =====================================
       ESC CLOSE
    ====================================== */
    document.addEventListener('keydown', (e) => {
      if(e.key === 'Escape'){
        closePopup();
        closeImagePopup();
      }
    });
  }
  return {
    render,
    init
  };

})();