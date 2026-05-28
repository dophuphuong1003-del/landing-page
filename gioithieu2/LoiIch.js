// ============================================================
//  components/LoiIch.js
//  Data: LOIICH_DATA  ← js/config.js
// ============================================================
const LoiIch = (() => {

  function _item({ num, title, desc }) {
    return `
      <div class="li-item reveal">
        <span class="li-num">${num}</span>
        <h4 class="li-item-title">${title}</h4>
        <p class="li-item-desc">${desc}</p>
      </div>`;
  }

  function render() {
    const [i1, i2, i3, i4] = LOIICH_DATA.items;
    return `
      <section id="loiich">
        <div class="li-header reveal">
          <h2 class="li-title">${LOIICH_DATA.title}</h2>
        </div>

        <div class="li-body container">

          <!-- CỘT TRÁI: item 1 + 3 -->
          <div class="li-col li-col-left">
            ${_item(i1)}
            ${_item(i3)}
          </div>

          <!-- GIỮA: chữ lớn -->
          <div class="li-center reveal">
      
            <div class="li-center-icon">
              <img
                src="${LOIICH_DATA.centerIcon}" alt="icon"
                class="li-center-img"
                onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
              />
              <div class="li-center-placeholder">🌿</div>
            </div>
           
          </div>

          <!-- CỘT PHẢI: item 2 + 4 -->
          <div class="li-col li-col-right">
            ${_item(i2)}
            ${_item(i4)}
          </div>

        </div>
      </section>`;
  }

  function init() {}

  return { render, init };
})();