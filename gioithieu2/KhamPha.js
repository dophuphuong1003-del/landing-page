// ============================================================
//  components/KhamPha.js
//  Data: KHAMPHA_DATA  ← js/config.js
// ============================================================

const KhamPha = (() => {

  /* ============================================================
     ITEM
  ============================================================ */

  function _item({ title, content }, idx) {

    return `
      <div class="kp-item" id="kp-item-${idx}">

        <button
          class="kp-trigger"
          aria-expanded="false"
          data-idx="${idx}"
        >

          <span class="kp-item-title">
            ${title}
          </span>

          <span class="kp-icon">
            +
          </span>

        </button>

        <div
          class="kp-panel"
          id="kp-panel-${idx}"
          hidden
        >

          <p class="kp-content">
            ${content}
          </p>

        </div>

      </div>
    `;
  }

  /* ============================================================
     RENDER
  ============================================================ */

  function render() {

    return `
      <section id="khampha">

        <div class="kp-inner container">

          <!-- LEFT -->

          <div class="kp-left">

            <div class="kp-header reveal">

              <p class="kp-label">
                ${KHAMPHA_DATA.label}
              </p>

              <h2 class="kp-title">
                ${KHAMPHA_DATA.title}
              </h2>

            </div>

            <div class="kp-list reveal">

              ${KHAMPHA_DATA.items.map(_item).join('')}

            </div>

          </div>

          <!-- RIGHT -->

          <div class="kp-right reveal-right">

            <div class="kp-img-wrap">

              <div class="kp-shape"></div>

              <img
                src="${KHAMPHA_DATA.image}"
                alt="${KHAMPHA_DATA.imageAlt}"
                class="kp-img"
                onerror="this.style.display='none';"
              />

            </div>

          </div>

        </div>

      </section>
    `;
  }

  /* ============================================================
     INIT
  ============================================================ */

  function init() {

    document.querySelectorAll('.kp-trigger').forEach(btn => {

      btn.addEventListener('click', () => {

        const idx    = btn.dataset.idx;

        const panel  = document.getElementById(`kp-panel-${idx}`);

        const icon   = btn.querySelector('.kp-icon');

        const isOpen =
          btn.getAttribute('aria-expanded') === 'true';

        /* =========================
           CLOSE
        ========================= */

        if (isOpen) {

          btn.setAttribute('aria-expanded', 'false');

          icon.textContent = '+';

          btn.closest('.kp-item')
            .classList.remove('kp-open');

          panel.style.maxHeight = '0';

          setTimeout(() => {

            panel.hidden = true;

          }, 300);

        }

        /* =========================
           OPEN
        ========================= */

        else {

          panel.hidden = false;

          btn.setAttribute('aria-expanded', 'true');

          icon.textContent = '×';

          btn.closest('.kp-item')
            .classList.add('kp-open');

          panel.style.maxHeight =
            panel.scrollHeight + 'px';

        }

      });

    });

  }

  /* ============================================================
     EXPORT
  ============================================================ */

  return {
    render,
    init
  };

})();